---
description: 'In editor :: PCGEx | Cluster : Merge Vtx'
icon: circle
---

# Merge Vtx

Merge Vtx so all edges share the same vtx collection.

**How It Works**

> AI-Generated, needs proofreading

* The Cluster : Merge Vtx node consolidates vertex collections so that all edges within the cluster reference the same set of vertices.
* During processing, the node ensures uniformity in vertex references across different edges by merging their respective vertex sets into one shared collection.
* The node retains meta filter settings through a feature called Carry Over Settings, allowing these configurations to be applied consistently after the merge operation.

#### Configuration

<details>

<summary><strong>Carry Over Settings</strong> <code>PCGExCarryOverDetails</code></summary>

Meta filter settings.

📦 See: CarryOver configuration

⚡ PCG Overridable

</details>

***

Source: `Source\PCGExElementsClusters\Public\Elements\PCGExMergeVertices.h`
