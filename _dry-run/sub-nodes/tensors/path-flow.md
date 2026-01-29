---
description: 'In editor :: PCGEx | Tensor : Path Flow'
---

# Path Flow

**A tensor that represents a flow field along a path defined by input points.**

Input points are converted to a spline, and the tensor field flows along that spline's direction. Points within the spline's radius are influenced to follow the path.

---

## How It Works

```
Input Points (path)

    A ●───────● B───────● C

Tensor Field (flow along path)

    ──►──►──►──►──►──►──►──►
```

---

## Settings

<details>
<summary><strong>Point Type</strong> <code>EPCGExSplinePointTypeRedux</code></summary>

How the input points are interpolated into a spline.

| Value | Behavior |
|-------|----------|
| **Linear** | Straight segments between points |
| **Curve** | Smooth curves through points |
| **Constant** | Step-function (no interpolation) |

Default: `Linear`

⚡ PCG Overridable

</details>

<details>
<summary><strong>Smooth Linear</strong> <code>bool</code></summary>

When using Linear point type, apply smoothing to the tangents.

*Visible when Point Type = Linear*

Default: `true`

⚡ PCG Overridable

</details>

<details>
<summary><strong>Radius</strong> <code>double</code></summary>

Base radius of influence around the spline.

This is scaled by the control points' scale at each location.

Default: `100.0`

⚡ PCG Overridable

</details>

<details>
<summary><strong>Spline Direction</strong> <code>EPCGExAxis</code></summary>

Which axis of the spline transform represents the flow direction.

| Value | Axis |
|-------|------|
| **Forward** | Along the spline |
| **Backward** | Against the spline |
| **Right/Left** | Perpendicular |
| **Up/Down** | Perpendicular |

Default: `Forward`

⚡ PCG Overridable

</details>

---

## Example Use Cases

### River/Road Following
Define a river or road with points:
- Points mark the path course
- Tensor guides extrusion along the route

### Cable Routing
Guide cables between connection points:
- Path defines the general route
- Extrusion follows the guide

### Conveyor Systems
Create directional flow channels:
- Path flow defines movement direction
- Objects follow the conveyor path

---

📦 **Module**: `PCGExElementsTensors` · 📄 [Source](https://github.com/Nebukam/PCGExtendedToolkit/blob/dev/Source/PCGExElementsTensors/Public/Tensors/PCGExTensorPathFlow.h)
