---
description: 'In editor :: PCGEx | Path : Extrude Tensors'
icon: scrubber
---

# Extrude Tensors

Extrude input points into paths along tensors.

**How It Works**

> AI-Generated, needs proofreading

* The node takes input points and extrudes them into paths along tensors based on specified settings.
* It applies transformations to rotate the extruded paths according to the `Rotation` setting if `Transform Rotation` is enabled.
* If `Use Per Point Max Iterations` is true, it uses the value from `Per-point Iterations` to limit the number of iterations for each point individually during the extrusion process.
* The node aligns the axis of the extruded paths based on the `Align Axis` setting.

#### Configuration

<details>

<summary><strong>Use Per Point Max Iterations</strong> <code>bool</code></summary>

Controls use per point max iterations.

</details>

<details>

<summary><strong>Per-point Iterations</strong> <code>Name</code></summary>

Per-point Max Iterations.

⚡ PCG Overridable

</details>

<details>

<summary><strong>Max Iterations</strong> <code>int32</code></summary>

Max Iterations. If using per-point max, this will act as a clamping mechanism.

⚡ PCG Overridable

</details>

<details>

<summary><strong>Use Max from Points</strong> <code>bool</code></summary>

Whether to adjust max iteration based on max value found on points. Use at your own risks!

⚡ PCG Overridable

</details>

<details>

<summary><strong>Tensor Sampling Settings</strong> <code>PCGExTensorHandlerDetails</code></summary>

Tensor sampling settings. Note that these are applied on the flattened sample, e.g after & on top of individual tensors' mutations.

📦 See: TensorHandler configuration

⚡ PCG Overridable

</details>

**Intersections (Ext)**

<details>

<summary><strong>Do External Path Intersections</strong> <code>bool</code></summary>

Controls do external path intersections.

⚡ PCG Overridable

</details>

<details>

<summary><strong>Ignore Intersection On Origin</strong> <code>bool</code></summary>

If enabled, if the origin location of the extrusion is detected as an intersection, it is not considered an intersection. This allows to have seeds perfectly located on paths used for intersections.

⚡ PCG Overridable

</details>

<details>

<summary><strong>External Path Intersections</strong> <code>PCGExPathIntersectionDetails</code></summary>

Intersection settings

📦 See: PathIntersection configuration

⚡ PCG Overridable

</details>

**Intersections (Self)**

<details>

<summary><strong>Do Self Path Intersections</strong> <code>bool</code></summary>

Whether to test for intersection between actively extruding paths

⚡ PCG Overridable

</details>

<details>

<summary><strong>Self Intersection Mode</strong> <code>PCGExSelfIntersectionMode</code></summary>

How to order intersection checks. Sorting is using seeds input attributes.

**Values:**

* **Path Length**: Sort extrusion by length, and resort to sorting rules in case of equality.
* **Sorting only**: Only use sorting rules to sort paths.

⚡ PCG Overridable

</details>

<details>

<summary><strong>Sort Direction</strong> <code>PCGExSortDirection</code></summary>

Controls the order in which paths extrusion will be stopped when intersecting, if shortest/longest path fails.

⚡ PCG Overridable

</details>

<details>

<summary><strong>Self Path Intersections</strong> <code>PCGExPathIntersectionDetails</code></summary>

Intersection settings for extruding path intersections

📦 See: PathIntersection configuration

⚡ PCG Overridable

</details>

<details>

<summary><strong>Merge On Proximity</strong> <code>bool</code></summary>

Whether to test for intersection between actively extruding paths

⚡ PCG Overridable

</details>

<details>

<summary><strong>├─ Priority</strong> <code>PCGExSelfIntersectionPriority</code></summary>

Controls ├─ priority.

**Values:**

* **Favor Crossing**: Resolve crossing detection first, then merge.
* **Favor Merge**: Resolve merge first, then crossing

⚡ PCG Overridable

</details>

<details>

<summary><strong>├─ Balance</strong> <code>double</code></summary>

Which end of the extruded segment should be favored. 0 = start, 1 = end.

⚡ PCG Overridable

</details>

<details>

<summary><strong>└─ Settings</strong> <code>PCGExPathIntersectionDetails</code></summary>

Whether to test for intersection between actively extruding paths

📦 See: PathIntersection configuration

⚡ PCG Overridable

</details>

**Intersections (Self) > Closing Loops**

<details>

<summary><strong>Detect Closed Loops</strong> <code>bool</code></summary>

Whether the node should attempt to close loops based on angle and proximity

</details>

<details>

<summary><strong>├─ Search Distance</strong> <code>double</code></summary>

Range at which the first point must be located to check angle

⚡ PCG Overridable

</details>

<details>

<summary><strong>└─ Search Angle</strong> <code>double</code></summary>

Angle at which the loop will be closed, if within range

