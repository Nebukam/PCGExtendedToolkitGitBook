---
description: 'In editor :: PCGEx | Spline to Path'
icon: circle
---

# Spline to Path

{% hint style="danger" %}
This documentation has been AI-generated from the source code and may not be 100% accurate.
{% endhint %}

> Turns splines into paths for further processing.

### Overview

This node converts spline data into path data, making it possible to work with spline geometry as a series of points that can be processed by other PCG nodes. It's particularly useful when you want to sample or manipulate the shape of splines using point-based operations.

The node supports various options for how to process the input splines and what attributes to write back to the output points, such as tangent information, point type, and length along the spline.

{% hint style="info" %}
This node works on spline inputs and outputs path data. It's ideal for converting spline-based geometry into point-based workflows.
{% endhint %}

<details>

<summary>Inputs</summary>

* **Splines** (Optional): Input splines to convert to paths. If no input is provided, the node will not process any data.

</details>

<details>

<summary>Outputs</summary>

* **Default Output**: The resulting path data, with points sampled from the input splines and optional attributes written to each point.

</details>

### Properties Overview

Controls how splines are converted into paths and what additional data is written to the output points.

***

#### Sampling Settings

Determines which splines are processed and how they're sampled.

**Sample Inputs**

_Controls which spline types to process._

* **All**: Process all input splines.
* **Closed loops only**: Only process closed-loop splines (e.g., circles).
* **Open lines only**: Only process open-line splines (e.g., curves that don't loop back).

**Write Arrive Tangent**

_When enabled, writes the arrive tangent of each point to an attribute._

**Arrive Tangent Attribute Name**

_Name of the FVector attribute where arrive tangents are written._

**Write Leave Tangent**

_When enabled, writes the leave tangent of each point to an attribute._

**Leave Tangent Attribute Name**

_Name of the FVector attribute where leave tangents are written._

**Write Length at Point**

_When enabled, writes the cumulative length along the spline up to each point._

**Length at Point Attribute Name**

_Name of the double attribute where lengths are written._

**Write Alpha**

_When enabled, writes normalized alpha values (0 to 1) representing position along the spline._

**Alpha Attribute Name**

_Name of the double attribute where alpha values are written._

**Write Point Type**

_When enabled, writes point type information (linear, curve, etc.) to an attribute._

**Point Type Attribute Name**

_Name of the int32 attribute where point types are written._

***

#### Tagging Settings

Controls how tags from input splines are handled.

**Tags to Data**

_Determines how spline tags are copied to output data._

* **Do Nothing**: No tag copying occurs.
* **To @Data**: Copies tags to the @Data domain attributes.
* **Attribute**: Copies tags to element domain attributes.

**Tag Forwarding**

_List of tags to forward from input splines to output points._

***

#### Carry Over Settings

Controls how other properties from the input splines are carried over to the output paths.

**Carry Over Settings**

_Controls which additional spline properties are copied to the output path points._

### Notes

* This node is ideal for converting spline-based geometry into point-based workflows for further processing.
* Tangent attributes can be used in downstream nodes that require orientation information, such as rotation or alignment operations.
* The alpha attribute is useful for interpolation-based operations along the length of a spline.
* When working with closed splines, consider using "Closed loops only" sampling to avoid unexpected results.
* Tag forwarding allows you to preserve metadata from the original splines, which can be used for filtering or grouping in later steps.
