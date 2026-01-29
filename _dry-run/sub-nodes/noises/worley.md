---
description: 'In editor :: PCGEx | Noise : Noise : Worley'
---

# Worley

**Cellular noise** with configurable distance functions and return types. More control than Voronoi for cell-based patterns.

---

## Settings

<details>
<summary><strong>Distance Function</strong> <code>EPCGExWorleyDistanceFunc</code></summary>

How to measure distance to feature points.

| Value | Description |
|-------|-------------|
| **Euclidean** | Standard straight-line distance |
| **Euclidean Squared** | Squared distance (faster, sharper) |
| **Manhattan** | Axis-aligned distance (diamond shapes) |
| **Chebyshev** | Maximum axis distance (square shapes) |

Default: `Euclidean`

⚡ PCG Overridable

</details>

<details>
<summary><strong>Return Type</strong> <code>EPCGExWorleyReturnType</code></summary>

What distance combination to return.

| Value | Description |
|-------|-------------|
| **F1** | Distance to closest point |
| **F2** | Distance to second closest |
| **F2 - F1** | Edge detection (cell boundaries) |
| **F1 + F2** | Sum of distances |
| **F1 × F2** | Product of distances |
| **Cell Value** | Random value per cell |

Default: `F1`

⚡ PCG Overridable

</details>

<details>
<summary><strong>Jitter</strong> <code>double</code></summary>

Randomness of feature point positions.
- 0 = Regular grid
- 1 = Maximum randomness

Range: 0–1

Default: `1.0`

⚡ PCG Overridable

</details>

---

## Behavior Notes

- F1 creates rounded cell interiors
- F2 - F1 highlights cell edges (useful for cracks, veins)
- Manhattan/Chebyshev distances create geometric cell shapes
- Combines well with FBM for complex patterns

---

📦 **Module**: `PCGExNoise3D` · 📄 [Source](https://github.com/Nebukam/PCGExtendedToolkit/blob/dev/Source/PCGExNoise3D/Public/Noises/PCGExNoiseWorley.h)
