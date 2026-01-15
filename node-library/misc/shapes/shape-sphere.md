---
description: 'In editor :: PCGEx | Shape : φ Sphere'
icon: circle-dashed
---

# Shape : Sphere

Create a Fibonacci Lattice sphere.

📌 **Subnode** — Connects to **Shape Builders** pins.

**How It Works**

> AI-Generated, needs proofreading

* Computes points on a sphere using a Fibonacci lattice algorithm, which distributes points evenly across the sphere's surface.
* Utilizes the Phi Constant (golden ratio) and a custom Phi value to determine the angular separation between points for optimal distribution.
* Applies an Epsilon value to adjust the precision or spacing of the generated points on the sphere.
* Configures shape properties according to specified settings, ensuring the output adheres to defined parameters.

#### Configuration

<details>

<summary><strong>Phi Constant</strong> <code>PCGExFibPhiConstant</code></summary>

Phi Constant

**Values:**

* **Golden Ratio**
* **Sqrt 2**
* **Irrational**
* **Sqrt 3**
* **Ln2**
* **Custom**

</details>

<details>

<summary><strong>Phi</strong> <code>PCGExInputShorthandNameDouble</code></summary>

Phi Custom Value

⚡ PCG Overridable

</details>

<details>

<summary><strong>Epsilon</strong> <code>double</code></summary>

Epsilon

⚡ PCG Overridable

</details>

<details>

<summary><strong>Config</strong> <code>PCGExShapeFiblatConfig</code></summary>

Shape properties

📦 See: ShapeFiblat configuration

⚡ PCG Overridable

</details>

<details>

<summary><strong>Phi Constant</strong> <code>PCGExFibPhiConstant</code></summary>

Phi Constant

**Values:**

* **Golden Ratio**
* **Sqrt 2**
* **Irrational**
* **Sqrt 3**
* **Ln2**
* **Custom**

</details>

<details>

<summary><strong>Phi</strong> <code>PCGExInputShorthandNameDouble</code></summary>

Phi Custom Value

⚡ PCG Overridable

</details>

<details>

<summary><strong>Epsilon</strong> <code>double</code></summary>

Epsilon

⚡ PCG Overridable

</details>

***

Source: `Source\PCGExElementsShapes\Public\Shapes\PCGExShapeFiblat.h`
