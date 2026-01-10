---
description: 'In editor :: PCGEx | Filter : Tensor Dot'
icon: circle-dashed
---

# Tensor Dot Product

{% hint style="info" %}
This page was generated from the source code. It should properly capture what the node does, but still needs to be proofread by a human.
{% endhint %}

> Creates a filter definition that compares dot value of a vector and tensors.

#### How It Works

This subnode evaluates whether points meet specific directional criteria based on tensor field data. For each point, it:

1. Reads a vector from the point's attributes.
2. Optionally transforms this vector using the point's local rotation and scale.
3. Samples a tensor field at the point's location.
4. Computes the dot product between the vector and the sampled tensor direction.
5. Compares the resulting dot product value against a threshold using a configurable comparison operation.
6. Determines if the point should pass the filter based on this comparison.

The outcome is used to include or exclude points from downstream processing, depending on how their orientation relates to the tensor field's direction.

#### Configuration

<details>

<summary><strong>OperandA</strong><br><em>Vector operand A.</em></summary>

Specifies the attribute containing the vector to compare against the tensor field. This vector is used as one operand in the dot product calculation.

</details>

<details>

<summary><strong>bTransformOperandA</strong><br><em>Transform OperandA with the local point' transform.</em></summary>

When enabled, the vector from **OperandA** is transformed using the point's local transform (rotation and scale) before being used in the dot product calculation.

</details>

<details>

<summary><strong>DotComparisonDetails</strong><br><em>Dot comparison settings.</em></summary>

Defines how the computed dot product value is compared against a threshold. Includes options for strict equality, greater than, less than, and more.

</details>

<details>

<summary><strong>TensorHandlerDetails</strong><br><em>Tensor Sampling Settings.</em></summary>

Controls how the tensor field is sampled at each point. This includes settings like sampling radius, step size, and how to combine multiple tensors if present.

</details>

#### Usage Example

Use this subnode to filter points that are aligned with a specific direction defined by a tensor field. For example, you could use it to select only points where the surface normal (from a tensor field) aligns closely with an upward vector, effectively filtering for "upward-facing" surfaces.

#### Notes

* The **OperandA** vector should ideally be normalized for consistent dot product results.
* The **Tensor Sampling Settings** affect how the tensor data is interpreted and sampled. Adjusting these can change the sensitivity of the filter.
* This subnode is particularly useful in terrain or surface-based filtering where you want to select points based on their orientation relative to a tensor field like normals or tangents.
