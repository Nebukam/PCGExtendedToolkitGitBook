# PCGExGraphs Analysis

## Module Type
- [x] Core Infrastructure
- [x] Support System (provides factories/operations to other modules)
- [ ] Element Module (user-facing nodes)
- [ ] Hybrid

## Dependencies
| Depends On | Why |
|------------|-----|
| PCGExCore | Base framework, clusters, facades |
| PCGExBlending | Attribute/metadata blending for unions |
| PCGExFilters | Filter infrastructure for node/edge filtering |
| PCGExHeuristics | Heuristic calculations |
| PCGExMatching | Point/edge matching utilities |
| PCGExFoundations | Base utilities |
| GeometryCore, GeometryFramework | Geometric calculations (private) |

## What This Module Provides

### Nodes (UPCGEx*Settings classes)

| Class | Display Name | Purpose |
|-------|--------------|---------|
| `UPCGExClustersProcessorSettings` | "Edges Processor Settings" | **Abstract base** for all cluster/edge processing nodes |

**Note**: This is an abstract base class. Concrete cluster processing nodes are in PCGExElementsClusters.

### Graph Data Structures

| Struct/Class | File | Purpose |
|--------------|------|---------|
| `FGraph` | Graphs/PCGExGraph.h | Central container for nodes, edges, metadata |
| `FSubGraph` | Graphs/PCGExSubGraph.h | Disconnected component with compile callbacks |
| `FGraphBuilder` | Graphs/PCGExGraphBuilder.h | Async/sync graph compilation |
| `FUnionGraph` | Graphs/Union/PCGExIntersections.h | Multi-source graph union structure |
| `FUnionNode` | Graphs/Union/PCGExIntersections.h | Node with collapsed adjacency from multiple sources |
| `FUnionProcessor` | Graphs/Union/PCGExUnionProcessor.h | Multi-graph intersection engine |

### Multi-Threaded Processing Framework

| Class | File | Purpose |
|-------|------|---------|
| `IProcessor` | Core/PCGExClusterMT.h | Per-cluster-pair processor (abstract) |
| `IBatch` | Core/PCGExClusterMT.h | Batch manager for multiple processors |
| `TBatch<TProcessor>` | Core/PCGExClusterMT.h | Template batch implementation |
| `TProcessor<TContext, TSettings>` | Core/PCGExClusterMT.h | Template processor base |

### Cluster Artifacts

| Class | File | Purpose |
|-------|------|---------|
| `FCell` | Clusters/Artifacts/PCGExCell.h | Cell enumeration with constraints |
| `FNodeChain` | Clusters/Artifacts/PCGExChain.h | Chain/loop extraction from cluster |
| `FNodeChainBuilder` | Clusters/Artifacts/PCGExChain.h | Compiles chains from cluster |
| `FPlanarFaceEnumerator` | Clusters/Artifacts/PCGExPlanarFaceEnumerator.h | DCEL-based face finding |
| `FHalfEdge` | Clusters/Artifacts/PCGExPlanarFaceEnumerator.h | DCEL half-edge structure |

### Shared Structs/Details

| Struct | Purpose |
|--------|---------|
| `FPCGExGraphBuilderDetails` | Edge position, solidification, size filtering, caching |
| `FPCGExBasicEdgeSolidificationDetails` | Axis, radius type, scale |
| `FGraphMetadataDetails` | Union attributes, intersection type tracking |
| `FGraphNodeMetadata` | Node index, union size, intersection type |
| `FGraphEdgeMetadata` | Edge metadata with root index tracking |
| `FPCGExPointPointIntersectionDetails` | Point-point intersection config |
| `FPCGExPointEdgeIntersectionDetails` | Point-edge intersection config |
| `FPCGExEdgeEdgeIntersectionDetails` | Edge-edge intersection config |

### Callback Architecture

