---
icon: arrows-left-right
description: 'In editor :: PCGEx | Filter : Distance'
---

# Distance

Filters points based on their distance to target points.

## Overview

The Distance filter evaluates each source point by finding the closest target point and comparing that distance against a threshold. Points pass or fail based on whether the distance meets your comparison criteria.

This filter requires a secondary input—the target points to measure against.

## How It Works

For each source point:

1. **Find the closest target** using spatial acceleration (octree lookup)
2. **Compute the distance** between source and closest target
3. **Compare against threshold** using the selected comparison operator
4. **Return result**: pass if comparison is true, fail otherwise

{% hint style="info" %}
Distance is computed using the configured measurement modes. See [Distance & Proximity](../shared-concepts/distance-and-proximity.md) for details on `Source`, `Target`, and `Type` settings.
{% endhint %}

## Settings

### Distance Details

<details>
<summary><strong>Source</strong> <code>EPCGExDistance</code></summary>

Where to measure from on source points.

- `Center` - Point location (default)
- `SphereBounds` - Bounding sphere surface
- `BoxBounds` - Bounding box surface

</details>

<details>
<summary><strong>Target</strong> <code>EPCGExDistance</code></summary>

Where to measure to on target points.

- `Center` - Point location (default)
- `SphereBounds` - Bounding sphere surface
- `BoxBounds` - Bounding box surface

</details>

<details>
<summary><strong>Type</strong> <code>EPCGExDistanceType</code></summary>

Distance calculation method.

- `Euclidean` - Straight-line distance (default)
- `Manhattan` - Sum of axis differences
- `Chebyshev` - Maximum axis difference

</details>

<details>
<summary><strong>bOverlapIsZero</strong> <code>bool</code></summary>

When enabled, overlapping geometries return zero distance.

Default: `true`

</details>

### Comparison

<details>
<summary><strong>Comparison</strong> <code>EPCGExComparison</code></summary>

How to compare the computed distance against the threshold.

- `StrictlyEqual` (==)
- `StrictlyNotEqual` (!=)
- `EqualOrGreater` (>=)
- `EqualOrSmaller` (<=)
- `StrictlyGreater` (>)
- `StrictlySmaller` (<)
- `NearlyEqual` (~=) - Within tolerance
- `NearlyNotEqual` (!~=) - Outside tolerance

Default: `NearlyEqual`

</details>

<details>
<summary><strong>CompareAgainst</strong> <code>EPCGExInputValueType</code></summary>

Source for the distance threshold.

- `Constant` - Use a fixed value for all points
- `Attribute` - Read per-point threshold from an attribute

Default: `Constant`

</details>

<details>
<summary><strong>DistanceThresholdConstant</strong> <code>double</code></summary>

The distance threshold when using constant mode.

Default: `0`

⚡ PCG Overridable

</details>

<details>
<summary><strong>DistanceThreshold</strong> <code>FPCGAttributePropertyInputSelector</code></summary>

Attribute selector for per-point threshold when using attribute mode.

⚡ PCG Overridable

</details>

<details>
<summary><strong>Tolerance</strong> <code>double</code></summary>

Epsilon for `NearlyEqual` and `NearlyNotEqual` comparisons.

Default: `DBL_COMPARE_TOLERANCE` (very small)

⚡ PCG Overridable

</details>

### Behavior

<details>
<summary><strong>bIgnoreSelf</strong> <code>bool</code></summary>

When source and target collections are the same, exclude a point from matching against itself.

Default: `false`

</details>

<details>
<summary><strong>bCheckAgainstDataBounds</strong> <code>bool</code></summary>

Use collection bounds as a proxy instead of per-point testing. When enabled, all points in a collection pass or fail together based on the collection's center point.

Useful for fast collection-level filtering when per-point precision isn't needed.

Default: `false`

</details>

## Inputs

| Pin | Type | Description |
|-----|------|-------------|
| **Targets** | Points | Target points to measure distance against (required) |

## Examples

**Keep points within 100 units of targets**:
- Comparison: `EqualOrSmaller`
- DistanceThresholdConstant: `100`

**Keep points farther than 50 units from targets**:
- Comparison: `StrictlyGreater`
- DistanceThresholdConstant: `50`

**Variable exclusion radius per point** (read from attribute):
- CompareAgainst: `Attribute`
- DistanceThreshold: Select `ExclusionRadius` attribute
- Comparison: `StrictlyGreater`

## Performance

Target points are indexed in an octree during preparation, making closest-point lookup efficient (O(log n)) regardless of target count.

For very large target sets, this is significantly faster than naive distance checking.

## Related

### Filters
- [Numeric Compare Nearest](./numeric-compare-nearest.md) - Compare attribute values with nearest point instead of distance
- [Bounds](./bounds.md) - Filter by spatial containment rather than distance

### See Also
- [Distance & Proximity](../shared-concepts/distance-and-proximity.md) - Understanding distance modes and metrics

---

:package: **Module**: `PCGExFilters` | :page_facing_up: [Source](https://github.com/Nebukam/PCGExtendedToolkit/blob/main/Source/PCGExFilters/Private/Filters/Points/PCGExDistanceFilter.cpp)
