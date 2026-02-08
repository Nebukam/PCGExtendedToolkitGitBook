---
icon: grid-round-2
---

# Analyze

**These nodes read cluster topology and write what they find back as attributes. Nothing is modified — only measured.**

Centrality scoring is the flagship operation, computing metrics like betweenness, closeness, and degree that quantify each Vtx's structural importance. Property extraction nodes pull per-Vtx and per-edge information — edge counts, normals, lengths, directions — and write it to attributes for downstream use. Edge ordering normalizes start/end endpoint direction for operations that are sensitive to winding. Vtx partitioning splits shared Vtx collections into per-cluster groups. State writing encodes cluster conditions as bitmask attributes.

The pattern across all of these is the same: topology in, attributes out. They're read-only with respect to the cluster itself.

> See [Clusters](../../../working-with-pcgex/clusters/) for background on cluster data and topology.
