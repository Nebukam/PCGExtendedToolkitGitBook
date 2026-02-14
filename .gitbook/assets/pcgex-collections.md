# PCGEx Collections Module

## Overview

The PCGExCollections module provides a hierarchical, weighted asset collection system with runtime distribution, variant selection, and a serializable "Collection Map" for stateless per-point asset references. It supports static meshes, actors, and PCG data assets with subcollection recursion, category filtering, and property overrides.

---

## Module Location

```
Source/PCGExCollections/
├── Public/
│   ├── PCGExCollections.h                      (Module interface)
│   ├── PCGExCollectionsCommon.h                (Enums, labels)
│   ├── Core/
│   │   ├── PCGExAssetCollection.h              (Base collection + entry + cache)
│   │   ├── PCGExAssetCollectionTypes.h         (Type registry)
│   │   ├── PCGExAssetGrammar.h                 (Grammar for subdivision)
│   │   └── PCGExCollectionHelpers.h            (Static utilities)
│   ├── Collections/
│   │   ├── PCGExMeshCollection.h               (Mesh entries + ISM/SM descriptors)
│   │   ├── PCGExActorCollection.h              (Actor class entries)
│   │   ├── PCGExPCGDataAssetCollection.h       (PCG data asset entries)
│   │   └── PCGExCollectionPropertyTypes.h      (Property type defs)
│   ├── Elements/                               (PCG nodes)
│   ├── Details/                                (Config structs)
│   └── Helpers/
│       └── PCGExCollectionsHelpers.h           (Runtime: Distribution, Packing, Sources)
└── Private/                                    (Implementation mirrors Public/)
```

**Dependencies**: PCGExCore, PCGExProperties, PCGExFilters, PCGExFoundations, PCG

---

## Core Architecture

### Three-Layer Design

```
UPCGExAssetCollection (UDataAsset)
    Contains: TArray<FPCGExAssetCollectionEntry> Entries
    Builds:   FCache (lazy, thread-safe via FRWLock)
                 └─ FCategory "Main" (all valid entries)
                 └─ FCategory per named Category
                       └─ Sorted Indices[], Weights[], Order[]
```

### Entry Lifecycle

```
Entry.Weight > 0?  ──No──→  Excluded from cache
       │ Yes
       ▼
Entry.Validate(Collection)  ──Fail──→  Excluded
       │ Pass
       ▼
Cache.RegisterEntry(RawIndex, Entry)
       │
       ├─ Main category (all entries)
       └─ Named category (by Entry.Category)
           └─ BuildMicroCache() (variants)
```

---

## Key Types

### FPCGExAssetCollectionEntry (Base Entry)

All entry types inherit from this. Core members:

| Member | Type | Purpose |
|--------|------|---------|
| `Weight` | `int32` | Pick probability (0 = excluded from cache) |
| `Category` | `FName` | Named group for category-based picking |
| `bIsSubCollection` | `bool` | Whether this entry is a nested collection |
| `InternalSubCollection` | `TObjectPtr<UPCGExAssetCollection>` | Subcollection reference |
| `Tags` | `TSet<FName>` | Inheritable tags |
| `PropertyOverrides` | `FPCGExPropertyOverrides` | Per-entry property overrides |
| `Variations` | `FPCGExFittingVariations` | Scale/rotation randomization |
| `AssetGrammar` | `FPCGExAssetGrammarDetails` | Grammar subdivision details |
| `Staging` | `FPCGExAssetStagingData` | Pre-computed path, bounds, sockets |

**Key virtuals to override in derived entry structs**:
- `Validate(ParentCollection)` - Return false to exclude (call Super)
- `UpdateStaging(OwningCollection, InternalIndex, bRecursive)` - Populate Staging.Bounds/Path
- `SetAssetPath(const FSoftObjectPath&)` - Update soft object ptr from path
- `GetSubCollectionPtr()` - Return typed subcollection as base type
- `ClearSubCollection()` - Clear both typed and internal subcollection ptrs
- `BuildMicroCache()` - Create per-entry variant cache

### FPCGExAssetStagingData (Pre-computed Per-Entry Data)

