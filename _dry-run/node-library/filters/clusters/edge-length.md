---
icon: ruler
description: 'In editor :: PCGEx | Edge Filter : Length'
---

# Edge Length

Filters edges based on their length.

## How It Works

For each edge:

1. Calculate the **distance** between the edge's start and end points
2. Compare against **threshold** using the selected comparison operator
3. Return result: pass if comparison is true

## Settings

<details>
<summary><strong>Threshold Input</strong> <code>Constant | Attribute</code></summary>

Whether the threshold comes from a fixed value or an attribute on the edge.

Default: `Constant`

⚡ PCG Overridable

</details>

<details>
<summary><strong>Threshold (Attr)</strong> <code>Attribute Selector</code></summary>

Attribute to read threshold from when using Attribute mode.

*Visible when Threshold Input = Attribute*

⚡ PCG Overridable

</details>

<details>
<summary><strong>Threshold</strong> <code>double</code></summary>

The length threshold when using Constant mode.

Default: `100`

*Visible when Threshold Input = Constant*

⚡ PCG Overridable

</details>

<details>
<summary><strong>Comparison</strong> <code>EPCGExComparison</code></summary>

How to compare the edge length against the threshold.

Default: `>` (Strictly Greater)

⚡ PCG Overridable

</details>

<details>
<summary><strong>Tolerance</strong> <code>double</code></summary>

Epsilon for near-equality comparisons.

Default: `0`

*Visible when Comparison = Nearly Equal or Nearly Not Equal*

⚡ PCG Overridable

</details>

<details>
<summary><strong>Invert</strong> <code>bool</code></summary>

Flip the filter result.

Default: `false`

⚡ PCG Overridable

</details>

## Examples

**Keep long edges** (> 200 units):
- Comparison: `>`
- Threshold: `200`

**Keep short edges** (< 50 units):
- Comparison: `<`
- Threshold: `50`

**Remove edges of specific length**:
- Comparison: `~=`
- Threshold: `100`
- Tolerance: `5`
- Invert: `true`

## Related

- [Edge Neighbors Count](./edge-neighbors-count.md) - Filter by endpoint connectivity
- [Edge Direction](./edge-direction.md) - Filter by edge orientation

---

📦 **Module**: `PCGExElementsClusters` · 📄 [Source](https://github.com/Nebukam/PCGExtendedToolkit/blob/main/Source/PCGExElementsClusters/Private/Filters/Edges/PCGExEdgeLengthFilter.cpp)
