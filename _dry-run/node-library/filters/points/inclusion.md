---
icon: draw-polygon
description: 'In editor :: PCGEx | Filter : Inclusion'
---

# Inclusion

Tests whether points are inside, outside, or on the boundary of path/spline shapes.

## Overview

The Inclusion filter evaluates each point's spatial relationship to path-like data (paths, splines, or polygons). This enables filtering points based on containment within defined regions—useful for masking, zone-based selection, or boundary detection.

This filter requires **path/spline input data** that defines the test shapes.

## How It Works

For each point:

1. **Project to 2D** based on projection settings
2. **Test against each shape** using the selected check type
3. **Apply pick mode** when multiple shapes are present
4. **Return result**: pass if the spatial relationship matches

## Settings

### Projection

<details>
<summary><strong>Projection Details</strong> <code>2D Projection Settings</code></summary>

How to project 3D points to 2D for geometric testing. Typically projects along a primary axis (XY, XZ, or YZ plane).

</details>

### Check Configuration

<details>
<summary><strong>Check Type</strong> <code>Is Inside | Is Outside | Is On</code></summary>

The spatial relationship to test for.

| Option | Meaning |
|--------|---------|
| **Is Inside** | Point is within the closed shape |
| **Is Outside** | Point is outside all shapes |
| **Is On** | Point is on the boundary (within tolerance) |

Default: `Is Inside`

</details>

<details>
<summary><strong>Pick</strong> <code>All | First | Closest | Farthest</code></summary>

How to handle multiple input shapes.

| Option | Meaning |
|--------|---------|
| **All** | Must satisfy condition for all shapes |
| **First** | Test against first shape only |
| **Closest** | Test against nearest shape |
| **Farthest** | Test against furthest shape |

Default: `All`

</details>

<details>
<summary><strong>Tolerance</strong> <code>double</code></summary>

Distance tolerance for boundary detection ("Is On" checks).

Default: `1.0`

⚡ PCG Overridable

</details>

<details>
<summary><strong>Spline Scales Tolerance</strong> <code>bool</code></summary>

Scale the tolerance by spline thickness when testing against splines.

Default: Disabled

</details>

### Multi-Shape Options

<details>
<summary><strong>Inclusion Offset</strong> <code>double</code></summary>

Inset amount for inclusion testing. Positive values shrink the test region, negative values expand it.

Default: `0`

⚡ PCG Overridable

</details>

<details>
<summary><strong>Use Min Inclusion Count</strong> <code>bool</code></summary>

Require the point to be inside at least N shapes.

Default: Disabled

</details>

<details>
<summary><strong>Min Inclusion Count</strong> <code>int32</code></summary>

Minimum number of shapes the point must be inside.

Only visible when Use Min Inclusion Count is enabled.

Default: `1`

</details>

<details>
<summary><strong>Use Max Inclusion Count</strong> <code>bool</code></summary>

Require the point to be inside at most N shapes.

Default: Disabled

</details>

### Behavior

<details>
<summary><strong>Invert</strong> <code>bool</code></summary>

Flip the filter result.

Default: Disabled

</details>

<details>
<summary><strong>Check Against Data Bounds</strong> <code>bool</code></summary>

Use the collection's combined bounds instead of individual point positions for testing.

Default: Disabled

</details>

<details>
<summary><strong>Ignore Self</strong> <code>bool</code></summary>

Don't test a collection against its own bounds/shape.

Default: Disabled

</details>

### Input Selection

<details>
<summary><strong>Sample Inputs</strong> <code>All | Base | Other</code></summary>

Which input shapes to include in testing.

Default: `All`

</details>

## Inputs

| Pin | Type | Description |
|-----|------|-------------|
| **In** | Points | Points to filter |
| **Bounds** | Paths/Splines | Shapes that define the test regions |

## Examples

**Keep points inside a region**:
- Check Type: `Is Inside`
- Connect boundary path to Bounds input

**Keep points outside exclusion zones**:
- Check Type: `Is Outside`
- Connect exclusion shapes to Bounds input

**Find points on boundaries**:
- Check Type: `Is On`
- Tolerance: `5`

**Keep points inside at least 2 overlapping zones**:
- Check Type: `Is Inside`
- Use Min Inclusion Count: Enabled
- Min Inclusion Count: `2`

## Related

### Filters
- [Bounds](./bounds.md) - Test against bounding boxes instead of paths
- [Segment Cross](./segment-cross.md) - Test if segments cross paths
- [Distance](./distance.md) - Distance-based filtering

### See Also
- [Distance & Proximity](../../shared-concepts/distance-and-proximity.md) - Understanding spatial measurements

---

:package: **Module**: `PCGExFilters` | :page_facing_up: [Source](https://github.com/Nebukam/PCGExtendedToolkit/blob/main/Source/PCGExFilters/Private/Filters/Points/PCGExInclusionFilter.cpp)