| Member | Type | Purpose |
|--------|------|---------|
| `InternalIndex` | `int32` | Raw index in Entries array (stable identity) |
| `Path` | `FSoftObjectPath` | For async loading |
| `Sockets` | `TArray<FPCGExSocket>` | Extracted sockets |
| `Bounds` | `FBox` | Cached bounding box |

**Thread-safe loading**:
```cpp
// Load asset on any thread (uses PCGExHelpers::LoadBlocking_AnyThreadTpl)
T* Asset = Entry->Staging.LoadSync<UStaticMesh>(Context);

// Check if already loaded (no blocking)
T* Asset = Entry->Staging.TryGet<UStaticMesh>();
```

### FPCGExEntryAccessResult (Pick Result)

```cpp
struct FPCGExEntryAccessResult
{
    const FPCGExAssetCollectionEntry* Entry;  // The picked entry
    const UPCGExAssetCollection* Host;        // The collection owning it (may differ from parent if subcollection)

    operator bool() const;
    bool IsValid() const;
    template <typename T> const T* As() const;  // Downcast entry
    bool IsType(FTypeId TypeId) const;
};
```

**CRITICAL**: `Host` may differ from the collection you called `GetEntry()` on if the pick recursed into a subcollection.

---

## Cache System

### FCategory (Weight-Sorted Entry Group)

Each category maintains parallel arrays for efficient weighted picking:

| Array | Purpose |
|-------|---------|
| `Indices[]` | Raw Entries array indices of members |
| `Weights[]` | Cumulative weights (ascending, for binary search) |
| `Order[]` | Indices into Indices[], sorted by weight |
| `Entries[]` | Const entry pointers |

**Pick modes** (`EPCGExIndexPickMode`):

| Mode | Behavior |
|------|----------|
| `Ascending` | `Indices[Index]` (FIFO) |
| `Descending` | `Indices[(Num-1) - Index]` (reverse) |
| `WeightAscending` | `Indices[Order[Index]]` (lightest first) |
| `WeightDescending` | `Indices[Order[(Num-1) - Index]]` (heaviest first) |

**Weighted random**: Binary search on cumulative weights array.

### FCache (Top-Level)

```
FCache
  ├─ Main: FCategory (all valid entries)
  └─ Categories: TMap<FName, FCategory> (per Category name)
```

Built lazily on first access via `LoadCache()` (read-locked fast path, write-locked build).

### FMicroCache (Per-Entry Variants)

Same pick structure as FCategory but for sub-selections within a single entry (e.g., material variants on mesh, point weights on data asset). Built during cache registration via `Entry->BuildMicroCache()`.

---

## UPCGExAssetCollection (Base Collection Class)

### Entry Access Methods

All methods handle subcollection recursion automatically (if entry is subcollection, recurse with diversified seed `Seed * 2`):

| Method | Purpose |
|--------|---------|
| `GetEntryAt(Index)` | Pick by ascending order (Index 0 = first valid entry) |
| `GetEntry(Index, Seed, PickMode)` | Pick by specified mode |
| `GetEntryRandom(Seed)` | Uniform random (all entries equally likely) |
| `GetEntryWeightedRandom(Seed)` | Weighted random (respects Weight property) |
| `GetEntryRaw(RawIndex)` | **Direct array access** - bypasses cache, for FPickUnpacker |

**Tag-inheriting variants** add `uint8 TagInheritance, TSet<FName>& OutTags` parameters for accumulating tags through hierarchy.

### Property Override Resolution

```cpp
// Entry-level overrides take precedence over collection defaults
const T* Value = Entry->GetResolvedProperty<T>(OwningCollection, PropertyName);
// Checks: Entry.PropertyOverrides → Collection.CollectionProperties
```

### Creating a New Collection Type

Use `PCGEX_ASSET_COLLECTION_BODY` macro + `PCGEX_REGISTER_COLLECTION_TYPE`:

