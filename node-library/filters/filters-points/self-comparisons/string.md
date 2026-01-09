---
description: 'In editor :: PCGEx | Filter : Self Compare (String)'
icon: circle-dashed
---

# String

{% hint style="danger" %}
This documentation has been AI-generated from the source code and may not be 100% accurate.
{% endhint %}

> Creates a filter definition that compares a string attribute value against itself at another index in the point data.

### Overview

This filter checks whether a string attribute from the current point matches a string attribute from another point in the same dataset. The other point is selected using an index, which can be a fixed value or read from an attribute. It's useful for comparing points with each other to create relationships or conditions based on their string values.

{% hint style="info" %}
Connects to Filter pins on processing nodes like **Filter Points** or **Branch Points**
{% endhint %}

### How It Works

The filter evaluates a condition between:

* The value of an attribute from the current point (Operand A)
* The value of an attribute from another point in the dataset (Operand B)

It uses an index to determine which other point to compare against. This index can be a fixed number or read from an attribute on the input points. The comparison is performed using string comparison operators.

### Configuration

***

#### General

**Operand A**

_The name of the string attribute to compare from the current point._

This is the base value that will be compared against another value from a different point.

**Comparison**

_The type of string comparison to perform._

**Values**:

* **Strictly Equal**: Values must match exactly
* **Contains**: Operand A contains Operand B (case-sensitive)
* **Starts With**: Operand A starts with Operand B (case-sensitive)
* **Ends With**: Operand A ends with Operand B (case-sensitive)
* **Case Insensitive Equal**: Values must match, ignoring case
* **Case Insensitive Contains**: Operand A contains Operand B (case-insensitive)
* **Case Insensitive Starts With**: Operand A starts with Operand B (case-insensitive)
* **Case Insensitive Ends With**: Operand A ends with Operand B (case-insensitive)

**Index Mode**

_How the index value is interpreted._

**Values**:

* **Pick**: The index directly refers to a specific point number (0-based)
* **Offset**: The index is an offset from the current point's index

**Compare Against**

_Whether Operand B is a constant value or read from an attribute._

**Values**:

* **Constant**: Use a fixed integer value for the index
* **Attribute**: Read the index value from an attribute on the input points

**Index (Attr)**

_The attribute to read the comparison index from, when "Compare Against" is set to "Attribute."_

This attribute must contain integer values that represent indices.

**Index**

_The fixed index value to use for comparison, when "Compare Against" is set to "Constant."_

For example, if set to 5, it will compare against the point at index 5.

**Index Safety**

_How to handle cases where the calculated index is out of bounds._

**Values**:

* **Ignore**: Skip points with invalid indices
* **Tile**: Wrap around to valid indices (0,1,2,0,1,2...)
* **Clamp**: Clamp invalid indices to the nearest valid value (0,1,2,2,2,2...)
* **Yoyo**: Mirror indices back and forth (0,1,2,1,0,1...)

**Invalid Index Fallback**

_How to treat points when their index is out of bounds._

**Values**:

* **Pass**: Points with invalid indices are considered to pass the filter
* **Fail**: Points with invalid indices are considered to fail the filter

**Swap Operands**

_When enabled, swaps the operands in the comparison._

This is useful for inverting "contains" checks. For example, if you want to check that Operand B contains Operand A instead of Operand A containing Operand B.

### Usage Example

You have a set of points representing cities, each with a "CityName" string attribute and an "IsCapital" integer attribute (0 or 1). You want to filter points where the city name matches the name of another city that is marked as a capital.

1. Set **Operand A** to "CityName"
2. Set **Comparison** to "Strictly Equal"
3. Set **Compare Against** to "Attribute"
4. Set **Index (Attr)** to "IsCapital" (assuming this attribute contains the index of the capital city)
5. Set **Index Safety** to "Clamp" to prevent errors
6. Set **Invalid Index Fallback** to "Fail"

This will filter points where the city name matches the name of the capital city.

### Notes

* The index used for comparison is relative to the input point count, so it's important to ensure valid indices.
* When using "Offset" mode, negative values are valid and will refer to previous points.
* This filter works best when you have a clear relationship between points that can be expressed through indices.
* Combine with other filters to create more complex conditions.

### Inputs

* **Points**: Input point data to filter
* **Index Attribute** (optional): Attribute containing index values for comparison

### Outputs

* **Pass**: Points that meet the filter criteria
* **Fail**: Points that do not meet the filter criteria
