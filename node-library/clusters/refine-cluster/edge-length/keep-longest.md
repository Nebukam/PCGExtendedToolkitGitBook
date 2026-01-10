# Keep Longest

{% hint style="info" %}
This page was generated from the source code. It should properly capture what the subnode does, but still needs to be proofread by a human.
{% endhint %}

> Keeps the longest edge connected to each node in a cluster.

#### Overview

This subnode modifies the graph structure of a cluster by retaining only the longest edge connected to each node. It's useful for creating skeletal or backbone structures where you want to emphasize the most extended connections between points, which can help define the overall shape or flow of a network.

It operates on the edges of a cluster and removes all but one edge per node — specifically, the one with the greatest distance between its endpoints. This is particularly helpful when working with proximity-based graphs or when you want to simplify a dense network into a more skeletal representation.

{% hint style="info" %}
Connects to **Refine** pins on cluster processing nodes (e.g., _Refine Cluster_).
{% endhint %}

#### How It Works

This subnode processes each node in the cluster individually. For every node, it evaluates all edges connected to that node and identifies the one with the greatest distance between its start and end points. That edge is then marked as valid (kept), while all other edges connected to the same node are removed from the graph.

The algorithm works by:

1. Iterating through each node in the cluster.
2. For each node, examining all links (edges) connected to it.
3. Calculating the squared distance between the start and end points of each edge.
4. Selecting the edge with the maximum distance.
5. Marking that edge as valid, effectively keeping only the longest edge per node.

This approach ensures a single representative edge per node, emphasizing the most extended connections in the structure.

<details>

<summary>Inputs</summary>

* A cluster containing nodes and edges
* Edge data with start and end points defining distances

</details>

<details>

<summary>Outputs</summary>

* The same cluster with only the longest edge retained for each node
* All other edges are removed from the graph structure

</details>

#### Configuration

<details>

<summary><strong>Default Edge Validity</strong><br><em>Sets whether edges are valid by default before processing.</em></summary>

When enabled, edges are considered valid initially. When disabled, they are not.

</details>

#### Usage Example

Use this subnode in a _Refine Cluster_ node to simplify a dense graph into its most extended connections. For instance, when generating a network of roads or pathways from point data, you might want to keep only the longest direct connection between each pair of points, discarding shorter detours or redundant links.

#### Notes

* This subnode is designed for individual node processing, meaning it evaluates edges per-node rather than globally.
* The resulting graph will have at most one edge per node, ensuring a simplified and skeletal representation.
* It's particularly effective when used with clusters that have many overlapping or short-range connections.
