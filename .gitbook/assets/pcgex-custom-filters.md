# PCGEx Custom Filter Development Guide

## Architecture Overview

PCGEx filters follow a three-layer factory pattern:

```
Provider Settings (UPCGSettings) → Factory (UObject) → Filter Instance (TSharedFromThis)
```

- **Provider Settings**: The PCG node. Declares pins, exposes config, creates the factory.
- **Factory**: Lives on the UObject, holds shared prepared data. Creates lightweight filter instances.
- **Filter Instance**: Per-facade runtime evaluator. Cheap to create, evaluated per-point or per-collection.

---

## Class Hierarchy

### Factory Classes

```
UPCGExFactoryData
  └─ UPCGExFilterFactoryData           ← abstract base, has Init/DomainCheck/Supports*
       ├─ UPCGExPointFilterFactoryData  ← point filters (FilterPoint type)
       └─ UPCGExFilterCollectionFactoryData ← collection-only filters (FilterCollection type)
```

### Filter Instance Classes

```
PCGExPointFilter::IFilter               ← abstract base, all Test() overloads
  ├─ ISimpleFilter                      ← Node/Edge Test() are final, delegate to Test(int32)
  └─ ICollectionFilter                  ← All Test() are final, return cached bCollectionTestResult
```

### Provider Settings Classes

```
UPCGExFactoryProviderSettings
  └─ UPCGExFilterProviderSettings       ← point filter providers (FPCGExDataTypeInfoFilterPoint)
       └─ UPCGExFilterCollectionProviderSettings ← collection filter providers (FPCGExDataTypeInfoFilterCollection)
```

---

## Choosing Your Base Class

### Point-Only Filter
For filters that evaluate individual points using attributes or spatial data.

| Layer | Base Class |
|-------|-----------|
| Factory | `UPCGExPointFilterFactoryData` |
| Filter | `ISimpleFilter` |
| Provider | `UPCGExFilterProviderSettings` |

Override `Test(int32)`. Optionally override `Test(FProxyPoint)` if you support proxy evaluation.

**Examples**: CompareFilter, NumericCompareFilter, GameplayTagsFilter

### Collection-Only Filter
For filters that evaluate metadata on the entire dataset (tags, bounds, entry count). No per-point logic.

| Layer | Base Class |
|-------|-----------|
| Factory | `UPCGExFilterCollectionFactoryData` |
| Filter | `ICollectionFilter` |
| Provider | `UPCGExFilterCollectionProviderSettings` |

Override `Test(FPointIO, FPointIOCollection)`. The base `ICollectionFilter::Init()` calls your Test() eagerly and caches the result. All per-point Test() calls are `final` and return the cached `bCollectionTestResult`.

**Examples**: TagCheckFilter, AttributeCheckFilter, EntryCountFilter

### Dual-Use Filter (Point + Collection)
For filters that can work at either granularity. The result is the same for all points in a collection when used in collection mode.

| Layer | Base Class |
|-------|-----------|
| Factory | `UPCGExPointFilterFactoryData` |
| Filter | `ISimpleFilter` |
| Provider | `UPCGExFilterProviderSettings` |

Override `SupportsCollectionEvaluation()` on the factory to return `true` (always or conditionally).

In your filter's `Init()`, compute the collection-level result once and cache it in `bCollectionTestResult`. In `Test(int32)`, return the cached value. Override `Test(FPointIO, FPointIOCollection)` for direct collection-level evaluation.

**Examples**: DistanceFilter, BoundsFilter, InclusionFilter, DataMatchFilter

---

## Factory Lifecycle

```
CreateFactory() → Init() → [WantsPreparation() → Prepare()] → CreateFilter() per facade
```

### 1. CreateFactory (Provider → Factory)

The `PCGEX_CREATE_FILTER_FACTORY` macro generates this:

```cpp
// In .cpp
PCGEX_CREATE_FILTER_FACTORY(MyFilter)

// Expands to:
UPCGExFactoryData* UPCGExMyFilterFilterProviderSettings::CreateFactory(FPCGExContext* InContext, UPCGExFactoryData* InFactory) const {
    UPCGExMyFilterFilterFactory* NewFactory = InContext->ManagedObjects->New<UPCGExMyFilterFilterFactory>();
    NewFactory->InitializationFailurePolicy = InitializationFailurePolicy;
    NewFactory->MissingDataPolicy = MissingDataPolicy;
    NewFactory->Config = Config;
    Super::CreateFactory(InContext, NewFactory);
    if(!NewFactory->Init(InContext)){ InContext->ManagedObjects->Destroy(NewFactory); return nullptr; }
    return NewFactory;
}
```

