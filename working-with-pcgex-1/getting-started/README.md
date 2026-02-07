---
icon: power-off
---

# Getting Started

**Everything in PCGEx is points.** Paths, clusters, staged assets — all just regular PCG points with semantic meaning. Vanilla PCG nodes work alongside PCGEx nodes because the data format is the same. There's no proprietary black box; it's an extension of what you already know.

### What Is PCGEx?

PCGEx (PCG Extended Toolkit) is a free, open-source plugin that extends Unreal Engine's Procedural Content Generation framework. It fills the gaps between what vanilla PCG provides and what production workflows demand.

<table data-view="cards"><thead><tr><th>System</th><th>What It Does</th><th data-hidden data-card-cover data-type="image">Cover image</th></tr></thead><tbody><tr><td><strong>Clusters</strong></td><td>Build graph networks from points — Delaunay, Voronoi, probe-based connections. Combine, refine, relax.</td><td><a href="../../.gitbook/assets/placeholder-wide.jpg">placeholder-wide.jpg</a></td></tr><tr><td><strong>Pathfinding</strong></td><td>Walk cluster connectivity with A*, Dijkstra, bidirectional, Bellman-Ford. Composable heuristics. Cell and region extraction.</td><td><a href="../../.gitbook/assets/placeholder-wide.jpg">placeholder-wide.jpg</a></td></tr><tr><td><strong>Filters</strong></td><td>Universal condition system — point, edge, Vtx, collection filters. Composable, reusable across all consuming nodes.</td><td><a href="../../.gitbook/assets/placeholder-wide.jpg">placeholder-wide.jpg</a></td></tr><tr><td><strong>Asset Staging</strong></td><td>Separate selection from spawning. Weighted collections, categories, material variations, custom properties, fitting.</td><td><a href="../../.gitbook/assets/placeholder-wide.jpg">placeholder-wide.jpg</a></td></tr><tr><td><strong>Sampling</strong></td><td>Spatial queries — nearest point, surface, spline, bounds, textures. Data transfer between datasets.</td><td><a href="../../.gitbook/assets/placeholder-wide.jpg">placeholder-wide.jpg</a></td></tr><tr><td><strong>Tensors</strong></td><td>Directional flow fields from effectors. Orient assets, bias connections, guide pathfinding.</td><td><a href="../../.gitbook/assets/placeholder-wide.jpg">placeholder-wide.jpg</a></td></tr><tr><td><strong>Topology</strong></td><td>Turn clusters and paths into triangulated dynamic mesh surfaces.</td><td><a href="../../.gitbook/assets/placeholder-wide.jpg">placeholder-wide.jpg</a></td></tr><tr><td><strong>Shapes</strong></td><td>Parametric generation — circles, polygons, grids, Fibonacci spheres. Seed-adaptive.</td><td><a href="../../.gitbook/assets/placeholder-wide.jpg">placeholder-wide.jpg</a></td></tr><tr><td><strong>Valency</strong></td><td>WFC-style constraint solving on cluster topology.</td><td><a href="../../.gitbook/assets/placeholder-wide.jpg">placeholder-wide.jpg</a></td></tr><tr><td><strong>Utilities</strong></td><td>Noise, attribute manipulation, bitmasks, sorting, partitioning, point transforms.</td><td><a href="../../.gitbook/assets/placeholder-wide.jpg">placeholder-wide.jpg</a></td></tr></tbody></table>

### The Core Mental Model

Two ideas will carry you through most of PCGEx:

1. **Points are points.** Paths are ordered points. Clusters are points with connectivity metadata. Staged assets are points with collection references. There are no special container types — just points with attributes and assumptions about what those attributes mean.
2. **Sub-nodes compose.** Filters, heuristics, probes, tensor effectors — they're all configured as independent sub-nodes and connected to consumer nodes. One filter can serve many operations. Multiple heuristics blend into a composite score. You build behavior by composing small pieces.

### First Steps

1. **Install the plugin** — Add PCGEx to your project
2. **Explore the node palette** — PCGEx nodes appear alongside vanilla PCG nodes
3. **Build a simple graph** — Create points, build a cluster, find a path through it

### Learning Path

<table data-view="cards"><thead><tr><th>Section</th><th>What You'll Learn</th></tr></thead><tbody><tr><td>Architecture</td><td>The mental model — sub-nodes, provider/consumer pattern, vanilla interop</td></tr><tr><td>Paths</td><td>Ordered points, segments, common path operations</td></tr><tr><td>Clusters</td><td>Vtx + Edges, building and refining connectivity, path interop</td></tr><tr><td>Filters</td><td>The universal condition system — composition, reusability</td></tr><tr><td>Asset Staging</td><td>Collections, distribution, fitting, spawning</td></tr><tr><td>Pathfinding</td><td>Algorithms, heuristics, cells and regions</td></tr><tr><td>Additional Systems</td><td>Sampling, tensors, topology, shapes, resolvers</td></tr></tbody></table>

The sections build on each other. Architecture and filters are foundational — read those first. Paths and clusters are independent of each other but both feed into pathfinding. Asset staging stands alone but is prerequisite for valency.

### Example Project

A downloadable example project demonstrates common patterns across all major systems — cluster generation and refinement, pathfinding, asset staging, and more.

{% content-ref url="example-project.md" %}
[example-project.md](example-project.md)
{% endcontent-ref %}

### Related

* Node Library — Complete per-node reference
