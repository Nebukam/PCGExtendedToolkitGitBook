---
description: 'In editor :: PCGEx | Cluster : Convex Hull 3D'
icon: circle
---

# Convex Hull 3D

{% hint style="info" %}
This page was generated from the source code. It should properly capture what the node does, but still needs to be proofread by a human.
{% endhint %}

> Create a 3D Convex Hull triangulation for each input dataset.

#### Overview

This node generates a convex hull mesh from a set of 3D points, forming a triangulated surface that encloses all input points. It's useful for creating solid boundaries or visual representations of point clouds in procedural content generation workflows.

Each input cluster is processed independently to produce a single convex hull mesh. The resulting output contains edges and faces that define the boundary surface of the point set. This can be used for collision detection, visual effects, or as a base for further geometric operations.

{% hint style="info" %}
Connects to **Cluster Input** pins and outputs to **Graph Output** pins.
{% endhint %}

#### How It Works

This node computes the 3D convex hull of each input cluster by finding the smallest convex polyhedron that contains all points in the cluster. The algorithm works by:

1. Taking all points from a cluster
2. Computing the set of points that form the outer boundary of the point cloud
3. Triangulating the resulting surface to create a mesh
4. Outputting edges and faces that define this convex hull

The triangulation is computed using a 3D Delaunay-based approach, which ensures that no input point lies inside any triangle's circumcircle, producing a well-formed mesh.

<details>

<summary>Inputs</summary>

Expects clusters of points as input. Each cluster will generate its own convex hull.

</details>

<details>

<summary>Outputs</summary>

Produces a graph output containing the edges and faces that define the 3D convex hull for each input cluster.

</details>

#### Configuration

***

**Cluster Output Settings**

_Controls how the resulting graph is built and structured._

This subnode defines properties related to the output graph, such as edge creation, point alignment, and mesh solidification settings. These affect how the final convex hull is represented in terms of edges and vertices.

#### Usage Example

Use this node to generate solid boundaries around groups of points, such as creating terrain contours from sampled elevation points or generating collision meshes for clustered objects in a scene.

#### Notes

* The convex hull is computed per-cluster, so multiple input clusters will produce multiple hulls.
* The resulting mesh is a triangulated surface that encloses all input points.
* Performance scales with the number of points in each cluster; larger clusters may take longer to compute.
