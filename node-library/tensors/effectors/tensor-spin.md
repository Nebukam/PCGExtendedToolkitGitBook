---
description: 'In editor :: PCGEx | Tensor : Spin'
icon: circle-dashed
---

# Tensor : Spin

{% hint style="warning" %}
## AI-generated page - To be reviewed. 
While not 100% accurante, it should properly capture what it does. It stills needs to be reviewed and proofread by a human.
{% endhint %}

> A tensor that represents a spin around a given axis.

### Overview

This node creates a rotational tensor that applies a spinning force around a specified axis. It's useful for creating vortex effects, rotating objects around a central point, or generating spiral patterns in procedural content. The spin can be configured to rotate around different axes and can be made relative to the input points' transforms.

{% hint style="info" %}
This tensor is particularly effective when combined with other tensor operations like attraction or repulsion to create complex motion patterns.
{% endhint %}

<details>

<summary>Inputs</summary>

* **Points**: Input points that will be affected by the spin tensor
* **Attributes** (optional): Attributes used for axis direction and transform mode

</details>

<details>

<summary>Outputs</summary>

* **Factory**: A tensor factory that can be consumed by other tensor operations

</details>

### Properties Overview

Controls how the spin tensor is configured and applied.

***

#### Spin Settings

Configures the rotational behavior of the tensor.

**Axis Input**

_Controls whether the spin axis is constant or read from an attribute._

* When set to **Constant**, uses the fixed axis defined in the settings
* When set to **Attribute**, reads the axis direction from a point attribute

**Values**:

* **Constant**: Use a single, fixed axis for all points
* **Attribute**: Read axis direction from input data

**Axis (Attr)**

_The name of the attribute that contains the spin axis direction._

* Only visible when "Axis Input" is set to **Attribute**
* Should contain a vector attribute representing the desired spin axis

**Axis**

_The fixed axis around which points will spin._

* Only visible when "Axis Input" is set to **Constant**
* Defines the direction of rotation (Forward, Backward, Right, Left, Up, Down)

**Axis Transform**

_Controls whether the axis direction is interpreted in world or local space._

* When enabled, the axis is relative to each point's transform
* When disabled, the axis is interpreted in world space

### Notes

* Combine with other tensor operations to create complex motion patterns like spirals or vortexes
* Use attribute-based axis input for dynamic spin directions per point
* The spin effect is strongest at the center and tapers off with distance
* This tensor works best when used with a relatively small radius to avoid over-saturating the effect
