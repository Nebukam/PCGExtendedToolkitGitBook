---
description: 'In editor :: PCGEx | Tensor : Spline Flow'
---

# Spline Flow

**A tensor that represents a flow field along input splines.**

Uses actual spline data (not points converted to splines) to define the flow direction. Points within the spline's radius are influenced to follow the spline's tangent.

---

## How It Works

```
Input Spline

    ╭──────────────────╮
    │                  │
    ╰──────────────────╯

Tensor Field (flow along spline)

    ──►──►──►──►──►──►──►──►
         │              │
    ◄──◄──◄──◄──◄──◄──◄──◄──
```

---

## Inputs

| Pin | Description |
|-----|-------------|
| **Splines** | Input spline data to define the flow field |

---

## Settings

<details>
<summary><strong>Radius</strong> <code>double</code></summary>

Base radius of influence around the spline.

This is scaled by the spline's scale at each point along its length.

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

## Spline Flow vs Path Flow

| Aspect | Spline Flow | Path Flow |
|--------|-------------|-----------|
| **Input** | Spline data | Point data |
| **Conversion** | Direct use | Points → Spline |
| **Control** | Full spline control | Point type setting |
| **Use Case** | Existing splines | Quick path definition |

---

## Example Use Cases

### Highway Following
Guide paths along highway splines:
- Splines define road centerlines
- Extrusion follows the roads

### River Currents
Use water body splines:
- Splines define river course
- Flow tensor creates current direction

### Cable Conduits
Route cables through spline-defined ducts:
- Splines are the duct paths
- Cables follow the conduit direction

---

📦 **Module**: `PCGExElementsTensors` · 📄 [Source](https://github.com/Nebukam/PCGExtendedToolkit/blob/dev/Source/PCGExElementsTensors/Public/Tensors/PCGExTensorSplineFlow.h)
