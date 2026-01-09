---
description: 'In editor :: PCGEx | Create Spline'
icon: circle
---

# Create Spline

{% hint style="warning" %}
## AI-generated page - To be reviewed. 
While not 100% accurante, it should properly capture what it does. It stills needs to be reviewed and proofread by a human.
{% endhint %}

> Create splines from input points.

### Overview

This node takes a collection of input points and converts them into spline data. It's useful for generating curves, paths, or mesh guides that follow a specific shape defined by your point data. You can control how the spline is constructed, including whether it's closed or open, what type of curve segments to use, and how tangents are calculated.

{% hint style="info" %}
The output splines can be used as input for other nodes like "Create Spline Mesh" or "Create Static Mesh" to generate visual geometry.
{% endhint %}

<details>

<summary>Inputs</summary>

* **Default Input** (Multiple): Points that define the spline shape.

</details>

<details>

<summary>Outputs</summary>

* **Splines**: Output splines generated from input points.

</details>

### Properties Overview

Controls how the splines are created and what data is generated.

***

#### General Settings

Controls basic behavior and output options for the spline creation.

**Mode**

_Controls whether the node outputs spline data only or also creates a spline actor._

* **Create Data Only**: Outputs only the spline data.
* **Create Actor + Data**: Creates both a spline actor in the world and spline data.

**Default Point Type**

_Sets the default type of point to use for all spline points._

* **Linear (0)**: Straight lines between points.
* **Curve (1)**: Smooth curves with automatic tangents.
* **Constant (2)**: Constant interpolation.
* **CurveClamped (3)**: Smooth curves with clamped tangents.

**Apply Custom Point Type**

_When enabled, allows you to use an attribute to define the point type per point._

* If enabled, a custom attribute named in "Point Type Attribute" will be used to determine each point's type.
* If disabled, all points use the "Default Point Type".

**Point Type Attribute**

_Name of the attribute that defines the point type for each input point._

* Only used when "Apply Custom Point Type" is enabled.
* Should contain values matching the EPCGExSplinePointType enum.

**Tangents**

_Configures how tangents are calculated for spline points._

* **Arrive Scale Input**: How arrive tangent scale is determined.
  * **Constant**: Use a fixed value.
  * **Attribute**: Read from an attribute.
* **Arrive Scale (Attr)**: Attribute to read arrive tangent scale from.
  * Only visible when "Arrive Scale Input" is set to "Attribute".
* **Leave Scale Input**: How leave tangent scale is determined.
  * **Constant**: Use a fixed value.
  * **Attribute**: Read from an attribute.
* **Leave Scale (Attr)**: Attribute to read leave tangent scale from.
  * Only visible when "Leave Scale Input" is set to "Attribute".
* **Tangent Mode**: How tangents are calculated.
  * **Default**: Uses standard spline tangent calculation.
  * **Custom**: Allows custom tangent calculation.

**Target Actor**

_The actor where the spline will be created._

* Only used when "Mode" is set to "Create Actor + Data".
* If not specified, the node will use the graph's target actor.

**Post Process Function Names**

_List of function names to call on the target actor after spline creation._

* Functions must be parameter-less and have the "CallInEditor" flag enabled.
* Useful for triggering custom logic or updates after spline generation.

**Attachment Rules**

_Configures how the created spline is attached to its parent actor._

* **Location Rule**: How location is handled when attaching.
* **Rotation Rule**: How rotation is handled when attaching.
* **Scale Rule**: How scale is handled when attaching.
* **Weld Simulated Bodies**: Whether to weld simulated bodies together when attaching.

***

#### Deprecated Settings

Settings that are no longer used but remain for compatibility.

**Apply Custom Tangents (Deprecated)**

_This setting is deprecated and has no effect._

**Arrive Tangent Attribute (Deprecated)**

_This setting is deprecated and has no effect._

**Leave Tangent Attribute (Deprecated)**

_This setting is deprecated and has no effect._
