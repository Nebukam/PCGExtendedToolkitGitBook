---
description: 'In editor :: PCGEx | Path : Orient'
icon: circle
---

# Orient

{% hint style="warning" %}
This page was generated from the source code. It captures what the node does, but still needs some serious  proofreading.
{% endhint %}

> Orient path points along their direction.

#### Overview

The Path : Orient node adjusts the orientation of each point along a path so that it aligns with the path's direction. This is useful for ensuring that objects placed along a path (like trees on a road or buildings along a street) are properly aligned with the path’s flow, rather than facing a fixed direction.

It can either apply the calculated orientation directly to the point's transform or output the orientation as an attribute for further use in downstream nodes. This node is especially helpful when working with procedural paths that need to maintain consistent alignment with their geometry.

{% hint style="info" %}
Connects to **Path** input pins.
{% endhint %}

#### How It Works

This node calculates a rotation for each point along the path based on its position relative to neighboring points. It determines the direction from one point to the next and uses that to compute an orientation vector.

For each point:

1. It identifies the previous and next points in the path.
2. It computes a forward vector using the difference between the next and current point positions.
3. It calculates an up vector based on the selected UpAxis setting (e.g., Up = Z+).
4. Using these vectors, it constructs a rotation that aligns the OrientAxis with the path direction.
5. If enabled, it also computes the dot product of the previous and next directions to capture how sharply the path turns at this point.

The resulting orientation can be applied directly to the point's transform or stored as an attribute for later use.

#### Configuration

<details>

<summary><strong>OrientAxis</strong><br><em>Which axis of the point should be aligned with the path direction.</em></summary>

Controls which local axis of each point (Forward, Backward, Right, Left, Up, Down) will align with the path’s direction.

**Values**:

* **Forward**: X+ axis
* **Backward**: X- axis
* **Right**: Y+ axis
* **Left**: Y- axis
* **Up**: Z+ axis
* **Down**: Z- axis

</details>

<details>

<summary><strong>UpAxis</strong><br><em>Which axis should be considered as up for the orientation calculation.</em></summary>

Defines which direction is considered "up" when computing the orientation. This helps determine the roll and pitch of the point's transform.

**Values**:

* **Forward**: X+ axis
* **Backward**: X- axis
* **Right**: Y+ axis
* **Left**: Y- axis
* **Up**: Z+ axis
* **Down**: Z- axis

</details>

<details>

<summary><strong>Orientation</strong><br><em>Subnode defining the orientation behavior.</em></summary>

A subnode that defines how the orientation is calculated. This allows for custom transformations or overrides to be applied per point.

</details>

<details>

<summary><strong>bFlipDirection</strong><br><em>Whether to flip the orientation direction by default.</em></summary>

When enabled, the orientation will be flipped relative to the path direction. This can be overridden per-point using filters.

</details>

<details>

<summary><strong>Output</strong><br><em>How the calculated orientation is applied or stored.</em></summary>

Controls whether the orientation is applied directly to the point or output as an attribute.

**Values**:

* **Apply to point**: Applies the transform to the point's rotation.
* **Output to attribute**: Stores the transform in a new attribute.

</details>

<details>

<summary><strong>OutputAttribute</strong><br><em>Name of the attribute where the orientation is stored.</em></summary>

The name of the attribute that will store the calculated orientation when "Output to attribute" is selected.

</details>

<details>

<summary><strong>bOutputDot</strong><br><em>Whether to output the dot product between previous and next points.</em></summary>

When enabled, a dot product value representing how sharply the path turns at each point will be stored as an attribute.

</details>

<details>

<summary><strong>DotAttribute</strong><br><em>Name of the attribute where the dot product is stored.</em></summary>

The name of the attribute that will store the computed dot product when enabled.

</details>

#### Usage Example

A path represents a winding mountain road. You want to place trees along the road such that they face the direction of the road. Connect your path data to this node, set OrientAxis to Forward and UpAxis to Up. Then, set Output to Apply to point so that each tree point is rotated to match the road's direction.

#### Notes

* The node works best on paths with smooth transitions between points.
* Using "Output to attribute" allows for more complex downstream processing or animation.
* Dot product output can be used to detect sharp turns in a path, which may be useful for terrain or lighting effects.
