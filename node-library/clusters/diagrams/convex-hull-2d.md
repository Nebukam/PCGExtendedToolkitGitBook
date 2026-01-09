---
description: 'In editor :: PCGEx | Cluster : Convex Hull 2D'
icon: circle
---

# Convex Hull 2D

{% hint style="warning" %}
## AI-generated page -- to be reviewed 
While not 100% accurate, it should properly capture what the node/factory does. It stills needs to be proofread by a human.
{% endhint %}

> Create a 2D Convex Hull triangulation for each input dataset. Deprecated as of 5.4; use Find Convex Hull 2D instead.

### Overview

This node generates a convex hull from point clusters and creates a triangulated mesh within that hull. It's useful for creating solid, enclosed shapes from scattered points, such as generating terrain contours, defining boundaries, or creating polygonal representations of clustered data.

The node operates on each input cluster independently, computing the convex hull of the points in that cluster and then triangulating the interior to form a mesh. The resulting output can be used for further processing or visualization.

{% hint style="info" %}
This node is deprecated as of Unreal Engine 5.4. Use the "Find Convex Hull 2D" node instead, which provides more flexibility and better performance.
{% endhint %}

<details>

<summary>Inputs</summary>

* **Default Input (Points)**: Expects point data to be processed. The points are grouped into clusters based on their relationships or proximity.

</details>

<details>

<summary>Outputs</summary>

* **Default Output (Points)**: Contains the triangulated convex hull points.
* **Cluster Output**: Optional output containing cluster data, if enabled.

</details>

### Properties Overview

Controls how the convex hull is computed and what kind of output is generated.

***

#### General Settings

Controls basic behavior for hull generation and output.

**Output Clusters**

_When enabled, outputs cluster data in addition to the triangulated points._

* Determines whether cluster information is included in the output.
* Useful when you want to preserve original cluster structure alongside the hull.

**Projection Settings**

_Configures how 3D points are projected onto a 2D plane for hull computation._

* **Method**: Choose between "Normal" or "Best Fit" projection methods.
  * **Normal**: Projects using a fixed normal vector (default is Up).
  * **Best Fit**: Computes the best-fit plane based on point distribution.
* **Projection Normal**: Vector defining the plane's orientation when using "Normal" method.
* **Local Projection Normal**: When enabled, uses a local attribute to determine projection direction.

**Path Winding**

_Specifies the winding order of the resulting hull._

* **Clockwise**: Hull points are ordered in a clockwise direction.
* **Counter Clockwise**: Hull points are ordered in a counter-clockwise direction.
  * Default is Counter Clockwise, which is standard for most mesh generation tools.

***

#### Graph & Edges Output Settings

Controls how the triangulated mesh is structured and output.

**Graph Builder Details**

_Configures how the hull is built as a graph structure._

* **Solidification Axis**: Aligns edge points along a specific axis.
  * **None**: No alignment.
  * **X, Y, Z**: Aligns along the selected axis.
* **Radius Type**: Determines how edge radius is calculated.
  * **Average**: Uses average of endpoint radii.
  * **Lerp**: Linear interpolation between endpoint radii.
  * **Min**: Uses the smaller of the two endpoint radii.
  * **Max**: Uses the larger of the two endpoint radii.
  * **Fixed**: Uses a constant radius value.
* **Radius Constant**: Value used when "Radius Type" is set to "Fixed".
* **Radius Scale**: Multiplier applied to computed edge radius.

### Notes

* This node is deprecated and should be replaced with "Find Convex Hull 2D" for new projects.
* The triangulation is generated using a convex hull algorithm, which ensures all interior points are enclosed by the hull.
* For best results, ensure input point clusters are well-defined and not too sparse.
* When using "Best Fit" projection, the node will compute the optimal plane based on point distribution to maintain accuracy.
