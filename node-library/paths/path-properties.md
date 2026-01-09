---
description: 'In editor :: PCGEx | Path : Properties'
icon: circle
---

# Path Properties

{% hint style="danger" %}
This documentation has been AI-generated from the source code and may not be 100% accurate.
{% endhint %}

> One-stop node to compute useful path infos.

### Overview

This node calculates a wide range of geometric and topological properties for paths, including length, area, centroid, winding order, and more. It also computes per-point attributes like distances, angles, normals, and binormals. The results are written as attributes to the input data, making them available for downstream processing.

It's particularly useful when you need to analyze or classify paths based on their shape characteristics, or when you want to use path geometry in other procedural systems that rely on these computed values.

{% hint style="info" %}
This node can be computationally expensive for complex paths with many points. Consider using it early in your graph and caching results if needed.
{% endhint %}

<details>

<summary>Inputs</summary>

* **Default Input Pin**: Expects point data representing paths (typically from a path generation or extraction operation).
* **Point Filter Pin** _(optional)_: Filters which points to process based on custom criteria.

</details>

<details>

<summary>Outputs</summary>

* **Default Output Pin**: Contains the input point data with new attributes added.
* **Additional Pins** _(if enabled)_: Optional outputs for outer, inner, and odd-depth paths, filtered from the main output.

</details>

### Properties Overview

This node computes both path-level and point-level properties. Path-level properties are written once per path, while point-level properties are computed for each individual point along the path.

***

#### Projection Settings

Controls how 3D path data is projected onto a 2D plane for certain calculations like area or perimeter.

**Projection Method**

_Controls the method used to project points onto a 2D plane._

* Uses either a fixed normal vector or computes the best-fit plane based on point distribution.
* **Values**:
  * **Normal**: Projects using a specified normal vector.
  * **Best Fit**: Computes the best-fit plane from the set of points.

**Projection Normal**

_Vector used to define the 2D projection plane._

* Only relevant when "Projection Method" is set to "Normal".
* Defaults to Up vector for XY projection.

**Support Local Normal**

_When enabled, allows using a point attribute to define the normal for projection._

* If enabled, you can specify a local normal attribute in the next setting.
* When disabled, uses the fixed "Projection Normal".

**Local Projection Normal Attribute**

_Name of the attribute containing per-point normal vectors._

* Only visible when "Support Local Normal" is enabled.
* Used to compute 2D projections based on local geometry.

***

#### Inclusion Settings

Controls how path inclusion tests are performed, useful for determining nesting relationships between paths.

**Inclusion Offset**

_Distance offset applied to projected polygon during inclusion testing._

* Affects how strictly points must lie within a path to be considered "inside".
* Larger values make inclusion tests more lenient.

**Inclusion Tolerance**

_Percentage of points that can lie outside a path and still be considered inside._

* Value between 0 and 1.
* 0 means all points must be inside; 1 means any point is acceptable.
* Useful for handling floating-point precision issues or soft boundaries.

***

#### Path Output Settings

Controls how path-level attributes are written to the data set.

**Packing**

_Determines how path attributes are organized in output._

* **Per Input**: Each input path gets its own attribute set.
* **Merged**: All paths share a single attribute set, which can reduce memory usage but may cause conflicts if multiple paths have different attribute names.

**Write Path Data to Points**

_When enabled, writes path-level attributes directly to each point._

* Can be memory-intensive for large datasets.
* Useful for visualizing or using path properties per-point.

***

#### Path Attributes

Individual settings for writing specific path-level properties.

**Write Path Length**

_When enabled, calculates and stores the total length of the path._

* Stored as a double attribute.
* Useful for sorting paths by length or applying length-based rules.

**Path Length Attribute Name**

_Name of the attribute to store path length._

* Default is "@Data.PathLength".

**Write Path Direction**

_When enabled, computes and stores the average direction vector of the path._

* Stored as a FVector attribute.
* Helps determine the general orientation of the path.

**Path Direction Attribute Name**

_Name of the attribute to store averaged direction._

* Default is "@Data.PathDirection".

**Write Path Centroid**

_When enabled, calculates and stores the centroid (center point) of the path._

* Stored as a FVector attribute.
* Useful for positioning or aligning objects relative to paths.

**Path Centroid Attribute Name**

_Name of the attribute to store path centroid._

* Default is "@Data.PathCentroid".

**Write Is Clockwise**

_When enabled, determines if the path is oriented clockwise (when viewed from above)._

* Stored as a bool attribute.
* Useful for distinguishing inner/outer paths in polygonal structures.

**Is Clockwise Attribute Name**

_Name of the attribute to store winding direction._

* Default is "@Data.Clockwise".

**Write Area**

_When enabled, computes and stores the 2D projected area enclosed by the path._

