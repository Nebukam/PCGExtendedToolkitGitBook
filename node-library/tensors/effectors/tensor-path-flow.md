---
description: 'In editor :: PCGEx | Tensor : Path Flow'
icon: circle-dashed
---

# Tensor : Path Flow

A tensor that represent a vector/flow field along a path

📌 **Subnode** — Connects to **Filters** pins.

**How It Works**

> AI-Generated, needs proofreading

* The Tensor : Path Flow node generates a tensor that represents a vector/flow field along a specified path.
* It uses a selected point type to define how points are interpolated along the path; if "Smooth Linear" is enabled, it interpolates smoothly between points.
* The node samples inputs to determine the flow characteristics at various points along the path.
* A base radius for the spline is defined by the Radius setting and can be scaled based on the control points' scale length.
* The Spline Direction setting specifies which axis of the spline's transformation should be used as the direction for the vector/flow field.

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

<summary><strong>Spline Direction</strong> <code>PCGExAxis</code></summary>

Which spline transform axis is to be used

⚡ PCG Overridable

</details>

<details>

<summary><strong>Config</strong> <code>PCGExTensorPathFlowConfig</code></summary>

Tensor properties

📦 See: TensorPathFlow configuration

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

<details>

<summary><strong>Spline Direction</strong> <code>PCGExAxis</code></summary>

Which spline transform axis is to be used

⚡ PCG Overridable

</details>

***

Source: `Source\PCGExElementsTensors\Public\Tensors\PCGExTensorPathFlow.h`
