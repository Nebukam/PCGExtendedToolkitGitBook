---
description: 'In editor :: PCGEx | Tensor : Spline Flow'
icon: circle-dashed
---

# Tensor : Spline Flow

A tensor that represent a vector/flow field along a spline

📌 **Subnode** — Connects to **Tensors** pins.

**How It Works**

> AI-Generated, needs proofreading

* The node generates a tensor representing a vector/flow field along a defined spline.
* It uses the specified radius as the base for the spline's thickness, which can be adjusted by scaling factors from control points.
* The direction of the spline is determined based on the selected axis in the "Spline Direction" setting.
* Tensor properties are configured according to the settings provided under the "Config" option.
* Sample inputs are processed to define specific points or parameters that influence the tensor's output along the spline.

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

<summary><strong>Spline Direction</strong> <code>PCGExAxis</code></summary>

Which spline transform axis is to be used

⚡ PCG Overridable

</details>

<details>

<summary><strong>Config</strong> <code>PCGExTensorSplineFlowConfig</code></summary>

Tensor properties

📦 See: TensorSplineFlow configuration

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

<details>

<summary><strong>Spline Direction</strong> <code>PCGExAxis</code></summary>

Which spline transform axis is to be used

⚡ PCG Overridable

</details>

***

Source: `Source\PCGExElementsTensors\Public\Tensors\PCGExTensorSplineFlow.h`
