# Filters

**Filters are the one system that touches everything else.** Almost every PCGEx operation asks "should I process this element?" and filters are how you answer that question. Configure a filter once, connect it to any node that accepts filters. The same filter works whether you're processing points, refining edges, controlling pathfinding, or deciding what to spawn.

<!-- IMAGE: Hub-and-spoke diagram showing a single filter provider connected to multiple consumer nodes -->

## The Core Idea

Instead of each node implementing its own filtering logic, PCGEx uses a unified filter system. A filter like **Filter : Distance** handles nearest-neighbor queries, spatial indexing, and comparison math without exposing intermediate values. No need to create temporary attributes for distances, compare them, then clean them up. The filter encapsulates all of that — reducing graph complexity and keeping your data clean.

## Filter Layers

Filters operate at different layers depending on what they test:

### Point Filters
The most common layer. Point filters evaluate individual points based on attributes, position, or relationships:
- Attribute comparisons (numeric, string, boolean)
- Spatial tests (distance, bounds, inclusion)
- Math operations (dot product, angle, modulo)

### Data Filters
Operate on entire point data/collections rather than individual points:
- Entry count thresholds
- Bounds properties (volume, extents)
- Tag and attribute existence checks

### Cluster Filters
Specialized filters that require cluster topology data. They rely on connectivity information that only exists after cluster generation:
- **Vtx filters**: Test vertices based on adjacency, degree, or neighbor properties
- **Edge filters**: Test edges based on endpoints, direction, or crossing detection

{% hint style="info" %}
Cluster filters extend point filters. They have access to the same attribute/spatial tests plus topology-aware capabilities.
{% endhint %}

## How Filters Work

Filters follow the provider/consumer pattern:

1. **Place a filter provider node** in your graph (e.g., **Filter : Compare (Numeric)**)
2. **Configure its conditions** in the node's settings
3. **Connect its output** to any node with a Filters input pin
4. **Multiple filters** can connect to the same pin

<!-- IMAGE: PCG graph showing filter provider nodes with output pins connected to a consumer node's Filters input pin -->

At execution time:
- The filter provider creates lightweight runtime instances
- Consumer nodes receive these filter instances through their input pins
- Each element (point/edge) is tested against the filter conditions
- Results determine what gets processed

## Filter Results

Filters produce binary pass/fail results. Elements either **pass** (meet the conditions) or **fail** (don't).

Most filters have an **Invert** option that flips the logic: what would pass now fails, and vice versa.

How results are used depends on the consumer. Some nodes route passing elements to one output and failing elements to another. Others only process passing elements. The consumer's documentation specifies its behavior.

## Common Filter Providers

PCGEx includes 29+ filter providers across the different layers:

**Comparison:**
- **Filter : Compare (Numeric)**: Test numeric attribute against value
- **Filter : Compare (String)**: String matching
- **Filter : Compare (Boolean)**: Boolean test
- **Filter : Self Compare**: Compare two attributes on the same point
- **Filter : Within Range**: Value falls between min/max

**Spatial:**
- **Filter : Distance**: Distance to target points
- **Filter : Inclusion (Bounds)**: Inside/outside bounding volumes
- **Filter : Inclusion (Path/Splines)**: Point-in-polygon tests

**Math:**
- **Filter : Dot**: Dot product threshold
- **Filter : Angle**: Curvature or spread angle
- **Filter : Modulo Compare**: Modulo arithmetic test

**Probabilistic:**
- **Filter : Random**: Random pass/fail with configurable probability
- **Filter : Random Ratio**: Keep a ratio of elements

**Topology (Cluster layer):**
- **Filter : Adjacency**: Neighbor count or properties
- **Filter : Edge**: Edge endpoint conditions

See the [Filter Node Library](/node-library/filters/) for complete documentation of each filter.

## Consuming Filters

Any node with a Filters input pin can consume filters. Nodes may have:
- **Single filter input**: One Filters pin accepting multiple connected filters
- **Multiple filter inputs**: Separate pins for different purposes (e.g., Source Filters vs Target Filters)

Connecting multiple filters to one pin creates implicit AND logic: all filters must pass for an element to pass.

{% hint style="success" %}
**Uber Filter** is a utility consumer that takes any number of filters and outputs the combined result. Useful for debugging filter setups or creating filter checkpoints in your graph.
{% endhint %}

## Performance

Filters evaluate per-element, so cost scales with element count.

**Fast operations**: Attribute comparisons (data already in memory), index-based tests, boolean checks.

**Slower operations**: Spatial queries requiring distance calculations, neighbor traversal in cluster filters, filters requiring external data (bounds, distance targets).

In stacked filters (multiple filters on one pin), put cheaper filters first. The implicit AND logic exits early on first failure, skipping subsequent expensive tests.

### Pre-Computed Filters

Filters that rely on external data (**Distance**, **Inclusion (Bounds)**, **Inclusion (Path/Splines)**) pre-compute internal data structures during preparation. This pre-computed data is reused by consumers.

{% hint style="warning" %}
If you use the same spatial filter (same settings, same reference data) in multiple places, connect the same filter instance to all consumers. Creating duplicate filters with identical settings wastes computation; each instance pre-computes the same data independently.
{% endhint %}

{% hint style="success" %}
Hierarchical generation greatly benefits from that : smaller grid re-use pre-computed data from larger grid.
{% endhint %}

## In This Section

- [Composition](composition.md) - Combining filters with AND/OR logic, nesting groups
- [Reusability](reusability.md) - Sharing filters across your graph

## Related

**Concepts:**
- [Provider/Consumer Pattern](/concepts/01-architecture/provider-consumer.md) - The underlying architecture
- [Cluster Refinement](/concepts/03-clusters/refining-clusters.md) - Filters in cluster context
- [Pathfinding](/concepts/06-pathfinding/) - Filters for edge traversability

**Node Library:**
- [Filter Nodes](/node-library/filters/) - Complete filter reference
