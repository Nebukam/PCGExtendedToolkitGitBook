---
description: 'In editor :: PCGEx | Heuristics : Feedback'
icon: circle-dashed
---

# HX : Feedback

{% hint style="info" %}
This page was generated from the source code. It should properly capture what the node does, but still needs to be proofread by a human.
{% endhint %}

> Heuristics based on visited score feedback.

#### Overview

This subnode modifies pathfinding heuristics by incorporating feedback from previously visited points and edges. It encourages or discourages revisiting elements of a path based on how often they've been used, which can help avoid redundant paths or promote exploration in certain scenarios. This is especially useful in procedural generation where you want to influence the flow of paths through a graph without completely constraining them.

It connects to Filter pins on pathfinding nodes to define how visited elements affect scoring during path computation.

{% hint style="info" %}
Connects to **Filter** pins on pathfinding nodes.
{% endhint %}

#### How It Works

This subnode tracks how many times each point and edge has been part of a path. When computing scores for potential next steps, it adjusts the weight based on this history:

1. If a point or edge has already been visited in prior paths, its score is modified.
2. The modification depends on whether `bBinary` is enabled:
   * When **enabled**, the score is either fully penalized (0) or left unchanged (1).
   * When **disabled**, the score is scaled by a factor based on how often it's been visited.
3. If `bGlobalFeedback` is enabled, feedback persists across multiple path queries within the same node, affecting all future paths.
4. The `VisitedPointsWeightFactor` and `VisitedEdgesWeightFactor` control how strongly this feedback influences point and edge scores respectively.

This creates a dynamic weighting system that adapts to the exploration history of the graph, making paths more varied or avoiding repetition depending on configuration.

#### Configuration

<details>

<summary><strong>bBinary</strong><br><em>If enabled, weight doesn't scale with overlap; the base score is either 0 or 1.</em></summary>

When enabled, visited elements are given a fixed weight of either 0 (penalized) or 1 (unchanged), regardless of how many times they were visited.

</details>

<details>

<summary><strong>VisitedPointsWeightFactor</strong><br><em>Weight to add to points that are already part of the plotted path.</em></summary>

Controls how much weight is added to point scores based on their visitation count. Only used when `bBinary` is disabled.

**Values**:

* **0**: No effect from visited points
* **1**: Full effect from visited points

</details>

<details>

<summary><strong>VisitedEdgesWeightFactor</strong><br><em>Weight to add to edges that are already part of the plotted path.</em></summary>

Controls how much weight is added to edge scores based on their visitation count. Only used when `bBinary` is disabled.

**Values**:

* **0**: No effect from visited edges
* **1**: Full effect from visited edges

</details>

<details>

<summary><strong>bGlobalFeedback</strong><br><em>Global feedback weight persist between path query in a single pathfinding node.</em></summary>

When enabled, the feedback history persists across multiple path queries within the same node. This can slow performance due to reduced parallelism.

</details>

<details>

<summary><strong>bAffectAllConnectedEdges</strong><br><em>Whether to apply feedback to all edges connected to a visited point.</em></summary>

When enabled, feedback is applied not to the specific edge used but also to all edges connected to the visited point.

</details>

#### Usage Example

Use this subnode in a pathfinding setup where you want to avoid creating identical or very similar paths repeatedly. For example, when generating multiple routes through a dungeon, applying feedback can encourage exploration of different corridors instead of looping back to previously used ones.

#### Notes

* Enabling `bGlobalFeedback` disables parallel execution for better consistency.
* The feedback mechanism works best with a sufficient number of path queries to build meaningful statistics.
* This subnode is ideal for creating dynamic and varied procedural paths in games or simulations.
