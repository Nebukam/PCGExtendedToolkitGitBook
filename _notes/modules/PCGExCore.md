# PCGExCore Analysis

## Module Type
- [x] Core Infrastructure
- [ ] Support System (provides factories/operations to other modules)
- [ ] Element Module (user-facing nodes)
- [ ] Hybrid

## Dependencies
| Depends On | Why |
|------------|-----|
| Core, CoreUObject, Engine | Unreal Engine foundations |
| PCG | Unreal's Procedural Content Generation framework |
| GeometryCore, GeometryFramework, GeometryAlgorithms | Geometric calculations (private) |

**Note**: PCGExCore is the foundational module with NO external PCGEx module dependencies. All other PCGEx modules depend on this.

## What This Module Provides

### Nodes (UPCGEx*Settings classes)

This module contains **only 1 concrete node**:

| Class | Display Name | Purpose |
|-------|--------------|---------|
| `UPCGExSortingRuleProviderSettings` | "Sorting Rule" | Factory provider for sorting rules |

**Note**: PCGExCore is NOT a node container. It provides the framework that other modules use to define actual processing nodes.

### Base Classes & Interfaces

| Class/Interface | File | Role |
|---|---|---|
| `IPCGExElement` | Core/PCGExElement.h | Base PCG element with PCGEx lifecycle (Boot, PostBoot, AdvanceWork, CompleteWork) |
| `FPCGExContext` | Core/PCGExContext.h | Extended context with state machine, staging, async management |
| `UPCGExSettings` | Core/PCGExSettings.h | Base settings with caching/performance tuning |
| `UPCGExFactoryProviderSettings` | Factories/PCGExFactoryProvider.h | Base for all factory provider nodes |
| `UPCGExFactoryData` | Factories/PCGExFactoryData.h | Base for all factory data types |
| `UPCGExInstancedFactory` | Factories/PCGExInstancedFactory.h | Per-data-instance factory implementation |

### Data Layer Classes

| Class | File | Role |
|---|---|---|
| `FPointIO` | Data/PCGExPointIO.h | Point I/O wrapper with transactional semantics |
| `FFacade` | Data/PCGExData.h | Buffer abstraction over PCG data with attribute broadcasting |
| `IBuffer` | Data/PCGExData.h | Base buffer interface with value hashing, caching |

### Cluster/Graph Infrastructure

| Struct | File | Role |
|---|---|---|
| `FNode` | Clusters/PCGExNode.h | Vertex in cluster graph with link adjacency |
| `FEdge` | Clusters/PCGExEdge.h | Edge in cluster graph |
| `FCluster` | Clusters/PCGExCluster.h | Complete cluster topology with octree, bounds, cached data |

### Factory Type Enumeration

The module defines all factory types via `PCGExFactories::EType`:
```
Instanced, Filter, FilterGroup, FilterPoint, FilterNode, FilterEdge,
FilterCollection, RuleSort, RulePartition, Probe, ClusterState, PointState,
Sampler, Heuristics, VtxProperty, Action, ShapeBuilder, Blending,
TexParam, Tensor, IndexPicker, FillControls, MatchRule, Noise3D
```

### Shared Structs/Details

| Struct | Purpose | Location |
|--------|---------|----------|
| `FPCGExAttributeGatherDetails` | Attribute gathering configuration | Types/PCGExAttributeIdentity.h |
| `FPCGExSortRuleConfig` | Sort rule parameters | Sorting/ |
| `FPCGExEdgeDirectionDetails` | Edge direction configuration | Clusters/PCGExEdgeDirectionDetails.h |
| `FPCGExPathIntersectionDetails` | Path intersection testing | Paths/PCGExPath.h |
| `FPCGExTransformDetails` | Transform fitting parameters | Fitting/PCGExFittingTasks.h |
| `FPCGExCurveLookupDetails` | Curve sampling configuration | Utils/PCGExCurveLookup.h |
| `FPCGExGeo2DProjectionDetails` | 2D projection for geometry | Math/Geo/ |
| `FPCGExGeoMeshImportDetails` | Mesh import configuration | Data/External/PCGExMesh.h |

