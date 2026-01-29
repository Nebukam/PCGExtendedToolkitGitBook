---
icon: sitemap
description: 'In editor :: PCGEx | Vtx Filter : Adjacency'
---

# Node Adjacency

Compares a node's attribute against values from its adjacent neighbors or their connecting edges.

## Overview

The Node Adjacency filter evaluates cluster nodes by reading an attribute from the node and comparing it against attributes from neighboring nodes or the edges connecting to them. This enables filtering based on local graph context—finding nodes whose values differ from their neighbors, match a local average, or exceed nearby values.

## How It Works

For each node:

1. **Read Operand A** from the node being tested
2. **Gather neighbor values** from adjacent nodes or connecting edges
3. **Apply adjacency mode** (test all or test some neighbors)
4. **Compare values** using the selected operator
5. **Return result**: pass if comparison criteria are met

## Settings

### Operands

<details>
<summary><strong>Operand A Source</strong> <code>Constant | Attribute</code></summary>

Whether the first operand comes from a fixed value or node attribute.

Default: `Attribute`

</details>

<details>
<summary><strong>Operand A</strong> <code>double | Attribute Selector</code></summary>

The value to compare. When using Attribute mode, reads from the node being tested.

⚡ PCG Overridable

</details>

<details>
<summary><strong>Operand B Source</strong> <code>Adjacent Node | Connected Edge</code></summary>

Where to read the comparison values from.

- **Adjacent Node** - Read from neighboring nodes
- **Connected Edge** - Read from the edges connecting to neighbors

Default: `Adjacent Node`

</details>

<details>
<summary><strong>Operand B</strong> <code>Attribute Selector</code></summary>

The attribute to read from neighbors or edges for comparison.

⚡ PCG Overridable

</details>

### Comparison

<details>
<summary><strong>Comparison</strong> <code>Comparison Operator</code></summary>

How to compare the values.

| Option | Meaning |
|--------|---------|
| **==** | Strictly equal |
| **!=** | Strictly not equal |
| **>=** | Equal or greater |
| **<=** | Equal or smaller |
| **>** | Strictly greater |
| **<** | Strictly smaller |
| **~=** | Nearly equal (within tolerance) |
| **!~=** | Nearly not equal (outside tolerance) |

Default: `~=` (Nearly Equal)

See [Comparison Operators](../../shared-concepts/comparison-operators.md) for detailed behavior.

</details>

<details>
<summary><strong>Tolerance</strong> <code>double</code></summary>

Epsilon for near-equality comparisons.

Default: Very small

</details>

### Adjacency Mode

<details>
<summary><strong>Test Mode</strong> <code>All | Some</code></summary>

How to evaluate multiple neighbors.

- **All** - All neighbors must satisfy the comparison
- **Some** - A threshold number of neighbors must satisfy

Default: `All`

</details>

<details>
<summary><strong>Consolidation</strong> <code>Average | Min | Max | Sum</code></summary>

When testing all neighbors, how to combine their values into a single operand B. Only visible when Test Mode is `All`.

| Option | Meaning |
|--------|---------|
| **Average** | Use the mean of all neighbor values |
| **Min** | Use the smallest neighbor value |
| **Max** | Use the largest neighbor value |
| **Sum** | Use the total of all neighbor values |

Default: `Average`

</details>

<details>
<summary><strong>Threshold</strong> <code>int32 | double</code></summary>

Number of neighbors that must pass the comparison. Only visible when Test Mode is `Some`.

⚡ PCG Overridable

</details>

<details>
<summary><strong>Threshold Type</strong> <code>Discrete | Relative</code></summary>

Whether the threshold is an absolute count or percentage. Only visible when Test Mode is `Some`.

- **Discrete** - Exact number of neighbors
- **Relative** - Percentage of total neighbors (0.0 to 1.0)

Default: `Discrete`

</details>

<details>
<summary><strong>Rounding</strong> <code>Round | Floor | Ceil</code></summary>

How to round when using relative threshold. Only visible when Threshold Type is `Relative`.

Default: `Round`

</details>

## Examples

**Find nodes with higher values than all neighbors**:
- Operand A: `Height`
- Operand B Source: `Adjacent Node`
- Operand B: `Height`
- Comparison: `>`
- Test Mode: `All`
- Consolidation: `Max`

**Find nodes where at least half of neighbors share the same value**:
- Operand A: `GroupID`
- Operand B Source: `Adjacent Node`
- Operand B: `GroupID`
- Comparison: `==`
- Test Mode: `Some`
- Threshold Type: `Relative`
- Threshold: `0.5`

**Find nodes connected by expensive edges**:
- Operand A Source: `Constant`
- Operand A: `100`
- Operand B Source: `Connected Edge`
- Operand B: `Cost`
- Comparison: `<`
- Test Mode: `All`
- Consolidation: `Average`

## Related

### Node Filters
- [Neighbors Count](./node-neighbors-count.md) - Filter by connection count (degree)
- [Edge Direction](./node-edge-direction.md) - Compare connected edge directions

### See Also
- [Comparison Operators](../../shared-concepts/comparison-operators.md) - Understanding comparison behavior
- [Input Value Sources](../../shared-concepts/input-value-sources.md) - Constant vs Attribute pattern

---

:package: **Module**: `PCGExElementsClusters` | :page_facing_up: [Source](https://github.com/Nebukam/PCGExtendedToolkit/blob/main/Source/PCGExElementsClusters/Private/Filters/Nodes/PCGExNodeAdjacencyFilter.cpp)
