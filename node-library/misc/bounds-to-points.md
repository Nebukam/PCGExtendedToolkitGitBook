---
description: 'In editor :: PCGEx | Bounds to Points'
icon: circle
---

# Bounds to Points

{% hint style="warning" %}
## AI-generated page -- to be reviewed 
While not 100% accurate, it should properly capture what the node/factory does. It stills needs to be proofread by a human.
{% endhint %}

> Generate a point on the surface of the bounds.

### Overview

This node creates new points positioned on the surface of input bounds, allowing you to place procedural elements along the edges or faces of bounding volumes. It's useful for generating placement points for foliage, particles, or other procedural assets that need to align with object boundaries.

The node can generate multiple points per input point using UVW coordinates, and supports symmetry operations to create mirrored placements. You can also scale or modify the bounds before generating points.

{% hint style="info" %}
This node works on bounds data and generates new points based on those bounds. It's commonly used in conjunction with other nodes that compute or modify bounds.
{% endhint %}

<details>

<summary>Inputs</summary>

* **Main Input** (Point Data): Points with bounds information
* **Optional Filters**: Point filters can be applied to determine which input points are processed

</details>

<details>

<summary>Outputs</summary>

* **Main Output** (Point Data): Generated points positioned on the surface of bounds
* **Per Point Data** (when enabled): Additional point collections per generated point

</details>

### Properties Overview

Controls how points are generated and positioned.

***

#### Generation Settings

Controls core behavior for point generation.

**Generate Per Point Data**

_When enabled, creates additional point data collections for each generated point._

* Creates separate output data for each new point
* Useful when you need to attach unique attributes or data per generated point

**Values**:

* **Disabled**: Each generated point is a simple point with no extra data
* **Enabled**: Each generated point includes its own data collection

**Symmetry Axis**

_When enabled, generates points in mirrored fashion along the selected axis._

* Creates symmetric point placements across the chosen axis
* Useful for creating balanced or mirrored procedural layouts
* **Values**:
  * **None**: No symmetry is applied
  * **X**: Points are mirrored along the X-axis
  * **Y**: Points are mirrored along the Y-axis
  * **Z**: Points are mirrored along the Z-axis

**UVW Coordinates**

_Specifies how to map points onto the surface using U, V, W coordinates._

* Controls where on the bounds surface each point is placed
* U, V, and W values range from 0 to 1, representing normalized positions
* **U**: Horizontal position (left to right)
* **V**: Vertical position (bottom to top)
* **W**: Depth position (back to front)

**Set Extents**

_When enabled, defines the size of the generated point._

* Controls how large each generated point is in 3D space
* **Values**:
  * **Disabled**: Uses default point size
  * **Enabled**: Sets custom extents

**Extents**

_Sets the dimensions of the generated point._

* Defines the width, height, and depth of each point
* Values are in world units
* Example: Setting (1.0, 2.0, 0.5) creates points that are 1 unit wide, 2 units tall, and 0.5 units deep

**Multiply Extents**

_When enabled, multiplies the existing bounds by the extents value._

* Treats the extents as a multiplier rather than absolute size
* Useful for scaling bounds while maintaining proportions
* **Values**:
  * **Disabled**: Extents are treated as absolute values
  * **Enabled**: Extents multiply existing bounds

**Set Scale**

_When enabled, scales the generated point._

* Controls how much to scale each generated point
* **Values**:
  * **Disabled**: Uses default scaling
  * **Enabled**: Applies custom scaling

**Scale**

_Scales the generated point along each axis._

* Multiplies the size of each point by these values
* Example: Setting (2.0, 1.0, 1.0) doubles the width while keeping height and depth unchanged

**Point Attributes To Output Tags**

_Controls which point attributes are converted to tags on the output._

* Allows you to forward specific point data as tags
* Useful for passing through attribute information to downstream nodes
* Only active when "Generate Per Point Data" is enabled

### Notes

* This node works with bounds data, so it's often used after nodes that compute or modify bounds
* The UVW coordinates determine where on the surface each point is placed (0 = back/left/bottom, 1 = front/right/top)
* Symmetry can be combined with UVW coordinates to create complex mirrored patterns
* When "Generate Per Point Data" is enabled, each generated point gets its own data collection for additional processing
* For best performance with large datasets, consider using the "Bulk Init Data" option in node settings
