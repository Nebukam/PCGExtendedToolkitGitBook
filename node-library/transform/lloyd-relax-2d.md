---
description: 'In editor :: PCGEx | Lloyd Relax 2D'
icon: circle
---

# Lloyd Relax 2D

{% hint style="info" %}
This page was generated from the source code. It should properly capture what the node does, but still needs to be proofread by a human.
{% endhint %}

> Applies Lloyd relaxation to input points to improve their distribution.

#### How It Works

Lloyd relaxation is a technique that helps spread points out more evenly in 2D space. The process works by first dividing the area into regions around each point, called Voronoi cells. Then, each point moves to the center (centroid) of its own cell. This movement is repeated multiple times, gradually making the points distribute more uniformly across the area.

This method is especially useful for creating natural-looking layouts where you want to avoid clumps or gaps, such as placing trees, rocks, or buildings in a way that looks both random and balanced.

#### Configuration

<details>

<summary><strong>Iterations</strong><br><em>Number of relaxation iterations to perform.</em></summary>

Controls how many times the Lloyd relaxation process is repeated. More iterations lead to a more uniform distribution but take longer to compute.

**Values**: Integer, minimum 1

</details>

<details>

<summary><strong>InfluenceDetails</strong><br><em>Influence Settings</em></summary>

Settings that control how influence is applied during the relaxation process. This affects how points move based on their neighbors.

</details>

<details>

<summary><strong>ProjectionDetails</strong><br><em>Projection settings.</em></summary>

Settings for projecting points onto a surface or plane, affecting how the relaxation is calculated in 2D space.

</details>

#### Inputs

* **Points**: Input points to be relaxed

#### Outputs

* **Points**: Output points after Lloyd relaxation has been applied

#### Usage Example

Use this node to distribute points more evenly across a terrain. For example, after placing random trees on a map, connect them to this node with 5 iterations to create a more natural and uniform forest layout.

#### Notes

* The number of iterations should be chosen based on desired balance between quality and performance.
* This node modifies the input point positions directly.
* It works best when the initial point distribution is reasonably spread out.