⚡ PCG Overridable

</details>

**Limits**

<details>

<summary><strong>Use Max Length</strong> <code>bool</code></summary>

Whether to limit the length of the generated path

</details>

<details>

<summary><strong>Max Length Input</strong> <code>PCGExInputValueType</code></summary>

Controls max length input.

</details>

<details>

<summary><strong>Max Length (Attr)</strong> <code>Name</code></summary>

Max length Attribute

⚡ PCG Overridable

</details>

<details>

<summary><strong>Max Length</strong> <code>double</code></summary>

Max length Constant

⚡ PCG Overridable

</details>

<details>

<summary><strong>Use Max Points Count</strong> <code>bool</code></summary>

Whether to limit the number of points in a generated path

</details>

<details>

<summary><strong>Max Points Count Input</strong> <code>PCGExInputValueType</code></summary>

Controls max points count input.

</details>

<details>

<summary><strong>Max Points Count (Attr)</strong> <code>Name</code></summary>

Max length Attribute

⚡ PCG Overridable

</details>

<details>

<summary><strong>Max Points Count</strong> <code>int32</code></summary>

Max length Constant

⚡ PCG Overridable

</details>

<details>

<summary><strong>Fuse Distance</strong> <code>double</code></summary>

Whether to limit path length or not

⚡ PCG Overridable

</details>

<details>

<summary><strong>Stop Condition Handling</strong> <code>PCGExTensorStopConditionHandling</code></summary>

How to deal with points that are stopped

⚡ PCG Overridable

</details>

<details>

<summary><strong>Allow Child Extrusions</strong> <code>bool</code></summary>

Whether to stop sampling when extrusion is stopped. While path will be cut, there's a chance that the head of the search comes back into non-stopping conditions, which would start a new extrusion. With this option disabled, new paths won't be permitted to exist.

⚡ PCG Overridable

</details>

<details>

<summary><strong>Ignore Stopped Seeds</strong> <code>bool</code></summary>

If enabled, seeds that start stopped won't be extruded at all. Otherwise, they are transformed until they eventually reach a point that's outside stopping conditions and start an extrusion.

</details>

**Output**

<details>

<summary><strong>Refresh Seed</strong> <code>bool</code></summary>

Whether to give a new seed to the points. If disabled, they will inherit the original one.

</details>

<details>

<summary><strong>Paths Output Settings</strong> <code>PCGExPathOutputDetails</code></summary>

...

📦 See: PathOutput configuration

</details>

**Tagging & Forwarding**

<details>

<summary><strong>Attributes To Path Tags</strong> <code>PCGExAttributeToTagDetails</code></summary>

TBD

📦 See: AttributeToTag configuration

</details>

<details>

<summary><strong>Tag If Child Extrusion</strong> <code>bool</code></summary>

Controls tag if child extrusion.

</details>

<details>

<summary><strong>Is Child Extrusion Tag</strong> <code>String</code></summary>

...

</details>

<details>

<summary><strong>Tag If Is Stopped By Filters</strong> <code>bool</code></summary>

Controls tag if is stopped by filters.

</details>

<details>

<summary><strong>Is Stopped By Filters Tag</strong> <code>String</code></summary>

...

</details>

<details>

<summary><strong>Tag If Is Stopped By Intersection</strong> <code>bool</code></summary>

Controls tag if is stopped by intersection.

</details>

<details>

<summary><strong>Is Stopped By Intersection Tag</strong> <code>String</code></summary>

...

</details>

<details>

<summary><strong>Tag If Is Stopped By Self Intersection</strong> <code>bool</code></summary>

Controls tag if is stopped by self intersection.

</details>

<details>

<summary><strong>Is Stopped By Self Intersection Tag</strong> <code>String</code></summary>

...

</details>

<details>

<summary><strong>Tag If Self Merged</strong> <code>bool</code></summary>

Controls tag if self merged.

</details>

<details>

<summary><strong>Is Self Merged Tag</strong> <code>String</code></summary>

...

</details>

<details>

<summary><strong>Tag If Is Follow Up</strong> <code>bool</code></summary>

Controls tag if is follow up.

</details>

<details>

<summary><strong>Is Follow Up Tag</strong> <code>String</code></summary>

...

</details>

**Transforms**

<details>

<summary><strong>Transform Rotation</strong> <code>bool</code></summary>

Controls transform rotation.

⚡ PCG Overridable

</details>

<details>

<summary><strong>Rotation</strong> <code>PCGExTensorTransformMode</code></summary>

Controls rotation.

⚡ PCG Overridable

</details>

<details>

<summary><strong>Align Axis</strong> <code>PCGExAxis</code></summary>

Controls align axis.

⚡ PCG Overridable

</details>

***

Source: `Source\PCGExElementsTensors\Public\Elements\PCGExExtrudeTensors.h`
