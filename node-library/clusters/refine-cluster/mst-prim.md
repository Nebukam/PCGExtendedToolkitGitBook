---
description: 'Refine : MST (Prim)'
icon: sliders
---

# MST (Prim)

{% hint style="warning" %}
This page was generated from the source code. It captures what the node does, but still needs some serious  proofreading.
{% endhint %}

> Creates a Minimum Spanning Tree using Prim's algorithm, refining edge validity in a cluster.

#### How It Works

This subnode builds a Minimum Spanning Tree (MST) using Prim's algorithm. It starts with one point and grows the tree by selecting the lowest-weight edge that connects a visited point to an unvisited point. The process continues until all points are included in the tree, ensuring all points are connected with minimal total edge weight.

The algorithm uses a priority queue to always select the next best edge based on heuristic scores. As it builds the tree, it tracks which edges are used to form the final network. After processing is complete, it updates the validity of edges in the cluster so that only those forming the MST remain valid (or invalid if invert is enabled).

#### Configuration

<details>

<summary><strong>Invert</strong><br><em>When enabled, marks all edges as invalid except those in the MST.</em></summary>

When enabled, this subnode will mark all edges as invalid by default and only keep the edges that are part of the Minimum Spanning Tree. When disabled (default), it marks all edges in the MST as valid and leaves others unchanged.

</details>

#### Usage Example

Use this subnode to generate a connected network from a group of points, such as creating a road system or branching structure that connects all nodes with minimal total length. For example, when generating a forest layout, you can use this to ensure all trees are connected via the minimum number of paths.

#### Notes

* The MST is built using heuristics to score edges; the quality of the result depends on how those heuristics are configured.
* This subnode modifies edge validity in place and does not create new geometry.
* Performance scales with the number of points in the cluster, as it processes all edges during the MST construction.