```cpp
// Header
USTRUCT(BlueprintType)
struct FMyEntry : public FPCGExAssetCollectionEntry
{
    GENERATED_BODY()

    UPROPERTY(BlueprintReadWrite, EditAnywhere)
    TSoftObjectPtr<UMyAsset> Asset;

    UPROPERTY(BlueprintReadWrite, EditAnywhere)
    TObjectPtr<UMyCollection> SubCollection;  // Typed subcollection

    virtual UPCGExAssetCollection* GetSubCollectionPtr() const override
    {
        return bIsSubCollection ? SubCollection : nullptr;
    }

    virtual void ClearSubCollection() override
    {
        SubCollection = nullptr;
        Super::ClearSubCollection();
    }

    virtual bool Validate(const UPCGExAssetCollection* ParentCollection) override;
    virtual void UpdateStaging(const UPCGExAssetCollection* OwningCollection,
                               int32 InInternalIndex, bool bRecursive) override;
    virtual void SetAssetPath(const FSoftObjectPath& InPath) override;
};

UCLASS()
class UMyCollection : public UPCGExAssetCollection
{
    GENERATED_BODY()
    PCGEX_ASSET_COLLECTION_BODY(FMyEntry)  // Wires up all required virtuals

    UPROPERTY(EditAnywhere)
    TArray<FMyEntry> Entries;
};

// Registration (in cpp, file scope)
PCGEX_REGISTER_COLLECTION_TYPE(MyType, UMyCollection, FMyEntry, "My Collection", Base)
```

**PCGEX_ASSET_COLLECTION_BODY** implements: `IsValidIndex`, `NumEntries`, `InitNumEntries`, `BuildCache`, `ForEachEntry`, `Sort`, `GetEntryAtRawIndex`, `GetMutableEntryAtRawIndex`.

---

## Concrete Collection Types

### Mesh Collection

| Entry Member | Purpose |
|-------------|---------|
| `TSoftObjectPtr<UStaticMesh> StaticMesh` | Primary mesh reference |
| `EPCGExMaterialVariantsMode MaterialVariants` | None / Single / Multi |
| `TArray<FPCGExMaterialOverrideSingleEntry> MaterialOverrideVariants` | Single-slot variants with weights |
| `TArray<FPCGExMaterialOverrideCollection> MaterialOverrideVariantsList` | Multi-slot variant collections |
| `FSoftISMComponentDescriptor ISMDescriptor` | Per-entry ISM settings |
| `FPCGExStaticMeshComponentDescriptor SMDescriptor` | Per-entry SM settings |

**Global settings on UPCGExMeshCollection**:
- `GlobalISMDescriptor` / `GlobalSMDescriptor` - Collection-wide defaults
- `GlobalDescriptorMode` - PerEntry vs Overrule

**MicroCache**: Built from `MaterialOverrideVariants` or `MaterialOverrideVariantsList` weights.

### Actor Collection

| Entry Member | Purpose |
|-------------|---------|
| `TSoftClassPtr<AActor> Actor` | Actor class reference |
| `bool bOnlyCollidingComponents` | Bounds from colliding components only |
| `bool bIncludeFromChildActors` | Include child actor bounds |

**No MicroCache, no global settings.**

### PCG Data Asset Collection

| Entry Member | Purpose |
|-------------|---------|
| `TSoftObjectPtr<UPCGDataAsset> DataAsset` | PCG data asset reference |
| `bool bOverrideWeights` | Enable per-point weight overrides |
| `TArray<int32> PointWeights` | Per-point weights for MicroCache |

**MicroCache**: Built from `PointWeights` when `bOverrideWeights` is true.

---

## Runtime Distribution System

### Overview Pipeline

```
Phase 1 (Generation - AssetStaging node):
  FCollectionSource → FDistributionHelper → FPickPacker → Collection Map (int64 per point)

Phase 2 (Consumption - Load* nodes):
  Collection Map → FPickUnpacker → FPCGExEntryAccessResult → Use entry data
```

### FDistributionHelper (Entry Picker)

Reads distribution settings and picks entries per-point from a collection's cache.

**Init**:
```cpp
FDistributionHelper Helper;
Helper.Collection = MyCollection;
Helper.Details = Settings->DistributionSettings;
Helper.Init(DataFacade);
```

