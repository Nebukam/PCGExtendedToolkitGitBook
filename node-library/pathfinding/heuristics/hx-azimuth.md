---
description: 'In editor :: PCGEx | Heuristics : Azimuth'
icon: circle-dashed
---

# HX : Azimuth

{% hint style="warning" %}
This page was generated from the source code. It captures what the node does, but still needs some serious  proofreading.
{% endhint %}

> Heuristics based on direction toward final goal (north star).

#### How It Works

This subnode evaluates how well a point's direction aligns with the overall path toward the goal. It calculates a score between 0 and 1, where 1 means the point moves directly toward the goal and 0 means it moves away from the goal.

The calculation uses the angle between:

1. The direction from the current point to the goal
2. The direction from the current point to its neighbor (for edge scoring)

For global scoring, it measures how much a point's direction aligns with the overall path toward the goal. For edge scoring, it evaluates how well an edge's direction supports movement toward the goal.

The score is derived from the dot product of these two directions, remapped from -1 to 1 into a 0 to 1 range. A curve can be applied to adjust how scores are interpreted, allowing for different weighting behaviors.

#### Configuration

<details>

<summary><strong>Config</strong><br><em>Filter Config.</em></summary>

Controls how the heuristic is applied. This includes settings for weight, curve shaping, and other parameters that affect how scores are calculated and interpreted.

</details>

#### Usage Example

Use this subnode in a pathfinding graph to guide agents toward a goal by favoring points that move in the correct direction. For example, when generating a path from point A to point B, this heuristic will prefer paths where each step moves progressively closer to point B rather than wandering away.

#### Notes

* The heuristic is directional and assumes a clear goal direction.
* Scores are normalized between 0 and 1 for consistent behavior across different scenarios.
* Can be combined with other heuristics to create more complex pathfinding behaviors.
