---
icon: route
description: Pathfinding nodes for graph traversal, cell discovery, and navmesh navigation
---

# Pathfinding

The Pathfinding module provides nodes for finding paths through cluster graphs and navigation meshes. These nodes enable AI-like navigation, cellular decomposition, and boundary detection for procedural content.

## Cluster-Based Pathfinding

These nodes operate on cluster graphs (Vtx/Edges) to find paths:

| Node | Description |
|------|-------------|
| [Pathfinding : Edges](./pathfinding-edges.md) | Find paths between seed and goal points through cluster graphs |
| [Pathfinding : Plot Edges](./pathfinding-plot-edges.md) | Chain waypoints into a continuous path through clusters |
| [Pathfinding : Grow Paths](./pathfinding-grow-paths.md) | Grow paths outward from seeds using iterative expansion |

## Cell Discovery

These nodes discover closed polygon cells within cluster graphs:

| Node | Description |
|------|-------------|
| [Pathfinding : Find Cells](./pathfinding-find-cells.md) | Find cells around seed points |
| [Pathfinding : Find Cells (Bounded)](./pathfinding-find-cells-bounded.md) | Find cells with spatial bounds triage (Inside/Touching/Outside) |
| [Pathfinding : Find All Cells](./pathfinding-find-all-cells.md) | Find all cells in the cluster |
| [Pathfinding : Find All Cells (Bounded)](./pathfinding-find-all-cells-bounded.md) | Find all cells with spatial bounds triage |
| [Pathfinding : Find Cluster Hull](./pathfinding-find-cluster-hull.md) | Find the outer boundary (hull) of each cluster |

## Navmesh Pathfinding

These nodes use Unreal Engine's navigation mesh system:

| Node | Description |
|------|-------------|
| [Pathfinding : Navmesh](./pathfinding-navmesh.md) | Find paths using level navmesh |
| [Pathfinding : Plot Navmesh](./pathfinding-plot-navmesh.md) | Chain waypoints using navmesh routes |

## Common Concepts

### Goal Pickers

Goal picker sub-nodes control how goal points are selected for pathfinding:
- **Default** - Match seed index to goal index
- **All** - Path from each seed to all goals
- **Random** - Randomly select goals
- **Index Attribute** - Read goal index from attributes

See [Goal Pickers](../sub-nodes/pickers/README.md) for details.

### Heuristics

Heuristic sub-nodes score path traversal costs:
- **Shortest Distance** - Prefer shorter paths
- **Angular** - Prefer paths that maintain direction
- **Attribute Score** - Use custom attribute values
- And more...

See [Heuristics](../sub-nodes/heuristics/README.md) for details.

### Search Algorithms

Search algorithm sub-nodes control the pathfinding strategy:
- **A\*** - Best for most cases
- **Dijkstra** - Guaranteed shortest path
- **Bellman-Ford** - Handles negative weights
- **Bidirectional** - Search from both ends

### Cell Constraints

Cell discovery nodes share common constraint options:
- **Rotation Method** - How edges are ordered around vertices
- **Shape Filtering** - Convex/concave filtering
- **Size Filtering** - By bounds, area, perimeter, point count
- **Compactness Filtering** - By shape regularity

### Projection Settings

2D projection is used for cell calculations:
- **Normal** - Explicit projection direction
- **Best Fit** - Auto-computed from point distribution

---

📦 **Modules**: `PCGExElementsPathfinding`, `PCGExElementsPathfindingNavmesh`
