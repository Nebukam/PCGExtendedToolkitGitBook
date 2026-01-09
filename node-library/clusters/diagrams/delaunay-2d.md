---
description: 'In editor :: PCGEx | Cluster : Delaunay 2D'
icon: circle
---

# Delaunay 2D

{% hint style="danger" %}
This documentation has been AI-generated from the source code and may not be 100% accurate.
{% endhint %}

> Create a 2D delaunay triangulation for each input dataset.

### Overview

This node generates a Delaunay triangulation from a set of 2D points, creating a mesh where no point lies inside the circumcircle of any triangle. It's commonly used for terrain generation, mesh creation, and spatial analysis. The output consists of vertices (points) connected by edges (triangles), forming a graph structure.

{% hint style="info" %}
The node works on 2D projections of your input points. You can control how the projection is performed using the Projection settings.
{% endhint %}

<details>

<summary>Inputs</summary>

* **Default Input** _(Multiple)_: Point data to triangulate. Each dataset will generate its own Delaunay graph.

</details>

<details>

<summary>Outputs</summary>

* **Default Output**: Triangulated points and edges forming the Delaunay graph.
* **Sites Output** (Optional): Individual point sites used for triangulation, if enabled.

</details>

### Properties Overview

Controls how the Delaunay triangulation is generated and what output is produced.

***

#### Settings

Configures core triangulation behavior.

**Enable Urquhart Graph**

_When enabled, outputs an Urquhart graph which removes the longest edge of each Delaunay cell._

* Creates a sparser graph by removing long edges from the Delaunay triangulation
* Useful for creating more natural-looking networks or reducing complexity

**Output Sites**

_When enabled, outputs the original input points as sites in the triangulation._

* Allows you to see the raw point data used for triangulation
* Useful when combined with Urquhart graph settings to understand site merging

**Mark Hull Points**

_When enabled, marks points that lie on the outer boundary of the triangulation._

* Adds a boolean attribute indicating whether each point is on the hull
* Helps identify edge points in your dataset

**Hull Attribute Name**

_Name of the boolean attribute that stores hull information._

* Default is `bIsOnHull`
* Used when "Mark Hull Points" is enabled

**Merge Urquhart Sites**

_Controls how adjacent sites are merged when generating the Urquhart graph._

* **None**: No merging occurs, each site remains separate
* **Merge Sites**: Merges adjacent sites into a single point using their average position
* **Merge Edges**: Merges sites based on the average of removed edges

**Mark Hull Edges**

_When enabled, marks edges that lie on the outer boundary of the triangulation._

* Adds a boolean attribute indicating whether each edge is on the hull
* Useful for visualizing or filtering boundary elements

**Hull Edge Attribute Name**

_Name of the boolean attribute that stores hull edge information._

* Default is `bIsOnHull`
* Used when "Mark Hull Edges" is enabled

**Mark Edges on Touch**

_When enabled, edges touching hull points are also marked as being on the hull._

* Extends hull marking to include edges connected to hull points
* Creates a more inclusive boundary representation

***

#### Projection Settings

Controls how 3D points are projected onto a 2D plane for triangulation.

**Projection Method**

_Selects the method used to project 3D points into 2D space._

* **Normal**: Projects using a fixed normal vector (default is Up)
* **Best Fit**: Automatically computes the best-fit plane through all points

**Projection Normal**

_Vector defining the plane onto which points are projected._

* Only used when "Projection Method" is set to "Normal"
* Default is Up vector (Z-axis)

**Use Local Normal**

_When enabled, uses a local normal attribute from each point._

* Requires a valid normal attribute on input points
* Overrides the fixed projection normal

**Local Normal Attribute**

_Name of the attribute containing per-point normal vectors._

* Only used when "Use Local Normal" is enabled
* Must be a vector-type attribute

***

#### Graph Output Settings

Controls how the resulting graph data is structured and output.

**Solidification Axis**

_Selects which axis to align edge points along._

* **None**: No alignment applied
* **X, Y, Z**: Aligns edge points along the selected axis

**Edge Radius Type**

_Determines how the radius of edges is calculated._

* **Average**: Uses average of endpoint radii
* **Lerp**: Interpolates between endpoint radii
* **Min**: Uses smallest endpoint radius
* **Max**: Uses largest endpoint radius
* **Fixed**: Uses a constant value

**Fixed Radius Value**

_The fixed radius used when "Edge Radius Type" is set to "Fixed"._

* Default is 5 units
* Only visible when using fixed edge radius type

**Radius Scale Factor**

_Scales the computed edge radius by this factor._

* Multiplies the calculated radius by this value
* Default is 1 (no scaling)

**Edge Solidification**

_Controls how edges are solidified in the output graph._

* When enabled, applies the selected solidification settings to edge points

**Output Cluster Edges**

_When enabled, outputs edges connecting triangulated points._

* Creates a network of connections between points
* Useful for mesh generation or pathfinding

**Output Cluster Vertices**

_When enabled, outputs the triangulated point vertices._

* Produces the actual point data used in the triangulation
* Forms the base structure for further processing
