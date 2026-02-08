---
icon: grid-round-2
---

# Refine

**Raw cluster generation almost never gives you exactly the topology you want. Refinement is where you sculpt it.**

The central node here is Cluster : Refine, which accepts one or more refinement operation sub-nodes. These range from filter-based pruning (keep or remove edges by condition) to geometric refinements like Gabriel graph construction and minimum spanning tree extraction, to overlap removal for cleaning up crossed edges. You can chain multiple operations in a single Refine pass.

Beyond Refine, this section includes standalone nodes that handle broader structural changes. Simplification collapses redundant degree-2 chains. Vtx filtering removes points entirely with cascading edge cleanup. Fuse Clusters merges overlapping Vtx across separate clusters. Connect Clusters bridges disconnected components, and Decompose Clusters splits them apart. These are coarser tools than edge refinement — they reshape the cluster at a structural level rather than edge by edge.

> See [Refining Clusters](../../../working-with-pcgex/clusters/refining-clusters.md) for refinement strategies and workflows.
