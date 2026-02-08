# Getting Started

**Everything in PCGEx is points.** Paths, clusters, staged assets — all just regular PCG points with semantic meaning. Vanilla PCG nodes work alongside PCGEx nodes because the data format is the same. There's no proprietary black box; it's an extension of what you already know.

## What Is PCGEx?

PCGEx (PCG Extended Toolkit) is a free, open-source plugin that extends Unreal Engine's Procedural Content Generation framework. It fills the gaps between what vanilla PCG provides and what production workflows demand.

| System | What It Does |
|--------|-------------|
| **Clusters** | Build graph networks from points — Delaunay, Voronoi, probe-based connections. Combine, refine, relax. |
| **Pathfinding** | Walk cluster connectivity with A*, Dijkstra, bidirectional, Bellman-Ford. Composable heuristics. Cell and region extraction. |
| **Filters** | Universal condition system — point, edge, Vtx, collection filters. Composable, reusable across all consuming nodes. |
| **Asset Staging** | Separate selection from spawning. Weighted collections, categories, material variations, custom properties, fitting. |
| **Sampling** | Spatial queries — nearest point, surface, spline, bounds, textures. Data transfer between datasets. |
| **Tensors** | Directional flow fields from effectors. Orient assets, bias connections, guide pathfinding. |
| **Topology** | Turn clusters and paths into triangulated dynamic mesh surfaces. |
| **Shapes** | Parametric generation — circles, polygons, grids, Fibonacci spheres. Seed-adaptive. |
| **Valency** | WFC-style constraint solving on cluster topology. |
| **Utilities** | Noise, attribute manipulation, bitmasks, sorting, partitioning, point transforms. |

## The Core Mental Model

Two ideas will carry you through most of PCGEx:

1. **Points are points.** Paths are ordered points. Clusters are points with connectivity metadata. Staged assets are points with collection references. There are no special container types — just points with attributes and assumptions about what those attributes mean.

2. **Sub-nodes compose.** Filters, heuristics, probes, tensor effectors — they're all configured as independent sub-nodes and connected to consumer nodes. One filter can serve many operations. Multiple heuristics blend into a composite score. You build behavior by composing small pieces.

## First Steps

1. **Install the plugin** — Add PCGEx to your project
2. **Explore the node palette** — PCGEx nodes appear alongside vanilla PCG nodes
3. **Build a simple graph** — Create points, build a cluster, find a path through it

## Learning Path

| Section | What You'll Learn |
|---------|-------------------|
| [Architecture](/concepts/01-architecture/) | The mental model — sub-nodes, provider/consumer pattern, vanilla interop |
| [Paths](/concepts/02-paths/) | Ordered points, segments, common path operations |
| [Clusters](/concepts/03-clusters/) | Vtx + Edges, building and refining connectivity, path interop |
| [Filters](/concepts/04-filters/) | The universal condition system — composition, reusability |
| [Asset Staging](/concepts/05-asset-staging/) | Collections, distribution, fitting, spawning |
| [Pathfinding](/concepts/06-pathfinding/) | Algorithms, heuristics, cells and regions |
| [Additional Systems](/concepts/07-additional-systems/) | Sampling, tensors, topology, shapes, match & select |

The sections build on each other. Architecture and filters are foundational — read those first. Paths and clusters are independent of each other but both feed into pathfinding. Asset staging stands alone but is prerequisite for valency.

## Example Project

A downloadable example project demonstrates common patterns across all major systems — cluster generation and refinement, pathfinding, asset staging, and more.

<!-- TODO: Add example project link when available -->

## Related

- [Node Library](/node-library/) — Complete per-node reference
