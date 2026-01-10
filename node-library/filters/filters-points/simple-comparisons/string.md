---
description: 'In editor :: PCGEx | Filter : Compare (String)'
icon: circle-dashed
---

# String

{% hint style="info" %}
This page was generated from the source code. It should properly capture what the node does, but still needs to be proofread by a human.
{% endhint %}

> Creates a filter definition that compares two string attribute values.

#### How It Works

This subnode sets up a condition that compares two string values. You can choose to compare either constant strings or values taken from point attributes. The comparison logic determines whether the two strings match exactly, differ, or meet specific length requirements. Based on this evaluation, points are either allowed to pass through or filtered out.

The comparison operation can be customized to check for exact matches, differences in string lengths, or even locale-aware ordering. When the "Swap Operands" option is enabled, the order of the values being compared is reversed, which helps invert certain logical checks like "contains" conditions.

#### Configuration

<details>

<summary><strong>Operand A</strong><br><em>First operand for comparison</em></summary>

Specifies the first value in the comparison. This can be an attribute name from your input data, which will be read as a string.

</details>

<details>

<summary><strong>Comparison</strong><br><em>Type of comparison to perform</em></summary>

Defines how the two values are evaluated. Options include:

* **Strictly Equal**: Checks if Operand A equals Operand B.
* **Strictly Not Equal**: Checks if Operand A does not equal Operand B.
* **Length Strictly Equal**: Compares the length of Operand A and Operand B.
* **Length Strictly Unequal**: Checks if the lengths are different.
* **Length Equal or Greater**: Checks if Operand A's length is greater than or equal to Operand B's.
* **Length Equal or Smaller**: Checks if Operand A's length is less than or equal to Operand B's.
* **Strictly Greater**: Compares the lengths, checking if Operand A's length is strictly greater.
* **Strictly Smaller**: Checks if Operand A's length is strictly smaller.
* **Locale Strictly Greater**: Compares strings using locale-aware ordering (e.g., alphabetical).
* **Locale Strictly Smaller**: Checks if Operand A's string comes before Operand B's in locale order.

</details>

<details>

<summary><strong>Compare Against</strong><br><em>Type of second operand</em></summary>

Determines whether the second value is a constant string or an attribute from the input data.

**Values**:

* **Constant**: Second value is a user-defined string.
* **Attribute**: Second value is read from an attribute in the input data.

</details>

<details>

<summary><strong>Operand B (Attr)</strong><br><em>Attribute to use for second operand</em></summary>

If "Compare Against" is set to "Attribute", this field specifies which attribute to use for Operand B.

</details>

<details>

<summary><strong>Operand B</strong><br><em>Constant string value for second operand</em></summary>

If "Compare Against" is set to "Constant", this field allows you to define the constant string used as Operand B.

</details>

<details>

<summary><strong>Swap Operands</strong><br><em>Reverse the order of operands</em></summary>

When enabled, swaps the order of Operand A and Operand B in the comparison. This can be helpful for inverting certain logical conditions.

</details>

#### Usage Example

You want to filter points where a label attribute matches a specific string. Set Operand A to the label attribute name, Operand B to "TargetLabel", and Comparison to "Strictly Equal". This will pass only those points where the label equals "TargetLabel".

Alternatively, you could use this to filter out points with labels shorter than 5 characters by setting Operand A to a label attribute, Operand B to 5, and using the "Length Equal or Greater" comparison.

#### Notes

* The string comparison is case-sensitive.
* When comparing lengths, the actual string content does not matter — only the number of characters.
* For locale-aware comparisons, ensure that your data supports proper localization settings.
