---
icon: circle-dashed
---

# Noise : Gabor

Gabor noise - directional/anisotropic patterns.

📌 **Subnode** — Connects to **Noise** pins.

**How It Works**

> AI-Generated, needs proofreading

* Computes directional/anisotropic patterns using a Gabor kernel, oriented according to the specified Direction setting.
* Adjusts the directionality of the pattern based on the Bandwidth value; lower values result in more directional patterns.
* Generates noise with a density defined by Impulses Per Cell within each cell of the noise grid.
* Utilizes a Kernel Radius to define the extent of influence for each kernel, affecting the scale and smoothness of the generated patterns.

#### Configuration

<details>

<summary><strong>Direction</strong> <code>Vector</code></summary>

Direction of the gabor kernel (will be normalized)

⚡ PCG Overridable

</details>

<details>

<summary><strong>Bandwidth</strong> <code>double</code></summary>

Bandwidth - controls how directional (lower = more directional)

_Range: min: 0.1, max: 10.0_

⚡ PCG Overridable

</details>

<details>

<summary><strong>Impulses Per Cell</strong> <code>int32</code></summary>

Number of impulses per cell

_Range: min: 1, max: 32_

⚡ PCG Overridable

</details>

<details>

<summary><strong>Kernel Radius</strong> <code>double</code></summary>

Kernel radius

_Range: min: 0.5, max: 4.0_

⚡ PCG Overridable

</details>

<details>

<summary><strong>Config</strong> <code>PCGExNoiseConfigGabor</code></summary>

Controls config.

📦 See: NoiseConfigGabor configuration

⚡ PCG Overridable

</details>

<details>

<summary><strong>Direction</strong> <code>Vector</code></summary>

Direction of the gabor kernel (will be normalized)

⚡ PCG Overridable

</details>

<details>

<summary><strong>Bandwidth</strong> <code>double</code></summary>

Bandwidth - controls how directional (lower = more directional)

_Range: min: 0.1, max: 10.0_

⚡ PCG Overridable

</details>

<details>

<summary><strong>Impulses Per Cell</strong> <code>int32</code></summary>

Number of impulses per cell

_Range: min: 1, max: 32_

⚡ PCG Overridable

</details>

<details>

<summary><strong>Kernel Radius</strong> <code>double</code></summary>

Kernel radius

_Range: min: 0.5, max: 4.0_

⚡ PCG Overridable

</details>

***

Source: `Source\PCGExNoise3D\Public\Noises\PCGExNoiseGabor.h`
