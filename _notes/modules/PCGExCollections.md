# PCGExCollections Analysis

## Module Type
- [ ] Core Infrastructure
- [x] Support System (provides factories/operations to other modules)
- [x] Element Module (user-facing nodes)
- [x] Hybrid

## Dependencies
| Depends On | Why |
|------------|-----|
| PCGExCore | Base framework, facades |
| PCGExProperties | Property system for entry properties |
| PCGExFilters | Filtering framework |
| PCGExFoundations | Foundation utilities |
| Niagara | VFX/particle system integration |
| DeveloperSettings | Developer configuration (private) |

## What This Module Provides

### Nodes (UPCGEx*Settings classes)

#### Staging Nodes (8 nodes)
| Class | Display Name | Purpose |
|-------|--------------|---------|
| `UPCGExAssetStagingSettings` | "Staging : Distribute" | Distribute collection entries to points |
| `UPCGExSocketStagingSettings` | "Staging : Load Sockets" | Create points from staged data sockets |
| `UPCGExPCGDataAssetLoaderSettings` | "Staging : Load PCGData" | Load and spawn PCGDataAsset contents |
| `UPCGExStagingLoadPropertiesSettings` | "Staging : Load Properties" | Output property values from entries |
| `UPCGExStagedTypeFilterSettings` | "Staging : Type Filter" | Filter staged points by entry type |
| `UPCGExStagingSplineMeshSettings` | "Staging : Spline Mesh" | Spline mesh staging |

#### Conversion Nodes
| Class | Display Name | Purpose |
|-------|--------------|---------|
| `UPCGExAssetCollectionToSetSettings` | "Asset Collection to Set" | Convert collection to attribute set |
| `UPCGExCollectionToModuleInfosSettings` | "Collection to Module Infos" | Convert to grammar module infos |

### Data Asset Classes

#### UPCGExAssetCollection (Base)
Abstract base for all collection types:
- Thread-safe cache system with RWLock
- Property registry and resolution
- Weight-based entry picking
- Category-based organization
- Grammar and variation support
- Subcollection nesting

#### Built-in Collection Types

| Class | Entry Struct | Asset Type | Type ID |
|-------|--------------|------------|---------|
| `UPCGExMeshCollection` | `FPCGExMeshCollectionEntry` | `TSoftObjectPtr<UStaticMesh>` | `TypeIds::Mesh` |
| `UPCGExActorCollection` | `FPCGExActorCollectionEntry` | `TSoftClassPtr<AActor>` | `TypeIds::Actor` |
| `UPCGExPCGDataAssetCollection` | `FPCGExPCGDataAssetCollectionEntry` | `TSoftObjectPtr<UPCGDataAsset>` | `TypeIds::PCGDataAsset` |

### Shared Structs/Details

#### Staging Details
| Struct | Purpose |
|--------|---------|
| `FPCGExAssetDistributionDetails` | Entry picking (random, weighted, index-based) |
| `FPCGExAssetDistributionIndexDetails` | Index picking mode and safety |
| `FPCGExMicroCacheDistributionDetails` | Per-entry variant picking (e.g., materials) |
| `FPCGExAssetTaggingDetails` | Tag inheritance (Asset/Collection/Hierarchy) |
| `FPCGExAssetAttributeSetDetails` | Maps attributes to asset paths/weights |
| `FPCGExComponentTaggingDetails` | Tag forwarding for spawned components |

#### Grammar Structures
| Struct | Purpose |
|--------|---------|
| `FPCGExAssetGrammarDetails` | Per-entry grammar: symbol, scale mode, size |
| `FPCGExCollectionGrammarDetails` | Collection-level grammar: sizing rules |
| `FPCGExAssetStagingData` | Socket management, bounds caching |

#### Specialized Structures
| Struct | Purpose |
|--------|---------|
| `FPCGExRoamingAssetCollectionDetails` | Dynamic collection building |
| `FPCGExStagedTypeFilterDetails` | Type inclusion/exclusion |
| `FPCGExScaleToFitDetails` | Scale fitting configuration |
| `FPCGExJustificationDetails` | Point justification settings |
| `FPCGExSocketOutputDetails` | Socket output configuration |

