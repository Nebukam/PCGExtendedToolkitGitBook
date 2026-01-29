---
description: 'In editor :: PCGEx | Tensor : Noise (Bounded)'
---

# Noise (Bounded)

**A tensor that uses 3D noise as direction, but only within effector bounds.**

Combines the organic patterns of noise-based direction with the spatial control of point-based effectors.

---

## How It Works

```
Input Points define influence regions

     Point A              Point B
        ●                    ●
     /     \              /     \
    | noise |            | noise |
     \     /              \     /

Noise is only sampled within effector bounds
Outside = zero influence
```

---

## Inputs

| Pin | Description |
|-----|-------------|
| **Effectors** | Points defining influence regions |
| **Noise** | 3D noise definition(s) to sample for direction |
| **Noise Mask** | (Optional) Additional noise to modulate the result |

---

## Settings

<details>
<summary><strong>Normalize Noise Sampling</strong> <code>bool</code></summary>

When enabled, the sampled noise direction is normalized to unit length.

Default: `true`

⚡ PCG Overridable

</details>

---

## Example Use Cases

### Localized Turbulence
Create chaotic regions in specific areas:
- Place effector points where turbulence should occur
- Outside those regions, other tensors dominate

### Weather Zones
Define areas with different wind patterns:
- Different noise seeds per region
- Clear boundaries between weather patterns

### Magical Effects
Create swirling chaos in defined volumes:
- Bounded noise for magical storm effects
- Calm areas outside the effect radius

---

{% hint style="info" %}
**Effector Bounds**: The influence region of each effector is determined by the point's bounds/scale. Larger points create larger regions of noise influence.
{% endhint %}

---

📦 **Module**: `PCGExElementsTensors` · 📄 [Source](https://github.com/Nebukam/PCGExtendedToolkit/blob/dev/Source/PCGExElementsTensors/Public/Tensors/PCGExTensorNoiseBounded.h)
