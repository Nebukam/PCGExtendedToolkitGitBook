---
icon: grid-round-2
---

# Transform

**Position optimization and layout adjustment for cluster vertices.**

| Node               | Description                                                                                    |
| ------------------ | ---------------------------------------------------------------------------------------------- |
| **Relax Clusters** | Iteratively adjusts Vtx positions using a selected relaxation method. Topology stays the same. |

### Relaxation Methods

| Method             | Description                                                 |
| ------------------ | ----------------------------------------------------------- |
| **Laplacian**      | Simple smoothing toward neighbor centroid                   |
| **Force Directed** | Spring attraction + electrostatic repulsion                 |
| **Box Fitting**    | Resolve bounding box overlaps                               |
| **Box Fitting v2** | Resolve bounding box overlaps (improved)                    |
| **Radius Fitting** | Resolve spherical overlaps                                  |
| **Verlet**         | Physics simulation with gravity, friction, edge constraints |

> See [Clusters](../../../working-with-pcgex-1/clusters/) for background on cluster data and topology.
