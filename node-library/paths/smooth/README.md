---
description: 'In editor :: PCGEx | Path : Smooth'
icon: circle
---

# Smooth

Smooth paths points.

⚙️ **Behavior** — Instanced path smoothing.

**How It Works**

> AI-Generated, needs proofreading

* The node processes path points by applying smoothing techniques to them.
* It optionally preserves the starting and ending points of the path based on the settings for "Preserve Start" and "Preserve End".
* Smoothing is applied using an instance of `PCGExSmoothingInstancedFactory`, which defines the specific method of smoothing.
* The node fetches influence values from a local attribute, as specified by the "Influence Input" setting, to modulate the degree of smoothing applied.

#### Configuration

<details>

<summary><strong>Preserve Start</strong> <code>bool</code></summary>

Controls preserve start.

⚡ PCG Overridable

</details>

<details>

<summary><strong>Preserve End</strong> <code>bool</code></summary>

Controls preserve end.

⚡ PCG Overridable

</details>

<details>

<summary><strong>Smoothing Method</strong> <code>PCGExSmoothingInstancedFactory</code> ⚙️</summary>

Instanced pcgexsmoothinginstancedfactory behavior.

⚡ PCG Overridable

</details>

<details>

<summary><strong>Influence Input</strong> <code>PCGExInputValueType</code></summary>

Fetch the influence from a local attribute.

⚡ PCG Overridable

</details>

<details>

<summary><strong>Influence (Attr)</strong> <code>PCGAttributePropertyInputSelector</code></summary>

Fetch the influence from a local attribute.

⚡ PCG Overridable

</details>

<details>

<summary><strong>Influence</strong> <code>double</code></summary>

The amount of smoothing applied.

⚡ PCG Overridable

</details>

<details>

<summary><strong>Smoothing Amount Type</strong> <code>PCGExInputValueType</code></summary>

Fetch the smoothing from a local attribute.

⚡ PCG Overridable

</details>

<details>

<summary><strong>Smoothing (Attr)</strong> <code>PCGAttributePropertyInputSelector</code></summary>

Fetch the smoothing amount from a local attribute.

⚡ PCG Overridable

</details>

<details>

<summary><strong>Smoothing</strong> <code>double</code></summary>

The amount of smoothing applied. Range of this value is highly dependant on the chosen smoothing method.

⚡ PCG Overridable

</details>

<details>

<summary><strong>Scale Smoothing Amount Attribute</strong> <code>double</code></summary>

Static multiplier for the local smoothing amount.

⚡ PCG Overridable

</details>

<details>

<summary><strong>Blending Settings</strong> <code>PCGExBlendingDetails</code></summary>

Blending settings used to smooth attributes.

📦 See: Blending configuration

⚡ PCG Overridable

</details>

**Blending**

<details>

<summary><strong>Blending Interface</strong> <code>PCGExBlendingInterface</code></summary>

How to blend data from sampled points

⚡ PCG Overridable

</details>

***

Source: `Source\PCGExElementsPaths\Public\Elements\PCGExSmooth.h`
