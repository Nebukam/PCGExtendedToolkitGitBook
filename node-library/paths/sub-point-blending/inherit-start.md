---
icon: sliders
---

# Inherit Start

{% hint style="warning" %}
This page was generated from the source code. It captures what the node does, but still needs some serious  proofreading.
{% endhint %}

> Inherits data from the first point of a path when blending sub-points.

#### Overview

This subnode defines how to blend metadata between points in a path by inheriting values from the starting point. It's used when you want to preserve or copy attributes from the beginning of a path segment into its intermediate points, rather than computing blended values based on distance or other criteria.

It is particularly useful for maintaining consistent properties like color, material, or tags along a path, ensuring that each sub-point retains characteristics from the origin point. This behavior is helpful when creating visual effects, procedural terrain features, or any scenario where you want to avoid interpolation between points and instead use fixed data from the start of the path.

{% hint style="info" %}
Connects to **Blending** input pins on processing nodes that support sub-point blending.
{% endhint %}

#### How It Works

This subnode defines a blending behavior that copies attribute values directly from the first point in a path segment to all intermediate points. When processing a path, it takes the metadata from the starting point (From) and applies it to each sub-point along the path, without performing any interpolation or averaging.

The operation works by:

1. Identifying the source data from the first point of the path
2. Applying that data directly to each sub-point in the path segment
3. Skipping any blending calculations or weighted averages

This ensures that all points in a path inherit the exact same metadata as the starting point, which is useful for maintaining consistent visual or functional properties across a path.

<details>

<summary>Inputs</summary>

* **From Point**: The first point of the path segment.
* **To Point**: The last point of the path segment.
* **Scope**: The collection of sub-points to be processed.
* **Metrics**: Path-related data such as length or curvature.

</details>

<details>

<summary>Outputs</summary>

* Modifies the metadata of each sub-point in the scope, copying values from the From point.
* Does not alter the spatial position or transform of the points themselves.

</details>

#### Configuration

<details>

<summary><strong>Blending Type</strong><br><em>Determines how data is inherited.</em>This setting controls the blending behavior for metadata. For this subnode, it's fixed to <strong>Copy</strong> mode, which means that values are directly copied from the first point of the path.<strong>Values</strong>:<strong>Copy (Target)</strong>: Copy data from the target point (second value) — in this case, the From point.</summary>



</details>

#### Usage Example

Use this subnode when you want to assign a specific material or color to an entire path based on its starting point. For example, if you're generating a river path and want each segment of the river to have the same water type or texture as the source point, you would connect this subnode to the blending input of your path processing node.

#### Notes

* This subnode is ideal for scenarios where interpolation isn't desired.
* It's often used in conjunction with other path-based operations like smoothing or offsetting.
* Performance is optimal since no complex calculations are performed — it copies data.
