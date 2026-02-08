# Tips and Tricks

**Practical guidance collected from real usage.** Cross-cutting advice that applies across multiple systems.

## Performance

### Filter Order
In stacked filters (AND logic), put cheap filters first. Early exit on failure skips expensive later tests.

### Cluster Sanitization
Only sanitize after vanilla PCG nodes delete points. PCGEx operations handle validity automatically.

### Parallel Processing
Many operations process in parallel. Avoid global state dependencies (feedback heuristics, shared attributes).

## Debugging

### Visualize Intermediate Steps
Add debug draw nodes between operations to see what each step produces.

### Test Filters Individually
Disconnect complex filter chains and test each filter alone.

### Check the Log
PCGEx reports validation issues, skipped elements, and warnings in the output log.

## Subgraph Patterns

### Filter Prefabs
Wrap common filter setups in subgraphs. Expose key parameters for reuse.

### Cluster Routing
Use Find Clusters to route Vtx + Edges as single wire through subgraph pins.

### Parameter Exposure
Mark settings `PCG_Overridable` to expose them as subgraph parameters.

## Common Pitfalls

### Path Topology
Set `@Data.IsClosed` explicitly after creating paths manually. Defaults to open.

### Cluster Indices
Don't modify Edge index attributes directly. Use PCGEx nodes for topology changes.

### Asset Staging
Staging doesn't spawn. It prepares points. Use spawners afterward.

## Section-Specific Tips

Each conceptual section includes tips relevant to that topic:
- [Paths](/concepts/02-paths/) - Segment mental model
- [Clusters](/concepts/03-clusters/) - Dual dataset handling
- [Filters](/concepts/04-filters/) - Composition patterns
- [Pathfinding](/concepts/06-pathfinding/) - Algorithm selection

## Related

- [Common Pitfalls](/working-with-pcgex/paths/common-pitfalls/) - Path-specific issues
- [Common Pitfalls](/working-with-pcgex/clusters/common-pitfalls/) - Cluster-specific issues
