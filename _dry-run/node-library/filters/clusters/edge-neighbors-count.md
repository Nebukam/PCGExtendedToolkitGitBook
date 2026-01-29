---
icon: code-branch
description: 'In editor :: PCGEx | Edge Filter : Num Vtx'
---

# Edge Neighbors Count

Filters edges based on the connection count of their endpoint nodes.

## How It Works

For each edge:

1. Get the **neighbor count** of the start node
2. Get the **neighbor count** of the end node
3. Apply **mode** to determine what to compare (sum, any, or both)
4. Compare against **threshold** using the selected comparison operator
5. Return result: pass if comparison is true

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
<summary><strong>Threshold</strong> <code>int32</code></summary>

The connection count threshold when using Constant mode.

Default: `2`

*Visible when Threshold Input = Constant*

⚡ PCG Overridable

</details>

<details>
<summary><strong>Mode</strong> <code>EPCGExRefineEdgeThresholdMode</code></summary>

How to evaluate endpoint connection counts.

| Option | Description |
|--------|-------------|
| Sum | Sum of both endpoint counts compared against threshold |
| Any Endpoint | At least one endpoint must pass the comparison |
| Both Endpoints | Both endpoints must individually pass the comparison |

Default: `Sum`

⚡ PCG Overridable

</details>

<details>
<summary><strong>Comparison</strong> <code>EPCGExComparison</code></summary>

How to compare the count(s) against the threshold.

Default: `>` (Strictly Greater)

⚡ PCG Overridable

</details>

<details>
<summary><strong>Tolerance</strong> <code>int32</code></summary>

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

**Keep edges connecting hub nodes** (sum > 4):
- Mode: `Sum`
- Comparison: `>`
- Threshold: `4`

**Keep edges where at least one endpoint is a leaf**:
- Mode: `Any Endpoint`
- Comparison: `==`
- Threshold: `1`

**Keep edges between binary nodes**:
- Mode: `Both Endpoints`
- Comparison: `==`
- Threshold: `2`

## Related

- [Node Neighbors Count](./node-neighbors-count.md) - Filter nodes by connection count
- [Edge Length](./edge-length.md) - Filter by edge distance

---

📦 **Module**: `PCGExElementsClusters` · 📄 [Source](https://github.com/Nebukam/PCGExtendedToolkit/blob/main/Source/PCGExElementsClusters/Private/Filters/Edges/PCGExEdgeNeighborsCountFilter.cpp)
