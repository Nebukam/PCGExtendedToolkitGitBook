---
icon: cubes-stacked
---

# Additional Systems

**PCGEx includes several specialized systems beyond the core workflow.** Some — like sampling — are key to unlocking the full potential of your data. Others are more specialized, worth learning when your workflow calls for them. All follow the same provider/consumer pattern you already know.

### Transverse Systems

These sub-node systems work across multiple node types:

#### Match & Select

* **Matching**: Correlate data between sources and targets using match rules
* **Pickers**: Index selection strategies (constant, range, attribute-driven)

See [match-and-select.md](match-and-select.md "mention") for details.

#### Blending

Whenever a node combines data from multiple sources — sampling neighbors, fusing points, smoothing paths — blending controls how each attribute merges. Two configuration interfaces: per-attribute BlendOp sub-nodes for fine control, or monolithic bulk settings for simple cases.

See [blending.md](blending.md "mention") for details.

### Self-Contained Modules

Each module addresses specific procedural needs:

#### Sampling

The most broadly useful system here. Sampling queries spatial data — nearest points, surfaces, splines, textures — and writes the results back as attributes. It's the primary mechanism for transferring data between datasets, recovering attributes across processing stages, and enriching points with information about the world around them. If there's one system in this section to learn early, it's this one.

See [sampling.md](sampling.md "mention") for details.

#### Tensors

Directional vector fields that guide point distribution and orientation. Effectors create fields, samplers read them.

See [tensors.md](tensors.md "mention") for details.

#### Topology

Generate mesh geometry from clusters and paths. Convert procedural structures to renderable & collidable surfaces.

See [topology.md](topology.md "mention") for details.

#### Shapes

Programmatic geometry generation with parametric control. Per-seed variation for procedural diversity.

See [shapes.md](shapes.md "mention") for details.

### In This Section

<table data-view="cards"><thead><tr><th>Subsection</th><th>Purpose</th><th data-hidden data-card-target data-type="content-ref"></th></tr></thead><tbody><tr><td><a data-mention href="blending.md">blending.md</a></td><td>Attribute blending configuration</td><td><a href="blending.md">blending.md</a></td></tr><tr><td><a data-mention href="match-and-select.md">match-and-select.md</a></td><td>Matching and picking sub-nodes</td><td><a href="match-and-select.md">match-and-select.md</a></td></tr><tr><td><a data-mention href="tensors.md">tensors.md</a></td><td>Directional fields</td><td><a href="tensors.md">tensors.md</a></td></tr><tr><td><a data-mention href="topology.md">topology.md</a></td><td>Mesh generation</td><td></td></tr><tr><td><a data-mention href="sampling.md">sampling.md</a></td><td>Data extraction</td><td></td></tr><tr><td><a data-mention href="shapes.md">shapes.md</a></td><td>Parametric geometry</td><td></td></tr></tbody></table>

### Related

* [provider-consumer-pattern.md](../architecture/provider-consumer-pattern.md "mention") - How sub-nodes work
* [filters](../filters/ "mention") - Another transverse sub-node system
