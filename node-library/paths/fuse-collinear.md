---
description: 'In editor :: PCGEx | Path : Fuse Collinear'
icon: circle
---

# Fuse Collinear

{% hint style="danger" %}
This documentation has been AI-generated from the source code and may not be 100% accurate.
{% endhint %}

> Fuse collinear points in paths to reduce complexity and clean up geometry.

### Overview

This node removes points that are aligned (collinear) along a path, reducing the number of points while preserving the overall shape. It's useful for simplifying complex paths, removing unnecessary detail, or preparing paths for further processing where fewer points are preferred.

The node works by identifying sequences of points that lie on the same straight line and fusing them into a single point. You can control how collinearity is defined using an angular threshold, and optionally blend attributes from the fused points into the remaining one.

{% hint style="info" %}
This node modifies path geometry by removing intermediate points. The original point data is preserved in the output, but the number of points per path will be reduced.
{% endhint %}

<details>

<summary>Inputs</summary>

* **Main Input**: Paths to process (point data with path information)

</details>

<details>

<summary>Outputs</summary>

* **Main Output**: Processed paths with collinear points fused

</details>

### Properties Overview

Controls how the node identifies and fuses collinear points, as well as optional attribute blending.

***

#### General Settings

Controls basic behavior for identifying and removing collinear points.

**Threshold**

_The maximum angle (in degrees) between consecutive segments to consider them collinear._

* Points that form an angle less than this threshold are considered part of a straight line
* Smaller values mean stricter collinearity requirements, keeping more points
* Larger values allow for more deviation before points are fused

**Example**: With a 10° threshold, three points forming a 5° angle between segments will be fused.

**Invert Threshold**

_When enabled, the node fuses points that are NOT collinear (i.e., creates smooth curves)._

* This is useful for creating smooth transitions between path segments
* When disabled (default), it removes collinear points to simplify straight sections

**Fuse Collocated**

_When enabled, points that are located at the same position are considered collinear._

* Useful for cleaning up paths where points may have slight positional differences due to floating-point precision
* Helps remove duplicate or near-duplicate points

**Fuse Distance**

_The maximum distance between points to consider them collocated (only used when "Fuse Collocated" is enabled)._

* Points closer than this distance are treated as overlapping and fused together
* Default value of 0.001 works well for most cases

***

#### Blending Settings

Controls how attributes from fused points are combined into the remaining point.

**Do Blend**

_When enabled, attributes from fused points are blended into the first point in a collinear chain._

* Allows you to preserve data from removed points by merging their values
* Useful when you want to maintain average or summed properties across the fused segment

**Blending Details**

_Configures how different attributes are merged during fusion._

* **Point Properties**: Controls how position, rotation, scale, and other point properties are blended
* **Custom Attributes**: Allows you to define blending behavior for custom attributes
* Default is "Average" blending for most properties

***

#### Union Metadata Settings

Controls optional metadata writing for fused points.

**Write Is Union**

_When enabled, writes a boolean attribute indicating whether a point was part of a fused group._

* Useful for tracking which points were modified during processing
* Helps with debugging or post-processing logic

**Is Union Attribute Name**

_Name of the boolean attribute that marks union points._

* Default is "bIsUnion"
* Should be unique to avoid conflicts with other attributes

**Write Union Size**

_When enabled, writes an integer attribute indicating how many points were fused into each point._

* Useful for understanding how much simplification occurred
* Helps visualize the impact of fusion on path complexity

**Union Size Attribute Name**

_Name of the integer attribute that stores the number of fused points._

* Default is "UnionSize"
* Should be unique to avoid conflicts with other attributes

***

#### Output Settings

Controls how invalid or empty paths are handled in the output.

**Omit Invalid Paths From Output**

_When enabled, paths that become empty after fusion will not appear in the output._

* Prevents clutter from degenerate paths
* Useful when you want only valid, non-empty paths in your results
