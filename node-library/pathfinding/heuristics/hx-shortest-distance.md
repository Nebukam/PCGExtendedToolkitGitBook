---
description: 'In editor :: PCGEx | Heuristics : Shortest Distance'
icon: circle-dashed
---

# HX : Shortest Distance

{% hint style="warning" %}
## AI-generated page -- to be reviewed 
While not 100% accurate, it should properly capture what the node/factory does. It stills needs to be proofread by a human.
{% endhint %}

> Creates a heuristic that evaluates point proximity based on the shortest distance between points.

### Overview

This factory generates a heuristic operation that computes scores based on the actual geometric distance between points in a cluster. It's designed for pathfinding scenarios where you want to prioritize points that are closer to a target, or evaluate how close a point is to an ideal route.

{% hint style="info" %}
Connects to **Pathfinding** nodes that require a heuristic definition, such as A\* or Dijkstra pathfinding operations.
{% endhint %}

### Inputs and Outputs

#### Inputs

* **Cluster**: The input cluster containing points to evaluate
* **Goal Point**: Target point used for distance calculations

#### Outputs

* **Heuristic**: Generated heuristic data that can be used by pathfinding nodes

### How It Works

This heuristic evaluates how far each point is from the goal. It uses actual geometric distance measurements within the cluster's bounds to compute scores. The score represents how "good" a point is in terms of proximity to the target, with lower values being better when using "Lower is Better" mode.

The calculation normalizes distances by the cluster's bounding box size, making it scale-independent and suitable for clusters of varying sizes.

### Configuration

***

#### General

**Config**

_The configuration settings for this heuristic._

This setting controls how the heuristic computes its scores. The default configuration uses standard distance-based scoring with no additional transformations.

**Lower is Better**

_When enabled, points closer to the goal receive better (lower) scores._

When this option is enabled, the heuristic assigns lower scores to points that are closer to the target location. When disabled, higher scores are given to closer points.

### Usage Example

Use this heuristic when you want to guide pathfinding toward a specific goal point. For example, if you're creating a navigation mesh for AI agents, you might use this heuristic to direct them toward a target location, such as a player or objective. The pathfinding algorithm will prefer points that are closer to the goal, resulting in more efficient and natural-looking paths.

### Notes

* This heuristic is best used when the cluster's geometry is relatively uniform in scale
* The normalized distance scoring ensures consistent behavior across different cluster sizes
* Combine with other heuristics for more complex pathfinding behaviors
* When using "Lower is Better" mode, points closer to the goal receive better (lower) scores
