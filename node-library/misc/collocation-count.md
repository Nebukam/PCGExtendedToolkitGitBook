---
description: 'In editor :: PCGEx | Collocation Count'
icon: circle
---

# Collocation Count

{% hint style="warning" %}
This page was generated from the source code. It captures what the node does, but still needs some serious  proofreading.
{% endhint %}

> Counts how many points share the same location and writes that count as an attribute.

#### How It Works

This node analyzes point data to identify how frequently points occupy identical or nearly identical locations in 3D space. It builds an internal spatial structure called an octree to efficiently group points by proximity. Then, it iterates through all points and checks how many other points fall within a defined tolerance distance of each point's location. For each point, it counts the total number of points that are considered "collocated" (within the tolerance) and writes this count as an attribute.

Additionally, if enabled, it also calculates and stores a linear occurrence count — essentially counting how many times a point appears in a sequence or line structure, which can be useful for certain procedural effects or data analysis.

The algorithm uses spatial partitioning to avoid expensive pairwise comparisons between all points, making it efficient even with large datasets.

#### Configuration

<details>

<summary><strong>Collocation Num Attribute Name</strong><br><em>The name of the attribute to write collocation to.</em></summary>

Specifies the name of the attribute that will store the number of points sharing each point's location.

</details>

<details>

<summary><strong>Write Linear Occurrences</strong><br><em>When enabled, calculates and stores an additional count of how many times a point appears in a linear context (e.g., along a path or sequence).</em></summary>

When enabled, this option calculates and stores an additional count of how many times a point appears in a linear context (e.g., along a path or sequence).

</details>

<details>

<summary><strong>Linear Occurrences Attribute Name</strong><br><em>The name of the attribute to write linear occurrences to.</em></summary>

Specifies the name of the attribute that will store the linear occurrence count, if enabled.

</details>

<details>

<summary><strong>Tolerance</strong><br><em>Defines how close two points must be to be considered collocated. Points within this distance are counted as sharing a location.</em></summary>

Defines how close two points must be to be considered collocated. Points within this distance are counted as sharing a location.

**Values**:

* **0.01**: Minimum tolerance value for fine-grained comparisons.

</details>

#### Usage Example

Use this node when you want to identify and tag overlapping points in a procedural generation setup. For example, if you're placing trees randomly on a terrain and want to know how many trees are placed at the exact same spot, or if you're analyzing point clouds for duplicates.

#### Notes

* The tolerance value affects performance and accuracy; smaller values increase precision but may slow down processing.
* This node is optimized for large datasets using spatial partitioning (octree).
* If you're working with very dense point clouds, consider increasing the tolerance to avoid excessive computation.
