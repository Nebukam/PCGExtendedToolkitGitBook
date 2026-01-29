---
description: 'In editor :: PCGEx | Noise : Noise : Perlin'
---

# Perlin

Classic **gradient noise** algorithm. Produces smooth, natural-looking patterns widely used in procedural generation.

```
         ░░▒▒▓▓██▓▓▒▒░░
       ░░▒▒▓▓████▓▓▒▒░░
         ▒▒▓▓██▓▓▒▒
           ▓▓▓▓▓▓
```

---

## Settings

This noise uses only the [shared settings](README.md#shared-settings).

---

## Behavior Notes

- Original Ken Perlin algorithm
- Smooth interpolation between gradient vectors
- Good general-purpose noise for terrain, textures, displacement

---

📦 **Module**: `PCGExNoise3D` · 📄 [Source](https://github.com/Nebukam/PCGExtendedToolkit/blob/dev/Source/PCGExNoise3D/Public/Noises/PCGExNoisePerlin.h)
