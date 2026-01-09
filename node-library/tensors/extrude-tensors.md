---
description: 'In editor :: PCGEx | Path : Extrude Tensors'
icon: scrubber
---

# Extrude Tensors

{% hint style="info" %}
### AI-generated page -- to be reviewed

While not 100% accurate, it should properly capture what the node/factory does. It stills needs to be proofread by a human.
{% endhint %}

> Extrude input points into paths along tensors.

### Overview

This node takes input points and generates paths by following tensor data, which defines direction and magnitude for each point. It's useful for creating procedural structures like roads, rivers, or growth patterns that follow directional fields.

The extrusion process starts from each input point and continues along the tensor directions until certain conditions are met, such as reaching a maximum length or hitting stop filters. You can control how many iterations are performed per point, whether to close loops, and how to handle path intersections.

{% hint style="info" %}
This node requires tensor data to be present in your input points. The tensor data defines the direction and magnitude of each extrusion step.
{% endhint %}

<details>

<summary>Inputs</summary>

* **In** (Point): Input points with tensor data
* **Filters** (Optional Point Filter): Filters to stop extrusion when hit

</details>

<details>

<summary>Outputs</summary>

* **Out** (Path): Generated paths from the extrusion process

</details>

### Properties Overview

Settings are organized into categories that control rotation, iteration limits, intersection handling, and output behavior.

***

#### Transform Settings

Controls how the extrusion direction is applied to each point.

**Transform Rotation**

_When enabled, rotates each point according to tensor data._

* Rotates each point along the tensor's direction vector
* Applies to all points in the path

**Rotation Mode**

_Selects how rotation is calculated._

* **Absolute**: Uses the tensor's absolute rotation
* **Relative**: Applies the tensor's rotation relative to the current orientation
* **Align**: Aligns the tensor's direction with a specific axis (Forward, Right, Up, etc.)

**Align Axis**

_Specifies which axis to align with the tensor direction._

* **Forward**: X+
* **Backward**: X-
* **Right**: Y+
* **Left**: Y-
* **Up**: Z+
* **Down**: Z-

***

#### Iteration Limits

Controls how far each extrusion can go.

**Use Per-point Max Iterations**

_When enabled, uses a point attribute to define maximum iterations._

* Uses the value from the specified attribute as the max iterations per point
* Acts as a clamping mechanism when combined with constant max iterations

**Per-point Iterations Attribute**

_Name of the attribute that defines max iterations per point._

* Attribute must be an integer type
* Overrides constant max iterations if enabled

**Max Iterations**

_Maximum number of steps to take for each extrusion._

* Default is 1 iteration
* Minimum value is 1

**Use Max from Points**

_When enabled, uses the maximum value found in point data as a clamping limit._

* Uses the highest value found among all input points
* Applies only when per-point max iterations is enabled

**Use Max Length**

_When enabled, limits the total length of each extruded path._

* Stops extrusion once the path reaches the specified maximum length

**Max Length Input Type**

_Specifies whether to use a constant or attribute for max length._

* **Constant**: Uses a fixed value
* **Attribute**: Reads from an attribute on input points

**Max Length Attribute**

_Name of the attribute that defines maximum path length._

* Only visible when using attribute input type
* Should be a numeric attribute

**Max Length Value**

_Fixed maximum length for all paths._

* Only visible when using constant input type
* Minimum value is 1

**Use Max Points Count**

_When enabled, limits the number of points in each extruded path._

* Stops extrusion once the path reaches the specified point count

**Max Points Count Input Type**

_Specifies whether to use a constant or attribute for max points._

* **Constant**: Uses a fixed value
* **Attribute**: Reads from an attribute on input points

**Max Points Count Attribute**

_Name of the attribute that defines maximum points per path._

* Only visible when using attribute input type
* Should be an integer attribute

**Max Points Count Value**

_Fixed maximum point count for all paths._

* Only visible when using constant input type
* Minimum value is 1

**Fuse Distance**

_Distance threshold for merging nearby points._

* Points closer than this distance are considered the same
* Default is Unreal's collocation tolerance

**Stop Condition Handling**

_How to treat points that hit a stop condition._

* **Exclude**: Ignores stopping samples and doesn't add them to the path
* **Include**: Includes the stopping sample in the path

**Allow Child Extrusions**

_When enabled, allows new extrusions to start from stopped points._

* New paths can begin even if the seed point was initially stopped
* Useful for creating branching structures

**Ignore Stopped Seeds**

_When enabled, skips points that are already stopped._

* Points that immediately hit stop filters won't be extruded at all
* Otherwise, they will transform until conditions change

***

#### Intersections (External)

Controls how paths interact with external path data.

**Do External Path Intersections**

_When enabled, tests for intersections with external paths._

* Checks if the extrusion path intersects with other paths in the graph
* Useful for creating roads that avoid obstacles or rivers that follow terrain

**Ignore Intersection on Origin**

_When enabled, treats the starting point as non-intersecting._

