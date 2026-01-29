---
description: 'In editor :: PCGEx | Noise : Noise : Swiss (Erosion)'
---

# Swiss (Erosion)

**Derivative-based erosion noise** that creates natural terrain-like patterns with erosion channels.

---

## Settings

<details>
<summary><strong>Octaves</strong> <code>int32</code></summary>

Number of noise layers.

Range: 1–16

Default: `6`

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
<summary><strong>Erosion Strength</strong> <code>double</code></summary>

How much derivatives affect the erosion pattern.
- 0 = Standard fBm
- Higher = More pronounced erosion channels

Range: 0.0–2.0

Default: `0.8`

⚡ PCG Overridable

</details>

<details>
<summary><strong>Warp Factor</strong> <code>double</code></summary>

Domain warping factor based on derivatives.

Range: 0.0–1.0

Default: `0.15`

⚡ PCG Overridable

</details>

---

## Behavior Notes

- Uses analytical derivatives for erosion simulation
- Higher octaves produce more detailed erosion channels
- At Erosion Strength = 0, behaves like standard fBm
- Creates natural ridge and valley patterns

---

📦 **Module**: `PCGExNoise3D` · 📄 [Source](https://github.com/Nebukam/PCGExtendedToolkit/blob/dev/Source/PCGExNoise3D/Public/Noises/PCGExNoiseSwiss.h)
