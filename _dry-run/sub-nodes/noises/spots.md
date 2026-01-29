---
description: 'In editor :: PCGEx | Noise : Noise : Spots'
---

# Spots

**Shaped spot patterns** with configurable shapes, sizes, and distributions. Creates regular or randomized dot patterns.

```
  ●   ○   ●      ◆   ◇   ◆
    ○   ●   ○      ◇   ◆   ◇
  ●   ○   ●      ◆   ◇   ◆

  Circle       Diamond
```

---

## Settings

<details>
<summary><strong>Shape</strong> <code>EPCGExSpotsShape</code></summary>

Shape of the spots.

| Value | Description |
|-------|-------------|
| **Circle (Hard)** | Sharp-edged circles |
| **Circle (Soft Falloff)** | Soft gradient circles |
| **Square** | Square spots |
| **Diamond** | Diamond-shaped spots |
| **Star** | Star-shaped spots |

Default: `Circle (Soft Falloff)`

⚡ PCG Overridable

</details>

<details>
<summary><strong>Spot Radius</strong> <code>double</code></summary>

Base radius of spots relative to cell size.

Range: 0.1–0.8

Default: `0.4`

⚡ PCG Overridable

</details>

<details>
<summary><strong>Radius Variation</strong> <code>double</code></summary>

Random variation in spot radius.

Range: 0.0–0.5

Default: `0.1`

⚡ PCG Overridable

</details>

<details>
<summary><strong>Jitter</strong> <code>double</code></summary>

Randomness of spot positions within cells.

Range: 0.0–0.5

Default: `0.3`

⚡ PCG Overridable

</details>

<details>
<summary><strong>Invert Spots</strong> <code>bool</code></summary>

Invert the pattern (holes instead of dots).

Default: `false`

⚡ PCG Overridable

</details>

<details>
<summary><strong>Value Variation</strong> <code>double</code></summary>

Random value variation per spot (different brightness per spot).

Range: 0.0–1.0

Default: `0.0`

⚡ PCG Overridable

</details>

---

## Behavior Notes

- Spots are placed in a grid with optional jitter
- Soft Circle creates smooth gradients within spots
- Use Invert for hole patterns
- Value Variation gives each spot a unique brightness

---

📦 **Module**: `PCGExNoise3D` · 📄 [Source](https://github.com/Nebukam/PCGExtendedToolkit/blob/dev/Source/PCGExNoise3D/Public/Noises/PCGExNoiseSpots.h)