**GetEntry** (thread-safe, read-only):
```cpp
FPCGExEntryAccessResult Result = Helper.GetEntry(PointIndex, Seed);
// Result.Entry = picked entry, Result.Host = owning collection
```

**Distribution flow**:
1. If `bUseCategories`: read category name from point attribute → find category in cache → pick within category (may switch to subcollection)
2. Apply main distribution:
   - **WeightedRandom**: Binary search on cumulative weights
   - **Random**: Uniform random
   - **Index**: Read index from attribute, optional remap to collection size, safety (clamp/tile/wrap)

### FMicroDistributionHelper (Variant Picker)

Picks a secondary index from an entry's FMicroCache (e.g., material variant).

```cpp
FMicroDistributionHelper MicroHelper;
MicroHelper.Details = Settings->EntryDistributionSettings;
MicroHelper.Init(DataFacade);

int32 SecondaryIdx = MicroHelper.GetPick(Entry->MicroCache.Get(), PointIndex, Seed);
// -1 if no micro cache or empty
```

### FCollectionSource (Unified Facade)

Wraps single or per-point mapped collection sources with their helper pairs.

**Single source mode** (one collection for all points):
```cpp
auto Source = MakeShared<PCGExCollections::FCollectionSource>(DataFacade);
Source->DistributionSettings = Settings->DistributionSettings;
Source->EntryDistributionSettings = Settings->EntryDistributionSettings;
Source->Init(MyCollection);
```

**Mapped source mode** (per-point collection from attribute):
```cpp
// AssetsMap: TMap<PCGExValueHash, TObjectPtr<UPCGExAssetCollection>>
// Keys: per-point hash keys
Source->Init(AssetsMap, Keys);
```

**Usage in ProcessPoints**:
```cpp
FDistributionHelper* Helper = nullptr;
FMicroDistributionHelper* MicroHelper = nullptr;
if (Source->TryGetHelpers(PointIndex, Helper, MicroHelper))
{
    FPCGExEntryAccessResult Result = Helper->GetEntry(PointIndex, Seed);
    int32 SecondaryIdx = MicroHelper ?
        MicroHelper->GetPick(Result.Entry->MicroCache.Get(), PointIndex, Seed) : -1;
    // ... use Result.Entry
}
```

---

## Collection Map (Serialization)

### Hash Encoding (FPickPacker)

Encodes `(Collection, EntryIndex, SecondaryIndex)` into a single `uint64`:

```
64-bit hash:
┌─────────────────────────────────────┬─────────────────────────────────────┐
│    Upper 32 bits                    │    Lower 32 bits                    │
│  H32(BaseHash, CollectionArrayIdx)  │  H32(EntryIndex, SecondaryIdx+1)   │
└─────────────────────────────────────┴─────────────────────────────────────┘
```

- **BaseHash**: Derived from node UID (prevents collisions across different staging nodes)
- **CollectionArrayIdx**: Unique ID per collection (assigned on first encounter, thread-safe)
- **SecondaryIdx+1**: So that 0 means "no secondary" (unpacker subtracts 1)

**CRITICAL**: `EntryIndex` is a **RAW Entries array index** (`Staging.InternalIndex`), NOT a cache-adjusted index. This preserves identity even when Weight=0 entries create gaps.

### FPickPacker (Generation)

```cpp
// Create packer with node UID for collision-free hashing
auto Packer = MakeShared<PCGExCollections::FPickPacker>(NodeUID);

// In ProcessPoints (parallel, thread-safe):
uint64 Hash = Packer->GetPickIdx(Result.Host, Entry->Staging.InternalIndex, SecondaryIdx);
HashWriter->SetValue(PointIndex, Hash);

// In PostProcess (single-threaded):
UPCGParamData* MapData = Context->ManagedObjects->New<UPCGParamData>(Context);
Packer->PackToDataset(MapData);
// Output MapData to "Map" pin
```

**PackToDataset** writes per-collection rows with:
- `Tag_CollectionIdx` (int32): packed collection ID
- `Tag_CollectionPath` (FSoftObjectPath): asset path for async loading

### FPickUnpacker (Consumption)

