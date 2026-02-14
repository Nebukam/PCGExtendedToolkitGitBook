---
icon: filter
---

# Custom Filters

**Filters evaluate points and return pass/fail.** The system stacks them in an AND-chain — all filters must pass for a point to pass. Your job is to define what "pass" means for your filter, and the framework handles the rest: factory lifecycle, manager orchestration, caching, and parallel evaluation.

A filter is three classes working together: a Config struct holding settings, a Factory (UObject) that creates filter instances, and a Filter instance (lightweight, `TSharedFromThis`) that does the actual per-point evaluation. A fourth class — the Provider Settings — is the PCG node that users interact with in the graph editor.

{% file src="../../.gitbook/assets/pcgex-custom-filters.md" %}
<i class="fa-claude">:claude:</i> Claude Skill
{% endfile %}

***

#### Architecture

```
UPCGExFilterProviderSettings (PCG Node)
  └─ Config UPROPERTY                      ← user-facing settings
  └─ CreateFactory() → UPCGExFilterFactory
      │
UPCGExPointFilterFactoryData (UObject)     ← configuration holder, creates instances
  └─ Config copy                           ← settings from the provider
  └─ CreateFilter() → IFilter
      │
PCGExPointFilter::ISimpleFilter            ← runtime evaluator (TSharedFromThis)
  └─ Init() fetches buffers               ← reads attributes from point data
  └─ Test(int32 Index) → bool             ← per-point evaluation

PCGExPointFilter::FManager                 ← AND-stack orchestrator
  └─ Init() creates instances from factories
  └─ Test() evaluates the stack (short-circuit on first failure)
  └─ Batch Test() with optional parallel execution
```

**Filter type hierarchy:**

```
UPCGExFilterFactoryData                    ← abstract base
  └─ UPCGExPointFilterFactoryData          ← point filters (most custom filters)
      └─ UPCGExClusterFilterFactoryData    ← cluster-aware filters
          ├─ UPCGExNodeFilterFactoryData   ← vertex/node filters (IVtxFilter)
          └─ UPCGExEdgeFilterFactoryData   ← edge filters (IEdgeFilter)
      └─ UPCGExFilterCollectionFactoryData ← collection-level filters

PCGExPointFilter::IFilter                  ← abstract base
  └─ ISimpleFilter                         ← recommended base for point filters
  └─ ICollectionFilter                     ← evaluates once per collection

PCGExClusterFilter::IFilter                ← cluster-aware base
  └─ IVtxFilter                            ← Test(FNode)
  └─ IEdgeFilter                           ← Test(FEdge)
```

For most custom filters, subclass `UPCGExPointFilterFactoryData` and `PCGExPointFilter::ISimpleFilter`. The cluster filter variants add topology access but follow the same pattern.

***

#### What You Need

1. **Config struct** (`USTRUCT`) — holds your filter's settings (selectors, thresholds, comparison operators)
2. **Factory class** subclassing `UPCGExPointFilterFactoryData` — owns the Config, creates filter instances via `CreateFilter()`
3. **Filter class** in the `PCGExPointFilter` namespace subclassing `ISimpleFilter` — implements `Init()` to fetch buffers and `Test(int32)` for per-point evaluation
4. **Provider Settings class** subclassing `UPCGExFilterProviderSettings` — the PCG node, with `PCGEX_NODE_INFOS` macro and Config UPROPERTY
5. **`PCGEX_CREATE_FILTER_FACTORY` macro** in your `.cpp` — generates `CreateFactory()` implementation

***

#### Step-by-Step: A Minimal Filter

The Constant filter is the simplest built-in example — it returns a fixed boolean value. Here's the pattern, annotated:

**1. Config struct**

```cpp
USTRUCT(BlueprintType)
struct FPCGExMyFilterConfig
{
    GENERATED_BODY()

    /** Your filter settings go here. Mark overridable for PCG graph override pins. */
    UPROPERTY(BlueprintReadWrite, EditAnywhere, Category = Settings,
        meta=(PCG_Overridable))
    float Threshold = 0.5f;

    /** Attribute to read from. */
    UPROPERTY(BlueprintReadWrite, EditAnywhere, Category = Settings,
        meta=(PCG_Overridable))
    FPCGAttributePropertyInputSelector OperandA;
};
```

**2. Factory class**

The factory is a UObject — it lives in the PCG context's managed object pool and creates lightweight filter instances on demand.

