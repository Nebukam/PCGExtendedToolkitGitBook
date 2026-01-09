---
description: Default
icon: sliders
---

# Goal Picker (Default)

{% hint style="info" %}
## AI-generated page -- to be reviewed 
While not 100% accurate, it should properly capture what the node/factory does. It stills needs to be proofread by a human.
{% endhint %}

> Creates a heuristic that calculates path costs based on the distance between seed points and goal points.

### Overview

This factory generates a heuristic operation for pathfinding nodes. It defines how the cost of a path is calculated when moving from a seed point toward a goal point, using the Euclidean distance as the basis for the cost calculation.

{% hint style="info" %}
Connects to **Heuristic** pins on pathfinding nodes like **Pathfinder**, **Pathfinder (Multi-Source)**, and **Pathfinder (Multi-Goal)**
{% endhint %}

### How It Works

This heuristic calculates a cost value based on the distance between each seed point and its associated goal point. The cost is directly proportional to the Euclidean distance between them, meaning paths that travel shorter distances will have lower costs.

The factory determines which goal point to use for each seed by looking at the seed's index in the goal data. If a seed's index exceeds the number of available goals, it uses the `IndexSafety` setting to determine how to handle the out-of-bounds case.

### Inputs

* **Seeds**: Point data representing starting locations for pathfinding
* **Goals**: Point data representing destination locations for pathfinding

### Outputs

* **Heuristic**: Configured heuristic operation that can be used by pathfinding nodes

### Configuration

***

#### General

**Index Safety**

_Controls how out-of-bounds indices are handled when mapping seeds to goals._

When a seed point's index is greater than or equal to the number of goal points, this setting determines what happens:

* **Ignore**: Out of bounds indices are ignored. (0,1,2,-1,-1,-1,...)
* **Tile**: Out of bounds indices are tiled. (0,1,2,0,1,2...)
* **Clamp**: Out of bounds indices are clamped. (0,1,2,2,2,2...)
* **Yoyo**: Out of bounds indices are mirrored and back. (0,1,2,1,0,1...)

### Usage Example

Use this heuristic when you want to prioritize paths that travel the shortest distance between seed points and goal points. For example:

* Create a set of seed points representing starting locations
* Create a set of goal points representing destinations
* Connect both sets to a **Pathfinder** node
* Assign this "Default" heuristic factory to the **Heuristic** input pin
* The pathfinding will favor routes that minimize travel distance

### Notes

* This is the most commonly used heuristic for basic pathfinding scenarios
* The cost values are calculated using Euclidean distance, which works well for open spaces
* When using multiple goals per seed, consider using the **All** or **Random** goal pickers instead of this default factory
* If your seeds and goals have a one-to-one mapping, ensure that the number of seed points matches the number of goal points to avoid unexpected behavior with index safety
