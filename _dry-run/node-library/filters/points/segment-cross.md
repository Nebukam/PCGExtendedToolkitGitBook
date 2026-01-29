---
icon: arrows-split-up-and-left
description: 'In editor :: PCGEx | Filter : Segment Cross'
---

# Segment Cross

Tests whether the segment from a point to its neighbor crosses any path/spline data.

## How It Works

For each point:

1. Create segment from current point to next (or previous) point
2. Test for intersection against all input paths/splines
3. Return result: pass if segment crosses any path

## Inputs

| Pin | Type | Description |
|-----|------|-------------|
| **In** | Points | Points whose segments to test |
| **Bounds** | Paths/Splines | Paths that define crossing boundaries |

## Settings

### Segment Direction

<details>
<summary><strong>Direction</strong> <code>EPCGExSegmentCrossWinding</code></summary>

Which point to connect to for the segment.

| Option | Meaning |
|--------|---------|
| To Next | Segment from current point to next point (canon) |
| To Prev | Segment from current point to previous point (inversed) |

This also determines which point is "flagged" when a crossing is detected.

Default: `To Next`

</details>

### Input Selection

<details>
<summary><strong>Sample Inputs</strong> <code>EPCGExSplineSamplingIncludeMode</code></summary>

Which input paths to test against.

Default: `All`

⚡ PCG Overridable

</details>

### Intersection Settings

<details>
<summary><strong>Intersection Settings</strong> <code>FPCGExPathIntersectionDetails</code></summary>

Configuration for how intersection tests are performed.

⚡ PCG Overridable

</details>

### Behavior

<details>
<summary><strong>Invert</strong> <code>bool</code></summary>

Flip the filter result—pass when segment does NOT cross.

Default: `false`

⚡ PCG Overridable

</details>

<details>
<summary><strong>Ignore Self</strong> <code>bool</code></summary>

Don't test against paths from the same collection.

Default: `true`

⚡ PCG Overridable

</details>

<details>
<summary><strong>Fidelity</strong> <code>double</code></summary>

Polygon resolution when projecting splines for intersection testing. Lower values are more accurate but slower.

Default: `50`

</details>

## Examples

**Find points whose segments cross a boundary**:
- Direction: `To Next`
- Connect boundary path to Bounds input

**Find points before a crossing** (flag the start of crossing segment):
- Direction: `To Next`

**Find points after a crossing** (flag the end of crossing segment):
- Direction: `To Prev`

**Find segments that don't cross obstacles**:
- Invert: Enabled

## Related

- [Inclusion](./inclusion.md) - Test point containment within shapes
- [Segment Length](./segment-length.md) - Test segment distances
- [Distance](./distance.md) - Distance to external data

---

📦 **Module**: `PCGExFilters` · 📄 [Source](https://github.com/Nebukam/PCGExtendedToolkit/blob/main/Source/PCGExFilters/Private/Filters/Points/PCGExSegmentCrossFilter.cpp)