```cpp
UCLASS(MinimalAPI, BlueprintType, ClassGroup = (Procedural), Category="PCGEx|Filter")
class UPCGExMyFilterFactory : public UPCGExPointFilterFactoryData
{
    GENERATED_BODY()

public:
    UPROPERTY()
    FPCGExMyFilterConfig Config;

    virtual TSharedPtr<PCGExPointFilter::IFilter> CreateFilter() const override
    {
        return MakeShared<PCGExPointFilter::FMyFilter>(this);
    }

    // Optional: register attribute dependencies for preloading
    virtual void RegisterBuffersDependencies(FPCGExContext* InContext,
        PCGExData::FFacadePreloader& FacadePreloader) const override
    {
        FacadePreloader.Register<float>(InContext, Config.OperandA);
    }
};
```

**3. Filter instance**

The filter is lightweight (`TSharedFromThis`, not UObject). It fetches attribute buffers during `Init()` and evaluates per-point in `Test()`.

```cpp
namespace PCGExPointFilter
{
    class FMyFilter final : public ISimpleFilter
    {
    public:
        explicit FMyFilter(const TObjectPtr<const UPCGExMyFilterFactory>& InFactory)
            : ISimpleFilter(InFactory), TypedFilterFactory(InFactory)
        {
        }

        const TObjectPtr<const UPCGExMyFilterFactory> TypedFilterFactory;

        // Attribute buffer — fetched during Init
        TSharedPtr<PCGExData::TBuffer<float>> OperandA;

        virtual bool Init(FPCGExContext* InContext,
            const TSharedPtr<PCGExData::FFacade>& InPointDataFacade) override
        {
            if (!ISimpleFilter::Init(InContext, InPointDataFacade)) { return false; }

            // Fetch the attribute buffer
            OperandA = PointDataFacade->GetBroadcaster<float>(
                TypedFilterFactory->Config.OperandA);

            if (!OperandA)
            {
                // Attribute not found — initialization failed
                // The FManager will apply InitializationFailurePolicy
                return false;
            }

            return true;
        }

        virtual bool Test(const int32 PointIndex) const override
        {
            return OperandA->Read(PointIndex) > TypedFilterFactory->Config.Threshold;
        }
    };
}
```

**4. Provider Settings (the PCG node)**

This is the node users see in the PCG graph editor. It creates the factory via the `PCGEX_CREATE_FILTER_FACTORY` macro.

```cpp
UCLASS(MinimalAPI, BlueprintType, ClassGroup = (Procedural), Category="PCGEx|Filter")
class UPCGExMyFilterProviderSettings : public UPCGExFilterProviderSettings
{
    GENERATED_BODY()

public:
#if WITH_EDITOR
    PCGEX_NODE_INFOS_CUSTOM_SUBTITLE(
        MyFilterFactory,
        "Filter : My Filter",
        "Description of what this filter does.",
        PCGEX_FACTORY_NAME_PRIORITY)
#endif

    /** Filter Config. */
    UPROPERTY(BlueprintReadWrite, EditAnywhere, Category = Settings,
        meta=(PCG_Overridable, ShowOnlyInnerProperties))
    FPCGExMyFilterConfig Config;

    virtual UPCGExFactoryData* CreateFactory(FPCGExContext* InContext,
        UPCGExFactoryData* InFactory) const override;

#if WITH_EDITOR
    virtual FString GetDisplayName() const override;
#endif
};
```

**5. Implementation (.cpp)**

```cpp
#include "PCGExMyFilter.h"

// This macro generates the CreateFactory() body:
// creates factory UObject → copies policies → copies Config → calls Init
PCGEX_CREATE_FILTER_FACTORY(My)

#if WITH_EDITOR
FString UPCGExMyFilterProviderSettings::GetDisplayName() const
{
    return TEXT("My Filter");
}
#endif
```

The `PCGEX_CREATE_FILTER_FACTORY` macro expects naming conventions:

* Provider: `UPCGEx<ID>FilterProviderSettings`
* Factory: `UPCGEx<ID>FilterFactory`

It generates a `CreateFactory()` that allocates the factory, copies `InitializationFailurePolicy`, `MissingDataPolicy`, and `Config`, then calls `Init()` to validate. If `Init()` fails, the factory is destroyed and `nullptr` is returned.

***

#### Dual-Input Settings (Input Shorthands)

Many filters let users choose between an attribute and a constant value. The modern approach uses **input shorthand structs** — a single UPROPERTY that bundles the `Input` mode toggle, attribute selector, and constant value into one compact field. No manual `EditCondition` wiring needed.

```cpp
// In your config struct — one line per dual-input field:
UPROPERTY(BlueprintReadWrite, EditAnywhere, Category = Settings,
    meta=(PCG_Overridable))
FPCGExInputShorthandSelectorBoolean OperandB =
    FPCGExInputShorthandSelectorBoolean(FName("MyAttribute"), true);
    //                                   default attribute name, default constant
```

