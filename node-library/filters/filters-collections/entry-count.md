---
description: 'In editor :: PCGEx | Data Filter : Entry Count'
icon: circle-dashed
---

# Entry Count

{% hint style="info" %}
This page was generated from the source code. It should properly capture what the subnode does, but still needs to be proofread by a human.
{% endhint %}

> Filters data points based on how many entries they contain.

#### Overview

This subnode selects data points by checking whether the number of entries they contain meets specific criteria. For example, you can choose to keep only those points that have exactly 5 entries or more than 10 entries. You can compare the entry count against either a fixed number or a value from an attribute on the point.

{% hint style="info" %}
Connects to **Filter** pins on processing nodes.
{% endhint %}

#### How It Works

This subnode evaluates whether the number of entries in each data point matches a specified condition. It compares the entry count of each point against a target value using a comparison operator. The comparison can be strict (e.g., equal to) or approximate (e.g., nearly equal), and it supports both fixed values and attribute-based values for the comparison operand.

The subnode first determines what value to compare against:

* If set to **Constant**, it uses the fixed number provided in the **Operand B** setting.
* If set to **Attribute**, it reads a numeric value from an attribute on the input point and uses that as the comparison operand.

Then, it applies the selected comparison operator (e.g., greater than, equal to) between the entry count and the operand. If the condition is met, the point passes the filter.

<details>

<summary>Inputs</summary>

Expects a collection of data points, each containing a variable number of entries.

</details>

<details>

<summary>Outputs</summary>

Points that pass the comparison test are included in the output.

</details>

#### Configuration

<details>

<summary><strong>Comparison</strong><br><em>Comparison operator to use.</em></summary>

Controls how the entry count is compared to the operand.

**Values**:

* **==**: Strictly equal
* **!=**: Strictly not equal
* **>=**: Equal or greater than
* **<=**: Equal or smaller than
* **>**: Strictly greater than
* **<**: Strictly smaller than
* **\~=**: Nearly equal (within tolerance)
* **!\~=**: Nearly not equal (outside tolerance)

</details>

<details>

<summary><strong>Compare Against</strong><br><em>Type of operand to compare against.</em></summary>

Determines whether the comparison value is a fixed number or read from an attribute.

**Values**:

* **Constant**: Use a fixed number from the **Operand B** setting.
* **Attribute**: Read the comparison value from an attribute on the input point.

</details>

<details>

<summary><strong>Operand B</strong><br><em>Fixed value to compare entry count against.</em></summary>

The numeric value used for comparison when **Compare Against** is set to **Constant**. Must be a non-negative integer.

</details>

<details>

<summary><strong>Operand B (Attr)</strong><br><em>Attribute to read the comparison value from.</em></summary>

The attribute whose value will be used for comparison when **Compare Against** is set to **Attribute**. The attribute must contain numeric data.

</details>

<details>

<summary><strong>Tolerance</strong><br><em>Near-equality tolerance.</em></summary>

Used only when the comparison operator is **Nearly Equal** or **Nearly Not Equal**. Defines how close the values need to be to be considered equal or not equal.

</details>

#### Usage Example

You're generating a set of points representing cities, and each city has a variable number of roads entering it. You want to keep only those cities that have exactly 4 roads entering them. Set **Compare Against** to **Constant**, **Operand B** to `4`, and **Comparison** to **==**. This will filter out all cities except those with exactly 4 entries.

#### Notes

* The entry count refers to the number of data items (e.g., roads, connections) associated with a point.
* When using **Attribute** for comparison, ensure that the attribute exists and contains valid numeric values.
* For approximate comparisons, consider the tolerance value carefully to avoid unintended filtering.
