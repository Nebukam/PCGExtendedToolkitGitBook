---
description: 'In editor :: PCGEx | Vtx : Special Edges'
icon: circle-dashed
---

# Vtx : Special Edges

{% hint style="info" %}
## AI-generated page -- to be reviewed 
While not 100% accurate, it should properly capture what the node/factory does. It stills needs to be proofread by a human.
{% endhint %}

> Creates vertex properties that capture the shortest, longest, and average edge lengths connected to each vertex.

### Overview

This node analyzes the edges connected to each vertex in a cluster and computes three key metrics: the length of the shortest edge, the longest edge, and the average edge length. These properties are useful for identifying vertex characteristics like sharp corners (short edges), extended connections (long edges), or overall connectivity patterns (average edge length).

{% hint style="info" %}
This node is particularly useful in graph-based procedural generation where you want to identify special vertex types based on their edge configurations, such as corners, bridges, or hubs.
{% endhint %}

<details>

<summary>Inputs</summary>

* **Points**: Vertex data (cluster points)
* **Edges**: Edge data connecting vertices

</details>

<details>

<summary>Outputs</summary>

* **Property**: Vertex properties for shortest, longest, and average edge lengths

</details>

### Properties Overview

Controls how the shortest, longest, and average edge metrics are computed and stored.

***

#### Edge Output Settings

Configures how each of the three edge metrics (shortest, longest, average) are stored as vertex properties.

**Shortest Edge**

_Stores the length of the shortest edge connected to each vertex._

* The value represents the distance between this vertex and its nearest neighbor.
* Useful for identifying sharp corners or tight connections in a graph.

**Longest Edge**

_Stores the length of the longest edge connected to each vertex._

* The value represents the maximum distance between this vertex and any of its neighbors.
* Useful for identifying long-range connections or potential "bridges" in your graph.

**Average Edge**

_Stores the average length of all edges connected to each vertex._

* The value represents the mean distance to neighboring vertices.
* Useful for understanding overall connectivity density around a vertex.

### Notes

* This node operates on the adjacency relationships between vertices and their connecting edges.
* Results are stored as vertex properties, which can be used in downstream nodes for filtering, coloring, or further processing.
* These metrics are particularly helpful when combined with other vertex property nodes to create more complex graph behaviors or visualizations.
