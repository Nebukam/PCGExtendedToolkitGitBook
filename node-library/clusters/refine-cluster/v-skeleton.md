---
description: 'Refine : β Skeleton'
icon: sliders
---

# β Skeleton

{% hint style="warning" %}
This page was generated from the source code. It captures what the node does, but still needs some serious  proofreading.
{% endhint %}

> Refines edges in a cluster to form a β-skeleton graph, removing edges that are not part of the skeleton based on geometric constraints.

#### How It Works

This subnode applies a β-skeleton algorithm to filter edges within a cluster. It evaluates each edge based on spatial relationships with other points in the cluster, using the β parameter to determine how strictly edges are retained.

For β values less than or equal to 1, it uses a lune-based condition. For each edge, it checks if any other point lies within a specific lune-shaped region defined by the edge endpoints and the β value. If such a point exists, the edge is removed.

For β values greater than 1, it uses a circle-based condition. For each edge, it checks if any other point lies within two circles centered on the edge's perpendicular bisector. If so, the edge is removed.

The process works by:

1. Calculating the midpoint and length of each edge in the cluster.
2. Depending on the β value:
   * If β ≤ 1, checking for points inside a lune-shaped region around the edge.
   * If β > 1, checking for points inside two circles along the perpendicular bisector.
3. Removing edges that meet the condition.

#### Configuration

<details>

<summary><strong>Beta</strong><br><em>Controls the strictness of the skeleton filtering.</em></summary>

Defines the β parameter for the skeleton algorithm.

* When β = 1, it's a standard Gabriel graph (most common case).
* When β < 1, stricter filtering occurs; fewer edges are retained.
* When β > 1, looser filtering allows more edges to be kept.

**Values**:

* **0.5**: Very strict filtering, retains only very close neighbors.
* **1.0**: Standard Gabriel graph (default).
* **2.0**: Looser filtering, allows more distant connections.

</details>

<details>

<summary><strong>bInvert</strong><br><em>When enabled, keeps edges that would normally be removed.</em></summary>

Inverts the edge filtering logic.

* When disabled (default), edges that fail the β-skeleton test are removed.
* When enabled, edges that pass the test are removed instead.

**Values**:

* **False**: Normal behavior - removes invalid edges.
* **True**: Inverted behavior - removes valid edges.

</details>