* Stored as a double attribute.
* Helpful for categorizing shapes or applying area-based rules.

**Area Attribute Name**

_Name of the attribute to store path area._

* Default is "@Data.Area".

**Write Perimeter**

_When enabled, calculates and stores the 2D projected perimeter of the path._

* Stored as a double attribute.
* Useful for shape analysis and comparison.

**Perimeter Attribute Name**

_Name of the attribute to store path perimeter._

* Default is "@Data.Perimeter".

**Write Compactness**

_When enabled, computes and stores the compactness ratio (perimeter squared over area)._

* Stored as a double attribute.
* A measure of how "round" or "compact" a shape is.

**Compactness Attribute Name**

_Name of the attribute to store compactness._

* Default is "@Data.Compactness".

**Write Bounding Box Center**

_When enabled, calculates and stores the center point of the path's oriented bounding box._

* Stored as a FVector attribute.
* Useful for alignment or positioning.

**Bounding Box Center Attribute Name**

_Name of the attribute to store bounding box center._

* Default is "@Data.OBBCenter".

**Write Bounding Box Extent**

_When enabled, calculates and stores the dimensions of the path's oriented bounding box._

* Stored as a FVector attribute.
* Useful for sizing or scaling based on shape dimensions.

**Bounding Box Extent Attribute Name**

_Name of the attribute to store bounding box extent._

* Default is "@Data.OBBExtent".

**Write Bounding Box Orientation**

_When enabled, calculates and stores the orientation of the path's oriented bounding box._

* Stored as a FQuat attribute.
* Useful for aligning objects with the shape's principal axes.

**Bounding Box Orientation Attribute Name**

_Name of the attribute to store bounding box orientation._

* Default is "@Data.OBBOrientation".

**Write Inclusion Depth**

_When enabled, determines how deeply nested a path is within other paths._

* Stored as an int32 attribute.
* Useful for identifying outermost or innermost shapes.

**Inclusion Depth Attribute Name**

_Name of the attribute to store inclusion depth._

* Default is "@Data.InclusionDepth".

**Write Num Inside**

_When enabled, counts how many other paths are fully enclosed by this one._

* Stored as an int32 attribute.
* Useful for hierarchical path structures.

**Num Inside Attribute Name**

_Name of the attribute to store number of enclosed paths._

* Default is "@Data.NumInside".

***

#### Point Output Settings

Controls how point-level attributes are written to the data set.

**Up Vector**

_Vector used as a reference for computing normals and binormals._

* Affects how directions are calculated.
* Default is FVector::UpVector (pointing upward).

***

#### Point Attributes

Individual settings for writing specific per-point properties.

**Write Dot**

_When enabled, computes and stores the dot product of previous and next direction vectors._

* Stored as a double attribute.
* Useful for detecting sharp turns or corners.

**Dot Attribute Name**

_Name of the attribute to store dot product._

* Default is "Dot".

**Write Angle**

_When enabled, computes and stores the angle between previous and next direction vectors._

* Stored as a double attribute.
* Value depends on selected range unit (degrees/radians).

**Angle Attribute Name**

_Name of the attribute to store angle._

* Default is "Angle".

**Angle Range**

_Unit for outputting angles._

* **Radians (0..+PI)**: 0 to π radians.
* **Radians (-PI..+PI)**: -π to +π radians.
* **Radians (0..+TAU)**: 0 to 2π radians.
* **Degrees (0..+180)**: 0 to 180 degrees.
* **Degrees (-180..+180)**: -180 to +180 degrees.
* **Degrees (0..+360)**: 0 to 360 degrees.
* **Normalized Half (0..180 -> 0..1)**: Normalized from 0 to 1 based on 0 to 180 range.
* **Normalized (0..+360 -> 0..1)**: Normalized from 0 to 1 based on 0 to 360 range.
* **Inv. Normalized Half (0..180 -> 1..0)**: Inverted normalized from 180 to 0 based on 0 to 180 range.
* **Inv. Normalized (0..+360 -> 1..0)**: Inverted normalized from 360 to 0 based on 0 to 360 range.

**Write Distance To Next**

_When enabled, computes and stores the distance to the next point in the path._

* Stored as a double attribute.
* Useful for path traversal or spacing calculations.

**Distance To Next Attribute Name**

_Name of the attribute to store distance to next point._

* Default is "DistanceToNext".

**Write Distance To Prev**

_When enabled, computes and stores the distance to the previous point in the path._

* Stored as a double attribute.
* Useful for path traversal or spacing calculations.

**Distance To Prev Attribute Name**

_Name of the attribute to store distance to previous point._

* Default is "DistanceToPrev".

**Write Distance To Start**

_When enabled, computes and stores the cumulative distance from the start of the path._

* Stored as a double attribute.
* Useful for time-based or sequential processing.

