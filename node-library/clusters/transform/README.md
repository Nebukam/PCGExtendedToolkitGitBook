---
icon: grid-round-2
---

# Transform

**Transform nodes move Vtx positions without changing connectivity. The topology stays exactly the same — only the geometry shifts.**

Cluster : Relax is the primary tool here. It iteratively adjusts Vtx positions using pluggable relaxation strategies provided as sub-nodes. Simple Laplacian smoothing averages each Vtx toward its neighbors. Force-directed methods add spring attraction and repulsion. Fitting strategies resolve spatial overlaps using bounding boxes or radii. Verlet integration runs a full physics simulation with gravity, friction, and edge constraints. You pick the strategy that matches what you need.

Copy to Points stamps entire cluster copies at target positions, inheriting transforms from the target point set. This is how you replicate a refined cluster across a scene.

> See [Clusters](../../../working-with-pcgex/clusters/) for background on cluster data and topology.
