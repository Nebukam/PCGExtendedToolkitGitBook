---
icon: diagram-project
description: Graph-based operations for vertices and edges
---

# Clusters

Cluster nodes work with **graph data structures** - vertices connected by edges. They enable spatial algorithms like Delaunay triangulation, Voronoi diagrams, and graph-based operations like pathfinding, relaxation, and edge refinement.

## What is a Cluster?

A cluster consists of two linked point collections:
- **Vertices (Vtx)**: Points that form the nodes of the graph
- **Edges**: Points representing connections between vertices

```
Vtx Points:     ●───────●───────●
                │       │       │
                ●───────●───────●

Edge Points:    Each ─ and │ is a separate point
                with start/end vertex references
```

Most cluster nodes take **paired Vtx/Edges inputs** and produce **paired Vtx/Edges outputs**.

## Categories

| Category | Description |
|----------|-------------|
| [Diagrams](./diagrams/) | Generate clusters from points (Delaunay, Voronoi, Convex Hull) |
| [Operations](./operations/) | Manipulate, combine, and transform clusters |
| [Refine Edges](./refine-edges/) | Remove or keep edges based on various criteria |
| [Relax Clusters](./relax-clusters/) | Iteratively adjust vertex positions |
| [Path Conversion](./path-conversion/) | Convert between paths and clusters |
| [Properties](./properties/) | Write computed properties to vertices and edges |
| [Selection](./selection/) | Filter and select clusters or vertices |
| [Utility](./utility/) | Specialized cluster operations |

## Shared Reference

| Page | Description |
|------|-------------|
| [Intersection Details](./shared-settings/intersection-details.md) | Shared settings for Point/Point, Point/Edge, Edge/Edge intersection detection |

## Common Concepts

### Cluster Output Settings

Most diagram generation nodes share these output settings (`FPCGExGraphBuilderDetails`):

| Setting | Description |
|---------|-------------|
| **Edge Position** | Interpolation (0-1) for edge point placement between endpoints |
| **Solidification** | Basic edge alignment over a selected axis |
| **Remove Small/Big Clusters** | Filter output by vertex/edge count thresholds |
| **Output Edge Length** | Write edge length to an attribute |

### Hull Marking

Diagram nodes can mark points and edges that lie on the **convex hull** boundary:

- **Mark Hull**: Enable hull attribute output
- **Hull Attribute Name**: Name for the boolean hull attribute
- **Mark Edge On Touch**: Mark edges as "on hull" if either endpoint is on hull

### Urquhart Graph

The Delaunay nodes support outputting the **Urquhart graph** - a subset of the Delaunay triangulation created by removing the longest edge from each triangle. This produces a sparser graph that often better represents natural connectivity.

## Cluster Filters

Several filter nodes work specifically with cluster data:

| Filter | Description |
|--------|-------------|
| **Node Adjacency** | Test vertex adjacency relationships |
| **Node Neighbors Count** | Filter by number of connected edges |
| **Edge Length** | Filter edges by length |
| **Edge Direction** | Filter by edge direction alignment |
| **Edge Endpoints Compare** | Compare attributes between edge endpoints |

## Workflow Example

```
Points ──► Delaunay 2D ──► Refine (MST) ──► Relax (Laplacian) ──► Out
                │
                └──► Sites Output (optional)
```

1. **Generate**: Create initial cluster from points (Delaunay, Voronoi, etc.)
2. **Refine**: Remove unwanted edges (MST, longest, by filter)
3. **Relax**: Improve vertex positions (Laplacian, Force-Directed)
4. **Output**: Use vertices for placement, edges for connections

---

📦 **Module**: `PCGExElementsClusters`
