---
description: 'In editor :: PCGEx | Tensor : Flow'
icon: circle-dashed
---

# Tensor : Flow

{% hint style="warning" %}
This page was generated from the source code. It captures what the node does, but still needs some serious  proofreading.
{% endhint %}

> Creates a tensor that represents a vector/flow field based on point directions.

#### How It Works

This node builds a directional flow field by assigning a consistent direction vector to each input point. The direction can be set in two ways:

* **Constant mode**: All points use the same fixed axis (such as Forward, Up, etc.)
* **Attribute mode**: Each point uses a direction value from a specified attribute on the input points

When using attribute mode, you can choose whether to invert the direction for opposite effect. The node also supports both absolute and relative coordinate modes when reading directions from attributes. In relative mode, the direction is transformed by the owning node's local space, while in absolute mode, it uses world-space directions.

The resulting tensor field defines how other nodes in your procedural graph will process or transform the input points based on this directional influence.

#### Configuration

<details>

<summary><strong>Direction Input</strong><br><em>Direction type.</em></summary>

Controls whether the direction is defined by a constant axis or read from an attribute on the input points.

**Values**:

* **Constant**: Use a fixed axis (Forward, Up, etc.) for all points.
* **Attribute**: Read the direction from a point attribute.

</details>

<details>

<summary><strong>Direction (Attr)</strong><br><em>Fetch the direction from a local attribute.</em></summary>

The name of the attribute to read the direction from when "Direction Input" is set to "Attribute".

</details>

<details>

<summary><strong>└─ Invert</strong><br><em>Whether to invert the direction.</em></summary>

When enabled, reverses the direction vector read from the attribute.

</details>

<details>

<summary><strong>Direction</strong><br><em>Direction axis, read from the input points' transform.</em></summary>

The fixed axis used when "Direction Input" is set to "Constant". This defines the default orientation for all points.

**Values**:

* **Forward**: X+ direction
* **Backward**: X- direction
* **Right**: Y+ direction
* **Left**: Y- direction
* **Up**: Z+ direction
* **Down**: Z- direction

</details>

<details>

<summary><strong>Direction Transform</strong><br><em>Whether the direction is absolute or should be transformed by the owner' transform.</em></summary>

Controls how the direction from an attribute is interpreted.

**Values**:

* **Absolute**: The direction is in world space.
* **Relative**: The direction is relative to the local space of the owning node.

</details>

#### Usage Example

Use this node to define a flow field that guides point movement or influence. For example, you could use it to make points flow along a terrain slope by setting the direction to "Down" and using an attribute that represents surface normals. You can also use it to create directional forces in particle systems or procedural animations.

#### Notes

The tensor created by this node is typically used as input for other nodes like "Tensor : Inertia Constant" or similar effectors that apply forces based on the defined flow field. Connect this node to **Tensor Point Subnode** nodes to define how point data should be influenced by directional fields.
