---
icon: boxes-stacked
---

# Custom Collections

**Collections are just typed arrays of asset references with weighted picking.** The system handles subcollection recursion, category grouping, and cache-friendly lookups for you. Your job is to define what "an entry" looks like for your asset type and how to populate staging data from it.

The codebase documents the extension steps inline — the header comments on `FPCGExAssetCollectionEntry` and `UPCGExAssetCollection` are the canonical reference. This guide walks through them with context.

***

#### Architecture

A collection type consists of two classes and a type registration:

```
UPCGExAssetCollection (UDataAsset)          ← your collection class
  └─ TArray<FMyEntry> Entries               ← authored list of entries
  └─ FCache (built lazily on first access)
      ├─ FCategory "Main"                   ← all valid entries, weight-sorted
      └─ FCategory per unique name          ← entries grouped by Category FName
          └─ per entry: FMicroCache         ← optional sub-selections (material variants, etc.)

FPCGExAssetCollectionEntry (USTRUCT)        ← your entry struct
  └─ Weight, Category, Tags, Variations    ← inherited from base
  └─ Staging (FPCGExAssetStagingData)      ← pre-computed bounds, path, sockets
  └─ your TSoftObjectPtr<UMyAsset>         ← the actual asset reference
  └─ your TObjectPtr<UMyCollection> SubCollection  ← typed subcollection
```

The type registry (`FTypeRegistry`) tracks collection types at runtime. It supports inheritance checking, reverse UClass lookups, and is populated at static init via pending registrations.

***

#### What You Need

1. **A type ID constant** — an `FName` in the `PCGExAssetCollection::TypeIds` namespace (or your own namespace)
2. **An entry struct** subclassing `FPCGExAssetCollectionEntry`
3. **A collection class** subclassing `UPCGExAssetCollection`
4. **Type registration** via `PCGEX_REGISTER_COLLECTION_TYPE` in your `.cpp`

That's the full list. The rest is filling in the virtual overrides.

***

#### Step-by-Step

**1. Define your type ID**

```cpp
// In your header or in PCGExAssetCollectionTypes.h
namespace PCGExAssetCollection::TypeIds
{
    inline const FTypeId MyAsset = FName(TEXT("MyAsset"));
}
```

**2. Create the entry struct**

The entry holds the asset reference and a typed subcollection pointer. The base class gives you `Weight`, `Category`, `Tags`, `Variations`, `PropertyOverrides`, and `Staging` for free.

```cpp
// MyAssetCollection.h

USTRUCT(BlueprintType, DisplayName="[PCGEx] My Asset Collection Entry")
struct FPCGExMyAssetCollectionEntry : public FPCGExAssetCollectionEntry
{
    GENERATED_BODY()

    // --- Type ---
    virtual PCGExAssetCollection::FTypeId GetTypeId() const override
    {
        return PCGExAssetCollection::TypeIds::MyAsset;
    }

    // --- Your asset reference ---
    UPROPERTY(EditAnywhere, Category = Settings,
        meta=(EditCondition="!bIsSubCollection", EditConditionHides))
    TSoftObjectPtr<UMyAsset> Asset = nullptr;

    // --- Typed subcollection ---
    UPROPERTY(EditAnywhere, Category = Settings,
        meta=(EditCondition="bIsSubCollection", EditConditionHides,
              DisplayAfter="bIsSubCollection"))
    TObjectPtr<UPCGExMyAssetCollection> SubCollection;

    // --- Subcollection access ---
    virtual const UPCGExAssetCollection* GetSubCollectionPtr() const override
    {
        return SubCollection;
    }

    virtual void ClearSubCollection() override
    {
        SubCollection = nullptr;
        InternalSubCollection = nullptr;  // always clear both
    }

    // --- Lifecycle ---
    virtual bool Validate(const UPCGExAssetCollection* ParentCollection) override
    {
        if (!FPCGExAssetCollectionEntry::Validate(ParentCollection)) { return false; }
        if (bIsSubCollection) { return SubCollection != nullptr; }
        return !Asset.IsNull();
    }

    virtual void UpdateStaging(const UPCGExAssetCollection* OwningCollection,
                               int32 InInternalIndex, bool bRecursive) override
    {
        Staging.InternalIndex = InInternalIndex;

        if (bIsSubCollection)
        {
            if (bRecursive && SubCollection)
            {
                SubCollection->RebuildStagingData(true);
            }
            return;
        }

        // Set the soft path for async loading
        Staging.Path = Asset.ToSoftObjectPath();

        // Populate bounds from your asset (load if needed)
        // UMyAsset* Loaded = Asset.LoadSynchronous();
        // if (Loaded) { Staging.Bounds = ...; }
    }

    virtual void SetAssetPath(const FSoftObjectPath& InPath) override
    {
        Asset = TSoftObjectPtr<UMyAsset>(InPath);
    }

#if WITH_EDITOR
    virtual void EDITOR_Sanitize() override
    {
        FPCGExAssetCollectionEntry::EDITOR_Sanitize();
        // Sync typed pointer to internal reference
        InternalSubCollection = SubCollection;
    }
#endif
};
```

Key points:

