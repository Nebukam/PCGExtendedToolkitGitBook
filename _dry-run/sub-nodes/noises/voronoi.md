---
description: 'In editor :: PCGEx | Noise : Noise : Voronoi'
---

# Voronoi

**Cell-based noise** that creates organic patterns based on distance to randomly placed feature points.

```
┌─────┬───────┬────┐
│  ·  │   ·   │ ·  │
│     └───┬───┘    │
├─────────┤   ·    │
│    ·    ├────────┤
└─────────┴────────┘
```

---

## Settings

<details>
<summary><strong>Output Type</strong> <code>EPCGExVoronoiOutput</code></summary>

What value to output from the Voronoi calculation.

| Value | Description |
|-------|-------------|
| **Cell Value** | Random value per cell (flat shading) |
| **Distance** | Distance to nearest cell center |
| **Edge Distance** | Distance to nearest cell edge |
| **Crackle** | F2 - F1 (highlights cell boundaries) |

Default: `Cell Value`

⚡ PCG Overridable

</details>

<details>
<summary><strong>Jitter</strong> <code>double</code></summary>

Randomness of cell center positions.
- 0 = Regular grid
- 1 = Maximum randomness

Range: 0–1

Default: `1.0`

⚡ PCG Overridable

</details>

<details>
<summary><strong>Smoothness</strong> <code>double</code></summary>

Smooth blending between cells (for Distance mode).

Range: 0–1

Default: `0.0`

⚡ PCG Overridable

</details>

---

## Behavior Notes

- Creates organic cell patterns
- Cell Value mode gives flat color per cell
- Distance mode creates rounded cell shapes
- Crackle mode highlights cell boundaries

---

📦 **Module**: `PCGExNoise3D` · 📄 [Source](https://github.com/Nebukam/PCGExtendedToolkit/blob/dev/Source/PCGExNoise3D/Public/Noises/PCGExNoiseVoronoi.h)
