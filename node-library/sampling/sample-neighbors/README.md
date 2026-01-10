---
description: 'In editor :: PCGEx | Sample Nearest Surface'
icon: scrubber
---

# Sample Neighbors

{% hint style="warning" %}
This page was generated from the source code. It captures what the node does, but still needs some serious  proofreading.
{% endhint %}

> Sample values from neighboring points within clusters.

#### Overview

This node retrieves and samples data from the neighboring points of each point in a cluster. It's useful for gathering contextual information from nearby elements, such as color, height, or other attributes, to influence the behavior or appearance of the current point. This is commonly used in terrain generation, vegetation placement, or any scenario where local neighborhood data affects individual point properties.

{% hint style="info" %}
Connects to **Cluster** processing nodes and requires a **Neighbor Sampler** subnode.
{% endhint %}

#### How It Works

This node processes each point in the input clusters and evaluates its neighbors based on defined criteria. For each point, it collects data from neighboring points within a specified distance or count. The collected neighbor values are then processed according to the configuration of the connected **Neighbor Sampler** subnode, which defines how these values are aggregated or transformed.

The node supports both vertex-based and edge-based sampling modes, allowing for flexible neighborhood definitions. It can sample multiple attributes from neighbors and apply sorting rules if needed, ensuring that the sampled data is representative and well-ordered.

#### Configuration

<details>

<summary><strong>Neighbor Sampler Subnode</strong><br><em>Defines how neighbor data is collected and processed.</em></summary>

This subnode controls the behavior of how neighbors are sampled. It determines which attributes are fetched from neighboring points, how many neighbors are considered, and whether sorting or filtering is applied.

</details>

<details>

<summary><strong>Sampling Mode</strong><br><em>Determines whether to sample from points or edges.</em></summary>

* **Point**: Sample values from the point itself.
* **Edge**: Sample values from the edge connecting to the point being evaluated.

</details>

<details>

<summary><strong>Max Distance</strong><br><em>Maximum distance to consider neighbors within.</em></summary>

Only neighbors within this distance will be included in sampling. A value of 0 means all neighbors are considered regardless of distance.

</details>

<details>

<summary><strong>Neighbor Count</strong><br><em>Maximum number of neighbors to sample from.</em></summary>

Limits the number of neighbors used for sampling. If set to 0, all neighbors within range are used.

</details>

#### Usage Example

A terrain generation setup where you want each point to inherit color or height values from its closest neighbors. You would connect a **Neighbor Sampler** subnode that fetches color data and applies an average operation. This allows for smooth transitions between different terrain types based on local neighbor properties.

#### Notes

* Ensure the connected **Neighbor Sampler** subnode is properly configured to avoid unexpected results.
* Performance can be affected by large neighbor counts or complex sampling operations.
* The node works best when used with clustered data where neighbors are logically grouped.
