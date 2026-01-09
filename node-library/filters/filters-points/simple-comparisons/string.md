---
description: 'In editor :: PCGEx | Filter : Compare (String)'
icon: circle-dashed
---

# String

{% hint style="info" %}
This page was generated from the source code. It should properly capture what the node does, but still needs to be proofread by a human.
{% endhint %}

> Creates a filter definition that compares two string attribute values.

#### Overview

This subnode defines a filtering condition based on comparing two string values. It's used to determine whether points in a dataset meet specific text-based criteria, such as matching or differing in length. You can compare an attribute from the point data against either another attribute or a constant string value.

It connects to the **Filter** input pin of processing nodes that support point filtering. Multiple filter subnodes can be combined to create more complex filtering logic.

{% hint style="info" %}
Connects to the **Filter** pin of processing nodes (e.g., Point Filter, Path Filter).
{% endhint %}

#### How It Works

This subnode evaluates a comparison between two string operands for each point. The first operand (Operand A) is always read from an attribute on the input data. The second operand (Operand B) can be either another attribute or a constant string value, depending on the **CompareAgainst** setting.

The comparison logic depends on the selected **Comparison** type:

* For strict comparisons (`==`, `!=`), it checks if the strings are exactly equal or not.
* For length-based comparisons (`>= (Length)`, `< (Length)`), it compares the number of characters in each string.
* For locale-aware comparisons (`> (Locale)`, `< (Locale)`), it performs a lexicographical comparison based on system locale settings.

If **bSwapOperands** is enabled, the order of operands is reversed before the comparison is made. This can be useful for inverting certain conditions like "contains" checks.

<details>

<summary>Inputs</summary>

Expects point data with attributes that match the names specified in Operand A and Operand B (if using attribute mode).

</details>

<details>

<summary>Outputs</summary>

Produces a filter definition that can be consumed by point filtering nodes to determine which points pass or fail the comparison.

</details>

#### Configuration

***

**Operand A**

_The first string operand, read from an attribute on the input data._

This defines the source of the first string value for comparison. It must match an existing attribute name in your input data.

**Comparison**

_The type of comparison to perform between the two operands._

**Values**:

* **==**: Checks if Operand A is strictly equal to Operand B.
* **!=**: Checks if Operand A is strictly not equal to Operand B.
* **== (Length)**: Checks if the length of Operand A equals the length of Operand B.
* **!= (Length)**: Checks if the length of Operand A does not equal the length of Operand B.
* **>= (Length)**: Checks if the length of Operand A is greater than or equal to the length of Operand B.
* **<= (Length)**: Checks if the length of Operand A is less than or equal to the length of Operand B.
* **> (Length)**: Checks if the length of Operand A is strictly greater than the length of Operand B.
* **< (Length)**: Checks if the length of Operand A is strictly smaller than the length of Operand B.
* **> (Locale)**: Performs a locale-aware lexicographical comparison, checking if Operand A is greater than Operand B.
* **< (Locale)**: Performs a locale-aware lexicographical comparison, checking if Operand A is smaller than Operand B.

**Compare Against**

_Determines whether Operand B reads from an attribute or uses a constant value._

**Values**:

* **Constant**: Operand B will use the value set in **Operand B**.
* **Attribute**: Operand B will read from an attribute on the input data, specified by **Operand B (Attr)**.

**Operand B (Attr)**

_The second string operand, read from an attribute on the input data._

Only visible when **Compare Against** is set to **Attribute**. This defines the source of the second string value for comparison.

**Operand B**

_The second string operand, used as a constant value._

Only visible when **Compare Against** is set to **Constant**. This sets the fixed string value for Operand B.

**Swap Operands**

_When enabled, reverses the order of operands before performing the comparison._

Useful for inverting certain comparisons or changing how "contains" checks are interpreted.

#### Usage Example

You have a point cloud with an attribute named `ObjectName` and want to filter points where the object name is longer than 10 characters. Set:

* Operand A = `ObjectName`
* Comparison = `>= (Length)`
* Compare Against = `Constant`
* Operand B = `10`

This will pass all points where the length of `ObjectName` is greater than or equal to 10.

#### Notes

* The comparison logic treats empty strings as valid inputs.
* For locale-aware comparisons, results may vary based on system language settings.
* When using attribute-based operands, ensure the attributes exist and are of string type in your input data.
* Combining multiple filter subnodes allows for complex filtering rules.
