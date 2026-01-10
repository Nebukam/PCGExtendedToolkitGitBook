---
description: Box Fitting
icon: sliders
---

# Box Fitting

{% hint style="warning" %}
This page was generated from the source code. It captures what the node does, but still needs some serious  proofreading.
{% endhint %}

> Fits clusters of points into non-overlapping boxes while applying repulsion forces between them.

#### How It Works

This node arranges groups of points into separate boxes without overlapping. It starts by calculating the space each point needs and adds extra padding around it. Then, it checks if any boxes overlap with each other.

When overlaps are found, the node pushes the points apart using repulsion forces. This process repeats until all boxes fit nicely next to each other without intersecting. The amount of push is controlled by a strength value that determines how aggressively the points move away from each other.

#### Configuration

<details>

<summary><strong>Padding</strong><br><em>A padding value added to the box bounds to attempt to reduce overlap or add more spacing between boxes.</em></summary>

Controls how much extra space is added around each point's local bounds when calculating the box for overlap detection.

**Values**:

* **0**: No padding, boxes touch exactly
* **10**: 10 units of padding added to all sides of each box
* **50**: 50 units of padding added to all sides of each box

</details>

{% hint style="info" %}
Connects to \*\*Relax Cluster\*\* nodes as a subnode.
{% endhint %}

#### Usage Example

Use this node in a cluster relaxation workflow where you want to place clusters of objects without overlap. For example, when placing city blocks or game entities that have defined spatial extents. Set the padding to match the minimum spacing required between elements.

#### Notes

* The padding value directly affects how much space is reserved around each point's bounds
* Higher repulsion constants will cause more aggressive separation between overlapping boxes
* This node works best with clusters that are relatively compact and don't have extreme variations in size