```cpp
// User context factory
FCreateSubGraphContextCallback OnCreateContext

// Pre-compilation (after FlattenedEdges built, before edge processing)
FSubGraphPreCompileCallback OnPreCompile(Context, Data)

// Post-compilation (after CompileRange, before edge data write)
FSubGraphPostCompileCallback OnPostCompile(Context, SubGraph)

// End-of-compilation
FGraphCompilationEndCallback OnCompilationEndCallback(Builder, bSuccess)
```

### Processing States

```cpp
MTState_ClusterProcessing, MTState_ClusterCompletingWork, MTState_ClusterWriting,
State_WritingClusters, State_ReadyToCompile, State_Compiling,
State_Pathfinding, State_WaitingPathfinding
```

### Cell Enums

| Enum | Values |
|------|--------|
| `EPCGExCellTriageFlags` | Inside, Touching, Outside |
| `ECellResult` | Success, Duplicate, Leaf, Hole, WrongAspect, OutsideLimit |

### Data Assets (if any)

None directly defined in this module.

---

## Node Classification

### Standalone Nodes
- (none - abstract base only)

### Nodes with Shared Factories
- (none)

### Nodes with Dedicated Sub-operations
- (none)

---

## Shared Factory Folders (Module-Level)

This module provides **infrastructure** rather than user-facing factories:

### graph-builder/ [S]
- Used by: All cluster-building nodes in PCGExElementsClusters
- Provides: FGraphBuilder, FSubGraph compilation

### union-processor/ [S]
- Used by: Fuse nodes, multi-source graph merge operations
- Provides: FUnionProcessor, intersection detection

### cluster-mt/ [S]
- Used by: All cluster processing nodes
- Provides: IProcessor, IBatch parallel processing framework

---

## Cross-Module Relationships

### Consumes From
- PCGExCore: FCluster, FNode, FEdge, FFacade, FPointIO
- PCGExBlending: FUnionBlender, FMetadataBlender for merging
- PCGExFilters: Filter chains for node/edge filtering
- PCGExHeuristics: Scoring/weighting integration
- PCGExMatching: Point/edge matching

### Provides To
- PCGExElementsClusters: Graph building, processing framework
- PCGExElementsPathfinding: Graph structures for pathfinding
- PCGExElementsTopology: Face enumeration, cell detection
- PCGExElementsValency: Graph constraint solving
- Any cluster/graph processing node

---

## Documentation Notes

### Concepts to Cross-Reference
- Cluster System: FCluster, FNode, FEdge from PCGExCore
- Blending: Union blending uses PCGExBlending
- Filters: Node/edge filters from PCGExFilters

### Tricky Areas
- **Index spaces**: NodeIndex vs PointIndex vs EdgeIndex are different
- **SubGraph compilation**: Callbacks are critical for custom processing
- **DCEL faces**: Half-edge structure for robust planar enumeration
- **Union processor**: Complex multi-phase intersection detection

### Key Design Patterns
1. **Shared Reference Counting**: TSharedRef/TSharedPtr throughout
2. **RWLock Protection**: For concurrent reads on metadata/union structures
3. **Lazy Initialization**: Projection, adjacency maps cached on first use
4. **Callback Pattern**: SubGraph compilation hooks for custom processing
5. **Facade Abstraction**: Point data accessed via FFacade

---

## Header File Structure

**Total Public Headers**: 19 files

| Directory | Content |
|-----------|---------|
| Graphs/ | Graph container, builder, subgraph, metadata, details (7 files) |
| Graphs/Union/ | Union processor, intersections (2 files) |
| Core/ | ClusterMT, ClustersProcessor (2 files) |
| Clusters/Artifacts/ | Cell, Chain, FaceEnumerator, CellPath (6 files) |

---

## File Counts

| Type | Count |
|------|-------|
| Nodes [N] | 0 (1 abstract base) |
| Providers [P] | 0 |
| Factories [F] | 0 (infrastructure only) |
| Shared Folders [S] | 3 (graph-builder, union-processor, cluster-mt) |
| Data Assets [A] | 0 |
| Public Headers | 19 |
