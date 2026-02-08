---
icon: grid-round-2
---

# Generate

**There are two fundamentally different ways to generate a cluster: construct it from geometry, or discover it through proximity.**

Geometric construction nodes like Delaunay, Voronoi, and Convex Hull produce deterministic topologies derived from the spatial arrangement of your input points. They come in both 2D and 3D variants. These are useful when you need mathematically rigorous connectivity.

Connect Points takes the other approach. It uses configurable probes to test point-to-point relationships and build edges based on criteria you define. This gives you fine-grained control over what gets connected and why.

Mesh to Clusters bridges an entirely different source — it reads static mesh topology and converts it into the cluster dual-dataset format, bringing mesh connectivity into the PCGEx pipeline.

> See [Building Clusters](../../../working-with-pcgex/clusters/building-clusters.md) for an overview of cluster generation strategies.
