---
description: 'In editor :: PCGEx | Noise : Noise : Marble'
---

# Marble

**Veined patterns** using sine waves distorted by turbulent noise. Creates marble, wood grain, and geological textures.

```
  ║  ║   ║   ║  ║
  ║   ║ ║   ║  ║
   ║  ║  ║  ║ ║
  ║  ║   ║   ║  ║
```

---

## Settings

<details>
<summary><strong>Direction</strong> <code>EPCGExMarbleDirection</code></summary>

Primary direction of the veins.

| Value | Description |
|-------|-------------|
| **X Axis** | Veins run along X |
| **Y Axis** | Veins run along Y |
| **Z Axis** | Veins run along Z |
| **Radial** | Concentric ring pattern |

Default: `X Axis`

⚡ PCG Overridable

</details>

<details>
<summary><strong>Vein Frequency</strong> <code>double</code></summary>

Frequency of the sine wave creating veins. Higher = more veins.

Range: 0.1–20.0

Default: `5.0`

⚡ PCG Overridable

</details>

<details>
<summary><strong>Turbulence Strength</strong> <code>double</code></summary>

How much the veins are distorted by noise.

Range: 0.0–5.0

Default: `1.0`

⚡ PCG Overridable

</details>

<details>
<summary><strong>Turbulence Octaves</strong> <code>int32</code></summary>

Number of noise octaves for turbulence detail.

Range: 1–8

Default: `4`

⚡ PCG Overridable

</details>

<details>
<summary><strong>Vein Sharpness</strong> <code>double</code></summary>

Sharpness of vein edges. 1 = soft, higher = sharper.

Range: 1.0–8.0

Default: `1.0`

⚡ PCG Overridable

</details>

---

## Behavior Notes

- Combines sine waves with fBm turbulence for natural-looking veins
- Radial mode creates concentric patterns (tree rings, agate)
- Higher turbulence strength = more organic, less regular patterns
- Vein sharpness controls whether veins are soft gradients or hard lines

---

📦 **Module**: `PCGExNoise3D` · 📄 [Source](https://github.com/Nebukam/PCGExtendedToolkit/blob/dev/Source/PCGExNoise3D/Public/Noises/PCGExNoiseMarble.h)
