---
icon: sliders
---

# Bellman-Ford

{% hint style="danger" %}
This documentation has been AI-generated from the source code and may not be 100% accurate.
{% endhint %}

> Creates a pathfinding heuristic that uses the Bellman-Ford algorithm for finding shortest paths.

### Overview

This factory generates a search algorithm that can handle negative edge weights in pathfinding graphs. It's particularly useful when your heuristics or cost calculations might produce negative values, which other algorithms like Dijkstra cannot process correctly.

{% hint style="info" %}
Connects to the **Heuristic** pin of pathfinding nodes (like PCGEx Pathfinding, PCGEx Multi-Pathfinding)
{% endhint %}

### How It Works

The Bellman-Ford algorithm computes shortest paths from a source node to all other nodes in a weighted graph. Unlike Dijkstra's algorithm, it can handle negative edge weights and will detect if there are negative weight cycles (loops that decrease total cost infinitely). This makes it more robust for complex pathfinding scenarios where costs might be negative due to heuristics or terrain modifications.

### Inputs

* **Source Points**: Points from which the pathfinding search begins
* **Graph Data**: The weighted graph structure containing nodes and edges
* **Heuristic Settings**: Configuration for cost calculations and path evaluation

### Outputs

* **Path Results**: Computed paths from source points to target locations
* **Cost Information**: Distance values and cost metrics for each path
* **Cycle Detection**: Warnings or errors when negative weight cycles are found

### Configuration

***

#### Settings

**Detect Negative Cycles**

_When enabled, the search will fail if a negative weight cycle is detected._

If this setting is enabled, and the algorithm encounters a loop in the graph that continuously decreases the path cost (a negative cycle), it will stop the search and report an error. This prevents infinite loops in certain edge cases.

### Usage Example

Use this factory when you're building a pathfinding system where:

* Your heuristics might produce negative values
* You want to detect impossible or unstable paths with negative cycles
* You need robustness over performance (e.g., for dynamic environments)

Connect it to the Heuristic pin of a PCGEx Pathfinding node. The algorithm will then compute paths using Bellman-Ford's method, which can handle negative weights and will warn you if a problematic cycle is detected.

### Notes

* Bellman-Ford is slower than A\* (O(V×E) vs O(E log V)) but more robust
* It's ideal for scenarios where heuristics or cost functions may produce negative values
* Enable "Detect Negative Cycles" when you want to ensure path stability and avoid infinite loops
* This algorithm can detect if a path leads to an infinitely decreasing cost, which is useful for debugging unstable heuristics
