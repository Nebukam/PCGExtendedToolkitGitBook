# PCGEx Module Inventory

## Overview

**Total Modules**: 26 runtime + editor companions
**Total Estimated Nodes**: ~130+ user-facing PCG elements
**Codebase Size**: ~236k LOC, 12MB source

---

## Module Taxonomy

### Tier 1: Core Infrastructure (Always Required)

| Module | Purpose | Key Exports |
|--------|---------|-------------|
| **PCGExCore** | Foundation framework | FFacade, FPointIO, FCluster, FNode, FEdge, UPCGExSettings, IPCGExElement, 113+ headers |
| **PCGExBlending** | Attribute blending/interpolation | FBlendOperation, blend modes (Linear, SmoothStep, etc.) |

### Tier 2: Support Systems (Feature-Enabling)

| Module | Purpose | Key Exports |
|--------|---------|-------------|
| **PCGExFilters** | Conditional logic framework | IFilter, ISimpleFilter, FManager, 25 point filters, 5 collection filters |
| **PCGExFoundations** | Geometry primitives | FPolyline, tangent/normal calculations, mesh utilities |
| **PCGExGraphs** | Graph/cluster structures | FCluster, FClusterMT, cluster builders |
| **PCGExCollections** | Asset management | UPCGExAssetCollection, weighted picking, FPickPacker |
| **PCGExProperties** | Dynamic property system | FPropertyCompiled (17 types), property registry |
| **PCGExMatching** | Data correlation | FMatcher, tag/overlap/distance matching |
| **PCGExHeuristics** | Scoring/weighting | FHeuristic, distance/attribute/inertia/gradient heuristics |

### Tier 3: Element Modules (User-Facing Nodes)

| Module | Nodes | Purpose |
|--------|-------|---------|
| **PCGExElementsClusters** | 22 | Cluster decomposition, Delaunay, Voronoi, diagrams |
| **PCGExElementsPaths** | 26 | Path manipulation, beveling, orientation, rolling |
| **PCGExElementsSampling** | 13 | Data/texture/surface sampling |
| **PCGExElementsMeta** | 12 | Attribute operations, hashing, remapping |
| **PCGExElementsPathfinding** | 8 | A* pathfinding, goal pickers |
| **PCGExElementsSpatial** | 8 | Bounds, layout, collocation |
| **PCGExElementsTopology** | 5 | Mesh topology, surface generation |
| **PCGExElementsValency** | 4 | Socket/orbital matching, WFC-style solving |
| **PCGExElementsClipper2** | 3 | 2D polygon booleans (Clipper2 library) |
| **PCGExElementsTensors** | 2 | Tensor field extrusion |
| **PCGExElementsPathfindingNavmesh** | 2 | Navmesh integration |
| **PCGExElementsActions** | 1 | Batch action processing |
| **PCGExElementsBridges** | 1 | Data routing/bridging |
| **PCGExElementsFloodFill** | 1 | Region flood-fill clustering |
| **PCGExElementsProbing** | 1 | Probe-based connections |
| **PCGExElementsShapes** | 1 | Shape primitives |

### Tier 4: External Integrations (Separate Plugins)

| Plugin | Purpose |
|--------|---------|
| **PCGExtendedToolkitWatabou** | Watabou generator integration |
| **PCGExtendedToolkitZoneGraph** | UE ZoneGraph integration |

---

## Dependency Graph

```
                        PCGExCore
                            │
            ┌───────────────┼───────────────┐
            │               │               │
      PCGExBlending   PCGExProperties  PCGExMatching
            │               │               │
            └───────┬───────┴───────┬───────┘
                    │               │
              PCGExFilters    PCGExHeuristics
                    │
        ┌───────────┴───────────┐
        │                       │
  PCGExFoundations        PCGExCollections
        │
  PCGExGraphs
        │
        └──────────────────────────────────────┐
                                               │
    ┌──────────────────────────────────────────┤
    │                                          │
PCGExElements*  ←──────────────────────────────┘
(all 16 element modules)
```

---

## Filter System Deep Dive (Central Module)

### Filter Hierarchy

```
PCGExPointFilter::IFilter (base)
├── ISimpleFilter (single evaluation)
├── ICollectionFilter (collection-level)
└── FManager (multi-filter orchestration)

PCGExClusterFilter::IFilter : PCGExPointFilter::IFilter
├── IVtxFilter (vertex/node testing)
├── IEdgeFilter (edge testing)
└── FManager (cluster-aware)
```

