---
description: 'In editor :: PCGEx | Noise : Noise : Simplex'
---

# Simplex

**Improved gradient noise** that's more computationally efficient than Perlin, with fewer directional artifacts.

---

## Settings

This noise uses only the [shared settings](README.md#shared-settings).

---

## Behavior Notes

- Ken Perlin's improved noise algorithm
- Uses simplex grid (tetrahedra) instead of cubic grid
- Fewer directional artifacts than classic Perlin
- Better performance in higher dimensions

---

📦 **Module**: `PCGExNoise3D` · 📄 [Source](https://github.com/Nebukam/PCGExtendedToolkit/blob/dev/Source/PCGExNoise3D/Public/Noises/PCGExNoiseSimplex.h)
