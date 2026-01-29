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

1. **Read Operand A** from the node being tested (constant or attribute)
2. **Gather neighbor values** from adjacent nodes or connecting edges
3. **Apply adjacency mode** (test all or test some neighbors)
4. **Compare values** using the selected operator
5. **Return result**: pass if comparison criteria are met

## Settings

### Adjacency Settings

<details>
<summary><strong>Mode</strong> <code>EPCGExAdjacencyTestMode</code></summary>

How many adjacent items should be tested.

| Option | Meaning |
|--------|---------|
| **All** | Test a condition using all adjacent nodes |
| **Some** | Test a condition using some adjacent nodes only |

Default: `Some`

</details>

<details>
<summary><strong>Consolidation</strong> <code>EPCGExAdjacencyGatherMode</code></summary>

When testing all neighbors, how to combine their values into a single operand B.

*Visible when Mode = All*

| Option | Meaning |
|--------|---------|
| **Individual** | Test neighbors one by one |
| **Average** | Test against mean of all neighbor values |
| **Min** | Test against smallest neighbor value |
| **Max** | Test against largest neighbor value |
| **Sum** | Test against total of all neighbor values |

Default: `Average`

</details>

<details>
<summary><strong>Threshold Comparison</strong> <code>EPCGExComparison</code></summary>

How to compare against the threshold when using Some mode.

*Visible when Mode = Some*

Default: `~=` (Nearly Equal)

</details>

<details>
<summary><strong>Threshold Type</strong> <code>Discrete | Relative</code></summary>

Whether threshold is an absolute count or percentage.

*Visible when Mode = Some*

| Option | Meaning |
|--------|---------|
| **Discrete** | Exact number of neighbors |
| **Relative** | Percentage of total neighbors (0.0 to 1.0) |

Default: `Discrete`

</details>

<details>
<summary><strong>Threshold Input</strong> <code>Constant | Attribute</code></summary>

Whether threshold value comes from a constant or attribute.

*Visible when Mode = Some*

Default: `Constant`

⚡ PCG Overridable

</details>

<details>
<summary><strong>Threshold (Discrete)</strong> <code>int32</code></summary>

Number of neighbors that must pass the comparison.

*Visible when Mode = Some, Threshold Input = Constant, and Threshold Type = Discrete*

Default: `1`

⚡ PCG Overridable

</details>

<details>
<summary><strong>Threshold (Relative)</strong> <code>double</code></summary>

Percentage of neighbors that must pass (0.0 to 1.0).

*Visible when Mode = Some, Threshold Input = Constant, and Threshold Type = Relative*

Default: `0.5`

⚡ PCG Overridable

</details>

<details>
<summary><strong>Rounding</strong> <code>EPCGExRelativeThresholdRoundingMode</code></summary>

How to round when using relative threshold.

*Visible when Mode = Some and Threshold Type = Relative*

| Option | Meaning |
|--------|---------|
| **Round** | Rounds to closest integer |
| **Floor** | Rounds down |
| **Ceil** | Rounds up |

Default: `Round`

</details>

<details>
<summary><strong>Threshold Tolerance</strong> <code>int32</code></summary>

Tolerance for threshold near-equality comparisons.

*Visible when Mode = Some and Threshold Comparison = ~= or !~=*

Default: `0`

⚡ PCG Overridable

</details>

### Operands

<details>
<summary><strong>Compare Against</strong> <code>Constant | Attribute</code></summary>

Whether Operand A comes from a fixed value or node attribute.

Default: `Constant`

⚡ PCG Overridable

</details>

<details>
<summary><strong>Operand A</strong> <code>double</code></summary>

Constant value for Operand A.

*Visible when Compare Against = Constant*

Default: `0`

⚡ PCG Overridable

</details>

<details>
<summary><strong>Operand A (Attr)</strong> <code>Attribute Selector</code></summary>

Attribute to read for Operand A. Will be converted to double.

*Visible when Compare Against = Attribute*

⚡ PCG Overridable

</details>

<details>
<summary><strong>Comparison</strong> <code>EPCGExComparison</code></summary>

How to compare the values.

Default: `~=` (Nearly Equal)

</details>

<details>
<summary><strong>Operand B Source</strong> <code>EPCGExClusterElement</code></summary>

Where to read the comparison values from.

| Option | Meaning |
|--------|---------|
| **Vtx** | Read from neighboring nodes |
| **Edge** | Read from the edges connecting to neighbors |

Default: `Vtx`

</details>

<details>
<summary><strong>Operand B (Neighbor)</strong> <code>Attribute Selector</code></summary>

Attribute to read from neighbors or edges for comparison. Will be converted to double.

</details>

<details>
<summary><strong>Tolerance</strong> <code>double</code></summary>

Tolerance for near-equality comparisons.

*Visible when Comparison = ~= or !~=*

Default: `DBL_COMPARE_TOLERANCE`

⚡ PCG Overridable

</details>

## Examples

**Find nodes with higher values than all neighbors**:
- Operand A: `Height` attribute
- Operand B Source: `Vtx`
- Operand B: `Height`
- Comparison: `>`
- Mode: `All`
- Consolidation: `Max`

**Find nodes where at least half of neighbors share the same value**:
- Operand A: `GroupID` attribute
- Operand B Source: `Vtx`
- Operand B: `GroupID`
- Comparison: `==`
- Mode: `Some`
- Threshold Type: `Relative`
- Threshold (Relative): `0.5`

**Find nodes connected by expensive edges**:
- Compare Against: `Constant`
- Operand A: `100`
- Operand B Source: `Edge`
- Operand B: `Cost`
- Comparison: `<`
- Mode: `All`
- Consolidation: `Average`

## Related

### Node Filters
- [Neighbors Count](./node-neighbors-count.md) - Filter by connection count (degree)
- [Edge Direction](./node-edge-direction.md) - Compare connected edge directions

---

📦 **Module**: `PCGExElementsClusters` · 📄 [Source](https://github.com/Nebukam/PCGExtendedToolkit/blob/main/Source/PCGExElementsClusters/Private/Filters/Nodes/PCGExNodeAdjacencyFilter.cpp)
