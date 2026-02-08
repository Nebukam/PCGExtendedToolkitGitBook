# PCGExFilters Analysis

## Module Type
- [ ] Core Infrastructure
- [x] Support System (provides factories/operations to other modules)
- [ ] Element Module (user-facing nodes)
- [ ] Hybrid

## Dependencies
| Depends On | Why |
|------------|-----|
| PCGExCore | Base framework, factories, facades |
| PCGExMatching | Targeting/matching for distance filters |
| PCGExPickers | Picker framework for picker-based filters |
| GameplayTags | Tag-based filtering (private) |
| PropertyPath | Property path resolution (private) |

## What This Module Provides

### Nodes (UPCGEx*Settings classes)

This module provides **29 filter provider nodes**:

#### Point Filters (24 nodes)

**Comparison Filters:**
| Class | Display Name | Purpose |
|-------|--------------|---------|
| `UPCGExNumericCompareFilterProviderSettings` | "Filter : Compare (Numeric)" | A ⊕ B numeric comparison |
| `UPCGExNumericSelfCompareFilterProviderSettings` | "Filter : Self Compare (Numeric)" | Point[A] ⊕ Point[B] |
| `UPCGExNumericCompareNearestFilterProviderSettings` | "Filter : Compare Nearest" | Distance to nearest ⊕ threshold |
| `UPCGExStringCompareFilterProviderSettings` | "Filter : Compare (String)" | String comparison |
| `UPCGExStringSelfCompareFilterProviderSettings` | "Filter : Self Compare (String)" | Two string attributes |
| `UPCGExBooleanCompareFilterProviderSettings` | "Filter : Compare (Boolean)" | Boolean comparison |
| `UPCGExModuloCompareFilterProviderSettings` | "Filter : Modulo Compare" | (A % B) ⊕ C |
| `UPCGExWithinRangeFilterProviderSettings` | "Filter : Within Range" | A ∈ [Min, Max] |

**Math/Vector Filters:**
| Class | Display Name | Purpose |
|-------|--------------|---------|
| `UPCGExDotFilterProviderSettings` | "Filter : Dot" | Dot product with threshold |
| `UPCGExAngleFilterProviderSettings` | "Filter : Angle" | Curvature/spread angle |
| `UPCGExMeanFilterProviderSettings` | "Filter : Mean" | Value vs mean/median/mode |

**Spatial Filters:**
| Class | Display Name | Purpose |
|-------|--------------|---------|
| `UPCGExDistanceFilterProviderSettings` | "Filter : Distance" | Distance to nearest target |
| `UPCGExBoundsFilterProviderSettings` | "Filter : Inclusion (Bounds)" | OBB intersection/inclusion |
| `UPCGExInclusionFilterProviderSettings` | "Filter : Inclusion (Path/Splines)" | Point-in-polygon/spline |
| `UPCGExSegmentLengthFilterProviderSettings` | "Filter : Segment Length" | Polyline segment length |
| `UPCGExSegmentCrossFilterProviderSettings` | "Filter : Segment Cross" | Crossing segment detection |

**Random/Probabilistic:**
| Class | Display Name | Purpose |
|-------|--------------|---------|
| `UPCGExRandomFilterProviderSettings` | "Filter : Random" | Threshold + weight + curve |
| `UPCGExRandomRatioFilterProviderSettings` | "Filter : Random Ratio" | Keep ratio of points |

**Data Encoding:**
| Class | Display Name | Purpose |
|-------|--------------|---------|
| `UPCGExBitmaskFilterProviderSettings` | "Filter : Bitmask" | Int64 bitflag operations |
| `UPCGExValueHashFilterProviderSettings` | "Filter : Value Hash" | Hash-based filtering |

**Reference/Special:**
| Class | Display Name | Purpose |
|-------|--------------|---------|
| `UPCGExGameplayTagsFilterProviderSettings` | "Filter : GameplayTags" | Actor tags via property path |
| `UPCGExPickerFilterProviderSettings` | "Filter : Picker" | Uses Picker framework |
| `UPCGExConstantFilterProviderSettings` | "Filter : Constant" | Fixed bool result |
| `UPCGExTimeFilterProviderSettings` | "Filter : Time" | Time progression filtering |

#### Collection Filters (5 nodes)

| Class | Display Name | Purpose |
|-------|--------------|---------|
| `UPCGExEntryCountFilterProviderSettings` | "Data Filter : Entry Count" | Collection entry count |
| `UPCGExDataBoundsFilterProviderSettings` | "Data Filter : Bounds" | Bounds aspects (volume, extents) |
| `UPCGExTagCheckFilterProviderSettings` | "Data Filter : Tag Check" | Tag existence |
| `UPCGExTagValueFilterProviderSettings` | "Data Filter : Tag Value" | Tag value comparison |
| `UPCGExAttributeCheckFilterProviderSettings` | "Data Filter : Attribute Check" | Attribute existence/type |

### Factories/Providers

