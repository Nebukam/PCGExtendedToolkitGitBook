---
description: 'In editor :: PCGEx | Filter : Compare Nearest (Numeric)'
icon: circle-dashed
---

# Compare Nearest (Numeric)

{% hint style="info" %}
This page was generated from the source code. It should properly capture what the node does, but still needs to be proofread by a human.
{% endhint %}

> Creates a filter definition that compares two numeric attribute values.

#### How It Works

This subnode evaluates each point in your data by comparing a numeric value from the point (Operand A) with a value from its nearest neighbor or a constant (Operand B). The comparison uses a specified operator, such as greater than, equal to, or nearly equal.

The process works as follows:

1. For each point, it reads the value of Operand A.
2. It finds the nearest point based on the configured distance method.
3. It reads the value of Operand B from the nearest point (or uses a constant if specified).
4. It performs the comparison using the selected operator.
5. If the comparison evaluates to true, the point passes the filter.

The subnode supports both strict and near-equality comparisons, with an optional tolerance for floating-point comparisons. It also allows ignoring self-comparisons when comparing against the same point.

#### Configuration

<details>

<summary><strong>Distance Details</strong><br><em>Distance method to be used for source &#x26; target points.</em></summary>

Defines how distances are calculated when finding the nearest point. Options include Euclidean, Manhattan, etc.

</details>

<details>

<summary><strong>Operand A</strong><br><em>Operand A for testing -- Will be translated to `double` under the hood; read from the target points.</em></summary>

The numeric attribute to read from each point in the input data. This value is compared against Operand B.

</details>

<details>

<summary><strong>Comparison</strong><br><em>Comparison</em></summary>

The operator used to compare Operand A and Operand B. **Values**:

* **Strictly Equal**: `==`
* **Strictly Not Equal**: `!=`
* **Equal or Greater**: `>=`
* **Equal or Smaller**: `<=`
* **Strictly Greater**: `>`
* **Strictly Smaller**: `<`
* **Nearly Equal**: `~=` (with tolerance)
* **Nearly Not Equal**: `!~=` (with tolerance)

</details>

<details>

<summary><strong>Compare Against</strong><br><em>Type of OperandB</em></summary>

Determines whether Operand B is read from an attribute or set as a constant. **Values**:

* **Constant**: Use the value specified in Operand B Constant
* **Attribute**: Read Operand B from an attribute on the nearest point

</details>

<details>

<summary><strong>Operand B (Attr)</strong><br><em>Operand B for testing</em></summary>

The numeric attribute to read from the nearest point when Compare Against is set to Attribute.

</details>

<details>

<summary><strong>Operand B</strong><br><em>Operand B for testing</em></summary>

The constant value used for Operand B when Compare Against is set to Constant.

</details>

<details>

<summary><strong>Tolerance</strong><br><em>Near-equality tolerance</em></summary>

Used when the comparison is Nearly Equal or Nearly Not Equal. Defines how close values must be to be considered equal.

</details>

<details>

<summary><strong>Ignore Self</strong><br><em>When enabled, the point itself is excluded from the nearest neighbor search.</em></summary>

When enabled, ensures that a point does not compare against itself when finding the nearest neighbor.

</details>

#### Usage Example

Filter points where the value of the attribute "Height" is greater than or equal to the height of the nearest point. Use "Equal or Greater" as the comparison operator, set Operand A to "Height", and set Compare Against to Attribute, with Operand B pointing to the "Height" attribute on the nearest point.

#### Notes

* This filter works best when used with numeric attributes.
* The tolerance setting is crucial for floating-point comparisons to avoid false negatives due to precision issues.
* Consider performance implications when using large datasets or complex distance calculations.
