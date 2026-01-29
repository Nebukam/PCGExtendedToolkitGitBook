---
description: 'In editor :: PCGEx | Noise : Noise : Flow'
---

# Flow

**Time-coherent animated noise** where gradients rotate smoothly over time instead of changing randomly.

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
<summary><strong>Time</strong> <code>double</code></summary>

Animation time parameter. Varying this creates smooth temporal animation.

Default: `0.0`

⚡ PCG Overridable

</details>

<details>
<summary><strong>Rotation Speed</strong> <code>double</code></summary>

How fast the gradients rotate over time.

Range: 0.0–10.0

Default: `1.0`

⚡ PCG Overridable

</details>

---

## Behavior Notes

- Unlike standard noise where changing seed creates discontinuities, Flow noise morphs smoothly as Time changes
- Each cell has a unique rotation rate based on its hash
- Useful for creating looping animations by cycling Time from 0 to 1

---

📦 **Module**: `PCGExNoise3D` · 📄 [Source](https://github.com/Nebukam/PCGExtendedToolkit/blob/dev/Source/PCGExNoise3D/Public/Noises/PCGExNoiseFlow.h)
