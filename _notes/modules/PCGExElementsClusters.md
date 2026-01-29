# PCGExElementsClusters Analysis

## Module Type
- [ ] Core Infrastructure
- [ ] Support System (provides factories/operations to other modules)
- [x] Element Module (user-facing nodes)
- [ ] Hybrid

## Dependencies
| Depends On | Why |
|------------|-----|
| PCGExCore | Base framework, cluster structures |
| PCGExFilters | Node/edge filtering |
| PCGExBlending | Attribute blending |
| PCGExMatching | Matching utilities |
| PCGExHeuristics | Scoring for refinement |
| PCGExFoundations | Foundation utilities |
| PCGExGraphs | Graph builder, cluster MT processing |
| GeometryCore, GeometryFramework | Geometry utilities (private) |

## What This Module Provides

### Nodes (UPCGEx*Settings classes)

**52+ Cluster Processing Nodes**:

#### Cluster Building Nodes (8 Diagram Generators)
| Class | Display Name | Purpose |
|-------|--------------|---------|
| `UPCGExBuildDelaunayGraphSettings` | "Cluster : Delaunay 3D" | 3D Delaunay tetrahedralization |
| `UPCGExBuildDelaunayGraph2DSettings` | "Cluster : Delaunay 2D" | 2D Delaunay triangulation |
| `UPCGExBuildVoronoiGraphSettings` | "Cluster : Voronoi 3D" | 3D Voronoi diagram |
| `UPCGExBuildVoronoiGraph2DSettings` | "Cluster : Voronoi 2D" | 2D Voronoi diagram |
| `UPCGExBuildConvexHullSettings` | "Cluster : Convex Hull 3D" | 3D convex hull |
| `UPCGExBuildConvexHull2DSettings` | "Cluster : Convex Hull 2D" | 2D convex hull |
| `UPCGExBuildCellDiagramSettings` | "Cluster : Cell Diagram" | Cell adjacency graph |
| `UPCGExBuildDualGraphSettings` | "Cluster : Dual Graph" | Edge dual graph |

#### Core Cluster Processing (12 nodes)
| Class | Display Name | Purpose |
|-------|--------------|---------|
| `UPCGExFindClustersDataSettings` | "Find Clusters" | Locate vtx/edge pairs |
| `UPCGExBuildCustomGraphSettings` | "Cluster : Build Custom Graph" | Blueprint-customizable builder |
| `UPCGExMakeClustersUniqueSettings` | "Cluster : Make Unique" | Create unique pointers |
| `UPCGExMergeVerticesSettings` | "Cluster : Merge Vtx" | Consolidate vertices |
| `UPCGExPackClustersSettings` | "Cluster : Pack" | Serialize clusters |
| `UPCGExUnpackClustersSettings` | "Cluster : Unpack" | Deserialize clusters |
| `UPCGExSanitizeClustersSettings` | "Cluster : Sanitize" | Validate/clean clusters |
| `UPCGExSimplifyClustersSettings` | "Cluster : Simplify" | Reduce chains |
| `UPCGExSubdivideEdgesSettings` | "Cluster : Subdivide Edges" | Insert intermediate nodes |
| `UPCGExConnectClustersSettings` | "Cluster : Connect" | Join isolated clusters |
| `UPCGExFilterVtxSettings` | "Cluster : Filter Vtx" | Remove vertices |
| `UPCGExMeshToClustersSettings` | "Mesh to Clusters" | Import mesh topology |

#### Cluster Refinement (1 main node + 16 operations)
| Class | Display Name | Purpose |
|-------|--------------|---------|
| `UPCGExRefineEdgesSettings` | "Cluster : Refine" | Multiplexer for edge refinement |

**Refinement Operations**:
- Keep strategies: Longest, Shortest, HighestScore, LowestScore, ByFilter
- Remove strategies: Longest, Shortest, HighestScore, LowestScore, Leaves, LeavesRecursive
- Algorithms: Gabriel, PrimMST, Skeleton, LineTrace, TrajanDFS

#### Cluster Relaxation (1 main node + 6 operations)
| Class | Display Name | Purpose |
|-------|--------------|---------|
| `UPCGExRelaxClustersSettings` | "Cluster : Relax" | Position smoothing |

**Relaxation Methods**: Laplacian, ForceDirected, Verlet, BoxFitting, BoxFitting2, RadiusFitting

#### Topology & Analysis (7 nodes)
| Class | Display Name | Purpose |
|-------|--------------|---------|
| `UPCGExClusterCentralitySettings` | "Cluster : Centrality" | Betweenness centrality |
| `UPCGExClusterDecompositionSettings` | "Cluster : Decomposition" | Convex/k-decomposition |
| `UPCGExEdgeOrderSettings` | "Cluster : Edge Order" | Edge endpoint ordering |
| `UPCGExPartitionVerticesSettings` | "Cluster : Partition Vtx" | Split vertices |
| `UPCGExFindPointOnBoundsClustersSettings` | "Cluster : Find point on Bounds" | Closest on bounds |
| `UPCGExPickClosestClustersSettings` | "Cluster : Pick Closest" | Select nearest clusters |
| `UPCGExCopyClustersToPointsSettings` | "Cluster : Copy to Points" | Replicate clusters |

