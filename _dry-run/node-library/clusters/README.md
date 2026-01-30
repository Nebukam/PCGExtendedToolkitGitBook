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

## Node Categories

### Diagram Generation

Create clusters from point distributions using spatial algorithms.

| Node | Description |
|------|-------------|
| [Delaunay 3D](./delaunay-3d.md) | 3D Delaunay tetrahedralization with optional Urquhart graph |
| [Delaunay 2D](./delaunay-2d.md) | 2D Delaunay triangulation with projection settings |
| [Voronoi 3D](./voronoi-3d.md) | 3D Voronoi graph from cell adjacencies |
| [Voronoi 2D](./voronoi-2d.md) | 2D Voronoi graph with multiple distance metrics |
| [Convex Hull 3D](./convex-hull-3d.md) | 3D convex hull triangulation |
| [Convex Hull 2D](./convex-hull-2d.md) | 2D convex hull (deprecated) |

### Cluster Operations

Manipulate, combine, and transform clusters.

| Node | Description |
|------|-------------|
| [Fuse Clusters](./fuse-clusters.md) | Find point/edge and edge/edge intersections |
| [Connect Clusters](./connect-clusters.md) | Connect isolated clusters by closest vertices |
| [Merge Vertices](./merge-vertices.md) | Merge vertices so all edges share the same collection |
| [Sanitize Clusters](./sanitize-clusters.md) | Ensure clean, interconnected clusters |
| [Simplify Clusters](./simplify-clusters.md) | Simplify by operating on isolated chains |
| [Subdivide Edges](./subdivide-edges.md) | Add intermediate points along edges |
| [Make Unique](./make-unique.md) | Output unique data pointers for input clusters |
| [Pack Clusters](./pack-clusters.md) | Pack each cluster into a single point data object |
| [Unpack Clusters](./unpack-clusters.md) | Restore vtx/edge clusters from packed dataset |

### Edge Refinement

Remove or keep edges based on various criteria. Uses sub-node factories for flexible refinement rules.

| Node | Description |
|------|-------------|
| [Refine Edges](./refine-edges/) | Parent node accepting refinement sub-operations |

See [Edge Refinement Operations](./refine-edges/#available-operations) for the full list of refinement algorithms (MST, Gabriel, Length-based, Score-based, etc.).

### Relaxation

Iteratively adjust vertex positions to improve cluster quality. Uses sub-node factories for different relaxation algorithms.

| Node | Description |
|------|-------------|
| [Relax Clusters](./relax-clusters/) | Parent node accepting relaxation sub-operations |

See [Relaxation Operations](./relax-clusters/#available-operations) for available algorithms (Laplacian, Force Directed, Verlet, Box/Radius Fitting).

### Path Conversion

Convert between paths and clusters.

| Node | Description |
|------|-------------|
| [Path to Clusters](./path-to-clusters.md) | Merge paths into edge clusters |
| [Break to Paths](./break-to-paths.md) | Extract continuous edge chains as paths |
| [Cut Clusters](./cut-clusters.md) | Cut cluster nodes and edges using paths |

### Vertex & Edge Properties

Write computed properties to vertices and edges.

| Node | Description |
|------|-------------|
| [Vtx Properties](./vtx-properties.md) | Extract edge information to vertex attributes |
| [Edge Properties](./edge-properties.md) | Extract endpoint information to edge attributes |
| [Sample Neighbors](./sample-neighbors.md) | Sample attributes from connected vertices |

### Selection & Filtering

Filter and pick clusters or vertices.

| Node | Description |
|------|-------------|
| [Filter Vtx](./filter-vtx.md) | Filter vertices from clusters |
| [Pick Closest](./pick-closest.md) | Pick clusters closest to target points |
| [Find Clusters](./find-clusters.md) | Find vtx/edge pairs in data collections |
| [Find on Bounds](./find-on-bounds.md) | Find closest vtx or edge on cluster bounds |

### Utility

Specialized cluster operations.

| Node | Description |
|------|-------------|
| [Build Custom Graph](./build-custom-graph.md) | Create clusters using blueprint objects |
| [Mesh to Clusters](./mesh-to-clusters.md) | Create clusters from mesh topology |
| [Copy to Points](./copy-to-points.md) | Create cluster copies at target points |
| [Partition Vtx](./partition-vtx.md) | Split vertices into per-cluster groups |
| [Centrality](./centrality.md) | Compute betweenness centrality |

## Common Concepts

### Cluster Output Settings

Most diagram generation nodes share these output settings:

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
Points ──► Delaunay 2D ──► Refine (Remove Longest) ──► Relax (Laplacian) ──► Out
                │
                └──► Sites Output (optional)
```

1. **Generate**: Create initial cluster from points (Delaunay, Voronoi, etc.)
2. **Refine**: Remove unwanted edges (MST, longest, by filter)
3. **Relax**: Improve vertex positions (Laplacian, Force-Directed)
4. **Output**: Use vertices for placement, edges for connections

---

📦 **Module**: `PCGExElementsClusters`