The macro copies `Config` from provider to factory. If you have additional members to copy (e.g., `MatchingDetails`), either:
- Set them up in `Prepare()` from Config values (preferred), or
- Write a manual `CreateFactory()` instead of using the macro

### 2. Init (Factory Validation)

Called immediately after creation. Default implementation runs `DomainCheck()`.

```cpp
// Override for additional validation
virtual bool Init(FPCGExContext* InContext) override
{
    // Custom validation here
    return Super::Init(InContext);
}
```

### 3. DomainCheck

Determines if the filter only accesses `@Data` domain attributes (collection metadata, not per-point). Controls the default `SupportsCollectionEvaluation()`.

- `UPCGExFilterFactoryData::DomainCheck()` → `false`
- `UPCGExFilterCollectionFactoryData::DomainCheck()` → `true`

Override if your filter conditionally supports data-domain-only evaluation:

```cpp
bool UPCGExMyFilterFactory::DomainCheck()
{
    return Config.MyInput == EPCGExInputValueType::Constant
        || PCGExMetaHelpers::IsDataDomainAttribute(Config.MySelector);
}
```

### 4. WantsPreparation / Prepare

Override when you need to load data from input pins before filter instances are created.

```cpp
virtual bool WantsPreparation(FPCGExContext* InContext) override { return true; }

virtual PCGExFactories::EPreparationResult Prepare(
    FPCGExContext* InContext,
    const TSharedPtr<PCGExMT::FTaskManager>& TaskManager) override
{
    // Load targets, build octrees, init matchers, etc.
    // Store results as factory members (shared across all filter instances)

    return Super::Prepare(InContext, TaskManager); // Always call Super last
}
```

Return values:
- `EPreparationResult::Success` — continue normally
- `EPreparationResult::MissingData` — handled by MissingDataPolicy (Fail/Pass/Error)

### 5. CreateFilter (Per-Facade Instantiation)

Called once per input facade. The filter instance stores a `TObjectPtr` back to the factory.

```cpp
TSharedPtr<PCGExPointFilter::IFilter> UPCGExMyFilterFactory::CreateFilter() const
{
    return MakeShared<PCGExPointFilter::FMyFilter>(this);
}
```

---

## Filter Instance Lifecycle

```
Constructor → Init(Context, Facade) → PostInit() → [Test() calls] → Destructor
```

### Init

Called by `FManager::Init()` for each filter. This is where you:
- Fetch attribute readers from the facade
- Cache config values
- Pre-compute collection-level results if applicable

```cpp
bool FMyFilter::Init(FPCGExContext* InContext, const TSharedPtr<PCGExData::FFacade>& InPointDataFacade)
{
    if (!IFilter::Init(InContext, InPointDataFacade)) { return false; }  // MUST call base

    // Fetch attribute readers
    MyReader = InPointDataFacade->GetBroadcaster<double>(TypedFilterFactory->Config.MySelector);
    if (!MyReader) { return false; }

    return true;
}
```

**If Init fails**: Handled by `InitializationFailurePolicy`:
- `Error`: Warning logged, filter skipped
- `Pass`: Constant-true filter injected
- `Fail`: Constant-false filter injected, all other filters discarded

### PostInit

Called after all filters in the stack are Init'd. Default allocates the `Results` cache array. Rarely needs overriding.

---

## Test() Overloads

| Method | When Called | Must Override? |
|--------|-----------|---------------|
| `Test(int32 Index)` | Per-point evaluation | Yes (ISimpleFilter) |
| `Test(FProxyPoint)` | Context-free evaluation | If SupportsProxyEvaluation |
| `Test(FNode)` | Cluster node evaluation | Final in ISimpleFilter (delegates to int32) |
| `Test(FEdge)` | Cluster edge evaluation | Final in ISimpleFilter (delegates to int32) |
| `Test(FPointIO, FPointIOCollection)` | Collection evaluation | If SupportsCollectionEvaluation |

