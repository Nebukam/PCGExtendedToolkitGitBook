---
description: 'In editor :: PCGEx | Path : Resample'
icon: circle
---

# Resample

Resample path to enforce equally spaced points.

**How It Works**

> AI-Generated, needs proofreading

* The node resamples a given path to ensure that all points along the path are equally spaced according to the specified resolution.
* It uses the `Mode` setting from `PCGExResampleMode` and the `Resolution Mode` to determine how to distribute the points.
* If `Redistribute Evenly` is set to true, the node redistributes the points evenly across the path while respecting the given resolution.
* The `Preserve Last Point` option ensures that the last point of an open loop remains unchanged; this setting is ignored for closed loops.
* The final number and placement of points are determined by the specified `Resolution`, which defines the distance between each resampled point.

#### Configuration

<details>

<summary><strong>Mode</strong> <code>PCGExResampleMode</code></summary>

Controls mode.

**Values:**

* **Sweep**: ...
* **Redistribute**: ...

⚡ PCG Overridable

</details>

<details>

<summary><strong>Resolution Mode</strong> <code>PCGExResolutionMode</code></summary>

Resolution mode

</details>

<details>

<summary><strong>Redistribute Evenly</strong> <code>bool</code></summary>

Controls redistribute evenly.

⚡ PCG Overridable

</details>

<details>

<summary><strong>Preserve Last Point</strong> <code>bool</code></summary>

(ignored for closed loops)

⚡ PCG Overridable

</details>

<details>

<summary><strong>Resolution</strong> <code>PCGExInputShorthandNameDoubleAbs</code></summary>

Resolution

⚡ PCG Overridable

</details>

<details>

<summary><strong>Truncate</strong> <code>PCGExTruncateMode</code></summary>

Controls truncate.

⚡ PCG Overridable

</details>

<details>

<summary><strong>Blending Settings</strong> <code>PCGExBlendingDetails</code></summary>

Blending settings used to smooth attributes.

📦 See: Blending configuration

⚡ PCG Overridable

</details>

<details>

<summary><strong>Ensure Unique Seeds</strong> <code>bool</code></summary>

Controls ensure unique seeds.

</details>

***

Source: `Source\PCGExElementsPaths\Public\Elements\PCGExPathResample.h`
