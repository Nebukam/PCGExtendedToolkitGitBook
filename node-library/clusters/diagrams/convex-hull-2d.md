---
description: 'In editor :: PCGEx | Cluster : Convex Hull 2D'
icon: circle
---

# Convex Hull 2D

{% hint style="info" %}
This page was generated from the source code. It should properly capture what the node does, but still needs to be proofread by a human.
{% endhint %}

> Create a 2D Convex Hull triangulation for each input dataset. Deprecated as of 5.4; use Find Convex Hull 2D instead.

#### Overview

This node generates a convex hull from clusters of points in 2D space, forming a polygon that encloses all input points. It's useful for creating boundary shapes around point groups, such as defining the outer limits of terrain features or object placements.

It transforms point data into a structured output that can be used for further processing like pathfinding, collision detection, or visual representation. The node supports optional edge graph creation to represent the hull structure.

{% hint style="info" %}
Connects to **Cluster** input pins and outputs **Points** and optionally **Graph** data.
{% endhint %}

#### How It Works

This node processes each cluster of points independently to compute a convex hull in 2D space. The algorithm first projects the 3D point coordinates onto a 2D plane using specified projection settings, then calculates the smallest convex polygon that contains all the projected points.

The resulting hull is triangulated, meaning it's divided into triangles that fill the interior of the hull. These triangles are represented as edges in an optional graph output. The winding order of the hull can be set to either clockwise or counter-clockwise, affecting how the shape is oriented.

If enabled, the node also outputs a cluster representation of the hull points, which can be used for downstream operations like path generation or filtering.

<details>

<summary>Inputs</summary>

* **Cluster Input**: Accepts point data grouped into clusters.
* Optional **Point Filter** input (if configured).

</details>

<details>

<summary>Outputs</summary>

* **Points Output**: Contains the vertices of the convex hull for each cluster.
* **Graph Output**: Optional, contains edges forming the hull structure and optionally triangulation.
* **Cluster Output**: Optional, outputs a new cluster containing the hull points.

</details>

#### Configuration

***

**bOutputClusters**

_When enabled, outputs a new cluster containing the convex hull vertices._

This setting determines whether to produce an additional output cluster with the computed hull points. Useful when you want to continue working with the hull as a separate data structure.

**ProjectionDetails**

_Projection settings._

Controls how 3D coordinates are projected onto a 2D plane for hull computation. This is important for accurate results in non-flat spaces, like terrain or spherical environments.

**Winding**

_Path Winding_

Determines the orientation of the convex hull's boundary.

* **Clockwise**: Hull points are ordered to form a clockwise path.
* **Counter Clockwise**: Hull points are ordered to form a counter-clockwise path.

This affects how the shape is rendered or interpreted by downstream systems.

**GraphBuilderDetails**

_Cluster Output Settings_

Controls properties of the optional graph output, such as edge creation and solidification settings. This allows fine-tuning of how the hull edges are represented in the graph.

#### Usage Example

Use this node to generate boundary shapes for clusters of objects or terrain points. For instance, when placing trees randomly across a landscape, you might use this node to create convex hulls around each group of trees to define their collective area. The resulting hull can then be used for collision detection or visual effects.

#### Notes

* This node is deprecated as of Unreal Engine 5.4; consider using the "Find Convex Hull 2D" node instead.
* The triangulation is generated using a Delaunay-style approach, ensuring no triangles overlap within the hull.
* Performance may degrade with large clusters due to the computational complexity of convex hull algorithms.
