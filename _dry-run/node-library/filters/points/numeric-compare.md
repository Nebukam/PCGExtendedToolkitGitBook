---
icon: equals
description: 'In editor :: PCGEx | Filter : Compare (Numeric)'
---

# Numeric Compare

Compares a numeric attribute against a threshold value or another attribute.

## Overview

The Numeric Compare filter evaluates each point by reading a numeric attribute and comparing it against either a constant value or another attribute. This is one of the most commonly used filters for attribute-based conditional logic.

## How It Works

For each point:

1. **Read Operand A** from the specified attribute (converted to double)
2. **Read Operand B** from either a constant or another attribute
3. **Apply comparison** using the selected operator
4. **Return result**: pass if comparison is true

## Settings

### Operands

<details>
<summary><strong>Operand A</strong> <code>Attribute Selector</code></summary>

The first value to compare. Select any numeric attribute—it will be converted to double internally.

⚡ PCG Overridable

</details>

<details>
<summary><strong>Compare Against</strong> <code>Constant | Attribute</code></summary>

Whether Operand B comes from a fixed value or another attribute.

- **Constant** - Use a fixed value for all points
- **Attribute** - Read per-point from another attribute

Default: `Constant`

</details>

<details>
<summary><strong>Operand B</strong> <code>double</code></summary>

The threshold value when using Constant mode.

Default: `0`

⚡ PCG Overridable

</details>

<details>
<summary><strong>Operand B (Attr)</strong> <code>Attribute Selector</code></summary>

The attribute to compare against when using Attribute mode.

⚡ PCG Overridable

</details>

### Comparison

<details>
<summary><strong>Comparison</strong> <code>Comparison Operator</code></summary>

How to compare the two values.

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

Epsilon for near-equality comparisons. Only visible when using `~=` or `!~=`.

Two values are "nearly equal" when their difference is less than or equal to this tolerance.

Default: Very small (approximately 0.00000001)

⚡ PCG Overridable

</details>

## Examples

**Filter points where Health > 50**:
- Operand A: `Health`
- Comparison: `>`
- Compare Against: `Constant`
- Operand B: `50`

**Filter points where Value matches Target**:
- Operand A: `Value`
- Comparison: `~=`
- Compare Against: `Attribute`
- Operand B (Attr): `TargetValue`
- Tolerance: `0.01`

**Filter points where Index is even** (using modulo elsewhere):
- Operand A: `IsEven` (pre-computed boolean as 0/1)
- Comparison: `==`
- Operand B: `1`

## Related

### Filters
- [String Compare](./string-compare.md) - For text comparisons
- [Boolean Compare](./boolean-compare.md) - For true/false comparisons
- [Within Range](./within-range.md) - For min/max range checks

### See Also
- [Comparison Operators](../../shared-concepts/comparison-operators.md) - Understanding comparison behavior
- [Input Value Sources](../../shared-concepts/input-value-sources.md) - Constant vs Attribute pattern

---

:package: **Module**: `PCGExFilters` | :page_facing_up: [Source](https://github.com/Nebukam/PCGExtendedToolkit/blob/main/Source/PCGExFilters/Private/Filters/Points/PCGExNumericCompareFilter.cpp)