#### Material Override Structures
| Struct | Purpose |
|--------|---------|
| `FPCGExMaterialOverrideEntry` | Single material slot override |
| `FPCGExMaterialOverrideCollection` | Collection of material overrides |
| `FPCGExMaterialOverrideSingleEntry` | Weighted single material variant |

### Type Registry System

```cpp
namespace PCGExAssetCollection
{
    TypeIds::None
    TypeIds::Base
    TypeIds::Mesh
    TypeIds::Actor
    TypeIds::PCGDataAsset
}
```

**FTypeRegistry (Singleton)**:
- Registers collection types at module startup
- Supports type inheritance checking
- Bidirectional lookup (ID → Class, Class → ID)
- Thread-safe with pending registration

### Enumerations

| Enum | Values |
|------|--------|
| `EPCGExCollectionSource` | Asset, AttributeSet, Attribute |
| `EPCGExIndexPickMode` | Ascending, Descending, WeightAscending, WeightDescending |
| `EPCGExDistribution` | Index, Random, WeightedRandom |
| `EPCGExWeightOutputMode` | NoOutput, Raw, Normalized, etc. |
| `EPCGExAssetTagInheritance` | None, Asset, Hierarchy, Collection, etc. |
| `EPCGExGrammarScaleMode` | Fixed, Flex |
| `EPCGExGrammarSizeReference` | X, Y, Z, Min, Max, Average |
| `EPCGExStagingOutputMode` | Attributes, CollectionMap |
| `EPCGExSubCollectionToSet` | Ignore, Expand, PickRandom, etc. |

---

## Node Classification

### Standalone Nodes
- staging-distribute.md [N] - `UPCGExAssetStagingSettings`
- staging-load-sockets.md [N] - `UPCGExSocketStagingSettings`
- staging-load-pcgdata.md [N] - `UPCGExPCGDataAssetLoaderSettings`
- staging-load-properties.md [N] - `UPCGExStagingLoadPropertiesSettings`
- staging-type-filter.md [N] - `UPCGExStagedTypeFilterSettings`
- staging-spline-mesh.md [N] - `UPCGExStagingSplineMeshSettings`
- asset-collection-to-set.md [N] - `UPCGExAssetCollectionToSetSettings`
- collection-to-module-infos.md [N] - `UPCGExCollectionToModuleInfosSettings`

### Nodes with Shared Factories
- (none)

### Nodes with Dedicated Sub-operations
- (none)

---

## Shared Factory Folders (Module-Level)

This module provides **Data Assets** rather than factories:

### collection-types/ [A]
- mesh-collection.md [A] - `UPCGExMeshCollection`
- actor-collection.md [A] - `UPCGExActorCollection`
- pcgdata-collection.md [A] - `UPCGExPCGDataAssetCollection`

---

## Cross-Module Relationships

### Consumes From
- PCGExCore: FFacade, FPointIO, factory patterns
- PCGExProperties: Property system for entry properties
- PCGExFilters: Filtering framework
- PCGExFoundations: Foundation utilities

### Provides To
- Any module needing asset staging
- Modules requiring weighted asset picking
- Modules needing grammar-based procedural placement

---

## Documentation Notes

### Concepts to Cross-Reference
- Property System: Collections use PCGExProperties for entry properties
- Fitting & Justification: Staging uses scale/justify details
- Attribute Mapping: Collection-to-set conversion maps attributes

### Tricky Areas
- **Type Registry**: Dynamic type registration with inheritance
- **MicroCache**: Per-entry sub-caching (material variants)
- **Property Resolution**: Override → Default fallback chain
- **Subcollections**: Nesting with inheritance modes
- **Grammar System**: Procedural spacing/scaling rules

### Key Design Features
- Soft object references (lazy loading)
- Weight-based probability systems
- Socket-based attachment points
- Per-entry property overrides
- Tag inheritance system

---

## Header File Structure

**Total Public Headers**: ~25 files

| Directory | Content |
|-----------|---------|
| Root | Module header, common types, settings, helpers |
| Collections/ | Mesh, Actor, PCGData collection types |
| Elements/ | Staging node implementations |
| Details/ | Configuration structs |

---

## File Counts

| Type | Count |
|------|-------|
| Nodes [N] | 8 |
| Providers [P] | 0 |
| Factories [F] | 0 |
| Shared Folders [S] | 0 |
| Data Assets [A] | 3 (Mesh, Actor, PCGData collections) |
| Public Headers | ~25 |
