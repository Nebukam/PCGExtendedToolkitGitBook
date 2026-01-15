---
description: 'In editor :: PCGEx | Cluster : Sanitize'
icon: circle
---

# Sanitize

{% hint style="success" %}
Sanitization is ONLY required if you modify clusters using non-cluster nodes.

**PCGEx nodes that have vtx/edges pins output clean data**.
{% endhint %}

Ensure the input set of vertex and edges outputs clean, interconnected clusters. May create new clusters, but does not creates nor deletes points/edges.

**How It Works**

> AI-Generated, needs proofreading

* The Cluster : Sanitize node processes an input set of vertices and edges to ensure the output consists of clean, interconnected clusters.
* It maintains the integrity of existing points and edges by not creating new ones nor deleting any present in the input.
* The node adjusts cluster formations as needed but focuses on sanitizing rather than altering the fundamental structure of the graph.
* Output properties for Graph & Edges are configurable through Cluster Output Settings, allowing users to specify desired characteristics of the sanitized clusters.
* Isolated points within the graph remain unaffected by this process, as pruning them is explicitly ignored according to the node's configuration.

#### Configuration

<details>

<summary><strong>Cluster Output Settings</strong> <code>PCGExGraphBuilderDetails</code></summary>

Graph & Edges output properties. Note that pruning isolated points is ignored.

📦 See: GraphBuilder configuration

⚡ PCG Overridable

</details>

***

Source: `Source\PCGExElementsClusters\Public\Elements\PCGExSanitizeClusters.h`
