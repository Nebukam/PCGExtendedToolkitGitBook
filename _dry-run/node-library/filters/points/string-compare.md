---
icon: font
description: 'In editor :: PCGEx | Filter : Compare (String)'
---

# String Compare

Compares a string attribute against a value or another attribute.

## Overview

The String Compare filter evaluates each point by reading a string attribute and comparing it against either a constant string or another attribute using various string comparison modes.

## How It Works

For each point:

1. **Read Operand A** from the specified attribute
2. **Read Operand B** from either a constant or another attribute
3. **Apply comparison** using the selected string operator
4. **Return result**: pass if comparison is true

## Settings

### Operands

<details>
<summary><strong>Operand A</strong> <code>Attribute Name</code></summary>

The string attribute to compare.

⚡ PCG Overridable

</details>

<details>
<summary><strong>Compare Against</strong> <code>Constant | Attribute</code></summary>

Whether Operand B comes from a fixed value or another attribute.

Default: `Constant`

</details>

<details>
<summary><strong>Operand B</strong> <code>string</code></summary>

The string value when using Constant mode.

Default: `"MyString"`

⚡ PCG Overridable

</details>

<details>
<summary><strong>Swap Operands</strong> <code>bool</code></summary>

Swap A and B before comparison. Useful for inverting "Contains" logic (check if B contains A instead of A contains B).

Default: Disabled

</details>

### Comparison

<details>
<summary><strong>Comparison</strong> <code>String Comparison</code></summary>

How to compare the two strings.

| Option | Meaning |
|--------|---------|
| **==** | Exactly equal |
| **!=** | Not equal |
| **Contains** | A contains B as substring |
| **Starts With** | A begins with B |
| **Ends With** | A ends with B |

Default: `==` (Strictly Equal)

See [Comparison Operators](../../shared-concepts/comparison-operators.md) for more string comparison options.

</details>

## Related

### Filters
- [Numeric Compare](./numeric-compare.md) - For numeric comparisons
- [Boolean Compare](./boolean-compare.md) - For true/false comparisons
- [String Self Compare](./string-self-compare.md) - Compare against same attribute at different index

### See Also
- [Comparison Operators](../../shared-concepts/comparison-operators.md) - String comparison details

---

:package: **Module**: `PCGExFilters` | :page_facing_up: [Source](https://github.com/Nebukam/PCGExtendedToolkit/blob/main/Source/PCGExFilters/Private/Filters/Points/PCGExStringCompareFilter.cpp)
