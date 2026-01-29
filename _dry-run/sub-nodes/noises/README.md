---
description: Generate procedural noise values in 3D space
icon: wave-square
---

# Noises

Noises generate **procedural values** based on 3D position. Multiple noise sources can be combined with blend modes and weights to create complex patterns.

📌 **Sub-node** — Connects to **Noise** pins.

```
Position (x,y,z) ───► Noise Function ───► Value (0-1)

Multiple noises combine:
  Perlin ──────┐
               ├─► Blend ──► Final Value
  Voronoi ─────┘
```

---

## How It Works

Each noise sub-node computes a value based on a 3D input position. When multiple noises connect to the same pin, they combine according to their **Blend Mode** and **Weight Factor**.

**Output Types:**
- **Scalar** (double) — Single value per position
- **Vector2D** — 2-component value (some noises)
- **Vector** — 3-component value (e.g., Curl noise)
- **Vector4** — 4-component value (specialized)

---

## Blend Modes

When multiple noises connect, they combine using blend modes:

| Mode | Formula | Description |
|------|---------|-------------|
| **Blend** | Weighted average | Standard mixing based on weights |
| **Add** | `a + b` | Additive (clamped to 0–1) |
| **Multiply** | `a × b` | Darkens result |
| **Min** | `min(a, b)` | Takes minimum value |
| **Max** | `max(a, b)` | Takes maximum value |
| **Subtract** | `a - b` | Subtracts subsequent from first |
| **Screen** | `1 - (1-a)(1-b)` | Lightens result |
| **Overlay** | Photoshop-style | Combines multiply and screen |
| **Soft Light** | Gentle contrast | Subtle lighting effect |
| **First Valid** | First non-zero | Takes first non-zero value |

---

## Shared Settings

All noise types inherit these base settings:

### Weighting

<details>
<summary><strong>Weight Factor</strong> <code>double</code></summary>

Relative importance when combining multiple noises.

Default: `1`

⚡ PCG Overridable

</details>

<details>
<summary><strong>Blend Mode</strong> <code>EPCGExNoiseBlendMode</code></summary>

How this noise combines with others. See [Blend Modes](#blend-modes) above.

Default: `Blend`

⚡ PCG Overridable

</details>

<details>
<summary><strong>Invert</strong> <code>bool</code></summary>

Invert the noise output (1 - value).

Default: `false`

⚡ PCG Overridable

</details>

<details>
<summary><strong>Remap Curve</strong> <code>RuntimeFloatCurve</code></summary>

Remaps the noise output through a curve for non-linear response.

Default: Linear (0,0) → (1,1)

</details>

### Core Settings

<details>
<summary><strong>Seed</strong> <code>int32</code></summary>

Randomization seed for reproducible results.

Default: `1337`

⚡ PCG Overridable

</details>

<details>
<summary><strong>Apply Transform</strong> <code>bool</code></summary>

When enabled, applies a transform to input positions before sampling.

Default: `false`

⚡ PCG Overridable

</details>

<details>
<summary><strong>Transform</strong> <code>FTransform</code></summary>

Transform applied to input positions (translation, rotation, scale).

*Visible when Apply Transform = true*

⚡ PCG Overridable

</details>

<details>
<summary><strong>Frequency</strong> <code>double</code></summary>

Noise frequency/scale. Lower = larger features, higher = finer detail.

Range: > 0

Default: `0.01`

⚡ PCG Overridable

</details>

### Contrast

<details>
<summary><strong>Contrast</strong> <code>double</code></summary>

Contrast adjustment. 1.0 = no change, >1 = more contrast, <1 = less.

Default: `1.0`

⚡ PCG Overridable

</details>

<details>
<summary><strong>Contrast Curve</strong> <code>EPCGExContrastCurve</code></summary>

Curve type for contrast adjustment.

| Value | Behavior |
|-------|----------|
| **Power** | Simple power curve |
| **S-Curve** | Smooth sigmoid (never clips) |
| **Gain** | Subtle S-curve, symmetrical |

Default: `Power`

*Visible when Contrast ≠ 1.0*

⚡ PCG Overridable

</details>

### Advanced

<details>
<summary><strong>Priority</strong> <code>int32</code></summary>

Evaluation order when blending multiple noises. Lower = evaluated first.

Default: `0`

⚡ PCG Overridable

</details>

---

## Noise Categories

### Gradient Noises
Smooth, continuous noise with natural-looking patterns.

| Noise | Description |
|-------|-------------|
| [Perlin](perlin.md) | Classic gradient noise |
| [Simplex](simplex.md) | More efficient than Perlin |
| [OpenSimplex2](opensimplex2.md) | Patent-free, high quality |

### Value Noises
Fast noise based on interpolated random values.

| Noise | Description |
|-------|-------------|
| [Value](value.md) | Interpolated random values |
| [White](white.md) | Pure random, no spatial correlation |

### Cellular Noises
Cell-based patterns with distinct boundaries.

| Noise | Description |
|-------|-------------|
| [Voronoi](voronoi.md) | Distance-based cell patterns |
| [Worley](worley.md) | Cellular/F1/F2 noise |
| [Spots](spots.md) | Shaped spot patterns |

### Fractal Noises
Multi-octave noise for complex detail.

| Noise | Description |
|-------|-------------|
| [FBM](fbm.md) | Fractal Brownian Motion (5 variants) |
| [Swiss](swiss.md) | Derivative-based erosion patterns |
| [Tiling](tiling.md) | Seamlessly tileable noise |

### Specialized Noises
Purpose-built for specific effects.

| Noise | Description |
|-------|-------------|
| [Curl](curl.md) | Divergence-free vector field |
| [Flow](flow.md) | Time-coherent animated noise |
| [Caustic](caustic.md) | Water light patterns |
| [Marble](marble.md) | Veined/marble patterns |
| [Gabor](gabor.md) | Anisotropic/directional noise |

---

## Consuming Nodes

Noises are used by nodes with **Noise** input pins:

- **Uber Noise** — Apply noise to point attributes
- **Tensor : Noise** — Noise-driven tensor fields
- **Filter : Noise** — Filter points by noise threshold

---

📦 **Module**: `PCGExNoise3D` · 📄 [Source](https://github.com/Nebukam/PCGExtendedToolkit/tree/dev/Source/PCGExNoise3D)
