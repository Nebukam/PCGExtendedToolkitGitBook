---
description: 'In editor :: PCGEx | Path : Extrude Tensors'
icon: scrubber
---

# Extrude Tensors

{% hint style="info" %}
This page was generated from the source code. It should properly capture what the node does, but still needs to be proofread by a human.
{% endhint %}

> Extrude input points into paths along tensor directions.

#### How It Works

This node takes each input point and uses tensor data to determine a direction for extrusion. Starting from each point, it moves step-by-step along that direction, building a path one point at a time. Each step involves sampling the tensor at the current position, applying rotation if needed, and advancing the path.

The process continues until one of several stopping conditions is met:

* The path reaches its maximum length
* The path contains too many points
* A filter condition stops the extrusion
* The path intersects with another path (if intersection detection is enabled)
* The path closes back onto itself to form a loop

If intersection detection is enabled, the node checks for collisions with other paths or ongoing extrusions. Depending on settings, it can either cut off the path at an intersection, merge paths together, or detect when a path loops back on itself.

#### Configuration

<details>

<summary><strong>Transform Rotation</strong><br><em>Whether to apply rotation transformations based on tensor data.</em></summary>

When enabled, each point along the path is rotated according to the tensor's orientation.

**Values**:

* **True**: Apply rotation.
* **False**: Do not modify rotation.

</details>

<details>

<summary><strong>Rotation Mode</strong><br><em>How to apply rotation during extrusion.</em></summary>

Controls how the rotation is applied based on the tensor data.

**Values**:

* **Absolute**: Use the tensor's absolute rotation.
* **Relative**: Apply the tensor's rotation relative to the current orientation.
* **Align**: Align the rotation with the movement direction along the tensor.

</details>

<details>

<summary><strong>Align Axis</strong><br><em>The axis to align when using the "Align" rotation mode.</em></summary>

Defines which axis should be aligned with the extrusion direction.

**Values**:

* **Forward**: Align with X+.
* **Backward**: Align with X-.
* **Right**: Align with Y+.
* **Left**: Align with Y-.
* **Up**: Align with Z+.
* **Down**: Align with Z-.

</details>

<details>

<summary><strong>Use Per-point Iterations</strong><br><em>Whether to use a per-point attribute for max iterations.</em></summary>

When enabled, each point uses an attribute value to determine how many steps to take during extrusion.

**Values**:

* **True**: Use a point attribute.
* **False**: Use a global value.

</details>

<details>

<summary><strong>Per-point Iterations</strong><br><em>Attribute name for per-point max iterations.</em></summary>

The name of the attribute that stores the number of steps to take for each seed point.

</details>

<details>

<summary><strong>Max Iterations</strong><br><em>Global maximum number of steps for extrusion.</em></summary>

Sets a global limit on how many steps each extrusion can take. If per-point iterations are used, this acts as a cap.

</details>

<details>

<summary><strong>Use Max from Points</strong><br><em>Whether to adjust max iteration based on values found on points.</em></summary>

When enabled, the node uses the highest value found among all points as the maximum number of iterations. Use with caution.

**Values**:

* **True**: Adjust based on point data.
* **False**: Use global setting.

</details>

<details>

<summary><strong>Tensor Sampling Settings</strong><br><em>Settings for how tensor sampling is applied.</em></summary>

Controls how the tensor data is sampled and applied to each step in the extrusion process.

</details>

<details>

<summary><strong>Use Max Length</strong><br><em>Whether to limit the total length of generated paths.</em></summary>

When enabled, paths are cut off once they exceed a certain length.

**Values**:

* **True**: Enforce maximum length.
* **False**: No length limit.

</details>

<details>

<summary><strong>Max Length Input</strong><br><em>How to define the max path length.</em></summary>

Controls whether the max length is constant or taken from a point attribute.

**Values**:

* **Constant**: Use a fixed value.
* **Attribute**: Use an attribute on points.

</details>

<details>

<summary><strong>Max Length (Attr)</strong><br><em>Point attribute for maximum path length.</em></summary>

The name of the attribute used to define the max path length when using an attribute input.

</details>

<details>

<summary><strong>Max Length</strong><br><em>Fixed maximum path length.</em></summary>

A constant value that limits how far each path can extend.

</details>

<details>

<summary><strong>Use Max Points Count</strong><br><em>Whether to limit the number of points in a generated path.</em></summary>

When enabled, paths are cut off once they exceed a certain number of points.

**Values**:

* **True**: Enforce maximum point count.
* **False**: No point count limit.

</details>

<details>

<summary><strong>Max Points Count Input</strong><br><em>How to define the max point count.</em></summary>

