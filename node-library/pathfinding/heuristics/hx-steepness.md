---
description: 'In editor :: PCGEx | Heuristics : Steepness'
icon: circle-dashed
---

# HX : Steepness

{% hint style="warning" %}
This page was generated from the source code. It captures what the node does, but still needs some serious  proofreading.
{% endhint %}

\> Heuristics based on steepness.

#### Overview

This subnode defines a heuristic that evaluates the steepness of terrain between points in a pathfinding graph. It's particularly useful for creating realistic movement costs where climbing or descending affects navigation difficulty. The heuristic calculates how much a path segment deviates from a specified "up" direction, assigning higher scores (more costly) to steeper inclines or declines.

This subnode connects to the **Heuristics** input pin of pathfinding nodes, providing them with a method to compute movement costs based on terrain steepness. It's ideal for simulating realistic character traversal, such as when modeling climbing difficulty or avoiding steep slopes in game environments.

{% hint style="info" %}
Connects to the **Heuristics** input pin of pathfinding nodes.
{% endhint %}

#### How It Works

This subnode evaluates the steepness of edges in a graph by calculating the dot product between each edge's direction and a user-defined "up" vector. The resulting value is interpreted as a measure of how much the edge slopes toward or away from this up direction.

* For each edge, it computes the direction vector from the source point to the target point.
* It calculates the dot product of this edge direction with the configured UpVector.
* If **Absolute Steepness** is enabled, the result is clamped to a range of 0 to 1 based on how steep the slope is relative to the up direction.
* If disabled, the full range of -1 to 1 is used and remapped to 0 to 1.
* When **Accumulate Score** is enabled, it considers the steepness of previous edges in the path when computing the current edge's score, which can help emphasize gradual changes in terrain.

This method allows for dynamic cost assignment in pathfinding where steeper paths are more expensive to traverse, simulating realistic movement constraints.

<details>

<summary>Inputs</summary>

* Expects a graph with points and edges.
* Requires an UpVector to define the "up" direction for steepness calculations.
* Optionally uses previous edge data if accumulation is enabled.

</details>

<details>

<summary>Outputs</summary>

* Provides a scoring mechanism for pathfinding nodes based on terrain steepness.
* The score reflects how much an edge deviates from the defined up direction.
* Can be combined with other heuristics to create complex movement cost models.

</details>

#### Configuration

<details>

<summary><strong>Accumulate Score</strong><br><em>When enabled, previous edges influence the current edge's steepness score.</em></summary>

When enabled, the steepness of prior edges in a path contributes to the current edge's score. This is useful for smoothing out gradual changes in terrain by considering the overall slope trend rather than individual segments.

</details>

<details>

<summary><strong>Accumulation Samples</strong><br><em>How many previous edges should be added to the current score.</em></summary>

Controls how many prior edges are considered when calculating the current edge's steepness. A higher value increases the influence of past terrain on the current path cost, useful for very smooth terrain where small changes need to be amplified.

**Range:** 1 or more

</details>

<details>

<summary><strong>Up Vector</strong><br><em>Vector pointing in the "up" direction.</em></summary>

Defines the reference vector used to determine what constitutes a steep slope. For example, using `FVector::UpVector` makes vertical movement more costly, while using a different vector can simulate terrain sloping in a specific direction.

</details>

<details>

<summary><strong>Absolute Steepness</strong><br><em>When enabled, the overall steepness determines the score.</em></summary>

When enabled, only the magnitude of the slope (how steep it is) affects the score, regardless of whether it's uphill or downhill. When disabled, both directions are considered, with downhill slopes potentially being less costly than uphill ones.

</details>

#### Usage Example

A pathfinding graph represents a mountainous terrain where you want to avoid steep climbs. You set the **Up Vector** to `FVector::UpVector` and enable **Absolute Steepness**. This causes paths that climb steeply to receive higher scores, making them less likely to be chosen by the pathfinder unless they are significantly shorter than alternatives.

#### Notes

* The **Accumulation Samples** setting is especially useful when working with terrain that has many small elevation changes.
* Combining this heuristic with others (like distance or cost) allows for more nuanced pathfinding behaviors.
* Adjusting the **Up Vector** can simulate different types of terrain, such as sloping hills or vertical walls.
