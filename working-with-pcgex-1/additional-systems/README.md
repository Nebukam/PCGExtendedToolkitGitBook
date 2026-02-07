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

See Match & Select for details.

### Self-Contained Modules

Each module addresses specific procedural needs:

#### Sampling

The most broadly useful system here. Sampling queries spatial data — nearest points, surfaces, splines, textures — and writes the results back as attributes. It's the primary mechanism for transferring data between datasets, recovering attributes across processing stages, and enriching points with information about the world around them. If there's one system in this section to learn early, it's this one.

See Sampling for details.

#### Tensors

Directional vector fields that guide point distribution and orientation. Effectors create fields, samplers read them.

See Tensors for details.

#### Topology

Generate mesh geometry from clusters and paths. Convert procedural structures to renderable surfaces.

See Topology for details.

#### Shapes

Programmatic geometry generation with parametric control. Per-seed variation for procedural diversity.

See Shapes for details.

### In This Section

<table data-view="cards"><thead><tr><th>Subsection</th><th>Purpose</th></tr></thead><tbody><tr><td>Match &#x26; Select</td><td>Matching and picking sub-nodes</td></tr><tr><td>Tensors</td><td>Directional fields</td></tr><tr><td>Topology</td><td>Mesh generation</td></tr><tr><td>Sampling</td><td>Data extraction</td></tr><tr><td>Shapes</td><td>Parametric geometry</td></tr></tbody></table>

### Related

* Provider/Consumer Pattern - How sub-nodes work
* Filters - Another transverse sub-node system
