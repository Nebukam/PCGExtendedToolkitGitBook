---
description: 'In editor :: PCGEx | Data Filter : Tag Value'
icon: circle-dashed
---

# Tag Value

{% hint style="info" %}
This page was generated from the source code. It should properly capture what the node does, but still needs to be proofread by a human.
{% endhint %}

> Tests whether point tags match specified values using numeric or string comparisons.

#### How It Works

This subnode checks if the value of a specified tag on points matches certain criteria. It can compare both numbers and text, making it flexible for different filtering needs. The subnode evaluates all tags with the same name on each point and determines whether they meet the set conditions using either OR or AND logic.

When processing a point:

1. It looks up all tags that match the specified name
2. For each matching tag, it compares the tag's value against the comparison value using the selected operation
3. If any match passes (in OR mode) or all matches pass (in AND mode), the subnode returns true
4. Optionally, the result can be inverted before being passed on

This allows you to create precise selection rules based on tag content that can be combined with other filters to build complex point selection logic.

#### Configuration

<details>

<summary><strong>Tag Name</strong><br><em>Constant tag name value.</em></summary>

Specifies which tag to check on each point. For example, setting this to "Health" will evaluate the "Health" tag value for each point.

</details>

<details>

<summary><strong>Match</strong><br><em>OR only requires a single match to pass, AND requires all matches to pass.</em></summary>

Controls how multiple matching tags are evaluated:

* **Equals**: Only one tag must match
* **Contains**: Only one tag must contain the operand string
* **StartsWith**: Only one tag must start with the operand string
* **EndsWith**: Only one tag must end with the operand string

</details>

<details>

<summary><strong>Expected Value Type</strong><br><em>Expected value type, this is a strict check.</em></summary>

Determines whether to compare numeric or string values:

* **Numeric**: Compares tag values as numbers
* **String**: Compares tag values as text

</details>

<details>

<summary><strong>Comparison</strong><br><em>Comparison</em></summary>

The comparison operation to perform when evaluating numeric values:

* **==**: Equal to operand B
* **!=**: Not equal to operand B
* **>**: Greater than operand B
* **<**: Less than operand B
* **>=**: Greater or equal to operand B
* **<=**: Less or equal to operand B
* **Nearly Equal**: Equal within tolerance
* **Nearly Not Equal**: Not equal within tolerance

</details>

<details>

<summary><strong>Comparison</strong><br><em>Comparison</em></summary>

The comparison operation to perform when evaluating string values:

* **==**: Strictly equal to operand B
* **!=**: Strictly not equal to operand B
* **== (Length)**: Equal in length to operand B
* **!= (Length)**: Not equal in length to operand B
* **>= (Length)**: Equal or greater in length than operand B
* **<= (Length)**: Equal or smaller in length than operand B
* **> (Length)**: Strictly greater in length than operand B
* **< (Length)**: Strictly smaller in length than operand B
* **> (Locale)**: Locale strictly greater than operand B
* **< (Locale)**: Locale strictly smaller than operand B
* **Contains**: Contains operand B as substring
* **Starts With**: Starts with operand B
* **Ends With**: Ends with operand B

</details>

<details>

<summary><strong>Multi-Match</strong><br><em>OR only requires a single match to pass, AND requires all matches to pass.</em></summary>

Controls how multiple matching tags are evaluated:

* **AND**: All matching tags must pass the comparison
* **OR**: At least one matching tag must pass the comparison

</details>

<details>

<summary><strong>Invert Result</strong><br><em>Invert the result of this filter.</em></summary>

When enabled, the subnode returns the opposite boolean result. If a point would normally pass, it will now fail, and vice versa.

</details>

#### Usage Example

A game designer wants to select all points that are tagged with "Enemy" and have a health value greater than 50.

1. Create a **Data Filter : Tag Value** subnode
2. Set **Tag Name** to "Health"
3. Set **Expected Value Type** to **Numeric**
4. Set **Comparison** to **>**
5. Set **Operand B (Numeric)** to 50
6. Connect this filter to a processing node that expects a Filter input
7. The subnode will now only pass points with a "Health" tag value greater than 50

#### Notes

* This subnode can match multiple tags with the same name, which is useful when working with point collections that have repeated tags.
* When using **String** comparison types, be careful about case sensitivity and special characters.
* The tolerance setting for numeric comparisons is only used when comparing near-equality.
