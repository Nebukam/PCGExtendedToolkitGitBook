# PCGExElementsPathfinding Analysis

## Module Type
- [ ] Core Infrastructure
- [ ] Support System (provides factories/operations to other modules)
- [x] Element Module (user-facing nodes)
- [ ] Hybrid

## Dependencies
| Depends On | Why |
|------------|-----|
| PCGExCore | Base framework |
| PCGExGraphs | Cluster structures, graph traversal |
| PCGExHeuristics | Pathfinding scoring |
| PCGExFilters | Node/edge filtering |

## What This Module Provides

### Nodes (UPCGEx*Settings classes)

**8 Pathfinding Nodes**:

| Class | Display Name | Purpose |
|-------|--------------|---------|
| `UPCGExPathfindingEdgesSettings` | "Pathfinding : Edges" | Extract paths from edge clusters |
| `UPCGExFindAllCellsSettings` | "Find All Cells" | Find closed cells around seeds |
| `UPCGExFindAllCellsBoundedSettings` | "Find All Cells (Bounded)" | Cells with spatial bounds |
| `UPCGExFindContoursSettings` | "Find Contours" | Find contours in clusters |
| `UPCGExFindContoursBoundedSettings` | "Find Contours (Bounded)" | Contours with bounds |
| `UPCGExFindClusterHullSettings` | "Find Cluster Hull" | Find cluster hull paths |
| `UPCGExPathfindingPlotEdgesSettings` | "Pathfinding : Plot Edges" | Plot sequential edge paths |
| `UPCGExPathfindingGrowPathsSettings` | "Pathfinding : Grow Paths" | Grow paths from seeds |

### Data Assets (if any)

None directly defined.

---

## Node Classification

### Standalone Nodes
- pathfinding-edges.md [N]
- find-all-cells.md [N]
- find-all-cells-bounded.md [N]
- find-contours.md [N]
- find-contours-bounded.md [N]
- find-cluster-hull.md [N]
- pathfinding-plot-edges.md [N]
- pathfinding-grow-paths.md [N]

### Nodes with Shared Factories
- All pathfinding nodes accept heuristics from PCGExHeuristics

---

## Cross-Module Relationships

### Consumes From
- PCGExGraphs: Cluster structures, graph traversal
- PCGExHeuristics: Scoring/weighting for path selection
- PCGExFilters: Node/edge filtering

### Provides To
- Any workflow requiring path extraction from clusters

---

## File Counts

| Type | Count |
|------|-------|
| Nodes [N] | 8 |
