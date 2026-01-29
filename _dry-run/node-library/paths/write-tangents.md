---
icon: arrows-alt
description: 'In editor :: PCGEx | Path : Write Tangents'
---

# Write Tangents

Computes and writes arrive/leave tangent vectors for path points.

## Overview

Write Tangents calculates tangent vectors at each point along a path, producing both arrive (incoming) and leave (outgoing) tangents. These tangents are essential for spline creation, smooth interpolation, and orientation calculations.

The node uses [instanced tangent operations](./tangents/README.md) that can be configured per-point, with optional overrides for the first and last points specifically.

## Settings

### Output Attributes

<details>
<summary><strong>Arrive Name</strong> <code>FName</code></summary>

Attribute name to write the arriving tangent vector to.

Default: `ArriveTangent`

⚡ PCG Overridable

</details>

<details>
<summary><strong>Leave Name</strong> <code>FName</code></summary>

Attribute name to write the leaving tangent vector to.

Default: `LeaveTangent`

⚡ PCG Overridable

</details>

### Tangent Operations

<details>
<summary><strong>Tangents</strong> <code>Instanced Factory</code></summary>

The main tangent calculation method applied to all points. See [Tangent Operations](./tangents/README.md) for available types.

⚡ PCG Overridable

</details>

<details>
<summary><strong>Start Override</strong> <code>Instanced Factory (Optional)</code></summary>

Optional tangent operation specifically for the first point. If not set, uses the main Tangents operation.

⚡ PCG Overridable

</details>

<details>
<summary><strong>End Override</strong> <code>Instanced Factory (Optional)</code></summary>

Optional tangent operation specifically for the last point. If not set, uses the main Tangents operation.

⚡ PCG Overridable

</details>

### Scaling

<details>
<summary><strong>Arrive Scale Input</strong> <code>Constant | Attribute</code></summary>

Where the arrive tangent scale comes from.

Default: `Constant`

</details>

<details>
<summary><strong>Arrive Scale</strong> <code>double</code></summary>

Scale multiplier for arrive tangents.

Default: `1.0`

⚡ PCG Overridable

</details>

<details>
<summary><strong>Leave Scale Input</strong> <code>Constant | Attribute</code></summary>

Where the leave tangent scale comes from.

Default: `Constant`

</details>

<details>
<summary><strong>Leave Scale</strong> <code>double</code></summary>

Scale multiplier for leave tangents.

Default: `1.0`

⚡ PCG Overridable

</details>

## Inputs

| Pin | Type | Description |
|-----|------|-------------|
| **In** | Points | Path points to compute tangents for |

## Examples

**Smooth spline preparation**:
- Tangents: `Catmull-Rom`
- Arrive/Leave Scale: `1.0`
- Use output with Create Spline for smooth curves

**Sharp endpoints, smooth middle**:
- Tangents: `Auto`
- Start Override: `Zero`
- End Override: `Zero`
- Creates a curve that starts and ends sharply

## Use Cases

- **Spline creation**: Provide tangent data for Create Spline node
- **Orientation**: Use tangents for direction-aware placement
- **Path analysis**: Understand curve behavior at each point

## Related

### Tangent Operations
- [Tangent Operations](./tangents/README.md) - Shared tangent factory types

### Often Used With
- [Create Spline](./create-spline.md) - Consumes tangent data for smooth splines
- [Reduce](./reduce.md) - Also outputs tangents during simplification

---

📦 **Module**: `PCGExElementsPaths` · 📄 [Source](https://github.com/Nebukam/PCGExtendedToolkit/blob/main/Source/PCGExElementsPaths/Private/Elements/PCGExWriteTangents.cpp)
