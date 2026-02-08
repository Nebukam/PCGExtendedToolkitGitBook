---
icon: grid-round-2-plus
---

# Clusters

**Clusters are the most powerful structure PCGEx offers, and nearly every node in this section operates on the same dual-dataset model: Vtx plus Edges.** Understanding that pairing is the key to everything here.

The subsections follow a natural pipeline. Most workflows touch only a few of them, but they all share the same data contract. Once you're comfortable with how Vtx and Edges flow together, every node here works the same way.

### Sections

| Section         | Contents                                                                           |
| --------------- | ---------------------------------------------------------------------------------- |
| Common Settings | Shared configuration — cluster processor settings, edge/Vtx output options         |
| Generate        | Build clusters — Delaunay, Voronoi, Convex Hull, Connect Points, Mesh to Clusters  |
| Refine          | Sculpt topology — edge pruning, simplification, fusing, decomposition              |
| Transform       | Move Vtx without changing connectivity — relaxation strategies, copy to points     |
| Analyze         | Extract metrics — centrality, properties, edge ordering, state writing             |
| Interop         | Convert between clusters and paths — chain extraction, path merging, cutting       |
| Utilities       | Housekeeping — find clusters, sanitize, merge Vtx, pack, select by proximity      |

> See [Cluster Concepts](../../working-with-pcgex/clusters/) for background on cluster architecture, the dual-dataset model, and building strategies.
