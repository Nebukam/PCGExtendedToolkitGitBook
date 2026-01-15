---
description: 'In editor :: PCGEx | Cluster : Centrality'
icon: scrubber
---

# Centrality

Compute betweenness centrality. Processing time increases exponentially with the number of vtx.

**How It Works**

> AI-Generated, needs proofreading

* Computes betweenness centrality for nodes in a cluster, where processing time increases exponentially with the number of vertices (vtx).
* Assigns computed centrality values to an attribute named according to user settings; if normalization is enabled, adjusts these values relative to the highest centrality score found.
* Optionally applies a OneMinus transformation on normalized centrality values if specified in settings.
* Allows downsampling through a configurable ratio setting, enabling computation of betweenness centrality on only a subset of nodes for speed optimization.

#### Configuration

<details>

<summary><strong>Centrality Value Attribute Name</strong> <code>Name</code></summary>

Name of the attribute

⚡ PCG Overridable

</details>

<details>

<summary><strong>Normalize</strong> <code>bool</code></summary>

Discrete mode write the number as-is, relative will normalize against the highest number of overlaps found.

⚡ PCG Overridable

</details>

<details>

<summary><strong>└─ OneMinus</strong> <code>bool</code></summary>

Whether to do a OneMinus on the normalized overlap count value

⚡ PCG Overridable

</details>

<details>

<summary><strong>Downsampling Mode</strong> <code>PCGExCentralityDownsampling</code></summary>

Controls downsampling mode.

**Values:**

* **None**: All connected filters must pass.
* **Random ratio**: Sample using a random subset of the nodes.
* **Filters**: Use filters to drive which nodes are added to the subset

</details>

<details>

<summary><strong>└─ Ratio</strong> <code>PCGExRandomRatioDetails</code></summary>

If enabled, only compute centrality on a subset of the nodes to get a rough approximation. This is useful for large clusters, or if you want to tradeoff precision for speed.

📦 See: RandomRatio configuration

⚡ PCG Overridable

</details>

***

Source: `Source\PCGExElementsClusters\Public\Elements\PCGExClusterCentrality.h`
