---
icon: text-slash
description: 'In editor :: PCGEx | Filter : Self Compare (String)'
---

# String Self Compare

Compares a string attribute against the same attribute at a different index in the dataset.

## Overview

The String Self Compare filter evaluates each point by comparing a string attribute value against the same attribute on another point in the same dataset. This enables detecting changes in categorical data along sequences—finding where labels change, group boundaries occur, or names repeat.

## How It Works

For each point:

1. **Read string** from the specified attribute at current index
2. **Calculate target index** based on mode and offset
3. **Read string** from the same attribute at target index
4. **Compare strings** using selected operator
5. **Return result**: pass if comparison is true

## Settings

### Attribute

<details>
<summary><strong>Operand A</strong> <code>Attribute Selector</code></summary>

The string attribute to compare (used at both current and target indices).

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

Default: `Clamp`

</details>

<details>
<summary><strong>Invalid Index Fallback</strong> <code>Pass | Fail</code></summary>

Filter result when Index Safety is `Ignore` and index is out of bounds.

Default: `Fail`

</details>

<details>
<summary><strong>Swap Operands</strong> <code>bool</code></summary>

Swap the order of comparison. Useful for directional operators like "Contains."

Default: Disabled

</details>

### Comparison

<details>
<summary><strong>Comparison</strong> <code>String Comparison Operator</code></summary>

How to compare current string against target string.

Default: `==`

See [Comparison Operators](../../shared-concepts/comparison-operators.md) for string comparison options.

</details>

## Examples

**Find points where category changed from previous**:
- Operand A: `Category`
- Index Mode: `Offset`
- Index: `-1`
- Comparison: `!=`

**Find points with same name as next point**:
- Operand A: `Name`
- Index Mode: `Offset`
- Index: `1`
- Comparison: `==`

**Find group boundaries** (where group label changes):
- Operand A: `GroupLabel`
- Index Mode: `Offset`
- Index: `-1`
- Comparison: `!=`

## Related

### Filters
- [Numeric Self Compare](./numeric-self-compare.md) - Compare numbers at different indices
- [String Compare](./string-compare.md) - Compare against fixed strings

---

:package: **Module**: `PCGExFilters` | :page_facing_up: [Source](https://github.com/Nebukam/PCGExtendedToolkit/blob/main/Source/PCGExFilters/Private/Filters/Points/PCGExStringSelfCompareFilter.cpp)
