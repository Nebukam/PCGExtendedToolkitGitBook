---
icon: hashtag
description: 'In editor :: PCGEx | Data Filter : Entry Count'
---

# Entry Count

Compares the number of points in a collection against a threshold.

## Overview

The Entry Count filter evaluates collections by comparing their point count against a value. Use it to filter out collections that are too small, too large, or don't meet specific size requirements.

## How It Works

For each collection:

1. **Count points** in the collection
2. **Compare against threshold** using selected operator
3. **Return result**: collection passes if comparison is true

## Settings

<details>
<summary><strong>Comparison</strong> <code>EPCGExComparison</code></summary>

How to compare the point count against the threshold.

| Operator | Meaning |
|----------|---------|
| `>` | Strictly greater than |
| `>=` | Greater than or equal |
| `<` | Strictly less than |
| `<=` | Less than or equal |
| `==` | Exactly equal |
| `!=` | Not equal |
| `~=` | Nearly equal (within tolerance) |
| `!~=` | Nearly not equal |

Default: `~=` (Nearly Equal)

⚡ PCG Overridable

</details>

<details>
<summary><strong>Compare Against</strong> <code>Constant | Attribute</code></summary>

Whether threshold comes from a fixed value or collection attribute.

Default: `Constant`

⚡ PCG Overridable

</details>

<details>
<summary><strong>Operand B</strong> <code>int32</code></summary>

The count threshold when using Constant mode.

*Visible when Compare Against = Constant*

Default: `0`

⚡ PCG Overridable

</details>

<details>
<summary><strong>Operand B (Attr)</strong> <code>Attribute Selector</code></summary>

Attribute to read the threshold from. Will be converted to int32.

*Visible when Compare Against = Attribute*

⚡ PCG Overridable

</details>

<details>
<summary><strong>Tolerance</strong> <code>double</code></summary>

Tolerance for near-equality comparisons (`~=` and `!~=`).

*Visible when Comparison = Nearly Equal or Nearly Not Equal*

Default: `DBL_COMPARE_TOLERANCE`

⚡ PCG Overridable

</details>

## Examples

**Keep collections with at least 10 points**:
- Comparison: `>=`
- Operand B: `10`

**Keep collections with exactly 100 points**:
- Comparison: `==`
- Operand B: `100`

**Discard empty or near-empty collections**:
- Comparison: `>`
- Operand B: `2`

## Related

### Collection Filters
- [Data Bounds](./data-bounds.md) - Filter by spatial properties
- [Attribute Check](./attribute-check.md) - Check attribute existence

---

📦 **Module**: `PCGExFilters` · 📄 [Source](https://github.com/Nebukam/PCGExtendedToolkit/blob/main/Source/PCGExFilters/Private/Filters/Collections/PCGExEntryCountFilter.cpp)
