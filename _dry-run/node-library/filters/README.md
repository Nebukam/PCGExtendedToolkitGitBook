---
icon: filter
---

# Filters

Filters are the conditional logic backbone of PCGEx. They evaluate points, nodes, edges, or entire collections and return pass/fail results that other nodes use for selective processing.

## How Filters Work

Filters are **sub-nodes**—small, focused operations that plug into larger nodes via dedicated filter pins. When a node accepts filters:

1. Connect one or more filter sub-nodes to the filter pin
2. Each point (or node/edge/collection) is evaluated against all connected filters
3. Results combine based on filter group logic (AND by default)
4. The parent node uses these results to include/exclude items from processing

### Initialization and Failure Policies

Many filters depend on external data—attributes that must exist, input pins that must be connected, or references that must resolve. Two critical settings control what happens when these dependencies aren't met:

#### Initialization Failure Policy

Controls behavior when a filter fails to initialize (missing attributes, unsupported configuration, etc.).

| Option | Behavior |
|--------|----------|
| **Throw Error** | Log an error and skip the filter. Other filters still run. |
| **Pass** | Treat the broken filter as always passing. Adds a constant "true" to the filter stack. |
| **Fail** | Treat the broken filter as always failing. **Clears all filters** and replaces them with a constant "false"—guaranteeing nothing passes. |

{% hint style="warning" %}
**Fail is aggressive**: When any filter fails initialization with "Fail" policy, the entire filter stack is replaced with a constant false. This guarantees consistent behavior but means all items will be filtered out.
{% endhint %}

#### Missing Data Policy

Controls behavior when a filter's **input pin** has no data (only visible for filters that use input pins).

| Option | Behavior |
|--------|----------|
| **Throw Error** | Log an error. The filter may produce undefined results. |
| **Pass** | Filter passes for all items when input data is missing. |
| **Fail** | Filter fails for all items when input data is missing. |

{% hint style="info" %}
**When to adjust these policies**:
- Use **Pass** when the filter is optional enhancement (nice to have, not critical)
- Use **Fail** when the filter is a hard requirement (data must exist)
- Use **Throw Error** during development to catch configuration issues early
{% endhint %}

## Filter Categories

### Point Filters

Evaluate individual points based on their attributes, position, or relationship to other data.

<table>
<thead><tr><th>Filter</th><th>Purpose</th></tr></thead>
<tbody>

<tr><td><strong>Comparisons</strong></td><td></td></tr>
<tr><td><a href="points/numeric-compare.md">Numeric Compare</a></td><td>Compare numeric attribute against threshold</td></tr>
<tr><td><a href="points/string-compare.md">String Compare</a></td><td>Compare string attribute against value</td></tr>
<tr><td><a href="points/boolean-compare.md">Boolean Compare</a></td><td>Compare boolean attribute</td></tr>
<tr><td><a href="points/within-range.md">Within Range</a></td><td>Test if value falls within min/max range</td></tr>

<tr><td><strong>Self-Comparisons</strong></td><td></td></tr>
<tr><td><a href="points/numeric-self-compare.md">Numeric Self Compare</a></td><td>Compare attribute against same attribute at different index</td></tr>
<tr><td><a href="points/string-self-compare.md">String Self Compare</a></td><td>Compare string against same attribute at different index</td></tr>
<tr><td><a href="points/segment-length.md">Segment Length</a></td><td>Compare distance to another point in same dataset</td></tr>
<tr><td><a href="points/angle.md">Angle</a></td><td>Compare angle between consecutive points (prev→current→next)</td></tr>

<tr><td><strong>Math & Vectors</strong></td><td></td></tr>
<tr><td><a href="points/dot.md">Dot</a></td><td>Compare dot product of two vectors</td></tr>
<tr><td><a href="points/modulo-compare.md">Modulo Compare</a></td><td>Test remainder of division (A % B)</td></tr>
<tr><td><a href="points/mean.md">Mean</a></td><td>Compare value against statistical mean</td></tr>

<tr><td><strong>Spatial</strong></td><td></td></tr>
<tr><td><a href="points/distance.md">Distance</a></td><td>Compare distance to nearest target point</td></tr>
<tr><td><a href="points/bounds.md">Bounds</a></td><td>Test point against target bounds (inside, intersects, etc.)</td></tr>
<tr><td><a href="points/numeric-compare-nearest.md">Numeric Compare Nearest</a></td><td>Compare attribute with nearest target's attribute</td></tr>
<tr><td><a href="points/inclusion.md">Inclusion</a></td><td>Test if point is inside path/spline/polygon</td></tr>
<tr><td><a href="points/segment-cross.md">Segment Cross</a></td><td>Check if point's segment crosses path data</td></tr>
<tr><td><a href="points/time.md">Time</a></td><td>Test point against path/spline alpha position</td></tr>

