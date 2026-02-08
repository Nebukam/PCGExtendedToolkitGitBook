---
icon: grid-round-2-plus
---

# Clusters

**Clusters are the most powerful structure PCGEx offers, and nearly every node in this section operates on the same dual-dataset model: Vtx plus Edges.** Understanding that pairing is the key to everything here.

The subsections follow a natural pipeline. Most workflows touch only a few of them, but they all share the same data contract. Once you're comfortable with how Vtx and Edges flow together, every node here works the same way.

### Sections

| Section                                       | Contents                                                                          |
| --------------------------------------------- | --------------------------------------------------------------------------------- |
| [common-settings](common-settings/ "mention") | Shared configuration — cluster processor settings, edge/Vtx output options        |
| [generate](generate/ "mention")               | Build clusters — Delaunay, Voronoi, Convex Hull, Connect Points, Mesh to Clusters |
| [refine](refine/ "mention")                   | Sculpt topology — edge pruning, simplification, fusing, decomposition             |
| [transform](transform/ "mention")             | Move Vtx without changing connectivity — relaxation strategies, copy to points    |
| [analyze](analyze/ "mention")                 | Extract metrics — centrality, properties, edge ordering, state writing            |
| [interop](interop/ "mention")                 | Convert between clusters and paths — chain extraction, path merging, cutting      |
| [utilities](utilities/ "mention")             | Housekeeping — find clusters, sanitize, merge Vtx, pack, select by proximity      |



> See [Cluster Concepts](../../working-with-pcgex/clusters/) for background on cluster architecture, the dual-dataset model, and building strategies.
