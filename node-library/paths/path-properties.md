---
description: 'In editor :: PCGEx | Path : Properties'
icon: circle
---

# Path Properties

One-stop node to compute useful path infos.

**How It Works**

> AI-Generated, needs proofreading

* Computes various properties of paths based on specified projection settings to ensure calculations occur on a defined 2D plane.
* Configures inclusion details to determine which parts of the path are considered in computations.
* Packs attributes into sets according to user-defined packing parameters for organized data handling.
* Optionally writes computed path attribute data directly to points, though this feature is noted as legacy and can lead to significant memory usage.
* Outputs the length of the path if the "Write Path Length" option is enabled.

#### Configuration

<details>

<summary><strong>Projection Details</strong> <code>PCGExGeo2DProjectionDetails</code></summary>

Projection settings. Some path data must be computed on a 2D plane.

📦 See: Geo2DProjection configuration

⚡ PCG Overridable

</details>

<details>

<summary><strong>Inclusion Details</strong> <code>PCGExInclusionDetails</code></summary>

Inclusion details settings.

📦 See: Inclusion configuration

</details>

<details>

<summary><strong>Use Inclusion Pins</strong> <code>bool</code></summary>

If enabled, will output data to additional pins. Note that all outputs are added to the default Path pin; extra pins contain a filtered list of the same data.

</details>

<details>

<summary><strong>└─ Outer is not Odd</strong> <code>bool</code></summary>

If enabled, outer path (inclusion depth of zero) will not be considered "odd" even if they technically are.

</details>

**Output - Path**

<details>

<summary><strong>Packing</strong> <code>PCGExAttributeSetPackingMode</code></summary>

Attribute set packing

**Values:**

* **Per Input**: ...
* **Merged**: ...

⚡ PCG Overridable

</details>

<details>

<summary><strong>Write Path Data To Points</strong> <code>bool</code></summary>

Whether to also write path attribute to the data set. Looks appealing, but can have massive memory cost -- this is legacy only.

⚡ PCG Overridable

</details>

<details>

<summary><strong>Write Path Length</strong> <code>bool</code></summary>

Output Path Length.

</details>

<details>

<summary><strong>PathLength</strong> <code>Name</code></summary>

Name of the 'double' attribute to write path length to.

⚡ PCG Overridable

</details>

<details>

<summary><strong>Write Path Direction</strong> <code>bool</code></summary>

Output averaged path direction.

</details>

<details>

<summary><strong>PathDirection</strong> <code>Name</code></summary>

Name of the 'FVector' attribute to write averaged direction to.

⚡ PCG Overridable

</details>

<details>

<summary><strong>Write Path Centroid</strong> <code>bool</code></summary>

Output averaged path direction.

</details>

<details>

<summary><strong>PathCentroid</strong> <code>Name</code></summary>

Name of the 'FVector' attribute to write averaged direction to.

⚡ PCG Overridable

</details>

<details>

<summary><strong>Write Is Clockwise</strong> <code>bool</code></summary>

Output path winding.

</details>

<details>

<summary><strong>Clockwise</strong> <code>Name</code></summary>

Name of the 'bool' attribute to write winding to.

⚡ PCG Overridable

</details>

<details>

<summary><strong>Write Area</strong> <code>bool</code></summary>

Output path area.

</details>

<details>

<summary><strong>Area</strong> <code>Name</code></summary>

Name of the 'double' attribute to write area to.

⚡ PCG Overridable

</details>

<details>

<summary><strong>Write Perimeter</strong> <code>bool</code></summary>

Output path perimeter.

</details>

<details>

<summary><strong>Perimeter</strong> <code>Name</code></summary>

Name of the 'double' attribute to write perimeter to (differ from length because this is the 2D projected value used to infer other values).

⚡ PCG Overridable

</details>

<details>

<summary><strong>Write Compactness</strong> <code>bool</code></summary>

Output path compactness.

</details>

<details>

<summary><strong>Compactness</strong> <code>Name</code></summary>

Name of the 'double' attribute to write compactness to.

⚡ PCG Overridable

</details>

<details>

<summary><strong>Write Inclusion Depth</strong> <code>bool</code></summary>

Output path inclusion depth.

</details>

<details>

<summary><strong>Inclusion Depth</strong> <code>Name</code></summary>

Name of the 'int32' attribute to write inclusion depth to.

⚡ PCG Overridable

</details>

<details>

<summary><strong>Write Num Inside</strong> <code>bool</code></summary>

Output path number of children.

</details>

<details>

<summary><strong>Num Inside</strong> <code>Name</code></summary>

Name of the 'int32' attribute to write how many paths are contained inside this one.

⚡ PCG Overridable

</details>

**Output - Path > Oriented Bounding Box**

<details>

<summary><strong>Write Bounding Box Center</strong> <code>bool</code></summary>

Output OBB extents \*

</details>

<details>

<summary><strong>Center</strong> <code>Name</code></summary>

Name of the 'FVector' attribute to write bounding box center to.

</details>

<details>

<summary><strong>Write Bounding Box Extent</strong> <code>bool</code></summary>

Output OBB extents \*

</details>

<details>

<summary><strong>Extent</strong> <code>Name</code></summary>

Name of the 'FVector' attribute to write bounding box extent to.

</details>

<details>

<summary><strong>Write Bounding Box Orientation</strong> <code>bool</code></summary>

Output OBB orientation \*

</details>

<details>

<summary><strong>Orientation</strong> <code>Name</code></summary>

