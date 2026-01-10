---
description: 'In editor :: PCGEx | Data Filter : Attribute Check'
icon: circle-dashed
---

# Attribute Check

{% hint style="warning" %}
This page was generated from the source code. It captures what the node does, but still needs some serious  proofreading.
{% endhint %}

> Checks for the existence and optionally the type of a point attribute.

#### How It Works

This subnode examines each point in your data to see if it has a specific attribute defined. It first checks whether an attribute with the given name exists on the point. If you've enabled domain validation, it also verifies that the attribute is located in the correct area (Data, Elements, or Match). Optionally, it can confirm that the attribute matches a certain data type.

If the invert toggle is enabled, the logic is reversed — points that would normally pass now fail, and vice versa.

#### Configuration

<details>

<summary><strong>Attribute Name</strong><br><em>Constant tag name value.</em></summary>

Specifies the name of the attribute to check for on each point. For example, setting this to "Color" will look for a point attribute named "Color".

</details>

<details>

<summary><strong>Domain</strong><br><em>Check where the attribute is defined.</em></summary>

Determines how strictly to validate the attribute's domain:

* **Any**: Ignores domain check and accepts any matching attribute.
* **Data**: Only accepts attributes in the Data domain.
* **Elements**: Only accepts attributes in the Elements domain.
* **Match**: Requires the attribute name to include a domain prefix (e.g., "Data::MyAttribute").

</details>

<details>

<summary><strong>Match</strong><br><em>How to compare the attribute name.</em></summary>

Defines how to match the attribute name:

* **Equals**: The attribute name must exactly match.
* **Contains**: The attribute name must contain the specified string.
* **Starts with**: The attribute name must start with the specified string.
* **Ends with**: The attribute name must end with the specified string.

</details>

<details>

<summary><strong>Check Type</strong><br><em>Whether to validate the attribute's data type.</em></summary>

When enabled, this checks that the attribute matches a specific data type. If disabled, only existence is checked.

</details>

<details>

<summary><strong>Type</strong><br><em>The expected data type of the attribute.</em></summary>

If "Check Type" is enabled, this defines what type the attribute must be. For example, selecting "Integer" will ensure that the attribute is an integer type.

</details>

<details>

<summary><strong>Invert</strong><br><em>Invert the result of this filter.</em></summary>

When enabled, points that would normally pass the filter are instead filtered out, and vice versa.

</details>

#### Usage Example

Suppose you want to process only those points that have a "Health" attribute of type Integer. You would configure this subnode as follows:

* Set **Attribute Name** to "Health"
* Set **Domain** to "Any"
* Enable **Check Type**
* Set **Type** to "Integer"
* Leave **Invert** disabled

This ensures only points with an integer "Health" attribute are passed through.

#### Notes

* The domain check is useful when working with complex point data that separates attributes into different domains.
* Combining this filter with other filters allows for fine-grained control over which points proceed in a graph.
* Performance is generally good, but large datasets with many attribute checks may slow down processing.
