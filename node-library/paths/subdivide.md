---
description: 'In editor :: PCGEx | Path : Subdivide'
icon: circle
---

# Subdivide

{% hint style="warning" %}
This page was generated from the source code. It captures what the node does, but still needs some serious  proofreading.
{% endhint %}

> Breaks path segments into smaller, more detailed segments.

#### Overview

The Path : Subdivide node splits existing path segments into smaller parts. This is useful for creating smoother paths, adding more control points for further processing, or preparing paths for visual detail enhancement. You can define how many subdivisions are created per segment using different methods such as fixed distance, fixed count, or Manhattan-based spacing.

This node works on path data and outputs modified paths with additional intermediate points along the original segments. You can also configure it to add flags or alpha values to these new subdivision points for further use in downstream nodes.

{% hint style="info" %}
Connects to **Path** processing pins. Subnode: Blending
{% endhint %}

#### How It Works

The node takes each segment of a path and breaks it down based on the selected method. With "Distance", it calculates how many subdivisions are needed to keep segments under a specified length. With "Count", it divides each segment into a fixed number of parts. With "Manhattan", it uses Manhattan distance between points to determine subdivision count, resulting in values typically between 0 and 2.

The node then generates new points along the original path at calculated intervals. These new points are inserted into the output data, and optionally, flags or alpha values can be added to them for downstream processing.

If blending is enabled, it applies a blending operation to the newly created subdivision points, interpolating their properties based on neighboring points in the original path.

#### Inputs

* **Main Input**: Path data containing segments to subdivide.
* **Point Filters (Optional)**: Filter which segments will be subdivided.

#### Outputs

* **Main Output**: Modified paths with subdivided segments.
* **Additional Outputs**:
  * Optional flags on subdivision points if `bFlagSubPoints` is enabled.
  * Optional alpha attribute values if `bWriteAlpha` is enabled.

#### Configuration

<details>

<summary><strong>Subdivide Method</strong><br><em>Reference for computing the blending interpolation point point.</em></summary>

Controls how the number of subdivisions per segment is determined.

**Values**:

* **Distance**: Subdivisions are based on a fixed maximum distance between points.
* **Count**: Each segment is divided into a fixed number of parts.
* **Manhattan**: Subdivisions are computed using Manhattan distance, resulting in values typically between 0 and 2.

</details>

<details>

<summary><strong>Amount Input</strong><br><em>How the subdivision amount is defined.</em></summary>

Determines whether the subdivision amount is a constant value or read from an attribute.

**Values**:

* **Constant**: Use a fixed value for subdivision.
* **Attribute**: Read the subdivision amount from an input attribute.

</details>

<details>

<summary><strong>Distance</strong><br><em>Subdivision distance when using Distance mode.</em></summary>

The maximum distance between points in the subdivided segments. Must be greater than 0.1.

</details>

<details>

<summary><strong>Count</strong><br><em>Number of subdivisions per segment when using Count mode.</em></summary>

The fixed number of parts each segment is divided into. Must be at least 1.

</details>

<details>

<summary><strong>Subdivision Amount Attribute</strong><br><em>Attribute to read subdivision amount from.</em></summary>

When `AmountInput` is set to "Attribute", this defines the attribute that holds the subdivision count per segment.

</details>

<details>

<summary><strong>Redistribute Evenly</strong><br><em>When enabled, evenly redistributes subdivision points along the segment length.</em></summary>

When enabled, ensures that subdivision points are distributed evenly along the segment, rather than being placed at fixed intervals based on distance or count.

</details>

<details>

<summary><strong>Manhattan Details</strong><br><em>Settings for Manhattan-based subdivision.</em></summary>

Controls how Manhattan distance is used to determine subdivision count when `SubdivideMethod` is set to "Manhattan".

</details>

<details>

<summary><strong>Blending Subnode</strong><br><em>Optional blending operation applied to subdivision points.</em></summary>

A subnode that defines how to blend properties of subdivision points with their neighbors.

</details>

<details>

<summary><strong>Flag Sub Points</strong><br><em>When enabled, flags subdivision points in the output.</em></summary>

When enabled, adds a boolean flag attribute to subdivision points to identify them as such.

</details>

<details>

<summary><strong>Sub Point Flag Name</strong><br><em>Name of the flag attribute for subdivision points.</em></summary>

The name of the boolean attribute that will be added to subdivision points if `bFlagSubPoints` is enabled.

</details>

<details>

<summary><strong>Write Alpha</strong><br><em>When enabled, writes an alpha value to subdivision points.</em></summary>

When enabled, adds a numeric alpha attribute to subdivision points for interpolation or other uses.

</details>

<details>

<summary><strong>Alpha Attribute Name</strong><br><em>Name of the alpha attribute to write.</em></summary>

The name of the numeric attribute that will be added to subdivision points if `bWriteAlpha` is enabled.

</details>

<details>

<summary><strong>Default Alpha</strong><br><em>Default value for the alpha attribute.</em></summary>

The default value assigned to the alpha attribute on subdivision points.

</details>

#### Usage Example

A designer wants to create a detailed path for a character's movement that includes more control points for smoother animation. They use this node with "Count" mode and set the count to 5, so each segment of their path is divided into 5 smaller segments. They also enable "Flag Sub Points" to tag these new points for later filtering or visualization.

#### Notes

* The node modifies path data in-place by inserting new points.
* Blending operations can be used to interpolate properties like position, rotation, or scale across subdivision points.
* Using "Manhattan" mode is useful for grid-based pathing where you want subdivisions based on spatial relationships rather than straight-line distances.
* Enabling "Redistribute Evenly" ensures that subdivision points are placed uniformly along the segment, which can improve visual consistency in certain scenarios.
