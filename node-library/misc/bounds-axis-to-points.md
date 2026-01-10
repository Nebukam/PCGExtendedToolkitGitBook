---
description: 'In editor :: PCGEx | Bounds Axis To Points'
icon: circle
---

# Bounds Axis To Points

{% hint style="info" %}
This page was generated from the source code. It should properly capture what the node does, but still needs to be proofread by a human.
{% endhint %}

> Generate two points along a selected axis of a bound.

#### Overview

This node creates two points that define a line segment along one of the axes of a bounding box. The axis is chosen based on criteria such as shortest, longest, or median length, and can be adjusted using constraints like direction or size thresholds. It's useful for visualizing or working with the dimensions of bounds in procedural content generation.

It accepts point data as input and outputs two points per input point that lie along a selected axis of its bounding box. This is helpful when you want to represent the extent or orientation of an object's bounds using simple geometric primitives.

{% hint style="info" %}
Connects to **Point** processing nodes.
{% endhint %}

#### How It Works

This node calculates the bounding box of each input point and selects one of its axes based on priority settings. It then generates two points along that axis, positioned at a specified extent factor (U) from the center of the bound. The selection process can be refined using optional constraints such as direction or size thresholds.

1. For each input point, compute its bounding box using the selected bounds reference.
2. Determine which axis to use based on the **Priority** setting:
   * Shortest: Select the shortest axis
   * Longest: Select the longest axis
   * Median: Select the remaining axis (not shortest or longest)
3. Apply optional constraints if enabled:
   * If **DirectionConstraint** is set, adjust the selected axis to either avoid or favor a static direction.
   * If **SizeConstraint** is set, further refine the axis selection based on its size relative to the threshold.
4. Sort constraint application using **ConstraintsOrder** if both are active.
5. Create two output points along the selected axis at a distance defined by the **U** factor from the center of the bound.
6. Optionally set the extents and scale of the output points.

<details>

<summary>Inputs</summary>

Expects point data as input, with each point representing an object or region whose bounds are used to determine the axis.

</details>

<details>

<summary>Outputs</summary>

Produces two points per input point along a selected axis of its bounding box. These points define a line segment that represents the extent of the bound along that axis.

</details>

#### Configuration

<details>

<summary><strong>bGeneratePerPointData</strong><br><em>Generates a point collections per generated point.</em></summary>

When enabled, each output point will be wrapped in its own collection, useful for further processing or filtering.

</details>

<details>

<summary><strong>BoundsReference</strong><br></summary>

Determines how the bounds of the input points are calculated:

* **Scaled Bounds**: Uses scaled bounds (default)
* **Density Bounds**: Uses density-scaled bounds
* **Bounds**: Uses raw bounds
* **Center**: Uses a tiny size 1 box centered on the point

</details>

<details>

<summary><strong>Priority</strong><br><em>Which initial direction should initially picked.</em></summary>

Sets the primary axis selection rule:

* **Shortest**: Selects the shortest axis of the bound
* **Longest**: Selects the longest axis of the bound
* **Median**: Selects the remaining axis (not shortest or longest)

</details>

<details>

<summary><strong>DirectionConstraint</strong><br><em>Shifts the axis selection based on whether the selected axis points toward or away from a static direction.</em></summary>

Adjusts the axis selection based on a fixed direction:

* **None**: No adjustment
* **Avoid**: Chooses an axis that avoids pointing toward the specified direction
* **Favor**: Chooses an axis that favors pointing toward the specified direction

</details>

<details>

<summary><strong>Direction</strong><br></summary>

The fixed direction used when **DirectionConstraint** is not set to None.

</details>

<details>

<summary><strong>SizeConstraint</strong><br><em>Shifts the axis selection based on whether its size is greater or smaller than a given threshold.</em></summary>

Refines the axis selection based on the axis' size:

* **None**: No adjustment
* **Greater**: Selects an axis that is larger than the threshold
* **Smaller**: Selects an axis that is smaller than the threshold

</details>

<details>

<summary><strong>SizeThreshold</strong><br></summary>

The size threshold used when **SizeConstraint** is not set to None.

</details>

<details>

<summary><strong>ConstraintsOrder</strong><br><em>In which order shifting should be processed, as one is likely to override the other.</em></summary>

Determines which constraint takes precedence if both are active:

* **Size matters more**: Size-based constraint is applied first
* **Direction matters more**: Direction-based constraint is applied first

</details>

<details>

<summary><strong>U</strong><br><em>Extent factor at which the points will be created on the selected world-align axis</em></summary>

Controls how far along the selected axis the output points are placed from the center of the bound. A value of 1 places the points at the full extent of the axis.

</details>

<details>

<summary><strong>bSetExtents</strong><br></summary>

When enabled, sets the extents of each output point to a fixed value.

</details>

<details>

<summary><strong>Extents</strong><br><em>Set the output point' extent to this value</em></summary>

The extent values applied to each output point when **bSetExtents** is enabled.

</details>

<details>

<summary><strong>bSetScale</strong><br></summary>

When enabled, sets the scale of each output point to a fixed value.

</details>

<details>

<summary><strong>Scale</strong><br><em>Set the output point' scale to this value</em></summary>

The scale values applied to each output point when **bSetScale** is enabled.

</details>

<details>

<summary><strong>PointAttributesToOutputTags</strong><br><em>TBD</em></summary>

Defines how to map point attributes to tags in the output data. (TBD)

</details>

#### Usage Example

Use this node to visualize the dimensions of bounds in a scene. For example, you could use it to generate lines that represent the width, height, and depth of objects, helping with layout or alignment tasks.

#### Notes

* The **U** parameter controls how far along the axis the points are placed; values between 0 and 1 place them within the bounds.
* Combining constraints can provide more nuanced control over which axis is selected.
* Output points are useful for creating visualizations, guides, or further procedural operations based on object dimensions.
