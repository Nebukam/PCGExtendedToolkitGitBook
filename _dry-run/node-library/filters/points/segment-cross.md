---
icon: arrows-split-up-and-left
description: 'In editor :: PCGEx | Filter : Segment Cross'
---

# Segment Cross

Tests whether the segment from a point to its neighbor crosses any path/spline data.

## Overview

The Segment Cross filter evaluates each point by checking if the line segment connecting it to the next (or previous) point intersects any path or spline in the input data. This identifies points whose segments cross boundaries—useful for detecting intersections, boundary crossings, or path conflicts.

This filter requires **path/spline input data** that defines the test boundaries.

## How It Works

For each point:

1. **Create segment** from current point to next (or previous) point
2. **Test for intersection** against all input paths/splines
3. **Return result**: pass if segment crosses any path

## Settings

### Segment Direction

<details>
<summary><strong>Direction</strong> <code>To Next | To Previous</code></summary>

Which point to connect to for the segment.

| Option | Meaning |
|--------|---------|
| **To Next** | Segment from current point to next point |
| **To Previous** | Segment from current point to previous point |

This also determines which point is "flagged" when a crossing is detected.

Default: `To Next`

</details>

### Intersection Settings

<details>
<summary><strong>Intersection Settings</strong> <code>Path Intersection Config</code></summary>

Configuration for how intersection tests are performed.

</details>

<details>
<summary><strong>Fidelity</strong> <code>int32</code></summary>

Polygon resolution when projecting splines for intersection testing. Higher values are more accurate but slower.

Default: `24`

</details>

### Input Selection

<details>
<summary><strong>Sample Inputs</strong> <code>All | Base | Other</code></summary>

Which input paths to test against.

Default: `All`

</details>

### Behavior

<details>
<summary><strong>Invert</strong> <code>bool</code></summary>

Flip the filter result—pass when segment does NOT cross.

Default: Disabled

</details>

<details>
<summary><strong>Ignore Self</strong> <code>bool</code></summary>

Don't test against paths from the same collection.

Default: Disabled

</details>

## Inputs

| Pin | Type | Description |
|-----|------|-------------|
| **In** | Points | Points whose segments to test |
| **Bounds** | Paths/Splines | Paths that define crossing boundaries |

## Examples

**Find points whose segments cross a boundary**:
- Direction: `To Next`
- Connect boundary path to Bounds input

**Find points before a crossing** (flag the start of crossing segment):
- Direction: `To Next`

**Find points after a crossing** (flag the end of crossing segment):
- Direction: `To Previous`

**Find segments that don't cross obstacles**:
- Invert: Enabled

## Use Cases

- **Path validation**: Detect where paths cross restricted boundaries
- **Intersection detection**: Find crossing points between paths
- **Obstacle avoidance**: Identify segments that pass through obstacles

## Related

### Filters
- [Inclusion](./inclusion.md) - Test point containment within shapes
- [Segment Length](./segment-length.md) - Test segment distances
- [Distance](./distance.md) - Distance to external data

---

:package: **Module**: `PCGExFilters` | :page_facing_up: [Source](https://github.com/Nebukam/PCGExtendedToolkit/blob/main/Source/PCGExFilters/Private/Filters/Points/PCGExSegmentCrossFilter.cpp)
