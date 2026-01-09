---
description: 'In editor :: PCGEx | Path : Subdivide'
icon: circle
---

# Subdivide

{% hint style="info" %}
### AI-generated page -- to be reviewed

While not 100% accurate, it should properly capture what the node/factory does. It stills needs to be proofread by a human.
{% endhint %}

> Subdivide path segments into smaller segments.

### Overview

This node allows you to break down existing path segments into smaller, more detailed segments. It's useful for creating smoother curves, adding more geometry for visual detail, or preparing paths for further processing that requires finer granularity. You can control how many subdivisions are created based on distance, count, or Manhattan distance between points.

{% hint style="info" %}
This node modifies path data by inserting new points along existing segments, increasing the total number of points in your paths.
{% endhint %}

<details>

<summary>Inputs</summary>

* **Main Input** (Default): Accepts point data representing paths with segments to be subdivided.

</details>

<details>

<summary>Outputs</summary>

* **Main Output** (Default): Modified point data with subdivided path segments.
* **Additional Outputs**: Optionally flags new points or writes alpha values for blending.

</details>

### Properties Overview

Controls how the subdivision is performed and what additional data to generate.

***

#### Subdivision Settings

Determines how many subdivisions are created per segment.

**Subdivide Method**

_Controls the method used to determine how many subdivisions are made._

* **Distance**: Subdivisions are based on a fixed distance between points.
* **Count**: A fixed number of subdivisions is applied to each segment.
* **Manhattan**: Uses Manhattan distance to compute subdivisions, which results in a value between 0 and 2.

**Amount Input**

_Controls whether the subdivision amount is defined by a constant or an attribute._

* When set to **Constant**, you define a fixed value for the subdivision method.
* When set to **Attribute**, you specify an attribute from the input data that defines the subdivision amount per segment.

**Distance**

_The distance between each new point when using the "Distance" subdivision mode._

* Affects how many points are inserted along each segment.
* Higher values result in fewer subdivisions.
* Minimum value is 0.1.

**Count**

_The number of subdivisions to apply when using the "Count" subdivision mode._

* Defines a fixed number of new points per segment.
* Minimum value is 1.

**Subdivision Amount (Attribute)**

_The attribute used for defining subdivision values when using "Attribute" input mode._

* The attribute must be present on the input data.
* Values are interpreted based on the selected subdivision method.

**Redistribute Evenly**

_When enabled, evenly distributes subdivision points along each segment._

* Ensures that subdivision points are spaced uniformly.
* Only applies when using Distance-based subdivision.

**Manhattan Details**

_Configuration for Manhattan-based subdivision._

* Controls how the number of subdivisions is calculated using Manhattan distance.
* Applies only when "Manhattan" subdivision mode is selected.

***

#### Blending Settings

Controls how to blend data from original points to new subdivided points.

**Blending Factory**

_The blending factory used to interpolate or transfer data between original and subdivided points._

* Allows for smooth transitions of attributes like scale, rotation, or color.
* If not set, no blending is performed.

***

#### Additional Outputs

Controls optional flags and alpha values written to the output points.

**Flag Sub Points**

_When enabled, marks new subdivision points with a flag attribute._

* Creates a boolean attribute on each new point.
* Useful for identifying which points were generated during subdivision.

**Sub Point Flag Name**

_Name of the boolean attribute used to mark subdivision points._

* Default is "IsSubPoint".
* Must be unique and not conflict with existing attributes.

**Write Alpha**

_When enabled, writes an alpha value to each new point._

* Allows for interpolation or blending based on position along the original segment.
* Useful for effects like fading or gradient transitions.

**Alpha Attribute Name**

_Name of the attribute used to store alpha values._

* Default is "Alpha".
* Must be unique and not conflict with existing attributes.

**Default Alpha**

_The default alpha value assigned to new points._

* Used when no attribute is provided or when blending is disabled.
* Typically ranges from 0 (fully transparent) to 1 (fully opaque).
