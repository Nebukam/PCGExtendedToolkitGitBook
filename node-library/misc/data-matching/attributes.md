---
description: 'In editor :: PCGEx | Match Attributes'
icon: circle-dashed
---

# Attributes

{% hint style="info" %}
### AI-generated page -- to be reviewed

While not 100% accurate, it should properly capture what the node/factory does. It stills needs to be proofread by a human.
{% endhint %}

> Compares attribute values from target points against values in the @Data domain.

### Overview

This node allows you to match data based on comparing attributes between targets and the @Data input. It's useful for filtering or selecting specific elements from a dataset by comparing their attribute values.

For example, you might want to select all points where a "Type" attribute equals a value in your @Data domain, or find points whose "Health" value matches a specific threshold.

{% hint style="info" %}
This node works with both numeric and string attributes. It supports various comparison operators depending on the data type.
{% endhint %}

<details>

<summary>Inputs</summary>

* **Target Points**: Points to be tested for matching conditions
* **@Data**: Data domain containing values to compare against

</details>

<details>

<summary>Outputs</summary>

* **Match Rule**: A match rule that can be used with other matching nodes

</details>

### Properties Overview

Settings for defining how attribute comparisons are performed.

***

#### General

Controls the core matching behavior.

**Candidate Attribute Name**

_The attribute to read from candidate points (the data not used as target)._

* Only supports @Data domain
* Defaults to "Key"
* Example: If you have a point with an attribute named "ID", set this to "ID"

**Target Attribute Name**

_The attribute to read from target points._

* Can be any attribute on the target points
* Defaults to "@Data.Value"
* Example: If your targets have an attribute called "Type", set this to "Type"

**Check Type**

_How the data should be compared._

* **Numeric**: Compare numeric values using numeric operators
* **String**: Compare string values using string operators

**Numeric Comparison**

_The type of numeric comparison to perform._

* Only visible when Check Type is set to Numeric
* Options:
  * **==**: Strictly equal
  * **!=**: Strictly not equal
  * **\~=**: Nearly equal (within tolerance)
  * **\~!=**: Nearly not equal (outside tolerance)
  * **>**: Strictly greater than
  * **<**: Strictly less than
  * **>=**: Greater than or equal
  * **<=**: Less than or equal

**String Comparison**

_The type of string comparison to perform._

* Only visible when Check Type is set to String
* Options:
  * **==**: Strictly equal
  * **!=**: Strictly not equal
  * **== (Length)**: Length strictly equal
  * **!= (Length)**: Length strictly not equal
  * **>= (Length)**: Length equal or greater
  * **<= (Length)**: Length equal or smaller
  * **> (Length)**: Length strictly greater
  * **< (Length)**: Length strictly smaller
  * **> (Locale)**: Locale strictly greater
  * **< (Locale)**: Locale strictly smaller
  * **Contains**: Operand A contains Operand B
  * **Starts With**: Operand A starts with Operand B
  * **Ends With**: Operand A ends with Operand B

**Tolerance**

_Tolerance for near numeric comparisons._

* Only visible when Numeric Comparison is set to Nearly Equal or Nearly Not Equal
* Defaults to DBL\_COMPARE\_TOLERANCE (typically 1e-9)
* Example: If comparing if a value is nearly equal to 5.0, values within ±0.000000001 will be considered equal

**Swap Operands**

_When enabled, swaps the order of operands during comparison._

* If enabled, compares Target Attribute against Candidate Attribute instead of Candidate Attribute against Target Attribute
* Useful when you want to check if a target value exists in a candidate set or vice versa