```cpp
auto Unpacker = MakeShared<PCGExCollections::FPickUnpacker>();
Unpacker->UnpackPin(Context);  // Load from "Map" input pin

if (!Unpacker->HasValidMapping()) return false;

// In ProcessPoints:
int16 SecondaryIndex = -1;
FPCGExEntryAccessResult Result = Unpacker->ResolveEntry(PointHash, SecondaryIndex);
if (Result)
{
    // Use Result.Entry->Staging.Path, Result.Entry->Staging.Bounds, etc.
}
```

**ResolveEntry** uses `GetEntryRaw()` (direct array access), NOT `GetEntryAt()` (which would apply cache indirection).

### Partition Building (for Instanced Mesh Batching)

```cpp
TArray<FPCGMeshInstanceList> InstanceLists;
if (Unpacker->BuildPartitions(PointData, InstanceLists))
{
    for (FPCGMeshInstanceList& List : InstanceLists)
    {
        // List.InstancesIndices = array of point indices sharing same entry
        // List.AttributePartitionIndex = the packed hash
    }
}
```

---

## Static Utilities (PCGExCollectionHelpers)

| Function | Purpose |
|----------|---------|
| `BuildFromAttributeSet(Collection, Context, AttrSet, Details, bBuildStaging)` | Build collection from UPCGParamData attribute set |
| `AccumulateTags(Entry, TagInheritance, OutTags)` | Collect tags from entry + subcollection hierarchy |
| `GetAllAssetPaths(Collection, OutPaths, bRecursive)` | Collect all referenced asset paths |
| `ContainsAsset(Collection, AssetPath)` | Recursive search for asset path |
| `CountTotalEntries(Collection)` | Recursive leaf entry count |
| `FlattenCollection(Source, Target)` | Flatten subcollection hierarchy into single-level collection |

---

## Common Enums (PCGExCollectionsCommon.h)

| Enum | Values | Purpose |
|------|--------|---------|
| `EPCGExCollectionSource` | Asset, AttributeSet, Attribute | How to load collection |
| `EPCGExDistribution` | Index, Random, WeightedRandom | Entry picking strategy |
| `EPCGExIndexPickMode` | Ascending, Descending, WeightAscending, WeightDescending | Index-mode ordering |
| `EPCGExIndexSafety` | Clamp, Tile, Wrap | Out-of-range handling |
| `EPCGExWeightOutputMode` | NoOutput, Raw, Normalized, NormalizedInverted | Weight attribute output |
| `EPCGExAssetTagInheritance` | None, Asset, Hierarchy, Collection, RootCollection, RootAsset | Tag scope |
| `EPCGExEntryVariationMode` | Local, Global | Per-entry vs collection settings |
| `EPCGExGlobalVariationRule` | PerEntry, Overrule | Collection override policy |

### Standard Labels

```cpp
namespace PCGExCollections::Labels
{
    SourceAssetCollection    = "AttributeSet"
    SourceCollectionMapLabel = "Map"
    OutputCollectionMapLabel = "Map"
    Tag_CollectionPath       = "PCGEx/Collection/Path"
    Tag_CollectionIdx        = "PCGEx/Collection/Idx"
    Tag_EntryIdx             = "PCGEx/CollectionEntry"
}
```

---

## Type Registry (PCGExAssetCollectionTypes.h)

Runtime type system with inheritance for dynamic UI and validation.

**Built-in types**: `Base`, `Mesh`, `Actor`, `PCGDataAsset`

**Registration macro** (file scope in .cpp):
```cpp
PCGEX_REGISTER_COLLECTION_TYPE(TypeIdName, UCollectionClass, FEntryStruct, "Display Name", ParentType)
```

**Runtime queries**:
```cpp
auto& Registry = PCGExAssetCollection::FTypeRegistry::Get();
const FTypeInfo* Info = Registry.Find(TypeIds::Mesh);
bool bIsMesh = Registry.IsA(SomeTypeId, TypeIds::Mesh);
const FTypeInfo* Info = Registry.FindByClass(UMyCollection::StaticClass());
```

---

## Grammar System (PCGExAssetGrammar.h)

Entries can carry grammar metadata for PCG subdivision:

