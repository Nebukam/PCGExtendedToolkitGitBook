---
description: 'In editor :: PCGEx | Tensor : Pole'
icon: circle-dashed
---

# Tensor : Pole

{% hint style="warning" %}
This page was generated from the source code. It captures what the node does, but still needs some serious  proofreading.
{% endhint %}

> Applies a pulling or pushing force to points based on tensor properties.

#### How It Works

This node evaluates each input point against a tensor configuration to determine how much it should be influenced. The force applied depends on the distance from the tensor's center and its defined potency. Points closer to the center experience stronger influence, while those farther away are affected less. The direction of the force is determined by whether the tensor pulls or pushes — pulling points toward the center, or pushing them outward.

The node calculates a factor based on the point’s proximity to the tensor's influence area, then applies this factor to modify the point's position using the tensor's defined behavior (pull or push).

#### Configuration

<details>

<summary><strong>Config</strong><br><em>Tensor properties.</em></summary>

Controls how the tensor behaves, including its pull/push direction, falloff, and potency.

**Values**:

* **Pull**: Pulls points toward the center of the tensor.
* **Push**: Pushes points away from the center of the tensor.
* **Both**: Applies both pull and push forces depending on point position relative to the tensor.

</details>

#### Usage Example

Use this node in a graph where you want to simulate gravitational or repulsive forces. For example, place several Tensor : Pole nodes with different configurations to create a system where points are pulled toward certain locations while being pushed away from others, forming complex spatial patterns or animations.

#### Notes

* The influence of the tensor decreases with distance from its center.
* Adjust the potency and falloff settings to control how strongly points are affected.
* Combine multiple Tensor : Pole nodes to create layered effects.
