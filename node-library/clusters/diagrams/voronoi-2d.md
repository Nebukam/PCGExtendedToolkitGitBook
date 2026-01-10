---
description: 'In editor :: PCGEx | Cluster : Voronoi 2D'
icon: circle
---

# Voronoi 2D

{% hint style="warning" %}
This page was generated from the source code. It captures what the node does, but still needs some serious  proofreading.
{% endhint %}

> Create a 2D Voronoi graph for each input dataset.

#### How It Works

This node creates a Voronoi diagram by dividing space into regions based on proximity to input points. Each region contains all locations that are closer to its associated point than to any other input point. The result is a network of connected cells where the boundaries represent the equidistant lines between neighboring points.

The process begins by processing the input points to determine which ones will be used in the diagram. If enabled, it removes any points that fall outside a defined boundary area.

Next, it calculates the Delaunay triangulation - a mathematical relationship that's the dual of the Voronoi diagram. From this triangulation, it determines where each Voronoi cell should be positioned using one of three methods:

* **Centroid**: Uses the average position of triangle corners
* **Circumcenter**: Calculates the center of the circle passing through all three triangle corners
* **Balanced**: Chooses between centroid and circumcenter based on whether the circumcenter lies within bounds

The node then builds a graph structure where:

* Each point represents a Voronoi cell center
* Lines connect adjacent cells, forming the boundaries of the diagram

If enabled, it identifies points and edges that form the outer edge of the input set and can optionally flag these for further use. It also supports adding extra information like how many points influence each cell or the maximum distance from each cell to its nearest point.

{% hint style="info" %}
Connects to **Points** inputs and outputs **Points** and **Edges**.
{% endhint %}

#### Configuration

<details>

<summary><strong>Method</strong><br><em>Method used to find Voronoi cell location.</em></summary>

Controls how the center of each Voronoi cell is calculated.

**Values**:

* **Balanced**: Pick centroid if circumcenter is out of bounds, otherwise uses circumcenter.
* **Canon (Circumcenter)**: Uses Delaunay cells' circumcenter.
* **Centroid**: Uses Delaunay cells' averaged vertice positions.

</details>

<details>

<summary><strong>ExpandBounds</strong><br><em>Bounds used for point pruning &#x26; balanced centroid.</em></summary>

Defines the size of the bounding volume used to determine valid points and calculate cell centers when using the "Balanced" method.

</details>

<details>

<summary><strong>bPruneOutOfBounds</strong><br><em>Prune points outside bounds.</em></summary>

When enabled, removes input points that fall outside the defined boundary before generating the Voronoi diagram.

</details>

<details>

<summary><strong>bMarkHull</strong><br><em>Mark points &#x26; edges that lie on the hull.</em></summary>

When enabled, marks points and edges that form the outer boundary of the input point set.

</details>

<details>

<summary><strong>HullAttributeName</strong><br><em>Name of the attribute to output the Hull boolean to. True if point is on the hull, otherwise false.</em></summary>

The name of the boolean attribute written to points that are marked as being on the hull.

</details>

<details>

<summary><strong>bMarkEdgeOnTouch</strong><br><em>When true, edges that have at least a point on the Hull as marked as being on the hull.</em></summary>

When enabled, edges connected to any hull point are also flagged as being part of the hull.

</details>

<details>

<summary><strong>ProjectionDetails</strong><br><em>Projection settings.</em></summary>

Settings for projecting 3D points onto a 2D plane before computing the Voronoi diagram. This affects how the spatial relationships are interpreted.

</details>

<details>

<summary><strong>GraphBuilderDetails</strong><br><em>Graph &#x26; Edges output properties. Only available if bPruneOutsideBounds as it otherwise generates a complete graph.</em></summary>

Controls how the resulting graph is built, including edge radius calculation and solidification settings.

</details>

<details>

<summary><strong>bOutputSites</strong><br><em>Whether to output updated sites.</em></summary>

When enabled, outputs the Voronoi cell centers as points in addition to the edges.

</details>

<details>

<summary><strong>bPruneOpenSites</strong><br><em>If enabled, sites that belong to an removed (out-of-bound) cell will be removed from the output.</em></summary>

When enabled and `bOutputSites` is true, removes Voronoi cells whose corresponding input points were pruned due to being outside bounds.

</details>

<details>

<summary><strong>OpenSiteFlag</strong><br><em>Flag sites belonging to an open cell with a boolean attribute.</em></summary>

The name of the boolean attribute used to mark Voronoi cells that originated from pruned input points.

</details>

<details>

<summary><strong>SitesOutputDetails</strong><br></summary>

Configuration for additional outputs related to Voronoi sites, such as influence counts or radius information.

</details>

#### Usage Example

Use this node to generate a Voronoi diagram from a set of scattered points. For example, place points across a map and use the Voronoi output to define territories or regions that each point controls. You can then use the resulting graph to drive further procedural generation like city placement or terrain partitioning.

#### Notes

* The node works best with a relatively uniform distribution of input points.
* Using "Circumcenter" for cell center calculation may result in cells extending beyond bounds if not combined with pruning.
* Pruning points outside bounds can significantly reduce computation time and improve performance.
