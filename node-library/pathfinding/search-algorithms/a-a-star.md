---
icon: sliders
---

# A\* (A Star)

A\* Search. Returns early with the least possible amount of traversed nodes.

⚙️ **Behavior** — Instanced pathfinding search.

**How It Works**

> AI-Generated, needs proofreading

* The A\* Search node computes the shortest path from a start node to a goal node in a graph by evaluating nodes based on the sum of the cost to reach the node and an estimate of the cost to reach the goal.
* It prioritizes nodes for expansion using a priority queue, where the node with the lowest total estimated cost is processed first.
* The algorithm returns the path as soon as it reaches the goal node, ensuring that the least possible number of nodes are traversed before finding the optimal solution.

_No configurable settings._

***

Source: `Source\PCGExElementsPathfinding\Public\Search\PCGExSearchAStar.h`
