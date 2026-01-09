---
description: 'In editor :: PCGEx | Edge Filter : Endpoints Compare (String)'
icon: circle-dashed
---

# Endpoints Compare (String)

{% hint style="danger" %}
This documentation has been AI-generated from the source code and may not be 100% accurate.
{% endhint %}

> Compares string values from an attribute on the endpoints of each edge in a graph.

### Overview

This filter factory tests whether the string values of a specified attribute on the two endpoints of an edge meet a given comparison condition. It's used to selectively keep or discard edges based on how their endpoint attributes relate to each other.

{% hint style="info" %}
Connects to **Filter** pins on edge processing nodes like **Edge Split**, **Edge Filter**, or **Edge Generator**.
{% endhint %}

### How It Works

This filter evaluates the string values of a chosen attribute at both endpoints of an edge. It then applies a comparison operation between these two values and determines whether the edge should pass or fail the filter based on that result.

For example, you can use this to:

* Keep only edges where both endpoints have the same attribute value
* Keep only edges where one endpoint's attribute contains the other's
* Keep only edges where the length of an attribute differs by a certain amount

### Inputs and Outputs

#### Inputs

* **Graph**: Input graph containing edges to filter
* **Attribute**: String attribute to compare on each edge's endpoints
* **Comparison**: Comparison operation to apply between string values
* **Invert**: Toggle to reverse the comparison result

#### Outputs

* **Filter**: Filter output that can be connected to downstream nodes

### Configuration

***

#### General

**Attribute**

_The string attribute to compare on each edge's endpoints._

Specify which attribute from the point data should be used for comparison. The filter will read this attribute from both the start and end points of each edge.

**Comparison**

_How to compare the two string values._

**Values:**

* **==**: Values must be exactly equal
* **!=**: Values must not be exactly equal
* **== (Length)**: Lengths of the strings must be equal
* **!= (Length)**: Lengths of the strings must not be equal
* **>= (Length)**: First string's length must be greater than or equal to second's
* **<= (Length)**: First string's length must be less than or equal to second's
* **> (Length)**: First string's length must be strictly greater than second's
* **< (Length)**: First string's length must be strictly less than second's
* **> (Locale)**: First string is locale-greater than second
* **< (Locale)**: First string is locale-less than second
* **Contains**: First string contains the second as a substring
* **Starts With**: First string starts with the second
* **Ends With**: First string ends with the second

**Invert**

_When enabled, the result of the comparison is flipped._

When enabled, edges that would normally pass the filter will fail, and vice versa. This allows you to negate any comparison condition.

### Usage Example

You're building a graph representing connections between cities, where each city has a "Region" attribute. You want to keep only edges where both connected cities are in the same region.

1. Set **Attribute** to "Region"
2. Set **Comparison** to **==**
3. Leave **Invert** disabled

This will filter your graph so that only edges connecting cities within the same region remain.

### Notes

* The filter works on point attributes, not edge attributes
* If an attribute is missing from either endpoint, the edge will be handled according to the factory's error handling settings
* For length-based comparisons, the comparison is done on the character count of the strings
* When using **Contains**, **Starts With**, or **Ends With**, the comparison is case-sensitive
* The **Invert** option provides a quick way to negate any comparison without changing the operation itself