**Distance To Start Attribute Name**

_Name of the attribute to store cumulative distance from start._

* Default is "DistanceToStart".

**Write Distance To End**

_When enabled, computes and stores the cumulative distance from the end of the path._

* Stored as a double attribute.
* Useful for reverse traversal or sequential processing.

**Distance To End Attribute Name**

_Name of the attribute to store cumulative distance from end._

* Default is "DistanceToEnd".

**Write Point Time**

_When enabled, computes and stores a normalized time value along the path._

* Stored as a double attribute.
* Can be used for animation or interpolation.

**Point Time Attribute Name**

_Name of the attribute to store point time._

* Default is "PointTime".

**Time One Minus**

_When enabled, stores (1 - time) instead of time._

* Useful for reverse interpolation or symmetry.

**Write Point Normal**

_When enabled, computes and stores the normal vector at each point._

* Stored as a FVector attribute.
* Helpful for surface alignment or lighting effects.

**Point Normal Attribute Name**

_Name of the attribute to store point normal._

* Default is "PointNormal".

**Write Point Average Normal**

_When enabled, computes and stores an averaged normal vector based on neighboring points._

* Stored as a FVector attribute.
* Useful for smoothing or reducing noise in normals.

**Point Average Normal Attribute Name**

_Name of the attribute to store averaged normal._

* Default is "PointAvgNormal".

**Write Point Binormal**

_When enabled, computes and stores the binormal vector at each point._

* Stored as a FVector attribute.
* Useful for surface alignment or generating perpendicular vectors.

**Point Binormal Attribute Name**

_Name of the attribute to store point binormal._

* Default is "PointBinormal".

**Write Direction To Next**

_When enabled, computes and stores the normalized direction vector to the next point._

* Stored as a FVector attribute.
* Useful for path traversal or movement direction.

**Direction To Next Attribute Name**

_Name of the attribute to store direction to next point._

* Default is "DirectionToNext".

**Write Direction To Prev**

_When enabled, computes and stores the normalized direction vector to the previous point._

* Stored as a FVector attribute.
* Useful for path traversal or movement direction.

**Direction To Prev Attribute Name**

_Name of the attribute to store direction to previous point._

* Default is "DirectionToPrev".

***

#### Tagging Settings

Controls how paths are tagged based on their inclusion properties.

**Tag Concave**

_When enabled, tags paths that are concave (have inward angles)._

* Adds a string tag to points in concave paths.
* Useful for filtering or styling based on shape type.

**Concave Tag Name**

_Name of the tag assigned to concave paths._

* Default is "Concave".

**Tag Convex**

_When enabled, tags paths that are convex (have outward angles)._

* Adds a string tag to points in convex paths.
* Useful for filtering or styling based on shape type.

**Convex Tag Name**

_Name of the tag assigned to convex paths._

* Default is "Convex".

**Tag Outer**

_When enabled, tags paths that are not enclosed by any other path (inclusion depth = 0)._

* Adds a string tag to points in outer paths.
* Useful for identifying top-level shapes.

**Outer Tag Name**

_Name of the tag assigned to outer paths._

* Default is "Outer".

**Tag Inner**

_When enabled, tags paths that are enclosed by one or more other paths._

* Adds a string tag to points in inner paths.
* Useful for identifying nested shapes.

**Inner Tag Name**

_Name of the tag assigned to inner paths._

* Default is "Inner".

**Tag Odd Inclusion Depth**

_When enabled, tags paths with an odd inclusion depth (excluding outer paths if specified)._

* Adds a string tag to points in paths with odd inclusion depths.
* Useful for hierarchical or alternating path structures.

**Odd Inclusion Depth Tag Name**

_Name of the tag assigned to paths with odd inclusion depth._

* Default is "OddDepth".

**Use Inclusion Pins**

_When enabled, outputs filtered data to additional pins based on inclusion properties._

* Outputs are added to the default pin; extra pins contain only specific path types.
* Useful for separating outer, inner, and odd-depth paths.

**Outer Is Not Odd**

_When enabled, excludes outer paths (depth = 0) from being tagged as "odd"._

* Ensures that only truly nested paths are considered odd.
* Useful for maintaining clear hierarchy definitions.

### Notes

* This node is best used after path generation or extraction to enrich your data with meaningful geometric properties.
* Consider using the "Use Inclusion Pins" option if you need separate outputs for different types of paths (outer, inner, etc.).
* For performance reasons, only enable attributes you actually need.
* The "Path Data to Points" option can significantly increase memory usage; disable it unless necessary.
* When using local normals for projection, ensure the input data has valid normal vectors in the specified attribute.
* The inclusion depth and nesting information are computed based on the spatial relationships between paths. Make sure your paths do not overlap incorrectly or are too close to each other, as this might affect accuracy.
