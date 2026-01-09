---
description: 'In editor :: PCGEx | Clipper2 : Offset'
icon: circle
---

# Clipper2 : Offset

{% hint style="warning" %}
## AI-generated page -- to be reviewed 
While not 100% accurate, it should properly capture what the node/factory does. It stills needs to be proofread by a human.
{% endhint %}

> Does a Clipper2 offset operation with optional dual (inward+outward) offset.

### Overview

This node applies an offset operation to input paths, creating new geometries that are either inset or outset from the original shapes. It's particularly useful for creating outlines, borders, or expanding/shrinking shapes while maintaining their topological structure. The node supports both single and dual offsets, allowing you to generate both inward and outward variations of your input geometry.

{% hint style="info" %}
This node requires paths as input. Make sure your data is structured as paths before applying this operation.
{% endhint %}

<details>

<summary>Inputs</summary>

* **Main** (required): Input paths to offset
* **Secondary** (optional): Additional paths for more complex operations

</details>

<details>

<summary>Outputs</summary>

* **Main**: Offset paths, potentially with multiple iterations and optional tagging
* **Secondary** (optional): Secondary output paths if used

</details>

### Properties Overview

Controls how the offset operation is performed and what output is generated.

***

#### Projection Settings

Controls how 3D input data is projected onto a 2D plane for processing.

**Projection Normal**

_The normal vector of the 2D projection plane. Defaults to Up for XY projection._

* Used when projecting 3D points into 2D space for offset calculations
* Affects the orientation of the final offset geometry

**Use Local Normal**

_When enabled, uses a local normal attribute from input data._

* If true, reads normal from an attribute named "Normal" (or custom name)
* Falls back to Projection Normal if no valid local normal is found

**Method**

_How to compute the 2D projection plane._

* **Normal**: Uses a fixed or local normal vector
* **Best Fit**: Computes the best-fit plane using eigen values from input points

***

#### Iterations Settings

Controls how many times the offset operation is applied and how iteration counts are handled.

**Iterations**

_Number of iterations to apply._

* Can be set as a constant value or read from an attribute on input data
* Each iteration applies the same offset amount, building up the effect progressively
* Example: Setting this to 3 will create 3 nested offsets

**Consolidation**

_How to determine final iteration count when iteration attributes from multiple sources differ._

* **First**: Use the first source's iteration count
* **Last**: Use the last source's iteration count
* **Average**: Use the average of all iteration counts
* **Min**: Use the minimum iteration count
* **Max**: Use the maximum iteration count

**Min Iterations**

_Minimum guaranteed iterations._

* Ensures at least this many iterations are applied, even if input data suggests fewer
* Useful for preventing empty results when using attribute-based iteration counts

***

#### Offset Settings

Controls the core offset parameters and behavior.

**Offset Amount**

_The distance to offset by._

* Can be a constant value or read from an attribute on input data
* Positive values create outward offsets (expanding shapes)
* Negative values create inward offsets (shrinking shapes)
* Example: Setting this to 20 will expand all paths by 20 units

**Offset Scale**

_Scale factor applied to the offset amount._

* Multiplies the base offset value before applying it
* Useful for adjusting relative sizing when using attribute-based offsets
* Example: With an offset of 10 and scale of 0.5, the actual offset becomes 5

**Join Type**

_How corners are joined in the offset geometry._

* **Round**: Creates rounded corners
* **Square**: Creates square corners (extends to meet at right angles)
* **Miter**: Creates sharp corners with extended lines
* **Bevel**: Creates beveled (angled) corners

**Miter Limit**

_Limit for miter joins, only used when Join Type is set to Miter._

* Controls how far mitered corners can extend before being clipped
* Higher values allow sharper angles
* Example: Setting this to 3.0 will allow miters up to 3 times the offset distance

**End Type (Closed Paths)**

_How closed paths are handled at their endpoints._

* **Polygon**: Treats all paths as closed polygons (ignores open/closed state)
* **Joined**: Creates thin paths with double-sided offsets
* **Butt**: Ends are cut square to the path
* **Square**: Ends extend beyond the path
* **Round**: Ends are rounded

**End Type (Open Paths)**

_How open paths are handled at their endpoints._

* Only visible when "Skip Open Paths" is disabled
* Same options as closed paths but affects open path ends differently

***

#### Output Settings

Controls how iteration data and tags are written to output.

**Write Iteration**

_When enabled, writes the iteration index to a data attribute._

* Useful for tracking which offset iteration each point belongs to
* Enables downstream operations that depend on iteration level

**Iteration Attribute Name**

_Name of the attribute where iteration index is stored._

* Default is "Iteration"
* Must be unique and not conflict with existing attributes

**Tag Iteration**

_When enabled, writes the iteration index as a tag._

* Tags are useful for filtering or grouping by offset level
* Helps organize output data in downstream nodes

**Iteration Tag Name**

_Name of the tag used to mark iteration levels._

* Default is "OffsetNum"
* Used when "Tag Iteration" is enabled

**Tag Dual**

_When enabled, tags dual (negative) offsets._

* Useful for distinguishing between inward and outward offsets
* Helps in creating complex offset structures with both types

**Dual Tag Name**

_Name of the tag used to mark dual offsets._

* Default is "Dual"
* Applied only when "Tag Dual" is enabled

### Notes

* This node uses Clipper2's robust offsetting algorithm, which handles self-intersections and complex geometries well
* When using attribute-based inputs, ensure the attributes exist on all input points to avoid unexpected behavior
* For best results with complex shapes, consider using a minimum iteration count to prevent empty outputs
* The dual offset feature is particularly useful for creating nested structures or hollow shapes
* Iteration tagging can be combined with filtering nodes to process specific offset levels separately
