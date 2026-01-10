---
description: 'In editor :: PCGEx | Path : Slide'
icon: circle
---

# Slide

{% hint style="warning" %}
This page was generated from the source code. It captures what the node does, but still needs some serious  proofreading.
{% endhint %}

> Slides points along a path either toward the next or previous point, optionally storing and restoring their original positions.

#### How It Works

The Path : Slide node adjusts the location of points on a path by moving them along the direction of the path. It can move each point toward the next or previous point in the sequence, using either a percentage of the segment length or an absolute distance for how far to slide.

For each point, the node calculates where it should move based on:

1. The direction you choose (toward the next or previous point)
2. How far to slide, defined as either a percentage or a fixed distance
3. Whether to save the original position before moving

If enabled, the node stores the starting position in an attribute so that you can later restore the points to their original locations.

#### Configuration

<details>

<summary><strong>Mode</strong><br><em>Whether to slide or restore position.</em></summary>

Controls whether the node moves points along the path or returns them to their original positions.

**Values**:

* **Slide**: Moves points and optionally stores their original positions.
* **Restore**: Returns points to their stored positions and removes the stored data.

</details>

<details>

<summary><strong>Direction</strong><br><em>Whether to slide toward the next or previous point.</em></summary>

Determines which direction points move along the path.

**Values**:

* **Next**: Moves points toward the next point in the sequence.
* **Previous**: Moves points toward the previous point in the sequence.

</details>

<details>

<summary><strong>AmountMeasure</strong><br><em>Discrete means actual distance, relative means a percentage of the segment length.</em></summary>

Defines how the slide amount is interpreted.

**Values**:

* **Relative**: The input value is treated as a percentage (0 to 1) of the segment length.
* **Discrete**: The input value is treated as an absolute distance in world units.

</details>

<details>

<summary><strong>SlideAmountInput</strong><br><em>Whether to use a constant or attribute for slide amount.</em></summary>

Controls whether the slide amount is defined by a fixed number or read from an attribute on the input points.

**Values**:

* **Constant**: Uses the fixed value in **Slide Amount**.
* **Attribute**: Reads the slide amount from the attribute specified in **Slide Amount (Attr)**.

</details>

<details>

<summary><strong>Slide Amount (Attr)</strong><br><em>Attribute to read slide amount from.</em></summary>

The name of the attribute to read the slide amount from when **SlideAmountInput** is set to **Attribute**.

</details>

<details>

<summary><strong>Slide Amount</strong><br><em>Constant slide amount value.</em></summary>

The fixed value used for sliding when **SlideAmountInput** is set to **Constant**.

</details>

<details>

<summary><strong>bWriteOldPosition</strong><br><em>Whether to store the old position.</em></summary>

When enabled, the node saves the original point positions in an attribute before moving them.

</details>

<details>

<summary><strong>RestorePositionAttributeName</strong><br><em>Attribute to write to or restore from.</em></summary>

The name of the attribute used to store and retrieve the original point positions when sliding or restoring.

</details>

#### Usage Example

You have a path with several points and want to gently slide each point toward the next one by 30% of the segment length. You would:

1. Set **Mode** to **Slide**
2. Set **Direction** to **Next**
3. Set **AmountMeasure** to **Relative**
4. Set **Slide Amount** to `0.3`
5. Enable **bWriteOldPosition**

This results in each point being moved 30% of the way along its segment toward the next point, with original positions stored for potential later restoration.

#### Notes

* The node works on individual paths within a path collection.
* When using relative amounts, values outside the 0–1 range may cause unexpected behavior.
* The **Restore** mode requires that the attribute specified in **RestorePositionAttributeName** exists and contains valid position data.
* Sliding is applied per point, so overlapping or extreme sliding can result in point clustering or self-intersection.