Controls whether the max point count is constant or taken from a point attribute.

**Values**:

* **Constant**: Use a fixed value.
* **Attribute**: Use an attribute on points.

</details>

<details>

<summary><strong>Max Points Count (Attr)</strong><br><em>Point attribute for maximum point count.</em></summary>

The name of the attribute used to define the max point count when using an attribute input.

</details>

<details>

<summary><strong>Max Points Count</strong><br><em>Fixed maximum number of points in a path.</em></summary>

A constant value that limits how many points each path can contain.

</details>

<details>

<summary><strong>Fuse Distance</strong><br><em>Minimum distance between points before adding to path.</em></summary>

Controls how close points must be before they are added to the path. Lower values create denser paths.

</details>

<details>

<summary><strong>Stop Condition Handling</strong><br><em>How to deal with points that are stopped.</em></summary>

Defines whether to include or exclude a point when it is stopped by a filter.

**Values**:

* **Exclude**: Ignore the stopping sample and don't add it.
* **Include**: Include the stopping sample in the path.

</details>

<details>

<summary><strong>Allow Child Extrusions</strong><br><em>Whether to allow new extrusions to start from stopped points.</em></summary>

When enabled, a point that stops due to filters can still begin a new extrusion if it later meets conditions again.

**Values**:

* **True**: Allow child extrusions.
* **False**: Stop all extrusions once stopped.

</details>

<details>

<summary><strong>Ignore Stopped Seeds</strong><br><em>If enabled, seeds that start stopped won't be extruded at all.</em></summary>

When enabled, points that are already stopped by filters at the start will not begin any extrusion.

**Values**:

* **True**: Ignore stopped seeds.
* **False**: Transform them until they start extruding.

</details>

<details>

<summary><strong>Do External Path Intersections</strong><br><em>Whether to check for intersections with external paths.</em></summary>

When enabled, the node checks if a path intersects with other paths provided as input.

**Values**:

* **True**: Enable intersection detection.
* **False**: Disable intersection detection.

</details>

<details>

<summary><strong>Ignore Intersection On Origin</strong><br><em>If enabled, if the origin location of the extrusion is detected as an intersection, it is not considered an intersection.</em></summary>

When enabled, paths that start exactly on an external path are not treated as intersecting.

**Values**:

* **True**: Ignore intersections at origin.
* **False**: Treat all intersections as such.

</details>

<details>

<summary><strong>External Path Intersections</strong><br><em>Settings for detecting intersections with external paths.</em></summary>

Controls how intersection detection is performed against external paths.

</details>

<details>

<summary><strong>Do Self Path Intersections</strong><br><em>Whether to test for intersection between actively extruding paths.</em></summary>

When enabled, the node checks if new extrusions intersect with already active paths.

**Values**:

* **True**: Enable self-intersection detection.
* **False**: Disable self-intersection detection.

</details>

<details>

<summary><strong>Self Intersection Mode</strong><br><em>How to order intersection checks.</em></summary>

Controls how paths are sorted when resolving intersections.

**Values**:

* **Path Length**: Sort by path length, then by sorting rules.
* **Sorting only**: Only use sorting rules.

</details>

<details>

<summary><strong>Sort Direction</strong><br><em>Controls the order in which paths extrusion will be stopped when intersecting.</em></summary>

Determines whether to prioritize shorter or longer paths during intersection resolution.

**Values**:

* **Ascending**: Prioritize shorter paths.
* **Descending**: Prioritize longer paths.

</details>

<details>

<summary><strong>Self Path Intersections</strong><br><em>Settings for detecting intersections between extruding paths.</em></summary>

Controls how self-intersection detection is performed.

</details>

<details>

<summary><strong>Merge On Proximity</strong><br><em>Whether to merge paths when they get close to each other.</em></summary>

When enabled, paths that come near each other are merged instead of intersecting.

**Values**:

* **True**: Enable merging.
* **False**: Disable merging.

</details>

<details>

<summary><strong>├─ Priority</strong><br><em>Whether to resolve crossing or merge first.</em></summary>

Controls the priority when both crossing and merging are possible.

**Values**:

* **Favor Crossing**: Resolve crossings before merges.
* **Favor Merge**: Resolve merges before crossings.

</details>

<details>

<summary><strong>├─ Balance</strong><br><em>Which end of the extruded segment should be favored for merging.</em></summary>

Controls which side of a segment is used when merging paths.

**Values**: 0 to 1, where 0 = start and 1 = end.

</details>

<details>

<summary><strong>└─ Settings</strong><br><em>Settings for path merging behavior.</em></summary>

Controls how merging is performed when paths are close.

</details>

<details>

