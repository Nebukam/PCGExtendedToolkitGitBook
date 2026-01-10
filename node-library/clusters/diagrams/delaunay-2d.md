---
description: 'In editor :: PCGEx | Cluster : Delaunay 2D'
icon: circle
---

# Delaunay 2D

{% hint style="info" %}
This page was generated from the source code. It should properly capture what the node does, but still needs to be proofread by a human.
{% endhint %}

> Create a 2D Delaunay triangulation for each input dataset.

#### How It Works

This node creates a Delaunay triangulation by connecting input points into triangles. The resulting mesh ensures that no point lies inside the circle formed by any triangle's three corners. This produces a natural-looking mesh that's commonly used for terrain generation, spatial partitioning, or creating Voronoi diagrams.

The process begins by projecting input points onto a 2D plane using specified axis settings (X, Y, or Z). Then, it calculates the triangulation for each group of points. Optionally, it can generate an Urquhart graph by removing the longest edge from each triangle, which creates a sparser but still valid mesh. It can also identify and mark boundary points and edges to help define the outer shape of your data.

#### Configuration

<details>

<summary><strong>bUrquhart</strong><br><em>Output the Urquhart graph of the Delaunay triangulation (removes the longest edge of each Delaunay cell)</em></summary>

When enabled, this removes the longest edge from each triangle in the Delaunay triangulation. This results in a sparser graph that still maintains the Delaunay property but with fewer edges.

</details>

<details>

<summary><strong>bMarkHull</strong><br><em>Mark points &#x26; edges that lie on the hull</em></summary>

When enabled, points and edges that form the convex hull of the input point set are marked with a boolean attribute.

</details>

<details>

<summary><strong>HullAttributeName</strong><br><em>Name of the attribute to output the Hull boolean to. True if point is on the hull, otherwise false.</em></summary>

The name of the boolean attribute that will be added to points and edges to indicate whether they lie on the hull.

</details>

<details>

<summary><strong>bMarkEdgeOnTouch</strong><br><em>When true, edges that have at least a point on the Hull as marked as being on the hull.</em></summary>

When enabled, edges are marked as being on the hull if they connect to at least one hull point.

</details>

<details>

<summary><strong>ProjectionDetails</strong><br><em>Projection settings.</em></summary>

Controls how input points are projected onto a 2D plane for triangulation. You can specify which axis to use (X, Y, or Z) for the projection.

</details>

<details>

<summary><strong>GraphBuilderDetails</strong><br><em>Cluster Output Settings</em></summary>

Controls how the output graph is built, including edge properties and solidification settings.

</details>

<details>

<summary><strong>bOutputSites</strong><br><em>Output delaunay sites</em></summary>

When enabled, the triangulation sites (input points) are output as a separate point set.

</details>

<details>

<summary><strong>bMarkSiteHull</strong><br><em>Mark points &#x26; edges that lie on the hull</em></summary>

When enabled, points and edges that form the convex hull of the input point set are marked with a boolean attribute.

</details>

<details>

<summary><strong>SiteHullAttributeName</strong><br><em>Name of the attribute to output the Hull boolean to. True if point is on the hull, otherwise false.</em></summary>

The name of the boolean attribute that will be added to sites (points) to indicate whether they lie on the hull.

</details>

<details>

<summary><strong>UrquhartSitesMerge</strong><br><em>Merge adjacent sites into a single point</em></summary>

Controls how sites are merged when using the Urquhart graph mode:

* **None**: No merging occurs.
* **Merge Sites**: Merged site is the average of the two original sites.
* **Merge Edges**: Merged site is the average of the removed edges.

</details>
