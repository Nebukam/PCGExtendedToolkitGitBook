---
description: 'In editor :: PCGEx | Tensor : Path Pole'
---

# Path Pole

**A tensor that attracts toward or repels from a path defined by input points.**

Similar to Path Flow, but instead of flowing along the path, samples are directed toward or away from the nearest point on the path.

---

## How It Works

```
Input Points (path)

    A ●───────● B───────● C

Tensor Field (attraction toward path)

         ↓   ↓   ↓   ↓   ↓
    ───────────────────────── (path)
         ↑   ↑   ↑   ↑   ↑
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

---

## Example Use Cases

### Corridor Attraction
Guide extrusion toward a defined corridor:
- Path defines the centerline
- Tensor pulls paths toward the corridor

### Magnetic Track
Create a "rail" that pulls objects in:
- Path pole attracts
- Objects snap toward the path

### Boundary Repulsion
Keep paths away from a boundary line:
- Negative potency pushes away
- Creates exclusion corridors

---

📦 **Module**: `PCGExElementsTensors` · 📄 [Source](https://github.com/Nebukam/PCGExtendedToolkit/blob/dev/Source/PCGExElementsTensors/Public/Tensors/PCGExTensorPathPole.h)
