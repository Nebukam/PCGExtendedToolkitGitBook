---
description: 'In editor :: PCGEx | Cluster : Delaunay 3D'
icon: circle
---

# Delaunay 3D

{% hint style="info" %}
This page was generated from the source code. It should properly capture what the node does, but still needs to be proofread by a human.
{% endhint %}

> Create a 3D Delaunay tetrahedralization for each input dataset.

#### Overview

This node generates a 3D Delaunay triangulation from a set of input points, forming a mesh of tetrahedra that fill the space. It's useful for creating spatial relationships between points in three-dimensional space, often used in procedural terrain generation, mesh creation, or spatial analysis. The output can be used to define connectivity and proximity relationships among the input points.

{% hint style="info" %}
Connects to **Cluster** pins.
{% endhint %}

#### How It Works

This node performs a 3D Delaunay tetrahedralization on the input point set, which means it creates a mesh of tetrahedra (4-sided 3D shapes) that connect the points. The algorithm ensures that no input point lies inside the circumsphere of any tetrahedron in the mesh, resulting in an optimal spatial partitioning.

The process begins by taking all input points and computing their 3D Delaunay triangulation. This results in a set of tetrahedra that fill the convex hull of the point cloud. Each tetrahedron is defined by four vertices from the input point set, and the edges between these vertices form a graph structure.

If enabled, the node can also compute the **Urquhart graph**, which removes the longest edge from each Delaunay cell, creating a sparser but still valid graph that emphasizes local connections. Additionally, it can mark points and edges that lie on the hull of the point cloud — those that are on the outer boundary of the 3D structure.

The node supports optional output of the original input points as "sites" in the resulting graph, which can be useful for maintaining a reference to the original data or for further processing.

<details>

<summary>Inputs</summary>

* **Points**: A collection of 3D points (typically from a point source or previous processing node)

</details>

<details>

<summary>Outputs</summary>

* **Cluster**: The resulting Delaunay graph with tetrahedral structure
* **Sites** (optional): Original input points, optionally marked as hull points

</details>

#### Configuration

***

**bUrquhart**

_When enabled, the output graph will be the Urquhart graph of the Delaunay triangulation._

This removes the longest edge from each tetrahedron in the Delaunay mesh, creating a sparser graph that emphasizes local connections and reduces long-range edges.

**bMarkHull**

_When enabled, points and edges on the hull of the input point cloud are marked._

This identifies and flags points and edges that lie on the outer boundary of the 3D structure. Useful for identifying edge cases or creating boundary constraints in procedural generation.

**HullAttributeName**

_Name of the attribute to output the Hull boolean to._

Controls the name of the boolean attribute that will be added to the output points, indicating whether a point is on the hull (true) or not (false).

**bMarkEdgeOnTouch**

_When enabled, edges with at least one point on the hull are marked as being on the hull._

This extends the hull marking to include edges that connect to hull points, which can be useful for defining boundary regions in procedural content.

**GraphBuilderDetails**

_Configuration for how the graph is built and output._

Controls various aspects of the graph structure, such as edge radius calculation and axis alignment.

***

**bOutputSites**

_When enabled, the original input points are output as sites in the resulting graph._

This allows you to retain a reference to the original point data, which can be useful for further processing or visualization.

**bMarkSiteHull**

_When enabled, points and edges on the hull of the input point cloud are marked for the site output._

Similar to `bMarkHull`, but specifically for the site output. Useful if you want to track hull properties in the site data.

**SiteHullAttributeName**

_Name of the attribute to output the Hull boolean to for sites._

Controls the name of the boolean attribute added to the site points, indicating whether a point is on the hull.

**bMergeUrquhartSites**

_When enabled, adjacent sites are merged into a single point in the Urquhart graph._

This option can be used to reduce complexity by merging related sites in the Urquhart output.
