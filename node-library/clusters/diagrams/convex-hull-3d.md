---
description: 'In editor :: PCGEx | Cluster : Convex Hull 3D'
icon: circle
---

# Convex Hull 3D

{% hint style="warning" %}
This page was generated from the source code. It captures what the node does, but still needs some serious  proofreading.
{% endhint %}

> Create a 3D Convex Hull triangulation for each input dataset.

#### How It Works

The Cluster : Convex Hull 3D node builds a solid 3D mesh that wraps around all the points in each input cluster. It finds the smallest possible convex shape that contains every point, forming a surface mesh made of triangles. This is useful for creating geometric representations of point groups, such as collision shapes or visual boundaries.

For each group of points, the node calculates the outer surface by determining which points form the edges and faces of the hull. The result is a triangulated mesh where each triangle connects three points on the surface. These meshes can be used for rendering, physics simulations, or spatial analysis.

#### Configuration

<details>

<summary><strong>Cluster Output Settings</strong><br><em>Graph &#x26; Edges output properties.</em></summary>

Controls how the resulting graph is structured and what data it contains.

**Values**:

* **Edge Radius Type**: How edge radii are computed
  * **Average**: Edge radius is the average of each endpoint's bounds radii
  * **Lerp**: Edge radius is interpolated between endpoint radii
  * **Min**: Edge radius is the smallest endpoint radius
  * **Max**: Edge radius is the largest endpoint radius
  * **Fixed**: Edge radius is a fixed size
* **Solidification Axis**: Aligns edge points to the selected axis
* **Edge Radius**: Fixed size for edge radius when using "Fixed" mode

</details>

#### Usage Example

1. Create a group of points or clusters in your graph
2. Connect the point data to the Cluster : Convex Hull 3D node
3. The node will generate a triangulated mesh representing the convex hull of those points
4. Use the output graph for rendering, collision detection, or further processing

#### Notes

* This node is computationally intensive for large datasets due to the convex hull calculation
* The resulting graph contains only the triangulated surface of the hull, not volume data
* Each input dataset produces one output graph, so multiple clusters will result in multiple outputs
* Performance scales with the number of input points; consider using point filtering before this node for very large datasets
