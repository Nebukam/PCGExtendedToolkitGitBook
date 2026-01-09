---
description: 'In editor :: PCGEx | Data Filter : Attribute Check'
icon: circle-dashed
---

# Attribute Check

{% hint style="info" %}
This page was generated from the source code. It should properly capture what the node does, but still needs to be proofread by a human.
{% endhint %}

> Checks if points have a specific attribute defined.

#### Overview

This subnode filters points based on whether they contain a particular attribute. It helps ensure that only points with required data move forward in your procedural graph, preventing errors or unexpected behavior when working with optional or conditional attributes.

It connects to the **Filter** pin of processing nodes that support filtering, allowing you to define which points should pass through based on attribute presence.

#### How It Works

This subnode evaluates each point to determine if it contains a specified attribute. It performs two main checks:

1. **Attribute Existence**: It first verifies whether an attribute with the given name exists on the point.
2. **Domain Matching (Optional)**: If domain checking is enabled, it also ensures that the attribute's domain matches the configured setting (Data, Elements, or Match).

If the point passes all checks, it is considered to match the filter and will be included in the output of the connected processing node.

<details>

<summary>Inputs</summary>

Expects a collection of points with optional attributes.

</details>

<details>

<summary>Outputs</summary>

Filters the input point collection based on attribute existence and domain matching criteria.

</details>

#### Configuration

***

**Attribute Name**

_The name of the attribute to check for._

This is the exact string used to identify the attribute. For example, if you set this to "Color", the filter will only pass points that have an attribute named "Color".

**Domain**

_Domain matching behavior._

Controls how strictly the filter checks the attribute's domain:

* **Any**: Ignores domain check and accepts any matching attribute.
* **Data**: Only passes points where the attribute is defined in the Data domain.
* **Elements**: Only passes points where the attribute is defined in the Elements domain.
* **Match**: Requires that the attribute name includes a domain specifier (e.g., "Data::MyAttribute" or "Elements::MyAttribute") and matches exactly.

**Match**

_Matching method for the attribute name._

Defines how to compare the attribute name:

* **Equals**: The attribute name must match exactly.
* **Contains**: The attribute name must contain the specified string.
* **Starts with**: The attribute name must start with the specified string.
* **Ends with**: The attribute name must end with the specified string.

**bDoCheckType**

_When enabled, checks the attribute's data type._

If enabled, this setting ensures that the attribute not only exists but also matches a specific data type. This adds an extra layer of validation to your filter.

**Type**

_Data type to match against._

Only used when **bDoCheckType** is enabled. Specifies the expected data type of the attribute (e.g., Integer, Float, Vector, etc.). Points with attributes of different types will fail this check.

**bInvert**

_When enabled, inverts the result of this filter._

If enabled, points that would normally pass the filter (i.e., those with the specified attribute) will instead be filtered out. Conversely, points without the attribute will be allowed through.

#### Usage Example

You're building a procedural forest where each tree point has an optional "TreeType" attribute. You want to process only points that have this attribute defined. Set the **Attribute Name** to "TreeType", leave **Domain** as "Any", and keep **bInvert** disabled. This ensures only trees with a defined type are included in downstream processing steps.

#### Notes

* This filter is commonly used to validate data integrity before performing operations that depend on specific attributes.
* When using **Match** mode, ensure your attribute names include the correct domain prefix (e.g., "Data::Height").
* Combining this filter with other filters allows for complex conditional logic in your procedural workflows.
