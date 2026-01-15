---
description: 'In editor :: PCGEx | Tensor : Spline Pole'
icon: circle-dashed
---

# Tensor : Spline Pole

A tensor that represent a vector/flow field along a spline

📌 **Subnode** — Connects to **Tensors** pins.

**How It Works**

> AI-Generated, needs proofreading

* The Tensor : Spline Pole node generates a tensor that represents a vector/flow field along a defined spline.
* It uses the specified base radius for the spline, which gets scaled according to the scale length of the control points.
* Configuration settings for the tensor properties are applied as defined in the Config setting.
* Sample inputs are processed to determine specific characteristics or values at various points along the spline.

#### Configuration

<details>

<summary><strong>Sample Inputs</strong> <code>PCGExSplineSamplingIncludeMode</code></summary>

Sample inputs.

⚡ PCG Overridable

</details>

<details>

<summary><strong>Radius</strong> <code>double</code></summary>

Base radius of the spline. Will be scaled by control points' scale length

⚡ PCG Overridable

</details>

<details>

<summary><strong>Config</strong> <code>PCGExTensorSplinePoleConfig</code></summary>

Tensor properties

📦 See: TensorSplinePole configuration

⚡ PCG Overridable

</details>

<details>

<summary><strong>Sample Inputs</strong> <code>PCGExSplineSamplingIncludeMode</code></summary>

Sample inputs.

⚡ PCG Overridable

</details>

<details>

<summary><strong>Radius</strong> <code>double</code></summary>

Base radius of the spline. Will be scaled by control points' scale length

⚡ PCG Overridable

</details>

***

Source: `Source\PCGExElementsTensors\Public\Tensors\PCGExTensorSplinePole.h`
