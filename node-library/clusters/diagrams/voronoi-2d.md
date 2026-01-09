---
description: 'In editor :: PCGEx | Cluster : Voronoi 2D'
icon: circle
---

# Voronoi 2D

{% hint style="info" %}
This page was generated from the source code. It should properly capture what the node does, but still needs to be proofread by a human.
{% endhint %}

> Create a 2D Voronoi graph for each input dataset.

#### Overview

This node generates a Voronoi diagram from a set of input points, creating a partitioning of space into regions based on proximity. Each region (cell) contains all points closer to its associated input point than to any other input point. The result is a graph structure where vertices represent cell boundaries and edges define the connections between them.

This processing node is ideal for generating spatial partitions, influence zones, or tessellated layouts that respond to the distribution of your input data. It's commonly used in procedural level design, terrain generation, or creating organic-looking structures from point distributions.

{% hint style="info" %}
Connects to **Points** inputs and outputs **Points** and **Edges**.
{% endhint %}

#### How It Works

This node constructs a Voronoi diagram by performing the following steps:

1. **Input Processing**: It takes input points and optionally prunes those that fall outside a defined bounding box, depending on settings.
2. **Voronoi Computation**: For each point in the dataset, it calculates the Voronoi cell — the area of space closest to that point compared to all others.
3. **Graph Construction**: It builds a graph from the computed Voronoi cells:
   * Vertices are placed at the intersections of Voronoi edges.
   * Edges connect these vertices, forming the structure of the Voronoi diagram.
4. **Output Generation**:
   * The node outputs the Voronoi sites (input points) as points in the graph.
   * It also outputs the edges that define the Voronoi cells.
5. **Optional Hull Marking**: If enabled, it marks points and edges that lie on the outer boundary of the point set (the convex hull).
6. **Additional Data Output**: It can write extra information about each cell, such as influence count, minimum/maximum radii, or flags for open cells.

The method used to determine cell centers (centroid, circumcenter, or balanced) affects how Voronoi cells are computed and whether they stay within bounds.

<details>

<summary>Inputs</summary>

* **Points**: Input point data representing the seed locations for Voronoi cells.
* **Optional Filters**: Can be connected via a filter subnode to restrict which points are used in the Voronoi computation.

</details>

<details>

<summary>Outputs</summary>

* **Points**: Output points that represent the vertices of the Voronoi diagram (cell boundaries).
* **Edges**: Output edges connecting the Voronoi vertices, forming the graph structure.
* **Optional Additional Attributes**: Written to the output points if enabled in settings, such as:
  * Influence count per cell
  * Minimum and maximum radii
  * Hull flags
  * Open site flags

</details>

#### Configuration

***

**Method**

_Controls how Voronoi cell locations are determined._

This setting defines how the center of each Voronoi cell is calculated.

**Values**:

* **Balanced**: Uses the centroid if the circumcenter is out of bounds; otherwise, uses the circumcenter.
* **Canon (Circumcenter)**: Uses the Delaunay triangle's circumcenter for cell centers.
* **Centroid**: Uses the average position of all vertices in the corresponding Delaunay triangle.

***

**ExpandBounds**

_Controls the size of the bounding box used to prune points and calculate balanced centroids._

This value expands the input point bounds by a fixed amount to ensure that Voronoi cells are computed correctly, especially near boundaries. A larger value may include more points but can slow down processing.

***

**bPruneOutOfBounds**

_When enabled, removes points that fall outside the defined bounds._

This setting is only active when using **Canon (Circumcenter)** as the method. It ensures that Voronoi cells are computed within a controlled area, preventing artifacts from distant points.

***

**bMarkHull**

_When enabled, marks points and edges that lie on the convex hull of the input point set._

This helps identify boundary elements in the resulting graph, useful for creating edge constraints or visualizing the outer shape of the data.

***

**HullAttributeName**

_Name of the boolean attribute to mark hull points and edges._

Only relevant when **bMarkHull** is enabled. This attribute will be added to the output points and edges, with a value of `true` if the point or edge lies on the hull.

***

**bMarkEdgeOnTouch**

_When enabled, marks edges that have at least one point on the hull._

This setting extends the hull marking to edges that are adjacent to hull points, helping define boundary regions in the Voronoi graph.

***

**ProjectionDetails**

_Settings for projecting 3D points onto a 2D plane._

Controls how 3D input data is projected into 2D space for Voronoi computation. Options include X, Y, Z axis projection or custom projection settings.

***

**GraphBuilderDetails**

_Settings for building the output graph structure._

These settings control how the resulting graph is structured and what attributes are written to it. Only available when **bPruneOutOfBounds** is enabled because otherwise a complete graph is generated.

***

**bOutputSites**

_Whether to output updated sites._

When enabled, the original input points are included in the output as Voronoi sites. When disabled, only the computed Voronoi vertices and edges are output.

***

**bPruneOpenSites**

_If enabled, sites that belong to an removed (out-of-bound) cell will be removed from the output._

Only active when **bOutputSites** is true and **bPruneOutOfBounds** is enabled. This removes points that were pruned due to being outside bounds.

***

**OpenSiteFlag**

_Flag sites belonging to an open cell with a boolean attribute._

Only active when **bOutputSites** is true, **bPruneOutOfBounds** is enabled, and **bPruneOpenSites** is disabled. Adds a boolean attribute to identify points that were not included in the final Voronoi diagram due to being outside bounds.

***

**SitesOutputDetails**

_Settings for writing additional data about Voronoi sites._

Controls which extra attributes are written to the output points, such as influence count, minimum/maximum radii, or flags for open cells. Only active when **bOutputSites** is enabled.

#### Usage Example

A game designer wants to create a procedural map where each point represents a resource location. They use this node to generate Voronoi regions around these points, representing the area of influence for each resource. The resulting graph can then be used to:

* Assign territories to resource points.
* Create terrain features based on Voronoi cell shapes.
* Generate paths or roads that follow Voronoi edges.

#### Notes

* Voronoi diagrams are sensitive to input point distribution. Dense clusters may result in very small cells, while sparse regions may produce large, irregular cells.
* The **Balanced** method is often a good default choice as it avoids extreme cell shapes while remaining computationally efficient.
* Enabling **bPruneOutOfBounds** with **bOutputSites** and **bPruneOpenSites** can be useful for cleaning up data when points are outside the desired area.
* Hull marking helps identify boundary elements, which is useful for creating edge constraints or visualizing the outer shape of the input point set.
