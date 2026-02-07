---
icon: grid-round-2
---

# Diagrams

**Geometric diagram generators -- "shotgun" approaches that create comprehensive connectivity from point clouds.**

| Node               | Description                                                                                        |
| ------------------ | -------------------------------------------------------------------------------------------------- |
| **Delaunay 2D**    | 2D triangulation via projection. Urquhart mode strips longest triangle edge. Optional site output. |
| **Delaunay 3D**    | 3D tetrahedralization. Urquhart and hull marking.                                                  |
| **Voronoi 2D**     | 2D Voronoi with Euclidean, Manhattan, or Chebyshev metric. Cell center methods.                    |
| **Voronoi 3D**     | 3D Voronoi. Circumcenter/centroid/balanced cell centers.                                           |
| **Convex Hull 2D** | 2D convex hull boundary. (Deprecated -- use Find Convex Hull 2D)                                   |
| **Convex Hull 3D** | 3D convex hull triangulation.                                                                      |
| **Cell Diagram**   | Converts cluster cells into adjacency graph. Cell centroids become Vtx.                            |
| **Dual Graph**     | Swaps edges and vertices. Topological inversion.                                                   |

> See [Building Clusters](../../../../working-with-pcgex-1/clusters/building-clusters.md) for an overview of diagram-based generation.
