---
description: 'In editor :: PCGEx | Tensor : Spin'
icon: circle-dashed
---

# Tensor : Spin

{% hint style="info" %}
This page was generated from the source code. It should properly capture what the node does, but still needs to be proofread by a human.
{% endhint %}

> Creates a tensor that represents a spin or rotational force around a specified axis.

#### How It Works

This node generates a rotational tensor for each input point based on a selected axis. For every point, it calculates how much spin should be applied and in which direction. The spin is determined by:

1. Choosing whether the rotation axis is fixed or varies per point.
2. If using a fixed axis, it applies the same spin direction to all points.
3. If using a varying axis, it reads the spin direction from an attribute on each point.
4. Applying the spin strength and orientation based on the selected transform mode (world space or local space).
5. The resulting tensor can then be used by other nodes to apply rotational effects.

This process allows for flexible control over how rotation is applied — whether it's consistent across all points or customized per point.

#### Configuration

<details>

<summary><strong>Axis Input</strong><br><em>Direction type.</em></summary>

Controls whether the spin axis is defined by a constant value or read from an attribute.

**Values**:

* **Constant**: Uses the fixed axis specified in the "Axis" setting.
* **Attribute**: Reads the axis from a point attribute, allowing per-point variation.

</details>

<details>

<summary><strong>Axis (Attr)</strong><br><em>Fetch the direction from a local attribute.</em></summary>

The name of the attribute to read the spin axis from. Only visible when Axis Input is set to Attribute.

</details>

<details>

<summary><strong>Axis</strong><br><em>Direction axis, read from the input points' transform.</em></summary>

The fixed axis used for spinning when Axis Input is set to Constant.

**Values**:

* **Forward**: X+ direction
* **Backward**: X- direction
* **Right**: Y+ direction
* **Left**: Y- direction
* **Up**: Z+ direction
* **Down**: Z- direction

</details>

<details>

<summary><strong>Axis Transform</strong><br><em>Whether the direction is absolute or should be transformed by the owner' transform.</em></summary>

Controls whether the spin axis is interpreted in world space or local space.

**Values**:

* **Absolute**: The axis is applied in world space, ignoring the point's orientation.
* **Relative**: The axis is applied relative to the point’s local transform.

</details>

{% hint style="info" %}
Connects to \*\*Tensor Point Subnode\*\* subnodes.
{% endhint %}

#### Usage Example

1. Create a set of points in a grid.
2. Add a "Tensor : Spin" node and configure it to spin around the Up axis.
3. Connect this tensor to a force or transformation node that applies rotational effects.
4. The points will be influenced by the spin, creating a swirling or spiral-like motion.

#### Notes

* The spin effect is applied per point, so different axes can be used for different points if using attribute-based input.
* This node works best when combined with other tensor-consuming nodes like force or transform processors.
* The axis definition and transform mode allow for flexible control over how the spin is applied in space.
