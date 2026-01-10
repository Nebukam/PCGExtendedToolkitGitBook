---
description: 'Refine : Overlap'
icon: sliders
---

# Overlap

{% hint style="warning" %}
This page was generated from the source code. It captures what the node does, but still needs some serious  proofreading.
{% endhint %}

> Removes overlapping edges from a cluster based on length and angle criteria.

#### How It Works

This subnode scans through all edges in a cluster to find those that overlap with others. It uses a distance tolerance to determine if two edges are close enough to be considered overlapping. When overlaps are detected, it compares the lengths of the edges and removes the one that doesn't match your "Keep" setting (shortest or longest). Optionally, you can set angle constraints so that only overlapping edges within a certain angular range are processed.

The system uses an efficient spatial lookup structure to quickly identify nearby edges without checking every pair, which helps maintain good performance even with many edges. It calculates bounding boxes for each edge and searches for overlaps in the surrounding area using this structure.

#### Configuration

<details>

<summary><strong>Keep</strong><br><em>Which edge to keep when doing comparison.</em></summary>

Determines whether to keep the shortest or longest edge when overlaps are detected.

**Values**:

* **Shortest**: Keeps the shorter of two overlapping edges.
* **Longest**: Keeps the longer of two overlapping edges.

</details>

<details>

<summary><strong>Tolerance</strong><br><em>Distance at which two edges are considered intersecting.</em></summary>

Sets the minimum distance between two edges for them to be considered overlapping. Edges closer than this value will be evaluated for overlap removal.

</details>

<details>

<summary><strong>bUseMinAngle</strong><br><em>Enable minimum angle constraint.</em></summary>

When enabled, applies a minimum angle constraint on the direction of overlapping edges.

</details>

<details>

<summary><strong>MinAngle</strong><br><em>Minimum angle.</em></summary>

The minimum angle (in degrees) between two overlapping edges. Only edges within this angular range will be considered for overlap removal.

</details>

<details>

<summary><strong>bUseMaxAngle</strong><br><em>Enable maximum angle constraint.</em></summary>

When enabled, applies a maximum angle constraint on the direction of overlapping edges.

</details>

<details>

<summary><strong>MaxAngle</strong><br><em>Maximum angle.</em></summary>

The maximum angle (in degrees) between two overlapping edges. Only edges within this angular range will be considered for overlap removal.

</details>

#### Usage Example

Use this subnode in a cluster refinement workflow to remove redundant or intersecting edges from a graph. For example, after generating a network of roads, you might use this to clean up edges that are too close together or cross each other, keeping only the longest or shortest edge depending on your desired output.

#### Notes

* This operation modifies the input cluster's edge data directly.
* Angle constraints can significantly reduce the number of overlaps considered for removal.
* Performance improves with a well-defined tolerance and limited use of angle constraints.
