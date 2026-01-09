---
description: 'In editor :: PCGEx | Heuristics : Least Nodes'
icon: circle-dashed
---

# HX : Least Nodes

{% hint style="danger" %}
This documentation has been AI-generated from the source code and may not be 100% accurate.
{% endhint %}

> Creates a heuristic that prioritizes paths with fewer nodes, useful for pathfinding where minimizing complexity or traversal steps is desired.

### Overview

This factory generates a **heuristic function** used in pathfinding operations to evaluate the cost of traversing from one node to another. It's designed to favor routes that involve fewer intermediate nodes, making it ideal for scenarios where simplicity or minimal branching is preferred.

{% hint style="info" %}
Connects to **Pathfinding** nodes that require a heuristic definition, such as A\* or Dijkstra pathfinders.
{% endhint %}

### How It Works

This heuristic evaluates the cost of moving between nodes based on how many nodes are involved in the path. It's particularly useful when you want to avoid complex or highly branched routes in favor of simpler paths.

The evaluation is based on a normalized score that reflects the relative number of nodes between two points, with lower scores indicating shorter or less complex paths.

### Inputs

* **Start Point**: The starting location for pathfinding calculations
* **End Point**: The target location for pathfinding calculations
* **Node Count**: The number of nodes in the current path being evaluated

### Outputs

* **Heuristic Score**: A normalized value representing the cost of traversing between points based on node count
* **Path Complexity**: A measure of how many intermediate steps are required in the path

### Configuration

***

#### General

**Config**

_The configuration settings for this heuristic._

This setting allows you to define how the heuristic behaves. For "Least Nodes", the configuration primarily controls how weights and multipliers are applied to the scoring system.

### Usage Example

Use this factory when you want to guide pathfinding toward routes that involve fewer nodes or steps. For example, in a dungeon generation setup where you want to avoid overly complex corridors, connect this heuristic to an A\* pathfinder node. The pathfinder will prefer routes with fewer intermediate points, resulting in simpler and more direct paths.

### Notes

* This heuristic is best used when the goal is to minimize the number of nodes traversed.
* It works well in combination with other heuristics for multi-criteria pathfinding.
* The actual scoring behavior is fixed and does not require further tuning beyond general weight settings.
