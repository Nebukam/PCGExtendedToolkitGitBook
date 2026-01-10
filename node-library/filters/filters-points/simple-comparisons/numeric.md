---
description: 'In editor :: PCGEx | Filter : Compare (Numeric)'
icon: circle-dashed
---

# Numeric

{% hint style="warning" %}
This page was generated from the source code. It captures what the node does, but still needs some serious  proofreading.
{% endhint %}

> Creates a filter definition that compares two numeric attribute values.

#### How It Works

This subnode evaluates whether points meet specific numeric criteria by comparing two values. One value is always taken from an attribute on each point, while the second value can either be a fixed number or another attribute. The comparison operator determines if a point passes the filter based on this evaluation.

The process works in four steps:

1. Read the first value (Operand A) from the selected attribute on each point
2. Determine the second value (Operand B) - either a constant or from another attribute
3. Apply the chosen comparison operation between these two values
4. Return true if the condition is met, false otherwise

For comparisons that involve floating-point numbers, a tolerance value helps handle small precision differences by allowing a small margin of error.

#### Configuration

<details>

<summary><strong>Operand A</strong><br><em>First operand for comparison -- Will be translated to `double` under the hood.</em></summary>

Selects which attribute from the input data will be used as the first value in the comparison. Each point's value is read individually.

</details>

<details>

<summary><strong>Comparison</strong><br><em>Type of comparison to perform</em></summary>

Specifies how the two values are compared.

**Values**:

* **StrictlyEqual**: Checks if Operand A equals Operand B exactly.
* **StrictlyNotEqual**: Checks if Operand A does not equal Operand B exactly.
* **EqualOrGreater**: Checks if Operand A is greater than or equal to Operand B.
* **EqualOrSmaller**: Checks if Operand A is less than or equal to Operand B.
* **StrictlyGreater**: Checks if Operand A is strictly greater than Operand B.
* **StrictlySmaller**: Checks if Operand A is strictly smaller than Operand B.
* **NearlyEqual**: Checks if Operand A is nearly equal to Operand B, within tolerance.
* **NearlyNotEqual**: Checks if Operand A is not nearly equal to Operand B, outside tolerance.

</details>

<details>

<summary><strong>Compare Against</strong><br><em>Type of second operand</em></summary>

Determines whether the second value (Operand B) is a fixed number or comes from an attribute.

**Values**:

* **Constant**: Use a fixed numeric value for Operand B.
* **Attribute**: Read Operand B from an attribute on the input points.

</details>

<details>

<summary><strong>Operand B (Attr)</strong><br><em>Second operand attribute</em></summary>

When "Compare Against" is set to "Attribute", this selects which attribute will be used for Operand B.

</details>

<details>

<summary><strong>Operand B</strong><br><em>Fixed value for second operand</em></summary>

When "Compare Against" is set to "Constant", this sets the fixed numeric value for Operand B.

</details>

<details>

<summary><strong>Tolerance</strong><br><em>Near-equality tolerance</em></summary>

Used when performing nearly equal comparisons. Defines how close the two values must be to be considered equal, accounting for floating-point precision errors.

</details>

#### Usage Example

A filter that selects points where the "Height" attribute is greater than or equal to 100 units:

1. Set Operand A to the "Height" attribute
2. Choose the comparison "EqualOrGreater"
3. Set Compare Against to "Constant"
4. Set Operand B to 100

This will pass all points where Height >= 100.

#### Notes

* For floating-point comparisons, use "NearlyEqual" or "NearlyNotEqual" with an appropriate tolerance.
* When using attribute-based Operand B, ensure the attribute exists on all input points to avoid runtime errors.
* The tolerance value is typically set to a small number like `0.001` for most cases.
