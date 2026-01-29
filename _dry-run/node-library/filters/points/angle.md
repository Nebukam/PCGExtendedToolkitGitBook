---
icon: angle
description: 'In editor :: PCGEx | Filter : Angle'
---

# Angle

Compares the angle formed by consecutive points in a path.

## Overview

The Angle filter evaluates path points by measuring the angle between the direction from the previous point and the direction to the next point. This detects corners, curves, and straight sections.

## How It Works

For each point in a path:

1. **Compute direction** from previous point to current point
2. **Compute direction** from current point to next point
3. **Calculate dot product** between these directions
4. **Compare against threshold**
5. **Return result**: pass if angle meets criteria

## Settings

### Mode

<details>
<summary><strong>Mode</strong> <code>Curvature | Spread</code></summary>

How to interpret the angle measurement.

- **Curvature** - Measures the turn angle (prev→current vs current→next)
- **Spread** - Alternative calculation based on current point

Default: `Curvature`

</details>

### Comparison

<details>
<summary><strong>Dot Comparison Details</strong></summary>

Configuration for comparing the computed dot product. Set threshold and comparison operator to define what angles pass.

</details>

### Fallbacks

<details>
<summary><strong>First Point Fallback</strong> <code>Pass | Fail</code></summary>

Result for the first point in an open path (no previous point to compare).

Default: `Fail`

</details>

<details>
<summary><strong>Last Point Fallback</strong> <code>Pass | Fail</code></summary>

Result for the last point in an open path (no next point to compare).

Default: `Fail`

</details>

<details>
<summary><strong>Invert</strong> <code>bool</code></summary>

Flip all results including fallbacks.

Default: Disabled

</details>

## Understanding the Values

The filter uses dot product internally:

| Dot Value | Turn Angle | Path Shape |
|-----------|------------|------------|
| 1.0 | 0° | Straight line |
| 0.707 | 45° | Gentle curve |
| 0.0 | 90° | Right angle |
| -0.707 | 135° | Sharp turn |
| -1.0 | 180° | Reversal |

## Examples

**Find sharp corners** (turns > 45°):
- Threshold: `0.707`
- Comparison: `<` (dot less than cos 45°)

**Find straight sections**:
- Threshold: `0.95`
- Comparison: `>=`

**Split path at corners** (with Split Path node):
- Use Angle filter to mark corner points
- Connect to Split Path's filter input

## Related

### Filters
- [Dot](./dot.md) - General dot product comparison
- [Segment Length](./segment-length.md) - Distance between consecutive points

### See Also
- [Paths Fundamentals](../../working-with-pcgex/paths/README.md) - Understanding paths

---

:package: **Module**: `PCGExFilters` | :page_facing_up: [Source](https://github.com/Nebukam/PCGExtendedToolkit/blob/main/Source/PCGExFilters/Private/Filters/Points/PCGExAngleFilter.cpp)
