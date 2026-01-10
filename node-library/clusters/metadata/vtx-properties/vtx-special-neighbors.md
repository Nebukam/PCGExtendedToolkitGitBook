---
description: 'In editor :: PCGEx | Vtx : Special Neighbors'
icon: circle-dashed
---

# Vtx : Special Neighbors

{% hint style="warning" %}
This page was generated from the source code. It captures what the node does, but still needs some serious  proofreading.
{% endhint %}

> Fetches and stores information about the largest and smallest neighbors of each vertex in a cluster.

#### How It Works

This node analyzes the connections between vertices within clusters to identify which neighboring vertices are closest and farthest away. For each vertex, it looks at all adjacent edges to calculate distances to neighboring points. It then determines the neighbor with the shortest edge (closest) and the one with the longest edge (farthest). These relationships are saved as vertex properties so they can be used in later steps of your procedural workflow.

#### Configuration

<details>

<summary><strong>Largest Neighbor</strong><br><em>Shortest edge.</em></summary>

Controls how the closest neighbor is determined and stored.

**Values**:

* **Output Property Name**: The name of the vertex property where the index of the closest neighbor will be stored.
* **Output Distance Property Name**: The name of the vertex property where the distance to the closest neighbor will be stored.

</details>

<details>

<summary><strong>Smallest Neighbor</strong><br><em>Longest edge.</em></summary>

Controls how the farthest neighbor is determined and stored.

**Values**:

* **Output Property Name**: The name of the vertex property where the index of the farthest neighbor will be stored.
* **Output Distance Property Name**: The name of the vertex property where the distance to the farthest neighbor will be stored.

</details>

#### Usage Example

You have a cluster of points that form a mesh. You want to identify which point is closest and farthest from each vertex in the mesh for use in a custom shader or procedural effect. Connect this node to your cluster input, configure the output property names, and then connect it to a downstream node that uses these properties to modify point behavior.

#### Notes

* This node requires valid edge data to function properly.
* The results are stored as vertex properties, so they can be used in subsequent processing steps or visualized directly.
* Performance may vary depending on the number of vertices and edges in each cluster.
