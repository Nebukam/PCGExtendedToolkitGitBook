---
icon: grid-round-2
---

# Interop

**Clusters and paths are different views of connectivity, and sometimes you need to move between them.**

These nodes handle the conversion in both directions. You can break cluster edge chains into ordered path collections, or take existing paths and merge them into cluster topology with proper intersection handling. Cutting operations let you use paths as blades that slice through cluster edges and Vtx.

The key idea is that clusters store connectivity as unordered point pairs, while paths store it as ordered sequences. Moving between the two requires decisions about chain traversal, endpoint merging, and winding order — and that's what these nodes manage.

> See [Cluster-Path Interoperability](../../../working-with-pcgex/clusters/cluster-path-interoperability.md) for background on data format conversion.
