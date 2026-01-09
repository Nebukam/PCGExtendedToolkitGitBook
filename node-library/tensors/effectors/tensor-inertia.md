---
description: 'In editor :: PCGEx | Tensor : Inertia'
icon: circle-dashed
---

# Tensor : Inertia

{% hint style="info" %}
## AI-generated page -- to be reviewed 
While not 100% accurate, it should properly capture what the node/factory does. It stills needs to be proofread by a human.
{% endhint %}

> Creates a tensor that applies a constant inertia force based on the seed transform.

### Overview

This node generates a tensor that applies a consistent directional force to points, using the original point's transform as the basis for its orientation. It's useful for creating uniform pull or push effects that align with the input geometry's local space.

The tensor will apply a constant force in a specific direction (defined by the selected axis) and can be configured to use either a single inertia value per point or vary based on the seed transform.

{% hint style="info" %}
This tensor is particularly effective when used with other tensor operations to create complex, directional forces that respond to the original geometry's orientation.
{% endhint %}

<details>

<summary>Inputs</summary>

* **Points**: Input points that will be processed by the tensor operation
* **Seed Transform**: The transform of each input point is used as the base for the inertia direction

</details>

<details>

<summary>Outputs</summary>

* **Factory**: A tensor factory that can be consumed by other tensor operations

</details>

### Properties Overview

Controls how the inertia tensor is applied to points.

***

#### Settings

Configures the behavior of the inertia tensor.

**Axis**

_Specifies which axis of the seed transform to use as the direction for the inertia force._

* The tensor will apply a constant force along this axis
* For example, selecting "Forward" uses the X-axis of the point's transform
* This determines the primary direction of the force

**Values**:

* **Forward**: Uses the forward (X+) axis of the seed transform
* **Backward**: Uses the backward (X-) axis of the seed transform
* **Right**: Uses the right (Y+) axis of the seed transform
* **Left**: Uses the left (Y-) axis of the seed transform
* **Up**: Uses the up (Z+) axis of the seed transform
* **Down**: Uses the down (Z-) axis of the seed transform

**Set Inertia Once**

_When enabled, applies a constant inertia value per point based on the original point's transform._

* If disabled, the tensor will compute inertia values dynamically for each sample
* When enabled, it uses a single, consistent inertia value for all samples from that point
* This can improve performance when you want uniform behavior across all samples

### Notes

* The tensor applies a constant force in the selected axis direction
* Use this node to create directional pull/push effects that align with your input geometry's orientation
* Combine with other tensor operations to build complex force fields
* The "Set Inertia Once" option is useful when you want predictable, consistent behavior across multiple samples from the same point
