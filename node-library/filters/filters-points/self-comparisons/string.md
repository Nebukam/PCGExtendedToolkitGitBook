---
description: 'In editor :: PCGEx | Filter : Self Compare (String)'
icon: circle-dashed
---

# String

{% hint style="info" %}
This page was generated from the source code. It should properly capture what the node does, but still needs to be proofread by a human.
{% endhint %}

> Creates a filter definition that compares an attribute value against itself at another index.

#### Overview

This subnode defines a filtering behavior that compares string values from one point in your data set with the same attribute value from another point, using a configurable index. It's useful for creating conditions based on relationships between points, such as checking if a point's attribute matches a neighbor's attribute or a specific offset.

It connects to the **Filter** input pin of processing nodes that support point filtering. Multiple filter subnodes can be combined to create complex filtering logic.

#### How It Works

This subnode evaluates whether a string attribute value at the current point matches (or fails to match, based on comparison type) the same string attribute from another point in the data set. The "other point" is determined by an index, which can be a fixed number or read from an attribute.

1. It reads the string value of the specified **Operand A** attribute from the current point.
2. It calculates the **Operand B** index using either:
   * A constant value (if `CompareAgainst` is set to **Constant**)
   * The value from a specified attribute (if `CompareAgainst` is set to **Attribute**)
3. Depending on the **Index Mode**, this index is interpreted as:
   * An absolute index in the data set
   * An offset relative to the current point's index
4. It retrieves the string value of the same attribute from the calculated index.
5. The two values are compared using the specified **Comparison** operation (e.g., equal, contains, starts with).
6. If the comparison passes, the point is considered to pass the filter; otherwise, it fails.

The result depends on whether the current point's attribute matches the target point's attribute based on the defined logic.

<details>

<summary>Inputs</summary>

* Point data containing string attributes
* An optional attribute for Operand B if `CompareAgainst` is set to **Attribute**

</details>

<details>

<summary>Outputs</summary>

* A boolean result indicating whether a point passes or fails this specific filter condition

</details>

#### Configuration

***

**Operand A**

_The name of the string attribute to compare from the current point._

This defines which attribute's value is used as the first operand in the comparison.

**Comparison**

_The type of comparison to perform between the two string values._

**Values**:

* **StrictlyEqual**: Values must be exactly identical.
* **Contains**: The second value appears anywhere within the first.
* **StartsWith**: The first value begins with the second.
* **EndsWith**: The first value ends with the second.

**Index Mode**

_How to interpret the index value used for Operand B._

**Values**:

* **Pick**: The index is treated as an absolute position in the data set.
* **Offset**: The index is added to the current point's index to determine the target point.

**Compare Against**

_Whether Operand B is a constant or read from an attribute._

**Values**:

* **Constant**: Use a fixed integer value for Operand B.
* **Attribute**: Read the value from an input attribute.

**Index (Attr)**

_The attribute containing the index value when `CompareAgainst` is set to **Attribute**._

Only visible when `CompareAgainst` is set to **Attribute**.

**Index**

_The constant index value used when `CompareAgainst` is set to **Constant**._

Only visible when `CompareAgainst` is set to **Constant**.

**Index Safety**

_How to handle cases where the calculated index is out of bounds._

**Values**:

* **Ignore**: Skip comparisons for invalid indices.
* **Tile**: Wrap around to valid indices (e.g., index 5 with 3 points becomes index 2).
* **Clamp**: Clamp the index to the nearest valid value (e.g., index -1 becomes 0, index 5 becomes 2).
* **Yoyo**: Mirror indices back and forth (e.g., index -1 becomes 1, index 4 becomes 1).

**Invalid Index Fallback**

_How to treat points when the target index is invalid._

**Values**:

* **Pass**: Points with invalid indices are considered to pass the filter.
* **Fail**: Points with invalid indices are considered to fail the filter.

**Swap Operands**

_When enabled, swaps the order of operands in the comparison._

Useful for inverting "contains" checks. For example, if you want to check that a point's attribute does **not** contain another value, you can swap the operands and use "StrictlyEqual".

#### Usage Example

You have a set of points with a string attribute named `Tag`. You want to filter points where the tag matches the tag of the point at index 1 (i.e., the second point in the data set).

1. Set **Operand A** to `Tag`.
2. Set **Compare Against** to **Constant**.
3. Set **Index** to `1`.
4. Set **Index Mode** to **Pick**.
5. Set **Comparison** to **StrictlyEqual**.

This will only pass points where the `Tag` matches the value of the second point in your data set.

#### Notes

* The index used for comparison is calculated before each test, so it can vary per point if using an attribute-based index.
* Be cautious with **Offset** mode and large offsets; they may lead to out-of-bounds errors unless properly handled by **Index Safety** settings.
* Using **Swap Operands** allows for more flexible comparisons, such as checking for non-containment.
