---
description: 'In editor :: PCGEx | Tensor : Inertia'
icon: circle-dashed
---

# Tensor : Inertia

{% hint style="warning" %}
This page was generated from the source code. It captures what the node does, but still needs some serious  proofreading.
{% endhint %}

> Applies tensor-based inertia to points using their seed transform.

#### How It Works

This node calculates a tensor constant for each point based on its original orientation and scale. The tensor defines how much resistance each point has to changes in motion, which is essential for simulating realistic physical behavior. The calculation considers the point's direction and scale along a chosen axis, then applies this information as inertia data that downstream nodes can use.

The node supports two modes of operation:

* **Set Once**: Computes and stores a single inertia value per point based on its initial transform.
* **Recompute Each Time**: Recalculates the inertia value every time it's used, which is useful when transforms change dynamically.

#### Configuration

<details>

<summary><strong>Axis</strong><br><em>Direction used to compute the tensor constant.</em></summary>

Defines which axis of the point's transform is used for computing the tensor value.

**Values**:

* **Forward**: Uses the X+ direction (default)
* **Backward**: Uses the X- direction
* **Right**: Uses the Y+ direction
* **Left**: Uses the Y- direction
* **Up**: Uses the Z+ direction
*
  * **Down**: Uses the Z- direction

</details>

<details>

<summary><strong>bSetInertiaOnce</strong><br><em>If enabled, will set a constant per-point inertia based on the original point transform.</em></summary>

When enabled, the node computes and stores a single inertia value for each point based on its initial transform. When disabled, it recomputes the inertia value each time it's used.

</details>

#### Usage Example

Use this node to apply consistent inertia values to points in a particle system. For example, you could use it to make some points more resistant to movement than others by setting different axis directions or enabling the "set once" option for performance.

#### Notes

This node is typically used as part of a larger tensor processing chain where the computed inertia values are consumed by other effectors or processors that simulate physical behavior. It connects to **Tensor** subnodes that define the tensor properties.
