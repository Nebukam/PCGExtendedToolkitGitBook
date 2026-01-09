---
icon: sliders
---

# A\* (A Star)

{% hint style="warning" %}
## AI-generated page -- to be reviewed 
While not 100% accurate, it should properly capture what the node/factory does. It stills needs to be proofread by a human.
{% endhint %}

> Creates an A\* pathfinding heuristic that calculates path costs using the Euclidean distance between nodes, with optional weighting.

### Overview

This factory generates a heuristic function for pathfinding operations. It defines how the search algorithm estimates the cost from any node to the target, which influences which paths are explored first. The A\* heuristic uses straight-line distance (Euclidean) to guide the search efficiently.

{% hint style="info" %}
Connects to Heuristic pins on Pathfinding nodes like **Pathfinder**, **Pathfinder (Multi-Target)**, or **Pathfinder (With Cost)**.
{% endhint %}

### How It Works

The A\* heuristic estimates the cost from any node to the target using Euclidean distance. This is a common and effective approach for pathfinding because it provides an optimistic estimate that never overestimates the actual cost, ensuring optimal paths are found.

The heuristic value is calculated as: `heuristic = weight_factor * sqrt((x2-x1)^2 + (y2-y1)^2 + (z2-z1)^2)`

Where:

* `weight_factor` scales the base distance
* `x1,y1,z1` are the coordinates of the current node
* `x2,y2,z2` are the coordinates of the target node

### Configuration

***

#### General Settings

**Weight Factor**

_Controls how much influence the heuristic has on path selection._

A higher value makes the algorithm more greedy, exploring fewer nodes but potentially missing optimal paths. A lower value makes it more exploratory.

**Values**:

* **1.0**: Standard Euclidean distance
* **Higher values**: More aggressive pathfinding (faster but less optimal)
* **Lower values**: More thorough exploration (slower but more accurate)

**Early Exit**

_When enabled, stops the search as soon as a valid path is found._

This is useful when you only need one path and don't want to explore all possibilities. When disabled, the algorithm will continue searching until it finds the optimal solution.

### Usage Example

Use this factory with a **Pathfinder** node to find the shortest path between two points in 3D space. Connect the A\* heuristic to the Heuristic pin of the Pathfinder node. The pathfinding will use Euclidean distance as its guide, prioritizing nodes that are closer to the target.

### Notes

* This heuristic is best suited for open environments where straight-line paths are possible
* For grid-based or constrained movement, consider using a different heuristic like Manhattan or Diagonal
* The Weight Factor can be adjusted to balance between speed and path quality
* When used with multiple targets, the heuristic will guide each path toward its respective target independently

### Inputs

| Name | Type | Description                                      |
| ---- | ---- | ------------------------------------------------ |
| None |      | This node does not require any input connections |

### Outputs

| Name      | Type         | Description                                                             |
| --------- | ------------ | ----------------------------------------------------------------------- |
| Heuristic | PCGHeuristic | The configured A\* heuristic that can be connected to pathfinding nodes |
