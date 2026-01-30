---
icon: shapes
description: Generate clusters from point distributions using spatial algorithms
---

# Diagram Generation

Create clusters from point distributions using **spatial partitioning algorithms**. These nodes take raw points and generate connected graph structures based on geometric relationships.

## Nodes

| Node | Description |
|------|-------------|
| [Delaunay 3D](./delaunay-3d.md) | 3D Delaunay tetrahedralization with optional Urquhart graph |
| [Delaunay 2D](./delaunay-2d.md) | 2D Delaunay triangulation with projection settings |
| [Voronoi 3D](./voronoi-3d.md) | 3D Voronoi graph from cell adjacencies |
| [Voronoi 2D](./voronoi-2d.md) | 2D Voronoi graph with multiple distance metrics |
| [Convex Hull 3D](./convex-hull-3d.md) | 3D convex hull triangulation |

## Overview

```
Input Points:           Delaunay Output:         Voronoi Output:
    ●       ●               ●───────●               ○───○───○
                           /│\     /│\              │   │   │
  ●     ●     ●    →      ● │ ●───● │ ●    or     ○───○───○
                           \│/     \│/              │   │   │
    ●       ●               ●───────●               ○───○───○

Points as seeds         Triangulation           Cell adjacency graph
```

## Delaunay vs Voronoi

These are **dual** diagrams - mathematically related but producing different structures:

| Aspect | Delaunay | Voronoi |
|--------|----------|---------|
| **Vertices** | Original input points | Cell centers (circumcenters) |
| **Edges** | Connect nearby points | Connect adjacent cells |
| **Best For** | Point-based connectivity | Region-based operations |

## Common Settings

All diagram nodes share **Cluster Output Settings** (`FPCGExGraphBuilderDetails`):

- **Edge Position**: Interpolation (0-1) for edge point placement
- **Solidification**: Edge alignment and radius settings
- **Remove Small/Big Clusters**: Filter by vertex/edge count
- **Output Edge Length**: Write edge length attribute

## Hull Marking

Diagram nodes can mark points and edges on the **convex hull** boundary:

- **Mark Hull**: Enable hull attribute output
- **Hull Attribute Name**: Name for boolean hull attribute (default: `bIsOnHull`)
- **Mark Edge On Touch**: Mark edges as "on hull" if either endpoint is on hull

## Urquhart Graph

Delaunay nodes support the **Urquhart graph** option - removes the longest edge from each triangle/tetrahedron, producing a sparser graph that often better represents natural connectivity.

## Typical Workflow

```
Points ──► Delaunay 2D ──► Refine Edges ──► Relax Clusters ──► Output
                │
                └──► Sites Output (optional circumcenters)
```

---

📦 **Module**: `PCGExElementsClusters`
