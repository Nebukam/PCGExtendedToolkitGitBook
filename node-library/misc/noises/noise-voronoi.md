---
icon: circle-dashed
---

# Noise : Voronoi

Voronoi noise - cell patterns with multiple modes.

📌 **Subnode** — Connects to **Noise** pins.

**How It Works**

> AI-Generated, needs proofreading

* Generates Voronoi noise patterns characterized by cell structures.
* Adjusts the jitter amount to vary the randomness of cell positions.
* Applies smoothness settings specifically when in smooth distance mode to refine the transition between cells.
* Utilizes PCGExNoiseConfigVoronoi configuration parameters to customize the noise generation process.

#### Configuration

<details>

<summary><strong>Output Type</strong> <code>PCGExVoronoiOutput</code></summary>

Output type

**Values:**

* **Cell Value**
* **Distance to Center**
* **Edge Distance**
* **Crackle**

⚡ PCG Overridable

</details>

<details>

<summary><strong>Jitter</strong> <code>double</code></summary>

Jitter amount

_Range: min: 0.0, max: 1.0_

⚡ PCG Overridable

</details>

<details>

<summary><strong>Smoothness</strong> <code>double</code></summary>

Smoothness for smooth distance mode

_Range: min: 0.0, max: 1.0_

⚡ PCG Overridable

</details>

<details>

<summary><strong>Config</strong> <code>PCGExNoiseConfigVoronoi</code></summary>

Controls config.

📦 See: NoiseConfigVoronoi configuration

⚡ PCG Overridable

</details>

<details>

<summary><strong>Output Type</strong> <code>PCGExVoronoiOutput</code></summary>

Output type

**Values:**

* **Cell Value**
* **Distance to Center**
* **Edge Distance**
* **Crackle**

⚡ PCG Overridable

</details>

<details>

<summary><strong>Jitter</strong> <code>double</code></summary>

Jitter amount

_Range: min: 0.0, max: 1.0_

⚡ PCG Overridable

</details>

<details>

<summary><strong>Smoothness</strong> <code>double</code></summary>

Smoothness for smooth distance mode

_Range: min: 0.0, max: 1.0_

⚡ PCG Overridable

</details>

***

Source: `Source\PCGExNoise3D\Public\Noises\PCGExNoiseVoronoi.h`
