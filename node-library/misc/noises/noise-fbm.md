---
icon: circle-dashed
---

# Noise : FBM

Fractal Brownian Motion with variants (ridged, billow, warped).

📌 **Subnode** — Connects to **Noise** pins.

**How It Works**

> AI-Generated, needs proofreading

* The Noise : FBM node generates noise using Fractal Brownian Motion (FBM) algorithm, which combines multiple layers of noise at different frequencies and amplitudes to create complex patterns.
* It uses the specified number of `Octaves` to determine how many layers of noise are combined. Each octave has a frequency defined by multiplying the previous layer's frequency by `Lacunarity`.
* The amplitude of each successive octave is reduced by a factor of `Persistence`, contributing less to the overall noise value, which controls the roughness or smoothness of the generated pattern.
* Depending on the selected `Variant` (such as ridged or billow), the node applies specific transformations to the base FBM noise. For instance, with the ridged variant, it uses a ridge function that inverts and scales the noise based on `Ridge Offset`.
* The output is a noise texture influenced by these parameters, providing variations like more pronounced peaks (ridged) or smoother transitions (billow), without altering the fundamental process of combining multiple octaves.

#### Configuration

<details>

<summary><strong>Octaves</strong> <code>int32</code></summary>

Controls octaves.

_Range: min: 1, max: 16_

⚡ PCG Overridable

</details>

<details>

<summary><strong>Lacunarity</strong> <code>double</code></summary>

Controls lacunarity.

_Range: min: 1.0, max: 4.0_

⚡ PCG Overridable

</details>

<details>

<summary><strong>Persistence</strong> <code>double</code></summary>

Controls persistence.

_Range: min: 0.0, max: 1.0_

⚡ PCG Overridable

</details>

<details>

<summary><strong>Variant</strong> <code>PCGExFBMVariant</code></summary>

FBM variant

**Values:**

* **Standard fBm**
* **Ridged Multifractal**
* **Billow**
* **Hybrid Multifractal**
* **Domain Warped**

⚡ PCG Overridable

</details>

<details>

<summary><strong>Ridge Offset</strong> <code>double</code></summary>

Ridge offset for ridged variant

_Range: min: 0.0, max: 2.0_

⚡ PCG Overridable

</details>

<details>

<summary><strong>Warp Strength</strong> <code>double</code></summary>

Warp strength for warped variant

_Range: min: 0.0, max: 2.0_

⚡ PCG Overridable

</details>

<details>

<summary><strong>Config</strong> <code>PCGExNoiseConfigFBM</code></summary>

Controls config.

📦 See: NoiseConfigFBM configuration

⚡ PCG Overridable

</details>

<details>

<summary><strong>Octaves</strong> <code>int32</code></summary>

Controls octaves.

_Range: min: 1, max: 16_

⚡ PCG Overridable

</details>

<details>

<summary><strong>Lacunarity</strong> <code>double</code></summary>

Controls lacunarity.

_Range: min: 1.0, max: 4.0_

⚡ PCG Overridable

</details>

<details>

<summary><strong>Persistence</strong> <code>double</code></summary>

Controls persistence.

_Range: min: 0.0, max: 1.0_

⚡ PCG Overridable

</details>

<details>

<summary><strong>Variant</strong> <code>PCGExFBMVariant</code></summary>

FBM variant

**Values:**

* **Standard fBm**
* **Ridged Multifractal**
* **Billow**
* **Hybrid Multifractal**
* **Domain Warped**

⚡ PCG Overridable

</details>

<details>

<summary><strong>Ridge Offset</strong> <code>double</code></summary>

Ridge offset for ridged variant

_Range: min: 0.0, max: 2.0_

⚡ PCG Overridable

</details>

<details>

<summary><strong>Warp Strength</strong> <code>double</code></summary>

Warp strength for warped variant

_Range: min: 0.0, max: 2.0_

⚡ PCG Overridable

</details>

***

Source: `Source\PCGExNoise3D\Public\Noises\PCGExNoiseFBM.h`
