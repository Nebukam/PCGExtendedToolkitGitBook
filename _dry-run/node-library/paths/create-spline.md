---
icon: bezier-curve
description: 'In editor :: PCGEx | Create Spline'
---

# Create Spline

Creates Unreal spline actors from point sequences.

## Overview

Create Spline converts path points into Unreal Engine spline components, producing actual spline actors that can be used by other systems—landscape splines, blueprint actors, or any component that works with splines. Tangent data (if present) is used to control curve smoothness.

## How It Works

1. **Read path points** in order
2. **Create spline component** on target actor
3. **Add spline points** at each path point position
4. **Apply tangents** from attributes (if available)
5. **Configure spline properties** (closed loop, spline type)

## Settings

### Target Actor

<details>
<summary><strong>Actor Mode</strong> <code>CreateNew | UseExisting</code></summary>

Where to create the spline:

| Option | Behavior |
|--------|----------|
| **CreateNew** | Spawn a new actor for each spline |
| **UseExisting** | Add spline to an existing actor |

Default: `CreateNew`

</details>

<details>
<summary><strong>Actor Class</strong> <code>Class Reference</code></summary>

Blueprint or C++ class to spawn when creating new actors.

Default: Basic Actor

</details>

### Spline Type

<details>
<summary><strong>Spline Type</strong> <code>Linear | Curve | Clamped | Constant</code></summary>

Interpolation mode between spline points:

| Option | Behavior |
|--------|----------|
| **Linear** | Straight lines between points |
| **Curve** | Smooth Catmull-Rom curves |
| **Clamped** | Clamped spline curves |
| **Constant** | Step interpolation |

Default: `Curve`

</details>

### Tangents

Tangent data controls curve smoothness. Available when Spline Type uses curves.

<details>
<summary><strong>Source</strong> <code>No Tangents | Attribute | In-Place</code></summary>

Where tangent data comes from:

| Option | Behavior |
|--------|----------|
| **No Tangents** | Don't apply custom tangents |
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

<details>
<summary><strong>Arrive/Leave Scale</strong> <code>double</code></summary>

Multipliers for tangent vector lengths. Larger values create wider curves.

Default: `1.0`

⚡ PCG Overridable

</details>

### Closed Loop

<details>
<summary><strong>Auto-Detect Closed Loop</strong> <code>bool</code></summary>

Automatically close the spline if the path forms a loop.

Default: Enabled

</details>

<details>
<summary><strong>Force Closed</strong> <code>bool</code></summary>

Always create closed loop splines regardless of path shape.

Default: Disabled

</details>

## Inputs

| Pin | Type | Description |
|-----|------|-------------|
| **Paths** | Points | Path points to convert to splines |

## Outputs

| Pin | Type | Description |
|-----|------|-------------|
| **Splines** | Actor References | Created spline actors |

## Examples

**Smooth spline from path**:
1. Use Write Tangents to calculate tangent data
2. Connect to Create Spline
3. Spline Type: `Curve`
4. Use Tangent Attributes: Enabled

**Linear spline** (straight segments):
- Spline Type: `Linear`
- Use Tangent Attributes: Disabled

**Closed loop spline**:
- Auto-Detect Closed Loop: Enabled
- Or Force Closed: Enabled

## Use Cases

- **Landscape splines**: Create drivable roads
- **Blueprint consumption**: Splines for blueprint systems
- **Runtime navigation**: Paths for AI or player movement
- **Visual elements**: Cables, ropes, procedural meshes

## Related

### Path Operations
- [Write Tangents](./write-tangents.md) - Prepare tangent data for smooth splines
- [Spline to Path](./spline-to-path.md) - Inverse operation

### Tangent Operations
- [Tangent Operations](./tangents/) - Available in-place tangent calculations

### See Also
- [Spline Mesh](./spline-mesh.md) - Create mesh components along splines

---

📦 **Module**: `PCGExElementsPaths` · 📄 [Source](https://github.com/Nebukam/PCGExtendedToolkit/blob/main/Source/PCGExElementsPaths/Private/Elements/PCGExCreateSpline.cpp)
