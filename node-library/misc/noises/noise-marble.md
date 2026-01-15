---
icon: circle-dashed
---

# Noise : Marble

Marble noise - veined patterns with turbulence.

📌 **Subnode** — Connects to **Noise** pins.

**How It Works**

> AI-Generated, needs proofreading

* Computes base noise patterns to form the foundational texture for marble veining.
* Applies a sine wave pattern according to the Vein Frequency setting to create the veined structure in the specified Direction.
* Introduces turbulence distortion based on Turbulence Strength and Turbulence Octaves settings, adding complexity and natural variation to the vein patterns.
* Adjusts the sharpness of the vein edges using the Vein Sharpness parameter, where higher values result in more defined and sharper edges.

#### Configuration

<details>

<summary><strong>Direction</strong> <code>PCGExMarbleDirection</code></summary>

Direction of marble veins

**Values:**

* **X Axis**
* **Y Axis**
* **Z Axis**
* **Radial**

⚡ PCG Overridable

</details>

<details>

<summary><strong>Vein Frequency</strong> <code>double</code></summary>

Frequency of the sine wave creating veins

_Range: min: 0.1, max: 20.0_

⚡ PCG Overridable

</details>

<details>

<summary><strong>Turbulence Strength</strong> <code>double</code></summary>

Strength of turbulence distortion

_Range: min: 0.0, max: 5.0_

⚡ PCG Overridable

</details>

<details>

<summary><strong>Turbulence Octaves</strong> <code>int32</code></summary>

Number of turbulence octaves

_Range: min: 1, max: 8_

⚡ PCG Overridable

</details>

<details>

<summary><strong>Vein Sharpness</strong> <code>double</code></summary>

Sharpness of vein edges (1 = soft, higher = sharper)

_Range: min: 1.0, max: 8.0_

⚡ PCG Overridable

</details>

<details>

<summary><strong>Config</strong> <code>PCGExNoiseConfigMarble</code></summary>

Controls config.

📦 See: NoiseConfigMarble configuration

⚡ PCG Overridable

</details>

<details>

<summary><strong>Direction</strong> <code>PCGExMarbleDirection</code></summary>

Direction of marble veins

**Values:**

* **X Axis**
* **Y Axis**
* **Z Axis**
* **Radial**

⚡ PCG Overridable

</details>

<details>

<summary><strong>Vein Frequency</strong> <code>double</code></summary>

Frequency of the sine wave creating veins

_Range: min: 0.1, max: 20.0_

⚡ PCG Overridable

</details>

<details>

<summary><strong>Turbulence Strength</strong> <code>double</code></summary>

Strength of turbulence distortion

_Range: min: 0.0, max: 5.0_

⚡ PCG Overridable

</details>

<details>

<summary><strong>Turbulence Octaves</strong> <code>int32</code></summary>

Number of turbulence octaves

_Range: min: 1, max: 8_

⚡ PCG Overridable

</details>

<details>

<summary><strong>Vein Sharpness</strong> <code>double</code></summary>

Sharpness of vein edges (1 = soft, higher = sharper)

_Range: min: 1.0, max: 8.0_

⚡ PCG Overridable

</details>

***

Source: `Source\PCGExNoise3D\Public\Noises\PCGExNoiseMarble.h`