### Built-in Point Filters (25)

**Value Comparisons**: NumericCompare, NumericSelfCompare, NumericCompareNearest, BooleanCompare, StringCompare, StringSelfCompare

**Spatial**: Distance, Bounds, WithinRange, Inclusion

**Bit/Flag**: Bitmask

**Math/Transform**: Dot, Angle, Mean, ModuloCompare

**Segment**: SegmentCross, SegmentLength

**Special**: Time, ValueHash, GameplayTags, Picker, Random, RandomRatio

**Composite**: FilterGroup (AND/OR), PolyPathFilter, Constant

### Collection Filters (5)

AttributeCheck, DataBounds, EntryCount, TagCheck, TagValue

### Filter Factory Pattern

```
UPCGExFilterProviderSettings (editor)
    │ CreateFactory()
    ▼
UPCGExFilterFactoryData (configuration)
    │ CreateFilter()
    ▼
IFilter (runtime logic)
```

---

## Shared Settings Patterns (Cross-Module)

### Identified Reusable Structs

| Struct Pattern | Found In | Purpose |
|----------------|----------|---------|
| `FPCGAttributePropertyInputSelector` | Core, Filters, Sampling, Meta | Attribute selection with type info |
| `EPCGExComparison` | Filters, Matching | Comparison operators enum |
| `FPCGExDistanceDetails` | Core, Filters, Spatial | Distance calculation config |
| `FPCGExBlendSettings` | Blending, Paths, Sampling | Blend mode configuration |
| `FPCGExFilterResultDetails` | Filters | Result writing (bool/counter/bitmask) |
| `EPCGExFilterNoDataFallback` | Filters | Error handling policy |
| `FPCGExClusterSettings` | Graphs, Clusters | Cluster creation config |
| `FPCGExPolylineSettings` | Foundations, Paths | Polyline processing config |
| `FPCGExHeuristicSettings` | Heuristics, Pathfinding | Heuristic selection/weight |
| `FPCGExAssetCollectionEntry` | Collections | Weighted asset entry |

### Common Meta Patterns

| Pattern | Usage |
|---------|-------|
| `PCG_Overridable` | Attribute-driven parameter override |
| `ShowOnlyInnerProperties` | Flatten nested struct in UI |
| `Category = "Settings"` | Standard property category |
| Priority (int32) | Execution ordering for factories |

---

## Node Categories (Functional Grouping)

### Data Operations
- **Meta**: Attribute manipulation, hashing, remapping
- **Sampling**: Data extraction, texture projection
- **Actions**: Batch processing

### Spatial Operations
- **Spatial**: Bounds, layout, collocation
- **Probing**: Connection discovery

### Path Operations
- **Paths**: 26 nodes for path manipulation
- **Pathfinding**: A* algorithms, goal selection
- **PathfindingNavmesh**: Engine navmesh integration

### Graph/Cluster Operations
- **Clusters**: 22 nodes for graph algorithms
- **Bridges**: Graph connectivity
- **FloodFill**: Region detection
- **Topology**: Mesh/surface operations

### Generation
- **Shapes**: Primitive generation
- **Tensors**: Field-based extrusion
- **Clipper2**: 2D polygon booleans

### Advanced
- **Valency**: Constraint-based modular assembly (WFC-style)

---

## Discovery Notes

### Observations

1. **Filter-centric architecture**: Nearly every processing node can accept filter inputs for conditional logic

2. **Dual facade pattern**: Cluster operations always have VtxDataFacade + EdgeDataFacade

3. **Factory proliferation**: Most extensible behaviors use Settings → Factory → Operation pattern

4. **Threading consistency**: All element modules follow the same off-game-thread processing model

5. **Index space complexity**: NodeIndex vs PointIndex confusion is documented as common pitfall

### Questions for Verification

1. Are there any nodes that DON'T follow the processor pattern?
2. Which shared structs actually appear in 3+ modules?
3. What's the actual breakdown of "instanced factory" vs "sub-node factory" usage?
4. How do error messages surface to users in the editor?

---

## Next Steps

1. **Deep-dive each Element module** to build per-node inventory
2. **Identify shared settings** that appear across multiple nodes
3. **Map filter integration** - which nodes accept which filter types
4. **Document implementation patterns** - order of operations, parallel behavior
