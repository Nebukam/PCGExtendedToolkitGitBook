# Remove Highest

{% hint style="info" %}
This page was generated from the source code. It should properly capture what the node does, but still needs to be proofread by a human.
{% endhint %}

> Removes the edge with the highest score from each node's connections.

#### Overview

This subnode modifies graph structures by removing the edge with the highest score for each node in a cluster. It's useful when you want to prune connections based on a scoring system, such as removing the strongest or most costly links in a network. This can help simplify complex graphs or enforce specific topological constraints.

{% hint style="info" %}
Connects to the **Refine** pin of cluster processing nodes like **MST**, **Prune**, or **Refine Graph**.
{% endhint %}

#### How It Works

This subnode processes each node in a cluster individually. For every node, it looks at all connected edges and evaluates them using a scoring system. It then identifies the edge with the highest score and removes it from the graph. The scoring is determined by a heuristic handler that can be based on distance, cost, or other criteria.

The operation works per-node, so removing an edge does not affect other nodes' connections unless they share the same edge. This ensures that each node's connections are adjusted independently without unintended side effects on the overall structure.

#### Configuration

<details>

<summary><strong>Wants Heuristics</strong><br><em>Whether this subnode requires a heuristic handler to score edges.</em></summary>

When enabled, this subnode uses a scoring system defined by a heuristic handler to determine which edge to remove from each node.

</details>

<details>

<summary><strong>Wants Individual Node Processing</strong><br><em>Whether this subnode processes nodes individually.</em></summary>

When enabled, the subnode evaluates and modifies edges for each node separately. This ensures that each node's connections are adjusted independently.

</details>

#### Usage Example

Use this subnode in a graph refinement workflow where you want to remove the strongest or most expensive connections from each node. For example, if using a distance-based heuristic, it could remove the longest edge from each node, simplifying the cluster structure and reducing overall connectivity.

#### Notes

* This subnode is best used when you have a scoring system in place.
* It modifies edges in-place, so the original data is altered.
* The operation is deterministic based on the scoring function and node connections.