<tr><td><strong>Random & Special</strong></td><td></td></tr>
<tr><td><a href="points/random.md">Random</a></td><td>Probabilistic filtering with threshold</td></tr>
<tr><td><a href="points/random-ratio.md">Random Ratio</a></td><td>Select random ratio/count of points</td></tr>
<tr><td><a href="points/bitmask.md">Bitmask</a></td><td>Test bit flags</td></tr>
<tr><td><a href="points/constant.md">Constant</a></td><td>Always pass or always fail</td></tr>
<tr><td><a href="points/gameplay-tags.md">Gameplay Tags</a></td><td>Check gameplay tags on referenced actors</td></tr>
<tr><td><a href="points/picker.md">Picker</a></td><td>Use index pickers for selection</td></tr>
<tr><td><a href="points/value-hash.md">Value Hash</a></td><td>Check if value hash exists in a set</td></tr>

</tbody>
</table>

### Module-Specific Point Filters

Some modules add specialized filters:

| Filter | Module | Purpose |
|--------|--------|---------|
| [Tensor Dot](points/tensor-dot.md) | Tensors | Compare against tensor field direction |
| [Noise](points/noise.md) | Meta | Filter by 3D noise evaluation |

### Cluster Filters

Evaluate nodes or edges within graph structures. Only usable with cluster-processing nodes.

#### Node Filters

| Filter | Purpose |
|--------|---------|
| [Node Neighbors Count](clusters/node-neighbors-count.md) | Compare node's connection count (degree) |
| [Node Adjacency](clusters/node-adjacency.md) | Test adjacency relationships |
| [Node Edge Direction](clusters/node-edge-direction.md) | Compare direction of connected edges |
| [Node Edge Angle](clusters/node-edge-angle.md) | Compare angles between connected edges |

#### Edge Filters

| Filter | Purpose |
|--------|---------|
| [Edge Length](clusters/edge-length.md) | Compare edge length |
| [Edge Neighbors Count](clusters/edge-neighbors-count.md) | Compare endpoint connection counts |
| [Edge Direction](clusters/edge-direction.md) | Compare edge direction vector |
| [Edge Endpoints Check](clusters/edge-endpoints-check.md) | Check attribute existence on endpoints |
| [Edge Endpoints Compare (Numeric)](clusters/edge-endpoints-compare-numeric.md) | Compare numeric attributes between endpoints |
| [Edge Endpoints Compare (String)](clusters/edge-endpoints-compare-string.md) | Compare string attributes between endpoints |

### Collection Filters

Evaluate entire data collections rather than individual points.

| Filter | Purpose |
|--------|---------|
| [Entry Count](collections/entry-count.md) | Compare number of points in collection |
| [Data Bounds](collections/data-bounds.md) | Test collection bounds (volume, extents, etc.) |
| [Tag Check](collections/tag-check.md) | Check if collection has specific tag |
| [Tag Value](collections/tag-value.md) | Compare tag value (numeric or string) |
| [Attribute Check](collections/attribute-check.md) | Check if attribute exists (with optional type validation) |

### Filter Groups

Combine multiple filters with boolean logic.

| Type | Behavior |
|------|----------|
| **AND Group** | All child filters must pass |
| **OR Group** | At least one child filter must pass |

Groups can be nested for complex conditions.

---

## Common Settings

Most filters share these settings:

| Setting | Purpose |
|---------|---------|
| **Invert** | Flip the filter result (pass becomes fail, fail becomes pass) |
| **Priority** | Execution order when multiple filters are connected |

See [Comparison Operators](../shared-concepts/comparison-operators.md) for details on comparison modes used throughout filters.

---

## Tips

{% hint style="info" %}
**Filters are reusable**: The same filter sub-node can often be connected to multiple parent nodes in your graph.
{% endhint %}

{% hint style="info" %}
**Start simple**: Use Constant filter set to "Pass" or "Fail" to test your node setup before adding complex filter logic.
{% endhint %}

{% hint style="info" %}
**Filter compatibility**: Point filters work on **both** regular point filter pins AND cluster filter pins (Vtx and Edge)—cluster nodes and edges are still points with all standard attributes. Cluster-specific filters (node/edge filters) only work in cluster context.
{% endhint %}
