---
description: 'In editor :: PCGEx | Pathfinding : Find All Cells'
icon: circle
---

# Find All Cells

{% hint style="warning" %}
This page was generated from the source code. It captures what the node does, but still needs some serious  proofreading.
{% endhint %}

> Identifies and outputs the geometric boundaries of individual cells within clusters.

#### Overview

This node finds and returns the shape outlines of each cell inside clusters. It's useful when you want to visualize or analyze the form of individual cells in clustered data. The results can be used for rendering, pathfinding, or other spatial analysis tasks that require understanding how each cell is shaped.

It works with cluster data and processes the internal structure to extract cell boundaries, which are then shown as paths or point sets. This helps when working with graph-based clustering and wanting to study or display the individual cells that make up those clusters.

{% hint style="info" %}
Connects to **Cluster** input pins. Requires a valid cluster setup.
{% endhint %}

#### How It Works

This node examines each cluster in your data and tries to rebuild the outline of every cell inside it. It starts by locating the points that define each cell's edges, then traces those edges to form closed loops or paths. These paths represent the shape of the cells.

The process includes:

1. Going through all clusters one by one
2. For each cluster, finding the individual cells (or polygons) that make up its structure
3. Tracing the edge points of each cell to create a complete loop
4. Returning these loops as point paths or contours

It can use either a direct search method or an octree-based search for better performance, depending on your settings. The node follows rules like minimum area or vertex count when deciding which cells are valid.

<details>

<summary>Inputs</summary>

Expects cluster data with associated points and edges. Each cluster should define a set of nodes that form cells, typically created from graph-based clustering algorithms.

</details>

<details>

<summary>Outputs</summary>

Produces point paths representing the outlines of each cell in the clusters. These can be used for visualization or further processing in downstream nodes.

</details>

#### Configuration

<details>

<summary><strong>Constraints</strong><br><em>Cell constraints.</em></summary>

Defines rules that determine which cells are considered valid and included in the output. For example, you can set minimum area or vertex count thresholds.

</details>

<details>

<summary><strong>Artifacts</strong><br><em>Cell artifacts.</em></summary>

Controls what additional data is written to the output points, such as density, steepness, or color properties related to each cell's shape or position.

</details>

<details>

<summary><strong>ProjectionDetails</strong><br><em>Projection settings.</em></summary>

Specifies how 3D positions are projected onto a 2D plane for processing. This is useful when working with geographic or spatial data that needs to be flattened for contour detection.

</details>

<details>

<summary><strong>bUseOctreeSearch</strong><br><em>Whether or not to search for closest node using an octree.</em></summary>

When enabled, the node uses an octree structure to speed up neighbor searches during contour tracing. This can significantly improve performance on large datasets but may slow things down if the data is sparse or small.

</details>

#### Usage Example

Use this node after a clustering operation to generate visual representations of cluster cell boundaries. For instance, after using a "Cluster Points" node to group points into clusters, connect this node to extract and visualize the shape of each cluster's internal cells. This is helpful for terrain analysis, city planning simulations, or any scenario where you need to understand the spatial structure of grouped data.

#### Notes

* Performance can vary significantly depending on dataset size and complexity.
* Enabling octree search is recommended for large datasets but may not always improve performance.
* The node works best when input clusters are well-formed with clear cell boundaries.
