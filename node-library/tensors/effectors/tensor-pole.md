---
description: 'In editor :: PCGEx | Tensor : Pole'
icon: circle-dashed
---

# Tensor : Pole

{% hint style="danger" %}
This documentation has been AI-generated from the source code and may not be 100% accurate.
{% endhint %}

> A tensor that pulls and/or pushes points along a directional axis.

### Overview

This node creates a tensor effect that applies a pulling or pushing force to points in space, similar to how a magnetic pole would influence nearby objects. It's useful for creating directional movement, attraction/repulsion behaviors, or guiding procedural layouts along specific axes.

The tensor operates by defining an influence zone around a point, where points within that zone are affected based on their distance from the center. The force can be configured to pull points toward the center (attractive) or push them away (repulsive), with customizable falloff behavior.

{% hint style="info" %}
This node is part of the tensor system and requires a Tensor Factory Provider to function properly in a graph.
{% endhint %}

<details>

<summary>Inputs</summary>

* **Main Input**: Points that will be affected by the tensor
* **Factory Input** (optional): A tensor factory provider that defines how this tensor interacts with points

</details>

<details>

<summary>Outputs</summary>

* **Main Output**: Modified points with updated positions based on tensor influence
* **Debug Output** (optional): Visual representation of the tensor's influence zone and effect

</details>

### Properties Overview

Controls how the tensor applies force to input points.

***

#### General

Configures the core behavior of the pole tensor.

**Pull Strength**

_Controls how strongly the tensor pulls or pushes points._

* Higher values create stronger attraction/repulsion
* Values can be negative for repulsion (pushing) or positive for attraction (pulling)
* Default value is 1.0, which provides a moderate force

**Push Strength**

_Controls how strongly the tensor pushes points away from its center._

* Only active when the tensor is configured to push
* Higher values create stronger repulsion
* Default value is 1.0, which provides a moderate push

**Radius**

_Determines the size of the influence zone._

* Points within this radius are affected by the tensor
* Larger values mean more points are influenced
* Default value is 100.0 units (can be adjusted for scale)

**Falloff Curve**

_Configures how the tensor strength decreases with distance._

* Controls the rate at which force diminishes as points move away from the center
* Options include linear, exponential, or custom curve shapes
* Default is a linear falloff that reduces strength evenly

**Axis Alignment**

_Selects which axis the tensor's direction aligns with._

* **None**: No specific alignment, uses the tensor's local orientation
* **X, Y, Z**: Forces the tensor to point along the selected axis
* Useful for creating directional effects like vertical gravity or horizontal wind

**Invert Direction**

_When enabled, reverses the direction of the tensor's pull/push._

* Changes the force from pulling toward the center to pushing away
* Or vice versa, depending on how the tensor is configured
* Can be used to create opposing forces in a system

**Local Guide Curve**

_Adjusts the direction of the tensor's influence based on distance._

* Controls how the tensor's orientation changes as points get closer or farther
* Useful for creating curved or spiraling effects
* Default uses a straight line, maintaining constant direction

**Potency Falloff**

_Modifies how the tensor's strength varies with distance._

* Controls the rate at which the tensor's power decreases
* Can be set to linear, exponential, or custom curve shapes
* Affects how quickly points outside the radius lose influence

**Weight Falloff**

_Adjusts how much weight each point contributes to the tensor effect._

* Determines how much influence individual points have based on their distance
* Can create more natural-looking gradients where nearby points have stronger effects
* Default uses a linear falloff that reduces weight evenly

**Flatten Mode**

_Determines how multiple tensors interact when they overlap._

* **Weighted**: Computes a weighted average of all overlapping tensors
* **Closest**: Uses only the closest tensor's effect
* **Strongest (Weight)**: Uses the tensor with the highest weight value
* **Strongest (Potency)**: Uses the tensor with the highest potency value

**Stop Condition Handling**

_Controls how points that reach the tensor's center are treated._

* **Exclude**: Ignores points at the exact center and doesn't include them in results
* **Include**: Includes points at the center in the output
* Useful for preventing division by zero or creating specific edge behaviors

### Notes

* This node works best when combined with other tensor nodes to create complex force fields
* For large-scale effects, consider using a higher radius value with appropriate falloff settings
* The tensor's direction can be controlled through axis alignment and local guide curve settings
* When using multiple tensors in the same system, flatten mode determines how overlapping influences are resolved
* Debug outputs can help visualize how the tensor affects points in space, useful for fine-tuning parameters
