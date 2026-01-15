---
icon: sliders
---

# Dijkstra

Dijkstra search. Slower than A\* but more respectful of modifiers and weights.

⚙️ **Behavior** — Instanced pathfinding search.

**How It Works**

> AI-Generated, needs proofreading

* Dijkstra's algorithm computes the shortest path from a starting node to all other nodes in a graph by iteratively exploring outward and updating distances based on edge weights.
* The algorithm maintains a priority queue of nodes to visit next, ordered by their current known distance from the start node.
* Upon visiting each node, Dijkstra updates the distances of its neighbors if a shorter path is found through the current node.

_No configurable settings._

***

Source: `Source\PCGExElementsPathfinding\Public\Search\PCGExSearchDijkstra.h`
