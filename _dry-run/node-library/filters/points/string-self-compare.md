---
icon: text-slash
description: 'In editor :: PCGEx | Filter : Self Compare (String)'
---

# String Self Compare

Compares a string attribute against the same attribute at a different index in the dataset.

## How It Works

For each point:

1. Read string from the specified attribute at current index
2. Calculate target index based on mode and offset
3. Read string from the same attribute at target index
4. Compare strings using selected operator
5. Return result: pass if comparison is true

## Settings

### Attribute

<details>
<summary><strong>Operand A</strong> <code>Attribute Selector</code></summary>

The string attribute to compare (used at both current and target indices).

⚡ PCG Overridable

</details>

### Index Configuration

<details>
<summary><strong>Index Mode</strong> <code>EPCGExIndexMode</code></summary>

How to interpret the index value.

| Option | Meaning |
|--------|---------|
| Offset | Relative to current index (e.g., -1 = previous) |
| Absolute | Fixed index in the dataset |
| Loop | Offset that wraps around dataset boundaries |

Default: `Offset`

⚡ PCG Overridable

</details>

<details>
<summary><strong>Compare Against</strong> <code>Constant | Attribute</code></summary>

Whether the index comes from a fixed value or per-point attribute.

Default: `Constant`

⚡ PCG Overridable

</details>

<details>
<summary><strong>Index (Attr)</strong> <code>Attribute Selector</code></summary>

Attribute containing per-point index values.

*Visible when Compare Against = Attribute*

⚡ PCG Overridable

</details>

<details>
<summary><strong>Index</strong> <code>int32</code></summary>

The target index or offset value.

Default: `-1` (previous point when using Offset mode)

*Visible when Compare Against = Constant*

⚡ PCG Overridable

</details>

<details>
<summary><strong>Index Safety</strong> <code>EPCGExIndexSafety</code></summary>

How to handle out-of-bounds indices.

| Option | Meaning |
|--------|---------|
| Clamp | Clamp to valid range |
| Wrap | Wrap around to other end |
| Ignore | Use fallback result |

Default: `Clamp`

⚡ PCG Overridable

</details>

<details>
<summary><strong>Invalid Index Fallback</strong> <code>Pass | Fail</code></summary>

Filter result when Index Safety is Ignore and index is out of bounds.

Default: `Fail`

⚡ PCG Overridable

</details>

<details>
<summary><strong>Swap Operands</strong> <code>bool</code></summary>

Swap the order of comparison. Useful for directional operators like "Contains."

Default: `false`

⚡ PCG Overridable

</details>

### Comparison

<details>
<summary><strong>Comparison</strong> <code>EPCGExStringComparison</code></summary>

How to compare current string against target string.

Default: `==`

⚡ PCG Overridable

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

- [Numeric Self Compare](./numeric-self-compare.md) - Compare numbers at different indices
- [String Compare](./string-compare.md) - Compare against fixed strings

---

📦 **Module**: `PCGExFilters` · 📄 [Source](https://github.com/Nebukam/PCGExtendedToolkit/blob/main/Source/PCGExFilters/Private/Filters/Points/PCGExStringSelfCompareFilter.cpp)
