---
description: 'In editor :: PCGEx | Topology : Cluster Surface'
icon: circle
---

# Cluster Surface

{% hint style="info" %}
This page was generated from the source code. It should properly capture what the node does, but still needs to be proofread by a human.
{% endhint %}

> Create a surface topology from clustered point data.

#### How It Works

This node builds a surface mesh by analyzing how points within each cluster connect to one another. It uses the relationships between points—defined by edges—to form polygonal faces that represent the shape of each cluster. The process starts by examining each cluster's structure, then connects related points into loops or polygons. These polygons are then converted into triangles to create a complete mesh that can be used for rendering or further processing.

The node works best when clusters have well-defined connections between their points. It tries to form closed shapes from the edges and then fills them with triangular faces to generate solid geometry.

#### Configuration

<details>

<summary><strong>Output Type</strong><br><em>How the output geometry is structured.</em></summary>

Controls whether the output generates individual geometries per cluster or a single merged geometry.

**Values**:

* **Per-item Geometry**: Each cluster outputs as a separate geometry object.
* **Merged Geometry**: All clusters are combined into a single geometry output.

</details>

<details>

<summary><strong>UV Input</strong><br><em>Controls UV mapping for the generated surface.</em></summary>

Enables UV mapping on the generated surface. Configure UV channels and attribute names to map UV coordinates from input data.

</details>

<details>

<summary><strong>Surface Settings</strong><br><em>Adjusts how the surface is constructed.</em></summary>

Controls various aspects of surface generation including solidification settings, edge radius handling, and axis alignment for better geometric consistency.

</details>

#### Usage Example

1. Start with a point cloud that has been clustered using a clustering node.
2. Connect the clustered points to the Cluster Input pin.
3. Use an edge generation node (like "Graph : Build Edges") to define connections between cluster points.
4. Connect the edges to the Edge Input pin of this node.
5. Configure output settings to generate either individual or merged geometry.
6. The result is a mesh surface that represents the connectivity and structure of each cluster.

#### Notes

* This node requires valid clusters with associated edges to function correctly.
* The generated surfaces are typically used for visualization, collision detection, or further mesh processing.
* Performance can be affected by the number of points and edges in each cluster.
* The triangulation process may produce non-planar polygons if edge connections form complex topologies.
