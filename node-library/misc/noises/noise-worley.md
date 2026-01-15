---
icon: circle-dashed
---

# Noise : Worley

Worley/Cellular noise - cell-like patterns.

📌 **Subnode** — Connects to **Noise** pins.

**How It Works**

> AI-Generated, needs proofreading

* Computes cellular noise patterns based on the Worley algorithm to generate cell-like structures.
* Utilizes a specified distance function to determine the influence of nearest feature points in the pattern generation process.
* Adjusts the randomness of cell placement through the jitter setting, where 0 represents a regular grid and 1 indicates maximum randomness.

#### Configuration

<details>

<summary><strong>Distance Function</strong> <code>PCGExWorleyDistanceFunc</code></summary>

Distance function to use

**Values:**

* **Euclidean**
* **Euclidean Squared**
* **Manhattan**
* **Chebyshev**

⚡ PCG Overridable

</details>

<details>

<summary><strong>Return Type</strong> <code>PCGExWorleyReturnType</code></summary>

What to return

**Values:**

* **F1**
* **F2**
* **F2Minus F1**
* **F1 + F2**
* **F1 \* F2**
* **Cell Value**

⚡ PCG Overridable

</details>

<details>

<summary><strong>Jitter</strong> <code>double</code></summary>

Jitter amount (0 = regular grid, 1 = maximum randomness)

_Range: min: 0.0, max: 1.0_

⚡ PCG Overridable

</details>

<details>

<summary><strong>Config</strong> <code>PCGExNoiseConfigWorley</code></summary>

Controls config.

📦 See: NoiseConfigWorley configuration

⚡ PCG Overridable

</details>

<details>

<summary><strong>Distance Function</strong> <code>PCGExWorleyDistanceFunc</code></summary>

Distance function to use

**Values:**

* **Euclidean**
* **Euclidean Squared**
* **Manhattan**
* **Chebyshev**

⚡ PCG Overridable

</details>

<details>

<summary><strong>Return Type</strong> <code>PCGExWorleyReturnType</code></summary>

What to return

**Values:**

* **F1**
* **F2**
* **F2Minus F1**
* **F1 + F2**
* **F1 \* F2**
* **Cell Value**

⚡ PCG Overridable

</details>

<details>

<summary><strong>Jitter</strong> <code>double</code></summary>

Jitter amount (0 = regular grid, 1 = maximum randomness)

_Range: min: 0.0, max: 1.0_

⚡ PCG Overridable

</details>

***

Source: `Source\PCGExNoise3D\Public\Noises\PCGExNoiseWorley.h`
