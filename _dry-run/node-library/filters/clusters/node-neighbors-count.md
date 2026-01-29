---
icon: circle-nodes
description: 'In editor :: PCGEx | Vtx Filter : Num Edges'
---

# Node Neighbors Count

Filters nodes based on the number of connected edges.

## How It Works

For each node (vertex):

1. Count the **number of edges** connected to this node
2. Compare against **threshold** using the selected comparison operator
3. Return result: pass if comparison is true

## Settings

<details>
<summary><strong>Comparison</strong> <code>EPCGExComparison</code></summary>

How to compare the edge count against the threshold.

Default: `~=` (Nearly Equal)

</details>

<details>
<summary><strong>Compare Against</strong> <code>Constant | Attribute</code></summary>

Whether the threshold comes from a fixed value or an attribute.

Default: `Constant`

⚡ PCG Overridable

</details>

<details>
<summary><strong>Operand A (Attr)</strong> <code>Attribute Selector</code></summary>

Attribute to read threshold from when using Attribute mode.

*Visible when Compare Against = Attribute*

⚡ PCG Overridable

</details>

<details>
<summary><strong>Operand A</strong> <code>int32</code></summary>

The edge count threshold when using Constant mode.

Default: `0`

*Visible when Compare Against = Constant*

⚡ PCG Overridable

</details>

<details>
<summary><strong>Tolerance</strong> <code>double</code></summary>

Epsilon for near-equality comparisons.

Default: `DBL_COMPARE_TOLERANCE`

*Visible when Comparison = Nearly Equal or Nearly Not Equal*

⚡ PCG Overridable

</details>

## Examples

**Keep leaf nodes** (only one connection):
- Comparison: `==`
- Operand A: `1`

**Keep hub nodes** (3+ connections):
- Comparison: `>=`
- Operand A: `3`

**Keep binary nodes** (exactly 2 connections):
- Comparison: `==`
- Operand A: `2`

## Related

- [Edge Neighbors Count](./edge-neighbors-count.md) - Filter edges by endpoint connection counts
- [Node Adjacency](./node-adjacency.md) - Filter by neighbor attributes

---

📦 **Module**: `PCGExElementsClusters` · 📄 [Source](https://github.com/Nebukam/PCGExtendedToolkit/blob/main/Source/PCGExElementsClusters/Private/Filters/Nodes/PCGExNodeNeighborsCountFilter.cpp)
