---
description: 'In editor :: PCGEx | Tensor : Null'
icon: circle-dashed
---

# Tensor : Null

{% hint style="warning" %}
## AI-generated page -- to be reviewed 
While not 100% accurate, it should properly capture what the node/factory does. It stills needs to be proofread by a human.
{% endhint %}

> Creates a tensor that represents a null field, effectively producing no influence or effect.

### Overview

This node generates a tensor that has no actual influence on point positioning or transformation. It's useful for creating placeholder tensors in scenarios where you want to define a tensor slot but don't want it to contribute any force or direction. This can be particularly helpful when building conditional tensor setups or when you need a default tensor state.

{% hint style="info" %}
This node is primarily used as a placeholder or default tensor and does not produce any meaningful effect on data.
{% endhint %}

<details>

<summary>Inputs</summary>

* **Main Input**: Expects point data to be processed by the tensor operation.
* **Optional Input**: May accept additional tensor or factory inputs if used in a multi-tensor setup.

</details>

<details>

<summary>Outputs</summary>

* **Main Output**: Returns the same point data with no changes made due to this tensor's influence.

</details>

### Properties Overview

Controls how the null tensor behaves within the system.

***

#### Tensor Settings

Configures the properties of the null tensor.

**Config**

_The configuration settings for the null tensor._

* This setting defines how the tensor is initialized and behaves.
* The null tensor will always return zero influence regardless of input parameters.
* It's used as a default or fallback state in multi-tensor setups.

### Notes

* This node is ideal for use in conditional logic where you might want to disable certain tensors without removing them from the graph.
* It can be used as a placeholder when building complex tensor networks that require a consistent number of inputs.
* Since it produces no effect, it's safe to include in production graphs without performance impact.
