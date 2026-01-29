---
description: 'In editor :: PCGEx | Tensor : Spline Pole'
---

# Spline Pole

**A tensor that attracts toward or repels from input splines.**

Uses actual spline data to create attraction/repulsion fields. Points within the spline's radius are directed toward or away from the nearest point on the spline.

---

## How It Works

```
Input Spline

    ╭──────────────────╮

Tensor Field (attraction toward spline)

    ↓   ↓   ↓   ↓   ↓   ↓
    ╭──────────────────╮
    ↑   ↑   ↑   ↑   ↑   ↑
```

---

## Inputs

| Pin | Description |
|-----|-------------|
| **Splines** | Input spline data to define the pole field |

---

## Settings

<details>
<summary><strong>Radius</strong> <code>double</code></summary>

Base radius of influence around the spline.

This is scaled by the spline's scale at each point along its length.

Default: `100.0`

⚡ PCG Overridable

</details>

---

## Spline Pole vs Path Pole

| Aspect | Spline Pole | Path Pole |
|--------|-------------|-----------|
| **Input** | Spline data | Point data |
| **Conversion** | Direct use | Points → Spline |
| **Control** | Full spline control | Point type setting |

---

## Example Use Cases

### Spline-Based Boundaries
Keep extrusion within or outside spline curves:
- Positive potency = attract toward spline
- Negative potency = repel from spline

### Path Guidance Rails
Create "magnetic" rails from splines:
- Paths are pulled toward the rail
- Useful for aligning to existing geometry

### Exclusion Zones
Define areas paths should avoid:
- Spline outlines the exclusion boundary
- Repulsion pushes paths away

---

📦 **Module**: `PCGExElementsTensors` · 📄 [Source](https://github.com/Nebukam/PCGExtendedToolkit/blob/dev/Source/PCGExElementsTensors/Public/Tensors/PCGExTensorSplinePole.h)
