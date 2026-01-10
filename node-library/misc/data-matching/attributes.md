---
description: 'In editor :: PCGEx | Match Attributes'
icon: circle-dashed
---

# Attributes

{% hint style="info" %}
This page was generated from the source code. It should properly capture what the node does, but still needs to be proofread by a human.
{% endhint %}

> Compares attribute values on targets against values from the @Data domain of candidate data.

#### Overview

This node enables you to match data points based on comparing attribute values. It's useful when you want to select or filter candidates based on how their attributes relate to those of target points. For example, you might want to find all points that have a specific value in an attribute, or points whose attribute values are within a certain range.

It works by reading an attribute from each target point and comparing it against the corresponding attribute value from candidate data. The comparison logic is defined by settings such as equality, inequality, or numeric tolerance. This node is commonly used in data matching workflows to filter or tag data based on attribute relationships.

{% hint style="info" %}
This subnode connects to **Match** nodes that support data matching.
{% endhint %}

#### How It Works

This node performs a per-target comparison between an attribute value from the target point and an attribute value from candidate data. It reads the specified attribute from each target point and compares it against the corresponding @Data domain attribute value of candidates.

The process works as follows:

1. For each target point, read the value of `TargetAttributeName`.
2. For each candidate data, read the value of `CandidateAttributeName` from its @Data domain.
3. Apply the comparison logic defined by `Check` and related settings (e.g., numeric equality, string length comparison).
4. If the comparison evaluates to true, the candidate is considered a match for that target point.

The node supports both numeric and string comparisons, with options to swap operands or define tolerance for floating-point comparisons. This allows flexible matching rules tailored to your specific data needs.

<details>

<summary>Inputs</summary>

* **Target Points**: The points whose attributes are used as the basis for comparison.
* **Candidate Data**: The data that contains the attribute values to compare against.

</details>

<details>

<summary>Outputs</summary>

* **Matched Results**: Points or data that meet the matching criteria based on attribute comparisons.

</details>

#### Configuration

<details>

<summary><strong>Candidate Attribute Name</strong><br><em>The attribute to read on the candidates (the data that's not used as target). Only support @Data domain, and will only try to read from there.</em></summary>

Specifies which attribute from candidate data should be used for comparison. This must be an attribute in the @Data domain.

</details>

<details>

<summary><strong>Target Attribute Name</strong><br><em>The attribute to read from on the targets. Depending on where the match operate, this can be read on a target point or data domain. If only data domain is supported, will read first element value.</em></summary>

Defines which attribute from the target points should be used for comparison. This can be a point attribute or a @Data domain attribute.

</details>

<details>

<summary><strong>Check</strong><br><em>How should the data be compared.</em></summary>

Determines whether to compare values as numeric or string types.

**Values**:

* **Numeric**: Compare using numeric operators.
* **String**: Compare using string operators.

</details>

<details>

<summary><strong>Numeric Comparison</strong><br><em>Comparison</em></summary>

Controls how numeric values are compared when `Check` is set to Numeric.

**Values**:

* **Strictly Equal**: Values must be exactly equal.
* **Strictly Not Equal**: Values must not be equal.
* **Nearly Equal**: Values must be within tolerance.
* **Nearly Not Equal**: Values must differ by more than tolerance.
* **Greater Than**: First value is greater than second.
* **Less Than**: First value is less than second.
* **Greater Or Equal**: First value is greater or equal to second.
* **Less Or Equal**: First value is less or equal to second.

</details>

<details>

<summary><strong>Tolerance</strong><br><em>Rounding mode for near measures</em></summary>

Used when `NumericComparison` is set to Nearly Equal or Nearly Not Equal. Defines how close numeric values must be to be considered equal.

</details>

<details>

<summary><strong>String Comparison</strong><br><em>Comparison</em></summary>

Controls how string values are compared when `Check` is set to String.

**Values**:

* **Strictly Equal**: Strings must be exactly the same.
* **Strictly Not Equal**: Strings must not be equal.
* **Length Strictly Equal**: Strings must have the same length.
* **Length Strictly Unequal**: Strings must have different lengths.
* **Length Equal Or Greater**: First string's length is greater or equal to second.
* **Length Equal Or Smaller**: First string's length is smaller or equal to second.
* **Strictly Greater**: First string is lexicographically greater than second.
* **Strictly Smaller**: First string is lexicographically smaller than second.
* **Locale Strictly Greater**: First string is greater in locale-aware comparison.
* **Locale Strictly Smaller**: First string is smaller in locale-aware comparison.

</details>

<details>

<summary><strong>Swap Operands</strong><br><em>If enabled, will swap operands during check</em></summary>

When enabled, the order of operands in the comparison is reversed. For example, if comparing A == B, it becomes B == A.

</details>

#### Usage Example

You have a set of points representing players and another set of data representing items. You want to match players with items based on a shared attribute like "PlayerLevel" and "RequiredLevel". Use this node to compare the player's level against the item's required level, filtering for matches where the player can use the item.

#### Notes

* This node is designed to work in matching workflows where you need to define how points relate to candidate data.
* Ensure that the attribute names specified exist and are compatible with the data types being compared.
* When using string comparisons, consider locale settings for consistent behavior across platforms.
