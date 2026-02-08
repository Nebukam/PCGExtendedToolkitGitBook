---
icon: grid-round-2-plus
---

# Clusters

**Everything for building, refining, transforming, and analyzing clusters.** From generating initial connectivity with diagrams and probes, through edge refinement and relaxation, to decomposition and path conversion.

Clusters are the dual-dataset system: Vtx (points) connected by Edges (also points). Most operations in this section take both as input.

### Sections

| Section       | Contents                                                                                            |
| ------------- | --------------------------------------------------------------------------------------------------- |
| Generate      | Create clusters — diagrams (Delaunay, Voronoi, etc.), Connect Points with probes, from paths/meshes |
| Refine        | Remove or keep edges — filter-based, geometric (Gabriel, MST), overlap removal                      |
| Transform     | Modify cluster shape — relaxation (Laplacian, force-directed, Verlet), centrality                   |
| Analyze       | Extract properties — cluster states, metadata, statistics                                           |
| Pack / Unpack | Bundle and unbundle cluster data                                                                    |
| Interop       | Convert between clusters and paths                                                                  |

#### Generation Subsections

| Subsection     | Contents                                                               |
| -------------- | ---------------------------------------------------------------------- |
| Diagrams       | Delaunay 2D/3D, Voronoi 2D/3D, Convex Hull, Cell Diagram, Dual Graph   |
| Connect Points | Probe-based connectivity with distance, direction, and custom criteria |
| Probes         | All probe types for Connect Points                                     |

### Concepts

For understanding cluster architecture, the dual-dataset model, and building strategies:

* [Cluster Concepts](../../working-with-pcgex/clusters/)
