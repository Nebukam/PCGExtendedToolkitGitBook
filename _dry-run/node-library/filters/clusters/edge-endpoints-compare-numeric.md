---
icon: not-equal
description: 'In editor :: PCGEx | Edge Filter : Endpoints Compare (Numeric)'
---

# Edge Endpoints Compare (Numeric)

Compares numeric attribute values between an edge's endpoints.

## Overview

The Edge Endpoints Compare (Numeric) filter evaluates cluster edges by reading a numeric attribute from both endpoints and comparing them against each other. This identifies edges connecting nodes with matching values, edges where one endpoint exceeds the other, or edges with specific value relationships.

## How It Works

For each edge:

1. **Read attribute** from start endpoint
2. **Read attribute** from end endpoint
3. **Compare values** using selected operator
4. **Return result**: pass if comparison is true

## Settings

### Attribute

<details>
<summary><strong>Attribute</strong> <code>Attribute Selector</code></summary>

The numeric attribute to read from both endpoints. The same attribute name is used for both start and end nodes.

⚡ PCG Overridable

</details>

### Comparison

<details>
<summary><strong>Comparison</strong> <code>Comparison Operator</code></summary>

How to compare start endpoint value against end endpoint value.

| Option | Meaning |
|--------|---------|
| **==** | Values are strictly equal |
| **!=** | Values are strictly not equal |
| **>=** | Start is equal or greater than end |
| **<=** | Start is equal or smaller than end |
| **>** | Start is strictly greater than end |
| **<** | Start is strictly smaller than end |
| **~=** | Values are nearly equal (within tolerance) |
| **!~=** | Values are nearly not equal (outside tolerance) |

Default: `~=` (Nearly Equal)

</details>

<details>
<summary><strong>Tolerance</strong> <code>double</code></summary>

Epsilon for near-equality comparisons.

Default: Very small

</details>

### Behavior

<details>
<summary><strong>Invert</strong> <code>bool</code></summary>

Flip the filter result.

Default: Disabled

</details>

## Examples

**Find edges where endpoints have the same group ID**:
- Attribute: `GroupID`
- Comparison: `==`

**Find edges crossing elevation changes** (end higher than start):
- Attribute: `Height`
- Comparison: `<`

**Find edges between nodes with similar values**:
- Attribute: `Value`
- Comparison: `~=`
- Tolerance: `10`

**Find edges where start has more health than end**:
- Attribute: `Health`
- Comparison: `>`

## Related

### Edge Filters
- [Endpoints Compare (String)](./edge-endpoints-compare-string.md) - Compare string attributes
- [Endpoints Check](./edge-endpoints-check.md) - Apply vertex filters to endpoints

### See Also
- [Comparison Operators](../../shared-concepts/comparison-operators.md) - Understanding comparison behavior

---

:package: **Module**: `PCGExElementsClusters` | :page_facing_up: [Source](https://github.com/Nebukam/PCGExtendedToolkit/blob/main/Source/PCGExElementsClusters/Private/Filters/Edges/PCGExEdgeEndpointsCompareNumFilter.cpp)
