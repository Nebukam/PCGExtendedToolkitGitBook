---
icon: road
description: 'In editor :: PCGEx | Path : Spline Mesh (Simple)'
---

# Spline Mesh (Simple)

Creates spline mesh components along path segments.

## Overview

Spline Mesh (Simple) generates Unreal Engine spline mesh components for each segment of a path. Each pair of consecutive points becomes a spline mesh segment, with the mesh stretched and curved to follow the path. This is useful for creating roads, pipes, cables, fences, or any geometry that follows a path.

## How It Works

For each path segment (pair of consecutive points):

1. **Get segment endpoints** and their tangents
2. **Load static mesh** from attribute or constant
3. **Create spline mesh component** on target actor
4. **Configure mesh deformation** using start/end positions and tangents
5. **Apply material overrides** if specified

## Settings

### Mesh Selection

<details>
<summary><strong>Asset Type</strong> <code>Constant | Attribute</code></summary>

How to select the static mesh for each segment:

| Option | Behavior |
|--------|----------|
| **Constant** | Use the same mesh for all segments |
| **Attribute** | Read mesh asset path from point attribute |

Default: `Attribute`

</details>

<details>
<summary><strong>Static Mesh</strong> <code>Static Mesh Reference</code></summary>

The mesh to use when Asset Type is **Constant**.

</details>

<details>
<summary><strong>Asset Path Attribute</strong> <code>Attribute Name</code></summary>

Attribute containing mesh asset paths when Asset Type is **Attribute**.

Default: `AssetPath`

</details>

### Material Override

<details>
<summary><strong>Read Material From Attribute</strong> <code>bool</code></summary>

Override mesh material using an attribute.

Default: Disabled

</details>

<details>
<summary><strong>Material Attribute</strong> <code>Attribute Name</code></summary>

Attribute containing material asset paths.

Default: `MaterialPath`

</details>

<details>
<summary><strong>Material Slot</strong> <code>int32</code></summary>

Which material slot to override.

Default: `0`

</details>

### Target Actor

<details>
<summary><strong>Target Actor</strong> <code>Actor Reference</code></summary>

Actor to attach spline mesh components to. If not specified, creates components on the PCG actor.

</details>

### Tangents

Tangent data controls how the mesh curves between points.

<details>
<summary><strong>Source</strong> <code>No Tangents | Attribute | In-Place</code></summary>

Where tangent data comes from:

| Option | Behavior |
|--------|----------|
| **No Tangents** | Straight segments (no curving) |
| **Attribute** | Read from point attributes (`ArriveTangent`, `LeaveTangent`) |
| **In-Place** | Calculate tangents using a tangent operation |

Default: `Attribute`

</details>

<details>
<summary><strong>Tangent Operation</strong> <code>Tangent Factory</code></summary>

When Source is **In-Place**, select how tangents are calculated:

- [Auto](./tangents/auto.md) - From apex geometry
- [Catmull-Rom](./tangents/catmull-rom.md) - Classic smooth spline tangents
- [From Neighbors](./tangents/neighbors.md) - Averaged neighbor directions
- [From Transform](./tangents/transform.md) - Use point rotations
- [Zero](./tangents/zero.md) - Sharp corners

See [Tangent Operations](./tangents/) for details.

</details>

### Offsets

<details>
<summary><strong>Start Offset</strong> <code>Vector2D</code></summary>

2D offset applied to segment start point (perpendicular to path direction).

Default: `(0, 0)`

⚡ PCG Overridable (can read from attribute)

</details>

<details>
<summary><strong>End Offset</strong> <code>Vector2D</code></summary>

2D offset applied to segment end point.

Default: `(0, 0)`

⚡ PCG Overridable (can read from attribute)

</details>

### Up Vector

<details>
<summary><strong>Spline Mesh Up Mode</strong> <code>Constant | Attribute</code></summary>

How to determine the up vector for mesh orientation:

| Option | Behavior |
|--------|----------|
| **Constant** | Use a fixed up vector for all segments |
| **Attribute** | Read up vector from point attribute |

Default: `Constant`

</details>

<details>
<summary><strong>Spline Mesh Up Vector</strong> <code>FVector</code></summary>

The up vector when mode is **Constant**.

Default: `(0, 0, 1)` (world up)

</details>

### Mesh Descriptor

<details>
<summary><strong>Static Mesh Descriptor</strong> <code>Component Settings</code></summary>

Default settings applied to all spline mesh components: collision, mobility, render settings, etc.

</details>

## Inputs

| Pin | Type | Description |
|-----|------|-------------|
| **Paths** | Points | Path points defining spline mesh segments |

## Examples

**Simple pipe/cable**:
- Asset Type: `Constant`
- Static Mesh: Cylinder or pipe mesh
- Tangents Source: `In-Place` with Catmull-Rom

**Road with varying width**:
- Asset Type: `Attribute`
- Use Start/End Offset attributes for width variation
- Up Vector: World up for flat roads

**Per-segment mesh variation**:
- Asset Type: `Attribute`
- Write mesh paths to `AssetPath` attribute before this node

## Use Cases

- **Roads and paths**: Curved road geometry following terrain
- **Pipes and cables**: Infrastructure that follows routes
- **Fences and railings**: Linear structures along paths
- **Rivers and streams**: Water geometry following path curves

## Related

### Path Operations
- [Create Spline](./create-spline.md) - Create spline actors instead of mesh components
- [Write Tangents](./write-tangents.md) - Pre-compute tangent data

### Tangent Operations
- [Tangent Operations](./tangents/) - Available in-place tangent calculations

---

📦 **Module**: `PCGExElementsPaths` · 📄 [Source](https://github.com/Nebukam/PCGExtendedToolkit/blob/main/Source/PCGExElementsPaths/Private/Elements/PCGExPathSplineMeshSimple.cpp)
