---
description: 'In editor :: PCGEx | Data Filter : Entry Count'
icon: circle-dashed
---

# Entry Count

{% hint style="info" %}
This page was generated from the source code. It should properly capture what the node does, but still needs to be proofread by a human.
{% endhint %}

> Does a numeric comparison against the number of entries in a data collection.

#### Overview

This filter subnode evaluates whether the number of entries (points or elements) in a data collection meets a specified numeric condition. It's useful for filtering collections based on their size, such as selecting only those with more than a certain number of points or exactly matching a target count.

It connects to **Filter** pins on processing nodes that accept point-based filters. You can chain multiple filter subnodes together to apply complex conditions.

{% hint style="info" %}
Connects to Filter pins on processing nodes.
{% endhint %}

#### How It Works

This filter evaluates the number of entries in a data collection against a target value using a comparison operator. The number of entries is typically the count of points in a point IO or elements in a data collection.

The logic works as follows:

1. It reads the entry count from the input data.
2. It retrieves the comparison operand (Operand B), which can be either a constant value or an attribute from the input data.
3. It performs a numeric comparison between the entry count and the operand using the selected operator.
4. If the comparison evaluates to true, the data passes the filter; otherwise, it is filtered out.

The result depends on the chosen comparison type (e.g., greater than, equal to, nearly equal) and whether tolerance is used for floating-point comparisons.

<details>

<summary>Inputs</summary>

Expects a point IO or data collection with an entry count to evaluate.

</details>

<details>

<summary>Outputs</summary>

Returns filtered data based on the comparison result.

</details>

#### Configuration

***

**Comparison**

_The operator used to compare the entry count against Operand B._

Determines how the filter evaluates whether to pass or fail a collection. For example, using "Greater Than" will only allow collections with more than the specified number of entries.

**Values**:

* **Strictly Equal**: Entry count must exactly match Operand B.
* **Strictly Not Equal**: Entry count must not exactly match Operand B.
* **Equal Or Greater**: Entry count must be greater than or equal to Operand B.
* **Equal Or Smaller**: Entry count must be less than or equal to Operand B.
* **Strictly Greater**: Entry count must be strictly greater than Operand B.
* **Strictly Smaller**: Entry count must be strictly smaller than Operand B.
* **Nearly Equal**: Entry count must be approximately equal to Operand B, within tolerance.
* **Nearly Not Equal**: Entry count must not be approximately equal to Operand B, outside tolerance.

**Compare Against**

_Determines whether Operand B is a constant or an attribute value._

Controls how the comparison operand is sourced. If set to "Attribute", the filter reads the value from an input attribute instead of using a fixed number.

**Values**:

* **Constant**: Use a fixed numeric value for Operand B.
* **Attribute**: Read Operand B from an attribute on the input data.

**Operand B (Attr)**

_The attribute used as the comparison operand when Compare Against is set to "Attribute"._

This setting only appears when "Compare Against" is set to "Attribute". It specifies which attribute to read the comparison value from.

**Operand B**

_The numeric value used for comparison when Compare Against is set to "Constant"._

This is the fixed number that the entry count is compared against. The minimum allowed value is 0.

**Tolerance**

_Tolerance used for near-equality comparisons._

Only applies when using "Nearly Equal" or "Nearly Not Equal" comparisons. Defines how close the entry count must be to Operand B to be considered equal.

#### Usage Example

You have a collection of points representing trees, and you want to only process groups that contain exactly 5 trees. You would set:

* **Comparison** to "Strictly Equal"
* **Compare Against** to "Constant"
* **Operand B** to `5`

Alternatively, if you want to filter collections with more than 10 entries, set:

* **Comparison** to "Strictly Greater"
* **Operand B** to `10`

#### Notes

This filter is useful for filtering collections based on their size. It can be combined with other filters to create complex selection criteria. When using attribute-based operands, ensure the attribute exists and contains valid numeric data.