### Execution State Machine

Context states for lifecycle management:
```
State_Preparation, State_LoadingAssetDependencies, State_AsyncPreparation,
State_FacadePreloading, State_InitialExecution, State_ReadyForNextPoints,
State_ProcessingPoints, State_WaitingOnAsyncWork, State_Done,
State_Processing, State_Completing, State_Writing, State_UnionWriting
```

### Execution Policies

```cpp
EPCGExExecutionPolicy:
  Default, NoPause, NoPauseButLoop, NoPauseButTopLoop, Ignored
```

### Data Assets (if any)

None directly defined in this module.

---

## Node Classification

### Standalone Nodes
- (none - this is infrastructure only)

### Nodes with Shared Factories
- (none)

### Nodes with Dedicated Sub-operations
- (none)

---

## Shared Factory Folders (Module-Level)

This module DEFINES the factory pattern infrastructure, not concrete factories:
- `UPCGExFactoryData` - Base class
- `UPCGExFactoryProviderSettings` - Base provider settings
- `UPCGExInstancedFactory` - Runtime factory instances

---

## Cross-Module Relationships

### Consumes From
- UE5.7 PCG plugin (IPCGElement, UPCGSettings, UPCGData, point attributes)
- Geometry libraries (Delaunay, UE mesh APIs)
- Engine multithreading (FTaskGraph, async)

### Provides To
ALL other PCGEx modules consume from PCGExCore:
- Extensible IPCGExElement/UPCGExSettings framework
- Point I/O (FPointIO) with transactional data management
- Facade pattern for attribute buffering and broadcasting
- Factory pattern system with priority-based creation
- Cluster graph structures (FCluster, FNode, FEdge)
- Bitmask data system for multi-dimensional filtering
- Mathematical primitives (Delaunay, Voronoi, OBB, distances)
- Async task infrastructure (PCGExMT)
- Performance controls (bulk init, caching, stealing)

---

## Documentation Notes

### Concepts to Cross-Reference
- Input Value Sources: Used by all nodes via FPCGExInputShorthand* structs
- Distance & Proximity: EPCGExDistance, EPCGExDistanceType defined here
- Comparison Operators: EPCGExComparison defined here
- Bitmask System: FPCGExBitmask and related structs

### Tricky Areas
- `FFacade->Source` is `TSharedRef<FPointIO>` - NEVER null-check it
- NodeIndex vs PointIndex confusion is common (different index spaces)
- Context state machine complexity - many states for different phases
- Threading model: All processing runs OFF game thread

---

## Header File Structure

**Total Public Headers**: 137 files organized in 21 categories

| Directory | Content |
|-----------|---------|
| Core/ | Element system and context management |
| Data/ | Point I/O, facades, attributes, bitmasks, external data |
| Clusters/ | Graph nodes, edges, cluster topology |
| Factories/ | Factory pattern implementations |
| Helpers/ | Math, async, asset loading, streaming utilities |
| Math/ | Geometry: Delaunay, Voronoi, OBB intersections, distances |
| Containers/ | Managed objects, hash/index lookups, scoped containers |
| Details/ | Configuration structs with UPROPERTY UI bindings |
| Types/ | Type operations (numeric, rotation, string, vector) |
| Paths/ | Path and polypath data structures |
| Sorting/ | Sorting rules and point sorter abstractions |
| Utils/ | Curve lookup, int tracking, unique name generation |
| Fitting/ | Transform fitting tasks |
| Bitmasks/ | Orbital masks for multi-dimensional filtering |

---

## File Counts

| Type | Count |
|------|-------|
| Nodes [N] | 1 (Sorting Rule provider) |
| Providers [P] | 1 |
| Factories [F] | 2 base classes |
| Shared Folders [S] | 0 |
| Data Assets [A] | 0 |
| Public Headers | 137 |
| Directory Categories | 21 |
