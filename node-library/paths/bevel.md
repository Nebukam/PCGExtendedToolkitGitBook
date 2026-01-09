---
description: 'In editor :: PCGEx | Path : Bevel'
icon: circle
---

# Bevel

{% hint style="warning" %}
## AI-generated page -- to be reviewed 
While not 100% accurate, it should properly capture what the node/factory does. It stills needs to be proofread by a human.
{% endhint %}

> Bevels the corners of paths by replacing sharp angles with smooth transitions.

### Overview

This node modifies path points to create rounded or angled transitions at corners, giving paths a more organic appearance. It's commonly used for creating smooth road networks, pathways, or any scenario where sharp turns need to be softened.

The operation works by identifying points that form corners in the path and replacing them with a custom profile (line, arc, or custom shape) that smoothly connects the adjacent segments. You can control how much the corner is beveled, whether to keep the original point, and how to subdivide the new profile.

{% hint style="info" %}
Beveling affects only points that are part of paths. Points not connected to a path will remain unchanged.
{% endhint %}

<details>

<summary>Inputs</summary>

* **Main Input**: Points representing a path or collection of paths
* **Filters (Optional)**: Point filters to determine which points should be beveled

</details>

<details>

<summary>Outputs</summary>

* **Main Output**: Modified points with beveled corners, potentially more points than the input

</details>

### Properties Overview

Controls how the beveling operation is applied to path points.

***

#### Settings

What core parameters control the bevel behavior.

**Mode**

_Controls how the width value is interpreted._

* When set to **Radius**, the width defines a radius from the corner point along each adjacent segment.
* When set to **Distance**, the width defines a distance along each adjacent segment.

**Values**:

* **Radius**: Width is used as a radius value to compute distance along each point neighboring segments
* **Distance**: Width is used as a distance along each point neighboring segments

**Type**

_Controls the shape of the bevel profile._

* When set to **Line**, a straight line connects the segments.
* When set to **Arc**, an arc smoothly transitions between segments.
* When set to **Custom**, a custom profile defined by another input is used.

**Values**:

* **Line**: Line profile
* **Arc**: Arc profile
* **Custom**: Custom profile

**bKeepCornerPoint**

_When enabled, the original corner point is kept in the output._

* If enabled, the original point remains at its location.
* If disabled, the original point is replaced with the bevel profile.

**Limit**

_Limits how far the bevel can extend from the corner point._

* When set to **None**, no limit is applied.
* When set to **Closest neighbor**, the bevel is limited to the closest neighboring point along the path.
* When set to **Balanced**, the bevel is balanced against the opposite side of the corner, falling back to closest neighbor if needed.

**Values**:

* **None**: Bevel is not limited
* **Closest neighbor**: Closest neighbor position is used as upper limit
* **Balanced**: Weighted balance against opposite bevel position, falling back to closest neighbor

***

#### Profile Scaling

Controls how the custom profile is scaled along its main and cross axes.

**MainAxisScaling**

_Determines how the custom profile is scaled on the main axis._

**Values**:

* **Uniform**: Keep the profile ratio uniform
* **Scale**: Use a scale factor relative to the bevel distance
* **Distance**: Use a fixed distance relative to the bevelled point

**MainAxisScale**

_Scale or distance value for the main axis._

* Controls how much the custom profile is scaled along its main axis.
* Only visible when **MainAxisScaling** is set to **Scale** or **Distance**.

**CrossAxisScaling**

_Determines how the custom profile is scaled on the cross axis._

**Values**:

* **Uniform**: Keep the profile ratio uniform
* **Scale**: Use a scale factor relative to the bevel distance
* **Distance**: Use a fixed distance relative to the bevelled point

**CrossAxisScale**

_Scale or distance value for the cross axis._

* Controls how much the custom profile is scaled along its cross axis.
* Only visible when **CrossAxisScaling** is set to **Scale** or **Distance**.

***

#### Width

Controls how wide the bevel is applied.

**WidthMeasure**

_Determines whether width values are relative or absolute._

