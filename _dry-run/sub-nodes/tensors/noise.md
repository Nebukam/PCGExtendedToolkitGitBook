---
description: 'In editor :: PCGEx | Tensor : Noise'
---

# Noise

**A tensor that uses 3D noise to generate direction fields.**

The noise input (from the Noise pin) is sampled at each position to produce a direction vector, creating organic, flowing patterns.

---

## How It Works

```
Noise-based tensor field

  ↗  →  ↘  →  ↗
  ↑  ↗  ↓  ↘  ↑
  →  ↑  ↗  ↓  →
  ↘  →  ↑  ↗  ↘

Direction varies smoothly based on 3D noise
```

---

## Inputs

| Pin | Description |
|-----|-------------|
| **Noise** | 3D noise definition(s) to sample for direction |
| **Noise Mask** | (Optional) Additional noise to modulate the result |

---

## Settings

<details>
<summary><strong>Normalize Noise Sampling</strong> <code>bool</code></summary>

When enabled, the sampled noise direction is normalized to unit length.

- **true** = consistent direction magnitude
- **false** = direction magnitude varies with noise amplitude

Default: `true`

⚡ PCG Overridable

</details>

<details>
<summary><strong>Tensor Weight</strong> <code>double</code></summary>

Weight multiplier for this tensor.

Default: `1.0`

⚡ PCG Overridable

</details>

<details>
<summary><strong>Potency</strong> <code>double</code></summary>

Strength/magnitude of the tensor.

Default: `1.0`

⚡ PCG Overridable

</details>

---

## Example Use Cases

### Organic Flow Fields
Create natural-looking movement patterns:
- Perlin or Simplex noise for smooth variations
- Paths meander organically

### Turbulence
Add chaotic variation to paths:
- Higher frequency noise
- Combine with other tensors for controlled chaos

### Wind Simulation
Varying wind direction across terrain:
- Noise provides spatial variation
- Combine with constant for prevailing direction

---

{% hint style="info" %}
**Global Coverage**: Unlike bounded tensors, Noise provides direction everywhere in space. This makes it useful as a base layer that other point-based tensors modify locally.
{% endhint %}

---

📦 **Module**: `PCGExElementsTensors` · 📄 [Source](https://github.com/Nebukam/PCGExtendedToolkit/blob/dev/Source/PCGExElementsTensors/Public/Tensors/PCGExTensorNoise.h)
