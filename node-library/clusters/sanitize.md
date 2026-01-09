---
description: 'In editor :: PCGEx | Cluster : Sanitize'
icon: circle
---

# Sanitize

{% hint style="danger" %}
This documentation has been AI-generated from the source code and may not be 100% accurate.
{% endhint %}

> Ensure the input set of vertex and edges outputs clean, interconnected clusters. May create new clusters, but does not creates nor deletes points/edges.

### Overview

This node cleans up your graph data by ensuring that all vertices and edges form properly connected clusters. It removes isolated or disconnected components, merges overlapping clusters, and ensures that each cluster is fully interconnected. This is especially useful after operations that may have introduced gaps or inconsistencies in your graph structure.

The node does not modify the point or edge count; it only reorganizes existing data into clean, valid clusters. You can think of this as a "cleanup" step that makes your graph topology consistent and usable for downstream processing.

{% hint style="info" %}
This node is particularly useful when working with graph-based procedural generation where disconnected components may cause issues in pathfinding, clustering algorithms, or other graph-dependent operations.
{% endhint %}

<details>

<summary>Inputs</summary>

* **Main Input (Vertex Points)**: The set of vertex points that define the nodes of your graph.
* **Edge Inputs (Edges)**: The set of edges connecting the vertex points.

</details>

<details>

<summary>Outputs</summary>

* **Main Output (Vertex Points)**: Cleaned and reorganized vertex points, grouped into interconnected clusters.
* **Edge Output (Edges)**: Edges that connect the cleaned vertex points within each cluster.

</details>

### Properties Overview

This node primarily controls how the output graph is structured through its cluster builder settings.

***

#### Cluster Output Settings

Controls how the final clusters are built and organized in the output.

**Graph Builder Details**

_Controls how the output graph is constructed, including edge creation, vertex handling, and cluster organization._

* Determines whether edges are rebuilt or preserved from input
* Controls how vertices are assigned to clusters
* Affects the structure of the final output graph

### Notes

* This node does not add or remove points or edges; it only reorganizes existing data.
* It's ideal for use after operations that may have created disconnected components, such as filtering or randomization steps.
* The output will always contain interconnected clusters with no isolated nodes or dangling edges.
* Consider using this node before pathfinding or graph traversal operations to ensure valid topology.
