---
icon: grid-round-2-plus
---

# Clusters

**Clusters are the most powerful structure PCGEx offers, and nearly every node in this section operates on the same dual-dataset model: Vtx plus Edges.** Understanding that pairing is the key to everything here.

The subsections follow a natural pipeline. Generation builds initial connectivity from points or meshes. Refinement prunes and reshapes edges. Transform adjusts Vtx positions without changing topology. Analyze extracts structural metrics back into attributes. Interop bridges clusters and paths so data can move between the two systems. Utilities handle the bookkeeping that keeps cluster data clean between stages.

Most workflows touch only a few of these subsections, but they all share the same data contract. Once you're comfortable with how Vtx and Edges flow together, every node here works the same way.

> See [Cluster Concepts](../../working-with-pcgex/clusters/) for background on cluster architecture, the dual-dataset model, and building strategies.
