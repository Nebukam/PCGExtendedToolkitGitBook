---
description: 'In editor :: PCGEx | Tensor : Constant'
icon: circle-dashed
---

# Tensor : Constant

{% hint style="info" %}
This page was generated from the source code. It should properly capture what the node does, but still needs to be proofread by a human.
{% endhint %}

> Creates a tensor with a constant value across its field.

#### How It Works

This node generates a tensor that applies the same directional force or influence consistently throughout its area of effect. Every point within the tensor's range receives the exact same vector value, ensuring uniform behavior regardless of position. The direction and strength of this influence are defined by two key parameters: Direction and Potency.

When multiple tensors are used together, their combined effect depends on how they're configured to interact. The Sampling Mutations setting controls whether these interactions happen in a weighted average, sequentially without changing input positions, or sequentially with updated sampling positions after each step.

#### Configuration

<details>

<summary><strong>Tensor Weight</strong><br><em>Controls how strongly this tensor influences the final result.</em></summary>

Determines the relative strength of this tensor when combined with others. Higher values mean a stronger influence on the output.

</details>

<details>

<summary><strong>Direction</strong><br><em>The direction in which the tensor applies its force.</em></summary>

Sets the fixed vector direction for the tensor's influence. For example, setting it to `(0, 0, 1)` will apply a constant upward force.

</details>

<details>

<summary><strong>Potency</strong><br><em>Controls the intensity of the tensor's effect.</em></summary>

Defines how powerful the tensor's influence is. A value of 1 means full potency; values below 1 reduce the strength, and above 1 amplifies it.

</details>

<details>

<summary><strong>Sampling Mutations</strong><br><em>Tensor mutations settings.</em></summary>

Controls how sampling behaves when multiple tensors are present. Options include:

* **Weighted**: Combines all tensor effects using a weighted average.
* **Ordered (in place)**: Applies tensors sequentially without modifying the input position.
* **Ordered (mutated)**: Applies tensors sequentially and updates the sampling position after each application.

</details>

#### Usage Example

Use this node to simulate a constant wind direction across a terrain. Set the Direction to `(1, 0, 0)` for eastward wind, and adjust Potency to control how strongly it pushes objects. Connect this tensor subnode to an "Apply Tensors" node to influence point positions or velocities.

#### Notes

* This tensor prevents sampling failures by ensuring a valid result is always returned.
* It's ideal for creating predictable, uniform influences in procedural generation workflows.
* The Direction vector can be animated or driven by other data to create dynamic effects.
