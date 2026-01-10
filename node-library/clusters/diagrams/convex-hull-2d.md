---
description: 'In editor :: PCGEx | Cluster : Convex Hull 2D'
icon: circle
---

# Convex Hull 2D

{% hint style="warning" %}
This page was generated from the source code. It captures what the node does, but still needs some serious  proofreading.
{% endhint %}

> Create a 2D Convex Hull triangulation for each input dataset. Deprecated as of 5.4; use Find Convex Hull 2D instead.

#### How It Works

This node processes point data by first grouping it into clusters, then creating a convex hull around each cluster in 2D space. A triangulation is generated inside the hull using a Delaunay-style method to ensure optimal triangle shapes. The resulting structure can be used for mesh generation or visualizing point distributions.

Each cluster is processed independently, so multiple groups of points will produce separate hulls and triangulations. The node projects 3D points onto a 2D plane before computing the hull, using settings that define which axes to use for projection.

#### Configuration

<details>

<summary><strong>Output Clusters</strong><br><em>When enabled, outputs a graph representation of each cluster.</em></summary>

When enabled, this node will output a graph containing the edges and vertices that define the convex hull and triangulation for each cluster.

</details>

<details>

<summary><strong>Projection Settings</strong><br><em>Projection settings.</em></summary>

Controls how 3D points are projected into 2D space for hull computation. Options include:

* **XY**: Project onto the X-Y plane.
* **XZ**: Project onto the X-Z plane.
* **YZ**: Project onto the Y-Z plane.

</details>

<details>

<summary><strong>Winding Order</strong><br><em>Path Winding</em></summary>

Determines the orientation of the resulting triangulation:

* **Clockwise**: Triangles are oriented in a clockwise direction.
* **Counter Clockwise**: Triangles are oriented in a counter-clockwise direction.

</details>

<details>

<summary><strong>Cluster Output Settings</strong><br><em>Graph &#x26; Edges output properties</em></summary>

Controls how the graph representation of the cluster is built, including edge solidification and radius settings.

</details>

#### Usage Example

You have a point cloud representing scattered trees in a forest. You want to create a simplified boundary polygon that encloses all trees in each area. Use this node with a cluster input to generate a convex hull for each group of trees, then use the output edges to visualize the boundaries or as input for further mesh generation.

#### Notes

* This node is deprecated as of Unreal Engine 5.4. Use **Find Convex Hull 2D** instead.
* The triangulation is based on Delaunay principles, ensuring optimal triangle shapes.
* Performance may be affected by large clusters with many points; consider breaking up large datasets into smaller groups.
