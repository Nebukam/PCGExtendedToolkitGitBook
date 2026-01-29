---
icon: clock
description: 'In editor :: PCGEx | Filter : Time'
---

# Time

Compares a point's projected position along a spline (its "time" or alpha value) against a threshold.

## Overview

The Time filter evaluates each point by projecting it onto nearby splines and retrieving its position along the spline as a normalized value (0.0 at start, 1.0 at end). This enables filtering based on progression along paths—keeping points in the first half, last quarter, or at specific positions.

This filter requires **spline input data** to project points onto.

## How It Works

For each point:

1. **Project point** onto the nearest spline(s)
2. **Get time value** (0.0-1.0 position along spline)
3. **Apply consolidation** when multiple splines are present
4. **Compare against threshold** using selected operator
5. **Return result**: pass if comparison is true

## Settings

### Spline Selection

<details>
<summary><strong>Pick</strong> <code>Closest | All | First | Farthest</code></summary>

How to select which spline(s) to project onto.

| Option | Meaning |
|--------|---------|
| **Closest** | Use the nearest spline |
| **All** | Consider all splines |
| **First** | Use the first spline in the data |
| **Farthest** | Use the furthest spline |

Default: `Closest`

</details>

<details>
<summary><strong>Time Consolidation</strong> <code>Min | Max | Average</code></summary>

How to combine time values when multiple splines are considered.

| Option | Meaning |
|--------|---------|
| **Min** | Use the smallest time value |
| **Max** | Use the largest time value |
| **Average** | Use the mean of all time values |

Only relevant when Pick is `All`.

Default: `Min`

</details>

### Comparison

<details>
<summary><strong>Comparison</strong> <code>Comparison Operator</code></summary>

How to compare the time value against the threshold.

Default: `>=`

</details>

<details>
<summary><strong>Compare Against</strong> <code>Constant | Attribute</code></summary>

Whether the threshold comes from a fixed value or attribute.

Default: `Constant`

</details>

<details>
<summary><strong>Operand B</strong> <code>double | Attribute Selector</code></summary>

The time threshold (0.0-1.0) to compare against.

Default: `0.5`

⚡ PCG Overridable

</details>

<details>
<summary><strong>Tolerance</strong> <code>double</code></summary>

Epsilon for near-equality comparisons.

Default: Very small

</details>

### Input Selection

<details>
<summary><strong>Sample Inputs</strong> <code>All | Base | Other</code></summary>

Which input splines to consider.

Default: `All`

</details>

### Behavior

<details>
<summary><strong>Invert</strong> <code>bool</code></summary>

Flip the filter result.

Default: Disabled

</details>

<details>
<summary><strong>Check Against Data Bounds</strong> <code>bool</code></summary>

Use collection bounds instead of individual point positions.

Default: Disabled

</details>

<details>
<summary><strong>Ignore Self</strong> <code>bool</code></summary>

Don't project onto splines from the same collection.

Default: Disabled

</details>

## Inputs

| Pin | Type | Description |
|-----|------|-------------|
| **In** | Points | Points to filter |
| **Paths** | Splines | Splines to project onto |

## Examples

**Keep points in first half of spline**:
- Comparison: `<`
- Operand B: `0.5`

**Keep points in last quarter**:
- Comparison: `>=`
- Operand B: `0.75`

**Keep points at specific position** (around 30%):
- Comparison: `~=`
- Operand B: `0.3`
- Tolerance: `0.05`

**Keep points past the midpoint on the nearest spline**:
- Pick: `Closest`
- Comparison: `>`
- Operand B: `0.5`

## Related

### Filters
- [Inclusion](./inclusion.md) - Test containment within paths
- [Distance](./distance.md) - Distance to external data
- [Numeric Compare](./numeric-compare.md) - Direct value comparisons

---

:package: **Module**: `PCGExFilters` | :page_facing_up: [Source](https://github.com/Nebukam/PCGExtendedToolkit/blob/main/Source/PCGExFilters/Private/Filters/Points/PCGExTimeFilter.cpp)
