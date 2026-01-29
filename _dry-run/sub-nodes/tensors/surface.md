---
description: 'In editor :: PCGEx | Tensor : Surface'
---

# Surface

**A tensor that derives direction from nearby surfaces.**

Samples nearby surfaces (collision geometry, actors, or PCG surfaces) and computes a direction based on surface proximity and orientation. Offers multiple modes for how the direction is derived from the surface.

---

## How It Works

```
Surface below sample point

    Sample Point    ●
                    │
    Surface Normal  │ ↓ (toward surface)
                    │
    ═══════════════════  (surface)
```

---

## Inputs

| Pin | Description |
|-----|-------------|
| **Actor References** | Points with actor reference attribute |
| **Surfaces** | PCG Surface data |

---

## Modes

<details>
<summary><strong>Mode</strong> <code>EPCGExSurfaceTensorMode</code></summary>

How to compute the tensor direction from the surface.

| Value | Behavior |
|-------|----------|
| **Along Surface** | Project reference axis onto surface tangent plane |
| **Toward Surface** | Point toward the nearest surface point |
| **Away From Surface** | Point away from the nearest surface point |
| **Surface Normal** | Use the surface normal at the nearest point |
| **Orbit** | Circular motion around the surface (cross product) |

Default: `Along Surface`

⚡ PCG Overridable

</details>

---

## Settings

<details>
<summary><strong>Max Distance</strong> <code>double</code></summary>

Maximum search distance for surface detection.

If no surface is found within this distance, the sample may fail or return zero.

Default: `1000.0`

⚡ PCG Overridable

</details>

<details>
<summary><strong>Reference Axis</strong> <code>EPCGExAxis</code></summary>

For Along Surface and Orbit modes, this axis from the probe transform is projected onto the surface or used for the cross product.

*Visible when Mode = Along Surface or Orbit*

Default: `Forward`

⚡ PCG Overridable

</details>

<details>
<summary><strong>Use Normal For Away</strong> <code>bool</code></summary>

When in Away From Surface mode, use the surface normal instead of the direction from the nearest point.

*Visible when Mode = Away From Surface*

Default: `true`

⚡ PCG Overridable

</details>

### Source Settings

<details>
<summary><strong>Use World Collision</strong> <code>bool</code></summary>

When enabled, use world collision queries to find surfaces.

Default: `false`

</details>

<details>
<summary><strong>Collision Settings</strong></summary>

Configuration for world collision queries.

*Visible when Use World Collision = true*

⚡ PCG Overridable

</details>

<details>
<summary><strong>Actor Reference Attribute</strong> <code>FName</code></summary>

Name of the attribute containing actor reference paths when using Actor References input.

Default: `ActorReference`

⚡ PCG Overridable

</details>

<details>
<summary><strong>Return Zero On Miss</strong> <code>bool</code></summary>

When no surface is found, return zero instead of failing the sample.

Default: `false`

⚡ PCG Overridable

</details>

---

## Example Use Cases

### Terrain Following
Keep extrusion parallel to terrain:
- Mode = Along Surface
- Paths flow along the ground contour

### Surface Hugging
Guide paths toward surfaces:
- Mode = Toward Surface
- Paths approach and follow surfaces

### Surface Avoidance
Keep paths away from geometry:
- Mode = Away From Surface
- Paths maintain distance from obstacles

### Wall Climbing
Paths that orbit around surfaces:
- Mode = Orbit
- Creates climbing/wrapping behavior

---

{% hint style="warning" %}
**Performance**: Surface queries (especially world collision) can be expensive. Use Max Distance to limit the search range, and consider using dedicated surface inputs rather than world collision for better performance.
{% endhint %}

---

📦 **Module**: `PCGExElementsTensors` · 📄 [Source](https://github.com/Nebukam/PCGExtendedToolkit/blob/dev/Source/PCGExElementsTensors/Public/Tensors/PCGExTensorSurface.h)
