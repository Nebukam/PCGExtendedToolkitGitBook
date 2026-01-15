---
icon: circle-dashed
---

# Noise : Perlin

Classic Perlin gradient noise.

📌 **Subnode** — Connects to **Noise** pins.

**How It Works**

> AI-Generated, needs proofreading

* The Noise : Perlin node generates classic Perlin gradient noise based on input coordinates.
* It uses an integer value for Octaves to determine the number of noise layers that contribute to the final output.
* A double value for Lacunarity specifies the frequency increase between successive octaves, affecting the scale at which each layer contributes.
* The Persistence setting, also a double, controls the amplitude decrease between successive octaves, influencing how much each layer affects the overall noise pattern.
* The node accepts a configuration object of type PCGExNoiseConfigPerlin to customize additional parameters not covered by Octaves, Lacunarity, and Persistence.

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

<summary><strong>Config</strong> <code>PCGExNoiseConfigPerlin</code></summary>

Controls config.

📦 See: NoiseConfigPerlin configuration

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

***

Source: `Source\PCGExNoise3D\Public\Noises\PCGExNoisePerlin.h`
