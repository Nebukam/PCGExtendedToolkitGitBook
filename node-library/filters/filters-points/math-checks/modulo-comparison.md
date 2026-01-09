---
description: 'In editor :: PCGEx | Filter : Modulo Compare'
icon: circle-dashed
---

# Modulo Comparison

{% hint style="info" %}
This page was generated from the source code. It should properly capture what the node does, but still needs to be proofread by a human.
{% endhint %}

> A % B != C

#### Overview

This subnode filters points based on a modulo comparison operation. It evaluates whether the remainder of Operand A divided by Operand B is not equal to Operand C, or another comparison type. This allows for complex filtering logic using mathematical operations.

It's useful when you want to select points that meet specific modulo-based criteria — such as selecting every Nth point, or filtering based on periodic patterns in data attributes.

This subnode connects to **Filter** pins on processing nodes and can be combined with other filters to create more complex selection rules.

#### How It Works

This filter evaluates a mathematical expression of the form `Operand A % Operand B` and compares it against `Operand C` using the selected comparison operator.

The process works as follows:

1. For each point, it retrieves values for Operand A, Operand B, and Operand C.
2. If any operand is an attribute, it reads that value from the input data at the point's index.
3. It calculates the modulo of Operand A divided by Operand B.
4. It compares the result using the selected comparison operator (e.g., `!=`, `==`, `>=`, etc.) against Operand C.
5. If the comparison evaluates to true, the point passes the filter.

The logic supports both constant and attribute-based operands for all three values, enabling flexible filtering based on static or dynamic data.

<details>

<summary>Inputs</summary>

Expects a point-based data input containing attributes used in Operand A, Operand B, and Operand C if those are set to read from attributes.

</details>

<details>

<summary>Outputs</summary>

Filters the input points based on whether they meet the modulo comparison condition. Points that pass the test are included in the output; those that fail are excluded.

</details>

#### Configuration

***

**Operand A**

_The dividend in the modulo operation._

This value is used as the numerator in the modulo calculation. It can be a constant or read from an attribute on the input data.

**Operand B Source**

_Type of OperandB_

Controls whether Operand B is a constant value or read from an attribute.

**Values**:

* **Constant**: Use a fixed value for Operand B.
* **Attribute**: Read Operand B from an attribute in the input data.

**Operand B (Constant)**

_The divisor in the modulo operation._

Used when Operand B Source is set to Constant. This sets the fixed value for Operand B.

**Operand B (Attribute)**

_The divisor in the modulo operation._

Used when Operand B Source is set to Attribute. This selects an attribute from the input data to use as Operand B.

**Comparison**

_The comparison operator used to evaluate the modulo result against Operand C._

**Values**:

* **==**: Strictly equal
* **!=**: Strictly not equal
* **>=**: Equal or greater
* **<=**: Equal or smaller
* **>**: Strictly greater
* **<**: Strictly smaller
* **\~=**: Nearly equal
* **!\~=**: Nearly not equal

**Compare Against**

_Type of OperandC_

Controls whether Operand C is a constant value or read from an attribute.

**Values**:

* **Constant**: Use a fixed value for Operand C.
* **Attribute**: Read Operand C from an attribute in the input data.

**Operand C (Constant)**

_The target value to compare the modulo result against._

Used when Compare Against is set to Constant. This sets the fixed value for Operand C.

**Operand C (Attribute)**

_The target value to compare the modulo result against._

Used when Compare Against is set to Attribute. This selects an attribute from the input data to use as Operand C.

**Tolerance**

_Near-equality tolerance_

Only used when the comparison is set to Nearly Equal or Nearly Not Equal. Defines how close two floating-point values must be to be considered equal.

**Zero Result**

_Which value to return when dealing with zero-values_

When Operand B is zero, this setting determines whether the filter should pass (true) or fail (false) for that point.

#### Usage Example

Suppose you want to select points where the X position modulo 3 does not equal 0. You would:

1. Set Operand A to read from the `X` attribute.
2. Set Operand B Source to Constant and Operand B to 3.
3. Set Compare Against to Constant and Operand C to 0.
4. Set Comparison to `!=`.

This will keep all points where the X coordinate, when divided by 3, leaves a remainder other than 0.

#### Notes

* Be cautious with zero values in Operand B, as they can cause division-by-zero errors or unexpected behavior depending on the Zero Result setting.
* The filter supports both integer and floating-point comparisons. Floating-point comparisons use tolerance for near-equality checks.
* Combining this subnode with other filters allows for complex conditional logic based on mathematical relationships between attributes.
