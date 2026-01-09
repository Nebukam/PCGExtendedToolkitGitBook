---
description: 'In editor :: PCGEx | Cluster : Partition Vtx'
icon: circle
---

# Partition Vtx

{% hint style="warning" %}
## AI-generated page - To be reviewed. 
While not 100% accurante, it should properly capture what it does. It stills needs to be reviewed and proofread by a human.
{% endhint %}

> Split vertex data into per-cluster groups.

### Overview

This node takes vertex data and splits it into separate output collections based on cluster membership. Each cluster gets its own dedicated output, making it easy to process or visualize individual clusters independently. It's particularly useful when you want to apply different operations or visualizations to each cluster without having to manually sort the data yourself.

{% hint style="info" %}
This node works with clustered point data and outputs one point IO per cluster.
{% endhint %}

<details>

<summary>Inputs</summary>

* **Main Input** (Point): Vertex data that will be partitioned into clusters
* **Clusters Input** (Point): Cluster definition points that determine how the vertex data is grouped

</details>

<details>

<summary>Outputs</summary>

* **Main Output** (Point): One output per cluster, containing only the vertices belonging to that cluster
* **Edge Output** (Edge): Edges connecting vertices within each cluster

</details>

### Properties Overview

This node has no user-facing properties. It automatically partitions vertex data based on cluster membership.

***

#### Cluster Settings

Controls how the partitioning is performed across clusters.

**Partition Mode**

_Controls how vertex data is distributed among clusters._

* Determines whether to include all vertices in each cluster's output or only those that are directly connected
* When set to **All**, every vertex in a cluster will appear in its corresponding output
* When set to **Connected**, only vertices that are part of the cluster's graph structure will be included

**Output Edge Mode**

_Controls how edges are handled in the output._

* Determines whether to include all edges or only those within clusters
* When set to **All**, all edges are included in the edge output
* When set to **Connected**, only edges that connect vertices within each cluster are included

### Notes

* This node is ideal for scenarios where you want to process each cluster separately, such as applying different materials or behaviors to each group of connected points.
* The outputs will be named based on the cluster index, making it easy to identify which data belongs to which cluster.
* Use this node after clustering operations to separate your clustered data into distinct groups for further processing.
