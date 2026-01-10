---
description: 'In editor :: PCGEx | Filter : Dot'
icon: circle-dashed
---

# Dot Product

{% hint style="warning" %}
This page was generated from the source code. It captures what the node does, but still needs some serious  proofreading.
{% endhint %}

> Creates a filter definition that compares dot value of two vectors.

#### Overview

The Dot Filter Subnode evaluates whether the dot product of two vectors meets a specified condition. It's useful for filtering points based on angular relationships or directional alignment. For example, you might want to keep only points facing a certain direction or those aligned within a specific angle range.

This subnode connects to Filter pins on processing nodes and can be combined with other filters to create complex selection criteria. It allows you to define vector operands using either constant values or attributes from your input data.

{% hint style="info" %}
Connects to **Filter** pins on processing nodes.
{% endhint %}

#### How It Works

This filter computes the dot product of two vectors — Operand A and Operand B — then compares that result against a threshold using a comparison operator. The dot product represents the cosine of the angle between two normalized vectors, scaled by their magnitudes.

It first retrieves or calculates the two vectors:

1. **Operand A**: Can be a constant vector or an attribute from the input point.
2. **Operand B**: Can also be a constant vector or an attribute from the input point.

Each operand can optionally be transformed using the local point's transform and inverted before computing the dot product.

Once both operands are ready, their dot product is calculated:

* If both vectors are normalized, the result ranges from -1 (opposite directions) to 1 (same direction).
* The comparison operator determines if this value satisfies the filter condition.

The final decision is made by checking if the computed dot product meets the specified comparison criteria. Points that pass this test are included in the output; those that fail are excluded.

<details>

<summary>Inputs</summary>

Expects a point-based input data with optional attribute fields for Operand A and Operand B.

</details>

<details>

<summary>Outputs</summary>

Filters points based on the dot product comparison. Only points where the condition is satisfied will be passed through to downstream nodes.

</details>

#### Configuration

<details>

<summary><strong>Operand A</strong><br><em>Vector operand A.</em></summary>

Defines the first vector used in the dot product calculation. Can be a constant or an attribute from the input point.

</details>

<details>

<summary><strong>Transform Operand A</strong><br><em>Transform OperandA with the local point' transform.</em></summary>

When enabled, applies the local point's transform to Operand A before computing the dot product.

</details>

<details>

<summary><strong>Invert Operand A</strong><br><em>└─ Invert</em></summary>

When enabled, negates Operand A before computing the dot product.

</details>

<details>

<summary><strong>Compare Against</strong><br><em>Type of OperandB.</em></summary>

Determines whether Operand B is a constant value or an attribute from the input data.

**Values**:

* **Constant**: Use a fixed vector value.
* **Attribute**: Read the vector from an attribute on the input point.

</details>

<details>

<summary><strong>Invert Operand B</strong><br><em>└─ Invert</em></summary>

When enabled, negates Operand B before computing the dot product. Only visible when Compare Against is set to Attribute.

</details>

<details>

<summary><strong>Operand B (Attr)</strong><br><em>Operand B for computing the dot product.</em></summary>

The attribute used as Operand B when Compare Against is set to Attribute.

</details>

<details>

<summary><strong>Operand B</strong><br><em>Operand B for computing the dot product.</em></summary>

The constant vector used as Operand B when Compare Against is set to Constant.

</details>

<details>

<summary><strong>Transform Operand B</strong><br><em>Transform OperandB with the local point' transform.</em></summary>

When enabled, applies the local point's transform to Operand B before computing the dot product.

</details>

<details>

<summary><strong>Dot Comparison Details</strong><br><em>Dot comparison settings.</em></summary>

Defines how the computed dot product is compared against a threshold. Includes operator and tolerance settings for floating-point comparisons.

</details>

#### Usage Example

Suppose you want to filter points that are facing upwards (i.e., have a dot product of at least 0.5 with the up vector). You would:

1. Set Operand A to a constant vector like FVector::UpVector.
2. Set Operand B to an attribute representing the point's forward direction.
3. Configure Dot Comparison Details to use "Greater or Equal" with a threshold of 0.5.

This ensures only points aligned within 60 degrees of the upward direction are selected.

#### Notes

* The dot product is sensitive to vector magnitudes, so ensure vectors are normalized if you're interested in angular relationships alone.
* Combining multiple filters allows for more precise control over point selection based on directional criteria.
* This filter supports both constant and attribute-based operands, enabling flexible use across various data sources.
