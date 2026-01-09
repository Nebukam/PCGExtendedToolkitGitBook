---
description: 'In editor :: PCGEx | Edge Filter : Endpoints Compare (String)'
icon: circle-dashed
---

# Endpoints Compare (String)

{% hint style="info" %}
This page was generated from the source code. It should properly capture what the node does, but still needs to be proofread by a human.
{% endhint %}

> Compare the value of an attribute on each of the edge endpoint.

#### Overview

This subnode filters edges based on a comparison between the string values of a specified attribute at both endpoints of the edge. It's useful for creating conditions that depend on matching or differing text data between connected points.

It connects to **Filter** pins on processing nodes, such as those in graph filtering or clustering workflows.

#### How It Works

This subnode evaluates each edge by retrieving the string value of a specified attribute from both the start and end points of the edge. It then applies a comparison operation between these two values to determine whether the edge should pass the filter.

The comparison can be based on:

* Exact string equality or inequality
* Length-based comparisons (e.g., one string is longer than another)
* Locale-aware ordering (e.g., alphabetical order)

If the comparison evaluates to true, the edge passes the filter and is included in downstream processing. If false, it is excluded.

<details>

<summary>Inputs</summary>

Expects an input graph with points that have a string attribute defined at both endpoints of edges.

</details>

<details>

<summary>Outputs</summary>

Filters edges based on the comparison result between endpoint attributes. Edges that meet the criteria pass through; others are filtered out.

</details>

#### Configuration

***

**Attribute**

_The attribute to compare._

Specifies which string attribute from the edge endpoints will be used for the comparison.

**Comparison**

_The type of comparison to perform._

Defines how the two string values are compared:

* **StrictlyEqual**: The strings must match exactly.
* **StrictlyNotEqual**: The strings must not match exactly.
* **LengthStrictlyEqual**: The length of the strings must be equal.
* **LengthStrictlyUnequal**: The length of the strings must not be equal.
* **LengthEqualOrGreater**: The first string's length must be greater than or equal to the second.
* **LengthEqualOrSmaller**: The first string's length must be less than or equal to the second.
* **StrictlyGreater**: The first string's length must be strictly greater than the second.
* **StrictlySmaller**: The first string's length must be strictly smaller than the second.
* **LocaleStrictlyGreater**: The first string is lexicographically greater than the second using locale-aware comparison.
* **LocaleStrictlySmaller**: The first string is lexicographically smaller than the second using locale-aware comparison.

**bInvert**

_When enabled, the result of the comparison is inverted._

If enabled, edges that would normally pass the filter will be excluded, and those that would fail will pass.

#### Usage Example

You have a graph where each point has a "Name" attribute containing a string. You want to keep only edges where both endpoints have names of the same length. Set the **Attribute** to "Name", **Comparison** to "LengthStrictlyEqual", and leave **bInvert** disabled.

#### Notes

* This filter works on string attributes only.
* The comparison logic is applied per edge, so each edge's start and end points are evaluated independently.
* When using locale-aware comparisons, the system uses the current locale settings for sorting.
