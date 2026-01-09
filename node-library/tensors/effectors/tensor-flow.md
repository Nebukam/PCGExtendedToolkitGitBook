---
description: 'In editor :: PCGEx | Tensor : Flow'
icon: circle-dashed
---

# Tensor : Flow

{% hint style="info" %}
### AI-generated page -- to be reviewed

While not 100% accurate, it should properly capture what the node/factory does. It stills needs to be proofread by a human.
{% endhint %}

> Creates a tensor that represents a vector/flow field, where each point contributes a directional influence.

### Overview

This node generates a flow field tensor that defines directional influences across space. It's useful for creating forces, movement patterns, or guidance fields that can be used by other PCG nodes to influence point placement, movement, or transformation. Each input point contributes a vector direction that affects the surrounding space based on distance and falloff.

{% hint style="info" %}
The flow field is computed using a tensor-based system where each point acts as an effector with a defined direction and influence radius.
{% endhint %}

<details>

<summary>Inputs</summary>

* **Main Input**: Points that define the source of the flow field
* **Optional Secondary Input**: Additional data used for attribute sampling

</details>

<details>

<summary>Outputs</summary>

* **Output**: A tensor factory that can be consumed by other nodes to sample flow field values at any point in space

</details>

### Properties Overview

Controls how the flow field is generated and what direction each effector contributes.

***

#### General Settings

Configures the core behavior of the flow field tensor.

**Direction Input**

_Controls whether the direction is defined by a constant value or read from an attribute._

* When set to **Constant**, uses the "Direction" setting to define the vector direction for all effectors.
* When set to **Attribute**, reads the direction from the input points' "Direction (Attr)" attribute.

**Values**:

* **Constant**: Use a fixed axis direction
* **Attribute**: Read direction from point data

**Direction (Attr)**

_The attribute name used to read directional vectors when "Direction Input" is set to "Attribute"._

* The attribute must contain a vector value representing the desired direction
* Typically used with rotation or vector attributes from input points

**Invert Direction**

_When enabled, reverses the direction of the flow field._

* Useful for creating opposing forces or counter-directional effects
* Applies to both constant and attribute-based directions

**Direction**

_The axis direction used when "Direction Input" is set to "Constant"._

* Defines which axis (Forward, Right, Up, etc.) points will contribute their flow in
* Commonly set to **Forward** for movement along object orientation or **Up** for vertical flows

**Direction Transform**

_Control how the direction vector is interpreted._

* When set to **Relative**, the direction is applied relative to each point's local transform
* When set to **Absolute**, the direction is applied in world space regardless of point rotation

### Notes

* This tensor type is particularly useful for creating wind patterns, flow-based movement, or directional guidance fields
* Combine with nodes like "Tensor : Sample" to extract flow field values at specific locations
* The influence radius and falloff settings from the parent tensor factory control how far each effector affects surrounding space
* For best results, ensure input points are well-distributed to create smooth flow field transitions
* Can be used in conjunction with other tensor types to create complex multi-layered effects
