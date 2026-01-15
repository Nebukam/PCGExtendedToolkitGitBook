---
icon: sliders
---

# Bellman-Ford

Bellman-Ford Search. Handles negative edge weights and detects negative cycles. Slower but more robust.

⚙️ **Behavior** — Instanced pathfinding search.

**How It Works**

> AI-Generated, needs proofreading

* The Bellman-Ford node computes shortest paths from a single source to all other vertices in a weighted graph, accommodating negative edge weights.
* Iterates over all edges for V-1 times (where V is the number of vertices), updating distances if a shorter path is found through an adjacent vertex.
* Optionally detects and identifies negative weight cycles during execution; if enabled and such a cycle is detected, the algorithm fails to provide valid shortest paths.
* Outputs the shortest path distances from the source node to all other nodes in the graph or indicates the presence of a negative cycle.

#### Configuration

<details>

<summary><strong>Detect Negative Cycles</strong> <code>bool</code></summary>

If enabled, the search will fail if a negative weight cycle is detected

⚡ PCG Overridable

</details>

***

Source: `Source\PCGExElementsPathfinding\Public\Search\PCGExSearchBellmanFord.h`
