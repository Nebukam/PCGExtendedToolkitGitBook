---
description: 'In editor :: PCGEx | Cluster : Delaunay 3D'
icon: circle
---

# Delaunay 3D

{% hint style="info" %}
This page was generated from the source code. It should properly capture what the node does, but still needs to be proofread by a human.
{% endhint %}

> Create a 3D Delaunay tetrahedralization for each input dataset.

#### How It Works

This node creates a 3D mesh-like structure from groups of points by connecting them into tetrahedra. Each tetrahedron is formed by four points, and the process ensures that no other point lies inside the circumsphere of any tetrahedron. This results in a triangulation that avoids sliver-like shapes and keeps all tetrahedra as equiangular as possible.

The node works on each group of points independently, generating a unique tetrahedral structure for each cluster. If the Urquhart mode is enabled, it removes the longest edge from each face of the tetrahedra, which reduces the number of connections while still maintaining the core spatial relationships.

If hull marking is enabled, the node identifies and marks the outermost points and edges in the structure. These are typically the boundary elements that form the surface of the point cloud.

#### Configuration

<details>

<summary><strong>Urquhart</strong><br><em>Output the Urquhart graph of the Delaunay triangulation (removes the longest edge of each Delaunay cell).</em></summary>

When enabled, this mode removes the longest edge from each tetrahedron's face, creating a sparse but still valid Delaunay graph. This reduces the number of edges while maintaining spatial relationships.

</details>

<details>

<summary><strong>Mark Hull</strong><br><em>Mark points &#x26; edges that lie on the hull.</em></summary>

When enabled, this marks all points and edges that are part of the convex hull of the input point cloud. These are typically boundary elements in the triangulation.

</details>

<details>

<summary><strong>Hull Attribute Name</strong><br><em>Name of the attribute to output the Hull boolean to. True if point is on the hull, otherwise false.</em></summary>

The name of the boolean attribute that will be added to points and edges to indicate whether they are part of the hull.

</details>

<details>

<summary><strong>Mark Edge On Touch</strong><br><em>When true, edges that have at least a point on the Hull as marked as being on the hull.</em></summary>

When enabled, edges that touch at least one hull point are also marked as being part of the hull.

</details>

<details>

<summary><strong>Cluster Output Settings</strong><br><em>Graph &#x26; Edges output properties.</em></summary>

Controls how the graph and edge data are structured in the output. Includes settings for edge radius calculation and solidification axis.

</details>

<details>

<summary><strong>Output Sites</strong><br><em>Output delaunay sites.</em></summary>

When enabled, outputs the original input points as vertices of the Delaunay graph.

</details>

<details>

<summary><strong>Mark Site Hull</strong><br><em>Mark points &#x26; edges that lie on the hull.</em></summary>

When enabled, marks hull points and edges for the output sites.

</details>

<details>

<summary><strong>Site Hull Attribute Name</strong><br><em>Name of the attribute to output the Hull boolean to. True if point is on the hull, otherwise false.</em></summary>

The name of the boolean attribute that will be added to the output site points to indicate whether they are part of the hull.

</details>

<details>

<summary><strong>Merge Urquhart Sites</strong><br><em>Merge adjacent sites into a single point.</em></summary>

When enabled and in combination with Urquhart mode, this merges adjacent points that were originally separate but are connected by a removed edge. This can reduce the number of output vertices.

</details>
