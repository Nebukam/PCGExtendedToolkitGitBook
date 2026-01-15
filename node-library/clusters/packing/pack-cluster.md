---
description: 'In editor :: PCGEx | Cluster : Pack'
icon: circle
---

# Pack Cluster

Pack each cluster into an single point data object containing both vtx and edges.

**How It Works**

> AI-Generated, needs proofreading

* The Cluster : Pack node aggregates each cluster into a single point data object.
* Each resulting point data object contains both vertex (vtx) and edge information from the original cluster.
* Meta filter settings are applied to determine which metadata should be carried over into the new point data objects.

#### Configuration

<details>

<summary><strong>Carry Over Settings</strong> <code>PCGExCarryOverDetails</code></summary>

Meta filter settings.

📦 See: CarryOver configuration

⚡ PCG Overridable

</details>

***

Source: `Source\PCGExElementsClusters\Public\Elements\PCGExPackClusters.h`
