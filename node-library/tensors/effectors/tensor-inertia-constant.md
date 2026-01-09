---
description: 'In editor :: PCGEx | Tensor : Inertia Constant'
icon: circle-dashed
---

# Tensor : Inertia Constant

{% hint style="warning" %}
## AI-generated page - To be reviewed. 
While not 100% accurante, it should properly capture what it does. It stills needs to be reviewed and proofread by a human.
{% endhint %}

> Creates a constant tensor that applies inertia-based forces using the seed transform.

### Overview

This node generates a tensor that applies a constant inertia effect to points in your PCG graph. It's designed to simulate physical properties like mass or resistance to change in direction, based on the original point transforms. The tensor can be configured to apply force along a specific axis and with an optional rotational offset.

{% hint style="info" %}
This node is typically used as part of a larger tensor setup for effects like path following, attraction/repulsion forces, or procedural movement constraints.
{% endhint %}

<details>

<summary>Inputs</summary>

* **Main Input**: Points that will be affected by the tensor
* **Optional Secondary Input**: Additional data for advanced tensor operations

</details>

<details>

<summary>Outputs</summary>

* **Main Output**: Modified points with tensor effects applied
* **Optional Outputs**: Tensor data and debug information (if enabled)

</details>

### Properties Overview

Controls how the constant inertia tensor is applied to your points.

***

#### General Settings

Configures the core behavior of the tensor.

**Axis**

_The axis along which the tensor will apply its effect._

* Determines the direction of the tensor's influence
* **Values**:
  * **Forward**: X+ axis (default)
  * **Backward**: X- axis
  * **Right**: Y+ axis
  * **Left**: Y- axis
  * **Up**: Z+ axis
  * **Down**: Z- axis

**Offset**

_Rotational offset applied to the tensor's orientation._

* Adjusts how the tensor is rotated relative to the point's transform
* Values are in degrees (X, Y, Z)
* Default is zero rotation

**bSetInertiaOnce**

_When enabled, applies a constant inertia value per point based on its original transform._

* If disabled, inertia values are recalculated for each sample
* Useful for creating consistent, predictable effects
* When enabled, the tensor's influence remains constant regardless of sampling position

### Notes

* This node is ideal for creating uniform, directional forces that maintain a consistent orientation
* Combine with other tensor nodes to build complex procedural behaviors
* The "Set Inertia Once" option is particularly useful when you want to preserve the original point orientation for consistent effects
* Use the Axis and Offset settings to control how the tensor interacts with your points' directionality