### bCollectionTestResult Caching

The `bCollectionTestResult` member on `IFilter` is the standard way to cache a data-level result. Two patterns use it:

**Pattern A — ICollectionFilter (automatic):**
`ICollectionFilter::Init()` calls `Test(FPointIO)` and stores the result. All per-point Test() overloads are final and return it.

**Pattern B — ISimpleFilter (manual, for dual-use filters):**
You compute the result in `Init()` and store it yourself:

```cpp
bool FMyDualFilter::Init(FPCGExContext* InContext, const TSharedPtr<PCGExData::FFacade>& InPointDataFacade)
{
    if (!IFilter::Init(InContext, InPointDataFacade)) { return false; }

    // Compute once for the whole collection
    bCollectionTestResult = DoMyDataLevelCheck(InPointDataFacade);
    return true;
}

bool FMyDualFilter::Test(const int32 PointIndex) const
{
    return bCollectionTestResult;  // Same for every point
}
```

---

## SupportsCollectionEvaluation vs SupportsProxyEvaluation

### SupportsCollectionEvaluation

Declares that the filter can evaluate at the collection level. If `false` and a node needs collection evaluation, the filter is rejected with a warning.

```cpp
// Always supports collection eval (data-level check, no per-point attributes needed)
virtual bool SupportsCollectionEvaluation() const override { return true; }

// Conditionally supports it
virtual bool SupportsCollectionEvaluation() const override { return Config.bCheckAgainstDataBounds; }
```

**Default**: Returns `bOnlyUseDataDomain` (result of `DomainCheck()`).

### SupportsProxyEvaluation

Declares that the filter can evaluate a `FProxyPoint` — a standalone point with Transform + Bounds but **no attribute access**. Used for lightweight pre-filtering.

```cpp
// Only works with constants (no attribute readers needed)
virtual bool SupportsProxyEvaluation() const override
{
    return Config.CompareAgainst == EPCGExInputValueType::Constant;
}
```

**Default**: `false`.

---

## FManager (Filter Stack)

The `FManager` aggregates filters into an AND-stack. All filters must pass for a point to pass (short-circuits on first failure).

### Key Members

- `bWillBeUsedWithCollections` — set by the calling node; propagated to each filter
- `bCacheResultsPerFilter` — enables per-filter result caching in `Results` array
- `Stack` — raw pointer array for cache-friendly iteration

### How Nodes Use It

```cpp
// In node's Process():
FilterManager = MakeShared<PCGExPointFilter::FManager>(PointDataFacade);
FilterManager->bWillBeUsedWithCollections = true;  // if needed
if (!FilterManager->Init(InContext, FilterFactories)) { return false; }

// Per-point evaluation:
if (FilterManager->Test(PointIndex)) { /* point passed all filters */ }

// Batch evaluation:
TArray<int8> FilterResults;
FilterManager->Test(Scope, FilterResults);
```

---

## Common Patterns

### Loading Target Data in Prepare()

```cpp
PCGExFactories::EPreparationResult UPCGExMyFilterFactory::Prepare(
    FPCGExContext* InContext, const TSharedPtr<PCGExMT::FTaskManager>& TaskManager)
{
    const TSharedPtr<PCGExData::FPointIOCollection> Targets =
        MakeShared<PCGExData::FPointIOCollection>(
            InContext, PCGExCommon::Labels::SourceTargetsLabel,
            PCGExData::EIOInit::NoInit, true);

    if (Targets->IsEmpty()) { return PCGExFactories::EPreparationResult::MissingData; }

    TargetFacades.Reserve(Targets->Pairs.Num());
    for (int32 i = 0; i < Targets->Pairs.Num(); i++)
    {
        TargetFacades.Add(MakeShared<PCGExData::FFacade>(Targets->Pairs[i].ToSharedRef()));
    }

    // Build octrees, matchers, etc. from TargetFacades...

    return Super::Prepare(InContext, TaskManager);
}
```

Keep facades alive in the factory — downstream objects (tag weak pointers, octrees) may reference their data.

### Declaring Input Pins

