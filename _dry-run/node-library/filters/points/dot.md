---
icon: arrows-to-dot
description: 'In editor :: PCGEx | Filter : Dot'
---

# Dot

Compares the dot product of two vectors against a threshold.

## Overview

The Dot filter evaluates each point by computing the dot product between two direction vectors and comparing the result against a threshold. Dot products measure alignment: 1 means same direction, 0 means perpendicular, -1 means opposite.

## How It Works

For each point:

1. **Get Operand A** from attribute or constant (optionally transformed by point)
2. **Get Operand B** from attribute or constant (optionally transformed by point)
3. **Compute dot product** of the two vectors
4. **Compare against threshold** using the configured comparison
5. **Return result**: pass if comparison is true

## Settings

### Operands

<details>
<summary><strong>Operand A</strong> <code>Vector</code></summary>

First vector for dot product. Can be constant or read from attribute.

⚡ PCG Overridable

</details>

<details>
<summary><strong>Transform Operand A</strong> <code>bool</code></summary>

Apply the point's local transform to this vector before comparison.

Default: Disabled

</details>

<details>
<summary><strong>Invert Operand A</strong> <code>bool</code></summary>

Negate the vector before computing dot product.

Default: Disabled

</details>

<details>
<summary><strong>Compare Against</strong> <code>Constant | Attribute</code></summary>

Whether Operand B comes from a fixed value or an attribute.

Default: `Constant`

</details>

<details>
<summary><strong>Operand B</strong> <code>Vector</code></summary>

Second vector for dot product.

Default: `(0, 0, 1)` (Up vector)

⚡ PCG Overridable

</details>

<details>
<summary><strong>Transform Operand B</strong> <code>bool</code></summary>

Apply the point's local transform to this vector.

Default: Disabled

</details>

<details>
<summary><strong>Invert Operand B</strong> <code>bool</code></summary>

Negate the vector before computing dot product.

Default: Disabled

</details>

### Comparison

<details>
<summary><strong>Dot Comparison Details</strong></summary>

Configuration for how to compare the dot product result. Includes threshold value and comparison operator. Can work in scalar (-1 to 1) or degree (0° to 180°) domain.

</details>

## Understanding Dot Products

| Dot Value | Angle | Meaning |
|-----------|-------|---------|
| 1.0 | 0° | Same direction |
| 0.707 | 45° | 45° apart |
| 0.0 | 90° | Perpendicular |
| -0.707 | 135° | 135° apart |
| -1.0 | 180° | Opposite direction |

## Examples

**Keep points facing upward** (within 45°):
- Operand A: Point's forward direction attribute
- Operand B: `(0, 0, 1)`
- Threshold: `0.707` (cos 45°)
- Comparison: `>=`

**Keep points perpendicular to a direction**:
- Threshold: `0`
- Comparison: `~=` (nearly equal)
- Tolerance: `0.1`

## Related

### Filters
- [Angle](./angle.md) - Compare angle between consecutive points
- [Node Edge Direction](../clusters/node-edge-direction.md) - Dot filter for cluster nodes

### See Also
- [Comparison Operators](../../shared-concepts/comparison-operators.md) - Comparison behavior

---

:package: **Module**: `PCGExFilters` | :page_facing_up: [Source](https://github.com/Nebukam/PCGExtendedToolkit/blob/main/Source/PCGExFilters/Private/Filters/Points/PCGExDotFilter.cpp)
