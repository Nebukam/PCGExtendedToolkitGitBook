---
icon: circle-dashed
---

# Noise : Spots

Spots noise - circular/shaped spot patterns.

📌 **Subnode** — Connects to **Noise** pins.

**How It Works**

> AI-Generated, needs proofreading

* Generates circular or shaped spot patterns based on specified parameters.
* Adjusts the base radius of spots relative to cell size according to the Spot Radius setting and introduces random variation as defined by Radius Variation.
* Applies jitter to spot positions within cells as controlled by the Jitter parameter, causing slight displacement from grid-aligned centers.
* Optionally inverts the spots into holes based on the Invert Spots setting.

#### Configuration

<details>

<summary><strong>Shape</strong> <code>PCGExSpotsShape</code></summary>

Shape of the spots

**Values:**

* **Circle**
* **Soft Circle**
* **Square**
* **Diamond**
* **Star**

⚡ PCG Overridable

</details>

<details>

<summary><strong>Spot Radius</strong> <code>double</code></summary>

Base radius of spots (0-1, relative to cell size)

_Range: min: 0.1, max: 0.8_

⚡ PCG Overridable

</details>

<details>

<summary><strong>Radius Variation</strong> <code>double</code></summary>

Random variation in spot radius

_Range: min: 0.0, max: 0.5_

⚡ PCG Overridable

</details>

<details>

<summary><strong>Jitter</strong> <code>double</code></summary>

Jitter of spot positions within cells

_Range: min: 0.0, max: 0.5_

⚡ PCG Overridable

</details>

<details>

<summary><strong>Invert Spots</strong> <code>bool</code></summary>

Invert spots (holes instead of dots)

⚡ PCG Overridable

</details>

<details>

<summary><strong>Value Variation</strong> <code>double</code></summary>

Random value variation per spot

_Range: min: 0.0, max: 1.0_

⚡ PCG Overridable

</details>

<details>

<summary><strong>Config</strong> <code>PCGExNoiseConfigSpots</code></summary>

Controls config.

📦 See: NoiseConfigSpots configuration

⚡ PCG Overridable

</details>

<details>

<summary><strong>Shape</strong> <code>PCGExSpotsShape</code></summary>

Shape of the spots

**Values:**

* **Circle**
* **Soft Circle**
* **Square**
* **Diamond**
* **Star**

⚡ PCG Overridable

</details>

<details>

<summary><strong>Spot Radius</strong> <code>double</code></summary>

Base radius of spots (0-1, relative to cell size)

_Range: min: 0.1, max: 0.8_

⚡ PCG Overridable

</details>

<details>

<summary><strong>Radius Variation</strong> <code>double</code></summary>

Random variation in spot radius

_Range: min: 0.0, max: 0.5_

⚡ PCG Overridable

</details>

<details>

<summary><strong>Jitter</strong> <code>double</code></summary>

Jitter of spot positions within cells

_Range: min: 0.0, max: 0.5_

⚡ PCG Overridable

</details>

<details>

<summary><strong>Invert Spots</strong> <code>bool</code></summary>

Invert spots (holes instead of dots)

⚡ PCG Overridable

</details>

<details>

<summary><strong>Value Variation</strong> <code>double</code></summary>

Random value variation per spot

_Range: min: 0.0, max: 1.0_

⚡ PCG Overridable

</details>

***

Source: `Source\PCGExNoise3D\Public\Noises\PCGExNoiseSpots.h`
