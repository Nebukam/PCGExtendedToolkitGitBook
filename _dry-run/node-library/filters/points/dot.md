---
icon: arrows-to-dot
description: 'In editor :: PCGEx | Filter : Dot'
---

# Dot

Compares the dot product of two vectors against a threshold.

## How It Works

For each point:

1. Get **Operand A** from attribute (optionally transformed by point)
2. Get **Operand B** from attribute or constant (optionally transformed by point)
3. Compute dot product of the two vectors
4. Compare against threshold using dot comparison settings
5. Return result: pass if comparison is true

## Settings

### Operand A

<details>
<summary><strong>Operand A</strong> <code>Attribute Selector</code></summary>

First vector for dot product.

</details>

<details>
<summary><strong>Transform Operand A</strong> <code>bool</code></summary>

Apply the point's local transform to this vector before comparison.

Default: `false`

⚡ PCG Overridable

</details>

<details>
<summary><strong>Invert Operand A</strong> <code>bool</code></summary>

Negate the vector before computing dot product.

Default: `false`

⚡ PCG Overridable

</details>

### Operand B

<details>
<summary><strong>Compare Against</strong> <code>Constant | Attribute</code></summary>

Whether Operand B comes from a fixed value or an attribute.

Default: `Constant`

⚡ PCG Overridable

</details>

<details>
<summary><strong>Operand B (Attr)</strong> <code>Attribute Selector</code></summary>

Attribute for second vector when using Attribute mode.

*Visible when Compare Against = Attribute*

⚡ PCG Overridable

</details>

<details>
<summary><strong>Invert Operand B</strong> <code>bool</code></summary>

Negate the vector before computing dot product.

*Visible when Compare Against = Attribute*

Default: `false`

⚡ PCG Overridable

</details>

<details>
<summary><strong>Operand B</strong> <code>FVector</code></summary>

Constant vector for second operand.

Default: `(0, 0, 1)` (Up vector)

*Visible when Compare Against = Constant*

⚡ PCG Overridable

</details>

<details>
<summary><strong>Transform Operand B</strong> <code>bool</code></summary>

Apply the point's local transform to this vector.

Default: `false`

⚡ PCG Overridable

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

Use absolute value of dot product before comparing. Treats opposite directions as equivalent.

Default: `false`

</details>

<details>
<summary><strong>Threshold Input</strong> <code>Constant | Attribute</code></summary>

Whether threshold comes from a constant or per-point attribute.

Default: `Constant`

</details>

<details>
<summary><strong>Scalar</strong> <code>double</code></summary>

Threshold in scalar domain. -1 = opposite, 0 = perpendicular, 1 = same direction.

Default: `0.5`

*Visible when Domain = Scalar and Threshold Input = Constant*

⚡ PCG Overridable

</details>

<details>
<summary><strong>Degrees</strong> <code>double</code></summary>

Threshold in degrees. 0 = same direction, 90 = perpendicular, 180 = opposite.

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

## Understanding Dot Products

| Dot Value | Angle | Meaning |
|-----------|-------|---------|
| 1.0 | 0° | Same direction |
| 0.707 | 45° | 45° apart |
| 0.0 | 90° | Perpendicular |
| -0.707 | 135° | 135° apart |
| -1.0 | 180° | Opposite direction |

## Examples

**Keep points facing upward** (within 45°):
- Operand A: Point's forward direction
- Operand B: `(0, 0, 1)`
- Domain: `Scalar`
- Threshold: `0.707` (cos 45°)
- Comparison: `>=`

**Keep points perpendicular to a direction**:
- Domain: `Scalar`
- Threshold: `0`
- Comparison: `~=`
- Tolerance: `0.1`

## Related

- [Angle](./angle.md) - Compare angle between consecutive points
- [Tensor Dot](./tensor-dot.md) - Dot against tensor fields

---

📦 **Module**: `PCGExFilters` · 📄 [Source](https://github.com/Nebukam/PCGExtendedToolkit/blob/main/Source/PCGExFilters/Private/Filters/Points/PCGExDotFilter.cpp)
