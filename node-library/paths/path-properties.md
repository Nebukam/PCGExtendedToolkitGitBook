---
description: 'In editor :: PCGEx | Path : Properties'
icon: circle
---

# Path Properties

{% hint style="info" %}
This page was generated from the source code. It should properly capture what the node does, but still needs to be proofread by a human.
{% endhint %}

> One-stop node to compute useful path infos.

#### Overview

This node calculates and outputs a comprehensive set of geometric and topological properties for paths in your procedural content. It's designed to extract meaningful data from path structures, such as length, area, direction, winding order, and more. These computed values can be used for filtering, styling, or driving other procedural operations.

It is particularly useful when you need to analyze the shape, size, orientation, or nesting of paths within your dataset. You can output these properties directly to attributes on the points that make up each path, as well as to the path data itself.

{% hint style="info" %}
Connects to **Path** inputs and outputs to **Path** pins.
{% endhint %}

#### How It Works

This node processes paths by first determining their geometric characteristics in a 2D projection plane. For each path, it computes various metrics like total length, area, perimeter, compactness, and winding order (clockwise or counter-clockwise). It also calculates the centroid and oriented bounding box properties.

For individual points along each path, it evaluates directional relationships such as angles between consecutive segments, distances to neighbors, and normal vectors. These point-level attributes are useful for creating detailed path behaviors or visual effects.

The node supports inclusion analysis to determine how paths relate to one another (e.g., which are outermost, inner, or at odd depths). It can optionally output filtered lists of these paths to dedicated pins based on their inclusion status.

All computed values are written as attributes to the input data. The node allows you to control whether these attributes are packed per input or merged into a single set for efficiency.

<details>

<summary>Inputs</summary>

Expects **Path** data containing point sequences that define paths.

</details>

<details>

<summary>Outputs</summary>

Writes computed path and point attributes back to the input data. Optionally outputs filtered path lists to additional pins if inclusion pins are enabled.

</details>

#### Configuration

<details>

<summary><strong>ProjectionDetails</strong><br><em>Projection settings. Some path data must be computed on a 2D plane.</em></summary>

Controls how the node projects path data onto a 2D plane for calculations like area, perimeter, and winding order.

**Values**:

* **Normal**: Uses a normal vector to project points onto a plane.
* **Best Fit**: Computes an eigenvalue-based best-fit plane from the points.

</details>

<details>

<summary><strong>InclusionDetails</strong><br><em>Inclusion details settings.</em></summary>

Settings for how inclusion relationships between paths are determined. This affects which paths are tagged as outer, inner, or odd-depth.

</details>

<details>

<summary><strong>bUseInclusionPins</strong><br><em>If enabled, will output data to additional pins. Note that all outputs are added to the default Path pin; extra pins contain a filtered list of the same data.</em></summary>

When enabled, this node creates additional output pins for outer, inner, and odd-depth paths. These pins contain subsets of the main path data.

</details>

<details>

<summary><strong>bOuterIsNotOdd</strong><br><em>If enabled, outer path (inclusion depth of zero) will not be considered "odd" even if they technically are.</em></summary>

When enabled, paths with inclusion depth zero are never tagged as odd, even if their depth modulo 2 would normally classify them as such.

</details>

<details>

<summary><strong>PathAttributePackingMode</strong><br><em>Attribute set packing</em></summary>

Controls how attributes are organized in the output data.

**Values**:

* **Per Input**: Each input path gets its own attribute set.
* **Merged**: All paths share a single merged attribute set.

</details>

<details>

<summary><strong>bWritePathDataToPoints</strong><br><em>Whether to also write path attribute to the data set. Looks appealing, but can have massive memory cost -- this is legacy only.</em></summary>

When enabled, writes all computed path attributes directly to the points that make up each path.

</details>

<details>

<summary><strong>bWritePathLength</strong><br><em>Output Path Length.</em></summary>

When enabled, computes and stores the total length of the path as a double attribute.

</details>

<details>

<summary><strong>PathLengthAttributeName</strong><br><em>Name of the 'double' attribute to write path length to.</em></summary>

The name of the attribute where the path's total length is stored.

</details>

