---
description: 'In editor :: PCGEx | Noise : Noise : Curl'
---

# Curl

**Divergence-free vector field** noise. Outputs a 3D direction that naturally flows around obstacles without sources or sinks.

```
    ↗ → ↘
   ↑     ↓    Curl creates rotational flow
    ↖ ← ↙    with no convergence/divergence
```

---

## Settings

<details>
<summary><strong>Octaves</strong> <code>int32</code></summary>

Number of noise layers for the underlying field.

Range: 1–8

Default: `1`

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
<summary><strong>Epsilon</strong> <code>double</code></summary>

Step size for derivative computation. Smaller = more accurate but slower.

Range: 0.0001–0.1

Default: `0.001`

⚡ PCG Overridable

</details>

<details>
<summary><strong>Curl Scale</strong> <code>double</code></summary>

Magnitude scaling for the curl vectors.

Range: 0.1–10.0

Default: `1.0`

⚡ PCG Overridable

</details>

---

## Behavior Notes

- Outputs a **vector** (3D direction), not a scalar
- Divergence-free (∇·F = 0) — no sources or sinks
- Particles following this field will swirl without bunching
- Scalar output (GetDouble) returns the curl magnitude

---

📦 **Module**: `PCGExNoise3D` · 📄 [Source](https://github.com/Nebukam/PCGExtendedToolkit/blob/dev/Source/PCGExNoise3D/Public/Noises/PCGExNoiseCurl.h)
