---
description: 'In editor :: PCGEx | Fuse Points'
icon: circle
---

# Fuse Points

{% hint style="info" %}
This page was generated from the source code. It should properly capture what the node does, but still needs to be proofread by a human.
{% endhint %}

> Combines nearby points into single entities based on distance thresholds.

#### Overview

The Fuse Points node merges points that are located close together into one representative point. This helps reduce visual clutter or duplicate elements in procedural content. You can choose to blend the properties of merged points or keep only one point from each group.

This node is commonly used when you want to simplify a point cloud or ensure that features like trees, buildings, or other assets don't overlap too closely in your procedural generation setup.

{% hint style="info" %}
Connects to **Point Input** and outputs to **Point Output** pins. Subnode: Point/Point Settings (Fuse Settings) Subnode: Carry Over Settings (Meta Filter Details)
{% endhint %}

#### How It Works

The node starts by analyzing all input points to identify which ones are within a certain distance of each other. Points that fall within this threshold are grouped together.

Once groups are formed, the node applies a method based on your selection:

* **Blend**: All properties from the grouped points are combined using blending operations (like averaging or weighted sum) to create a new point.
* **Keep Most Central**: The node selects one existing point from the group — specifically the one that is most central to the group's geometric center.

The result maintains the original number of output points, but reduces the actual distinct locations by merging overlapping ones. It uses spatial distance as the main criterion for grouping and can optionally maintain the input order during fusion.

#### Configuration

<details>

<summary><strong>Mode</strong><br><em>How to handle fused points.</em></summary>

Controls whether to blend properties from fused points or keep only one representative point.

**Values**:

* **Blend**: Blend all properties from the fused points using the blending settings.
* **Keep Most Central**: Keep the existing point that is most central to the group of fused points.

</details>

<details>

<summary><strong>Point/Point Settings</strong><br><em>Fuse Settings.</em></summary>

Defines the distance threshold and method for determining which points are considered "nearby" and should be fused.

</details>

<details>

<summary><strong>Preserve Order</strong><br><em>Preserve the order of input points.</em></summary>

When enabled, ensures that the output point order matches the input point order as closely as possible during fusion.

</details>

<details>

<summary><strong>Blending Details</strong><br><em>Defines how fused point properties and attributes are merged together.</em></summary>

Controls how property values from multiple points are combined when using the Blend mode. This includes choosing the blending operation (e.g., average, weighted sum) for each attribute.

</details>

<details>

<summary><strong>Carry Over Settings</strong><br><em>Meta filter settings.</em></summary>

Configures which attributes or metadata from the input points are carried over to the fused output point when using the Blend mode.

</details>

#### Usage Example

You have a set of points representing tree placements in a forest. Some trees are placed too close together, causing visual clutter. By connecting this node with a distance threshold of 2 units, it fuses overlapping points into single locations, effectively removing duplicate or near-duplicate trees while preserving the overall distribution.

#### Notes

* The node is optimized for performance when processing large point sets.
* When using "Keep Most Central", only one point from each fused group will be retained; other points are discarded.
* Blending mode allows fine-grained control over how properties like scale, rotation, or custom data are merged.
