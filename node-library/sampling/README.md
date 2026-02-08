---
icon: grid-round-2-plus
---

# Sampling

**Sampling is how points learn about the world around them.** Every sampler follows the same pattern: query some spatial data, then write the results back as point attributes. The source can be other points, a surface, a spline, a texture, or even another collection entirely. The output is always attributes your downstream nodes can act on.

### Sections

| Section                    | Contents                                                                                |
| -------------------------- | --------------------------------------------------------------------------------------- |
| Common Settings            | Shared configuration — apply sampling details                                           |
| Nearest                    | Spatial queries — nearest point, bounds, spline, surface, path, line trace, containment |
| Cluster : Sample Neighbors | Aggregate attribute values from adjacent Vtx using sampler sub-nodes                    |
| Textures                   | Texture sampling pipeline — texture params, data loading, UV sampling                   |

Beyond spatial queries and texture reads, sampling also covers overlap analysis. Nodes like **Discard By Overlap** and **Self Pruning** use the same spatial reasoning to score and remove overlapping points — either across collections or within a single one. Overlap stats can be written as attributes for downstream filtering without discarding anything.

### Concepts

For understanding sampling as data transfer and its role across workflows:

* [Sampling Concepts](../../working-with-pcgex/additional-systems/sampling.md)