| Config | Type | Purpose |
|--------|------|---------|
| `Symbol` | `FName` | Grammar symbol identifier |
| `ScaleMode` | Fixed / Flexible | Whether entry scales to fill space |
| `Size` | X / Y / Z / Min / Max / Average | Which axis determines entry size |
| `DebugColor` | `FLinearColor` | Visual debugging |

**CollectionToModuleInfos** node converts collection entries to grammar modules (UPCGParamData rows) with packed entry hashes for downstream resolution.

---

## Roaming Collections (Dynamic Runtime Construction)

`FPCGExRoamingAssetCollectionDetails` builds temporary collections from attribute sets:

```cpp
FPCGExRoamingAssetCollectionDetails RoamingDetails;
RoamingDetails.AssetCollectionType = UPCGExMeshCollection::StaticClass();
RoamingDetails.AssetPathSourceAttribute = "AssetPath";

UPCGExAssetCollection* TempCollection = RoamingDetails.TryBuildCollection(
    Context, InputAttributeSet, /*bBuildStaging=*/ true);
// TempCollection is lifecycle-managed by ManagedObjects
```

---

## Thread Safety Summary

| Component | Safe for Parallel? | Mechanism |
|-----------|-------------------|-----------|
| `FDistributionHelper::GetEntry()` | Yes | Read-only cache access |
| `FMicroDistributionHelper::GetPick()` | Yes | Read-only micro-cache access |
| `FPickPacker::GetPickIdx()` | Yes | Double-check locking with FRWLock |
| `FPickUnpacker::ResolveEntry()` | Yes | Read-only after UnpackPin() |
| `FSocketHelper::Add()` | Yes | Double-check locking + atomic increment |
| `Collection::LoadCache()` | Yes | FRWLock (read fast path, write for build) |
| `Entry::Staging.LoadSync<T>()` | Yes | `PCGExHelpers::LoadBlocking_AnyThreadTpl` |

**Rule**: All setup (Boot phase) is single-threaded. ProcessPoints (parallel) is read-only on prepared data.

---

## Complete Node Usage Pattern (AssetStaging Reference)

```cpp
// ─── Boot Phase ───
// Load collection
PCGExHelpers::LoadBlocking_AnyThreadTpl(Settings->AssetCollection, Context);
Collection = Settings->AssetCollection.Get();

// Create infrastructure
Packer = MakeShared<PCGExCollections::FPickPacker>(Settings->UID);
SocketHelper = MakeShared<PCGExCollections::FSocketHelper>(/*...*/);

// ─── Process Phase (per FProcessor) ───
// Create source (wraps helpers)
Source = MakeShared<PCGExCollections::FCollectionSource>(PointDataFacade);
Source->DistributionSettings = Settings->DistributionSettings;
Source->Init(Collection);

// Allocate output buffer
HashWriter = PointDataFacade->GetWritableBuffer<int64>(Tag_EntryIdx);

// ─── ProcessPoints (parallel) ───
PCGEX_SCOPE_LOOP(Index)
{
    FDistributionHelper* Helper; FMicroDistributionHelper* MicroHelper;
    if (!Source->TryGetHelpers(Index, Helper, MicroHelper)) return;

    const int32 Seed = PCGExRandom::ComputeSeed(Index, Settings->LocalSeed);
    FPCGExEntryAccessResult Result = Helper->GetEntry(Index, Seed);
    if (!Result) return;

    int32 SecondaryIdx = MicroHelper ?
        MicroHelper->GetPick(Result.Entry->MicroCache.Get(), Index, Seed) : -1;

    uint64 Hash = Packer->GetPickIdx(Result.Host, Result.Entry->Staging.InternalIndex, SecondaryIdx);
    HashWriter->GetMutable(Index) = Hash;

    // Apply bounds, transforms, weights, etc. from Result.Entry->Staging
}

// ─── PostProcess Phase ───
// Serialize collection map
UPCGParamData* MapData = Context->ManagedObjects->New<UPCGParamData>(Context);
Packer->PackToDataset(MapData);
Context->StageOutput(Labels::OutputCollectionMapLabel, MapData, /*...*/);
```
