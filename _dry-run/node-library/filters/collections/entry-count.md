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
<summary><strong>Comparison</strong> <code>Comparison Operator</code></summary>

How to compare the point count against the threshold.

Default: `~=` (Nearly Equal)

See [Comparison Operators](../../shared-concepts/comparison-operators.md).

</details>

<details>
<summary><strong>Compare Against</strong> <code>Constant | Attribute</code></summary>

Whether threshold comes from a fixed value or collection attribute.

Default: `Constant`

</details>

<details>
<summary><strong>Operand B</strong> <code>int32</code></summary>

The count threshold when using Constant mode.

Default: `0`

⚡ PCG Overridable

</details>

<details>
<summary><strong>Tolerance</strong> <code>double</code></summary>

Tolerance for near-equality comparisons.

Default: Very small

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

:package: **Module**: `PCGExFilters` | :page_facing_up: [Source](https://github.com/Nebukam/PCGExtendedToolkit/blob/main/Source/PCGExFilters/Private/Filters/Collections/PCGExEntryCountFilter.cpp)