<details>

<summary><strong>bWritePathDirection</strong><br><em>Output averaged path direction.</em></summary>

When enabled, computes and stores an averaged direction vector for the entire path.

</details>

<details>

<summary><strong>PathDirectionAttributeName</strong><br><em>Name of the 'FVector' attribute to write averaged direction to.</em></summary>

The name of the attribute where the averaged path direction is stored.

</details>

<details>

<summary><strong>bWritePathCentroid</strong><br><em>Output averaged path direction.</em></summary>

When enabled, computes and stores the centroid (average position) of all points in the path.

</details>

<details>

<summary><strong>PathCentroidAttributeName</strong><br><em>Name of the 'FVector' attribute to write averaged direction to.</em></summary>

The name of the attribute where the path's centroid is stored.

</details>

<details>

<summary><strong>bWriteIsClockwise</strong><br><em>Output path winding.</em></summary>

When enabled, determines and stores whether the path follows a clockwise or counter-clockwise direction in 2D space.

</details>

<details>

<summary><strong>IsClockwiseAttributeName</strong><br><em>Name of the 'bool' attribute to write winding to.</em></summary>

The name of the attribute where the winding direction is stored (true = clockwise).

</details>

<details>

<summary><strong>bWriteArea</strong><br><em>Output path area.</em></summary>

When enabled, computes and stores the enclosed area of the path in 2D space.

</details>

<details>

<summary><strong>AreaAttributeName</strong><br><em>Name of the 'double' attribute to write area to.</em></summary>

The name of the attribute where the path's area is stored.

</details>

<details>

<summary><strong>bWritePerimeter</strong><br><em>Output path perimeter.</em></summary>

When enabled, computes and stores the 2D projected perimeter of the path.

</details>

<details>

<summary><strong>PerimeterAttributeName</strong><br><em>Name of the 'double' attribute to write perimeter to (differ from length because this is the 2D projected value used to infer other values).</em></summary>

The name of the attribute where the path's perimeter is stored.

</details>

<details>

<summary><strong>bWriteCompactness</strong><br><em>Output path compactness.</em></summary>

When enabled, computes and stores a normalized measure of how compact the path is (perimeter squared divided by area).

</details>

<details>

<summary><strong>CompactnessAttributeName</strong><br><em>Name of the 'double' attribute to write compactness to.</em></summary>

The name of the attribute where the path's compactness is stored.

</details>

<details>

<summary><strong>bWriteInclusionDepth</strong><br><em>Output path inclusion depth.</em></summary>

When enabled, determines and stores how deeply nested a path is within other paths.

</details>

<details>

<summary><strong>InclusionDepthAttributeName</strong><br><em>Name of the 'int32' attribute to write inclusion depth to.</em></summary>

The name of the attribute where the path's inclusion depth is stored.

</details>

<details>

<summary><strong>bWriteNumInside</strong><br><em>Output path number of children.</em></summary>

When enabled, counts and stores how many other paths are fully enclosed within this one.

</details>

<details>

<summary><strong>NumInsideAttributeName</strong><br><em>Name of the 'int32' attribute to write how many paths are contained inside this one.</em></summary>

The name of the attribute where the number of enclosed paths is stored.

</details>

<details>

<summary><strong>bWriteBoundingBoxCenter</strong><br><em>.</em></summary>

When enabled, computes and stores the center point of the path's oriented bounding box.

</details>

<details>

<summary><strong>BoundingBoxCenterAttributeName</strong><br><em>Name of the 'FVector' attribute to write bounding box center to.</em></summary>

The name of the attribute where the bounding box center is stored.

</details>

<details>

<summary><strong>bWriteBoundingBoxExtent</strong><br><em>.</em></summary>

When enabled, computes and stores the dimensions (extent) of the path's oriented bounding box.

</details>

<details>

<summary><strong>BoundingBoxExtentAttributeName</strong><br><em>Name of the 'FVector' attribute to write bounding box extent to.</em></summary>

The name of the attribute where the bounding box extent is stored.

</details>

<details>

<summary><strong>bWriteBoundingBoxOrientation</strong><br><em>.</em></summary>

