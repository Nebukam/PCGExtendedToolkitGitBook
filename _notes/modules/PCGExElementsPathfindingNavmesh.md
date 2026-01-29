# PCGExElementsPathfindingNavmesh Analysis

## Module Type
- [ ] Core Infrastructure
- [ ] Support System (provides factories/operations to other modules)
- [x] Element Module (user-facing nodes)
- [ ] Hybrid

## Dependencies
| Depends On | Why |
|------------|-----|
| PCGExCore | Base framework |
| NavigationSystem | Unreal navmesh integration |

## What This Module Provides

### Nodes (UPCGEx*Settings classes)

**2 Navmesh Pathfinding Nodes**:

| Class | Display Name | Purpose |
|-------|--------------|---------|
| `UPCGExPathfindingNavmeshSettings` | "Pathfinding : Navmesh" | Extract paths from navmesh |
| `UPCGExPathfindingPlotNavmeshSettings` | "Pathfinding : Plot Navmesh" | Plot sequential navmesh paths |

### Data Assets (if any)

None directly defined.

---

## Node Classification

### Standalone Nodes
- pathfinding-navmesh.md [N]
- pathfinding-plot-navmesh.md [N]

---

## Cross-Module Relationships

### Consumes From
- NavigationSystem: Unreal Engine navmesh

### Provides To
- Workflows using Unreal's navigation system

---

## File Counts

| Type | Count |
|------|-------|
| Nodes [N] | 2 |
