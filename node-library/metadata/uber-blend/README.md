---
description: 'In editor :: PCGEx | Uber Blend'
icon: scrubber
---

# Uber Blend

{% hint style="warning" %}
This page was generated from the source code. It captures what the node does, but still needs some serious  proofreading.
{% endhint %}

> \[EXPERIMENTAL] One-stop node to combine multiple blends.

#### Overview

The Uber Blend node provides a centralized way to apply multiple blending operations to point data in a single pass. It allows users to define several blend behaviors using subnodes, which are then executed together on the input points. This is useful when you want to combine different types of attribute blending—such as linear interpolation, weighted averaging, or custom blending rules—into one cohesive operation.

This node is particularly helpful for scenarios where you need to blend multiple attributes simultaneously, such as combining color values, position offsets, or scalar properties using various blending methods. It streamlines workflows that would otherwise require chaining multiple individual blend nodes.

{% hint style="info" %}
Connects to **Point Filters** subnode pin.
{% endhint %}

#### How It Works

The Uber Blend node processes input points and applies a series of blending operations defined by its connected subnodes. Each subnode specifies how a particular attribute should be blended across multiple inputs, such as interpolating between values or computing weighted averages.

It begins by initializing all blending operations based on the configuration of each connected subnode. Then, for each point in the input data, it evaluates all defined blend rules and computes the resulting blended attributes. If enabled, the node can also output a normalized index value representing which blend operation was applied to each point.

The processing is optimized to run efficiently across multiple threads, making it suitable for large datasets while maintaining performance.

#### Configuration

<details>

<summary><strong>bOutputNormalizedIndex</strong><br><em>Whether to write the index as a normalized output value.</em></summary>

When enabled, the node will output an additional attribute containing a normalized index that indicates which blend operation was applied to each point. This can be useful for debugging or visualizing how blending is distributed across points.

</details>

#### Usage Example

Suppose you want to blend color and scale attributes from multiple sources using different methods:

1. Connect a **Point Filter** subnode to define which points should be processed.
2. Add several **Blend Operation** subnodes (e.g., linear blend for color, weighted average for scale).
3. Set `bOutputNormalizedIndex` to true if you want to track which blend method was used per point.
4. Run the graph to see the combined blended results.

#### Notes

* This node is marked as experimental and may undergo changes in future versions.
* Performance benefits are most noticeable when using a large number of points or multiple blending operations.
* Ensure that all connected subnodes are properly configured to avoid unexpected blending behavior.
