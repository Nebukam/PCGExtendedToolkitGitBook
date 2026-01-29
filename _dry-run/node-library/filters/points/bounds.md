---
icon: vector-square
description: 'In editor :: PCGEx | Filter : Inclusion (Bounds)'
---

# Bounds

Tests whether points are inside, intersecting, or outside target bounds.

## Overview

The Bounds filter evaluates each point's spatial relationship to target bounds data. You can test whether points are fully inside, intersecting, or use other spatial relationship checks.

This filter requires a **Bounds Target** input—another set of points whose bounds define the test volumes.

## How It Works

For each point:

1. **Get point bounds** based on the configured bounds source
2. **Test against target bounds** using the selected check type
3. **Return result**: pass if the spatial relationship matches

## Settings

### Bounds Configuration

<details>
<summary><strong>Mode</strong> <code>Per Point Bounds | Collection Bounds</code></summary>

How to interpret the target bounds.

- **Per Point Bounds** - Test against each target point's individual bounds
- **Collection Bounds** - Test against the combined bounds of all target points

Default: `Per Point Bounds`

</details>

<details>
<summary><strong>Bounds Target</strong> <code>Bounds Source</code></summary>

Which bounds to use from the target data.

- **Scaled Bounds** - Point bounds with scale applied
- **Density Bounds** - Bounds based on density attribute

Default: `Scaled Bounds`

</details>

<details>
<summary><strong>Bounds Source</strong> <code>Bounds Source</code></summary>

Which bounds to use from the points being filtered. Only visible for intersection-based checks.

- **Scaled Bounds** - Point bounds with scale applied
- **Density Bounds** - Bounds based on density attribute

Default: `Scaled Bounds`

</details>

### Check Type

<details>
<summary><strong>Check Type</strong> <code>Bounds Check</code></summary>

The spatial relationship to test for.

| Option | Meaning |
|--------|---------|
| **Intersects** | Point's bounds overlap target bounds |
| **Is Inside** | Point's center is inside target bounds |
| **Is Inside or On** | Point's center is inside or on the boundary |
| **Is Inside or Intersects** | Either inside or overlapping |

Default: `Intersects`

</details>

<details>
<summary><strong>Test Mode</strong> <code>Box | Sphere | Expanded</code></summary>

Shape used for the bounds test.

- **Box** - Axis-aligned bounding box
- **Sphere** - Bounding sphere
- **Expanded Box** - Box with epsilon expansion
- **Expanded Sphere** - Sphere with epsilon expansion

Default: `Box`

</details>

<details>
<summary><strong>Expansion</strong> <code>double</code></summary>

Epsilon value to expand target bounds. Only visible when using expanded test modes.

Useful for softer inclusion tests that catch near-boundary points.

Default: `10`

⚡ PCG Overridable

</details>

### Behavior

<details>
<summary><strong>Invert</strong> <code>bool</code></summary>

Flip the filter result. When enabled, points that would pass now fail (and vice versa).

Default: Disabled

</details>

<details>
<summary><strong>Ignore Self</strong> <code>bool</code></summary>

When enabled, a collection won't test against itself. Useful when filtering a dataset against its own bounds.

Default: Disabled

</details>

<details>
<summary><strong>Check Against Data Bounds</strong> <code>bool</code></summary>

Use the target collection's combined bounds as a single test volume instead of testing against individual point bounds.

Default: Disabled

</details>

## Inputs

| Pin | Type | Description |
|-----|------|-------------|
| **Bounds Target** | Points | Points whose bounds define the test volumes |

## Examples

**Keep points inside a bounding region**:
- Check Type: `Is Inside`
- Connect boundary points to Bounds Target

**Keep points that touch or overlap obstacles**:
- Check Type: `Intersects`
- Connect obstacle points to Bounds Target

**Exclude points inside exclusion zones**:
- Check Type: `Is Inside`
- Invert: Enabled
- Connect exclusion zone points to Bounds Target

**Soft boundary with tolerance**:
- Check Type: `Is Inside`
- Test Mode: `Expanded Box`
- Expansion: `50` (catches points within 50 units of boundary)

## Related

### Filters
- [Distance](./distance.md) - Distance-based filtering instead of containment
- [Inclusion](./inclusion.md) - Test against paths/splines instead of bounds

### See Also
- [Distance & Proximity](../../shared-concepts/distance-and-proximity.md) - Understanding spatial measurements

---

:package: **Module**: `PCGExFilters` | :page_facing_up: [Source](https://github.com/Nebukam/PCGExtendedToolkit/blob/main/Source/PCGExFilters/Private/Filters/Points/PCGExBoundsFilter.cpp)
