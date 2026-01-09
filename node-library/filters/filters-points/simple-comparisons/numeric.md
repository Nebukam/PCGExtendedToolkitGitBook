---
description: 'In editor :: PCGEx | Filter : Compare (Numeric)'
icon: circle-dashed
---

# Numeric

{% hint style="danger" %}
This documentation has been AI-generated from the source code and may not be 100% accurate.
{% endhint %}

> Creates a filter definition that compares two numeric attribute values.

### Overview

This factory generates a filter that evaluates whether two numeric values meet a specified comparison condition. It's commonly used to selectively process points based on numeric criteria, such as distance thresholds, attribute value ranges, or conditional logic in procedural generation workflows.

{% hint style="info" %}
Connects to **Filter** pins on processing nodes like **Point Filter**, **Point Switch**, or **Point Split**.
{% endhint %}

### How It Works

This filter compares two numeric values using a specified operator. The comparison is performed per point, and the result determines whether that point passes or fails the filter.

The first operand (Operand A) is always read from an attribute on the input data. The second operand (Operand B) can be either a constant value or another attribute, depending on the configuration. The comparison operator defines how these two values are evaluated.

### Configuration

***

#### General

**Operand A**

_The first numeric value to compare, read from an attribute on the input data._

Set this to the attribute you want to use as the base value for comparison. For example, if you're filtering points based on their distance from a center point, this would be the distance attribute.

**Comparison**

_How to compare Operand A and Operand B._

**Values**:

* **==**: Operand A Strictly Equal to Operand B
* **!=**: Operand A Strictly Not Equal to Operand B
* **>=**: Operand A Equal or Greater to Operand B
* **<=**: Operand A Equal or Smaller to Operand B
* **>**: Operand A Strictly Greater to Operand B
* **<**: Operand A Strictly Smaller to Operand B
* **\~=**: Operand A Nearly Equal to Operand B
* \*\*!\~=: Operand A Nearly Not Equal to Operand B

**Compare Against**

_Whether Operand B is a constant value or read from an attribute._

**Values**:

* **Constant**: Use a constant, user-defined value.
* **Attribute**: Read the value from the input data.

**Operand B (Attr)**

_The second numeric value to compare, read from an attribute on the input data._

Only visible when "Compare Against" is set to "Attribute". This defines which attribute provides the second operand for comparison.

**Operand B**

_The second numeric value to compare, used as a constant._

Only visible when "Compare Against" is set to "Constant". This sets the fixed value to compare against.

**Near-equality Tolerance**

_Used only when using nearly equal or not equal comparisons._

Controls how close two values must be to be considered "nearly equal." The default tolerance is typically suitable for most use cases, but you can adjust it for more precise control over floating-point comparisons.

### Usage Example

You want to filter points that are within a certain distance from a center point.

1. Create a distance attribute on your input points (e.g., using "Point : Distance" node)
2. Connect this factory to a **Point Filter** node
3. Set Operand A to the distance attribute
4. Set Comparison to **<=**
5. Set Compare Against to **Constant**
6. Set Operand B to your desired maximum distance (e.g., 100)

This will pass only points whose distance is less than or equal to 100 units.

### Notes

* For floating-point comparisons, use "Nearly Equal" or "Nearly Not Equal" with a tolerance to account for precision errors
* You can combine multiple filter factories using **Filter : Combine** nodes to create complex conditional logic
* The filter works on all numeric attribute types (integers, floats, doubles)

***

### Inputs

* **Input Data**: The point data containing the attributes to compare

### Outputs

* **Filter**: The resulting filter definition that can be connected to processing nodes
