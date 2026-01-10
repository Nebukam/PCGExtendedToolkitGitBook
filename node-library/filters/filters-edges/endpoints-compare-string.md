---
description: 'In editor :: PCGEx | Edge Filter : Endpoints Compare (String)'
icon: circle-dashed
---

# Endpoints Compare (String)

{% hint style="warning" %}
This page was generated from the source code. It captures what the node does, but still needs some serious  proofreading.
{% endhint %}

> Compare the value of an attribute on each of the edge endpoint.

#### Overview

This subnode filters edges based on a comparison between the values of a specified string attribute at both endpoints of each edge. It's useful for creating conditions that depend on how data at the start and end points of an edge relate to each other, such as ensuring two points have matching names or that one point's name is longer than another's.

It connects to Filter pins on processing nodes to define which edges should pass through a filter.

{% hint style="info" %}
Connects to **Filter** pins on processing nodes.
{% endhint %}

#### How It Works

This subnode evaluates each edge by retrieving the value of a specified string attribute from both the start and end points of the edge. It then performs a comparison operation between these two values, based on the selected comparison type. If the comparison condition is met, the edge passes through the filter; otherwise, it's rejected.

The comparison logic depends on the selected **Comparison** mode:

* For **StrictlyEqual**, **StrictlyNotEqual**, and **Length** variants, it compares either the actual string values or their lengths.
* For **LengthEqualOrGreater**, **LengthEqualOrSmaller**, **StrictlyGreater**, and **StrictlySmaller**, it compares the length of the strings.
* For **LocaleStrictlyGreater** and **LocaleStrictlySmaller**, it performs a locale-aware comparison of the string values.

When **bInvert** is enabled, the result of the comparison is flipped — an edge that would normally pass now fails, and vice versa.

<details>

<summary>Inputs</summary>

Expects edges with associated point data containing the specified attribute.

</details>

<details>

<summary>Outputs</summary>

Filters edges based on the comparison between endpoint attribute values.

</details>

#### Configuration

<details>

<summary><strong>Attribute</strong><br><em>Attribute to compare.</em></summary>

Selects which string attribute to retrieve from both endpoints of each edge for comparison.

</details>

<details>

<summary><strong>Comparison</strong><br><em>Comparison check.</em></summary>

Defines how the two attribute values are compared:

* **StrictlyEqual**: Values must be exactly identical.
* **StrictlyNotEqual**: Values must not be identical.
* **LengthStrictlyEqual**: Lengths of the strings must be equal.
* **LengthStrictlyUnequal**: Lengths of the strings must not be equal.
* **LengthEqualOrGreater**: First string's length must be greater than or equal to the second.
* **LengthEqualOrSmaller**: First string's length must be less than or equal to the second.
* **StrictlyGreater**: First string's length must be strictly greater than the second.
* **StrictlySmaller**: First string's length must be strictly smaller than the second.
* **LocaleStrictlyGreater**: First string must be greater than the second according to locale rules.
*
  * **LocaleStrictlySmaller**: First string must be smaller than the second according to locale rules.

</details>

<details>

<summary><strong>bInvert</strong><br><em>When enabled, inverts the result of the comparison.</em></summary>

When enabled, edges that would normally pass the filter are rejected, and those that would fail are accepted.

</details>

#### Usage Example

Suppose you're generating a network of cities connected by roads, and each city has a name stored as a string attribute. You want to only keep roads where both cities have names of equal length. You would:

1. Add this subnode to your graph.
2. Set the **Attribute** to the city name field.
3. Choose **LengthStrictlyEqual** for **Comparison**.
4. Connect it to a filter pin on a processing node like "Filter Edges".

This ensures only roads connecting cities with names of the same character count are included in the output.

#### Notes

* The attribute must exist on both endpoints of each edge for comparison to occur.
* If an edge's endpoint lacks the specified attribute, the edge is typically rejected unless handled otherwise by upstream logic.
* Using **bInvert** can be helpful for creating exclusion rules or negating conditions.
