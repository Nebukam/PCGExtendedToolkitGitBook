---
icon: globe
description: 'Shape : φ Sphere - Creates points distributed on a sphere using Fibonacci lattice'
---

# Shape : φ Sphere

Create a Fibonacci Lattice sphere.

## Overview

This shape builder generates points evenly distributed on a spherical surface using the Fibonacci lattice algorithm. This mathematical approach creates a quasi-uniform point distribution that avoids clustering at poles, making it ideal for spherical sampling, omnidirectional probes, or decorating spherical objects. The phi constant can be customized to create different spiral patterns.

{% hint style="success" %}
### Why Fibonacci Lattice?

The Fibonacci lattice algorithm offers two significant advantages over traditional sphere point generation:

- **Extreme Efficiency**: 100-1000x faster than iterative relaxation or force-based distribution methods. Each point position is computed directly from a simple formula with no iteration required.

- **Precise Point Count**: Unlike UV-based sampling (which creates polar clustering) or random/relaxation methods (which approximate), the Fibonacci lattice places *exactly* N points with near-optimal uniformity. If you need exactly 50 evenly-spaced points on a sphere, this delivers exactly that.

This makes it ideal for performance-critical scenarios and cases where exact point counts matter.
{% endhint %}

## How It Works

1. **Calculate Distribution**: Uses Fibonacci spiral to place points on sphere.
2. **Apply Phi Constant**: Controls the spiral angle using mathematical constants.
3. **Scale to Radius**: Sizes the sphere based on seed point scale.
4. **Output Points**: Returns uniformly distributed spherical point cloud.

#### Usage Notes

- **Uniform Distribution**: Points are evenly spread, avoiding polar clustering.
- **Phi Variants**: Different constants create varied spiral patterns.
- **3D Only**: Always generates a full 3D sphere surface.
- **Resolution**: Controls total point count on the sphere.

## Behavior

#### Fibonacci Lattice:
```
Resolution = 100 points on sphere:

Using Golden Ratio (default):
   φ = (√5 - 1) / 2 ≈ 0.618
   → Points spiral from pole to pole
   → Even spacing maintained throughout

Using Custom Phi:
   φ = 0.5
   → Different spiral pattern
   → May show more regular bands
```

## Outputs

| Pin | Type | Description |
|-----|------|-------------|
| **Shape** | Shape | Fibonacci sphere shape builder factory |

## Settings

### Fibonacci Configuration

<details>
<summary><strong>Phi Constant</strong> <code>EPCGExFibPhiConstant</code></summary>

Mathematical constant used for the Fibonacci spiral angle.

| Option | Value | Description |
|--------|-------|-------------|
| **Golden Ratio** | (√5-1)/2 ≈ 0.618 | Classic Fibonacci spiral (default) |
| **Sqrt 2** | √2 ≈ 1.414 | Square root of 2 |
| **Irrational** | - | An irrational constant |
| **Sqrt 3** | √3 ≈ 1.732 | Square root of 3 |
| **Ln2** | ln(2) ≈ 0.693 | Natural log of 2 |
| **Custom** | User-defined | Specify your own phi value |

Default: `Golden Ratio`

</details>

<details>
<summary><strong>Phi</strong> <code>double</code></summary>

Custom phi value when Phi Constant is set to Custom.

Default: `0.724592938`

📋 *Visible when Phi Constant = Custom*

⚡ PCG Overridable

</details>

<details>
<summary><strong>Epsilon</strong> <code>double</code></summary>

Small offset applied to point distribution. Can help avoid degenerate cases at poles.

Default: `0`

⚡ PCG Overridable

</details>

### Shape Settings (Inherited)

<details>
<summary><strong>Resolution Mode</strong> <code>EPCGExResolutionMode</code></summary>

How resolution is interpreted.

| Option | Description |
|--------|-------------|
| **Fixed** | Exact number of points on sphere |
| **Distance** | Target distance between points |

Default: `Fixed`

⚡ PCG Overridable

</details>

<details>
<summary><strong>Resolution</strong> <code>double</code></summary>

Number of points to distribute on the sphere surface.

Default: `10`

⚡ PCG Overridable

</details>

<details>
<summary><strong>Fitting</strong> <code>FPCGExFittingDetailsHandler</code></summary>

Controls how the sphere fits within the seed point's bounds.

⚡ PCG Overridable

</details>

<details>
<summary><strong>Points Look At</strong> <code>EPCGExShapePointLookAt</code></summary>

Orientation mode for generated points.

| Option | Description |
|--------|-------------|
| **None** | No special orientation |
| **Center** | Points face the sphere center |
| **Outward** | Points face away from center (surface normal) |

Default: `None`

⚡ PCG Overridable

</details>

<details>
<summary><strong>Default Extents</strong> <code>FVector</code></summary>

Default sphere radius when seed has no scale information.

Default: `(50, 50, 50)`

⚡ PCG Overridable

</details>

### Pruning (Inherited)

<details>
<summary><strong>Remove Below</strong> <code>bool</code></summary>

Discard shapes with fewer points than minimum.

Default: `true`

⚡ PCG Overridable

</details>

<details>
<summary><strong>Min Point Count</strong> <code>int32</code></summary>

Minimum points required.

Default: `2`

⚡ PCG Overridable

</details>

<details>
<summary><strong>Remove Above</strong> <code>bool</code></summary>

Discard shapes with more points than maximum.

Default: `false`

⚡ PCG Overridable

</details>

<details>
<summary><strong>Max Point Count</strong> <code>int32</code></summary>

Maximum points allowed.

Default: `500`

⚡ PCG Overridable

</details>

---

📦 **Module**: `PCGExElementsShapes` · 📄 [Source](https://github.com/Nebukam/PCGExtendedToolkit/blob/main/Source/PCGExElementsShapes/Public/Shapes/PCGExShapeFiblat.h)

<!-- VERIFICATION REPORT
Node-Specific Properties (Fiblat): 3
  - PhiConstant (enum)
  - Phi (FPCGExInputShorthandNameDouble)
  - Epsilon
Inherited Properties (FPCGExShapeConfigBase): 14
  - bThreeDimensions, ResolutionMode, ResolutionInput, Resolution
  - Fitting, SourceAxis, TargetAxis, PointsLookAt, LookAtAxis
  - DefaultExtents, ShapeId
  - bRemoveBelow, MinPointCount, bRemoveAbove, MaxPointCount
Output Type: FPCGExDataTypeInfoShape
Nested Types: EPCGExFibPhiConstant
-->
