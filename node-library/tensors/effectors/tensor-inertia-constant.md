---
description: 'In editor :: PCGEx | Tensor : Inertia Constant'
icon: circle-dashed
---

# Tensor : Inertia Constant

{% hint style="info" %}
This page was generated from the source code. It should properly capture what the node does, but still needs to be proofread by a human.
{% endhint %}

> Applies a constant tensor inertia effect based on the seed transform.

#### How It Works

This node creates a fixed rotational resistance for each point in a procedural graph. It uses the original position and orientation of each point as a reference to determine how the tensor should influence its rotation. The tensor's direction is defined by choosing an axis from the point's original orientation, and an optional rotation can be added to fine-tune this direction.

The process works like this:

1. Each point’s original transform is used as a base.
2. A primary axis (like forward, up, or right) is selected to define the tensor’s main direction.
3. An additional rotation can be applied to adjust the tensor's orientation.
4. If enabled, a fixed rotational resistance value is calculated for each point based on this setup.
5. This tensor is then passed to other nodes in the graph that use it to influence how points rotate or move.

This approach ensures consistent and predictable rotational behavior across all points, making it easy to control how they respond to forces or animations.

#### Configuration

<details>

<summary><strong>Axis</strong><br><em>Defines the primary direction of the tensor's axis.</em></summary>

Controls which direction from the point’s original orientation is used to define the tensor’s main axis.

**Values**:

* **Forward**: Uses the X+ axis.
* **Backward**: Uses the X- axis.
* **Right**: Uses the Y+ axis.
* **Left**: Uses the Y- axis.
* **Up**: Uses the Z+ axis.
* **Down**: Uses the Z- axis.

</details>

<details>

<summary><strong>Offset</strong><br><em>Applies an additional rotation to the tensor's orientation.</em></summary>

Adds a rotational adjustment to the tensor’s direction, allowing for more precise control over how it influences point behavior.

</details>

<details>

<summary><strong>bSetInertiaOnce</strong><br><em>If enabled, will set a constant per-point inertia based on the original point transform.</em></summary>

When enabled, the node calculates and stores a fixed rotational resistance value for each point using its original orientation. When disabled, the resistance is recalculated during processing.

</details>

<details>

<summary><strong>TensorWeight</strong><br><em>Controls how much influence this tensor has in weighted operations.</em></summary>

Determines how strongly this tensor affects other tensors when multiple are combined in a weighted average calculation.

</details>

<details>

<summary><strong>Potency</strong><br><em>Defines the strength of the tensor's effect.</em></summary>

Controls how much influence the tensor has on point behavior, such as rotation or movement.

</details>

#### Usage Example

Use this node to make points rotate around a fixed axis with a consistent pull. For example, you could align the tensor along the Z-axis and add a 45-degree twist to make all points rotate in a similar way. Set Axis to "Up" and Offset to (0, 0, 45) to achieve this effect.

#### Notes

* The effect is applied per-point using its original orientation.
* This node works best when used with other tensor operations in a graph.
* Enabling `bSetInertiaOnce` can improve performance for static scenarios where the rotational resistance doesn't need to change.