<summary><strong>Detect Closed Loops</strong><br><em>Whether the node should attempt to close loops based on angle and proximity.</em></summary>

When enabled, paths that return near their starting point are closed into loops.

**Values**:

* **True**: Attempt to close loops.
* **False**: Do not close loops.

</details>

<details>

<summary><strong>├─ Search Distance</strong><br><em>Range at which the first point must be located to check angle.</em></summary>

The distance within which a path can be considered for loop closure.

</details>

<details>

<summary><strong>└─ Search Angle</strong><br><em>Angle at which the loop will be closed, if within range.</em></summary>

The maximum angle allowed for a path to be considered a loop.

</details>

<details>

<summary><strong>Attributes To Path Tags</strong><br><em>TBD</em></summary>

Controls how attributes are converted into tags on paths.

</details>

<details>

<summary><strong>Tag If Child Extrusion</strong><br><em>Whether to tag paths that are started from stopped points.</em></summary>

When enabled, paths that begin after a stop condition is met are tagged.

**Values**:

* **True**: Tag child extrusions.
* **False**: Do not tag.

</details>

<details>

<summary><strong>Is Child Extrusion Tag</strong><br><em>Tag name for child extrusions.</em></summary>

The tag to apply to paths that are started from stopped points.

</details>

<details>

<summary><strong>Tag If Is Stopped By Filters</strong><br><em>Whether to tag paths that are stopped by filters.</em></summary>

When enabled, paths that stop due to filter conditions are tagged.

**Values**:

* **True**: Tag stopped-by-filters paths.
* **False**: Do not tag.

</details>

<details>

<summary><strong>Is Stopped By Filters Tag</strong><br><em>Tag name for paths stopped by filters.</em></summary>

The tag to apply to paths that stop due to filter conditions.

</details>

<details>

<summary><strong>Tag If Is Stopped By Intersection</strong><br><em>Whether to tag paths that are stopped by external intersections.</em></summary>

When enabled, paths that stop due to intersecting with external paths are tagged.

**Values**:

* **True**: Tag intersection-stopped paths.
* **False**: Do not tag.

</details>

<details>

<summary><strong>Is Stopped By Intersection Tag</strong><br><em>Tag name for paths stopped by intersections.</em></summary>

The tag to apply to paths that stop due to external intersections.

</details>

<details>

<summary><strong>Tag If Is Stopped By Self Intersection</strong><br><em>Whether to tag paths that are stopped by self-intersections.</em></summary>

When enabled, paths that stop due to intersecting with themselves are tagged.

**Values**:

* **True**: Tag self-intersection-stopped paths.
* **False**: Do not tag.

</details>

<details>

<summary><strong>Is Stopped By Self Intersection Tag</strong><br><em>Tag name for paths stopped by self-intersections.</em></summary>

The tag to apply to paths that stop due to self-intersections.

</details>

<details>

<summary><strong>Tag If Self Merged</strong><br><em>Whether to tag paths that are merged with others.</em></summary>

When enabled, paths that were merged with others are tagged.

**Values**:

* **True**: Tag merged paths.
* **False**: Do not tag.

</details>

<details>

<summary><strong>Is Self Merged Tag</strong><br><em>Tag name for merged paths.</em></summary>

The tag to apply to paths that were merged with others.

</details>

<details>

<summary><strong>Tag If Is Follow Up</strong><br><em>Whether to tag paths that are follow-ups of other paths.</em></summary>

When enabled, paths that continue from another path are tagged.

**Values**:

* **True**: Tag follow-up paths.
* **False**: Do not tag.

</details>

<details>

<summary><strong>Is Follow Up Tag</strong><br><em>Tag name for follow-up paths.</em></summary>

The tag to apply to paths that continue from another path.

</details>

<details>

<summary><strong>Refresh Seed</strong><br><em>Whether to give a new seed to the points. If disabled, they will inherit the original one.</em></summary>

When enabled, each extruded point gets a new seed; otherwise, it inherits the original seed.

**Values**:

* **True**: Assign new seeds.
* **False**: Inherit original seeds.

</details>

<details>

<summary><strong>Paths Output Settings</strong><br><em>Settings for how output paths are structured.</em></summary>

Controls how the resulting paths are organized and outputted.

</details>

#### Usage Example

You have a set of points representing locations where rivers start. Each point has a tensor that defines the direction of water flow. Use this node to extrude each point along its tensor direction, creating river paths. Enable intersection detection to prevent rivers from crossing each other or merging into one another.

#### Notes

* The node can generate complex branching patterns when using filters and child extrusions.
* Intersection handling is computationally expensive; use with care on large datasets.
* Closed loop detection works best with low-angle paths that return near their starting point.
