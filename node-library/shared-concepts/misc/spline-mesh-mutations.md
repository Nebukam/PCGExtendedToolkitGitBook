# Spline Mesh Mutations

{% hint style="info" %}
This page was generated from the source code. It should properly capture what the node does, but still needs to be proofread by a human.
{% endhint %}

> Controls how the start and end points of a spline are adjusted when creating spline mesh components.

#### Overview

This configuration block allows you to modify the beginning and ending positions of a spline before generating spline mesh components. You can push the start and/or end points inward or outward along the spline's direction, which is useful for creating overlapping or non-overlapping mesh connections. The adjustments can be applied as fixed amounts or based on attributes from the input data. When using relative values, the adjustment amount is scaled by the length of the segment.

{% hint style="info" %}
This configuration appears in nodes like: Path Spline Mesh, Simple Path Spline Mesh
{% endhint %}

#### Settings

<details>

<summary><strong>Push Start</strong><br><em>When enabled, adjusts the start point of the spline.</em></summary>

When enabled, this setting modifies the starting position of the spline. You can define how much to push the start point along the spline's direction.

**Values**:

* **Constant**: Use a fixed numeric value for the adjustment.
* **Attribute**: Use a scalar attribute from the input points to determine the adjustment amount.

</details>

<details>

<summary><strong>Start Push Amount</strong><br><em>The distance by which to adjust the start point.</em></summary>

The actual amount by which the spline's start point is moved. If using a constant value, this is a fixed number. If using an attribute, it will be read from the specified scalar attribute.

</details>

<details>

<summary><strong>Start Push Relative</strong><br><em>If enabled, the adjustment amount is relative to the segment length.</em></summary>

When enabled, the start push amount is interpreted as a ratio of the segment's total length. For example, a value of 0.1 means move the start point by 10% of the segment's length.

</details>

<details>

<summary><strong>Push End</strong><br><em>When enabled, adjusts the end point of the spline.</em></summary>

When enabled, this setting modifies the ending position of the spline. Similar to pushing the start, you can define how much to push the end point along the spline's direction.

**Values**:

* **Constant**: Use a fixed numeric value for the adjustment.
* **Attribute**: Use a scalar attribute from the input points to determine the adjustment amount.

</details>

<details>

<summary><strong>End Push Amount</strong><br><em>The distance by which to adjust the end point.</em></summary>

The actual amount by which the spline's end point is moved. If using a constant value, this is a fixed number. If using an attribute, it will be read from the specified scalar attribute.

</details>

<details>

<summary><strong>End Push Relative</strong><br><em>If enabled, the adjustment amount is relative to the segment length.</em></summary>

When enabled, the end push amount is interpreted as a ratio of the segment's total length. For example, a value of 0.1 means move the end point by 10% of the segment's length.

</details>

#### Common Use Cases

* **Creating Overlapping Meshes**: Push both start and end points inward to make spline meshes overlap at their connections.
* **Avoiding Gaps**: Adjust the start or end points to ensure that spline meshes connect seamlessly without gaps.
* **Dynamic Adjustment Based on Data**: Use attribute inputs to vary how much a spline is adjusted based on point properties like height or width.

#### Notes

* The push adjustments are applied in the direction of the spline's tangent at the respective point.
* Relative values make it easier to maintain consistent spacing regardless of spline length.
* If both start and end points are pushed, they can be set independently using different constants or attributes.
