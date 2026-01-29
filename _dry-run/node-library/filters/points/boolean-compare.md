---
icon: toggle-on
description: 'In editor :: PCGEx | Filter : Bool Compare'
---

# Boolean Compare

Compares a boolean attribute against a value or another attribute.

## Overview

The Boolean Compare filter evaluates each point by reading a boolean attribute and comparing it against either a constant true/false or another boolean attribute.

## How It Works

For each point:

1. **Read Operand A** from the specified attribute (as boolean)
2. **Read Operand B** from either a constant or another attribute
3. **Apply equality check**
4. **Return result**: pass if values match (or don't match, depending on comparison)

## Settings

### Operands

<details>
<summary><strong>Operand A</strong> <code>Attribute Selector</code></summary>

The boolean attribute to compare.

⚡ PCG Overridable

</details>

<details>
<summary><strong>Compare Against</strong> <code>Constant | Attribute</code></summary>

Whether Operand B comes from a fixed value or another attribute.

Default: `Constant`

</details>

<details>
<summary><strong>Operand B</strong> <code>bool</code></summary>

The boolean value when using Constant mode.

Default: `true`

⚡ PCG Overridable

</details>

### Comparison

<details>
<summary><strong>Comparison</strong> <code>Equal | Not Equal</code></summary>

How to compare the two values.

| Option | Meaning |
|--------|---------|
| **==** | Values are the same |
| **!=** | Values are different |

Default: `==` (Equal)

</details>

## Examples

**Keep points where IsActive is true**:
- Operand A: `IsActive`
- Comparison: `==`
- Operand B: `true`

**Keep points where flags differ**:
- Operand A: `FlagA`
- Comparison: `!=`
- Compare Against: `Attribute`
- Operand B: `FlagB`

## Related

### Filters
- [Numeric Compare](./numeric-compare.md) - For numeric comparisons
- [String Compare](./string-compare.md) - For text comparisons
- [Bitmask](./bitmask.md) - For multi-flag comparisons

---

:package: **Module**: `PCGExFilters` | :page_facing_up: [Source](https://github.com/Nebukam/PCGExtendedToolkit/blob/main/Source/PCGExFilters/Private/Filters/Points/PCGExBooleanCompareFilter.cpp)
