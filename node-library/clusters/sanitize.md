---
description: 'In editor :: PCGEx | Cluster : Sanitize'
icon: circle
---

# Sanitize

{% hint style="info" %}
This page was generated from the source code. It should properly capture what the node does, but still needs to be proofread by a human.
{% endhint %}

{% hint style="success" %}
Sanitization is ONLY required if you modify clusters using non-cluster nodes.&#x20;

**PCGEx nodes that have vtx/edges pins output clean data**.
{% endhint %}

> Clean and reconnect clusters of points and edges to ensure they form valid, interconnected structures. May create new connections between components, but does not add or remove points or edges.

#### How It Works

This node analyzes existing clusters of points and edges to identify any disconnected or fragmented sections. It then connects these sections by creating new links between nearby components, ensuring that all output clusters are fully connected and represent valid topological structures.

The process begins by evaluating the current connections within each cluster. Any isolated components — those not linked to other parts of the cluster — are identified. If such components are close enough to others, the node creates new connections to merge them into a single coherent cluster. This helps maintain logical groupings even after operations that might have scattered related data.

Clusters that are completely separate and not connected to any other clusters will remain as individual units unless they can be logically grouped based on proximity or other criteria.

#### Configuration

<details>

<summary><strong>Cluster Output Settings</strong><br><em>Graph &#x26; Edges output properties. Note that pruning isolated points is ignored.</em></summary>

Controls how the output graph and edge data are structured.

**Values**:

* **Output Type**: Controls whether to output as a single cluster or multiple clusters.
* **Build Edges**: Whether to generate new edges during sanitization.
* **Prune Isolated Points**: This setting is ignored in this node.

</details>

#### Usage Example

Use this node after operations that may have broken up clusters, such as point removal or edge filtering. For example, if you split a large cluster into smaller ones and then want to reconnect those that were originally part of the same logical group, this node will automatically detect and merge them based on proximity.

#### Notes

* This node is ideal for cleaning up data after complex graph manipulations.
* It preserves all original points and edges but may alter their connections.
* Does not support point or edge creation/deletion; only reconnection.
