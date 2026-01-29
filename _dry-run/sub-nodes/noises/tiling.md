---
description: 'In editor :: PCGEx | Noise : Noise : Tiling'
---

# Tiling

**Seamlessly tileable noise** with configurable period in each axis.

```
┌─────┬─────┐     Tiles seamlessly:
│ ░▒▓ │ ░▒▓ │     Left edge matches right
│ ▓░▒ │ ▓░▒ │     Top edge matches bottom
└─────┴─────┘
```

---

## Settings

<details>
<summary><strong>Octaves</strong> <code>int32</code></summary>

Number of noise layers.

Range: 1–16

Default: `1`

⚡ PCG Overridable

</details>

<details>
<summary><strong>Lacunarity</strong> <code>double</code></summary>

Frequency multiplier between octaves.

Range: 1.0–4.0

Default: `2.0`

⚡ PCG Overridable

</details>

<details>
<summary><strong>Persistence</strong> <code>double</code></summary>

Amplitude multiplier between octaves.

Range: 0.0–1.0

Default: `0.5`

⚡ PCG Overridable

</details>

<details>
<summary><strong>Period X</strong> <code>int32</code></summary>

Tile period on the X axis (in noise units).

Range: 1–256

Default: `4`

⚡ PCG Overridable

</details>

<details>
<summary><strong>Period Y</strong> <code>int32</code></summary>

Tile period on the Y axis (in noise units).

Range: 1–256

Default: `4`

⚡ PCG Overridable

</details>

<details>
<summary><strong>Period Z</strong> <code>int32</code></summary>

Tile period on the Z axis (in noise units).

Range: 1–256

Default: `4`

⚡ PCG Overridable

</details>

---

## Behavior Notes

- Perfect seamless tiling at period boundaries
- Period is in noise coordinate space (affected by Frequency)
- Higher period = larger unique area before repetition
- Useful for repeating patterns and tileable textures

---

📦 **Module**: `PCGExNoise3D` · 📄 [Source](https://github.com/Nebukam/PCGExtendedToolkit/blob/dev/Source/PCGExNoise3D/Public/Noises/PCGExNoiseTiling.h)
