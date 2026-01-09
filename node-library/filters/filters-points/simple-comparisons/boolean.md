---
description: 'In editor :: PCGEx | Filter : Bool Compare'
icon: circle-dashed
---

# Boolean

{% hint style="info" %}
This page was generated from the source code. It should properly capture what the node does, but still needs to be proofread by a human.
{% endhint %}

> "(bool) A == (bool) B"

#### Overview

This subnode filters points based on a boolean comparison between two operands. It evaluates whether two boolean values are equal or not equal, allowing you to isolate points that meet specific logical conditions. You can compare a point's attribute value against a constant or another attribute.

{% hint style="info" %}
Connects to **Filter** pins on processing nodes.
{% endhint %}

#### How It Works

This subnode performs a boolean comparison between two operands, A and B. It reads the values of these operands from either point attributes or constant values, converts them to booleans if needed, and then checks if they are equal or not equal based on your selected operation.

The evaluation happens per point in the input data. For each point, it retrieves the value of Operand A (from an attribute or constant), and the value of Operand B (also from an attribute or constant). It then compares these two boolean values using the specified comparison operator (equal or not equal) and passes the point through if the condition is met.

<details>

<summary>Inputs</summary>

Expects point data with optional attributes for Operand A and Operand B if they are set to read from attributes.

</details>

<details>

<summary>Outputs</summary>

Filters the input points, passing only those that satisfy the boolean comparison between Operand A and Operand B.

</details>

#### Configuration

***

**Operand A**

_Operand A for testing -- Will be translated to `double` under the hood._

Defines which attribute or constant value is used as the first operand in the comparison. If set to an attribute, it reads the value from that attribute on each point.

**Comparison**

_Comparison_

Specifies the logical operation to perform between Operand A and Operand B.

* **Equal**: Passes points where Operand A equals Operand B.
* **Not Equal**: Passes points where Operand A does not equal Operand B.

**Compare Against**

_Type of OperandB_

Determines whether Operand B is read from an attribute or set as a constant value.

* **Constant**: Operand B is a fixed boolean value.
* **Attribute**: Operand B is read from a point attribute.

**Operand B (Attr)**

_Operand B for testing -- Will be translated to `bool` under the hood._

The attribute used to read Operand B when "Compare Against" is set to "Attribute". This must be a boolean or convertible-to-boolean attribute.

**Operand B**

_Operand B for testing_

The constant boolean value used as Operand B when "Compare Against" is set to "Constant".

#### Usage Example

You have a point cloud where each point has a boolean attribute called `IsSelected`. You want to filter points that are selected and match another boolean attribute `IsActive`. Set Operand A to `IsSelected`, Operand B to `IsActive`, and Comparison to "Equal". This will pass only the points where both attributes are true or both are false.

#### Notes

* The comparison is performed on a per-point basis.
* If an attribute doesn't exist, it's treated as false.
* Boolean values from attributes are converted from their underlying numeric representation (e.g., 0 = false, non-zero = true).
* This filter works best when Operand A and Operand B are boolean or numeric types that can be interpreted as booleans.
