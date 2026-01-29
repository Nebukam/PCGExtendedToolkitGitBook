---
icon: arrows-left-right
description: 'In editor :: PCGEx | Path : Offset'
---

# Offset

Displaces path points perpendicular to the path direction.

## Overview

Offset moves points sideways relative to the path's travel direction. This creates parallel paths, road shoulders, wall thicknesses, or any geometry that needs to run alongside the original path at a consistent distance.

## How It Works

For each point:

1. **Calculate path direction** at the point (tangent)
2. **Compute perpendicular** (normal) direction using the chosen method
3. **Displace point** by offset distance along the normal
4. **Apply adjustments** to handle tight corners

## Settings

### Offset Method

<details>
<summary><strong>Offset Method</strong> <code>Slide | Line/Plane</code></summary>

Algorithm for computing offset direction at each point:

| Option | Behavior |
|--------|----------|
| **Slide** | Slide along path using normal direction calculations |
| **Line/Plane** | Use line/plane intersection for offset direction |

Default: `Slide`

⚡ PCG Overridable

</details>

### Offset Amount

<details>
<summary><strong>Offset Input</strong> <code>Constant | Attribute</code></summary>

Where to read the offset value from.

Default: `Constant`

⚡ PCG Overridable

</details>

<details>
<summary><strong>Offset</strong> <code>double</code></summary>

Offset distance (when using Constant input).

- Positive values offset in one direction
- Negative values offset in the opposite direction

Default: `1.0`

⚡ PCG Overridable

</details>

<details>
<summary><strong>Offset (Attr)</strong> <code>Attribute Selector</code></summary>

Attribute containing per-point offset values (when Input is Attribute). The constant Offset value acts as a scale multiplier.

⚡ PCG Overridable

</details>

<details>
<summary><strong>Apply Point Scale to Offset</strong> <code>bool</code></summary>

Scale offset direction and distance using each point's scale.

Default: Disabled

⚡ PCG Overridable

</details>

### Direction

<details>
<summary><strong>Up Vector</strong> <code>FVector</code></summary>

Reference "up" direction for computing the perpendicular offset direction.

Default: World Up `(0, 0, 1)`

⚡ PCG Overridable

</details>

<details>
<summary><strong>Direction Type</strong> <code>Constant | Attribute</code></summary>

Where to read the offset direction from.

Default: `Constant`

⚡ PCG Overridable

</details>

<details>
<summary><strong>Direction (Attr)</strong> <code>Attribute Selector</code></summary>

Attribute containing per-point direction vectors (when Type is Attribute).

⚡ PCG Overridable

</details>

<details>
<summary><strong>Direction</strong> <code>Normal | Binormal | Average Normal</code></summary>

How to compute the offset direction when using Slide method with Constant direction:

| Option | Behavior |
|--------|----------|
| **Normal** | Use edge normal direction |
| **Binormal** | Use binormal (cross of tangent and up) |
| **Average Normal** | Average of neighboring edge normals |

Default: `Average Normal`

⚡ PCG Overridable

</details>

<details>
<summary><strong>Invert Direction</strong> <code>bool</code></summary>

Inverts the offset direction. Provides consistent inversion regardless of input sign.

Default: Disabled

⚡ PCG Overridable

</details>

### Adjustment (Slide method only)

<details>
<summary><strong>Adjustment</strong> <code>Raw | Custom Smooth | Auto Smooth | Mitre</code></summary>

How to adjust offset in tight angles:

| Option | Behavior |
|--------|----------|
| **Raw** | No adjustment - offset applied as-is |
| **Custom Smooth** | Apply custom smoothing factor at corners |
| **Auto Smooth** | Automatically smooth tight corners |
| **Mitre** | Create mitered corners with limit |

Default: `Auto Smooth`

⚡ PCG Overridable

</details>

<details>
<summary><strong>Adjustment Scale</strong> <code>double</code></summary>

Smoothing factor for Custom Smooth adjustment mode.

Default: `-0.5`

⚡ PCG Overridable

</details>

<details>
<summary><strong>Mitre Limit</strong> <code>double</code></summary>

Maximum extension for mitered corners (Mitre adjustment mode).

Default: `4.0`

⚡ PCG Overridable

</details>

## Inputs

| Pin | Type | Description |
|-----|------|-------------|
| **In** | Points | Path points to offset |
| **Filters** | Filters | Optional filters to select which points get offset |

## Examples

**Create parallel path** (road shoulder):
- Offset: `2.0`
- Adjustment: `Auto Smooth`

**Variable width offset** (river banks):
- Offset Input: `Attribute`
- Offset Attribute: `BankWidth`

**Mitered corners** (precise geometry):
- Adjustment: `Mitre`
- Mitre Limit: `4.0`

## Use Cases

- **Parallel paths**: Create lanes, shoulders, or companion paths
- **Wall thickness**: Offset inward and outward for wall geometry
- **Variable offsets**: Use attribute-driven offsets for organic variation

## Related

### Path Transformation
- [Solidify](./solidify.md) - Expand path into 3D volume
- [Orient](./orient.md) - Compute up vectors for offset

---

📦 **Module**: `PCGExElementsPaths` · 📄 [Source](https://github.com/Nebukam/PCGExtendedToolkit/blob/main/Source/PCGExElementsPaths/Private/Elements/PCGExOffsetPath.cpp)
