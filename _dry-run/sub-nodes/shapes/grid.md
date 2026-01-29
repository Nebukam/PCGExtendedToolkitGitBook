---
icon: grid
description: 'In editor :: PCGEx | Shape : 3D Grid'
---

# 3D Grid

Generates points arranged in a three-dimensional grid pattern within the seed point's bounds.

## Overview

The 3D Grid shape creates a regular lattice of points distributed across three axes. The grid fills the seed point's bounds, with resolution controlling point density either as a fixed count per axis or as spacing distance.

## How It Works

1. **Bounds Analysis**: Reads the seed point's bounds to determine grid extents
2. **Resolution Calculation**: Computes point count per axis based on resolution mode
3. **Fit Adjustment**: Optionally adjusts extents to fit evenly within bounds
4. **Point Generation**: Creates points at regular intervals across X, Y, and Z axes

## Settings

### Resolution Settings

<details>
<summary><strong>Adjust Fit</strong> <code>bitmask</code></summary>

Which axes should have their extents adjusted to fit evenly within the seed bounds. Uses a bitmask to select X, Y, and/or Z axes.

Default: `7` (all axes)

</details>

<details>
<summary><strong>X - Round</strong> <code>EPCGExTruncateMode</code></summary>

Rounding mode for X-axis cell count when using distance-based resolution.

*Visible when Resolution Mode = Distance*

Default: `None`

</details>

<details>
<summary><strong>X - Clamp Count</strong> <code>FPCGExClampDetails</code></summary>

Clamp settings for X-axis point count (min/max limits).

⚡ PCG Overridable

</details>

<details>
<summary><strong>Y - Round</strong> <code>EPCGExTruncateMode</code></summary>

Rounding mode for Y-axis cell count when using distance-based resolution.

*Visible when Resolution Mode = Distance*

Default: `None`

</details>

<details>
<summary><strong>Y - Clamp Count</strong> <code>FPCGExClampDetails</code></summary>

Clamp settings for Y-axis point count (min/max limits).

⚡ PCG Overridable

</details>

<details>
<summary><strong>Z - Round</strong> <code>EPCGExTruncateMode</code></summary>

Rounding mode for Z-axis cell count when using distance-based resolution.

*Visible when Resolution Mode = Distance*

Default: `None`

</details>

<details>
<summary><strong>Z - Clamp Count</strong> <code>FPCGExClampDetails</code></summary>

Clamp settings for Z-axis point count (min/max limits).

⚡ PCG Overridable

</details>

### Resolution (Inherited)

The 3D Grid uses vector-based resolution instead of scalar:

<details>
<summary><strong>Resolution (Vector)</strong> <code>FVector</code></summary>

Point count or spacing per axis (X, Y, Z). When using Fixed mode, specifies count per axis. When using Distance mode, specifies spacing between points per axis.

Supports constant value or attribute input.

Default: `(10, 10, 10)`

⚡ PCG Overridable

</details>

## Examples

**10x10x10 point grid**:
- **Resolution Mode**: `Fixed`
- **Resolution (Vector)**: `(10, 10, 10)`

**Grid with 50-unit spacing**:
- **Resolution Mode**: `Distance`
- **Resolution (Vector)**: `(50, 50, 50)`

**Flat grid (2D)**:
- **Resolution Mode**: `Fixed`
- **Resolution (Vector)**: `(10, 10, 1)`

**High-density X, sparse Y/Z**:
- **Resolution Mode**: `Fixed`
- **Resolution (Vector)**: `(20, 5, 5)`

## Related

- [Circle](./circle.md) - Circular pattern instead of rectangular
- [φ Sphere](./fiblat.md) - Spherical distribution instead of cubic

---

📦 **Module**: `PCGExElementsShapes` · 📄 [Source](https://github.com/Nebukam/PCGExtendedToolkit/blob/main/Source/PCGExElementsShapes/Public/Shapes/PCGExShapeGrid.h)
