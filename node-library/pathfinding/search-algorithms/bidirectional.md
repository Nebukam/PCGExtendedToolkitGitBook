---
icon: sliders
---

# Bidirectional

{% hint style="warning" %}
This page was generated from the source code. It captures what the node does, but still needs some serious  proofreading.
{% endhint %}

> Performs a bidirectional search algorithm that explores from both the seed and goal simultaneously to find a path.

#### How It Works

The bidirectional search algorithm works by running two simultaneous searches:

1. One from the seed (starting point) toward the goal
2. One from the goal toward the seed

Each search maintains its own data structures including visited node tracking, cost calculations, and priority queues. The searches continue until they meet at a common node in the graph.

When the forward and backward searches intersect, the algorithm reconstructs the complete path by combining:

* The path from the seed to the meeting point
* The path from the goal to the meeting point (in reverse)

This approach reduces the number of nodes that need to be explored compared to a single-direction search, especially in large graphs where the branching factor is high. The time complexity improves from O(b^d) to approximately O(b^(d/2)), making it significantly faster for complex scenarios.

#### Configuration

This subnode defines a behavior for pathfinding operations, specifically how to traverse the graph when searching for connections between points. It's designed to be connected to pathfinding processing nodes that require a specific search strategy.

{% hint style="info" %}
Connects to **pathfinding** processing nodes that accept a search algorithm subnode.
{% endhint %}

#### Notes

The bidirectional search is most effective when:

* The graph has a high branching factor
* The search space is large
* You're looking for shortest paths between distant points

Performance gains are most noticeable in complex environments where standard pathfinding would explore many unnecessary nodes.
