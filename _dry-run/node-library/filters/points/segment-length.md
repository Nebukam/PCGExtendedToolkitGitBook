---
icon: ruler-horizontal
description: 'In editor :: PCGEx | Filter : Segment Length'
---

# Segment Length

Compares the distance between the current point and another point in the dataset against a threshold.

## Overview

The Segment Length filter evaluates each point by measuring the distance to another point (at a specified index) and comparing against a threshold. This identifies segments that are too long, too short, or within expected ranges—useful for path analysis and point spacing validation.

## How It Works

For each point:

1. **Get current point position**
2. **Calculate target index** based on mode and offset
3. **Measure distance** to target point (Euclidean by default)
4. **Compare against threshold** using selected operator
5. **Return result**: pass if comparison is true

## Settings

### Threshold

<details>
<summary><strong>Threshold Input</strong> <code>Constant | Attribute</code></summary>

Whether the distance threshold comes from a fixed value or attribute.

Default: `Constant`

</details>

<details>
<summary><strong>Threshold</strong> <code>double | Attribute Selector</code></summary>

The distance threshold to compare against.

Default: `100`

⚡ PCG Overridable

</details>

<details>
<summary><strong>Compare Against Squared Distance</strong> <code>bool</code></summary>

Use squared distance for comparison (faster, avoids square root). When enabled, the threshold should also be squared.

Default: Disabled

</details>

### Index Configuration

<details>
<summary><strong>Index Mode</strong> <code>Offset | Absolute | Loop</code></summary>

How to interpret the index value.

| Option | Meaning |
|--------|---------|
| **Offset** | Relative to current index (e.g., 1 = next point) |
| **Absolute** | Fixed index in the dataset |
| **Loop** | Offset that wraps around dataset boundaries |

Default: `Offset`

</details>

<details>
<summary><strong>Index</strong> <code>int32 | Attribute Selector</code></summary>

The target index or offset value.

Default: `1` (next point when using Offset mode)

⚡ PCG Overridable

</details>

<details>
<summary><strong>Index Safety</strong> <code>Clamp | Wrap | Ignore</code></summary>

How to handle out-of-bounds indices.

Default: `Clamp`

</details>

<details>
<summary><strong>Force Tile If Closed Loop</strong> <code>bool</code></summary>

Automatically wrap indices when the path is detected as a closed loop.

Default: Disabled

</details>

<details>
<summary><strong>Invalid Point Fallback</strong> <code>Pass | Fail</code></summary>

Filter result when target point is invalid.

Default: `Fail`

</details>

### Comparison

<details>
<summary><strong>Comparison</strong> <code>Comparison Operator</code></summary>

How to compare the distance against the threshold.

Default: `<=` (Equal or smaller)

</details>

<details>
<summary><strong>Tolerance</strong> <code>double</code></summary>

Epsilon for near-equality comparisons.

Default: Very small

</details>

### Behavior

<details>
<summary><strong>Invert</strong> <code>bool</code></summary>

Flip the filter result.

Default: Disabled

</details>

## Examples

**Find points with long segments to next point** (> 200 units):
- Index Mode: `Offset`
- Index: `1`
- Threshold: `200`
- Comparison: `>`

**Find points with short segments to previous** (< 50 units):
- Index Mode: `Offset`
- Index: `-1`
- Threshold: `50`
- Comparison: `<`

**Validate path spacing** (segments between 80-120 units):
- Use two Segment Length filters in an AND group:
  - First: Threshold `80`, Comparison `>=`
  - Second: Threshold `120`, Comparison `<=`

**Closed loop path analysis**:
- Force Tile If Closed Loop: Enabled
- Index Mode: `Offset`
- Index: `1`

## Related

### Filters
- [Distance](./distance.md) - Distance to external target points
- [Numeric Self Compare](./numeric-self-compare.md) - Compare attributes at different indices
- [Angle](./angle.md) - Compare angles between consecutive points

---

:package: **Module**: `PCGExFilters` | :page_facing_up: [Source](https://github.com/Nebukam/PCGExtendedToolkit/blob/main/Source/PCGExFilters/Private/Filters/Points/PCGExSegmentLengthFilter.cpp)
