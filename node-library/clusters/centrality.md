---
description: 'In editor :: PCGEx | Cluster : Centrality'
icon: scrubber
---

# Centrality

{% hint style="warning" %}
## AI-generated page -- to be reviewed 
While not 100% accurate, it should properly capture what the node/factory does. It stills needs to be proofread by a human.
{% endhint %}

> Compute betweenness centrality for nodes within clusters.

### Overview

This node calculates the betweenness centrality of each node in a cluster, which measures how often a node lies on the shortest path between other nodes. It's useful for identifying key structural points in networks or spatial layouts.

The computation can be time-intensive, especially for large clusters, as processing time increases exponentially with the number of nodes. For performance optimization, you can sample a subset of nodes to get an approximate result.

{% hint style="info" %}
Betweenness centrality is commonly used in network analysis to identify influential nodes, but it's computationally expensive for large graphs.
{% endhint %}

<details>

<summary>Inputs</summary>

* **Cluster Points**: Point data representing the nodes of a cluster
* **Cluster Edges**: Edge data defining connections between nodes

</details>

<details>

<summary>Outputs</summary>

* **Cluster Points**: Modified point data with centrality values written to an attribute
* **Cluster Edges**: (Optional) Edge data, if enabled in settings

</details>

### Properties Overview

Controls how the centrality is calculated and output.

***

#### Centrality Settings

Configures the core behavior of the centrality calculation.

**Centrality Value Attribute Name**

_The name of the attribute where centrality values will be stored._

* Values are written to this attribute on each point
* Default value is "Centrality"

**Normalize**

_Whether to normalize the centrality scores._

* When enabled, values are normalized between 0 and 1 based on the highest overlap count found
* When disabled, raw counts are written

**OneMinus**

_When enabled, outputs 1 - normalized centrality._

* Useful for inverting the centrality measure (high centrality becomes low)
* Only applies when "Normalize" is enabled

**Downsampling Mode**

_How to sample nodes when computing centrality._

* **None**: Compute on all nodes
* **Random ratio**: Sample a random subset of nodes
* **Filters**: Use filters to select which nodes to include in the computation

***

#### Downsampling Settings

Controls how nodes are selected for approximate computation.

**Ratio**

_The fraction of nodes to sample when using "Random ratio" downsampling._

* Value is treated as a relative percentage (0.0 to 1.0)
* For example, 0.2 means 20% of nodes will be sampled
* Only active when Downsampling Mode is set to "Random ratio"

### Notes

* Centrality computation is computationally expensive and scales exponentially with cluster size
* Use downsampling for large clusters to reduce processing time
* The output attribute can be used in downstream nodes for visualizations or further analysis
* Consider using a point filter to limit which points are processed if needed
* Betweenness centrality measures the importance of nodes in terms of connectivity within the cluster
