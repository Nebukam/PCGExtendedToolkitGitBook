---
description: 'In editor :: PCGEx | Cluster : Voronoi 3D'
icon: circle
---

# Voronoi 3D

{% hint style="info" %}
This page was generated from the source code. It should properly capture what the node does, but still needs to be proofread by a human.
{% endhint %}

> Create a 3D Voronoi graph for each input dataset.

#### Overview

This node generates a 3D Voronoi diagram from a set of input points. A Voronoi diagram divides 3D space into regions, where each region contains all points closer to one specific input point than to any other. The result is both a set of Voronoi cell centers and the edges connecting them into a graph structure.

This is useful for creating natural-looking partitions or territories in procedural content, such as generating terrain features, city districts, or resource distribution zones. It's particularly effective when combined with other processing nodes to refine or visualize the resulting graph.

{% hint style="info" %}
Connects to **Points** and **Edges** pins of downstream nodes that process graph data.
{% endhint %}

#### How It Works

This node calculates a 3D Voronoi diagram by performing the following steps:

1. **Input Point Processing**: It takes input points and optionally prunes those outside a defined bounding volume, based on the `ExpandBounds` setting.
2. **Voronoi Cell Calculation**:
   * For each input point, it determines the center of its corresponding Voronoi cell.
   * The method used to calculate this center is controlled by the `Method` setting:
     * **Balanced**: Uses the circumcenter if it's within bounds; otherwise, defaults to the centroid.
     * **Canon (Circumcenter)**: Uses the exact circumcenter of the Delaunay triangle.
     * **Centroid**: Uses the average position of all vertices in the cell.
3. **Graph Construction**:
   * It builds a graph where each Voronoi cell center becomes a point.
   * Edges are created between adjacent cells, forming the Voronoi graph structure.
4. **Hull Marking** (optional):
   * If enabled via `bMarkHull`, it marks points and edges that lie on the outer boundary of the diagram.
   * The attribute name for hull marking can be customized using `HullAttributeName`.
   * If `bMarkEdgeOnTouch` is enabled, edges connected to any hull point are also marked.
5. **Output Generation**:
   * Outputs the Voronoi cell centers as points.
   * Outputs the graph structure (edges) connecting these points.

<details>

<summary>Inputs</summary>

* Points: Input point data that defines the seed locations for Voronoi cells.

</details>

<details>

<summary>Outputs</summary>

* Points: Output points representing the Voronoi cell centers.
* Edges: Output edges forming the graph structure of the Voronoi diagram.

</details>

#### Configuration

***

**Method**

_Controls how the center of each Voronoi cell is calculated._

This setting determines whether to use the circumcenter, centroid, or a balanced approach for computing cell centers.

**Values**:

* **Balanced**: Picks the centroid if the circumcenter is out of bounds; otherwise uses the circumcenter.
* **Canon (Circumcenter)**: Uses Delaunay cells' circumcenter.
* **Centroid**: Uses Delaunay cells' averaged vertex positions.

***

**ExpandBounds**

_Controls the size of the bounding volume used for pruning and centroid calculations._

This value defines how much to expand the input point bounds when calculating Voronoi cell centers. A larger value can help avoid edge effects but may increase processing time.

***

**bPruneOutOfBounds**

_When enabled, removes points that fall outside the defined bounds._

This setting is only active when `Method` is set to **Canon (Circumcenter)**. It ensures that only points whose Voronoi cells are fully within the bounds are considered.

***

**bMarkHull**

_When enabled, marks points and edges that lie on the outer boundary of the Voronoi diagram._

This helps identify the hull of the point set for further processing or visualization.

***

**HullAttributeName**

_Name of the boolean attribute to store hull marking results._

The output point data will include a boolean attribute with this name. The value is `true` if the point lies on the hull, otherwise `false`.

***

**bMarkEdgeOnTouch**

_When enabled, edges connected to any hull point are also marked as being on the hull._

This ensures that the entire hull boundary (both points and edges) is flagged for further processing.

***

**GraphBuilderDetails**

_Configuration for how the output graph is built._

Controls settings like edge radius calculation and solidification. Only available when `bPruneOutOfBounds` is enabled, as it otherwise generates a complete graph.

#### Usage Example

1. **Generate Voronoi Cells**: Connect a set of points to this node.
2. **Visualize Regions**: Use the output points and edges to create visual representations of Voronoi cells.
3. **Add Hull Marking**: Enable `bMarkHull` and `bMarkEdgeOnTouch` to identify boundary regions.
4. **Process Further**: Connect downstream nodes to refine or modify the Voronoi graph, such as applying noise or clustering.

#### Notes

* The node works best with a sufficient number of input points to form meaningful Voronoi cells.
* Using the **Balanced** method often produces visually pleasing results by avoiding extreme cell shapes.
* Enabling `bPruneOutOfBounds` can significantly reduce computation time if you're only interested in a subset of the full Voronoi diagram.
* Hull marking is useful for creating boundary constraints or identifying edge regions in procedural generation.
