---
icon: percent
description: 'In editor :: PCGEx | Filter : Compare (Modulo)'
---

# Modulo Compare

Tests the remainder of a division operation against an expected value.

## Overview

The Modulo Compare filter evaluates each point by computing the remainder when dividing an attribute by a base value (A % B), then comparing the result against an expected value (C). This enables pattern-based selection like every Nth point, cyclic grouping, or divisibility tests.

## How It Works

For each point:

1. **Read Operand A** (the dividend)
2. **Read Operand B** (the divisor/modulo base)
3. **Calculate A % B** (the remainder)
4. **Compare remainder against Operand C** using selected operator
5. **Return result**: pass if comparison is true

## Settings

### Operands

<details>
<summary><strong>Operand A</strong> <code>Attribute Selector</code></summary>

The numeric attribute to use as the dividend.

⚡ PCG Overridable

</details>

<details>
<summary><strong>Operand B Source</strong> <code>Constant | Attribute</code></summary>

Whether the modulo base comes from a fixed value or attribute.

Default: `Constant`

</details>

<details>
<summary><strong>Operand B</strong> <code>double | Attribute Selector</code></summary>

The modulo base (divisor). The remainder will be in range [0, B).

Default: `2`

⚡ PCG Overridable

</details>

### Comparison

<details>
<summary><strong>Compare Against</strong> <code>Constant | Attribute</code></summary>

Whether the expected remainder comes from a fixed value or attribute.

Default: `Constant`

</details>

<details>
<summary><strong>Operand C</strong> <code>double | Attribute Selector</code></summary>

The expected remainder value to compare against.

Default: `0`

⚡ PCG Overridable

</details>

<details>
<summary><strong>Comparison</strong> <code>Comparison Operator</code></summary>

How to compare the remainder against Operand C.

Default: `==`

</details>

<details>
<summary><strong>Tolerance</strong> <code>double</code></summary>

Epsilon for near-equality comparisons.

Default: Very small

</details>

### Edge Cases

<details>
<summary><strong>Zero Result</strong> <code>double</code></summary>

Value to return when dividing by zero (Operand B = 0).

Default: `0`

</details>

## Examples

**Select every other point** (even indices):
- Operand A: `$PointIndex`
- Operand B: `2`
- Operand C: `0`
- Comparison: `==`

**Select every 3rd point** (indices 0, 3, 6, 9...):
- Operand A: `$PointIndex`
- Operand B: `3`
- Operand C: `0`
- Comparison: `==`

**Select points in first half of each cycle of 10**:
- Operand A: `$PointIndex`
- Operand B: `10`
- Operand C: `5`
- Comparison: `<`

**Test divisibility** (value evenly divisible by 5):
- Operand A: `Value`
- Operand B: `5`
- Operand C: `0`
- Comparison: `~=`
- Tolerance: `0.001`

## Related

### Filters
- [Numeric Compare](./numeric-compare.md) - Direct value comparisons
- [Random Ratio](./random-ratio.md) - Random selection instead of pattern-based
- [Picker](./picker.md) - Index-based selection

---

:package: **Module**: `PCGExFilters` | :page_facing_up: [Source](https://github.com/Nebukam/PCGExtendedToolkit/blob/main/Source/PCGExFilters/Private/Filters/Points/PCGExModuloCompareFilter.cpp)