```cpp
TArray<FPCGPinProperties> UPCGExMyFilterProviderSettings::InputPinProperties() const
{
    TArray<FPCGPinProperties> PinProperties = Super::InputPinProperties();

    // Target points
    PCGEX_PIN_POINTS(PCGExCommon::Labels::SourceTargetsLabel, TEXT("Target points."), Required)

    // Match rules (from PCGExMatching module)
    FPCGExMatchingDetails TempDetails;
    TempDetails.Mode = Config.Mode;
    PCGExMatching::Helpers::DeclareMatchingRulesInputs(TempDetails, PinProperties);

    return PinProperties;
}
```

### Attribute-or-Constant Values

Use `PCGEX_SETTING_VALUE_DECL`/`IMPL` for settings that can come from an attribute or a constant:

```cpp
// In config struct (header):
PCGEX_SETTING_VALUE_DECL(Threshold, double)

// In .cpp:
PCGEX_SETTING_VALUE_IMPL(FMyConfig, Threshold, double, CompareAgainst, ThresholdSelector, ThresholdConstant)
```

Then in filter Init:
```cpp
ThresholdGetter = TypedFilterFactory->Config.GetValueSettingThreshold(PCGEX_QUIET_HANDLING);
if (!ThresholdGetter->Init(InPointDataFacade)) { return false; }
```

And in Test:
```cpp
const double Value = ThresholdGetter->Read(PointIndex);
```

### Registering Buffer Dependencies

If your filter reads attributes, register them for preloading:

```cpp
void UPCGExMyFilterFactory::RegisterBuffersDependencies(
    FPCGExContext* InContext, PCGExData::FFacadePreloader& FacadePreloader) const
{
    Super::RegisterBuffersDependencies(InContext, FacadePreloader);
    if (Config.CompareAgainst == EPCGExInputValueType::Attribute)
    {
        FacadePreloader.Register<double>(InContext, Config.MySelector);
    }
}
```

---

## Gotchas

### Collection Filter vs Point Filter with SupportsCollectionEvaluation

These are **not the same thing**:

- `UPCGExFilterCollectionFactoryData` + `ICollectionFilter`: Collection-**only**. Lives in the collection filter pin ecosystem. Per-point Test() overloads are all final and return the cached result.

- `UPCGExPointFilterFactoryData` + `ISimpleFilter` + `SupportsCollectionEvaluation()=true`: **Dual-use**. Lives in the point filter pin ecosystem but can also be used where collection evaluation is needed. You manually cache `bCollectionTestResult` in Init() and return it from Test(int32).

Choose dual-use when the filter's logic is inherently data-level but you want it to be usable in point filter pins (which is where most nodes consume filters).

### IsCacheable

Override `IsCacheable()` to return `false` on your provider settings if the filter depends on external pin data (targets, match rules). This prevents the PCG system from caching stale results when upstream data changes.

### Thread Safety in Test()

`Test()` methods run in parallel across threads. They must be **read-only** against shared state. All mutable work (attribute readers, octrees, etc.) must be set up during Init().

### Factory Lifetime

Factory members (`TargetFacades`, `DataMatcher`, octrees) must stay alive for the entire execution. They're stored on the UObject factory and shared across all filter instances. Don't Reset() or clear them in BeginDestroy() — the engine handles UObject lifecycle.

### MissingDataPolicy

Set `ShowMissingDataPolicy_Internal()` to return `true` on your provider settings if the filter has input data pins (targets, bounds, etc.). This exposes the policy dropdown so users can choose Fail/Pass/Error behavior when the pin is empty.

---

## Minimal Template: Point Filter

