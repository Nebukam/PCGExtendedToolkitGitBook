---
description: 'In editor :: PCGEx | Cluster : Partition Vtx'
icon: circle
---

# Partition Vtx

{% hint style="warning" %}
This page was generated from the source code. It captures what the node does, but still needs some serious  proofreading.
{% endhint %}

> Split vertex data into per-cluster groups.

#### How It Works

This node takes vertex data and organizes it based on cluster membership. It analyzes each point to determine which cluster it belongs to, then groups all points from the same cluster together. Each cluster gets its own output group, making it easy to process or visualize data for individual clusters without manually separating the information.

The grouping is based on cluster definitions already established in your graph. All vertex attributes and structure are preserved within each cluster's output, allowing downstream operations to work with distinct datasets for each cluster.

#### Configuration

<details>

<summary><strong>Cluster Grouping Mode</strong><br><em>Determines how vertices are assigned to clusters.</em></summary>

Controls how the node assigns vertex points to clusters. It can assign each point to its closest cluster or use a more complex proximity-based method.

**Values**:

* **Closest vtx**: Assigns each point to the cluster whose vertex is closest.
* **Closest edge**: Assigns each point based on proximity to edges and then endpoints.

</details>

<details>

<summary><strong>Edge Sorting Rules</strong><br><em>Sorting rules applied to edges before processing.</em></summary>

Defines how edges are sorted within each cluster. This can affect the order in which edge data is processed or output.

**Values**:

* **None**: No sorting is applied.
* **Custom**: Apply custom sorting rules defined by other settings.

</details>

<details>

<summary><strong>Output Edge Data</strong><br><em>Whether to output edge data along with vertex data.</em></summary>

When enabled, the node will also output edge data associated with each cluster's vertex points.

</details>

#### Usage Example

Use this node when you have a graph with multiple clusters and want to process or visualize each cluster separately. For example, if you're generating a city layout where different districts are clusters, you could use this node to split the building points into district-specific outputs for further processing.

#### Notes

* The node requires that cluster membership is already defined in the input data.
* Output groups are created dynamically based on the number of unique clusters found.
* Performance can be affected by the number of clusters and the size of each cluster's vertex set.
