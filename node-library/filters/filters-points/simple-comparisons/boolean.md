---
description: 'In editor :: PCGEx | Filter : Bool Compare'
icon: circle-dashed
---

# Boolean

{% hint style="danger" %}
This documentation has been AI-generated from the source code and may not be 100% accurate.
{% endhint %}

> Creates a filter that compares two boolean values using an equality operator.

### Overview

This filter evaluates whether two boolean operands are equal or not equal to each other. It's useful for filtering points based on attribute comparisons or constant boolean values.

{% hint style="info" %}
Connects to **Filter** pins on processing nodes like **Filter Points** or **Filter Edges**
{% endhint %}

### How It Works

The filter compares two boolean values using either an equality (==) or inequality (!=) operator. It returns true if the comparison passes, false otherwise.

### Inputs

* **Input Data**: The point data to filter
* **Operand A**: First boolean value to compare
* **Operand B**: Second boolean value to compare

### Outputs

* **Filter**: Boolean output that determines whether to pass or reject input data

### Configuration

***

#### General

**Operand A**

_The first operand to compare._

Reads a boolean value from an attribute on the input data.

**Comparison**

_How to compare the two operands._

* **Equal**: Passes when both operands are the same (true == true or false == false)
* **Not Equal**: Passes when the operands are different (true != false or false != true)

**Compare Against**

_Whether Operand B is a constant value or read from an attribute._

* **Constant**: Use a fixed boolean value for Operand B
* **Attribute**: Read Operand B from an attribute on the input data

**Operand B (Attr)**

_The second operand to compare, read from an attribute._

Only shown when "Compare Against" is set to "Attribute".

**Operand B**

_The second operand to compare, as a constant value._

Only shown when "Compare Against" is set to "Constant"

### Usage Example

Create a filter that only passes points where a boolean attribute `IsEnabled` matches a constant value `true`. Connect this to a **Filter Points** node to selectively process only enabled points.

### Notes

* When using attributes, both operands must be boolean type
* The filter will fail if an attribute is missing and the fallback policy is set to "Throw Error"
* Combine multiple boolean filters using logical operators in the parent node to create complex conditions
