---
description: 'In editor :: PCGEx | Reverse Point Order'
icon: circle
---

# Reverse Point Order

{% hint style="info" %}
## AI-generated page -- to be reviewed 
While not 100% accurate, it should properly capture what the node/factory does. It stills needs to be proofread by a human.
{% endhint %}

> Reverse the order of points or change winding of paths.

### Overview

This node allows you to reverse the order of points in a point set or modify the winding direction of paths. It's particularly useful when you need to flip the orientation of shapes, correct winding issues, or reorder points for downstream processing. You can choose between reversing the point order directly, sorting-based reversal, or changing the winding direction of closed paths.

{% hint style="info" %}
Reversing winding is only meaningful for closed paths or polygons. For open paths, this setting has no effect.
{% endhint %}

<details>

<summary>Inputs</summary>

* **Default Input** (Required): Points or paths to reverse the order of.

</details>

<details>

<summary>Outputs</summary>

* **Default Output** (Required): Modified points or paths with reversed order or winding.

</details>

### Properties Overview

Controls how the node reverses point order or changes path winding.

***

#### Method

Specifies the method used to reverse or change the order of points.

**None**

_Leaves points in their original order._

* No modification is made to the input data.
* Useful as a bypass when you want to conditionally apply reversal logic.

**Sorting Rules**

_Reverse points using the current sorting rules._

* Reverses the order of points based on how they are currently sorted.
* This is useful when you want to reverse a sort that was applied earlier in your graph.

**Winding**

_Change the winding direction of paths._

* Changes the orientation of closed paths (polygons) to match the selected winding.
* Only affects closed paths; open paths are unaffected.

***

#### Sorting Direction

Controls whether the sorting is ascending or descending when using the "Sorting Rules" method.

**Ascending**

_Sorts points in ascending order before reversing._

* Points are sorted from lowest to highest values, then reversed.
* Useful for creating ordered sequences that are then flipped.

**Descending**

_Sorts points in descending order before reversing._

* Points are sorted from highest to lowest values, then reversed.
* Can be used to create reverse-ordered sequences from sorted data.

***

#### Winding Settings

Controls how winding is calculated and applied when using the "Winding" method.

**Winding Direction**

_Selects the desired winding direction for closed paths._

* **Clockwise**: Reorients paths to have clockwise winding.
* **Counter Clockwise**: Reorients paths to have counter-clockwise winding.

**Projection Settings**

_Configures how 2D projection is performed when calculating winding._

* **Method**: Choose between using a normal vector or computing the best-fit plane for 2D projection.
* **Projection Normal**: The normal vector used for 2D projection if using the "Normal" method.
* **Local Normal**: If enabled, uses a local attribute to determine the projection normal.
* **Local Normal Attribute**: The name of the attribute containing the local normal vector.

***

#### Tagging

Adds tags to points or paths based on whether they were reversed.

**Tag Reversed Points**

_When enabled, adds a tag to points that were reversed._

* Adds a boolean attribute to indicate if a point was part of a reversed path.
* Useful for tracking which elements were modified.

**Reversed Tag Name**

_Name of the tag added when a point is reversed._

* Default value is "Reversed".
* You can customize this to fit your naming conventions.

**Tag Unreversed Points**

_When enabled, adds a tag to points that were not reversed._

* Adds a boolean attribute to indicate if a point was part of an unreversed path.
* Useful for tracking which elements were not modified.

**Unreversed Tag Name**

_Name of the tag added when a point is not reversed._

* Default value is "NotReversed".
* You can customize this to fit your naming conventions.

### Notes

* Use this node after sorting or other operations where you need to reverse the resulting order.
* When using "Winding", ensure that paths are closed polygons for meaningful results.
* Tagging can help track which elements were modified, especially in complex procedural graphs.
* Performance impact is minimal when using "None" or "Sorting Rules" methods, but "Winding" may require additional computation for projection calculations.
