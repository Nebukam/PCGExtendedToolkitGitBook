---
icon: clone
description: 'In editor :: PCGEx | Copy to Path'
---

# Copy to Path

Deforms points along a path or spline.

## Overview

Copy to Path takes source points and redistributes them along target paths or splines, applying the path's shape as a deformation. Think of it as bending a straight piece of geometry to follow a curved path—useful for creating fences that follow terrain, pipes that curve around obstacles, or any geometry that needs to conform to a path.

## Settings

### Data Matching

<details>
<summary><strong>Data Matching</strong> <code>FPCGExMatchingDetails</code></summary>

Controls which source points get deformed by which target paths. Allows filtering and matching between inputs and targets.

⚡ PCG Overridable

</details>

### Spline Settings

<details>
<summary><strong>Default Point Type</strong> <code>Linear | Curve | Constant | Curve Custom Tangent</code></summary>

Default spline point type used when building splines from paths.

Default: `Curve`

⚡ PCG Overridable

</details>

<details>
<summary><strong>Apply Custom Point Type</strong> <code>bool</code></summary>

If enabled, reads the point type from an attribute instead of using the default.

Default: Disabled

⚡ PCG Overridable

</details>

<details>
<summary><strong>Point Type Attribute</strong> <code>FName</code></summary>

Attribute to read the point type from (when Apply Custom Point Type is enabled).

Default: `PointType`

⚡ PCG Overridable

</details>

<details>
<summary><strong>Tangents</strong> <code>FPCGExTangentsDetails</code></summary>

Tangent settings for custom tangent point types.

⚡ PCG Overridable

</details>

### Bounds Settings

<details>
<summary><strong>Bounds Source</strong> <code>EPCGExPointBoundsSource</code></summary>

Which point property to use for bounds calculation.

Default: `Center`

⚡ PCG Overridable

</details>

<details>
<summary><strong>Min Bounds Offset</strong> <code>FVector</code></summary>

Minimum bounds offset for deformation.

Default: `(-1, -1, -1)`

⚡ PCG Overridable

</details>

<details>
<summary><strong>Max Bounds Offset</strong> <code>FVector</code></summary>

Maximum bounds offset for deformation.

Default: `(1, 1, 1)`

⚡ PCG Overridable

</details>

### Deform Settings

<details>
<summary><strong>Axis Order</strong> <code>XYZ | XZY | YXZ | YZX | ZXY | ZYX</code></summary>

Axis transformation order. First axis is along the spline, second is the cross axis.

Default: `XYZ`

⚡ PCG Overridable

</details>

<details>
<summary><strong>Transform Scale</strong> <code>Bitmask</code></summary>

Which scale components from the sampled transform should be applied to the point.

Default: `All`

</details>

<details>
<summary><strong>Preserve Original Input Scale</strong> <code>bool</code></summary>

If enabled, preserves the original input point scale.

Default: Enabled

⚡ PCG Overridable

</details>

<details>
<summary><strong>Preserve Aspect Ratio</strong> <code>bool</code></summary>

If enabled, preserves the aspect ratio during deformation.

Default: Disabled

⚡ PCG Overridable

</details>

<details>
<summary><strong>Flatten Axis</strong> <code>None | X | Y | Z</code></summary>

Optionally flatten the deformation along a specific axis.

Default: `None`

⚡ PCG Overridable

</details>

<details>
<summary><strong>Wrap Closed Loops</strong> <code>bool</code></summary>

If enabled, wraps deformation for closed loop paths.

Default: Enabled

⚡ PCG Overridable

</details>

### Main Axis Settings

<details>
<summary><strong>Main Axis Settings</strong> <code>FPCGExAxisDeformDetails</code></summary>

Controls how points are distributed along the main (spline direction) axis.

Contains:
- **Usage** - How alpha values define the range: `Start & End`, `Start & Size`, or `Center & Size`
- **First Alpha** - Start position (constant or attribute)
- **Second Alpha** - End position (constant or attribute)

Default: First Alpha = `0`, Second Alpha = `1`

⚡ PCG Overridable

</details>

### Twist Settings

<details>
<summary><strong>Do Twist</strong> <code>bool</code></summary>

If enabled, applies twist deformation along the path.

Default: Disabled

⚡ PCG Overridable

</details>

<details>
<summary><strong>Twist Settings</strong> <code>FPCGExAxisDeformDetails</code></summary>

Controls twist deformation (when Do Twist is enabled).

Contains:
- **Usage** - How alpha values define the range
- **First Alpha** - Start twist amount (constant or from `StartTwistAmount` attribute)
- **Second Alpha** - End twist amount (constant or from `EndTwistAmount` attribute)

Default: First Alpha = `0`, Second Alpha = `0`

⚡ PCG Overridable

</details>

### Target Mask Settings

<details>
<summary><strong>Target Mask Settings</strong> <code>FPCGExAxisDeformDetails</code></summary>

Used to shrink the scope per-target, distributing points only on a sub-selection of the path.

Contains:
- **Usage** - How alpha values define the range
- **First Alpha** - Mask start (constant or from `MaskStart` attribute)
- **Second Alpha** - Mask end (constant or from `MaskEnd` attribute)

⚡ PCG Overridable

</details>

## Inputs

| Pin | Type | Description |
|-----|------|-------------|
| **In** | Points | Source points to deform |
| **Targets** | Points/Splines | Target paths or splines to deform along |

## Examples

**Basic path deformation**:
- Connect source geometry to In
- Connect path points to Targets
- Axis Order: `XYZ` (X along path)
- Points will be deformed to follow the path shape

**Twisted pipe**:
- Do Twist: Enabled
- Twist Settings: First Alpha = `0`, Second Alpha = `360`
- Creates a full twist along the path length

**Partial path coverage**:
- Target Mask Settings: First Alpha = `0.25`, Second Alpha = `0.75`
- Points only cover the middle 50% of each target path

## Use Cases

- **Architectural elements**: Fences, walls, rails along terrain paths
- **Natural features**: Vines, roots following curves
- **Infrastructure**: Pipes, cables, wires along routes
- **Repeated geometry**: Any element that should follow a path

## Related

### Path Operations
- [Spline Mesh Simple](./spline-mesh-simple.md) - Create spline mesh components
- [Create Spline](./create-spline.md) - Convert paths to splines
- [Orient](./orient/README.md) - Compute path orientation

---

📦 **Module**: `PCGExElementsPaths` · 📄 [Source](https://github.com/Nebukam/PCGExtendedToolkit/blob/main/Source/PCGExElementsPaths/Private/Elements/PCGExCopyToPaths.cpp)
