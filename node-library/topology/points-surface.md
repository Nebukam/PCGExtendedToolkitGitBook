---
icon: circle
---

# Points Surface

{% hint style="warning" %}
## AI-generated page - To be reviewed. 
While not 100% accurante, it should properly capture what it does. It stills needs to be reviewed and proofread by a human.
{% endhint %}

> Create a Delaunay triangulated surface for each input dataset.

### Overview

This node generates a 2D triangulated mesh from a set of input points, using Delaunay triangulation. It's ideal for creating terrain surfaces, mesh grids, or any situation where you want to convert point clouds into connected triangle meshes. Each input dataset is processed independently to produce its own triangulated surface.

{% hint style="info" %}
The resulting topology will be generated in a 2D plane and then projected onto the world's XY plane unless otherwise specified.
{% endhint %}

<details>

<summary>Inputs</summary>

* **Default Input** (Multiple): Point data to be triangulated. Each input dataset is processed separately.

</details>

<details>

<summary>Outputs</summary>

* **Default Output**: Triangulated mesh geometry generated from the input points.

</details>

### Properties Overview

This node creates a Delaunay triangulation of your point data, projecting it onto a 2D plane before generating the surface. The settings allow you to control how this projection is done and how the resulting mesh is handled.

***

#### Projection Settings

Controls how the input points are projected into a 2D space for triangulation.

**Projection Method**

_Controls the method used to project points onto a 2D plane._

* Uses either a fixed normal vector or computes the best-fit plane based on point distribution.
* **Normal**: Projects points using a specified normal vector (default is Up vector).
* **Best Fit**: Computes the best-fit plane from the input point cloud.

**Projection Normal**

_The normal vector used for projection when "Normal" method is selected._

* Defines the orientation of the 2D plane onto which points are projected.
* Defaults to Up vector (0, 0, 1) for XY-plane projection.

**Use Local Normal**

_When enabled, uses a local attribute to determine the projection normal._

* Allows each point to have its own normal vector for projection.
* Requires a valid attribute with vector data to be specified in the "Local Attribute Name" field.

**Local Attribute Name**

_Name of the attribute containing local normal vectors._

* Only used when "Use Local Normal" is enabled.
* Must contain FVector data representing normals for each point.

***

#### Repair Settings

Controls how degenerate triangles are handled during mesh generation.

**Attempt Repair**

_When enabled, attempts to repair degenerate triangles in the output mesh._

* Helps clean up invalid geometry that may result from overlapping or colinear points.
* Can significantly increase processing time.

**Degenerate Triangle Options**

_Settings for repairing degenerate triangles._

* **Remove**: Deletes degenerate triangles entirely.
* **Collapse**: Collapses degenerate edges into single points.
* **Fix**: Attempts to fix triangle orientation and topology.

***

#### Topology Settings

Controls how the triangulated mesh is structured and output.

**Output Type**

_Determines how multiple datasets are combined in the output._

* **Per-item Geometry**: Each input dataset outputs as a separate geometry object.
* **Merged Geometry**: All datasets are merged into a single geometry object.

**UV Channels**

_Configuration for UV mapping on the generated mesh._

* Allows you to define which attributes should be used as UV coordinates.
* Supports up to 8 UV channels.
* UVs are projected onto the final mesh surface.

***

#### Warnings and Errors

Controls warning messages during processing.

**Quiet Bad Vertices Warning**

_When enabled, suppresses warnings about invalid or problematic vertices._

* Useful when working with datasets that may contain edge cases but you want to avoid noisy output.
