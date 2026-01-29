---
description: 'In editor :: PCGEx | Noise : Noise : Caustic'
---

# Caustic

**Water light patterns** that simulate the bright focal points created when light refracts through a wavy water surface.

```
    ·    ★  ·      ·  ★
  ·   ★     ·  ★      ·
    ·    ·   ★   ·  ★
  ★   ·  ★     ·       ★
```

---

## Settings

<details>
<summary><strong>Wave Layers</strong> <code>int32</code></summary>

Number of overlapping wave patterns.

Range: 1–8

Default: `3`

⚡ PCG Overridable

</details>

<details>
<summary><strong>Wavelength</strong> <code>double</code></summary>

Base wavelength of the wave pattern.

Range: 0.1–10.0

Default: `1.0`

⚡ PCG Overridable

</details>

<details>
<summary><strong>Time</strong> <code>double</code></summary>

Animation time parameter (0 for static pattern).

Default: `0.0`

⚡ PCG Overridable

</details>

<details>
<summary><strong>Animation Speed</strong> <code>double</code></summary>

Speed of the wave animation.

Range: 0.0–5.0

Default: `1.0`

⚡ PCG Overridable

</details>

<details>
<summary><strong>Intensity</strong> <code>double</code></summary>

Brightness of the focal points (caustic concentration).

Range: 0.5–4.0

Default: `2.0`

⚡ PCG Overridable

</details>

<details>
<summary><strong>Focus</strong> <code>double</code></summary>

Sharpness of focal points. Higher = brighter, sharper caustics.

Range: 1.0–8.0

Default: `2.0`

⚡ PCG Overridable

</details>

---

## Behavior Notes

- Multiple wave layers create complex interference patterns
- Animatable via the Time parameter
- Higher Focus creates more concentrated bright spots
- Useful for underwater effects, magical glows, sci-fi patterns

---

📦 **Module**: `PCGExNoise3D` · 📄 [Source](https://github.com/Nebukam/PCGExtendedToolkit/blob/dev/Source/PCGExNoise3D/Public/Noises/PCGExNoiseCaustic.h)
