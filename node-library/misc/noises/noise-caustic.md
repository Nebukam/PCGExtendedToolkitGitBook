---
icon: circle-dashed
---

# Noise : Caustic

Caustic noise - water light patterns.

📌 **Subnode** — Connects to **Noise** pins.

**How It Works**

> AI-Generated, needs proofreading

* The node generates caustic noise patterns, simulating light refraction through water surfaces.
* It overlays multiple wave layers as specified by the "Wave Layers" setting to create complex interference patterns.
* Using the "Wavelength" parameter, the node determines the base wavelength of the waves contributing to the pattern formation.
* By adjusting the "Time" and "Animation Speed" settings, the node animates the caustic noise over time; a "Time" value of 0 results in a static pattern.
* The "Intensity" setting controls the brightness and focal points within the generated caustic patterns.

#### Configuration

<details>

<summary><strong>Wave Layers</strong> <code>int32</code></summary>

Number of overlapping wave layers

_Range: min: 1, max: 8_

⚡ PCG Overridable

</details>

<details>

<summary><strong>Wavelength</strong> <code>double</code></summary>

Base wavelength

_Range: min: 0.1, max: 10.0_

⚡ PCG Overridable

</details>

<details>

<summary><strong>Time</strong> <code>double</code></summary>

Time parameter for animation (0 for static)

_Range: min: 0.0_

⚡ PCG Overridable

</details>

<details>

<summary><strong>Animation Speed</strong> <code>double</code></summary>

Animation speed

_Range: min: 0.0, max: 5.0_

⚡ PCG Overridable

</details>

<details>

<summary><strong>Intensity</strong> <code>double</code></summary>

Caustic intensity (creates bright focal points)

_Range: min: 0.5, max: 4.0_

⚡ PCG Overridable

</details>

<details>

<summary><strong>Focus</strong> <code>double</code></summary>

Focus sharpness (higher = brighter focal points)

_Range: min: 1.0, max: 8.0_

⚡ PCG Overridable

</details>

<details>

<summary><strong>Config</strong> <code>PCGExNoiseConfigCaustic</code></summary>

Controls config.

📦 See: NoiseConfigCaustic configuration

⚡ PCG Overridable

</details>

<details>

<summary><strong>Wave Layers</strong> <code>int32</code></summary>

Number of overlapping wave layers

_Range: min: 1, max: 8_

⚡ PCG Overridable

</details>

<details>

<summary><strong>Wavelength</strong> <code>double</code></summary>

Base wavelength

_Range: min: 0.1, max: 10.0_

⚡ PCG Overridable

</details>

<details>

<summary><strong>Time</strong> <code>double</code></summary>

Time parameter for animation (0 for static)

_Range: min: 0.0_

⚡ PCG Overridable

</details>

<details>

<summary><strong>Animation Speed</strong> <code>double</code></summary>

Animation speed

_Range: min: 0.0, max: 5.0_

⚡ PCG Overridable

</details>

<details>

<summary><strong>Intensity</strong> <code>double</code></summary>

Caustic intensity (creates bright focal points)

_Range: min: 0.5, max: 4.0_

⚡ PCG Overridable

</details>

<details>

<summary><strong>Focus</strong> <code>double</code></summary>

Focus sharpness (higher = brighter focal points)

_Range: min: 1.0, max: 8.0_

⚡ PCG Overridable

</details>

***

Source: `Source\PCGExNoise3D\Public\Noises\PCGExNoiseCaustic.h`
