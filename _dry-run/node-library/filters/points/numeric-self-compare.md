---
icon: arrow-down-1-9
description: 'In editor :: PCGEx | Filter : Self Compare (Numeric)'
---

# Numeric Self Compare

Compares a numeric attribute against the same attribute at a different index in the dataset.

## Overview

The Numeric Self Compare filter evaluates each point by comparing an attribute value against the same attribute on another point in the same dataset. This enables detecting changes along sequences—finding where values increase, decrease, or remain constant relative to neighboring points.

## How It Works

For each point:

1. **Read value** from the specified attribute at current index
2. **Calculate target index** based on mode and offset
3. **Read value** from the same attribute at target index
4. **Compare values** using selected operator
5. **Return result**: pass if comparison is true

## Settings

### Attribute

<details>
<summary><strong>Operand A</strong> <code>Attribute Selector</code></summary>

The numeric attribute to compare (used at both current and target indices).

⚡ PCG Overridable

</details>

### Index Configuration

<details>
<summary><strong>Index Mode</strong> <code>Offset | Absolute | Loop</code></summary>

How to interpret the index value.

| Option | Meaning |
|--------|---------|
| **Offset** | Relative to current index (e.g., -1 = previous, +1 = next) |
| **Absolute** | Fixed index in the dataset |
| **Loop** | Offset that wraps around dataset boundaries |

Default: `Offset`

</details>

<details>
<summary><strong>Compare Against</strong> <code>Constant | Attribute</code></summary>

Whether the index comes from a fixed value or per-point attribute.

Default: `Constant`

</details>

<details>
<summary><strong>Index</strong> <code>int32 | Attribute Selector</code></summary>

The target index or offset value.

Default: `-1` (previous point when using Offset mode)

⚡ PCG Overridable

</details>

<details>
<summary><strong>Index Safety</strong> <code>Clamp | Wrap | Ignore</code></summary>

How to handle out-of-bounds indices.

| Option | Meaning |
|--------|---------|
| **Clamp** | Clamp to valid range (0 to count-1) |
| **Wrap** | Wrap around to other end |
| **Ignore** | Use fallback result for invalid indices |

Default: `Clamp`

</details>

<details>
<summary><strong>Invalid Index Fallback</strong> <code>Pass | Fail</code></summary>

Filter result when Index Safety is `Ignore` and index is out of bounds.

Default: `Fail`

</details>

### Comparison

<details>
<summary><strong>Comparison</strong> <code>Comparison Operator</code></summary>

How to compare current value against target value.

Default: `~=` (Nearly Equal)

</details>

<details>
<summary><strong>Tolerance</strong> <code>double</code></summary>

Epsilon for near-equality comparisons.

Default: Very small

</details>

## Examples

**Find points where value increased from previous**:
- Operand A: `Value`
- Index Mode: `Offset`
- Index: `-1`
- Comparison: `>`

**Find points with same value as next point**:
- Operand A: `GroupID`
- Index Mode: `Offset`
- Index: `1`
- Comparison: `==`

**Compare against first point in dataset**:
- Operand A: `Height`
- Index Mode: `Absolute`
- Index: `0`
- Comparison: `>=`

**Find points matching value N positions ahead (with wrapping)**:
- Operand A: `Phase`
- Index Mode: `Loop`
- Index: `5`
- Comparison: `~=`

## Related

### Filters
- [String Self Compare](./string-self-compare.md) - Compare strings at different indices
- [Segment Length](./segment-length.md) - Compare distances between points
- [Numeric Compare](./numeric-compare.md) - Compare against fixed values

---

:package: **Module**: `PCGExFilters` | :page_facing_up: [Source](https://github.com/Nebukam/PCGExtendedToolkit/blob/main/Source/PCGExFilters/Private/Filters/Points/PCGExNumericSelfCompareFilter.cpp)
