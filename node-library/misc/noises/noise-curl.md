---
icon: circle-dashed
---

# Noise : Curl

Curl noise - divergence-free for fluids and particles.

📌 **Subnode** — Connects to **Noise** pins.

**How It Works**

> AI-Generated, needs proofreading

* Computes divergence-free noise fields suitable for simulating fluid dynamics and particle movements using a curl noise algorithm.
* Utilizes settings such as Octaves (an integer value), Lacunarity (a double precision floating point number), and Persistence (another double) to control the complexity and appearance of the noise pattern.
* Adjusts the magnitude of the curl through the Curl Scale setting, allowing for fine-tuning of the noise field's characteristics.
* Employs an Epsilon value for computing derivatives accurately in the noise generation process.

#### Configuration

<details>

<summary><strong>Octaves</strong> <code>int32</code></summary>

Controls octaves.

_Range: min: 1, max: 8_

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

<summary><strong>Epsilon</strong> <code>double</code></summary>

Epsilon for derivative computation

_Range: min: 0.0001, max: 0.1_

⚡ PCG Overridable

</details>

<details>

<summary><strong>Curl Scale</strong> <code>double</code></summary>

Scale the curl magnitude

_Range: min: 0.1, max: 10.0_

⚡ PCG Overridable

</details>

<details>

<summary><strong>Config</strong> <code>PCGExNoiseConfigCurl</code></summary>

Controls config.

📦 See: NoiseConfigCurl configuration

⚡ PCG Overridable

</details>

<details>

<summary><strong>Octaves</strong> <code>int32</code></summary>

Controls octaves.

_Range: min: 1, max: 8_

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

<summary><strong>Epsilon</strong> <code>double</code></summary>

Epsilon for derivative computation

_Range: min: 0.0001, max: 0.1_

⚡ PCG Overridable

</details>

<details>

<summary><strong>Curl Scale</strong> <code>double</code></summary>

Scale the curl magnitude

_Range: min: 0.1, max: 10.0_

⚡ PCG Overridable

</details>

***

Source: `Source\PCGExNoise3D\Public\Noises\PCGExNoiseCurl.h`
