# Additional Systems

**PCGEx includes several specialized systems beyond the core workflow.** Some — like sampling — are key to unlocking the full potential of your data. Others are more specialized, worth learning when your workflow calls for them. All follow the same provider/consumer pattern you already know.

## Transverse Systems

These sub-node systems work across multiple node types:

### Match & Select
- **Matching**: Correlate data between sources and targets using match rules
- **Pickers**: Index selection strategies (constant, range, attribute-driven)

See [Match & Select](match-and-select/) for details.

## Self-Contained Modules

Each module addresses specific procedural needs:

### Sampling
The most broadly useful system here. Sampling queries spatial data — nearest points, surfaces, splines, textures — and writes the results back as attributes. It's the primary mechanism for transferring data between datasets, recovering attributes across processing stages, and enriching points with information about the world around them. If there's one system in this section to learn early, it's this one.

See [Sampling](sampling/) for details.

### Tensors
Directional vector fields that guide point distribution and orientation. Effectors create fields, samplers read them.

See [Tensors](tensors/) for details.

### Topology
Generate mesh geometry from clusters and paths. Convert procedural structures to renderable surfaces.

See [Topology](topology/) for details.

### Shapes
Programmatic geometry generation with parametric control. Per-seed variation for procedural diversity.

See [Shapes](shapes/) for details.

## In This Section

| Subsection | Purpose |
|------------|---------|
| [Match & Select](match-and-select/) | Matching and picking sub-nodes |
| [Tensors](tensors/) | Directional fields |
| [Topology](topology/) | Mesh generation |
| [Sampling](sampling/) | Data extraction |
| [Shapes](shapes/) | Parametric geometry |

## Related

- [Provider/Consumer Pattern](/concepts/01-architecture/provider-consumer.md) - How sub-nodes work
- [Filters](/concepts/04-filters/) - Another transverse sub-node system
