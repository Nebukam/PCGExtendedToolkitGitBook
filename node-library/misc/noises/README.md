---
icon: grid-round-2
---

# Noises

Creates a single Noise3D computational node, to be used with nodes that support it.

📌 **Subnode** — Connects to **Noise** pins.

**How It Works**

> AI-Generated, needs proofreading

* Computes a three-dimensional noise pattern based on input coordinates.
* Applies a weight factor to the computed noise value for blending purposes when combined with other noise sources.
* Utilizes the specified blend mode to integrate this Noise3D node's output with outputs from other noise nodes if they are stacked together.
* Inverts the noise output if the "Invert" option is enabled, effectively flipping the range of values produced by the noise function.
* Remaps the noise value using a predefined curve (Remap Curve) and its corresponding lookup details (Remap Curve Lookup), altering the distribution or intensity of the noise pattern.

#### Configuration

<details>

<summary><strong>Seed</strong> <code>int32</code></summary>

Controls seed.

⚡ PCG Overridable

</details>

<details>

<summary><strong>Apply Transform</strong> <code>bool</code></summary>

Controls apply transform.

⚡ PCG Overridable

</details>

<details>

<summary><strong>Transform</strong> <code>Transform</code></summary>

Controls transform.

⚡ PCG Overridable

</details>

<details>

<summary><strong>Frequency</strong> <code>double</code></summary>

Controls frequency.

_Range: min: 0.000001_

⚡ PCG Overridable

</details>

<details>

<summary><strong>Priority</strong> <code>int32</code></summary>

Noise priority, matters for blending and weighting.

⚡ PCG Overridable

</details>

**Constrast**

<details>

<summary><strong>Contrast</strong> <code>double</code></summary>

Contrast adjustment (1.0 = no change, >1 = more contrast, <1 = less)

⚡ PCG Overridable

</details>

<details>

<summary><strong>Contrast Curve</strong> <code>PCGExContrastCurve</code></summary>

Contrast curve type

⚡ PCG Overridable

</details>

**Weighting**

<details>

<summary><strong>Weight Factor</strong> <code>double</code></summary>

The weight factor for this Noise3D (used when combining multiple noise sources).

⚡ PCG Overridable

</details>

<details>

<summary><strong>Blend Mode</strong> <code>PCGExNoiseBlendMode</code></summary>

Blend mode when stacked against other noises

⚡ PCG Overridable

</details>

<details>

<summary><strong>Invert</strong> <code>bool</code></summary>

Invert the noise output.

⚡ PCG Overridable

</details>

<details>

<summary><strong>Remap Curve</strong> <code>RuntimeFloatCurve</code></summary>

Curve the value will be remapped over.

</details>

<details>

<summary><strong>Remap Curve Lookup</strong> <code>PCGExCurveLookupDetails</code></summary>

Controls remap curve lookup.

📦 See: CurveLookup configuration

</details>

***

Source: `Source\PCGExNoise3D\Public\Core\PCGExNoise3DFactoryProvider.h`
