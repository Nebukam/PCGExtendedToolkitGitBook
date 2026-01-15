---
description: 'In editor :: PCGEx | Tensor : Path Pole'
icon: circle-dashed
---

# Tensor : Path Pole

A tensor that represent a vector/flow field along a path

📌 **Subnode** — Connects to **Tensors** pins.

**How It Works**

> AI-Generated, needs proofreading

* The node initializes a tensor representing a vector/flow field along a specified path.
* It uses a selected point type to define the points along the path; if "Smooth Linear" is enabled, it interpolates smoothly between these points.
* The node samples inputs according to the settings provided under "Sample Inputs".
* A base radius for the spline is set and can be scaled by the scale length of control points.
* Tensor properties are configured as specified in the "Config" setting.

#### Configuration

<details>

<summary><strong>Point Type</strong> <code>PCGExSplinePointTypeRedux</code></summary>

Which point type to use. Shared amongst all points; if you want tight control, create a fully-fledged spline instead.

⚡ PCG Overridable

</details>

<details>

<summary><strong>└─ Smooth Linear</strong> <code>bool</code></summary>

Controls └─ smooth linear.

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

<summary><strong>Config</strong> <code>PCGExTensorPathPoleConfig</code></summary>

Tensor properties

📦 See: TensorPathPole configuration

⚡ PCG Overridable

</details>

<details>

<summary><strong>Point Type</strong> <code>PCGExSplinePointTypeRedux</code></summary>

Which point type to use. Shared amongst all points; if you want tight control, create a fully-fledged spline instead.

⚡ PCG Overridable

</details>

<details>

<summary><strong>└─ Smooth Linear</strong> <code>bool</code></summary>

Controls └─ smooth linear.

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

Source: `Source\PCGExElementsTensors\Public\Tensors\PCGExTensorPathPole.h`
