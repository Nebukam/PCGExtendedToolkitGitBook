---
icon: circle-dashed
---

# Noise : Flow

Flow noise - time-coherent animated patterns.

📌 **Subnode** — Connects to **Noise** pins.

**How It Works**

> AI-Generated, needs proofreading

* The Noise : Flow node generates time-coherent animated noise patterns based on input parameters such as Octaves, Lacunarity, and Persistence.
* It uses the specified number of Octaves to layer multiple noise functions, creating more complex patterns by combining them with varying frequencies and amplitudes defined by Lacunarity and Persistence.
* The Time parameter animates the noise pattern over time, allowing for dynamic changes in the output texture that remain coherent between frames.
* Rotation Speed modifies the gradients used in generating the noise, causing the animated patterns to rotate at a specified rate.

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

<summary><strong>Time</strong> <code>double</code></summary>

Time parameter for animation

⚡ PCG Overridable

</details>

<details>

<summary><strong>Rotation Speed</strong> <code>double</code></summary>

Rotation speed of gradients

_Range: min: 0.0, max: 10.0_

⚡ PCG Overridable

</details>

<details>

<summary><strong>Config</strong> <code>PCGExNoiseConfigFlow</code></summary>

Controls config.

📦 See: NoiseConfigFlow configuration

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

<summary><strong>Time</strong> <code>double</code></summary>

Time parameter for animation

⚡ PCG Overridable

</details>

<details>

<summary><strong>Rotation Speed</strong> <code>double</code></summary>

Rotation speed of gradients

_Range: min: 0.0, max: 10.0_

⚡ PCG Overridable

</details>

***

Source: `Source\PCGExNoise3D\Public\Noises\PCGExNoiseFlow.h`
