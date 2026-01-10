---
description: 'In editor :: PCGEx | Path : Offset'
icon: circle
---

# Offset

{% hint style="success" %}
Consider the more robust [clipper2-offset.md](clipper2/clipper2-offset.md "mention")
{% endhint %}

{% hint style="info" %}
This page was generated from the source code. It should properly capture what the node does, but still needs to be proofread by a human.
{% endhint %}

> Shifts path points along their normal or binormal direction to create parallel paths or modify existing shapes.

#### How It Works

This node moves each point in a path along a specific direction—either its normal, binormal, or a custom vector. The amount of movement is determined by a fixed value or an attribute that varies per point. For each point, the system calculates where it should be moved based on its neighbors to keep the path smooth and consistent.

When paths have sharp turns, special adjustments are made:

* **Auto Smooth**: Automatically softens tight angles.
* **Custom Smooth**: Lets you define how much smoothing to apply.
* **Mitre**: Prevents overlapping or excessive extension at acute angles.

If cleanup is enabled, it can detect when points have flipped direction during offsetting and optionally collapse sections that self-intersect due to the offset.

#### Configuration

<details>

<summary><strong>Offset Method</strong><br><em>How to compute the offset direction.</em></summary>

Controls how the offset direction is calculated.

**Values**:

* **Slide**: Offset along a normal or binormal vector.
* **Line/Plane**: Uses line-plane intersection for more complex offset behaviors.

</details>

<details>

<summary><strong>Offset Input</strong><br><em>Whether to use a constant or attribute value for the offset.</em></summary>

Controls whether the offset is defined by a fixed number or read from an attribute.

**Values**:

* **Constant**: Use the value in the "Offset" setting.
* **Attribute**: Read the offset size from a point attribute.

</details>

<details>

<summary><strong>Offset</strong><br><em>Distance to offset points.</em></summary>

The amount by which to shift each point. If using an attribute, this acts as a multiplier.

</details>

<details>

<summary><strong>Apply Point Scale To Offset</strong><br><em>Scales offset direction &#x26; distance using point scale.</em></summary>

When enabled, the offset is scaled based on the point's scale property, allowing for dynamic adjustments based on size.

</details>

<details>

<summary><strong>Up Vector</strong><br><em>Up vector used to calculate Offset direction.</em></summary>

Defines the world-space up vector used in calculations when computing normal or binormal directions.

</details>

<details>

<summary><strong>Direction Type</strong><br><em>Type of arithmetic path point offset direction.</em></summary>

Controls whether the direction is constant or read from an attribute.

**Values**:

* **Constant**: Use the "Direction" setting.
* **Attribute**: Read the direction vector from a point attribute.

</details>

<details>

<summary><strong>Direction</strong><br><em>Type of arithmetic path point offset direction.</em></summary>

The type of normal or binormal to use when calculating the offset direction. Only used if "Offset Method" is "Slide".

**Values**:

* **Normal**: Use the path's normal vector.
* **Binormal**: Use the path's binormal vector.
* **Average Normal**: Use an averaged normal from neighboring points.

</details>

<details>

<summary><strong>Invert Direction</strong><br><em>Inverts offset direction.</em></summary>

When enabled, reverses the direction of the offset. This is useful for consistent behavior regardless of sign in the offset value.

</details>

<details>

<summary><strong>Adjustment</strong><br><em>Adjust aspect in tight angles.</em></summary>

Controls how to handle sharp turns or tight angles during offsetting.

**Values**:

* **Raw**: No adjustment.
* **Custom Smooth**: Apply a custom smoothing factor.
* **Auto Smooth**: Automatically smooth based on angle.
* **Mitre**: Adjust for acute angles to prevent overlapping.

</details>

<details>

<summary><strong>Adjustment Scale</strong><br><em>Adjust aspect in tight angles.</em></summary>

Used when "Adjustment" is set to "Custom Smooth". Controls the strength of the smoothing effect.

</details>

<details>

<summary><strong>Mitre Limit</strong><br><em>Offset size.</em></summary>

Used when "Adjustment" is set to "Mitre". Defines how far the offset extends at acute angles.

</details>

<details>

<summary><strong>Cleanup Mode</strong><br><em>Whether to flag points that have been flipped during the offset.</em></summary>

Controls post-processing cleanup behavior after offsetting.

**Values**:

* **None**: No cleanup.
* **Collapse Flipped Segments**: Collapse segments where points were flipped.
* **Collapse Sections (Flipped)**: Remove sections of paths that self-intersect and contain flipped segments.
* **Collapse Sections**: Remove sections of paths that self-intersect.

</details>

<details>

<summary><strong>Intersection Tolerance</strong><br><em>Tolerance to consider valid path segments as overlapping.</em></summary>

Used during cleanup to determine how close two segments must be to be considered overlapping.

</details>

<details>

<summary><strong>Flag Mutated Points</strong><br><em>Attempt to adjust offset on mutated edges.</em></summary>

When enabled, attempts to flag points that were modified due to offsetting behavior.

</details>

<details>

<summary><strong>Mutated Attribute Name</strong><br><em>Name of the 'bool' attribute to flag the nodes that are the result of a mutation.</em></summary>

The name of the boolean attribute used to mark mutated points if "Flag Mutated Points" is enabled.

</details>

<details>

<summary><strong>Flag Flipped Points</strong><br><em>Whether to flag points that have been flipped during the offset.</em></summary>

When enabled, marks points that were flipped during offsetting with a boolean attribute.

</details>

<details>

<summary><strong>Flipped Attribute Name</strong><br><em>Name of the 'bool' attribute to flag the points that are flipped.</em></summary>

The name of the boolean attribute used to mark flipped points if "Flag Flipped Points" is enabled.

</details>
