---
description: 'In editor :: PCGEx | G-Probe : Anisotropic (Global)'
---

# Global Anisotropic

**Ellipsoidal distance metric for directional connectivity.**

Uses an anisotropic (direction-dependent) distance metric where distances along different axes are scaled differently. This creates connectivity patterns that favor certain directions.

---

## How It Works

```
Isotropic (normal) distance:    Anisotropic distance:

        ●                              ●
       ╱│╲                            ╱ ╲
      ╱ │ ╲                          ╱   ╲
     ●──●──●                        ●─────●
      ╲ │ ╱                          ╲   ╱
       ╲│╱                            ╲ ╱
        ●                              ●

Equal radius                   Stretched along primary axis
```

---

## Settings

<details>
<summary><strong>Primary Axis</strong> <code>FVector</code></summary>

Preferred connection direction.

Connections along this axis are "shorter" in anisotropic distance.

Default: `(1, 0, 0)` (Forward)

⚡ PCG Overridable

</details>

<details>
<summary><strong>Secondary Axis</strong> <code>FVector</code></summary>

Cross direction (perpendicular to primary).

Default: `(0, 1, 0)` (Right)

⚡ PCG Overridable

</details>

<details>
<summary><strong>Primary Scale</strong> <code>double</code></summary>

Scale factor for distances along the primary axis.

- 1.0 = normal distance
- < 1.0 = connections easier along this axis
- \> 1.0 = connections harder along this axis

Default: `1.0`

⚡ PCG Overridable

</details>

<details>
<summary><strong>Secondary Scale</strong> <code>double</code></summary>

Scale factor for distances along the secondary axis.

Default: `2.0`

⚡ PCG Overridable

</details>

<details>
<summary><strong>Tertiary Scale</strong> <code>double</code></summary>

Scale factor for the third axis (computed as cross product of primary and secondary).

Default: `2.0`

⚡ PCG Overridable

</details>

<details>
<summary><strong>K</strong> <code>int32</code></summary>

Number of nearest neighbors (using anisotropic distance).

Default: `5`

⚡ PCG Overridable

</details>

<details>
<summary><strong>Use Per-Point Normal</strong> <code>bool</code></summary>

When enabled, uses each point's normal as the primary axis.

Creates locally-adaptive anisotropy.

Default: `false`

⚡ PCG Overridable

</details>

---

## Scale Factor Behavior

| Primary Scale | Effect |
|---------------|--------|
| 1.0 | No preference |
| 0.5 | Primary axis distances halved (favored) |
| 2.0 | Primary axis distances doubled (avoided) |

The anisotropic distance is:
```
d_aniso = sqrt((dx/Px)² + (dy/Py)² + (dz/Pz)²)
```

Where Px, Py, Pz are the scale factors projected onto each axis.

---

## Example Use Cases

### Terrain Following
Favor horizontal connections over vertical:
- Primary Axis = Forward or Right
- Primary Scale = 1.0
- Tertiary Scale (Up) = 3.0

### River Networks
Create elongated, directional flow:
- Primary Axis = flow direction
- Primary Scale = 0.5 (favor flow direction)

### Building Floors
Connect within floors more than between:
- Primary Axis = Up
- Primary Scale = 5.0 (discourage vertical)

### Aligned Grids
Create grid-aligned connectivity:
- Primary = X axis
- Secondary = Y axis
- Low scales favor axis-aligned connections

---

{% hint style="info" %}
**Per-Point Normal**: When enabled, each point uses its own normal as the primary axis. This is useful for surface-adaptive connectivity where the preferred direction varies across the point set.
{% endhint %}

---

📦 **Module**: `PCGExElementsProbing` · 📄 [Source](https://github.com/Nebukam/PCGExtendedToolkit/blob/dev/Source/PCGExElementsProbing/Public/Probes/PCGExGlobalProbeAnisotropic.h)
