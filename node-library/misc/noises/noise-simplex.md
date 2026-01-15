---
icon: circle-dashed
---

# Noise : Simplex

Simplex gradient noise - efficient, high quality.

📌 **Subnode** — Connects to **Noise** pins.

**How It Works**

> AI-Generated, needs proofreading

* Computes simplex gradient noise using a specified number of fractal octaves to layer noise for complexity.
* Adjusts frequency by multiplying each successive octave with a defined lacunarity value.
* Modulates amplitude of each octave by a persistence factor to control the influence of higher-frequency layers.
* Utilizes PCGExNoiseConfigSimplex configuration settings to tailor the noise generation process.

#### Configuration

<details>

<summary><strong>Octaves</strong> <code>int32</code></summary>

Number of fractal octaves

_Range: min: 1, max: 16_

⚡ PCG Overridable

</details>

<details>

<summary><strong>Lacunarity</strong> <code>double</code></summary>

Frequency multiplier per octave

_Range: min: 1.0, max: 4.0_

⚡ PCG Overridable

</details>

<details>

<summary><strong>Persistence</strong> <code>double</code></summary>

Amplitude multiplier per octave

_Range: min: 0.0, max: 1.0_

⚡ PCG Overridable

</details>

<details>

<summary><strong>Config</strong> <code>PCGExNoiseConfigSimplex</code></summary>

Controls config.

📦 See: NoiseConfigSimplex configuration

⚡ PCG Overridable

</details>

<details>

<summary><strong>Octaves</strong> <code>int32</code></summary>

Number of fractal octaves

_Range: min: 1, max: 16_

⚡ PCG Overridable

</details>

<details>

<summary><strong>Lacunarity</strong> <code>double</code></summary>

Frequency multiplier per octave

_Range: min: 1.0, max: 4.0_

⚡ PCG Overridable

</details>

<details>

<summary><strong>Persistence</strong> <code>double</code></summary>

Amplitude multiplier per octave

_Range: min: 0.0, max: 1.0_

⚡ PCG Overridable

</details>

***

Source: `Source\PCGExNoise3D\Public\Noises\PCGExNoiseSimplex.h`
