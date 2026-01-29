---
icon: globe
description: 'In editor :: PCGEx | Shape : φ Sphere'
---

# φ Sphere (Fibonacci Lattice)

Generates points evenly distributed across a sphere surface using the Fibonacci lattice algorithm.

## Overview

The φ Sphere (phi sphere) creates a near-optimal distribution of points on a spherical surface using Fibonacci lattice mathematics. This produces visually uniform point spacing without clustering at poles, making it ideal for spherical sampling or omnidirectional point placement.

The algorithm uses the golden ratio (φ) or related irrational numbers to achieve quasi-random but evenly-spaced distributions.

## How It Works

1. **Phi Constant Selection**: Chooses the mathematical constant for the lattice spiral
2. **Spherical Coordinates**: Computes theta (azimuth) and phi (inclination) for each point index
3. **Cartesian Conversion**: Transforms spherical coordinates to 3D positions on the unit sphere
4. **Radius Scaling**: Scales positions by the sphere radius derived from seed bounds

The mathematical basis:
- `x = (index * φ) mod 1` determines horizontal angle
- `y = index / (count - 1)` determines vertical position
- Spherical-to-Cartesian conversion places points on the sphere surface

## Settings

### Phi Constant

<details>
<summary><strong>Phi Constant</strong> <code>EPCGExFibPhiConstant</code></summary>

The irrational number used to compute the Fibonacci lattice spiral. Different constants produce different point distributions.

| Option | Value | Characteristics |
|--------|-------|-----------------|
| **Golden Ratio** | (√5 - 1) / 2 ≈ 0.618 | Classic Fibonacci spiral, most uniform |
| **Sqrt 2** | √2 ≈ 1.414 | Alternative distribution pattern |
| **Irrational** | Special value | Another irrational distribution |
| **Sqrt 3** | √3 ≈ 1.732 | Triangular-biased distribution |
| **Ln2** | ln(2) ≈ 0.693 | Logarithmic distribution |
| **Custom** | User-defined | Specify your own constant |

Default: `Golden Ratio`

</details>

<details>
<summary><strong>Phi</strong> <code>double</code></summary>

Custom phi value when using Custom constant mode. Values near irrational numbers produce better distributions.

*Visible when Phi Constant = Custom*

Supports constant value or attribute input.

Default: `0.724592938`

⚡ PCG Overridable

</details>

<details>
<summary><strong>Epsilon</strong> <code>double</code></summary>

Small offset applied to point indices to adjust pole behavior. Non-zero values shift points slightly away from exact poles, which can help avoid degenerate cases.

Default: `0`

⚡ PCG Overridable

</details>

## Examples

**Standard sphere with 100 points**:
- **Resolution Mode**: `Fixed`
- **Resolution**: `100`
- **Phi Constant**: `Golden Ratio`

**Dense sphere sampling**:
- **Resolution Mode**: `Fixed`
- **Resolution**: `500`
- **Phi Constant**: `Golden Ratio`
- **Epsilon**: `0.5` (slight pole adjustment)

**Alternative distribution pattern**:
- **Phi Constant**: `Sqrt 2`

## Tips

{% hint style="info" %}
The Golden Ratio constant typically produces the most visually uniform distribution and is recommended for most use cases.
{% endhint %}

{% hint style="info" %}
Higher point counts produce more uniform apparent density. For sparse spheres (< 50 points), individual point placement becomes more noticeable.
{% endhint %}

## Related

- [Circle](./circle.md) - Planar circular distribution
- [3D Grid](./grid.md) - Cubic lattice instead of spherical

---

📦 **Module**: `PCGExElementsShapes` · 📄 [Source](https://github.com/Nebukam/PCGExtendedToolkit/blob/main/Source/PCGExElementsShapes/Public/Shapes/PCGExShapeFiblat.h)
