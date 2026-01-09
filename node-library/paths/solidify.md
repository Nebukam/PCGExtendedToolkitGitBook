---
description: 'In editor :: PCGEx | Path : Solidify'
icon: circle
---

# Solidify

{% hint style="danger" %}
This documentation has been AI-generated from the source code and may not be 100% accurate.
{% endhint %}

> Solidify a path by creating a 3D volume around it using radius values along three axes.

### Overview

This node takes a path and creates a solid 3D shape around it by extending the path points outward in three directions. It's useful for creating walls, roads, or any tubular geometry from a path. The solidification works by taking each point on the path and creating a volume along the segment direction (primary axis), with additional radii for secondary and tertiary axes.

{% hint style="info" %}
The node requires closed paths to fully solidify all points. For open paths, the last point will be skipped unless you enable "Remove Last Point".
{% endhint %}

<details>

<summary>Inputs</summary>

* **Main Input**: Points representing a path
* **Optional Filters**: Point filters can be applied to select which points to process

</details>

<details>

<summary>Outputs</summary>

* **Main Output**: Modified point data with solidified volumes
* **Additional Outputs**: None

</details>

### Properties Overview

Controls how the path is solidified and what shape is created.

***

#### General Settings

Controls core behavior for solidification.

**Remove Last Point**

_When enabled, removes the last point of open paths to ensure all points can be solidified._

* Prevents issues with open paths where the last point cannot be fully processed
* Recommended to enable when working with open paths

**Solidification Order**

_Determines how the three axes are assigned to the path's direction, normal, and binormal._

* **XYZ**: Primary = Segment Direction, Secondary = Path Normal, Tertiary = Binormal
* **ZYX**: Primary = Binormal, Secondary = Path Normal, Tertiary = Segment Direction
* Controls the orientation of the solidification

**Read Order From Attribute**

_When enabled, reads the axis order from a point attribute._

* Allows dynamic axis assignment per point
* Requires a valid integer attribute with values between 0 and 5 (representing EPCGExAxisOrder enum)

**Order Attribute**

_Name of the attribute to read axis order from._

* Only active when "Read Order From Attribute" is enabled
* Should contain integer values representing axis orders

**Order Safety**

_Determines how invalid values in the order attribute are handled._

* **Tile**: Wraps around valid values (0,1,2,3,4,5,0,1,2...)
* **Clamp**: Clamps to valid range (0,1,2,2,2,2...)
* **Ignore**: Uses default axis order when invalid

**Use Construction Mapping**

_When enabled, allows mapping different rotation constructions based on axis order._

* Enables more complex rotation behavior per path segment
* Requires setting up a mapping between axis orders and rotation axes

**Rotation Mapping**

_Map of axis orders to rotation construction axes._

* Only active when "Use Construction Mapping" is enabled
* Defines how rotations are constructed for each axis order

**Rotation Construction**

_Determines which axis is used to construct the point's rotation._

* **X**: Use primary axis (segment direction) for rotation
* **Y**: Use secondary axis (path normal) for rotation
* **Z**: Use tertiary axis (binormal) for rotation
* Only active when "Use Construction Mapping" is disabled

**Read Construction From Attribute**

_When enabled, reads the rotation construction from a point attribute._

* Allows dynamic rotation construction per point
* Requires a valid integer attribute with values between 0 and 2 (representing EPCGExMakeRotAxis enum)

**Construction Attribute**

_Name of the attribute to read rotation construction from._

* Only active when "Read Construction From Attribute" is enabled
* Should contain integer values representing rotation axes

**Construction Safety**

_Determines how invalid values in the construction attribute are handled._

* **Tile**: Wraps around valid values (0,1,2,0,1,2...)
* **Clamp**: Clamps to valid range (0,1,2,2,2,2...)
* **Ignore**: Uses default rotation construction when invalid

***

#### Axis Settings

Controls the radius and flip behavior for each of the three axes.

**Primary**

_Settings for the primary axis (aligned with segment direction)._

* Controls how far the solidification extends along the path's direction
* Includes flip option to reverse direction

**Secondary**

_Settings for the secondary axis (typically path normal)._

* Controls how far the solidification extends perpendicular to the path
* Includes radius and flip options
* Radius can be constant or attribute-driven

**Tertiary**

_Settings for the tertiary axis (typically binormal)._

* Controls how far the solidification extends in the third dimension
* Includes radius and flip options
* Radius can be constant or attribute-driven

***

#### Normal Settings

Controls how the cross direction (normal) is computed for the solidification.

**Normal Type**

_Determines whether to use a constant normal or read from an attribute._

* **Constant**: Use a fixed normal type
* **Attribute**: Read normal from point attribute

**Normal Attribute**

_Name of the attribute containing normal vectors._

* Only active when "Normal Type" is set to "Attribute"
* Should contain vector values for cross direction

**Normal**

_Type of arithmetic path point cross direction when using constant mode._

* **Normal**: Use standard path normal
* **Binormal**: Use path binormal
* **Average Normal**: Use average of normal and binormal

**Invert Direction**

_When enabled, inverts the computed normal direction._

* Reverses the orientation of the solidification
* Only active when "Normal Type" is set to "Attribute"

***

#### Solidification Lerp

Controls how much of the path's original position is retained during solidification.

**Solidification Lerp Input**

_Determines whether to use a constant or attribute-driven lerp value._

* **Constant**: Use fixed lerp value between 0 and 1
* **Attribute**: Read lerp value from point attribute

**Solidification Lerp Attribute**

_Name of the attribute containing lerp values._

* Only active when "Solidification Lerp Input" is set to "Attribute"
* Should contain float values between 0 and 1

**Solidification Lerp Constant**

_Fixed lerp value between 0 and 1._

* **0**: Full solidification (original point position ignored)
* **1**: No solidification (original point position preserved)
* **0.5**: Halfway between original and solidified positions
