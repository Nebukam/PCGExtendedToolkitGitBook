---
description: 'In editor :: PCGEx | Cluster : Unpack'
icon: circle
---

# Unpack Cluster

Restores vtx/edge clusters from packed dataset.

**How It Works**

> AI-Generated, needs proofreading

* The Cluster : Unpack node restores vertex and edge clusters from a packed dataset.
* It processes the input data to identify and separate previously aggregated cluster information.
* When Flatten is enabled, the node flattens the metadata of unpacked elements, which can affect memory usage and processing speed depending on the specific configuration.

#### Configuration

<details>

<summary><strong>Flatten</strong> <code>bool</code></summary>

Flatten unpacked metadata Depending on your setup this is a tradeoff between memory and speed.

⚡ PCG Overridable

</details>

***

Source: `Source\PCGExElementsClusters\Public\Elements\PCGExUnpackClusters.h`
