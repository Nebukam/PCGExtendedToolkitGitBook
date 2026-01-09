---
icon: sliders
---

# Dijkstra

{% hint style="warning" %}
## AI-generated page -- to be reviewed 
While not 100% accurate, it should properly capture what the node/factory does. It stills needs to be proofread by a human.
{% endhint %}

> Creates a pathfinding heuristic that implements the Dijkstra algorithm for finding shortest paths.

### Overview

This factory generates a heuristic operation that uses the Dijkstra algorithm for pathfinding. It's designed to work with pathfinding nodes in PCG graphs, providing a cost calculation method that respects all modifiers and weights applied to nodes or edges.

{% hint style="info" %}
Connects to Heuristic pins on pathfinding nodes such as Find Path or Generate Path
{% endhint %}

### Inputs

* **Graph**: The PCG graph containing the nodes and edges to be used for pathfinding
* **Start Node**: The node where the pathfinding search begins
* **Target Node**: The node where the pathfinding search ends

### Outputs

* **Heuristic**: The calculated heuristic value used for pathfinding decisions

### How It Works

The Dijkstra heuristic calculates path costs by exploring all possible routes from the start node, always expanding the least costly path first. Unlike A\*, it doesn't use a heuristic estimate to guide the search, which makes it slower but more accurate when dealing with complex weights or modifiers that affect edge costs.

This approach ensures that every potential path is evaluated fairly without bias toward any particular direction, making it ideal for scenarios where:

* Edge weights change significantly based on local conditions
* Modifiers are applied that affect path costs dynamically
* You need the most precise path calculation possible

### Configuration

***

#### General Settings

**Early Exit**

_When enabled, the search will stop as soon as the target node is reached._

This setting controls whether the algorithm continues exploring all possible paths or stops once a valid path to the destination has been found. When disabled, the algorithm explores the entire search space to find the absolute shortest path.

### Usage Example

Use this heuristic when you need precise pathfinding that respects complex edge weights and modifiers. For example:

1. Create a graph with multiple nodes connected by weighted edges
2. Apply various modifiers that change edge costs based on terrain type or other conditions
3. Connect this Dijkstra factory to the Heuristic pin of a Find Path node
4. The pathfinder will now evaluate all possible routes while respecting the modified weights

### Notes

* Dijkstra is slower than A\* due to its exhaustive search approach
* Best used when you have complex, dynamic edge weights that require accurate evaluation
* Can be combined with other modifiers and filters for advanced pathfinding behaviors
* The algorithm will always find the mathematically optimal path given the current weights
