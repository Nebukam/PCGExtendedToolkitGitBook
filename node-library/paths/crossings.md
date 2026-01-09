---
description: 'In editor :: PCGEx | Path : Crossings'
icon: circle
---

# Crossings

{% hint style="danger" %}
This documentation has been AI-generated from the source code and may not be 100% accurate.
{% endhint %}

> Find crossing points between & inside paths.

### Overview

This node identifies where paths intersect or cross each other, creating new points at those locations. It's useful for generating junctions, intersections, or nodes where multiple paths meet in a network or route system. You can control which paths are allowed to cut others, filter based on tags, and blend attributes from the crossing points.

{% hint style="info" %}
This node works with path data that has been created using PCGEx Path nodes. It does not process point clouds directly.
{% endhint %}

<details>

<summary>Inputs</summary>

* **Main Input**: Path data (from PCGEx Path nodes)
* **Filter Input** (optional): Point filters to apply to the input paths

</details>

<details>

<summary>Outputs</summary>

* **Main Output**: Points at crossing locations, with optional blending and attributes
* **Path Output** (optional): Modified paths with additional crossing information

</details>

### Properties Overview

Controls how crossings are detected, filtered, and written to output points.

***

#### Settings

Controls general behavior for detecting and processing path crossings.

**Self Intersection Only**

_When enabled, only detects intersections within each individual path._

* Useful for finding self-intersections in a single path (e.g., loops or figure-eights)
* Ignores the "Can Cut" and "Can Be Cut" tag filtering settings

**Can Be Cut Tag**

_If set, paths with this tag are considered cut-able._

* Paths that have this tag can be intersected by other paths
* Leave empty to disable filtering based on this tag

**Invert Can Be Cut Tag**

_When enabled, paths without the "Can Be Cut Tag" are considered cut-able._

* If you set a tag but want to exclude paths with that tag instead of including them

**Can Cut Tag**

_If set, paths with this tag are considered cutters._

* Paths that have this tag can intersect and cut other paths
* Leave empty to disable filtering based on this tag

**Invert Can Cut Tag**

_When enabled, paths without the "Can Cut Tag" are considered cutters._

* If you set a tag but want to exclude paths with that tag instead of including them

**Create Point At Crossings**

_When enabled, creates new points at crossing locations._

* Disabling this will only write attributes to existing points without adding new ones

**Intersection Details**

_Configures how intersections are computed._

* Controls strictness and tolerance for detecting crossings
* Affects performance and accuracy of intersection detection

**Blending**

_Specifies how to blend data from intersecting paths._

* Allows blending of point properties like position, rotation, scale, etc.
* Works on the points that are part of the crossing

**Do Cross Blending**

_When enabled, blends attributes from external sources at crossings._

* Enables more advanced attribute blending for crossing points

**Crossing Carry Over**

_Configures which attributes to carry over from input paths._

* Specifies what data should be copied from the original path points to the crossing points

**Crossing Blending**

_Specifies how to blend attributes from external sources._

* Controls blending type (average, lerp, etc.) for crossing point attributes

**Write Alpha**

_When enabled, writes an alpha value to indicate crossing intensity._

* Useful for visualizing or controlling effects based on how many paths cross at a point

**Crossing Alpha Attribute Name**

_Name of the attribute that stores the alpha value._

* Default is "Alpha"
* Set to a custom name if you want to use a different attribute

**Default Alpha Value**

_Value used when no crossing occurs._

* Typically set to -1 or 0 to indicate no crossing

**Orient Crossing**

_When enabled, sets the orientation of crossing points._

* Rotates crossing points based on the specified axis direction

**Crossing Orient Axis**

_Specifies which axis to use for orienting crossing points._

* **Forward**: X+
* **Backward**: X-
* **Right**: Y+
* **Left**: Y-
* **Up**: Z+
* **Down**: Z-

**Write Cross Direction**

_When enabled, writes a vector indicating the crossing direction._

* Useful for creating visual effects or controlling behavior at crossings

**Cross Direction Attribute Name**

_Name of the attribute that stores the cross direction vector._

* Default is "Cross"
* Set to a custom name if you want to use a different attribute

**Default Cross Direction Value**

_Value used when no crossing occurs._

* Typically set to zero vector (0,0,0)

**Write Is Point Crossing**

_When enabled, writes a boolean flag indicating whether a point is at a crossing._

* Useful for filtering or conditional logic based on crossing points

**Is Point Crossing Attribute Name**

_Name of the attribute that stores the crossing flag._

* Default is "IsPointCrossing"
* Set to a custom name if you want to use a different attribute

**Tag If Has Crossings**

_When enabled, adds a tag to paths that have at least one crossing._

* Useful for identifying and filtering paths with intersections

**Has Crossings Tag**

_Name of the tag added to paths with crossings._

* Default is "HasCrossings"
* Set to a custom name if you want to use a different tag

**Tag If Has No Crossings**

_When enabled, adds a tag to paths that have no crossings._

* Useful for identifying and filtering paths without intersections

**Has No Crossings Tag**

_Name of the tag added to paths with no crossings._

* Default is "HasNoCrossings"
* Set to a custom name if you want to use a different tag

**Omit Uncuttable From Output**

_When enabled, removes paths that are only cutters (no intersections)._

* Useful for cleaning up path networks by removing unused or isolated paths

### Notes

* This node can be computationally expensive on large datasets with many paths
* Consider using filtering tags to reduce the number of path combinations being checked
* The "Crossing Blending" and "Crossing Carry Over" settings allow for advanced attribute manipulation at intersection points
* Use the alpha value output to create visual effects that respond to path density or intersection frequency
* For complex networks, consider using "Self Intersection Only" mode to analyze individual paths before combining them
