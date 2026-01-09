---
description: 'In editor :: PCGEx | Filter : Tensor Dot'
icon: circle-dashed
---

# Tensor Dot Product

{% hint style="info" %}
This page was generated from the source code. It should properly capture what the node does, but still needs to be proofread by a human.
{% endhint %}

> Creates a filter definition that compares dot value of a vector and tensors.

#### Overview

This subnode defines a filtering behavior that evaluates whether a point's vector operand meets specific criteria when compared against a tensor field's dot product result. It's useful for selecting points based on directional relationships with spatial data like terrain normals, wind directions, or magnetic fields.

It connects to the **Filter** pin of processing nodes that support point filtering. Multiple filter subnodes can be combined to create complex selection logic.

#### How It Works

This filter evaluates a dot product between a vector operand (from a point attribute) and a sampled tensor value at the same point. The comparison is then made against a threshold or range defined by the filter settings.

1. **Vector Operand A** is read from the point's attributes.
2. If enabled, **Transform OperandA** applies the point's local transform to the vector before processing.
3. A **tensor sample** is taken at the point using the configured tensor sampling settings.
4. The dot product between the transformed vector and the sampled tensor value is calculated.
5. This resulting dot product is compared against the filter's comparison criteria (e.g., greater than, equal to).
6. Points that meet the comparison condition pass through the filter; others are discarded.

<details>

<summary>Inputs</summary>

* Point data with a vector attribute specified in **Operand A**
* Tensor field data for sampling
* Point transforms (if **Transform OperandA** is enabled)

</details>

<details>

<summary>Outputs</summary>

* Filtered points that satisfy the dot product comparison condition

</details>

#### Configuration

***

**Vector Operand A**

_The vector attribute used in the dot product calculation._

Specifies which point attribute contains the vector to compare. This can be any vector-valued attribute, such as normal vectors or direction data.

**Transform OperandA**

_When enabled, applies the point's local transform to the operand vector before comparison._

If enabled, the vector from **Operand A** is transformed using the point’s world transform (position, rotation, scale) before computing the dot product. This allows for directional comparisons in world space rather than object space.

**Dot Comparison Settings**

_Controls how the computed dot product is compared to a threshold or range._

This setting defines the comparison operation used to determine if a point passes the filter. Options include strict equality, greater than, less than, and more nuanced comparisons like "nearly equal".

**Values**:

* **==**: Point passes if the dot product equals the target value
* **!=**: Point passes if the dot product does not equal the target value
* **>=**: Point passes if the dot product is greater than or equal to the target value
* **<=**: Point passes if the dot product is less than or equal to the target value
* **>**: Point passes if the dot product is strictly greater than the target value
* **<**: Point passes if the dot product is strictly less than the target value
* **\~=**: Point passes if the dot product is nearly equal to the target value (within tolerance)

**Tensor Sampling Settings**

_Configures how the tensor field is sampled at each point._

These settings control how the tensor data is read from the tensor field. For example, it can sample a single location or perform interpolation across nearby points. The sampling happens before any mutations are applied.

#### Usage Example

Use this filter to select points where the surface normal aligns with a specific direction, such as only keeping points facing upward (dot product > 0 with up vector). Or use it to filter vegetation placement based on terrain slope or wind direction.

#### Notes

* The **Operand A** vector should ideally be normalized for consistent results.
* Combining this filter with other filters allows for complex spatial selections.
* Performance is affected by the complexity of tensor sampling and number of points being evaluated.
