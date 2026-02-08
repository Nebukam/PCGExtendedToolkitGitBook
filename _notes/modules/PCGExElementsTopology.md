# PCGExElementsTopology Analysis

## Module Type
- [ ] Core Infrastructure
- [ ] Support System (provides factories/operations to other modules)
- [x] Element Module (user-facing nodes)
- [ ] Hybrid

## Dependencies
| Depends On | Why |
|------------|-----|
| PCGExCore | Base framework |
| PCGExGraphs | Cluster structures |
| GeometryCore | Mesh generation |

## What This Module Provides

### Nodes (UPCGEx*Settings classes)

**6 Topology/Mesh Nodes**:

| Class | Display Name | Purpose |
|-------|--------------|---------|
| `UPCGExTopologyProcessorSettings` | "Topology Processor" | Base topology processing |
| `UPCGExSpawnDynamicMeshSettings` | "Spawn Dynamic Mesh" | Create dynamic mesh actors |
| `UPCGExClipper2TriangulateSettings` | "Clipper2 Triangulate" | Constrained Delaunay triangulation |
| `UPCGExTopologyClusterSurfaceSettings` | "Topology : Cluster Surface" | Cluster to mesh surface |
| `UPCGExTopologyPointSurfaceSettings` | "Topology : Point Surface" | Points to mesh surface |
| `UPCGExTopologyPathSurfaceSettings` | "Topology : Path Surface" | Path to mesh surface |

### Data Assets (if any)

None directly defined.

---

## Node Classification

### Standalone Nodes
- topology-processor.md [N]
- spawn-dynamic-mesh.md [N]
- clipper2-triangulate.md [N]
- topology-cluster-surface.md [N]
- topology-point-surface.md [N]
- topology-path-surface.md [N]

---

## Cross-Module Relationships

### Consumes From
- PCGExGraphs: Cluster structures for topology
- GeometryCore: Mesh generation utilities

### Provides To
- Mesh generation workflows

---

## File Counts

| Type | Count |
|------|-------|
| Nodes [N] | 6 |
