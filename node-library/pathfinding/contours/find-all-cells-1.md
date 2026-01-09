---
description: 'In editor :: PCGEx | Pathfinding : Find Cluster Hull'
icon: circle
---

# Find Cluster Hull

{% hint style="info" %}
### AI-generated page -- to be reviewed

While not 100% accurate, it should properly capture what the node/factory does. It stills needs to be proofread by a human.
{% endhint %}

> Output a single hull per cluster, as a path.

### Overview

This node generates a single convex or concave hull for each cluster in your data, represented as a closed path. It's useful for creating boundaries around groups of points, such as defining the shape of a room from a set of furniture positions, or outlining areas of interest from clustered data.

The hull is computed by finding the outermost points of each cluster and connecting them to form a continuous path. The resulting path can be used for visualization, collision detection, or as a basis for further procedural operations.

{% hint style="info" %}
This node works on clusters created by previous nodes in your graph, such as "Cluster Points" or "Cluster Edges". Make sure you have properly defined clusters before using this node.
{% endhint %}

<details>

<summary>Inputs</summary>

* **Main Input** (Point): Point data representing the cluster elements to process. This is typically the output from a clustering operation.
* **Edges Input** (Edge): Optional edge data that defines relationships between points, used for pathfinding and hull generation.

</details>

<details>

<summary>Outputs</summary>

* **Main Output** (Point): Point data containing the hull paths for each cluster. Each cluster will produce one closed path.
* **Edges Output** (Edge): Optional edge data representing the connections within each hull path.

</details>

### Properties Overview

Controls how the hulls are generated and what information is included in the output.

***

#### Hull Settings

Configures the shape and properties of the output hulls.

**Cell Constraints**

_Controls which points can be part of a hull._

* Defines rules for point inclusion, such as minimum/maximum distance from cluster center or specific attribute thresholds.
* Helps filter out outliers or irrelevant points when computing the hull.

**Cell Artifacts**

_Controls what additional data is generated and attached to the hull._

* **Density**: Outputs density information based on point distribution within the hull.
* **Steepness**: Computes steepness values along the hull's edges.
* **Color Channels**: Adds color attribute outputs for R, G, B, or A channels.

**Use Octree Search**

_When enabled, uses an octree to speed up closest node searches._

* Can significantly improve performance when dealing with large datasets.
* May slow down processing if the dataset is small or highly clustered.

**Quiet Failed To Find Hull Warning**

_When enabled, suppresses warnings about hull generation failures._

* Useful when you expect some clusters to not produce valid hulls and don't want noisy logs.

***

#### Projection Settings

Controls how 3D points are projected onto a 2D plane for hull computation.

**Projection Method**

_Selects the method used to project 3D points into 2D space._

* **XY Plane**: Projects points onto the XY plane.
* **XZ Plane**: Projects points onto the XZ plane.
* **YZ Plane**: Projects points onto the YZ plane.

**Normal Vector**

_Specifies the normal vector for custom projection._

* Used when "Custom" is selected as the projection method.
* Determines which direction to project from.

**Custom Normal**

_The custom normal vector used for projection._

* Only relevant if "Custom" is selected as the projection method.
* Affects how points are flattened into 2D space.

***

#### Output Settings

Controls how the resulting hull paths are structured and formatted.

**Output Path Type**

_Specifies whether to output convex or concave hulls._

* **Convex Hull**: Produces a tight, convex boundary around all points.
* **Concave Hull**: Allows for more complex shapes with indentations.
* **Both**: Outputs both convex and concave hulls as separate paths.

**Path Orientation**

_Determines the winding order of the output path._

* **Clockwise**: Ensures the path is wound in a clockwise direction.
* **Counter Clockwise**: Ensures the path is wound in a counter-clockwise direction.

**Seed Location**

_Specifies where to place the seed point for hull generation._

* **Original**: Uses the original point position as the seed.
* **Centroid**: Places the seed at the center of the cluster.
* **Path Bounds Center**: Positions the seed at the center of the path's bounding box.
* **First Node**: Uses the first node in the cluster as the seed.

**Path Attributes**

_Adds custom attributes to the output points._

* Allows you to define additional data such as ID, type, or other metadata for each point in the hull.

### Notes

* The node works best when input points are already grouped into meaningful clusters.
* For large datasets, enabling "Use Octree Search" can improve performance.
* Concave hulls may produce unexpected results if there are too few points or if they're very close together.
* Consider using filters to remove invalid or outlier points before running this node for cleaner results.
