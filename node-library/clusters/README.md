---
icon: grid-round-2-plus
---

# Clusters

**Clusters are the most powerful structure PCGEx offers, and nearly every node in this section operates on the same dual-dataset model: Vtx plus Edges.** Understanding that pairing is the key to everything here.

The subsections follow a natural pipeline. Most workflows touch only a few of them, but they all share the same data contract. Once you're comfortable with how Vtx and Edges flow together, every node here works the same way.

### Sections

<table data-view="cards"><thead><tr><th>Section</th><th>Contents</th></tr></thead><tbody><tr><td><a data-mention href="common-settings/">common-settings</a></td><td>Shared configuration — cluster processor settings, edge/Vtx output options</td></tr><tr><td><a data-mention href="generate/">generate</a></td><td>Build clusters — Delaunay, Voronoi, Convex Hull, Connect Points, Mesh to Clusters</td></tr><tr><td><a data-mention href="refine/">refine</a></td><td>Sculpt topology — edge pruning, simplification, fusing, decomposition</td></tr><tr><td><a data-mention href="transform/">transform</a></td><td>Move Vtx without changing connectivity — relaxation strategies, copy to points</td></tr><tr><td><a data-mention href="analyze/">analyze</a></td><td>Extract metrics — centrality, properties, edge ordering, state writing</td></tr><tr><td><a data-mention href="interop/">interop</a></td><td>Convert between clusters and paths — chain extraction, path merging, cutting</td></tr><tr><td><a data-mention href="utilities/">utilities</a></td><td>Housekeeping — find clusters, sanitize, merge Vtx, pack, select by proximity</td></tr></tbody></table>



> See [Cluster Concepts](../../working-with-pcgex/clusters/) for background on cluster architecture, the dual-dataset model, and building strategies.
