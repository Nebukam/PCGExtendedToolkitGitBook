---
description: 'In editor :: PCGEx | Sampler : Vtx Blend'
icon: circle-dashed
---

# Sampler : Vtx Blend

{% hint style="info" %}
This page was generated from the source code. It should properly capture what the node does, but still needs to be proofread by a human.
{% endhint %}

> Create a vertex attribute sampler that blends values from neighboring points using specified blending operations.

#### How It Works

This node collects data from nearby points in a graph and combines them into a single value for each vertex. It uses blending rules defined by its subnodes to determine how the neighbor values should be combined. For example, it can average the values, take the highest value, or apply a weighted combination based on distance.

The process works per-vertex, using the relationships between points in the graph to identify neighbors. Each neighbor contributes to the final result according to its weight (if applicable) and the blending method selected by the subnodes.

#### Configuration

<details>

<summary><strong>Blending Subnodes</strong><br><em>Define the blending operations to apply when combining neighbor values.</em></summary>

These subnodes specify how to combine values from neighbors. For example, you can define a "Weighted Average" operation or a "Maximum" operation.

</details>

#### Usage Example

You have a graph of points representing terrain elevation data. You want each point's elevation to be influenced by its neighbors' elevations using a weighted average blend. You would connect this node to a neighbor sampler consumer, and configure it with a "Weighted Average" blending subnode that uses the neighbor distance as a weight.

#### Notes

* The performance of this node scales with both the number of vertices and the number of neighbors per vertex.
* Ensure that the blending subnodes are compatible with the data types being sampled (e.g., scalar, vector, or color).
* This node works best when used in conjunction with graph-based sampling operations where neighbor relationships are well-defined.
