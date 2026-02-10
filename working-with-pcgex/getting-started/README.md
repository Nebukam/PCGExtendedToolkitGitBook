---
icon: power-off
layout:
  width: default
  title:
    visible: true
  description:
    visible: true
  tableOfContents:
    visible: true
  outline:
    visible: true
  pagination:
    visible: true
  metadata:
    visible: true
---

# Getting Started

**Everything in PCGEx is points.** Paths, clusters, staged assets — all just regular PCG points with semantic meaning. Vanilla PCG nodes work alongside PCGEx nodes because the data format is the same. There's no proprietary black box; it's an extension of what you already know.

### What Is PCGEx?

PCGEx (PCG Extended Toolkit) is a free, open-source plugin that extends Unreal Engine's Procedural Content Generation framework. It fills the gaps between what vanilla PCG provides and what production workflows demand.

<table data-view="cards"><thead><tr><th>System</th><th>What It Does</th><th data-hidden data-card-cover data-type="image">Cover image</th></tr></thead><tbody><tr><td><a data-mention href="../clusters/">clusters</a></td><td>Build graph networks from points — Delaunay, Voronoi, probe-based connections. Combine, refine, relax.</td><td><a href="../../.gitbook/assets/placeholder_B.jpg">placeholder_B.jpg</a></td></tr><tr><td><a data-mention href="../pathfinding/">pathfinding</a></td><td>Walk cluster connectivity with A*, Dijkstra, bidirectional, Bellman-Ford. Composable heuristics. Cell and region extraction.</td><td><a href="../../.gitbook/assets/placeholder_C.jpg">placeholder_C.jpg</a></td></tr><tr><td><a data-mention href="../filters/">filters</a></td><td>Universal condition system — point, edge, Vtx, collection filters. Composable, reusable across all consuming nodes.</td><td><a href="../../.gitbook/assets/placeholder_A.jpg">placeholder_A.jpg</a></td></tr><tr><td><a data-mention href="../asset-staging/">asset-staging</a></td><td>Separate selection from spawning. Weighted collections, categories, material variations, custom properties, fitting.</td><td><a href="../../.gitbook/assets/placeholder_C.jpg">placeholder_C.jpg</a></td></tr><tr><td><a data-mention href="../../node-library/sampling/">sampling</a></td><td>Spatial queries — nearest point, surface, spline, bounds, textures. Data transfer between datasets.</td><td><a href="../../.gitbook/assets/placeholder_B.jpg">placeholder_B.jpg</a></td></tr><tr><td><a data-mention href="../additional-systems/tensors.md">tensors.md</a></td><td>Directional flow fields from effectors. Orient assets, bias connections, guide pathfinding.</td><td><a href="../../.gitbook/assets/placeholder_A.jpg">placeholder_A.jpg</a></td></tr><tr><td><a data-mention href="../additional-systems/topology.md">topology.md</a></td><td>Turn clusters and paths into triangulated dynamic mesh surfaces.</td><td><a href="../../.gitbook/assets/placeholder_B.jpg">placeholder_B.jpg</a></td></tr><tr><td><a data-mention href="../additional-systems/shapes.md">shapes.md</a></td><td>Parametric generation — circles, polygons, grids, Fibonacci spheres. Seed-adaptive.</td><td><a href="../../.gitbook/assets/placeholder_C.jpg">placeholder_C.jpg</a></td></tr><tr><td><a data-mention href="../valency/">valency</a></td><td>WFC-style constraint solving on cluster topology.</td><td><a href="../../.gitbook/assets/placeholder_A.jpg">placeholder_A.jpg</a></td></tr><tr><td><a data-mention href="../additional-systems/match-and-select.md">match-and-select.md</a></td><td>Noise, attribute manipulation, bitmasks, sorting, partitioning, point transforms.</td><td><a href="../../.gitbook/assets/placeholder_C.jpg">placeholder_C.jpg</a></td></tr></tbody></table>

### The Core Mental Model

Two ideas will carry you through most of PCGEx:

1. **Points are points.** Paths are ordered points. Clusters are points with connectivity metadata. Staged assets are points with collection references. There are no special container types — just points with attributes and assumptions about what those attributes mean.
2. **Sub-nodes compose.** Filters, heuristics, probes, tensor effectors — they're all configured as independent sub-nodes and connected to consumer nodes. One filter can serve many operations. Multiple heuristics blend into a composite score. You build behavior by composing small pieces.

### First Steps

1. **Install the plugin** — Add PCGEx to your project
2. **Explore the node palette** — PCGEx nodes appear alongside vanilla PCG nodes
3. **Build a simple graph** — Create points, build a cluster, find a path through it

### Learning Path

<table data-view="cards"><thead><tr><th>Section</th><th>What You'll Learn</th><th data-hidden data-card-cover data-type="image">Cover image</th></tr></thead><tbody><tr><td><a data-mention href="../architecture/">architecture</a></td><td>The mental model — sub-nodes, provider/consumer pattern, vanilla interop</td><td><a href="../../.gitbook/assets/placeholder_B.jpg">placeholder_B.jpg</a></td></tr><tr><td><a data-mention href="../paths/">paths</a></td><td>Ordered points, segments, common path operations</td><td><a href="../../.gitbook/assets/placeholder_C.jpg">placeholder_C.jpg</a></td></tr><tr><td><a data-mention href="../clusters/">clusters</a></td><td>Vtx + Edges, building and refining connectivity, path interop</td><td><a href="../../.gitbook/assets/placeholder_A.jpg">placeholder_A.jpg</a></td></tr><tr><td><a data-mention href="../filters/">filters</a></td><td>The universal condition system — composition, reusability</td><td><a href="../../.gitbook/assets/placeholder_C.jpg">placeholder_C.jpg</a></td></tr><tr><td><a data-mention href="../asset-staging/">asset-staging</a></td><td>Collections, distribution, fitting, spawning</td><td><a href="../../.gitbook/assets/placeholder_B.jpg">placeholder_B.jpg</a></td></tr><tr><td><a data-mention href="../pathfinding/">pathfinding</a></td><td>Algorithms, heuristics, cells and regions</td><td><a href="../../.gitbook/assets/placeholder_C.jpg">placeholder_C.jpg</a></td></tr><tr><td><a data-mention href="../additional-systems/">additional-systems</a></td><td>Sampling, tensors, topology, shapes, resolvers</td><td><a href="../../.gitbook/assets/placeholder_A.jpg">placeholder_A.jpg</a></td></tr></tbody></table>

The sections build on each other. Architecture and filters are foundational — read those first. Paths and clusters are independent of each other but both feed into pathfinding. Asset staging stands alone but is prerequisite for valency.

### Example Project

A downloadable example project demonstrates common patterns across all major systems — cluster generation and refinement, pathfinding, asset staging, and more.

{% content-ref url="example-project.md" %}
[example-project.md](example-project.md)
{% endcontent-ref %}

### Related

* [Node Library](../../node-library/overview.md) — Complete per-node reference
