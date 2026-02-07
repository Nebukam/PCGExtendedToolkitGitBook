---
icon: grid-round-2-plus
---

# Topology

**Mesh generation from clusters and paths.** Topology nodes convert procedural point structures into triangulated dynamic mesh surfaces.

#### Available Nodes

| Node                     | Input                 | What It Does                                                            |
| ------------------------ | --------------------- | ----------------------------------------------------------------------- |
| **Cluster Surface**      | Cluster (Vtx + Edges) | Traces edges to find closed cells, triangulates each into polygon faces |
| **Path Surface**         | Closed paths          | Treats each path as a closed polygon boundary and triangulates it       |
| **Point Surface**        | Scattered points      | Computes Delaunay triangulation directly from point positions           |
| **Clipper2 Triangulate** | Closed paths          | Constrained Delaunay with fill rules and automatic hole detection       |
| **Spawn Dynamic Mesh**   | PCG Dynamic Mesh      | Spawns topology output as PCG-managed DynamicMeshComponent actors       |

All topology nodes share configuration for material, UVs, normals, edge welding, and coordinate space.

### Concepts

For understanding the topology pipeline and cell constraints:

* [Topology Concepts](../working-with-pcgex-1/additional-systems/topology.md)