* When set to **Relative**, input values are normalized between 0..1, or used as a factor.
* When set to **Discrete**, raw values are used as absolute distances.

**Values**:

* **Relative**: Input value will be normalized between 0..1, or used as a factor
* **Discrete**: Raw value will be used, or used as absolute

**WidthInput**

_Specifies whether the width is constant or comes from an attribute._

* When set to **Constant**, use the **WidthConstant** value.
* When set to **Attribute**, read the width from the **WidthAttribute**.

**Values**:

* **Constant**: Use a constant, user-defined value
* **Attribute**: Read the value from the input data

**WidthAttribute**

_Name of the attribute to read the bevel width from._

* Only visible when **WidthInput** is set to **Attribute**.

**WidthConstant**

_Value used for bevel width when **WidthInput** is set to **Constant**._

***

#### Subdivision

Controls how the beveled profile is subdivided into multiple points.

**bSubdivide**

_When enabled, the bevel profile is subdivided into multiple points._

* If disabled, the bevel profile is a single smooth transition.
* If enabled, the profile is split into segments based on subdivision settings.

**SubdivideMethod**

_Determines how subdivision is calculated._

**Values**:

* **Distance**: Number of subdivisions depends on length
* **Count**: Number of subdivisions is fixed
* **Manhattan**: Manhattan subdivision, number of subdivisions depends on spatial relationship between the points; will be in the \[0..2] range.

**SubdivisionAmountInput**

_Specifies whether the subdivision count is constant or comes from an attribute._

**Values**:

* **Constant**: Use a constant, user-defined value
* **Attribute**: Read the value from the input data

**SubdivisionDistance**

_Number of subdivisions based on distance._

* Only visible when **bSubdivide** is enabled and **SubdivideMethod** is set to **Distance**.
* Controls how far apart each subdivision point is placed.

**SubdivisionCount**

_Fixed number of subdivisions._

* Only visible when **bSubdivide** is enabled and **SubdivideMethod** is set to **Count**.
* Controls how many points are used to define the bevel profile.

**SubdivisionAmount**

_Name of the attribute to read subdivision count from._

* Only visible when **bSubdivide** is enabled and **SubdivideMethod** is not **Manhattan** and **SubdivisionAmountInput** is set to **Attribute**.

**ManhattanDetails**

_Manhattan subdivision settings._

* Only visible when **bSubdivide** is enabled and **SubdivideMethod** is set to **Manhattan**.
* Controls how subdivisions are calculated based on the spatial relationship between points.

***

#### Flags

Controls whether flags are added to indicate bevel-related properties of points.

**bFlagPoles**

_When enabled, a boolean flag is added to mark bevel endpoints._

* Adds a flag indicating if a point is a bevel endpoint (either start or end).

**PoleFlagName**

_Name of the boolean flag for bevel endpoints._

* Only visible when **bFlagPoles** is enabled.

**bFlagStartPoint**

_When enabled, a boolean flag is added to mark bevel start points._

* Adds a flag indicating if a point is the start of a bevel.

**StartPointFlagName**

_Name of the boolean flag for bevel start points._

* Only visible when **bFlagStartPoint** is enabled.

**bFlagEndPoint**

_When enabled, a boolean flag is added to mark bevel end points._

* Adds a flag indicating if a point is the end of a bevel.

**EndPointFlagName**

_Name of the boolean flag for bevel end points._

* Only visible when **bFlagEndPoint** is enabled.

**bFlagSubdivision**

_When enabled, a boolean flag is added to mark subdivision points._

* Adds a flag indicating if a point was created as part of a subdivision.

**SubdivisionFlagName**

_Name of the boolean flag for subdivision points._

* Only visible when **bFlagSubdivision** is enabled.

### Notes

* Beveling works best on paths with sharp angles. Gentle curves will not be affected.
* When using **Custom** profile type, ensure that the input data contains a valid custom profile to avoid unexpected results.
* Subdivision can increase the number of points significantly, especially for complex paths or high subdivision counts.
* Use flags to track which points were modified by this node for further processing or visualization.
