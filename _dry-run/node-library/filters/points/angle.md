---
icon: angle
description: 'In editor :: PCGEx | Filter : Angle'
---

# Angle

Compares the angle formed by consecutive points in a path.

## How It Works

For each point in a path:

1. Compute direction from previous point to current point
2. Compute direction from current point to next point
3. Calculate dot product between these directions
4. Compare against threshold using dot comparison settings
5. Return result: pass if angle meets criteria

## Settings

<details>
<summary><strong>Mode</strong> <code>EPCGExAngleFilterMode</code></summary>

How to interpret the angle measurement.

| Option | Description |
|--------|-------------|
| Curvature | Dot product of (Prev→Current) vs (Current→Next) |
| Spread | Dot product of (Current→Prev) vs (Current→Next) |

Default: `Curvature`

</details>

<details>
<summary><strong>First Point Fallback</strong> <code>EPCGExFilterFallback</code></summary>

Result for the first point in an open path (no previous point to compare).

Default: `Fail`

</details>

<details>
<summary><strong>Last Point Fallback</strong> <code>EPCGExFilterFallback</code></summary>

Result for the last point in an open path (no next point to compare).

Default: `Fail`

</details>

### Dot Comparison Details

<details>
<summary><strong>Domain</strong> <code>EPCGExAngularDomain</code></summary>

How threshold values are interpreted.

| Option | Description |
|--------|-------------|
| Scalar | Raw dot product (-1 to 1) |
| Degrees | Angular (0-180°) |

Default: `Scalar`

</details>

<details>
<summary><strong>Comparison</strong> <code>EPCGExComparison</code></summary>

The comparison operator to use.

Default: `>=` (Equal or Greater)

</details>

<details>
<summary><strong>Unsigned Comparison</strong> <code>bool</code></summary>

Use absolute value of dot product before comparing.

Default: `false`

</details>

<details>
<summary><strong>Threshold Input</strong> <code>Constant | Attribute</code></summary>

Whether threshold comes from a constant or per-point attribute.

Default: `Constant`

</details>

<details>
<summary><strong>Scalar</strong> <code>double</code></summary>

Threshold in scalar domain.

Default: `0.5`

*Visible when Domain = Scalar and Threshold Input = Constant*

⚡ PCG Overridable

</details>

<details>
<summary><strong>Degrees</strong> <code>double</code></summary>

Threshold in degrees.

Default: `90`

*Visible when Domain = Degrees and Threshold Input = Constant*

⚡ PCG Overridable

</details>

<details>
<summary><strong>Tolerance</strong> <code>double</code></summary>

Tolerance for ~= and !~= comparisons.

Default: `0.1`

*Visible when Comparison = Nearly Equal or Nearly Not Equal*

⚡ PCG Overridable

</details>

### Result

<details>
<summary><strong>Invert</strong> <code>bool</code></summary>

Flip all results including fallbacks.

Default: `false`

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
- Domain: `Scalar`
- Threshold: `0.707`
- Comparison: `<`

**Find straight sections**:
- Domain: `Scalar`
- Threshold: `0.95`
- Comparison: `>=`

## Related

- [Dot](./dot.md) - General dot product comparison
- [Segment Length](./segment-length.md) - Distance between consecutive points

---

📦 **Module**: `PCGExFilters` · 📄 [Source](https://github.com/Nebukam/PCGExtendedToolkit/blob/main/Source/PCGExFilters/Private/Filters/Points/PCGExAngleFilter.cpp)
