---
description: 'In editor :: PCGEx | Filter : Self Compare (Numeric)'
icon: circle-dashed
---

# Numeric

{% hint style="info" %}
This page was generated from the source code. It should properly capture what the node does, but still needs to be proofread by a human.
{% endhint %}

> Creates a filter definition that compares an attribute numeric value against itself at another index.

#### Overview

This subnode defines a filtering behavior that evaluates whether a point's numeric attribute meets a condition when compared to the same attribute from another point in the data set. It is useful for creating rules based on relationships between points, such as comparing a point's height to its neighbor’s height or checking if a value is greater than the one at an offset index.

This subnode connects to Filter pins on processing nodes that support point filtering. It allows you to define custom logic using numeric comparisons and self-referencing indices.

{% hint style="info" %}
Connects to **Filter** pins on processing nodes.
{% endhint %}

#### How It Works

This filter evaluates a comparison between two numeric values:

1. The first value (Operand A) is read from the current point's attribute.
2. The second value (Operand B) is read from another point in the data set, determined by an index offset or pick.

The subnode calculates the comparison result and returns whether the condition passes or fails based on that evaluation. It supports multiple comparison types such as equal, not equal, greater than, etc., with a tolerance for floating-point near-equality checks.

It uses a configurable index mode to determine which point to compare against:

* In **Pick** mode, it directly references a specific index.
* In **Offset** mode, it calculates the target index by adding an offset to the current point's index.

Index safety options control how out-of-bounds indices are handled (ignore, tile, clamp, or yoyo).

<details>

<summary>Inputs</summary>

Expects a point data input with numeric attributes that can be read for Operand A and Operand B.

</details>

<details>

<summary>Outputs</summary>

Returns a boolean result indicating whether the current point passes the comparison test.

</details>

#### Configuration

***

**Operand A**

_The attribute to use as the first operand in the comparison._

This is the numeric value from the current point that will be compared against another value. It can be an attribute or a constant.

**Comparison**

_The type of comparison to perform._

**Values**:

* **Equal**: The values must be exactly equal.
* **Not Equal**: The values must not be equal.
* **Greater Than**: Operand A must be greater than Operand B.
* **Less Than**: Operand A must be less than Operand B.
* **Greater Or Equal**: Operand A must be greater than or equal to Operand B.
* **Less Or Equal**: Operand A must be less than or equal to Operand B.
* **Nearly Equal**: The values are considered equal if they are within the tolerance range.
* **Nearly Not Equal**: The values are considered not equal if they differ by more than the tolerance.

**Tolerance**

_The tolerance used for near-equality comparisons._

Only affects comparisons set to **Nearly Equal** or **Nearly Not Equal**. Defines how close two floating-point numbers must be to be considered equal.

**Index Mode**

_How the index of the second operand is calculated._

**Values**:

* **Pick**: Use a specific index directly.
* **Offset**: Add an offset value to the current point's index.

**Compare Against**

_The source for Operand B's value._

**Values**:

* **Constant**: Use a fixed integer value as the index.
* **Attribute**: Read the index from an attribute on the input data.

**Index (Attr)**

_The attribute used to determine the index when "Compare Against" is set to "Attribute."_

Only visible when Compare Against is set to Attribute. This attribute should contain valid indices for referencing other points in the dataset.

**Index**

_The constant index value used when "Compare Against" is set to "Constant."_

Only visible when Compare Against is set to Constant. This determines which point's value will be used as Operand B.

**Index Safety**

_How out-of-bounds indices are handled._

**Values**:

* **Ignore**: Skip points with invalid indices.
* **Tile**: Wrap around the index using modulo arithmetic.
* **Clamp**: Clamp the index to the valid range.
* **Yoyo**: Mirror the index back and forth when exceeding bounds.

**Invalid Index Fallback**

_How to treat points where the target index is invalid._

**Values**:

* **Pass**: Points with invalid indices are considered to pass the filter.
* **Fail**: Points with invalid indices are considered to fail the filter.

#### Usage Example

You want to filter points so that only those whose height is greater than the height of the point at an offset index (e.g., 5 positions ahead) are kept. Set Operand A to a "Height" attribute, Comparison to Greater Than, Index Mode to Offset, and Index Constant to 5.

#### Notes

* This subnode compares values from the same attribute but across different points.
* The index used for comparison can be constant or dynamic via an attribute.
* Be cautious with large offsets or non-clamped indices, as they may cause unexpected behavior in datasets with fewer points.
* For floating-point comparisons, use Near Equal/Not Equal with a defined tolerance to avoid precision errors.
