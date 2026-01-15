---
description: 'In editor :: PCGEx | Path : Subdivide'
icon: circle
---

# Subdivide

Subdivide paths segments.

**How It Works**

> AI-Generated, needs proofreading

* The Subdivide node segments paths by computing interpolation points based on the specified Subdivide Method.
* It accepts an Amount Input of type PCGExInputValueType to determine how the path is subdivided.
* Depending on the chosen subdivision method, it can use either a double value for distance or an int32 count to specify the amount of subdivision.
* An attribute property input selector (Amount (Attr)) allows for dynamic control over the subdivision process based on attributes.

#### Configuration

<details>

<summary><strong>Subdivide Method</strong> <code>PCGExSubdivideMode</code></summary>

Reference for computing the blending interpolation point point

⚡ PCG Overridable

</details>

<details>

<summary><strong>Amount Input</strong> <code>PCGExInputValueType</code></summary>

Controls amount input.

</details>

<details>

<summary><strong>Amount (Distance)</strong> <code>double</code></summary>

Controls amount (distance).

⚡ PCG Overridable

</details>

<details>

<summary><strong>Amount (Count)</strong> <code>int32</code></summary>

Controls amount (count).

⚡ PCG Overridable

</details>

<details>

<summary><strong>Amount (Attr)</strong> <code>PCGAttributePropertyInputSelector</code></summary>

Controls amount (attr).

⚡ PCG Overridable

</details>

<details>

<summary><strong>Redistribute Evenly</strong> <code>bool</code></summary>

Controls redistribute evenly.

⚡ PCG Overridable

</details>

<details>

<summary><strong>Manhattan</strong> <code>PCGExManhattanDetails</code></summary>

Controls manhattan.

📦 See: Manhattan configuration

⚡ PCG Overridable

</details>

<details>

<summary><strong>Blending</strong> <code>PCGExSubPointsBlendInstancedFactory</code> ⚙️</summary>

Instanced pcgexsubpointsblendinstancedfactory behavior.

⚡ PCG Overridable

</details>

**Additional Outputs**

<details>

<summary><strong>Flag Sub Points</strong> <code>bool</code></summary>

Controls flag sub points.

⚡ PCG Overridable

</details>

<details>

<summary><strong>Sub Point Flag Name</strong> <code>Name</code></summary>

Controls sub point flag name.

⚡ PCG Overridable

</details>

<details>

<summary><strong>Write Alpha</strong> <code>bool</code></summary>

Controls write alpha.

⚡ PCG Overridable

</details>

<details>

<summary><strong>Alpha Attribute Name</strong> <code>Name</code></summary>

Controls alpha attribute name.

⚡ PCG Overridable

</details>

<details>

<summary><strong>Default Alpha</strong> <code>double</code></summary>

Controls default alpha.

⚡ PCG Overridable

</details>

***

Source: `Source\PCGExElementsPaths\Public\Elements\PCGExSubdivide.h`