When enabled, computes and stores the orientation (rotation) of the path's oriented bounding box.

</details>

<details>

<summary><strong>BoundingBoxOrientationAttributeName</strong><br><em>Name of the 'FQuat' attribute to write bounding box orientation to.</em></summary>

The name of the attribute where the bounding box orientation is stored.

</details>

<details>

<summary><strong>UpVector</strong><br><em>Up Attribute constant</em></summary>

A constant vector used as the up direction for various calculations like normal and binormal vectors.

</details>

<details>

<summary><strong>bWriteDot</strong><br><em>Output Dot product of Prev/Next directions.</em></summary>

When enabled, computes and stores the dot product between the previous and next edge directions at each point.

</details>

<details>

<summary><strong>DotAttributeName</strong><br><em>Name of the 'double' attribute to write distance to next point to.</em></summary>

The name of the attribute where the dot product is stored.

</details>

<details>

<summary><strong>bWriteAngle</strong><br><em>Output Dot product of Prev/Next directions.</em></summary>

When enabled, computes and stores the angle between the previous and next edge directions at each point.

</details>

<details>

<summary><strong>AngleAttributeName</strong><br><em>Name of the 'double' attribute to write angle to next point to.</em></summary>

The name of the attribute where the angle is stored.

</details>

<details>

<summary><strong>AngleRange</strong><br><em>Unit/range to output the angle to.</em></summary>

Controls how the angle is normalized or expressed (e.g., radians from 0 to π, or degrees from -180 to +180).

**Values**:

* **Radians (0..+PI)**: Angle in radians from 0 to π.
* **Radians (-PI..+PI)**: Angle in radians from -π to +π.
* **Radians (0..+TAU)**: Angle in radians from 0 to 2π.
* **Degrees (0..+180)**: Angle in degrees from 0 to 180.
* **Degrees (-180..+180)**: Angle in degrees from -180 to +180.
* **Degrees (0..+360)**: Angle in degrees from 0 to 360.
* **Normalized Half (0..180 -> 0..1)**: Normalized angle from 0 to 1 based on 0–180° range.
* **Normalized (0..+360 -> 0..1)**: Normalized angle from 0 to 1 based on 0–360° range.
* **Inv. Normalized Half (0..180 -> 1..0)**: Inverted normalized angle from 1 to 0 based on 0–180° range.
* **Inv. Normalized (0..+360 -> 1..0)**: Inverted normalized angle from 1 to 0 based on 0–360° range.

</details>

<details>

<summary><strong>bWriteDistanceToNext</strong><br><em>Output distance to next.</em></summary>

When enabled, computes and stores the Euclidean distance to the next point in the path.

</details>

<details>

<summary><strong>DistanceToNextAttributeName</strong><br><em>Name of the 'double' attribute to write distance to next point to.</em></summary>

The name of the attribute where the distance to the next point is stored.

</details>

<details>

<summary><strong>bWriteDistanceToPrev</strong><br><em>Output distance to prev.</em></summary>

When enabled, computes and stores the Euclidean distance to the previous point in the path.

</details>

<details>

<summary><strong>DistanceToPrevAttributeName</strong><br><em>Name of the 'double' attribute to write distance to prev point to.</em></summary>

The name of the attribute where the distance to the previous point is stored.

</details>

<details>

<summary><strong>bWriteDistanceToStart</strong><br><em>Output distance to start.</em></summary>

When enabled, computes and stores the cumulative distance from the start of the path to the current point.

</details>

<details>

<summary><strong>DistanceToStartAttributeName</strong><br><em>Name of the 'double' attribute to write distance to start to.</em></summary>

The name of the attribute where the cumulative distance from the start is stored.

</details>

<details>

<summary><strong>bWriteDistanceToEnd</strong><br><em>Output distance to end.</em></summary>

When enabled, computes and stores the cumulative distance from the current point to the end of the path.

</details>

<details>

<summary><strong>DistanceToEndAttributeName</strong><br><em>Name of the 'double' attribute to write distance to start to.</em></summary>

The name of the attribute where the cumulative distance to the end is stored.

</details>

<details>

