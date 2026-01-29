# PCGExElementsMeta Analysis

## Module Type
- [ ] Core Infrastructure
- [ ] Support System (provides factories/operations to other modules)
- [x] Element Module (user-facing nodes)
- [ ] Hybrid

## Dependencies
| Depends On | Why |
|------------|-----|
| PCGExCore | Base framework |
| PCGExFilters | Point filters |
| PCGExBlending | Attribute blending |
| PCGExPickers | Index pickers |
| PCGExNoise3D | Noise generation |
| PCGExFoundations | Foundation utilities |

## What This Module Provides

### Nodes (UPCGEx*Settings classes)

**18 Metadata/Attribute Processing Nodes**:

#### Attribute Manipulation (6 nodes)
| Class | Display Name | Purpose |
|-------|--------------|---------|
| `UPCGExAttributeHashSettings` | "Attribute Hash" | Generate hash from attributes |
| `UPCGExAttributeRemapSettings` | "Attribute Remap" | Remap with clamp/curve |
| `UPCGExAttributeStatsSettings` | "Attribute Stats" | Min/max/avg statistics |
| `UPCGExAttributesToTagsSettings` | "Hoist Attributes" | Hoist values to tags/@Data |
| `UPCGExReduceDataAttributeSettings` | "Reduce Data" | Reduce @Data attributes |
| `UPCGExUberNoiseSettings` | "Uber Noise" | Generate/mutate with noise |

#### Metadata Operations (6 nodes)
| Class | Display Name | Purpose |
|-------|--------------|---------|
| `UPCGExBlendAttributesSettings` | "Uber Blend" | Multi-blend combination |
| `UPCGExMetaCleanupSettings` | "Meta Cleanup" | Keep/remove tags & attributes |
| `UPCGExWriteIndexSettings` | "Write Index" | Write point index |
| `UPCGExWriteStatesSettings` | "Write States" | Write int64 flag mask |
| `UPCGExRefreshSeedSettings` | "Refresh Seed" | Refresh seed from position |
| `UPCGExPackActorDataSettings` | "Pack Actor Data" | Blueprint-based actor data |

#### Sorting (3 nodes)
| Class | Display Name | Purpose |
|-------|--------------|---------|
| `UPCGExSortPointsSettings` | "Sort Points (Static)" | Static rule sorting |
| `UPCGExSortCollectionsSettings` | "Sort Collections" | @Data attribute sorting |
| `UPCGExModularSortPointsSettings` | "Sort Points" | Modular factory sorting |

#### Partitioning (3 nodes)
| Class | Display Name | Purpose |
|-------|--------------|---------|
| `UPCGExPartitionByValuesBaseSettings` | "Partition by Values (Static)" | Static rule partitioning |
| `UPCGExModularPartitionByValuesSettings` | "Partition by Values" | Modular factory partitioning |

### Factories/Providers

#### Partition Rule Factory [S]
- Creates partition rules for modular partitioning

### Filters

| Filter | Display Name | Purpose |
|--------|--------------|---------|
| `UPCGExNoiseFilterProviderSettings` | "Filter : Noise" | Compare value against spatial noise |

### Shared Structs/Details

| Struct | Purpose |
|--------|---------|
| `FPCGExComponentRemapRule` | Per-component remapping config |
| `FPCGExNoiseFilterConfig` | Noise filter configuration |
| `FPCGExPartitonRuleConfig` | Partition rule definition |

### Data Assets (if any)

None directly defined.

---

## Node Classification

### Standalone Nodes
- attribute-hash.md [N] - `UPCGExAttributeHashSettings`
- attribute-remap.md [N] - `UPCGExAttributeRemapSettings`
- attribute-stats.md [N] - `UPCGExAttributeStatsSettings`
- hoist-attributes.md [N] - `UPCGExAttributesToTagsSettings`
- reduce-data.md [N] - `UPCGExReduceDataAttributeSettings`
- uber-noise.md [N] - `UPCGExUberNoiseSettings`
- uber-blend.md [N] - `UPCGExBlendAttributesSettings`
- meta-cleanup.md [N] - `UPCGExMetaCleanupSettings`
- write-index.md [N] - `UPCGExWriteIndexSettings`
- write-states.md [N] - `UPCGExWriteStatesSettings`
- refresh-seed.md [N] - `UPCGExRefreshSeedSettings`
- pack-actor-data.md [N] - `UPCGExPackActorDataSettings`
- sort-points-static.md [N] - `UPCGExSortPointsSettings`
- sort-collections.md [N] - `UPCGExSortCollectionsSettings`
- sort-points.md [N] - `UPCGExModularSortPointsSettings`
- partition-static.md [N] - `UPCGExPartitionByValuesBaseSettings`
- partition.md [N] - `UPCGExModularPartitionByValuesSettings`

### Nodes with Shared Factories
- sort-points.md [N] → sorting-rules/ (from PCGExCore)
- partition.md [N] → partition-rules/

### Nodes with Dedicated Sub-operations
- (none)

---

## Shared Factory Folders (Module-Level)

### partition-rules/ [S]
- partition-rule.md [F] - Partition rule factory

---

## Cross-Module Relationships

### Consumes From
- PCGExCore: Sorting rule factory
- PCGExNoise3D: Noise generators for Uber Noise
- PCGExBlending: Blend operations for Uber Blend
- PCGExPickers: Index pickers for hoisting

### Provides To
- General attribute manipulation for any workflow

---

## Documentation Notes

### Concepts to Cross-Reference
- Input Value Sources: Remap supports constant vs attribute
- Blending: Uber Blend uses blend operations
- Noise: Uber Noise uses noise factories

### Tricky Areas
- **Attribute Remap**: Component-wise remapping with curve lookup
- **Stats node**: Template-based generic statistics
- **Partition**: Hierarchical K-partition with parent/child relationships
- **Modular vs Static**: Some nodes have static and modular variants

---

## File Counts

| Type | Count |
|------|-------|
| Nodes [N] | 18 |
| Providers [P] | 2 (PartitionRule, NoiseFilter) |
| Factories [F] | 2 |
| Shared Folders [S] | 1 |
| Data Assets [A] | 0 |
| Public Headers | 20 |
