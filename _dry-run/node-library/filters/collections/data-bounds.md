---
icon: cube
description: 'In editor :: PCGEx | Collection Filter : Data Bounds'
---

# Data Bounds

Tests a collection's bounding box properties against a threshold.

## Overview

The Data Bounds filter evaluates entire point collections based on their spatial extent—volume, dimensions, aspect ratios, or individual axis sizes. This identifies collections that are too large, too small, unusually shaped, or within expected size ranges.

## How It Works

For each collection:

1. **Calculate bounding box** from all points
2. **Extract the requested property** (volume, extents, ratio, etc.)
3. **Compare against threshold** using selected operator
4. **Return result**: pass if comparison is true

## Settings

### Bounds Property

<details>
<summary><strong>Operand A</strong> <code>Bounds Aspect</code></summary>

Which property of the bounding box to test.

| Option | Meaning |
|--------|---------|
| **Extents** | Half-size vector from center to corner |
| **Min** | Minimum corner position |
| **Max** | Maximum corner position |
| **Size** | Full dimensions (width, depth, height) |
| **Volume** | Total volume (X × Y × Z) |
| **Aspect Ratio** | Ratio between two specified axes |
| **Sorted Ratio** | Ratio of largest to smallest axis |

Default: `Volume`

</details>

<details>
<summary><strong>Sub Operand</strong> <code>Length | Length Squared | X | Y | Z</code></summary>

For vector-based aspects (Extents, Min, Max, Size), which component to extract.

| Option | Meaning |
|--------|---------|
| **Length** | Vector magnitude |
| **Length Squared** | Squared magnitude (faster comparison) |
| **X** | X-axis component |
| **Y** | Y-axis component |
| **Z** | Z-axis component |

Only visible when Operand A is Extents, Min, Max, or Size.

Default: `Length`

</details>

<details>
<summary><strong>Ratio</strong> <code>XY | XZ | YZ | YX | ZX | ZY</code></summary>

Which axes to compare for aspect ratio. The first axis is divided by the second.

Only visible when Operand A is `Aspect Ratio`.

Default: `XY`

</details>

### Comparison

<details>
<summary><strong>Operand B</strong> <code>Comparison Selector</code></summary>

The threshold value to compare against. Supports constant values or attribute-based comparison.

⚡ PCG Overridable

</details>

<details>
<summary><strong>Comparison</strong> <code>Comparison Operator</code></summary>

How to compare the bounds property against the threshold.

Default: `>=`

</details>

### Behavior

<details>
<summary><strong>Invert</strong> <code>bool</code></summary>

Flip the filter result.

Default: Disabled

</details>

## Examples

**Keep collections with volume over 1000**:
- Operand A: `Volume`
- Comparison: `>`
- Operand B: `1000`

**Filter out very tall collections** (Z > 500):
- Operand A: `Size`
- Sub Operand: `Z`
- Comparison: `>`
- Operand B: `500`
- Invert: Enabled

**Keep roughly square collections** (aspect ratio near 1):
- Operand A: `Aspect Ratio`
- Ratio: `XY`
- Comparison: `~=`
- Operand B: `1.0`
- Tolerance: `0.2`

**Keep collections with reasonable extents**:
- Operand A: `Extents`
- Sub Operand: `Length`
- Comparison: `<=`
- Operand B: `1000`

## Related

### Collection Filters
- [Entry Count](./entry-count.md) - Filter by number of points
- [Tag Check](./tag-check.md) - Filter by collection tags

### Point Filters
- [Bounds](../points/bounds.md) - Test individual points against bounds

---

:package: **Module**: `PCGExFilters` | :page_facing_up: [Source](https://github.com/Nebukam/PCGExtendedToolkit/blob/main/Source/PCGExFilters/Private/Filters/Collections/PCGExDataBoundsFilter.cpp)
