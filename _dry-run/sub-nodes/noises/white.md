---
description: 'In editor :: PCGEx | Noise : Noise : White'
---

# White

**Pure random noise** with no spatial correlation. Each position returns an independent random value.

---

## Settings

This noise uses only the [shared settings](README.md#shared-settings).

---

## Behavior Notes

- No spatial coherence (neighboring points are uncorrelated)
- Useful for pure randomization
- Frequency has no effect (every point is independent)
- Very fast to compute

---

📦 **Module**: `PCGExNoise3D` · 📄 [Source](https://github.com/Nebukam/PCGExtendedToolkit/blob/dev/Source/PCGExNoise3D/Public/Noises/PCGExNoiseWhite.h)
