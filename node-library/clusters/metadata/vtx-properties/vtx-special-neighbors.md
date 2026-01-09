---
description: 'In editor :: PCGEx | Vtx : Special Neighbors'
icon: circle-dashed
---

# Vtx : Special Neighbors

{% hint style="danger" %}
This documentation has been AI-generated from the source code and may not be 100% accurate.
{% endhint %}

> Fetch data from neighbors based on edge length.

### Overview

This node analyzes the edges connected to each vertex in a cluster and extracts information about the longest and shortest neighboring vertices. It's particularly useful for identifying extreme relationships within graph structures, such as finding the most distant or closest neighbors of each point. The results are stored as new attributes on the vertex data, making them available for downstream processing.

{% hint style="info" %}
This node requires a valid cluster with edge data to function. It operates on vertex data and uses adjacency information from edges.
{% endhint %}

<details>

<summary>Inputs</summary>

* **Cluster** (Required): Input cluster containing vertices and edges.
* **Edge Data** (Optional, Multiple): Additional edge data that can be used for neighbor analysis.

</details>

<details>

<summary>Outputs</summary>

* **Property** (Required): Modified vertex data with new attributes for largest and smallest neighbors.

</details>

### Properties Overview

Controls how the node identifies and stores information about special neighbors.

***

#### Edge Configuration

Settings for defining which neighbors are considered "largest" and "smallest".

**Largest Neighbor**

_Controls how the longest edge neighbor is stored._

* Stores the index of the vertex connected by the longest edge.
* The attribute name is configurable, defaulting to "Largest".
* When enabled, this will store the index of the vertex with the largest edge length.

**Values**:

* **None**: No data is stored for the largest neighbor.
* **Index**: Stores the index of the vertex connected by the longest edge.
* **Value**: Stores the actual edge length value of the longest edge.

**Smallest Neighbor**

_Controls how the shortest edge neighbor is stored._

* Stores the index of the vertex connected by the shortest edge.
* The attribute name is configurable, defaulting to "Smallest".
* When enabled, this will store the index of the vertex with the shortest edge length.

**Values**:

* **None**: No data is stored for the smallest neighbor.
* **Index**: Stores the index of the vertex connected by the shortest edge.
* **Value**: Stores the actual edge length value of the shortest edge.