* `GetSubCollectionPtr()` and `ClearSubCollection()` bridge your typed `SubCollection` to the base class's `InternalSubCollection`
* `EDITOR_Sanitize()` syncs them in the other direction — the editor calls this when properties change
* `UpdateStaging()` populates `Staging.Path` and `Staging.Bounds` from your asset
* `Validate()` rejects entries that would produce null lookups

**3. Create the collection class**

The `PCGEX_ASSET_COLLECTION_BODY` macro implements all the virtual functions the base class needs — `IsValidIndex`, `NumEntries`, `BuildCache`, `ForEachEntry`, `Sort`, and the raw index accessors. You just add your `Entries` array and `GetTypeId()`.

```cpp
UCLASS(BlueprintType, DisplayName="[PCGEx] Collection | My Asset")
class UPCGExMyAssetCollection : public UPCGExAssetCollection
{
    GENERATED_BODY()
    PCGEX_ASSET_COLLECTION_BODY(FPCGExMyAssetCollectionEntry)

public:
    virtual PCGExAssetCollection::FTypeId GetTypeId() const override
    {
        return PCGExAssetCollection::TypeIds::MyAsset;
    }

    UPROPERTY(EditAnywhere, BlueprintReadWrite, Category = Settings)
    TArray<FPCGExMyAssetCollectionEntry> Entries;

#if WITH_EDITOR
protected:
    virtual void EDITOR_AddBrowserSelectionInternal(
        const TArray<FAssetData>& InAssetData) override
    {
        // Optional: handle drag-drop from content browser
        for (const FAssetData& Data : InAssetData)
        {
            if (Data.GetClass()->IsChildOf(UMyAsset::StaticClass()))
            {
                FPCGExMyAssetCollectionEntry& NewEntry = Entries.AddDefaulted_GetRef();
                NewEntry.Asset = TSoftObjectPtr<UMyAsset>(Data.GetSoftObjectPath());
            }
        }
        EDITOR_SetDirty();
    }
#endif
};
```

**4. Register the type**

In your `.cpp` file, one line registers the type at static init:

```cpp
// MyAssetCollection.cpp
#include "MyAssetCollection.h"

PCGEX_REGISTER_COLLECTION_TYPE(MyAsset, UPCGExMyAssetCollection,
    FPCGExMyAssetCollectionEntry, "My Asset", Base)
```

The macro arguments are: `TypeId`, `CollectionClass`, `EntryStruct`, `DisplayName`, `ParentType`. The parent type is typically `Base`.

***

#### Optional: MicroCache

If your entries have per-entry sub-selections (like the mesh collection's material variants), subclass `FMicroCache`:

```cpp
namespace PCGExMyAsset
{
    class FMicroCache : public PCGExAssetCollection::FMicroCache
    {
    public:
        virtual PCGExAssetCollection::FTypeId GetTypeId() const override
        {
            return PCGExAssetCollection::TypeIds::MyAsset;
        }

        void ProcessVariants(const TArray<FMyVariant>& Variants)
        {
            TArray<int32> Weights;
            for (const auto& V : Variants) { Weights.Add(V.Weight); }
            BuildFromWeights(Weights);  // inherited — sets up pick arrays
        }
    };
}
```

Then override `BuildMicroCache()` in your entry struct to create and populate it, and add a typed accessor:

```cpp
virtual void BuildMicroCache() override
{
    if (Variants.IsEmpty()) { return; }
    auto MC = MakeShared<PCGExMyAsset::FMicroCache>();
    MC->ProcessVariants(Variants);
    MicroCache = MC;  // store in base member
}

PCGExMyAsset::FMicroCache* GetMyMicroCache() const
{
    return static_cast<PCGExMyAsset::FMicroCache*>(MicroCache.Get());
}
```

***

#### Reference Implementations

**Actor Collection** (`PCGExCollections/Public/Collections/PCGExActorCollection.h`) The simplest built-in type. No MicroCache, no descriptors, no extra global settings. Study this first — it shows the minimum viable collection.

**Mesh Collection** (`PCGExCollections/Public/Collections/PCGExMeshCollection.h`) The most complete built-in type. Adds material variants via MicroCache, ISM/SM descriptors, and global descriptor mode. Study this for advanced patterns.

***

#### Registration & Discovery

The type registry uses deferred initialization: `PCGEX_REGISTER_COLLECTION_TYPE` schedules a lambda via `FTypeRegistry::AddPendingRegistration()`. The registrations execute during module startup via `ProcessPendingRegistrations()`. This means your custom type is safe to register from any module's `.cpp` — no manual ordering required.

At runtime, the registry supports:

* `Find(TypeId)` — get `FTypeInfo` by ID
* `FindByClass(UClass*)` — reverse lookup from UClass
* `IsA(TypeId, BaseTypeId)` — inheritance check
* `ForEach(Callback)` — iterate all registered types

***

#### Related

* Source: `PCGExCollections/Public/Core/PCGExAssetCollection.h`
* Source: `PCGExCollections/Public/Core/PCGExAssetCollectionTypes.h`
* Source: `PCGExCollections/Public/Collections/PCGExActorCollection.h`
* Source: `PCGExCollections/Public/Collections/PCGExMeshCollection.h`
* Concept: [Collections](../../working-with-pcgex/asset-staging/collections.md)
* Node reference: [Asset Collection Base](../../node-library/staging/collections/asset-collection-base.md)
