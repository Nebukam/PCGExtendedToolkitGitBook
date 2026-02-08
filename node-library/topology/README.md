---
icon: grid-round-2-plus
---

# Topology

**Topology nodes convert procedural point structures into triangulated dynamic mesh surfaces.** The input can be clusters, paths, or scattered points — each gets its own triangulation strategy, but they all produce the same mesh output.

Cluster surfaces trace edges to find closed cells and triangulate each cell into polygon faces. Path surfaces treat closed paths as polygon boundaries. Point surfaces compute Delaunay triangulation directly from scattered positions. For more control, **Clipper2 Triangulate** provides constrained Delaunay triangulation with fill rules and automatic hole detection.

Once a topology node produces mesh data, **Spawn Dynamic Mesh** creates the actual runtime DynamicMeshComponent actors. All topology nodes share common configuration for materials, UVs, normals, edge welding, and coordinate space.

### Concepts

For understanding the topology pipeline and cell constraints:

* [Topology Concepts](../../working-with-pcgex/additional-systems/topology.md)
