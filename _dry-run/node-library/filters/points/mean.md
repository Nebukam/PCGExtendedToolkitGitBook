---
icon: chart-line
description: 'In editor :: PCGEx | Filter : Mean'
---

# Mean

Compares an attribute value against the statistical mean of all values in the dataset.

## Overview

The Mean filter evaluates each point by comparing its value against a reference calculated from all points—the average, median, mode, or a fixed value. This enables filtering based on relative standing: keeping points above average, within standard ranges, or at extremes.

## How It Works

1. **First pass**: Calculate the reference value (mean, median, or mode) across all points
2. **For each point**: Compare the point's value against the reference
3. **Apply thresholds**: Optionally exclude values too far below or above
4. **Return result**: pass if within the specified bounds

## Settings

### Value

<details>
<summary><strong>Target</strong> <code>Attribute Selector</code></summary>

The numeric attribute to evaluate against its statistical mean.

⚡ PCG Overridable

</details>

### Reference Calculation

<details>
<summary><strong>Measure</strong> <code>Relative | Absolute</code></summary>

How to interpret threshold values.

- **Relative** - Thresholds are normalized (0-1) where 0.5 = at the mean
- **Absolute** - Thresholds are absolute value differences from mean

Default: `Relative`

</details>

<details>
<summary><strong>Mean Method</strong> <code>Average | Median | Mode | Fixed</code></summary>

How to calculate the reference value.

| Option | Meaning |
|--------|---------|
| **Average** | Arithmetic mean of all values |
| **Median** | Middle value when sorted |
| **Mode** | Most common value (estimated) |
| **Fixed** | Use a specified constant |

Default: `Average`

</details>

<details>
<summary><strong>Mean Value</strong> <code>double</code></summary>

The reference value when using Fixed method.

Only visible when Mean Method is `Fixed`.

Default: `0`

⚡ PCG Overridable

</details>

<details>
<summary><strong>Mode Tolerance</strong> <code>double</code></summary>

Tolerance for mode estimation (groups similar values).

Only visible when Mean Method is `Mode`.

Default: `0.01`

</details>

### Thresholds

<details>
<summary><strong>Exclude Below Mean</strong> <code>bool</code></summary>

Enable minimum threshold filtering.

Default: Disabled

</details>

<details>
<summary><strong>Exclude Below</strong> <code>double</code></summary>

Minimum threshold. In Relative mode, 0.0 = minimum value, 0.5 = mean, 1.0 = maximum.

Only visible when Exclude Below Mean is enabled.

Default: `0.5`

</details>

<details>
<summary><strong>Exclude Above Mean</strong> <code>bool</code></summary>

Enable maximum threshold filtering.

Default: Disabled

</details>

<details>
<summary><strong>Exclude Above</strong> <code>double</code></summary>

Maximum threshold. In Relative mode, 0.0 = minimum value, 0.5 = mean, 1.0 = maximum.

Only visible when Exclude Above Mean is enabled.

Default: `0.5`

</details>

### Behavior

<details>
<summary><strong>Invert</strong> <code>bool</code></summary>

Flip the filter result.

Default: Disabled

</details>

## Examples

**Keep points above average**:
- Measure: `Relative`
- Mean Method: `Average`
- Exclude Below Mean: Enabled
- Exclude Below: `0.5`

**Keep points within middle 50%** (between 25th and 75th percentile):
- Measure: `Relative`
- Exclude Below Mean: Enabled
- Exclude Below: `0.25`
- Exclude Above Mean: Enabled
- Exclude Above: `0.75`

**Keep extreme values** (top and bottom 10%):
- Measure: `Relative`
- Exclude Below Mean: Enabled
- Exclude Below: `0.1`
- Exclude Above Mean: Enabled
- Exclude Above: `0.9`
- Invert: Enabled

**Keep points near median**:
- Mean Method: `Median`
- Measure: `Absolute`
- Exclude Below Mean: Enabled
- Exclude Below: `-10` (within 10 units below median)
- Exclude Above Mean: Enabled
- Exclude Above: `10` (within 10 units above median)

## Related

### Filters
- [Within Range](./within-range.md) - Fixed range comparisons
- [Numeric Compare](./numeric-compare.md) - Single threshold comparisons

---

:package: **Module**: `PCGExFilters` | :page_facing_up: [Source](https://github.com/Nebukam/PCGExtendedToolkit/blob/main/Source/PCGExFilters/Private/Filters/Points/PCGExMeanFilter.cpp)
