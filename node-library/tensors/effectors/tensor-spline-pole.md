---
description: 'In editor :: PCGEx | Tensor : Spline Pole'
icon: circle-dashed
---

# Tensor : Spline Pole

{% hint style="warning" %}
## AI-generated page - To be reviewed. 
While not 100% accurante, it should properly capture what it does. It stills needs to be reviewed and proofread by a human.
{% endhint %}

> Creates a tensor that represents a vector/flow field along a spline.

### Overview

This node generates a tensor field that guides points along the shape of a spline. It's useful for creating flowing, directional effects like rivers, roads, or wind patterns that follow curved paths. The tensor applies forces that pull or push points toward the spline's centerline, with strength decreasing as distance from the spline increases.

{% hint style="info" %}
The resulting tensor field is best used in conjunction with other tensor nodes to create complex flow behaviors.
{% endhint %}

<details>

<summary>Inputs</summary>

* **Main Input**: Points or splines to be processed
* **Secondary Input (Optional)**: Additional data for tensor configuration

</details>

<details>

<summary>Outputs</summary>

* **Output**: Modified points with tensor field applied

</details>

### Properties Overview

Controls how the tensor field is generated and applied along the spline.

***

#### General Settings

Configures basic behavior of the tensor field.

**Sample Inputs**

_Controls which input splines are sampled._

* Only closed loops, open lines, or all splines can be used
* When set to "Closed loops only", only closed splines will be processed
* When set to "Open lines only", only open splines will be processed

**Values**:

* **All**: Sample all inputs
* **Closed loops only**: Sample only closed loops
* **Open lines only**: Sample only open lines

**Radius**

_Base radius of the spline. Will be scaled by control points' scale length._

* Controls how far from the spline's centerline the tensor field has influence
* Larger values create a wider area of influence
* Example: A value of 200 means the tensor field affects points within 200 units from the spline

***

#### Tensor Settings

Controls how the tensor field behaves in relation to the spline.

**Falloff Mode**

_Controls how the tensor strength decreases with distance._

* Determines whether the effect tapers off gradually or drops off sharply
* Affects the smoothness of transitions between different tensor regions

**Values**:

* **Linear**: Strength decreases linearly with distance
* **Quadratic**: Strength decreases quadratically with distance
* **Cubic**: Strength decreases cubically with distance

**Potency Falloff**

_Controls how potency decreases with distance from the spline._

* Affects how strong the tensor's pull or push is at different distances
* Higher values mean stronger effects closer to the spline and weaker effects further away

**Weight Falloff**

_Controls how weight decreases with distance from the spline._

* Determines how much influence each point has in the tensor field
* Influences how the tensor combines with other tensors when multiple are present

### Notes

* This node works best when used with splines that have a defined path, such as those created by the "Path : Create Spline" node.
* Combine with other tensor nodes to create complex flow fields.
* The tensor field is computed per point and can be used for particle systems or procedural mesh generation.
* Adjust the radius value to control how wide the influence of the spline extends.
* For best results, ensure your input splines are properly aligned and spaced to avoid overlapping effects.