<summary><strong>bWritePointTime</strong><br><em>Output distance to end.</em></summary>

When enabled, computes and stores a normalized time value along the path (0 at start, 1 at end).

</details>

<details>

<summary><strong>PointTimeAttributeName</strong><br><em>Name of the 'double' attribute to write distance to start to.</em></summary>

The name of the attribute where the normalized point time is stored.

</details>

<details>

<summary><strong>bTimeOneMinus</strong><br><em>.</em></summary>

When enabled, stores 1 minus the normalized time (i.e., 1 at start, 0 at end).

</details>

<details>

<summary><strong>bWritePointNormal</strong><br><em>Output point normal.</em></summary>

When enabled, computes and stores a normal vector for each point based on its surrounding edges.

</details>

<details>

<summary><strong>PointNormalAttributeName</strong><br><em>Name of the 'FVector' attribute to write point normal to.</em></summary>

The name of the attribute where the point normal is stored.

</details>

<details>

<summary><strong>bWritePointAvgNormal</strong><br><em>Output point normal.</em></summary>

When enabled, computes and stores an averaged normal vector for each point based on its neighbors.

</details>

<details>

<summary><strong>PointAvgNormalAttributeName</strong><br><em>Name of the 'FVector' attribute to write point averaged normal to.</em></summary>

The name of the attribute where the averaged point normal is stored.

</details>

<details>

<summary><strong>bWritePointBinormal</strong><br><em>Output point normal.</em></summary>

When enabled, computes and stores a binormal vector for each point (perpendicular to normal and up vector).

</details>

<details>

<summary><strong>PointBinormalAttributeName</strong><br><em>Name of the 'FVector' attribute to write point binormal to. Note that it's stabilized.</em></summary>

The name of the attribute where the point binormal is stored.

</details>

<details>

<summary><strong>bWriteDirectionToNext</strong><br><em>Output direction to next normal.</em></summary>

When enabled, computes and stores the normalized direction vector from the current point to the next one.

</details>

<details>

<summary><strong>DirectionToNextAttributeName</strong><br><em>Name of the 'FVector' attribute to write direction to next point to.</em></summary>

The name of the attribute where the direction to the next point is stored.

</details>

<details>

<summary><strong>bWriteDirectionToPrev</strong><br><em>Output direction to prev normal.</em></summary>

When enabled, computes and stores the normalized direction vector from the current point to the previous one.

</details>

<details>

<summary><strong>DirectionToPrevAttributeName</strong><br><em>Name of the 'FVector' attribute to write direction to prev point to.</em></summary>

The name of the attribute where the direction to the previous point is stored.

</details>

<details>

<summary><strong>bTagConcave</strong><br><em>.</em></summary>

When enabled, tags points that form concave angles in the path.

</details>

<details>

<summary><strong>ConcaveTag</strong><br><em>.</em></summary>

The tag value used to identify concave points.

</details>

<details>

<summary><strong>bTagConvex</strong><br><em>.</em></summary>

When enabled, tags points that form convex angles in the path.

</details>

<details>

<summary><strong>ConvexTag</strong><br><em>.</em></summary>

The tag value used to identify convex points.

</details>

<details>

<summary><strong>bTagOuter</strong><br><em>.</em></summary>

When enabled, tags paths that are not enclosed by any other path.

</details>

<details>

<summary><strong>OuterTag</strong><br><em>Outer paths are not enclosed by any other path</em></summary>

The tag value used to identify outer paths.

</details>

<details>

<summary><strong>bTagInner</strong><br><em>.</em></summary>

When enabled, tags paths that are enclosed by one or more other paths.

</details>

<details>

<summary><strong>InnerTag</strong><br><em>Inner paths are enclosed by one or more paths</em></summary>

The tag value used to identify inner paths.

</details>

<details>

<summary><strong>bTagOddInclusionDepth</strong><br><em>.</em></summary>

When enabled, tags paths with an odd inclusion depth (i.e., depth % 2 != 0).

</details>

<details>

<summary><strong>OddInclusionDepthTag</strong><br><em>Median paths are inner with a depth %2 != 0</em></summary>

The tag value used to identify paths with odd inclusion depth.

</details>
