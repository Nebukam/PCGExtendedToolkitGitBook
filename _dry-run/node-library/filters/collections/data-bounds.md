---
icon: cube
description: 'In editor :: PCGEx | Data Filter : Bounds'
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
<summary><strong>Operand A</strong> <code>EPCGExDataBoundsAspect</code></summary>

Which property of the bounding box to test.

| Option | Meaning |
|--------|---------|
| **Extents** | Half-size vector from center to corner |
| **Min** | Minimum corner position |
| **Max** | Maximum corner position |
| **Size** | Full dimensions (width, depth, height) |
| **Volume** | Total volume (X × Y × Z) |
| **Ratio** | Ratio between two specified axes |
| **Ratio (Sorted)** | Ratio of largest to smallest axis |

Default: `Volume`

</details>

<details>
<summary><strong>Sub Operand</strong> <code>EPCGExDataBoundsComponent</code></summary>

For vector-based aspects (Extents, Min, Max, Size), which component to extract.

| Option | Meaning |
|--------|---------|
| **Length** | Vector magnitude |
| **Length Squared** | Squared magnitude (faster comparison) |
| **X** | X-axis component |
| **Y** | Y-axis component |
| **Z** | Z-axis component |

*Visible when Operand A is Extents, Min, Max, or Size*

Default: `Length`

</details>

<details>
<summary><strong>Ratio</strong> <code>EPCGExDataBoundsRatio</code></summary>

Which axes to compare for aspect ratio. The first axis is divided by the second.

| Option |
|--------|
| `XY` |
| `XZ` |
| `YZ` |
| `YX` |
| `ZX` |
| `ZY` |

*Visible when Operand A = Ratio*

Default: `XY`

</details>

### Comparison

<details>
<summary><strong>Operand B</strong> <code>FPCGExCompareSelectorDouble</code></summary>

The threshold value to compare against. This is a compound setting containing:

- **Comparison**: The comparison operator (`~=` by default)
- **Input**: `Constant` or `Attribute`
- **Constant**: The constant threshold value (default: `0`)
- **Attribute**: Attribute to read threshold from (when Input = Attribute)
- **Tolerance**: For near-equality comparisons

⚡ PCG Overridable

</details>

### Behavior

<details>
<summary><strong>Invert</strong> <code>bool</code></summary>

Flip the filter result.

Default: `false`

</details>

## Examples

**Keep collections with volume over 1000**:
- Operand A: `Volume`
- Operand B Comparison: `>`
- Operand B Constant: `1000`

**Filter out very tall collections** (Z > 500):
- Operand A: `Size`
- Sub Operand: `Z`
- Operand B Comparison: `>`
- Operand B Constant: `500`
- Invert: `true`

**Keep roughly square collections** (aspect ratio near 1):
- Operand A: `Ratio`
- Ratio: `XY`
- Operand B Comparison: `~=`
- Operand B Constant: `1.0`
- Tolerance: `0.2`

**Keep collections with reasonable extents**:
- Operand A: `Extents`
- Sub Operand: `Length`
- Operand B Comparison: `<=`
- Operand B Constant: `1000`

## Related

### Collection Filters
- [Entry Count](./entry-count.md) - Filter by number of points
- [Tag Check](./tag-check.md) - Filter by collection tags

### Point Filters
- [Bounds](../points/bounds.md) - Test individual points against bounds

---

📦 **Module**: `PCGExFilters` · 📄 [Source](https://github.com/Nebukam/PCGExtendedToolkit/blob/main/Source/PCGExFilters/Private/Filters/Collections/PCGExDataBoundsFilter.cpp)
