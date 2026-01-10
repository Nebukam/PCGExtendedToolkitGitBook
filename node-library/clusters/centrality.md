---
description: 'In editor :: PCGEx | Cluster : Centrality'
icon: scrubber
---

# Centrality

{% hint style="info" %}
This page was generated from the source code. It should properly capture what the node does, but still needs to be proofread by a human.
{% endhint %}

> Compute betweenness centrality for nodes within clusters.

#### How It Works

This node determines how central each point is within a cluster by calculating betweenness centrality. It measures how often each point lies on the shortest path between other points in the cluster. The calculation uses a variation of Brandes' algorithm, which involves:

1. For each point in the cluster, finding all shortest paths to every other point
2. Counting how many times each point appears on these paths
3. Normalizing or inverting the results based on your settings

The process builds a graph representation of the cluster and runs a shortest path algorithm for each point. The frequency with which each point appears in these paths determines its centrality score.

For large clusters, you can choose to compute centrality only on a subset of points to speed up processing while still getting a reasonable approximation.

{% hint style="info" %}
This node connects to **clusters** processing pins.
{% endhint %}

#### Configuration

<details>

<summary><strong>CentralityValueAttributeName</strong><br><em>Name of the attribute</em></summary>

Controls the name of the output attribute that will store the centrality scores.

</details>

<details>

<summary><strong>Normalize</strong><br><em>Discrete mode write the number as-is, relative will normalize against the highest number of overlaps found.</em></summary>

When enabled, normalizes the centrality values so they range between 0 and 1. When disabled, outputs raw counts.

</details>

<details>

<summary><strong>OneMinus</strong><br><em>Whether to do a OneMinus on the normalized overlap count value</em></summary>

When enabled, subtracts the normalized centrality from 1. This inverts the values so that high centrality points get low scores and vice versa.

</details>

<details>

<summary><strong>DownsamplingMode</strong><br></summary>

Controls whether to compute centrality on all points or a subset:

* **None**: Compute on all points
* **Ratio**: Sample using a random subset of the points
* **Filters**: Use filters to determine which points are included

</details>

<details>

<summary><strong>Ratio</strong><br><em>If enabled, only compute centrality on a subset of the points to get a rough approximation. This is useful for large clusters, or if you want to tradeoff precision for speed.</em></summary>

When downsampling is set to "Ratio", this setting controls what fraction of points are used in the computation.

</details>

#### Usage Example

Use this node to identify key junctions or bottlenecks in a network cluster. For example, in a road network cluster, it can help identify which intersections are most critical for traffic flow. You might connect this to a "Cluster" node and then use the output to color-code points based on their centrality.

#### Notes

* Computation time increases exponentially with cluster size; consider downsampling for large clusters.
* Normalization is recommended when comparing centrality across different sized clusters.
* The OneMinus option can be useful for highlighting low-centrality points, such as isolated or peripheral elements in a network.
