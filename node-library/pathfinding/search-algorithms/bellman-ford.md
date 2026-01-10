---
icon: sliders
---

# Bellman-Ford

{% hint style="info" %}
This page was generated from the source code. It should properly capture what the node does, but still needs to be proofread by a human.
{% endhint %}

> Defines a Bellman-Ford pathfinding search operation that handles negative edge weights and detects negative cycles.

#### How It Works

The Bellman-Ford algorithm works by repeatedly relaxing all edges in the graph up to a specific number of times—equal to the number of nodes minus one. During each relaxation, it checks whether moving through a neighboring node results in a shorter path to reach the current node. This process continues until no further improvements can be made.

After completing these iterations, if the algorithm finds that it can still improve any path, it means there's a negative weight cycle within the graph. A negative cycle is a loop where the total cost decreases as you traverse it repeatedly, which can lead to infinite paths in other algorithms like Dijkstra’s.

When enabled, this subnode will detect such cycles and stop the search if one is found, ensuring that only valid paths are returned.

#### Configuration

<details>

<summary><strong>bDetectNegativeCycles</strong><br><em>If enabled, the search will fail if a negative weight cycle is detected.</em></summary>

When enabled, the algorithm will check for negative weight cycles after computing paths. If one is found, the search fails and no valid path is returned.

</details>
