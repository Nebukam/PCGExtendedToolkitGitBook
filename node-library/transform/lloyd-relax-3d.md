---
description: 'In editor :: PCGEx | Lloyd Relax 3D'
icon: circle
---

# Lloyd Relax 3D

{% hint style="info" %}
This page was generated from the source code. It should properly capture what the node does, but still needs to be proofread by a human.
{% endhint %}

> Applies Lloyd relaxation to input points to smooth and even out their distribution in 3D space.

#### How It Works

Lloyd relaxation is a method for evenly distributing points in 3D space. The process works by repeatedly adjusting point positions based on the Voronoi diagram of the current layout. Each point moves toward the center of its Voronoi cell, which helps to reduce clustering and fill gaps. This results in a more uniform distribution over time.

The algorithm starts with an initial set of points and performs several iterations of this adjustment process. With each iteration, the points become more evenly spaced, leading to a smoother and more natural-looking layout.

#### Configuration

<details>

<summary><strong>Iterations</strong><br><em>Number of times to apply the Lloyd relaxation process.</em></summary>

Controls how many times the point redistribution is applied. Higher values result in more uniform spacing but take longer to compute.

**Values**: Any integer ≥ 1.\
Example: Setting this to `3` applies the relaxation three times, producing a smoother distribution than a single iteration.

</details>

<details>

<summary><strong>InfluenceDetails</strong><br><em>Settings that define how influence is applied during relaxation.</em></summary>

Controls how much each point's movement is influenced by its neighbors. This subnode allows for fine-tuning of the relaxation behavior, such as applying different weights or constraints to specific areas.

</details>

#### Usage Example

To create a natural-looking distribution of trees on a terrain:

1. Start with a random set of points.
2. Connect this set to the Lloyd Relax 3D node.
3. Set Iterations to `5` for a smooth, even distribution.
4. Use the output points as spawn locations for tree actors.

This will produce a more visually balanced layout than a purely random distribution.

#### Notes

* The algorithm is computationally intensive due to Voronoi calculations; performance can be improved by reducing iterations or using fewer input points.
* For best results, ensure that the initial point set is not too sparse or too dense to avoid artifacts in the final distribution.
* This node works best on 3D point sets where spatial relationships are meaningful.
