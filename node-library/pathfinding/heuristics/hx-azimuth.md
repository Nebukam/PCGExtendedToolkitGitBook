---
description: 'In editor :: PCGEx | Heuristics : Azimuth'
icon: circle-dashed
---

# HX : Azimuth

{% hint style="info" %}
### AI-generated page -- to be reviewed

While not 100% accurate, it should properly capture what the node/factory does. It stills needs to be proofread by a human.
{% endhint %}

> Creates a heuristic that evaluates points based on their directional alignment toward a goal, using the angle between the current point and the goal direction.

### Overview

This factory generates a heuristic operation that guides pathfinding by measuring how well a point's direction aligns with the overall direction toward the final goal. It's particularly useful for creating natural-looking paths that move consistently toward a target.

{% hint style="info" %}
Connects to **Heuristics** input pins on pathfinding nodes like **Pathfinder** or **Pathfinder With Constraints**
{% endhint %}

### How It Works

The azimuth heuristic works by calculating the angle between:

1. The direction from the current point to the goal
2. The direction from the current point to its neighbor (for edge scoring)

It then maps this angle to a score where:

* **0** = Point is moving directly away from the goal (worst case)
* **1** = Point is moving directly toward the goal (best case)

The resulting score helps pathfinding algorithms prioritize points that move in the right direction.

### Inputs

* **Seed Point**: The starting point for the heuristic calculation
* **Goal Point**: The target point that the heuristic guides toward
* **Heuristics**: Input pin for connecting to pathfinding nodes

### Outputs

* **Heuristic**: The calculated heuristic value used by pathfinding algorithms

### Configuration

***

#### General

**Config**

_Heuristic configuration settings._

Controls how the heuristic behaves, including weight factors and scoring curve.

### Usage Example

Use this with a **Pathfinder** node to create natural-looking paths that consistently move toward a goal. For example:

1. Create a cluster of points representing terrain
2. Connect a **Heuristics : Azimuth** factory to the Pathfinder's Heuristics pin
3. Set your seed and goal points
4. The pathfinding will favor points that align with the overall direction toward the goal

### Notes

* This heuristic works best when combined with other heuristics for more nuanced pathfinding
* Scores are normalized between 0 and 1, where higher values indicate better alignment with the goal
* The heuristic considers both global point positioning and edge traversal directions
* Can be used in conjunction with **Heuristics : Distance** or **Heuristics : Curvature** for richer pathfinding behavior
