---
description: 'In editor :: PCGEx | Move Pivot'
icon: circle
---

# Move Pivot

{% hint style="info" %}
This page was generated from the source code. It should properly capture what the node does, but still needs to be proofread by a human.
{% endhint %}

> Moves the pivot point of points relative to their bounding box.

#### How It Works

The Move Pivot node adjusts where the center point (pivot) of each point is located within its local space. It calculates the boundaries of each point's shape and then shifts the pivot position based on the UVW values you provide. These values determine how far to move the pivot along the X, Y, and Z axes relative to the size of the bounding box.

For example:

* Setting UVW to (0.5, 0.5, 0.5) centers the pivot within the shape.
* Setting UVW to (1, 0, 0) moves the pivot to the right edge of the shape along the X-axis.
* Setting UVW to (-0.5, 0, 0) moves the pivot to the left by half the width of the shape.

This adjustment happens in local space, meaning it only changes how each point is oriented or transformed locally and doesn't affect its position in the world.

#### Configuration

<details>

<summary><strong>UVW</strong><br><em>Defines how to offset the pivot point relative to the bounds.</em></summary>

Controls the relative shift of the pivot along each axis:

* **U** (X-axis): Shifts the pivot left or right.
* **V** (Y-axis): Shifts the pivot forward or backward.
* **W** (Z-axis): Shifts the pivot up or down.

Values are interpreted as fractions of the bounding box size. For example, a value of 0.5 moves the pivot to the center along that axis; -1.0 moves it to the opposite side.

</details>

#### Usage Example

Imagine you're generating a set of trees and want all tree trunks to be aligned at their base rather than centered. You could use this node with UVW = (0, 0, 0) to move the pivot point to the bottom of each tree's bounding box, ensuring that when you scale or rotate them, they align properly with the ground.

#### Notes

* The pivot shift is applied in local space, so it does not affect world positions.
* Using negative UVW values can push the pivot outside the bounds, which may be useful for certain alignment effects.
* This node works best on points that have meaningful bounding box data; otherwise, behavior might be unpredictable.
