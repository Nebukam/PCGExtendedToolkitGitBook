---
description: 'In editor :: PCGEx | Topology : Cluster Surface'
icon: circle
---

# Cluster Surface

{% hint style="info" %}
## AI-generated page -- to be reviewed 
While not 100% accurate, it should properly capture what the node/factory does. It stills needs to be proofread by a human.
{% endhint %}

> Create a cluster surface topology from point data.

### Overview

This node generates a surface mesh that represents the topological structure of clustered point data. It creates a triangulated surface by connecting points within each cluster based on their connectivity relationships, forming a continuous mesh that follows the shape and structure of the clusters.

The output is typically used to visualize or generate geometry from clustered data, such as creating terrain surfaces, building structures, or any mesh that should follow the natural grouping of your point data.

{% hint style="info" %}
This node requires input data to be organized into clusters. Ensure your data has been processed through a clustering operation before using this node.
{% endhint %}

<details>

<summary>Inputs</summary>

* **Main Input** (Point): Point data that has been clustered
* **Edges Input** (Point): Optional edge data representing connections between points

</details>

<details>

<summary>Outputs</summary>

* **Output** (Geometry): Generated surface geometry for each cluster

</details>

### Properties Overview

This node creates a mesh topology from clustered point data, generating a continuous surface that represents the connectivity and structure of each cluster.

***

#### Surface Settings

Controls how the surface mesh is generated from the cluster data.

**Output Type**

Whether to output one geometry per cluster or merge all into a single geometry.

* **Per-item Geometry**: Each cluster outputs its own separate geometry object
* **Merged Geometry**: All clusters are combined into a single geometry object

**Surface Method**

How the surface is constructed from the cluster's points and edges.

* **Triangulation**: Creates a triangulated mesh using Delaunay triangulation
* **Convex Hull**: Forms a convex hull around each cluster's points
* **Voronoi**: Uses Voronoi diagram to generate cell boundaries

**Use Edge Data**

When enabled, uses edge connections to influence surface generation.

* If disabled, the surface is generated based on point positions only
* If enabled, edges are used to define connectivity and shape constraints

**Solidify Edges**

Whether to create solid geometry from edges rather than just lines.

* When enabled, creates a 3D volume from edge connections
* When disabled, outputs only the edge structure as lines or thin surfaces

***

#### Triangulation Settings

Controls the triangulation process when using the "Triangulation" surface method.

**Enable Triangulation**

When enabled, uses Delaunay triangulation to generate the surface.

* Generates a mesh that fills the convex hull of each cluster
* Creates a smooth, continuous surface from point data

**Max Iterations**

Maximum number of attempts to refine the triangulation.

* Higher values allow for more complex surface shapes
* Default value is 100 iterations

**Tolerance**

Tolerance threshold for triangulation calculations.

* Smaller values create more precise but potentially slower results
* Larger values may produce faster but less accurate triangulations

***

#### Projection Settings

Controls how the surface is projected onto a plane or axis.

**Enable Projection**

When enabled, projects points onto a 2D plane before triangulation.

* Useful for creating flat surfaces from 3D point data
* Can help avoid issues with irregular point distributions

**Projection Axis**

Axis along which to project points when using projection.

* **X**: Project onto YZ plane
* **Y**: Project onto XZ plane
* **Z**: Project onto XY plane
* **Normal**: Use the best-fit normal vector for projection

**Normal Source**

Source of the normal vector used for projection.

* **Fixed**: Use a fixed normal vector defined below
* **Local**: Use local point normals if available
* **Best Fit**: Compute the best-fit plane normal from all points

**Fixed Normal Vector**

Normal vector to use when "Fixed" is selected as the normal source.

* Defines the direction of the projection plane
* Default is up vector (0, 0, 1)

***

#### Geometry Settings

Controls the final geometry output and mesh properties.

**Enable UVs**

When enabled, generates UV coordinates for the surface.

* UVs are mapped based on point positions or attributes
* Useful for texturing the generated surface

**UV Attribute Name**

Name of the attribute containing UV data.

* If empty, uses default UV generation
* Must be a vector2 attribute

**Enable Normals**

When enabled, generates normal vectors for each vertex.

* Normals are computed based on the surface geometry
* Useful for lighting and shading effects

**Enable Tangents**

When enabled, generates tangent vectors for each vertex.

* Tangents are used for advanced shading techniques like normal mapping
* Requires normals to be enabled

**Enable Colors**

When enabled, assigns color attributes to vertices.

* Colors are based on point attributes or default values
* Useful for visualizing data properties directly on the mesh

### Notes

* This node works best with clustered point data that has clear connectivity relationships
* For complex cluster structures, consider using the "Convex Hull" method to simplify output
* When using projection, ensure your point data is well-distributed to avoid degenerate cases
* The triangulation process may be computationally intensive for large clusters
* UV generation can significantly increase processing time for large datasets
* Consider enabling edge solidification when creating 3D volumes from edge-based data
