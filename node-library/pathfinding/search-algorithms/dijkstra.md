---
icon: sliders
---

# Dijkstra

{% hint style="warning" %}
This page was generated from the source code. It captures what the node does, but still needs some serious  proofreading.
{% endhint %}

> Performs Dijkstra pathfinding search, ideal for scenarios requiring accurate weight consideration.

#### How It Works

Dijkstra's algorithm systematically explores all possible paths from a starting point, always moving toward the node with the lowest cumulative cost. It uses a priority queue to keep track of which nodes to visit next, ensuring that it never skips a potentially shorter route.

At each step, the algorithm evaluates the neighboring nodes and updates their tentative costs if a better path is found. This continues until the destination node is reached or all reachable nodes have been fully explored. Because it doesn't use any estimates or guesses about the direction to the goal, Dijkstra guarantees that the shortest path is found — but this thoroughness makes it slower than other methods like A\*.

#### Configuration

<details>

<summary><strong>Early Exit</strong><br><em>When enabled, the search stops as soon as the destination is reached.</em></summary>

Controls whether the algorithm continues exploring all nodes or halts once the target node is found. When disabled, it explores the entire graph, which can be useful for computing multiple paths or analyzing connectivity.

</details>
