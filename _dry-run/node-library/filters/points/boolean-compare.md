---
icon: toggle-on
description: 'In editor :: PCGEx | Filter : Bool Compare'
---

# Boolean Compare

Compares a boolean attribute against a value or another attribute.

## How It Works

For each point:

1. Read **Operand A** from the specified attribute (as boolean)
2. Read **Operand B** from either a constant or another attribute
3. Apply equality check
4. Return result: pass if values match (or don't match, depending on comparison)

## Settings

<details>
<summary><strong>Operand A</strong> <code>Attribute Selector</code></summary>

The boolean attribute to compare.

⚡ PCG Overridable

</details>

<details>
<summary><strong>Comparison</strong> <code>EPCGExEquality</code></summary>

How to compare the two values.

| Option | Symbol |
|--------|--------|
| Equal | `==` |
| Not Equal | `!=` |

Default: `==` (Equal)

⚡ PCG Overridable

</details>

<details>
<summary><strong>Compare Against</strong> <code>Constant | Attribute</code></summary>

Whether Operand B comes from a fixed value or another attribute.

Default: `Constant`

⚡ PCG Overridable

</details>

<details>
<summary><strong>Operand B (Attr)</strong> <code>Attribute Selector</code></summary>

The boolean attribute to compare against when using Attribute mode.

*Visible when Compare Against = Attribute*

⚡ PCG Overridable

</details>

<details>
<summary><strong>Operand B</strong> <code>bool</code></summary>

The boolean value when using Constant mode.

Default: `true`

*Visible when Compare Against = Constant*

⚡ PCG Overridable

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
- Operand B (Attr): `FlagB`

## Related

- [Numeric Compare](./numeric-compare.md) - Numeric comparisons
- [String Compare](./string-compare.md) - Text comparisons
- [Bitmask](./bitmask.md) - Multi-flag comparisons

---

📦 **Module**: `PCGExFilters` · 📄 [Source](https://github.com/Nebukam/PCGExtendedToolkit/blob/main/Source/PCGExFilters/Private/Filters/Points/PCGExBooleanCompareFilter.cpp)
