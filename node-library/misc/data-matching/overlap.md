---
icon: circle-dashed
---

# Overlap

{% hint style="warning" %}
This node is currently hidden (WIP)
{% endhint %}

{% hint style="warning" %}
This page was generated from the source code. It captures what the node does, but still needs some serious  proofreading.
{% endhint %}

> Check if there is an overlap with the data bounds (AABB).

#### Overview

This node determines whether the bounding box (AABB) of one set of data overlaps with that of another. It's useful for spatial matching in procedural content generation, such as identifying which points or objects are within a certain area.

It operates by comparing the axis-aligned bounding boxes of input data sets to detect intersections. You can adjust how the bounds are calculated using expansion settings to include padding or shrinkage.

{% hint style="info" %}
This node is a **Subnode** that connects to matching processing nodes like **Match Points**, **Match Edges**, or **Match Paths**.
{% endhint %}

#### How It Works

The node calculates axis-aligned bounding boxes (AABBs) for each data set involved in the match operation. These bounds define the minimum and maximum extents along each axis.

It then checks if these AABBs intersect with one another:

* If they do, the match is considered successful.
* If not, it's a mismatch.

The expansion mode allows you to modify how the bounds are calculated:

* **None**: Uses the raw data bounds as-is.
* **Add**: Adds a fixed value to each extent of the bounds (positive or negative).
* **Scale**: Scales the bounds by a factor relative to their original size.

This logic is applied before performing the overlap check, allowing for fine-tuned control over matching behavior.

<details>

<summary>Inputs</summary>

Expects two sets of data:

1. The target data (used as reference for the AABB).
2. Candidate data (compared against the target's AABB).

Each set must contain valid point or mesh data with associated bounds.

</details>

<details>

<summary>Outputs</summary>

Returns a boolean result indicating whether the AABBs of the two data sets overlap. This result can be used to filter or route points in downstream processing nodes.

</details>

#### Configuration

<details>

<summary><strong>Expansion Mode</strong><br><em>Amount by which the bounds should be shrunk.</em></summary>

Controls how the calculated bounds are adjusted before performing the overlap test.

**Values**:

* **None**: Don't alter extents.
* **Add**: Add the value to the extents.
* **Scale**: Scale the data bounds.

</details>

<details>

<summary><strong>Expansion</strong><br><em>Amount by which the bounds should be shrunk.</em></summary>

The amount by which to adjust the bounds when using **Add** or **Scale** modes. This is a vector value that applies per axis.

When **Expansion Mode** is set to **None**, this setting has no effect.

</details>

#### Usage Example

Use this node in a matching graph where you want to find points that are spatially close to each other based on their bounding boxes. For example, you could use it to:

* Identify which terrain patches overlap with a given area.
* Find objects within a certain radius of another object's bounds.

Set the **Expansion Mode** to **Scale** and use a value like (0.5, 0.5, 0.5) to make the bounds slightly larger, allowing for more inclusive matching.

#### Notes

* The overlap check is performed using axis-aligned bounding boxes (AABBs), which are fast to compute but less precise than other shapes.
* Expansion settings can be used to fine-tune how strict or loose the match should be.
* This node works best when used with data that has meaningful spatial extents, such as meshes or point clouds.
