---
description: 'In editor :: PCGEx | Noise : Noise : FBM'
---

# FBM

**Fractal Brownian Motion** — layered noise with multiple octaves for natural-looking detail at multiple scales. Includes 5 variants for different effects.

```
Octave 1:  ░░▓▓░░▓▓░░      (low frequency, high amplitude)
Octave 2:  ░▒░▒░▒░▒░▒      (higher frequency, lower amplitude)
Octave 3:  ▒▒▒▒▒▒▒▒▒▒      (even higher frequency, even lower)
           ──────────
Combined:  Natural detail at multiple scales
```

---

## Settings

<details>
<summary><strong>Octaves</strong> <code>int32</code></summary>

Number of noise layers to combine. More octaves = more fine detail.

Range: 1–16

Default: `4`

⚡ PCG Overridable

</details>

<details>
<summary><strong>Lacunarity</strong> <code>double</code></summary>

Frequency multiplier between octaves. Higher = more frequency increase per octave.

Range: 1.0–4.0

Default: `2.0`

⚡ PCG Overridable

</details>

<details>
<summary><strong>Persistence</strong> <code>double</code></summary>

Amplitude multiplier between octaves. Lower = higher octaves contribute less.

Range: 0.0–1.0

Default: `0.5`

⚡ PCG Overridable

</details>

<details>
<summary><strong>Variant</strong> <code>EPCGExFBMVariant</code></summary>

FBM algorithm variant.

| Value | Description |
|-------|-------------|
| **Standard** | Classic fBm (smooth, natural) |
| **Ridged** | Sharp ridges (mountains, veins) |
| **Billow** | Puffy, cloud-like (abs of noise) |
| **Hybrid** | Combines ridged and standard |
| **Warped** | Domain-warped (swirling patterns) |

Default: `Standard`

⚡ PCG Overridable

</details>

<details>
<summary><strong>Ridge Offset</strong> <code>double</code></summary>

Offset for ridged variant. Controls ridge sharpness.

Range: 0.0–2.0

Default: `1.0`

*Visible when Variant = Ridged*

⚡ PCG Overridable

</details>

<details>
<summary><strong>Warp Strength</strong> <code>double</code></summary>

Warp intensity for warped variant.

Range: 0.0–2.0

Default: `0.5`

*Visible when Variant = Warped*

⚡ PCG Overridable

</details>

---

## Behavior Notes

- Standard fBm is the most common choice for terrain, clouds, textures
- Ridged variant creates sharp mountain-like features
- Billow is good for clouds and soft organic shapes
- Warped creates swirling, flowing patterns
- More octaves = more detail but slower computation

---

📦 **Module**: `PCGExNoise3D` · 📄 [Source](https://github.com/Nebukam/PCGExtendedToolkit/blob/dev/Source/PCGExNoise3D/Public/Noises/PCGExNoiseFBM.h)