Name of the 'FRotator' attribute to write bounding box orientation to. \*

</details>

**Output - Points**

<details>

<summary><strong>Up Vector</strong> <code>Vector</code></summary>

Up Attribute constant

⚡ PCG Overridable

</details>

<details>

<summary><strong>Write Dot</strong> <code>bool</code></summary>

Output Dot product of Prev/Next directions.

</details>

<details>

<summary><strong>Dot</strong> <code>Name</code></summary>

Name of the 'double' attribute to write distance to next point to.

⚡ PCG Overridable

</details>

<details>

<summary><strong>Write Angle</strong> <code>bool</code></summary>

Output Dot product of Prev/Next directions.

</details>

<details>

<summary><strong>Angle</strong> <code>Name</code></summary>

Name of the 'double' attribute to write angle to next point to.

⚡ PCG Overridable

</details>

<details>

<summary><strong>└─ Range</strong> <code>PCGExAngleRange</code></summary>

Unit/range to output the angle to.

⚡ PCG Overridable

</details>

<details>

<summary><strong>Write Distance To Next</strong> <code>bool</code></summary>

Output distance to next.

</details>

<details>

<summary><strong>DistanceToNext</strong> <code>Name</code></summary>

Name of the 'double' attribute to write distance to next point to.

⚡ PCG Overridable

</details>

<details>

<summary><strong>Write Distance To Prev</strong> <code>bool</code></summary>

Output distance to prev.

</details>

<details>

<summary><strong>DistanceToPrev</strong> <code>Name</code></summary>

Name of the 'double' attribute to write distance to prev point to.

⚡ PCG Overridable

</details>

<details>

<summary><strong>Write Distance To Start</strong> <code>bool</code></summary>

Output distance to start.

</details>

<details>

<summary><strong>DistanceToStart</strong> <code>Name</code></summary>

Name of the 'double' attribute to write distance to start to.

⚡ PCG Overridable

</details>

<details>

<summary><strong>Write Distance To End</strong> <code>bool</code></summary>

Output distance to end.

</details>

<details>

<summary><strong>DistanceToEnd</strong> <code>Name</code></summary>

Name of the 'double' attribute to write distance to start to.

⚡ PCG Overridable

</details>

<details>

<summary><strong>Write Point Time</strong> <code>bool</code></summary>

Output distance to end.

</details>

<details>

<summary><strong>PointTime</strong> <code>Name</code></summary>

Name of the 'double' attribute to write distance to start to.

⚡ PCG Overridable

</details>

<details>

<summary><strong>└─ One Minus</strong> <code>bool</code></summary>

Controls └─ one minus.

</details>

<details>

<summary><strong>Write Point Normal</strong> <code>bool</code></summary>

Output point normal.

</details>

<details>

<summary><strong>PointNormal</strong> <code>Name</code></summary>

Name of the 'FVector' attribute to write point normal to.

⚡ PCG Overridable

</details>

<details>

<summary><strong>Write Point Avg Normal</strong> <code>bool</code></summary>

Output point normal.

</details>

<details>

<summary><strong>PointAverageNormal</strong> <code>Name</code></summary>

Name of the 'FVector' attribute to write point averaged normal to.

⚡ PCG Overridable

</details>

<details>

<summary><strong>Write Point Binormal</strong> <code>bool</code></summary>

Output point normal.

</details>

<details>

<summary><strong>PointBinormal</strong> <code>Name</code></summary>

Name of the 'FVector' attribute to write point binormal to. Note that it's stabilized.

⚡ PCG Overridable

</details>

<details>

<summary><strong>Write Direction To Next</strong> <code>bool</code></summary>

Output direction to next normal.

</details>

<details>

<summary><strong>DirectionToNext</strong> <code>Name</code></summary>

Name of the 'FVector' attribute to write direction to next point to.

⚡ PCG Overridable

</details>

<details>

<summary><strong>Write Direction To Prev</strong> <code>bool</code></summary>

Output direction to prev normal.

</details>

<details>

<summary><strong>DirectionToPrev</strong> <code>Name</code></summary>

Name of the 'FVector' attribute to write direction to prev point to.

⚡ PCG Overridable

</details>

**Tagging**

<details>

<summary><strong>Tag Concave</strong> <code>bool</code></summary>

.

</details>

<details>

<summary><strong>Concave Tag</strong> <code>String</code></summary>

.

⚡ PCG Overridable

</details>

<details>

<summary><strong>Tag Convex</strong> <code>bool</code></summary>

.

</details>

<details>

<summary><strong>Convex Tag</strong> <code>String</code></summary>

.

⚡ PCG Overridable

</details>

<details>

<summary><strong>Tag Outer</strong> <code>bool</code></summary>

.

</details>

<details>

<summary><strong>Outer Tag</strong> <code>String</code></summary>

Outer paths are not enclosed by any other path

⚡ PCG Overridable

</details>

<details>

<summary><strong>Tag Inner</strong> <code>bool</code></summary>

.

</details>

<details>

<summary><strong>Inner Tag</strong> <code>String</code></summary>

Inner paths are enclosed by one or more paths

⚡ PCG Overridable

</details>

<details>

<summary><strong>Tag Odd Inclusion Depth</strong> <code>bool</code></summary>

.

</details>

<details>

<summary><strong>Odd Inclusion Depth Tag</strong> <code>String</code></summary>

Median paths are inner with a depth %2 != 0

⚡ PCG Overridable

</details>

***

Source: `Source\PCGExElementsPaths\Public\Elements\PCGExWritePathProperties.h`
