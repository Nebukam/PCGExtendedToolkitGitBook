---
icon: code-compare
description: 'In editor :: PCGEx | Edge Filter : Endpoints Compare (Numeric)'
---

# Edge Endpoints Compare (Numeric)

Compares a numeric attribute between an edge's start and end nodes.

## How It Works

For each edge:

1. Read the **attribute value** from the start node
2. Read the **attribute value** from the end node
3. Compare the two values using the selected comparison operator
4. Return result: pass if comparison is true

## Settings

<details>
<summary><strong>Attribute</strong> <code>Attribute Selector</code></summary>

The numeric attribute to compare between endpoints. Read from vertex data.

⚡ PCG Overridable

</details>

<details>
<summary><strong>Comparison</strong> <code>EPCGExComparison</code></summary>

How to compare start vs end values.

Default: `>` (Strictly Greater)

⚡ PCG Overridable

</details>

<details>
<summary><strong>Tolerance</strong> <code>double</code></summary>

Epsilon for near-equality comparisons.

Default: `DBL_COMPARE_TOLERANCE`

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

**Keep edges going uphill** (end higher than start):
- Attribute: `$Position.Z`
- Comparison: `>`

**Keep edges between similar priority nodes**:
- Attribute: `Priority`
- Comparison: `~=`
- Tolerance: `0.1`

**Keep edges where start has higher value**:
- Attribute: `Value`
- Comparison: `<`
- Invert: `true` (or just use `>`)

## Related

- [Edge Direction](./edge-direction.md) - Filter by spatial direction
- [Node Adjacency](./node-adjacency.md) - Filter nodes by neighbor attributes

---

📦 **Module**: `PCGExElementsClusters` · 📄 [Source](https://github.com/Nebukam/PCGExtendedToolkit/blob/main/Source/PCGExElementsClusters/Private/Filters/Edges/PCGExEdgeEndpointsCompareNumFilter.cpp)
