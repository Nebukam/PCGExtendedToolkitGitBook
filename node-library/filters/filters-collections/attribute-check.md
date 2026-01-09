---
description: 'In editor :: PCGEx | Data Filter : Attribute Check'
icon: circle-dashed
---

# Attribute Check

{% hint style="warning" %}
## AI-generated page -- to be reviewed 
While not 100% accurate, it should properly capture what the node/factory does. It stills needs to be proofread by a human.
{% endhint %}

> Attribute existence check.

### Overview

This filter tests whether a specified attribute exists on points in the input data. It's commonly used to validate that required data is present before processing points further in a PCG graph.

{% hint style="info" %}
Connects to **Filter** pins on processing nodes like **Point Filter**, **Point Switch**, or **Attribute Transfer**
{% endhint %}

### How It Works

This filter checks if a point has an attribute with the specified name. If the attribute exists, the point passes the filter; otherwise, it fails.

The filter can also check the attribute's data type and perform string matching on the attribute name itself when configured to do so.

### Configuration

***

#### General

**Attribute Name**

_The name of the attribute to look for._

When a point has an attribute with this exact name, it passes the filter. For example, if you set this to "Color", only points that have a "Color" attribute will pass.

**Domain**

_How to interpret the attribute domain when checking for existence._

* **Any**: Ignore domain check - simply look for any attribute with the given name regardless of its domain.
* **Data**: Check data domain - only consider attributes in the Data domain.
* **Elements**: Check elements domain - only consider attributes in the Elements domain.
* **Match**: Domains must match (must be set as part of the attribute name) - the attribute name must include the domain prefix like "Data::MyAttribute" or "Elements::MyAttribute".

**Match**

_How to compare the attribute name._

This setting controls how the filter interprets the attribute name. It's useful when you want to match attributes by partial names.

* **Equals**: The attribute name must exactly match the specified name.
* **Contains**: The attribute name must contain the specified string.
* **Starts with**: The attribute name must start with the specified string.
* **Ends with**: The attribute name must end with the specified string.

**Do Check Type**

_When enabled, also verify that the attribute is of the expected type._

Enable this to ensure not only that an attribute exists but also that it's of a specific data type. This helps prevent errors in downstream processing steps that expect certain types of data.

**Type**

_The expected data type of the attribute._

This setting is only active when "Do Check Type" is enabled. It specifies what kind of data the attribute should contain.

**Invert**

_When enabled, reverse the result of this filter._

If enabled, points that would normally pass now fail, and vice versa. This can be useful for excluding specific attributes rather than including them.

### Usage Example

You're building a graph that processes vegetation points with different types of data. You want to ensure all points have a "Height" attribute before applying scaling operations.

1. Add the **Data Filter : Attribute Check** node
2. Set **Attribute Name** to "Height"
3. Leave **Domain** as "Any" (since you don't care which domain it's in)
4. Set **Match** to "Equals"
5. Enable **Do Check Type** and set **Type** to "Float"
6. Connect this filter to a **Point Filter** node
7. All points with a valid "Height" attribute will pass through, while those missing the attribute or with an incorrect type will be filtered out

### Notes

* This filter is particularly useful for validating data integrity in complex PCG workflows
* Combining multiple attribute checks allows you to create more sophisticated validation rules
* When using "Match" modes, be careful about case sensitivity and special characters in attribute names
* The "Invert" option can help you build exclusion logic without needing separate filter nodes
