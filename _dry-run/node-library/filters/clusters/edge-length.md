---
icon: ruler
description: 'In editor :: PCGEx | Edge Filter : Length'
---

# Edge Length

Compares an edge's length against a threshold value.

## Overview

The Edge Length filter evaluates cluster edges by measuring the 3D distance between their endpoints and comparing against a threshold. This is one of the most commonly used edge filters for removing overly long or short connections.

## How It Works

For each edge:

1. **Calculate length** as 3D Euclidean distance between endpoints
2. **Compare against threshold** using selected operator
3. **Return result**: pass if comparison is true

## Settings

### Threshold

<details>
<summary><strong>Threshold Input</strong> <code>Constant | Attribute</code></summary>

Whether the threshold comes from a fixed value or edge attribute.

Default: `Constant`

</details>

<details>
<summary><strong>Threshold</strong> <code>double | Attribute Selector</code></summary>

The distance threshold to compare against.

Default: `100`

⚡ PCG Overridable

</details>

### Comparison

<details>
<summary><strong>Comparison</strong> <code>Comparison Operator</code></summary>

How to compare the edge length against the threshold.

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

Default: `<=` (Equal or smaller)

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

**Keep only short edges** (under 200 units):
- Threshold: `200`
- Comparison: `<`

**Remove very long edges** (over 500 units):
- Threshold: `500`
- Comparison: `>`
- Use with edge removal/pruning operation

**Keep edges within a range** (100-300 units):
- Use two Edge Length filters in an AND group:
  - First: Threshold `100`, Comparison `>=`
  - Second: Threshold `300`, Comparison `<=`

**Variable threshold based on edge attribute**:
- Threshold Input: `Attribute`
- Threshold: `MaxAllowedLength`
- Comparison: `<=`

## Related

### Edge Filters
- [Edge Direction](./edge-direction.md) - Filter by edge orientation
- [Neighbors Count](./edge-neighbors-count.md) - Filter by endpoint connectivity

### See Also
- [Distance & Proximity](../../shared-concepts/distance-and-proximity.md) - Understanding distance measurements
- [Comparison Operators](../../shared-concepts/comparison-operators.md) - Comparison behavior

---

:package: **Module**: `PCGExElementsClusters` | :page_facing_up: [Source](https://github.com/Nebukam/PCGExtendedToolkit/blob/main/Source/PCGExElementsClusters/Private/Filters/Edges/PCGExEdgeLengthFilter.cpp)
