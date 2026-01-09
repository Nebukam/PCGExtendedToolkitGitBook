---
description: 'In editor :: PCGEx | Path × Bounds Intersection'
icon: circle
---

# Path × Bounds Intersection

{% hint style="danger" %}
This documentation has been AI-generated from the source code and may not be 100% accurate.
{% endhint %}

> Find intersection points between paths and bounding volumes.

### Overview

This node calculates where paths intersect with bounding volumes, such as boxes or spheres. It's useful for creating procedural geometry that interacts with defined spatial regions, like placing objects at path intersections or cutting paths based on volume boundaries.

The node takes paths as input and checks each segment against the bounds of target points. When an intersection occurs, new points are generated at those locations along the original path. These points can be used to modify or split the path, or to place additional geometry.

{% hint style="info" %}
This node works with point data that defines bounds (like scaled bounds or custom volumes) and paths that traverse these volumes. The intersection points are added to the path data, allowing for further processing or visualization.
{% endhint %}

<details>

<summary>Inputs</summary>

* **Main Input** (Path): Path data to be intersected with bounds
* **Target Input** (Points): Point data containing bounds to test against

</details>

<details>

<summary>Outputs</summary>

* **Main Output**: Modified path data with new intersection points added
* **Unmatched Output** (optional): Data that did not match any targets, if enabled in matching settings

</details>

### Properties Overview

Settings for controlling how bounds intersections are calculated and handled.

***

#### General

Controls core behavior of the intersection calculation.

**Data Matching**

_Controls how input data is matched between paths and target points._

* Determines which target points are used to test each path segment
* Useful for filtering which volumes affect which paths
* When disabled, all targets are considered for every path

**Blending**

_Configures how attributes are blended at intersection points._

* Allows interpolation of point properties between the previous and next points on the path
* Different from inheriting external properties
* Can be used to smoothly transition attributes across intersections

**Output**

_Settings for how intersection data is written._

* Controls whether to write flags indicating if a point is an intersection
* Allows writing cut type information (entry, exit, etc.)
* Configurable attribute names for output flags

**Tagging**

Controls how paths are tagged based on their intersection behavior.

**Tag If Has Cuts**

_When enabled, adds a tag to paths that have intersections._

* Adds the specified tag to paths that intersect with bounds
* Useful for filtering or visualizing paths with cuts

**Has Cuts Tag**

_Name of the tag added to paths that have intersections._

* Set to "HasCuts" by default
* Can be changed to any valid tag name

**Tag If Uncut**

_When enabled, adds a tag to paths that do not intersect with bounds._

* Adds the specified tag to paths that don't intersect any bounds
* Useful for filtering or visualizing uncut paths

**Uncut Tag**

_Name of the tag added to paths that do not intersect with bounds._

* Set to "Uncut" by default
* Can be changed to any valid tag name
