# Remove Lowest

{% hint style="warning" %}
This page was generated from the source code. It captures what the node does, but still needs some serious  proofreading.
{% endhint %}

> Removes the edge with the lowest score from each node's connected edges.

#### Overview

This subnode removes the edge with the lowest heuristic score from each node in a cluster. It is used during graph refinement to prune connections based on scoring criteria, such as distance or cost. This can help simplify graphs or enforce specific topological constraints.

{% hint style="info" %}
Connects to **Refine** pins on cluster processing nodes (e.g., **Cluster**, **Graph**).
{% endhint %}

#### How It Works

For each node in the cluster, this subnode evaluates all connected edges using a heuristic scoring function. It identifies the edge with the lowest score and marks it as invalid (removes it from the graph). The scoring is based on the relationship between the current node, its neighbor, and roaming seed/goal nodes defined by the heuristics.

* It iterates through each node in the cluster.
* For each node, it checks all connected edges.
* It calculates a score for each edge using the active heuristic handler.
* It identifies the edge with the lowest score.
* That edge is marked as invalid and removed from the graph.

#### Inputs

* Cluster data containing nodes and edges
* Heuristic handler providing scoring logic

#### Outputs

* Modified cluster with one edge removed per node (the lowest-scoring edge)

#### Configuration

<details>

<summary><strong>Wants Heuristics</strong><br><em>Whether this subnode requires a heuristic to score edges.</em></summary>

When enabled, the subnode uses a scoring system to determine which edge to remove. This is required for the operation to function.

</details>

#### Usage Example

Use this subnode in a graph refinement step to remove the least "favorable" connection from each node, such as the longest or most costly edge. This can help reduce clutter in dense graphs or enforce directional flow based on scoring criteria.

#### Notes

* Only one edge per node is removed.
* The operation is applied to all nodes in the cluster.
* Requires a valid heuristic handler to be connected for scoring.
