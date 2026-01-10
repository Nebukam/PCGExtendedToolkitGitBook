---
description: 'In editor :: PCGEx | Match : Tags × Attributes'
icon: circle-dashed
---

# Tags × Attributes

{% hint style="info" %}
This page was generated from the source code. It should properly capture what the node does, but still needs to be proofread by a human.
{% endhint %}

> Compares attribute values on targets against tags on inputs to determine matches.

#### How It Works

This node evaluates whether a target element matches an input tag based on two criteria:

1. The **tag name** must match
2. Optionally, the **tag value** must also match according to a comparison rule

It reads tag names from either a constant string or an attribute on the input data. Then it compares this against tags present on the target elements. If a tag name matches and the optional value comparison passes, the match is considered successful.

The matching process supports both exact and partial string matching for tag names, and numeric or string comparisons for tag values when enabled.

#### Configuration

<details>

<summary><strong>Tag Name Input</strong><br><em>Type of Tag Name value.</em></summary>

Controls whether the tag name is a constant string or read from an attribute.

**Values**:

* **Constant**: Use the value specified in "Tag Name"
* **Attribute**: Read the tag name from the attribute specified in "Tag Name (Attr)"

</details>

<details>

<summary><strong>Tag Name (Attr)</strong><br><em>Attribute to read tag name value from.</em></summary>

The attribute to read the tag name from when "Tag Name Input" is set to "Attribute".

</details>

<details>

<summary><strong>Tag Name</strong><br><em>Constant tag name value.</em></summary>

The constant tag name used when "Tag Name Input" is set to "Constant".

</details>

<details>

<summary><strong>Match</strong><br><em>How tag names are compared.</em></summary>

Defines how the tag name from input data is matched against tag names on targets.

**Values**:

* **Equals**: Exact match
* **Contains**: Input tag name must be contained within target tag name
* **Starts With**: Input tag name must start with target tag name
* **Ends With**: Input tag name must end with target tag name

</details>

<details>

<summary><strong>Do Value Match</strong><br><em>Whether to do a tag value match or not.</em></summary>

When enabled, the node also compares the values of matching tags.

</details>

<details>

<summary><strong>Value Type</strong><br><em>Expected value type, this is a strict check.</em></summary>

Specifies whether to compare numeric or string values when "Do Value Match" is enabled.

**Values**:

* **Numeric**: Compare as numbers
* **String**: Compare as text

</details>

<details>

<summary><strong>Value Attribute</strong><br><em>Attribute to read tag name value from.</em></summary>

The attribute on the target data that contains the value to compare when "Do Value Match" is enabled.

</details>

<details>

<summary><strong>Comparison</strong><br><em>Comparison for numeric values.</em></summary>

How numeric values are compared when "Value Type" is set to Numeric and "Do Value Match" is enabled.

**Values**:

* **Equal**: Values must be exactly equal
* **Not Equal**: Values must not be equal
* **Greater Than**: First value must be greater than second
* **Less Than**: First value must be less than second
* **Greater Or Equal**: First value must be greater or equal to second
* **Less Or Equal**: First value must be less or equal to second
* **Nearly Equal**: Values are considered equal within tolerance
* **Nearly Not Equal**: Values are considered not equal within tolerance

</details>

<details>

<summary><strong>Tolerance</strong><br><em>Near-equality tolerance.</em></summary>

The tolerance used when comparing numeric values with "Nearly Equal" or "Nearly Not Equal".

</details>

<details>

<summary><strong>Comparison</strong><br><em>Comparison for string values.</em></summary>

How string values are compared when "Value Type" is set to String and "Do Value Match" is enabled.

**Values**:

* **Strictly Equal**: Strings must be exactly equal
* **Strictly Not Equal**: Strings must not be equal
* **Length Strictly Equal**: Strings must have the same length
* **Length Strictly Unequal**: Strings must have different lengths
* **Length Equal Or Greater**: First string's length must be equal or greater than second
* **Length Equal Or Smaller**: First string's length must be equal or smaller than second
* **Strictly Greater**: First string must be lexicographically greater than second
* **Strictly Smaller**: First string must be lexicographically smaller than second
* **Locale Strictly Greater**: First string must be locale-awarely greater than second
* **Locale Strictly Smaller**: First string must be locale-awarely smaller than second

</details>

#### Usage Example

You have a set of points tagged with "EnemyType" and "Health". You want to match these against another set of points that are tagged with "TargetType" and "Damage".

1. Set "Tag Name Input" to "Attribute"
2. Set "Tag Name (Attr)" to "EnemyType"
3. Set "Match" to "Equals"
4. Enable "Do Value Match"
5. Set "Value Type" to "Numeric"
6. Set "Value Attribute" to "@Data.Damage"
7. Set "Comparison" to "Greater Than"

This will match enemy points with target points where the enemy type matches and the damage value is greater than the target's health.

#### Notes

* This node works best when tags are consistently formatted across input and target data
* When using "Do Value Match", ensure that the attribute values are of the correct type (numeric or string)
* The tolerance setting only applies to numeric comparisons with "Nearly Equal" or "Nearly Not Equal"
* Matching is case-sensitive by default
