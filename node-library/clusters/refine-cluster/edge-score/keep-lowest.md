# Keep Lowest

{% hint style="info" %}
This page was generated from the source code. It should properly capture what the node does, but still needs to be proofread by a human.
{% endhint %}

> Keeps the edge with the lowest score for each node in a cluster.

#### Overview

This subnode filters edges connected to each node in a cluster by keeping only the one with the lowest calculated score. It's useful when you want to reduce the number of connections per node while preserving the most relevant or optimal edge based on a scoring system.

It operates on a per-node basis, evaluating all edges connected to that node and retaining only the one with the lowest score. This helps in creating cleaner, more optimized graph structures where each node has a single, well-defined connection.

{% hint style="info" %}
Connects to **Refine** pins on cluster processing nodes like **Refine Cluster** or **Graph Builder**.
{% endhint %}

#### How It Works

For each node in the cluster, this subnode evaluates all edges connected to that node. It calculates a score for each edge using a heuristic system (like distance, cost, or custom rules). The edge with the lowest score is selected and marked as valid, while all other edges from that node are invalidated.

The scoring logic depends on the heuristics defined in the parent processing node. For example, if using distance-based heuristics, it might measure how close an edge's destination is to a roaming goal or seed point. The subnode then selects the edge with the smallest score and keeps it, discarding all others from that node.

#### Configuration

This subnode does not have user-facing settings. It automatically uses the heuristics defined in the parent processing node to calculate scores.

#### Usage Example

Use this subnode when you want to simplify a graph so that each node connects to only one other node, based on a meaningful metric like distance or cost. For instance, in a navigation mesh generation setup, you might use it to ensure each point connects to its closest neighbor according to a custom heuristic, reducing complexity and improving performance.

#### Notes

* This subnode is designed for individual node processing, meaning it evaluates edges per node independently.
* The scoring system must be defined by the parent node's heuristics; this subnode does not define scoring logic itself.
* It's commonly used in scenarios where you want to reduce graph density while maintaining meaningful connections.