**Base Factory Classes:**
| Factory Class | Type ID | Purpose |
|---------------|---------|---------|
| `UPCGExFilterFactoryData` | `FPCGExDataTypeInfoFilter` | Abstract base for all filters |
| `UPCGExPointFilterFactoryData` | `FPCGExDataTypeInfoFilterPoint` | Point-level filters |
| `UPCGExFilterCollectionFactoryData` | `FPCGExDataTypeInfoFilterCollection` | Collection-level filters |
| `UPCGExClusterFilterFactoryData` | `FPCGExDataTypeInfoFilterCluster` | Cluster/graph filters |
| `UPCGExNodeFilterFactoryData` | `FPCGExDataTypeInfoFilterVtx` | Node/vertex filters |
| `UPCGExEdgeFilterFactoryData` | `FPCGExDataTypeInfoFilterEdge` | Edge filters |

### Filter Interface Hierarchy

**namespace `PCGExPointFilter`:**
```
IFilter (base)
├─ ISimpleFilter - Single index-based testing
├─ ICollectionFilter - Collection-level testing
└─ FManager - Multi-filter AND/OR orchestration
```

**namespace `PCGExClusterFilter`:**
```
IFilter (extends PCGExPointFilter::IFilter)
├─ IVtxFilter - Node-level cluster testing
├─ IEdgeFilter - Edge-level cluster testing
└─ FManager (extends PCGExPointFilter::FManager)
```

### Shared Structs/Details

| Struct | Purpose |
|--------|---------|
| `FPCGEx[FilterName]FilterConfig` | Per-filter configuration struct |
| `EPCGExFilterNoDataFallback` | Error/Fail/Success fallback policy |

### Data Assets (if any)

None directly defined in this module.

---

## Node Classification

### Standalone Nodes

All 29 filter providers are standalone nodes that output filter factory data:

**Point Filters (24):**
- filter-numeric-compare.md [N] - `UPCGExNumericCompareFilterProviderSettings`
- filter-numeric-self-compare.md [N]
- filter-numeric-compare-nearest.md [N]
- filter-string-compare.md [N]
- filter-string-self-compare.md [N]
- filter-boolean-compare.md [N]
- filter-modulo-compare.md [N]
- filter-within-range.md [N]
- filter-dot.md [N]
- filter-angle.md [N]
- filter-mean.md [N]
- filter-distance.md [N]
- filter-bounds.md [N]
- filter-inclusion.md [N]
- filter-segment-length.md [N]
- filter-segment-cross.md [N]
- filter-random.md [N]
- filter-random-ratio.md [N]
- filter-bitmask.md [N]
- filter-value-hash.md [N]
- filter-gameplay-tags.md [N]
- filter-picker.md [N]
- filter-constant.md [N]
- filter-time.md [N]

**Collection Filters (5):**
- data-filter-entry-count.md [N]
- data-filter-bounds.md [N]
- data-filter-tag-check.md [N]
- data-filter-tag-value.md [N]
- data-filter-attribute-check.md [N]

### Nodes with Shared Factories
- (none - each filter is self-contained)

### Nodes with Dedicated Sub-operations
- (none)

---

## Shared Factory Folders (Module-Level)

### filter-group/ [S]
- Purpose: AND/OR composition of multiple filters
- File: `Filters/Points/PCGExFilterGroup.h`

---

## Cross-Module Relationships

### Consumes From
- PCGExCore: Factory pattern, facades, buffers
- PCGExMatching: `FTargetsHandler` for distance filter
- PCGExPickers: Picker framework for picker filter

### Provides To
- **ALL Element modules**: Point filtering via input pins
- PCGExGraphs: Node/edge filtering via cluster filter interfaces
- Any node that accepts filter inputs

---

## Documentation Notes

### Concepts to Cross-Reference
- Comparison Operators: EPCGExComparison used by comparison filters
- Distance & Proximity: Distance filter uses FPCGExDistanceDetails
- Bitmask Operations: Bitmask filter uses FPCGExBitmask
- Input Value Sources: Most filters support constant vs attribute operands

### Tricky Areas
- **Preparation-based filters**: Distance and Bounds filters require async preparation
- **Proxy evaluation**: Some filters support testing without full attribute access
- **Collection vs Point**: Different test interfaces and entry points
- **Cluster filters**: Extend point filters with node/edge-specific testing

### Filter Implementation Pattern
```cpp
// Config struct
USTRUCT(BlueprintType)
struct FPCGEx[FilterName]FilterConfig
{
    FPCGAttributePropertyInputSelector OperandA;
    EPCGExInputValueType CompareAgainst;
    FPCGAttributePropertyInputSelector OperandB;
    double OperandBConstant;
    EPCGExComparison Comparison;
    bool bInvert;
};

// Filter implementation
class F[FilterName]Filter final : public ISimpleFilter
{
    // Pre-loaded buffers from Init()
    TSharedPtr<PCGExData::TBuffer<double>> OperandA;
    TSharedPtr<PCGExDetails::TSettingValue<double>> OperandB;

    virtual bool Test(const int32 PointIndex) const override;
};
```

---

## Header File Structure

**Total Public Headers**: 40+ files

| Directory | Content |
|-----------|---------|
| Root | Module header, common types, subsystem |
| Core/ | Factory provider, point filter, cluster filter, states (6 files) |
| Details/ | Filter UI details |
| Filters/Points/ | 24 point filter implementations |
| Filters/Collections/ | 5 collection filter implementations |

---

## File Counts

| Type | Count |
|------|-------|
| Nodes [N] | 29 |
| Providers [P] | 29 |
| Factories [F] | 6 base + 29 concrete |
| Shared Folders [S] | 1 (filter-group) |
| Data Assets [A] | 0 |
| Public Headers | 40+ |