* Prevents false positives when seeds are perfectly placed on existing paths
* Only applies when external intersections are enabled

**External Path Intersections Settings**

_Configuration for detecting external path intersections._

* Controls distance and tolerance for intersection detection

***

#### Intersections (Self)

Controls how paths interact with each other during extrusion.

**Do Self Path Intersections**

_When enabled, tests for intersections between active extrusions._

* Prevents paths from crossing themselves or other active extrusions
* Useful for creating organic-looking structures that don't overlap

**Self Intersection Mode**

_How to sort paths when resolving self-intersections._

* **Path Length**: Sort by path length first, then by sorting rules
* **Sorting Only**: Use only sorting rules to determine priority

**Sort Direction**

_Direction to sort paths when resolving intersections._

* **Ascending**: Shorter paths are prioritized
* **Descending**: Longer paths are prioritized

**Self Path Intersections Settings**

_Configuration for detecting self-intersections._

* Controls distance and tolerance for intersection detection

**Merge on Proximity**

_When enabled, merges paths that get close to each other._

* Instead of stopping at intersections, paths can merge together
* Creates more organic-looking structures

**Self Intersection Priority**

_Controls which type of intersection is resolved first._

* **Favor Crossing**: Resolves crossing detection before merging
* **Favor Merge**: Resolves merging before crossing detection

**Proximity Segment Balance**

_Specifies where to place the merge point along a segment._

* 0 = start of segment, 1 = end of segment
* 0.5 = middle of segment

**Merge Details Settings**

_Configuration for path merging behavior._

* Controls how close paths must be before merging occurs

***

#### Closing Loops

Controls automatic loop detection and closure.

**Detect Closed Loops**

_When enabled, attempts to close loops based on angle and proximity._

* Checks if the end point gets close to the start point
* Useful for creating circular or closed structures

**Search Distance**

_Distance threshold for detecting potential loop closures._

* Default is 100 units
* Controls how far from the start point the end must be to consider closure

**Search Angle**

_Angle threshold for detecting potential loop closures._

* Default is 11.25 degrees
* Controls how aligned the direction must be for a loop to close

***

#### Tagging & Forwarding

Controls which paths receive tags based on their behavior.

**Attributes To Path Tags**

_Specifies which attributes should be forwarded as path tags._

* Maps point attributes to path tags
* Useful for passing metadata along with generated paths

**Tag If Child Extrusion**

_When enabled, tags paths that started from stopped points._

* Creates a tag when a new extrusion begins from an already stopped seed
* Useful for identifying branching behavior

**Is Child Extrusion Tag**

_Name of the tag to apply to child extrusions._

* Default is "Child"
* Applied when bTagIfChildExtrusion is enabled

**Tag If Is Stopped By Filters**

_When enabled, tags paths that were stopped by filters._

* Creates a tag when a path hits a stop filter
* Useful for identifying paths that couldn't continue

**Is Stopped By Filters Tag**

_Name of the tag to apply to paths stopped by filters._

* Default is "StoppedByFilters"
* Applied when bTagIfIsStoppedByFilters is enabled

**Tag If Is Stopped By Intersection**

_When enabled, tags paths that were stopped by intersections._

* Creates a tag when a path hits another path
* Useful for identifying collision points

**Is Stopped By Intersection Tag**

_Name of the tag to apply to paths stopped by intersections._

* Default is "StoppedByPath"
* Applied when bTagIfIsStoppedByIntersection is enabled

**Tag If Is Stopped By Self Intersection**

_When enabled, tags paths that were stopped by self-intersections._

* Creates a tag when a path crosses itself
* Useful for identifying crossing points

**Is Stopped By Self Intersection Tag**

_Name of the tag to apply to paths stopped by self-intersections._

* Default is "SelfCrossed"
* Applied when bTagIfIsStoppedBySelfIntersection is enabled

**Tag If Self Merged**

_When enabled, tags paths that were merged with others._

* Creates a tag when a path was merged with another during extrusion
* Useful for identifying merged structures

**Is Self Merged Tag**

_Name of the tag to apply to paths that were self-merged._

* Default is "SelfMerged"
* Applied when bTagIfSelfMerged is enabled

**Tag If Is Follow Up**

_When enabled, tags paths that are continuation of others._

* Creates a tag for paths that follow up from previous extrusions
* Useful for identifying sequential structures

**Is Follow Up Tag**

_Name of the tag to apply to follow-up paths._

* Default is "IsFollowUp"
* Applied when bTagIfIsFollowUp is enabled

***

#### Tensor Sampling Settings

Controls how tensor data is sampled during extrusion.

**Tensor Sampling Settings**

_Configuration for how tensors are applied during sampling._

* Controls how tensor directions and magnitudes are used in the extrusion process

***

#### Output Settings

Controls how generated paths are output.

**Refresh Seed**

_When enabled, gives each new point a fresh seed value._

* Prevents points from inheriting the original seed
* Useful for creating independent path structures

**Paths Output Settings**

_Configuration for how output paths are structured._

* Controls naming and organization of output paths
