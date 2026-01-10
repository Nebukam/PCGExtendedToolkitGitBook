---
description: 'Refine : Gabriel'
icon: sliders
---

# Gabriel

{% hint style="warning" %}
This page was generated from the source code. It captures what the node does, but still needs some serious  proofreading.
{% endhint %}

> Refines edges in a cluster to remove those that are not part of a Gabriel graph, optionally inverting the behavior.

#### How It Works

This subnode applies the Gabriel graph refinement algorithm to clean up edge connections within a cluster. For each edge, it:

1. Finds the center point between the edge's start and end positions.
2. Creates a circle using this center point with a radius equal to half the edge's length.
3. Checks if any other points in the cluster fall inside this circle.
4. If a point is found inside the circle, the edge is removed (or kept if inversion is enabled).

The result is a graph where edges only remain when they don't have any other points lying within the circle defined by that edge. This ensures connections are well-spaced and avoids overly dense or overlapping links.

#### Configuration

<details>

<summary><strong>bInvert</strong><br><em>When enabled, keeps edges that would normally be removed by the Gabriel graph algorithm.</em></summary>

When enabled, this setting changes the behavior of the subnode. Instead of removing edges that violate the Gabriel condition, it keeps those edges and removes the rest.

</details>

#### Usage Example

Use this subnode to clean up a dense network of connections so that only the most "spatially separated" links remain. For example, after generating random connections between points, apply this subnode to ensure no point lies inside the circle formed by any edge, resulting in a cleaner, more visually appealing graph.

#### Notes

* The algorithm requires an octree for efficient spatial queries.
* Performance is best when the cluster has a moderate number of points.
* This operation modifies the cluster's edge validity directly and does not create new data.
