---
description: 'In editor :: PCGEx | Meta Cleanup'
icon: circle
---

# Meta Cleanup

{% hint style="info" %}
This page was generated from the source code. It should properly capture what the node does, but still needs to be proofread by a human.
{% endhint %}

> Keep or remove tags and attributes using string queries.

#### Overview

The Meta Cleanup node allows you to selectively remove metadata (tags and attributes) from points in your procedural data. You define which metadata elements to target using string-based filters, making it easy to clean up or refine point data before further processing.

It's particularly useful when working with large datasets where you want to strip out unnecessary or outdated metadata, or when preparing data for downstream nodes that require a specific set of attributes.

{% hint style="info" %}
Connects to **Point Filters** pins on other nodes.
{% endhint %}

#### How It Works

This node processes the point data by evaluating the list of attribute names defined in its Filters subnode. For each attribute, it applies a filtering mode that determines whether to keep or remove it from the points.

It checks if an attribute's name matches any of the specified patterns in the filter list. If a match is found, the behavior depends on the filter mode:

* **All**: Keeps all attributes (no action taken).
* **Exclude**: Removes matching attributes.
* **Include**: Keeps only matching attributes and removes all others.

The filtering logic uses string matching to determine if an attribute name should be processed, allowing for flexible control over which metadata is retained or discarded.

<details>

<summary>Inputs</summary>

Expects point data with optional metadata (tags and attributes).

</details>

<details>

<summary>Outputs</summary>

Produces modified point data with specified attributes either removed or retained based on the filter configuration.

</details>

#### Configuration

<details>

<summary><strong>Filters</strong><br><em>List of attributes to delete.</em></summary>

Defines which attributes to target for removal or retention. This subnode allows you to specify a list of attribute names and how they should be processed.

**Filter Mode**:

* **All**: Keep all attributes.
* **Exclude**: Remove matching attributes.
* **Include**: Keep only matching attributes.

**Matches**: A map of attribute name patterns to match against. You can define multiple patterns, and any successful match will trigger the filter action.

</details>

#### Usage Example

You have a set of points with various metadata tags like `IsSelected`, `IsLocked`, `HasCollision`, and `TempTag`. You want to remove all attributes that start with "Temp" to clean up temporary data. Configure the Filters subnode with an **Exclude** mode and add a match pattern for `"Temp*"`. This removes all attributes starting with "Temp" from your points.

#### Notes

* The node works on both tags and regular attributes.
* String matching supports wildcards (e.g., `*Tag` matches any attribute ending in "Tag").
* Be cautious when using **Include** mode, as it will remove all non-matching attributes.
