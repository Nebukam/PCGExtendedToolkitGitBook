---
icon: circles-overlap
---

# Blending

{% hint style="info" %}
This page was generated from the source code. It should properly capture what the node does, but still needs to be proofread by a human.
{% endhint %}

> Controls how attribute values are combined or averaged when merging points or clusters in procedural content generation.

#### Overview

This configuration block defines how data attributes are blended together when combining multiple points or clusters into a single output. It allows you to specify which attributes should be processed, what blending method to use for each, and whether to override the default behavior for specific properties or attributes. This is especially useful when merging overlapping geometry or combining data from different sources.

You might adjust these settings when you want fine-grained control over how values are merged—such as averaging positions, taking the maximum value of a property, or preserving original values from one source. The blending behavior can be customized per attribute or applied globally with overrides for specific cases.

{% hint style="info" %}
This configuration appears in nodes like: Sub Points Blend Operation, Clipper 2, Write Edge Properties, Path to Clusters, Fuse Clusters, and 9 more
{% endhint %}

#### Settings

<details>

<summary><strong>BlendingFilter</strong><br><em>Defines which attributes are subject to blending.</em></summary>

Controls whether all attributes are blended or only a selected subset.

**Values**:

* **All**: All attributes will be considered for blending.
* **Filtered**: Only the explicitly listed attributes in `FilteredAttributes` will be blended.

</details>

<details>

<summary><strong>FilteredAttributes</strong><br><em>List of attribute names to include in blending when using "Filtered" mode.</em></summary>

When `BlendingFilter` is set to **Filtered**, this list determines which specific attributes are processed for blending. Leave empty to blend all attributes.

</details>

<details>

<summary><strong>DefaultBlending</strong><br><em>The default method used to blend attribute values.</em></summary>

Sets the general blending approach applied to all attributes unless overridden. This defines how multiple values are combined into one.

**Values**:

* **Average**: The arithmetic mean of all values.
* **Sum**: Adds all values together.
* **Min**: Takes the smallest value.
* **Max**: Takes the largest value.
* **First**: Uses the first encountered value.
* **Last**: Uses the last encountered value.

</details>

<details>

<summary><strong>PropertiesOverrides</strong><br><em>Override blending behavior for specific point properties like position, rotation, scale.</em></summary>

Allows you to define custom blending methods for core point properties such as position, rotation, and scale. These overrides take precedence over the default blending settings.

</details>

<details>

<summary><strong>AttributesOverrides</strong><br><em>Override blending behavior for specific attributes by name.</em></summary>

Specify a blending method for individual attributes using their names. This lets you apply different logic to certain data fields while keeping others with the default setting.

</details>

#### Common Use Cases

* **Merging overlapping clusters**: You might use "Average" for numeric properties like color or intensity, but "First" for position to preserve original geometry.
* **Combining point data from multiple sources**: When fusing data from different inputs, you can choose to sum values (e.g., for counts) or take the maximum (e.g., for strength).
* **Preserving specific attributes**: If some attributes should not be blended at all, filter them out using `BlendingFilter` and `FilteredAttributes`.

#### Notes

* The blending logic applies only to numeric data types. Non-numeric attributes are typically copied from the first source.
* Overrides in `PropertiesOverrides` and `AttributesOverrides` take precedence over `DefaultBlending`.
* Using "First" or "Last" blending can be useful when you want to maintain a specific source's value during merging, especially for non-numeric data like tags or flags.
