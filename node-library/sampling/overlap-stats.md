---
description: 'In editor :: PCGEx | Sample : Overlap Stats'
icon: circle
---

# Overlap Stats

{% hint style="warning" %}
## AI-generated page - To be reviewed. 
While not 100% accurante, it should properly capture what it does. It stills needs to be reviewed and proofread by a human.
{% endhint %}

> Sample & write per-point overlap stats between entire point data.

### Overview

This node analyzes how points from different datasets overlap with each other and writes statistics about these overlaps directly to the input points. It helps identify areas where multiple datasets intersect, which is useful for creating varied or constrained layouts, avoiding collisions, or understanding spatial relationships in procedural content.

It works by testing bounds between all point data sets and recording how many times each point overlaps with others. The results are written as attributes on each point, allowing downstream nodes to react based on overlap counts.

{% hint style="info" %}
This node is computationally expensive for large datasets due to the pairwise overlap checks. Consider using a smaller number of input datasets or limiting the point count per dataset.
{% endhint %}

<details>

<summary>Inputs</summary>

* **In** (Main Input): Point data to be analyzed for overlaps
* **Target**: Additional point data sets that will be tested against the main input
* **Point Filters**: Optional filters to determine which points should be considered in overlap tests

</details>

<details>

<summary>Outputs</summary>

* **Out** (Main Output): The original point data with new attributes added based on overlap statistics

</details>

### Properties Overview

Controls how overlap detection is performed and what information is written.

***

#### Settings

Controls the core overlap detection behavior.

**Overlap Test Mode**

_What method to use when checking for overlaps between points._

* How it affects results: Different modes trade off accuracy for performance
* Value ranges: None

**Values**:

* **Fast**: Only test using datasets' overall bounds (fastest)
* **Box**: Test every point's bounds as transformed box (more accurate than Fast, but may miss some overlaps)
* **Sphere**: Test every point's bounds as spheres (most accurate, but can have false positives)

**Point Bounds Source**

_What type of bounds to use when computing overlaps._

* How it affects results: Different bounds types change how overlap is interpreted
* Value ranges: None

**Values**:

* **Scaled Bounds**: Uses scaled bounds for each point (default)
* **Density Bounds**: Scaled bounds with steepness factor applied
* **Bounds**: Unscaled bounds (not recommended for most cases)
* **Center**: Tiny size 1 box at point center

**Expansion**

_Expand bounds by this amount to account for transformation errors._

* How it affects results: Larger values increase overlap detection tolerance
* Value ranges: Any non-negative number

**Minimum Threshold**

_The minimum amount two sub-points must overlap to be counted._

* How it affects results: Higher values require more overlap before counting
* Value ranges: 0 or greater

**Threshold Measure**

_How to interpret the minimum threshold value._

* How it affects results: Determines if threshold is a world distance or percentage
* Value ranges: None

**Values**:

* **Relative**: Input value is normalized between 0..1, used as a factor of average radius
* **Discrete**: Raw value is used as absolute distance in world units

***

#### Outputs

Controls which overlap statistics are written to attributes.

**Write Overlap Count**

_When enabled, writes the unique overlap count per point._

* How it affects results: Adds an integer attribute with how many different datasets overlapped this point

**Overlap Count Attribute Name**

_Name of the 'int32' attribute to write unique overlap count to._

* How it affects results: Sets the name of the output attribute for unique overlap count

**Write Overlap Sub Count**

_When enabled, writes the total number of overlaps per point._

* How it affects results: Adds an integer attribute with how many times other points overlapped this point

**Overlap Sub Count Attribute Name**

_Name of the 'int32' attribute to write total overlap sub-count to._

* How it affects results: Sets the name of the output attribute for total overlap count

**Write Relative Overlap Count**

_When enabled, writes the relative unique overlap count per point._

* How it affects results: Adds a double attribute with normalized overlap count (0-1)

**Relative Overlap Count Attribute Name**

_Name of the 'int32' attribute to write relative unique overlap count to._

* How it affects results: Sets the name of the output attribute for relative overlap count

**Write Relative Overlap Sub Count**

_When enabled, writes the relative total number of overlaps per point._

* How it affects results: Adds a double attribute with normalized total overlap count (0-1)

**Relative Overlap Sub Count Attribute Name**

_Name of the 'int32' attribute to write relative total overlap sub-count to._

* How it affects results: Sets the name of the output attribute for relative total overlap count

***

#### Tagging

Controls whether points are tagged based on their overlap status.

**Tag If Has Any Overlap**

_When enabled, adds a tag to points that have at least one overlap._

* How it affects results: Adds a boolean tag to points with any overlap detected

**Has Any Overlap Tag**

_Name of the tag to add to points that have any overlap._

* How it affects results: Sets the name of the tag added to points with overlaps

**Tag If Has No Overlap**

_When enabled, adds a tag to points that have no overlap._

* How it affects results: Adds a boolean tag to points with no overlaps detected

**Has No Overlap Tag**

_Name of the tag to add to points that have no overlap._

* How it affects results: Sets the name of the tag added to points without overlaps

### Notes

* This node is designed for comparing multiple point datasets against each other, not for self-overlap detection within a single dataset
* For performance reasons, avoid using "Sphere" mode with large datasets
* The overlap counts are normalized relative to all datasets combined, making it easy to compare overlap intensity across different scenarios
* Consider using point filters to limit which points are analyzed for overlaps if performance is an issue
* When using the "Fast" test mode, overlapping bounds may not reflect actual point intersections, especially with complex transformations
