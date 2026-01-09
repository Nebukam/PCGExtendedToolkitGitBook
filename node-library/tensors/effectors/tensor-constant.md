---
description: 'In editor :: PCGEx | Tensor : Constant'
icon: circle-dashed
---

# Tensor : Constant

{% hint style="warning" %}
## AI-generated page -- to be reviewed 
While not 100% accurate, it should properly capture what the node/factory does. It stills needs to be proofread by a human.
{% endhint %}

> Creates a tensor with a constant value across its field, ensuring sampling never fails.

### Overview

This node generates a tensor that maintains a consistent strength and direction throughout its area of influence. Unlike other tensor types that may vary in intensity based on position or other factors, this tensor provides a uniform field. It's particularly useful for creating predictable, stable influences that won't cause sampling to fail when used in downstream operations.

The constant tensor is ideal for applying consistent forces, directions, or influences across procedural generation workflows where reliability is more important than variation. It serves as a foundational building block for more complex tensor behaviors and ensures that any operation relying on tensor sampling will always have valid data to work with.

{% hint style="info" %}
This tensor type prevents sampling failures by guaranteeing a consistent field value, making it reliable for downstream processing.
{% endhint %}

<details>

<summary>Inputs</summary>

* **Points**: Input points to be processed by the tensor
* **Optional**: Other data inputs required by the parent factory provider

</details>

<details>

<summary>Outputs</summary>

* **Tensor Data**: A constant tensor field that can be used for sampling and influence operations

</details>

### Properties Overview

Controls how the constant tensor behaves and what values it applies.

***

#### General Settings

Configures the core properties of the constant tensor.

**Tensor Weight**

_Sets the overall strength or weight of the tensor._

* Controls how much influence this tensor has compared to others
* Higher values make the tensor more dominant in sampling operations
* Range: Any positive number (default: 1.0)

**Direction**

_Sets the direction of the constant tensor field._

* Defines the orientation of the tensor's influence
* Values are normalized automatically for consistent behavior
* Default: Forward vector (1, 0, 0)
* Example: Set to (0, 1, 0) for a Y-axis oriented tensor

**Potency**

_Sets the potency or intensity of the tensor._

* Controls how strongly the tensor affects sampled points
* Higher values increase the tensor's influence magnitude
* Range: Any positive number (default: 1.0)

**Sampling Mutations**

_Configures how sampling results are modified during evaluation._

* **Mutate Position**: When enabled, sampling can modify the position used for subsequent operations
* **Mutate Rotation**: When enabled, sampling can alter rotation values
* **Mutate Scale**: When enabled, sampling can change scale factors
* **Mutation Strength**: Controls how much mutation affects the result (0.0 to 1.0)

**Config**

_Internal tensor configuration settings._

* Contains internal properties that define how the tensor is processed
* Not typically modified by users

### Notes

* Use this tensor when you need predictable, consistent behavior in your procedural generation
* The constant tensor prevents sampling failures, making it safe to use in critical processing steps
* Combine with other tensor types to create complex, layered influences
* Ideal for creating base-level forces or directions that remain stable across all points in the field
* Can be used as a fallback tensor when other tensors might fail to provide valid samples
