---
icon: arrows-left-right
description: 'In editor :: PCGEx | Filter : Distance'
---

# Distance

Filters points based on their distance to target points.

## How It Works

For each source point:

1. Find the **closest target** using spatial acceleration (octree lookup)
2. Compute the **distance** between source and closest target
3. Compare against **threshold** using the selected comparison operator
4. Return result: pass if comparison is true

## Inputs

| Pin | Type | Description |
|-----|------|-------------|
| **Targets** | Points | Target points to measure distance against (required) |

## Settings

### Distance Details

<details>
<summary><strong>Distance Details</strong> <code>FPCGExDistanceDetails</code></summary>

Distance measurement configuration including source/target measurement points and distance type.

⚡ PCG Overridable

</details>

### Comparison

<details>
<summary><strong>Comparison</strong> <code>EPCGExComparison</code></summary>

How to compare the computed distance against the threshold.

Default: `~=` (Nearly Equal)

⚡ PCG Overridable

</details>

<details>
<summary><strong>Compare Against</strong> <code>Constant | Attribute</code></summary>

Source for the distance threshold.

Default: `Constant`

⚡ PCG Overridable

</details>

<details>
<summary><strong>Distance Threshold (Attr)</strong> <code>Attribute Selector</code></summary>

Attribute selector for per-point threshold when using Attribute mode.

*Visible when Compare Against = Attribute*

⚡ PCG Overridable

</details>

<details>
<summary><strong>Distance Threshold</strong> <code>double</code></summary>

The distance threshold when using Constant mode.

Default: `0`

*Visible when Compare Against = Constant*

⚡ PCG Overridable

</details>

<details>
<summary><strong>Tolerance</strong> <code>double</code></summary>

Epsilon for Nearly Equal and Nearly Not Equal comparisons.

Default: `DBL_COMPARE_TOLERANCE`

*Visible when Comparison = Nearly Equal or Nearly Not Equal*

⚡ PCG Overridable

</details>

### Behavior

<details>
<summary><strong>Ignore Self</strong> <code>bool</code></summary>

When source and target collections are the same, exclude a point from matching against itself.

Default: `false`

⚡ PCG Overridable

</details>

<details>
<summary><strong>Check Against Data Bounds</strong> <code>bool</code></summary>

Use collection bounds as a proxy instead of per-point testing. All points in a collection pass or fail together based on the collection's center point.

Default: `false`

⚡ PCG Overridable

</details>

## Examples

**Keep points within 100 units of targets**:
- Comparison: `<=`
- Distance Threshold: `100`

**Keep points farther than 50 units from targets**:
- Comparison: `>`
- Distance Threshold: `50`

**Variable exclusion radius per point**:
- Compare Against: `Attribute`
- Distance Threshold (Attr): `ExclusionRadius`
- Comparison: `>`

## Related

- [Numeric Compare Nearest](./numeric-compare-nearest.md) - Compare attribute values with nearest point
- [Bounds](./bounds.md) - Filter by spatial containment

---

📦 **Module**: `PCGExFilters` · 📄 [Source](https://github.com/Nebukam/PCGExtendedToolkit/blob/main/Source/PCGExFilters/Private/Filters/Points/PCGExDistanceFilter.cpp)
