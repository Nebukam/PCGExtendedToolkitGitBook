---
description: 'In editor :: PCGEx | Tensor : Spline Flow'
icon: circle-dashed
---

# Tensor : Spline Flow

{% hint style="info" %}
### AI-generated page -- to be reviewed

While not 100% accurate, it should properly capture what the node/factory does. It stills needs to be proofread by a human.
{% endhint %}

> Creates a tensor that represents a vector/flow field along a spline.

### Overview

This node generates a tensor that defines a directional flow along the path of a spline. It's useful for creating forces, movement patterns, or influence fields that follow a curved path. The tensor can be used to guide particles, objects, or other procedural elements along a defined route.

The resulting tensor field will have a direction aligned with the spline's curve and can be scaled by the spline's control points. This allows for dynamic flow patterns that change based on the shape of the spline.

{% hint style="info" %}
This node requires input splines to function properly. It processes these splines to create a continuous vector field along their paths.
{% endhint %}

<details>

<summary>Inputs</summary>

* **Main Input**: Points or splines that define the path for the tensor field
* **Secondary Input** (Optional): Additional data used for weighting or influence

</details>

<details>

<summary>Outputs</summary>

* **Output**: A tensor field that can be consumed by other nodes to apply forces or directions along the spline path

</details>

### Properties Overview

Settings for configuring how the tensor field is generated from the input splines.

***

#### General Settings

Controls the core behavior of the tensor field generation.

**Sample Inputs**

_Controls which splines are processed._

* Only splines that match the selected mode will be included in the tensor field
* **All**: Process all input splines
* **Closed loops only**: Only process closed spline loops (e.g., circles)
* **Open lines only**: Only process open-ended splines

**Radius**

_Base radius of the spline._

* Controls how far the tensor field extends from the spline path
* Value is scaled by control point scale length
* Larger values create a wider influence area around the spline

**Spline Direction**

_Which axis of the spline transform defines the flow direction._

* **Forward**: Uses the X+ axis of the spline's local space
* **Backward**: Uses the X- axis of the spline's local space
* **Right**: Uses the Y+ axis of the spline's local space
* **Left**: Uses the Y- axis of the spline's local space
* **Up**: Uses the Z+ axis of the spline's local space
* **Down**: Uses the Z- axis of the spline's local space

### Notes

* The tensor field will be strongest at the spline path and weaken as distance from the path increases
* Combine with other tensor nodes to create complex flow patterns
* Use this node to simulate river flows, wind patterns, or guided movement paths
* The radius setting allows you to control how far the influence extends from the spline
* This node works best when input splines are well-defined and smooth curves
