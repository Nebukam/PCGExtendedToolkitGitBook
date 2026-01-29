---
description: 'In editor :: PCGEx | Noise : Noise : Value'
---

# Value

**Fast interpolated noise** based on random values at grid points. Slightly blockier than gradient noise but faster to compute.

---

## Settings

This noise uses only the [shared settings](README.md#shared-settings).

---

## Behavior Notes

- Random values at grid points, smoothly interpolated
- Faster than gradient noise
- May show grid-aligned artifacts at low frequencies
- Good for performance-critical applications

---

📦 **Module**: `PCGExNoise3D` · 📄 [Source](https://github.com/Nebukam/PCGExtendedToolkit/blob/dev/Source/PCGExNoise3D/Public/Noises/PCGExNoiseValue.h)
