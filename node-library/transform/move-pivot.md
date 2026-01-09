---
description: 'In editor :: PCGEx | Move Pivot'
icon: circle
---

# Move Pivot

{% hint style="info" %}
### AI-generated page -- to be reviewed

While not 100% accurate, it should properly capture what the node/factory does. It stills needs to be proofread by a human.
{% endhint %}

> Move the pivot point of points relative to their bounds.

### Overview

This node allows you to shift the pivot point of point data relative to its bounding volume. Instead of moving the actual points, it adjusts where the center point (pivot) is located for each point, which can be useful for transformations, alignment, or visual positioning in downstream nodes.

{% hint style="info" %}
The pivot movement does not change the position of the points themselves; it only modifies how they are oriented or aligned relative to their bounding box.
{% endhint %}

<details>

<summary>Inputs</summary>

* **Default Input** (Required): Point data to modify.

</details>

<details>

<summary>Outputs</summary>

* **Default Output** (Required): Modified point data with updated pivot positions.

</details>

### Properties Overview

Controls how the pivot is moved relative to the bounds of each point.

***

#### Settings

Adjusts where the pivot point is positioned in relation to the point's bounds.

**UVW**

_Controls the relative offset of the pivot along the X, Y, and Z axes._

* Specifies how much to shift the pivot along each axis, using normalized values between 0 and 1.
* For example, setting U=0.5, V=0.5, W=0.5 moves the pivot to the center of the bounds.
* Values outside the 0–1 range are valid and can move the pivot outside the bounds.

**Values**:

* **Constant**: Use a fixed value for each axis.
* **Attribute**: Read values from an attribute on the input points.

**Bounds Reference**

_Selects which bounds to use when calculating the pivot offset._

* Determines whether to base the offset calculation on scaled, density-based, or raw bounds.
* For example, using "Scaled Bounds" will consider any scale applied to the point before computing the pivot shift.

**Values**:

* **Scaled Bounds**: Use the scaled bounds of the point.
* **Density Bounds**: Use bounds adjusted by density and steepness.
* **Bounds**: Use the original unscaled bounds.
* **Center**: Use a tiny size 1 box centered at the point's location.
