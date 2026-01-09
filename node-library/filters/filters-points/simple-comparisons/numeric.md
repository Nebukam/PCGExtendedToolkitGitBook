---
description: 'In editor :: PCGEx | Filter : Compare (Numeric)'
icon: circle-dashed
---

# Numeric

{% hint style="info" %}
This page was generated from the source code. It should properly capture what the node does, but still needs to be proofread by a human.
{% endhint %}

> Creates a filter definition that compares two numeric attribute values.

#### Overview

This subnode defines a filtering condition based on comparing two numeric values. It evaluates whether a point passes or fails a comparison test, making it useful for selecting points that meet specific numeric criteria. You can compare an attribute value from the input data against either a constant or another attribute value.

{% hint style="info" %}
Connects to **Filter** pins on processing nodes.
{% endhint %}

#### How It Works

This subnode performs a comparison between two numeric values for each point in the input data. The first operand (Operand A) is always read from an attribute of the input points. The second operand (Operand B) can be either a constant value or another attribute, as defined by the **CompareAgainst** setting.

The comparison operation is determined by the **Comparison** setting, which defines how the two operands are evaluated. For example, if Operand A is 5 and Operand B is 3, and the comparison is "Greater Than", then the point passes the filter only if 5 > 3.

If the comparison type is set to "Nearly Equal" or "Nearly Not Equal", a tolerance value is used to determine equality within a small range. This helps avoid issues with floating-point precision when comparing values that should be equal but might differ slightly due to computation.

The result of this evaluation determines whether the point passes the filter or not, and thus affects which points are processed by downstream nodes.

<details>

<summary>Inputs</summary>

Expects a set of points with numeric attributes. The **Operand A** attribute must exist on the input data.

</details>

<details>

<summary>Outputs</summary>

Produces a boolean result per point indicating whether it passes the comparison test defined by this filter subnode.

</details>

#### Configuration

***

**Operand A**

_The first operand for comparison — read from an attribute._

This defines which numeric attribute of the input points is used as the first value in the comparison. For example, if you have a point with an attribute named "Height", you would select that attribute here to compare against another value.

**Comparison**

_The type of comparison to perform._

Controls how the two operands are compared.

**Values**:

* **Strictly Equal**: Checks if Operand A equals Operand B.
* **Strictly Not Equal**: Checks if Operand A does not equal Operand B.
* **Equal or Greater**: Checks if Operand A is greater than or equal to Operand B.
* **Equal or Smaller**: Checks if Operand A is less than or equal to Operand B.
* **Strictly Greater**: Checks if Operand A is strictly greater than Operand B.
* **Strictly Smaller**: Checks if Operand A is strictly smaller than Operand B.
* **Nearly Equal**: Checks if Operand A is approximately equal to Operand B, within the tolerance range.
* **Nearly Not Equal**: Checks if Operand A is not approximately equal to Operand B, outside the tolerance range.

**Compare Against**

_Determines whether Operand B is a constant or an attribute._

Controls how the second operand is sourced.

**Values**:

* **Constant**: Use the value specified in **Operand B (Constant)**.
* **Attribute**: Read the second operand from an attribute of the input points.

**Operand B (Constant)**

_The second operand when comparing against a constant._

When **Compare Against** is set to "Constant", this numeric value is used as Operand B in the comparison. For example, if you want to filter points where Height > 10, set this to 10.

**Operand B (Attribute)**

_The second operand when comparing against an attribute._

When **Compare Against** is set to "Attribute", this defines which attribute of the input points is used as Operand B in the comparison. For example, if you want to filter points where Height > Width, select the "Width" attribute here.

**Tolerance**

_Near-equality tolerance for floating-point comparisons._

Used only when the **Comparison** is set to "Nearly Equal" or "Nearly Not Equal". Defines how close two values must be to be considered equal. For example, if Operand A is 1.0 and Operand B is 1.0001, they are considered nearly equal if the tolerance is set to 0.001.

#### Usage Example

Suppose you have a point cloud with attributes "Temperature" and "Humidity". You want to filter points where Temperature is greater than or equal to Humidity.

1. Set **Operand A** to "Temperature".
2. Set **Compare Against** to "Attribute".
3. Set **Operand B (Attribute)** to "Humidity".
4. Set **Comparison** to "Equal or Greater".

This will pass only those points where the Temperature attribute is greater than or equal to the Humidity attribute.

#### Notes

* The comparison logic is applied per point, so each point is evaluated independently.
* When using "Nearly Equal" or "Nearly Not Equal", ensure that your tolerance value is appropriate for the scale of your numeric data.
* This subnode can be combined with other filters to create more complex selection criteria.
