---
icon: circle-dashed
---

# Noise : Open Simplex 2

OpenSimplex2 - patent-free, high quality gradient noise.

📌 **Subnode** — Connects to **Noise** pins.

**How It Works**

> AI-Generated, needs proofreading

* Computes gradient noise using the OpenSimplex2 algorithm, which is designed to be patent-free and of high quality.
* Utilizes an integer value for `Octaves` to determine the number of noise layers combined to create the final output.
* Applies a double precision floating-point value for `Lacunarity`, which controls the frequency increase between successive octaves.
* Uses a double precision floating-point value for `Persistence`, which defines the amplitude decrease between successive octaves.
* Employs a configuration object of type `PCGExNoiseConfigOpenSimplex2` to customize additional parameters not explicitly listed.

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

<summary><strong>Config</strong> <code>PCGExNoiseConfigOpenSimplex2</code></summary>

Controls config.

📦 See: NoiseConfigOpenSimplex2 configuration

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

Source: `Source\PCGExNoise3D\Public\Noises\PCGExNoiseOpenSimplex2.h`