```cpp
// === Header ===
#pragma once
#include "CoreMinimal.h"
#include "Core/PCGExFilterFactoryProvider.h"
#include "Core/PCGExPointFilter.h"
#include "PCGExMyFilter.generated.h"

USTRUCT(BlueprintType)
struct FPCGExMyFilterConfig
{
    GENERATED_BODY()

    UPROPERTY(BlueprintReadWrite, EditAnywhere, Category = Settings)
    double Threshold = 100.0;

    UPROPERTY(BlueprintReadWrite, EditAnywhere, Category = Settings)
    bool bInvert = false;
};

UCLASS(MinimalAPI, BlueprintType, ClassGroup = (Procedural), Category="PCGEx|Filter")
class UPCGExMyFilterFactory : public UPCGExPointFilterFactoryData
{
    GENERATED_BODY()
public:
    UPROPERTY()
    FPCGExMyFilterConfig Config;

    virtual TSharedPtr<PCGExPointFilter::IFilter> CreateFilter() const override;
};

namespace PCGExPointFilter
{
    class FMyFilter final : public ISimpleFilter
    {
    public:
        explicit FMyFilter(const TObjectPtr<const UPCGExMyFilterFactory>& InFactory)
            : ISimpleFilter(InFactory), TypedFilterFactory(InFactory) {}

        const TObjectPtr<const UPCGExMyFilterFactory> TypedFilterFactory;

        virtual bool Init(FPCGExContext* InContext, const TSharedPtr<PCGExData::FFacade>& InPointDataFacade) override;
        virtual bool Test(const int32 PointIndex) const override;
        virtual ~FMyFilter() override {}
    };
}

UCLASS(MinimalAPI, BlueprintType, ClassGroup = (Procedural), Category="PCGEx|Filter")
class UPCGExMyFilterProviderSettings : public UPCGExFilterProviderSettings
{
    GENERATED_BODY()
public:
#if WITH_EDITOR
    PCGEX_NODE_INFOS_CUSTOM_SUBTITLE(MyFilterFactory, "Filter : My Filter", "Description.", PCGEX_FACTORY_NAME_PRIORITY)
#endif

    UPROPERTY(BlueprintReadWrite, EditAnywhere, Category = Settings, meta=(PCG_Overridable, ShowOnlyInnerProperties))
    FPCGExMyFilterConfig Config;

    virtual UPCGExFactoryData* CreateFactory(FPCGExContext* InContext, UPCGExFactoryData* InFactory) const override;

#if WITH_EDITOR
    virtual FString GetDisplayName() const override;
#endif
};
```

```cpp
// === CPP ===
#include "Filters/PCGExMyFilter.h"
#include "Data/PCGExData.h"

#define LOCTEXT_NAMESPACE "PCGExMyFilter"
#define PCGEX_NAMESPACE MyFilter

TSharedPtr<PCGExPointFilter::IFilter> UPCGExMyFilterFactory::CreateFilter() const
{
    return MakeShared<PCGExPointFilter::FMyFilter>(this);
}

bool PCGExPointFilter::FMyFilter::Init(FPCGExContext* InContext, const TSharedPtr<PCGExData::FFacade>& InPointDataFacade)
{
    if (!IFilter::Init(InContext, InPointDataFacade)) { return false; }
    // Setup readers, cache config, etc.
    return true;
}

bool PCGExPointFilter::FMyFilter::Test(const int32 PointIndex) const
{
    // Your per-point logic here
    const bool bResult = /* ... */;
    return TypedFilterFactory->Config.bInvert ? !bResult : bResult;
}

PCGEX_CREATE_FILTER_FACTORY(My)

#if WITH_EDITOR
FString UPCGExMyFilterProviderSettings::GetDisplayName() const
{
    return TEXT("My Filter");
}
#endif

#undef LOCTEXT_NAMESPACE
#undef PCGEX_NAMESPACE
```

## Minimal Template: Dual-Use Filter (Point + Collection)

Same as above, but add to the factory:

```cpp
// Factory
virtual bool SupportsCollectionEvaluation() const override { return true; }
```

And in the filter, cache the collection result in Init and return it from Test:

```cpp
// Filter
bool FMyDualFilter::Init(FPCGExContext* InContext, const TSharedPtr<PCGExData::FFacade>& InPointDataFacade)
{
    if (!IFilter::Init(InContext, InPointDataFacade)) { return false; }

    // Compute once for the whole collection
    bCollectionTestResult = ComputeDataLevelResult(InPointDataFacade);
    return true;
}

bool FMyDualFilter::Test(const int32 PointIndex) const
{
    return bCollectionTestResult;
}

// Optional: direct collection-level path
bool FMyDualFilter::Test(const TSharedPtr<PCGExData::FPointIO>& IO,
                         const TSharedPtr<PCGExData::FPointIOCollection>& ParentCollection) const
{
    return ComputeDataLevelResult(IO);
}
```