#### Path Operations (3 nodes)
| Class | Display Name | Purpose |
|-------|--------------|---------|
| `UPCGExPathToClustersSettings` | "Path : To Clusters" | Convert paths to clusters |
| `UPCGExBreakClustersToPathsSettings` | "Cluster : Break to Paths" | Extract paths |
| `UPCGExCutClustersSettings` | "Cluster : Cut" | Cut using path routes |

#### Metadata & Sampling (10 nodes)
| Class | Display Name | Purpose |
|-------|--------------|---------|
| `UPCGExWriteVtxPropertiesSettings` | "Cluster : Vtx Properties" | Extract vertex properties |
| `UPCGExWriteEdgePropertiesSettings` | "Cluster : Edge Properties" | Extract edge properties |
| `UPCGExSampleNeighborsSettings` | "Cluster : Sample Neighbors" | Sample neighbor attributes |

**Neighbor Samplers**: Attribute, Blend, Properties, Filters
**Vertex Properties**: Amplitude, EdgeMatch, SpecialEdges, SpecialNeighbors

#### State Management (2 nodes)
| Class | Display Name | Purpose |
|-------|--------------|---------|
| `UPCGExWriteStatesSettings` | "Cluster : Write States" | Write bitmask flags |
| `UPCGExStateFactoryProviderSettings` | "State : Bitmask Adjacency" | Directional adjacency |

### Factories/Providers

#### Edge Refinement Factory [S]
- Base: `UPCGExEdgeRefineInstancedFactory` → `FPCGExEdgeRefineOperation`
- 16 operation implementations

#### Relax Operation Factory [S]
- Base: `UPCGExRelaxClusterOperation`
- 6 operation implementations

#### Vertex/Neighbor Property Factory [S]
- Bases: `UPCGExNeighborSamplerFactoryData`, `UPCGExVtxPropertyFactoryData`
- 8 operation implementations

### Cluster Filters (10 filters)

**Vertex Filters (3)**:
- Adjacency, EdgeAngle, NeighborsCount

**Edge Filters (6)**:
- Length, NeighborsCount, EndpointsCheck, EndpointsCompareNum, EndpointsCompareStr, IsoEdgeDirection

### Data Assets (if any)

None directly defined.

---

## Node Classification

### Standalone Nodes
(All diagram generators, core processing, topology/analysis, path operations listed above)

### Nodes with Dedicated Sub-operations

#### 📁 refine-edges/ [N+F]
- README.md - `UPCGExRefineEdgesSettings`
- 16 refinement operation files

#### 📁 relax-clusters/ [N+F]
- README.md - `UPCGExRelaxClustersSettings`
- 6 relaxation method files

#### 📁 sample-neighbors/ [N+F]
- README.md - `UPCGExSampleNeighborsSettings`
- 4 sampler type files

---

## Shared Factory Folders (Module-Level)

### cluster-filters/ [S]
- vtx-filter-adjacency.md [F]
- vtx-filter-edge-angle.md [F]
- vtx-filter-neighbors-count.md [F]
- edge-filter-length.md [F]
- edge-filter-neighbors-count.md [F]
- edge-filter-endpoints-check.md [F]
- edge-filter-endpoints-compare-num.md [F]
- edge-filter-endpoints-compare-str.md [F]
- edge-filter-direction.md [F]

---

## Cross-Module Relationships

### Consumes From
- PCGExGraphs: Graph builder, cluster MT framework
- PCGExFilters: Node/edge filters
- PCGExHeuristics: Scoring for refinement
- PCGExBlending: Attribute blending

### Provides To
- PCGExElementsPathfinding: Cluster structures for pathfinding
- PCGExElementsValency: Cluster structures for valency solving

---

## Documentation Notes

### Concepts to Cross-Reference
- Cluster System: FCluster, FNode, FEdge from PCGExCore
- Graph Building: FPCGExGraphBuilderDetails shared struct
- Heuristics: Used by refinement operations

### Tricky Areas
- **Index spaces**: NodeIndex vs PointIndex confusion
- **Sub-operation multiplexing**: Refine/Relax use factory pattern
- **Precision handling**: Relax uses FInt64Vector3 for stable atomics
- **Bitmask state composition**: Adjacency states with angle thresholds

---

## File Counts

| Type | Count |
|------|-------|
| Nodes [N] | 52+ |
| Providers [P] | 3 (Refine, Relax, Sample) |
| Factories [F] | 30 sub-operations |
| Shared Folders [S] | 4 |
| Data Assets [A] | 0 |
| Public Headers | 76 |
