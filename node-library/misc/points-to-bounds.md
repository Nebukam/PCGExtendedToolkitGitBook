---
icon: circle
---

# Points to Bounds

{% hint style="warning" %}
## AI-generated page - To be reviewed. 
While not 100% accurante, it should properly capture what it does. It stills needs to be reviewed and proofread by a human.
{% endhint %}

> Merge a group of points into a single point that represents their overall bounds.

### Overview

This node takes a collection of points and computes their bounding volume, then outputs either a single point representing those bounds or writes the computed bounds data to the input points' attributes. It's useful for creating representative points for clusters, groups, or collections of objects.

{% hint style="info" %}
The output point's position is based on the spatial extent of all input points, not their individual positions.
{% endhint %}

<details>

<summary>Inputs</summary>

* **Main Input**: A collection of points to be merged into bounds
* **Filters** (optional): Point filters to apply before processing

</details>

<details>

<summary>Outputs</summary>

* **Main Output**: Either a single point with bounds data or modified input points depending on the output mode

</details>

### Properties Overview

Controls how the bounds are computed and what happens to the data.

***

#### Bounds Settings

Configures how the bounding volume is calculated from the input points.

**Output Oriented Bounding Box**

_When enabled, computes an oriented bounding box aligned with the point cloud's principal axes._

* Uses the best-fit plane to determine axis alignment
* Affects the shape and orientation of the output bounds
* Useful for creating tighter-fitting bounds that follow the data distribution

**Bounds Source**

_Determines how point sizes are considered when computing bounds._

**Values**:

* **Scaled Bounds**: Considers both position and scale of points
* **Density Bounds**: Includes density and steepness attributes in the calculation
* **Bounds**: Uses only position-based bounds (ignores scale)
* **Center**: Creates a tiny 1-unit size box at the center point

**Output Mode**

_Specifies how the results are returned._

**Values**:

* **Collapse**: Replaces the entire input group with a single point containing all computed bounds data
* **Write Data**: Keeps the original points and writes bounds information to their attributes instead

***

#### Blending Settings

Controls how properties from multiple points are combined into the output.

**Blend Properties**

_When enabled, combines various point attributes using blending operations._

* Applies blending to position, scale, rotation, color, and other attributes
* Uses the settings defined in the Blending section below
* Affects the final values of the output point when Collapse mode is used

**Blending Settings**

_Configures how individual attributes are blended together._

**Values**:

* **Position Blending**: How to combine positions (e.g., average, min, max)
* **Scale Blending**: How to combine scales (e.g., average, sum)
* **Rotation Blending**: How to combine rotations (e.g., average, weighted average)
* **Color Blending**: How to combine colors (e.g., average, weighted average)

***

#### Data Output Settings

Controls which bounds-related data is written to the output points or attributes.

**Write Transform**

_When enabled, writes transform information to an attribute._

* Writes position, rotation, and scale to the specified attribute name
* Useful for preserving spatial relationships in the original point data

**Write Density**

_When enabled, writes density information to an attribute._

* Stores the combined density value of all points in the group
* Helpful for maintaining density-based properties in clustered data

**Write Bounds Min/Max**

_When enabled, writes the minimum and maximum bounds of the point group._

* Useful for preserving spatial extent information
* Can be used to reconstruct bounds later if needed

**Write Color**

_When enabled, writes color information to an attribute._

* Combines colors from all points in the group
* Maintains visual properties across clusters

**Write Steepness**

_When enabled, writes steepness information to an attribute._

* Stores the combined steepness value of all points
* Useful for terrain or surface-related data

**Write Best Fit Plane**

_When enabled, computes and writes a best-fit plane from the point cloud._

* Calculates the principal axis-aligned plane that best fits the points
* Useful for surface fitting or alignment purposes

**Axis Order**

_Specifies how to order the axes when computing the best-fit plane._

**Values**:

* **X > Y > Z**: Standard XYZ ordering
* **Y > Z > X**: Alternative axis ordering
* **Z > X > Y**: Another alternative axis ordering
* **Y > X > Z**: Different axis permutation
* **Z > Y > X**: Reverse axis ordering
* **X > Z > Y**: Mixed axis ordering

***

#### Count Settings

Controls whether point counts are written to attributes.

**Write Points Count**

_When enabled, writes the number of points in each group._

* Stores how many original points contributed to each output bounds
* Useful for tracking cluster sizes or point density

**Points Count Attribute Name**

_Name of the attribute where point count is stored._

* Default is "@Data.MergedPointsCount"
* Must be a valid attribute name in your data schema