Available shorthand types: `FPCGExInputShorthandSelectorBoolean`, `Float`, `Double`, `Double01`, `DoubleAbs`, `Integer32`, `Vector`, `Vector2`, `Vector4`, `Rotator`, `Transform`, `String`, `Name`. There are also `FPCGExInputShorthandName*` variants that use a plain `FName` instead of a full `FPCGAttributePropertyInputSelector` for the attribute field.

Each shorthand bundles three fields — `Input` (the `EPCGExInputValueType` toggle), `Attribute` (the selector), and `Constant` (the fallback value) — with custom editor UI that shows the right controls based on the current mode.

In the filter instance, resolve the shorthand per-point via `TSettingValue<T>`:

```cpp
TSharedPtr<PCGExDetails::TSettingValue<bool>> OperandB;

// In Init():
OperandB = PCGExDetails::MakeSettingValue(
    TypedFilterFactory->Config.OperandB, PointDataFacade);

// In Test():
bool Value = OperandB->Read(PointIndex);
```

{% hint style="info" %}
Older filters still use the legacy pattern with separate `CompareAgainst` enum + attribute selector + constant UPROPERTYs + `PCGEX_SETTING_VALUE_DECL` macro. Input shorthands are the preferred approach for new code — they reduce boilerplate, provide consistent UI, and handle buffer dependency registration via `RegisterBufferDependencies()`.
{% endhint %}

***

#### Cluster Filters

For filters that need topology access (neighbor count, edge lengths, adjacency), subclass the cluster filter base instead:

* **Vtx filter**: Factory → `UPCGExNodeFilterFactoryData`, Instance → `PCGExClusterFilter::IVtxFilter`, Provider → `UPCGExVtxFilterProviderSettings`
* **Edge filter**: Factory → `UPCGExEdgeFilterFactoryData`, Instance → `PCGExClusterFilter::IEdgeFilter`, Provider → `UPCGExEdgeFilterProviderSettings`

Cluster filters receive the `FCluster` and `EdgeDataFacade` during `Init()`. The `IVtxFilter::Test(int32)` automatically resolves the index to an `FNode`, and `IEdgeFilter::Test(int32)` resolves to an `FEdge`. You override `Test(FNode)` or `Test(FEdge)` respectively.

***

#### How the FManager Works

The `FManager` aggregates filters into an AND-stack:

1. **Init** — creates filter instances from factories. Handles `InitializationFailurePolicy`: on failure, the filter either errors, always-passes, or always-fails.
2. **PostInit** — sorts filters by `Priority` (lower = evaluated first), builds a raw-pointer `Stack` array for cache-friendly iteration.
3. **Test** — evaluates the stack. Short-circuits on first failure. Results can be cached in the `Results` array when `bCacheResults` is true.
4. **Batch Test** — accepts a scope/range, optionally runs in parallel via `ParallelFor`. Returns the number of passing items.

The cluster-aware `PCGExClusterFilter::FManager` extends this by routing cluster filter initialization through the cluster `Init()` path (with Cluster + EdgeDataFacade), while regular point filters still go through the standard path.

***

#### Reference Implementations

| Filter       | Path                                                             | Pattern                                                         |
| ------------ | ---------------------------------------------------------------- | --------------------------------------------------------------- |
| Constant     | `PCGExFilters/Public/Filters/Points/PCGExConstantFilter.h`       | Simplest possible — no attribute access, fixed boolean return   |
| Bool Compare | `PCGExFilters/Public/Filters/Points/PCGExBooleanCompareFilter.h` | Attribute access + comparison + dual-input (attribute/constant) |
| Edge Length  | `PCGExFilters/Public/Filters/Edges/`                             | Cluster edge filter — accesses edge data from topology          |

Start with the Constant filter to understand the wiring, then look at Bool Compare for the attribute-access pattern.

***

#### Related

* Source: `PCGExFilters/Public/Core/PCGExPointFilter.h` — IFilter, ISimpleFilter, FManager
* Source: `PCGExFilters/Public/Core/PCGExClusterFilter.h` — IVtxFilter, IEdgeFilter
* Source: `PCGExFilters/Public/Core/PCGExFilterFactoryProvider.h` — PCGEX\_CREATE\_FILTER\_FACTORY macro
* Concept: [Filters](../../working-with-pcgex/filters/)
* Concept: [Filter Composition](../../working-with-pcgex/filters/filter-composition.md)
