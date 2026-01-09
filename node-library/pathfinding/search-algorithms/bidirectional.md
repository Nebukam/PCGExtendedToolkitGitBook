---
icon: sliders
---

# Bidirectional

{% hint style="warning" %}
## AI-generated page -- to be reviewed 
While not 100% accurate, it should properly capture what the node/factory does. It stills needs to be proofread by a human.
{% endhint %}

> A heuristic factory that defines a bidirectional search algorithm for pathfinding.

### Overview

This factory creates a search strategy that simultaneously explores the graph from both the starting point (seed) and the target point (goal). It's designed to be connected to the Heuristic pin of pathfinding nodes like **Find Path** or **Find All Paths**. When used, it significantly improves performance for large graphs by reducing the search space.

{% hint style="info" %}
Connects to the Heuristic pin of pathfinding nodes
{% endhint %}

### How It Works

Instead of searching from only one direction (seed to goal), this algorithm searches from both directions at the same time. It maintains two separate searches:

* One starting from the seed node
* One starting from the goal node

The search continues until the two paths meet somewhere in the middle, then reconstructs the complete path by combining the forward and backward segments.

This approach is particularly effective for large graphs where the branching factor is high, as it reduces the time complexity from O(b^d) to approximately O(b^(d/2)).

### Inputs

* **Seed**: The starting point of the pathfinding operation
* **Goal**: The target point of the pathfinding operation

### Outputs

* **Path**: The complete bidirectional path from seed to goal, if found

### Configuration

***

#### Search Settings

**Early Exit**

_When enabled, the search stops as soon as a path is found._

Enabling this setting will cause the algorithm to stop searching once it finds any valid path between seed and goal. This can improve performance when you only need one path, but may miss shorter paths if multiple exist.

### Usage Example

Use this factory when:

* You're working with large graphs (e.g., city layouts, complex networks)
* You want to optimize pathfinding performance
* The graph has a high branching factor

Connect it to the Heuristic pin of a **Find Path** node. The algorithm will then search from both seed and goal simultaneously, potentially finding paths much faster than unidirectional approaches.

### Notes

* This factory is most beneficial for large graphs where traditional single-direction searches would be slow
* It requires more memory than standard pathfinding due to maintaining separate data structures for both directions
* The bidirectional approach works best when the graph structure allows for efficient mid-point detection
* For small graphs, the overhead of managing two searches might not provide significant benefits
