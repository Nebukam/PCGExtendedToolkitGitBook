---
description: 'In editor :: PCGEx | Filter : Modulo Compare'
icon: circle-dashed
---

# Modulo Comparison

{% hint style="info" %}
This page was generated from the source code. It should properly capture what the node does, but still needs to be proofread by a human.
{% endhint %}

> &#x20;A % B != C

#### Overview

The Modulo Compare filter evaluates whether the result of a modulo operation between two values meets a specified comparison condition against a third value. It's useful for creating patterns or conditions based on remainders, such as selecting every Nth point or filtering based on divisibility rules.

This subnode connects to Filter pins on processing nodes and determines which points pass or fail the defined modulo comparison. You can use it to create procedural effects like grid-based selection, periodic spacing, or conditional point filtering using mathematical relationships.

{% hint style="info" %}
Connects to **Filter** pins on processing nodes.
{% endhint %}

#### How It Works

This filter performs a modulo operation (A % B) and then compares the result against a third value (C) using a specified comparison operator. The logic evaluates whether the modulo result meets the comparison criteria.

The process involves:

1. Reading Operand A from input data or constant
2. Calculating Operand A modulo Operand B
3. Comparing the result to Operand C using the selected comparison operator
4. Returning true if the condition is met, false otherwise

For example, with `A = 7`, `B = 3`, and `C = 1`, the filter computes `7 % 3 = 1`, then checks if `1 != 1`. Since this is false, the point fails the filter.

#### Inputs

This subnode expects point data as input. It reads values from attributes or constants based on configuration settings.

#### Outputs

This subnode does not produce new data but defines a filtering condition that determines whether points pass or fail.

#### Configuration

<details>

<summary><strong>Operand A</strong><br><em>Operand A for testing -- Will be translated to `double` under the hood.</em></summary>

The first operand in the modulo operation. Can be read from an attribute or set as a constant value.

</details>

<details>

<summary><strong>Operand B Source</strong><br><em>Type of OperandB</em></summary>

Determines whether Operand B is read from an attribute or set as a constant.

**Values**:

* **Constant**: Use a fixed numeric value
* **Attribute**: Read the value from an input attribute

</details>

<details>

<summary><strong>Operand B (Constant)</strong><br><em>Operand B for testing</em></summary>

The second operand in the modulo operation when set to constant mode. Must be a positive number.

</details>

<details>

<summary><strong>Operand B (Attribute)</strong><br><em>Operand B for testing</em></summary>

The second operand in the modulo operation when set to attribute mode. Reads from an attribute on input points.

</details>

<details>

<summary><strong>Comparison</strong><br><em>Comparison</em></summary>

The comparison operator used to evaluate the modulo result against Operand C.

**Values**:

* **==**: Strictly Equal
* **!=**: Strictly Not Equal
* **>=**: Equal or Greater
* **<=**: Equal or Smaller
* **>**: Strictly Greater
* **<**: Strictly Smaller
* **\~=**: Nearly Equal
* **!\~=**: Nearly Not Equal

</details>

<details>

<summary><strong>Compare Against Source</strong><br><em>Type of OperandC</em></summary>

Determines whether Operand C is read from an attribute or set as a constant.

**Values**:

* **Constant**: Use a fixed numeric value
* **Attribute**: Read the value from an input attribute

</details>

<details>

<summary><strong>Operand C (Constant)</strong><br><em>Operand C for testing</em></summary>

The third operand in the comparison when set to constant mode. Can be any numeric value.

</details>

<details>

<summary><strong>Operand C (Attribute)</strong><br><em>Operand C for testing</em></summary>

The third operand in the comparison when set to attribute mode. Reads from an attribute on input points.

</details>

<details>

<summary><strong>Tolerance</strong><br><em>Near-equality tolerance</em></summary>

Used only with "Nearly Equal" or "Nearly Not Equal" comparisons. Defines how close two values must be to be considered equal.

</details>

<details>

<summary><strong>Zero Result</strong><br><em>Which value to return when dealing with zero-values</em></summary>

When the modulo operation results in zero, this setting determines whether the point passes (true) or fails (false) the filter.

</details>

#### Usage Example

Use this filter to select every third point in a grid by setting:

* Operand A = Point index
* Operand B = 3
* Comparison = !=
* Operand C = 0

This will pass points whose index modulo 3 is not equal to 0, effectively selecting all points except those at indices divisible by 3.

#### Notes

* The filter handles negative numbers correctly using standard modulo behavior.
* When using attribute-based operands, ensure the attributes exist and are properly typed.
* For performance, prefer constant values over attribute lookups when possible.
* This filter is particularly useful for creating periodic or grid-based patterns in procedural generation workflows.
