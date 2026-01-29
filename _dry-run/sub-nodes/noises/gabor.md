---
description: 'In editor :: PCGEx | Noise : Noise : Gabor'
---

# Gabor

**Anisotropic noise** with a controllable direction. Creates directional patterns like brushed metal, fabric weave, or wood grain.

```
Direction →

  ═══════════════
  ═══════════════    Aligned streaks
  ═══════════════    in specified direction
  ═══════════════
```

---

## Settings

<details>
<summary><strong>Direction</strong> <code>FVector</code></summary>

Direction of the Gabor kernel (will be normalized). The noise pattern aligns with this direction.

Default: `(1, 0, 0)`

⚡ PCG Overridable

</details>

<details>
<summary><strong>Bandwidth</strong> <code>double</code></summary>

Controls how directional the noise is. Lower = more strongly directional.

Range: 0.1–10.0

Default: `1.0`

⚡ PCG Overridable

</details>

<details>
<summary><strong>Impulses Per Cell</strong> <code>int32</code></summary>

Number of Gabor impulses per cell. More = smoother but slower.

Range: 1–32

Default: `8`

⚡ PCG Overridable

</details>

<details>
<summary><strong>Kernel Radius</strong> <code>double</code></summary>

Radius of each Gabor kernel. Affects feature size.

Range: 0.5–4.0

Default: `1.5`

⚡ PCG Overridable

</details>

---

## Behavior Notes

- Based on Gabor wavelets (sine waves modulated by Gaussian envelope)
- Low bandwidth creates strong directionality
- High impulse count improves quality but costs more
- Good for creating scratches, brushed surfaces, aligned patterns

---

📦 **Module**: `PCGExNoise3D` · 📄 [Source](https://github.com/Nebukam/PCGExtendedToolkit/blob/dev/Source/PCGExNoise3D/Public/Noises/PCGExNoiseGabor.h)
