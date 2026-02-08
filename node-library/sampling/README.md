---
icon: grid-round-2-plus
---

# Sampling

**Sampling nodes query spatial data and write the results back as attributes.** Find the nearest point, trace to a surface, sample a texture at UV coordinates, count overlapping datasets. Sampling is the primary mechanism for enriching points with information about the world around them and for transferring data between processing stages.

### Sections

| Section   | Contents                                                                                |
| --------- | --------------------------------------------------------------------------------------- |
| Nearest   | Spatial queries — nearest point, bounds, spline, surface, path, line trace, containment |
| Textures  | Texture sampling pipeline — texture params, data loading, UV sampling                   |
| Neighbors | Cluster neighbor sampling — aggregate attribute values from adjacent Vtx                |

#### Overlap and Pruning

Also in this section: nodes for detecting and resolving overlap between datasets:

* **Discard By Overlap** — Score and prune overlapping collections
* **Overlap Stats** — Write per-point overlap counts
* **Self Pruning** — Remove overlapping points within a single collection

#### Mesh Sockets

**Sample Sockets** extracts socket positions from static meshes as new points, with tag and name filtering.

### Concepts

For understanding sampling as data transfer and its role across workflows:

* Sampling Concepts
