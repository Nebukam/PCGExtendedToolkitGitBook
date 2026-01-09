---
description: 'In editor :: PCGEx | Path : Insert'
icon: circle
---

# Insert

{% hint style="danger" %}
This documentation has been AI-generated from the source code and may not be 100% accurate.
{% endhint %}

> Insert nearest points into the path using different methods.

### Overview

This node allows you to insert points from your input data along existing paths. It's useful when you want to add detail or modify a path by incorporating nearby points, such as adding waypoints, terrain features, or other procedural elements directly onto a path.

The node works by finding the closest points in your input data to each segment of the path and inserting them at specific locations. You can control how many points are inserted, whether they're snapped to the path, and what attributes are carried over from the original points.

{% hint style="info" %}
This node modifies paths by adding new points. It does not change the original input points directly.
{% endhint %}

<details>

<summary>Inputs</summary>

* **Main Input** (Required): Path data to modify
* **Points Input** (Optional): Points to insert into the path

</details>

<details>

<summary>Outputs</summary>

* **Main Output**: Modified paths with inserted points

</details>

### Properties Overview

Controls how points are inserted into paths.

***

#### Insertion Settings

Controls how and where points are inserted along the path.

**Snap To Path**

_When enabled, inserted points will be snapped to the closest location on the path. Otherwise, they retain their original position._

* This ensures that inserted points lie exactly on the path geometry
* Useful for creating precise waypoints or terrain features aligned with paths

**Within Range**

_When enabled, only insert points within a specified distance from the path._

* Limits insertion to nearby points only
* Helps avoid inserting distant or irrelevant points

**Range Input Type**

_Determines whether the range is defined as a constant value or read from an attribute._

**Values**:

* **Constant**: Use a fixed numerical value for the range
* **Attribute**: Read the range value from a point attribute

**Range Attribute**

_The name of the attribute to use for the insertion range when using "Attribute" mode._

* Only visible when "Range Input Type" is set to "Attribute"
* Defines how far from the path points can be inserted

**Range Value**

_The maximum distance from the path within which points will be inserted._

* Only visible when "Range Input Type" is set to "Constant"
* Higher values allow more distant points to be inserted
* Example: A value of 50 means only points within 50 units of the path will be considered

***

#### Carry Over Settings

Controls which attributes from the original points are transferred to the inserted points.

**Carry Over Settings**

_Controls how point attributes are carried over when inserting points into paths._

* Defines which attributes from the source points are copied or blended onto the new path points
* Supports various blending modes for smooth transitions between original and inserted data

### Notes

* This node is computationally expensive due to distance calculations for each path segment
* For best performance, limit the number of input points or use a small range value
* Consider using filters to reduce the number of points being processed
* Inserted points maintain their original attributes unless overridden by blending settings
* When "Snap To Path" is enabled, inserted points will always lie exactly on the path geometry
* The node works best when there are relatively few input points compared to the complexity of the paths
* Use "Within Range" to prevent inserting distant points that might disrupt path continuity
