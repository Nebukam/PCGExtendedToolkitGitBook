---
icon: circles-overlap
---

# Blending

## Blending## AI-generated page -- to be reviewed

While not 100% accurate, it should properly capture what this configuration does.

{% hint style="info" %}
This page was generated from the source code. It should properly capture what the node does, but still needs to be proofread by a human.
{% endhint %}

\> Controls how attribute values are combined or averaged when merging points or clusters in procedural content generation.

#### Overview

This configuration block defines how data attributes are blended together when combining multiple points or clusters into a single output. It allows you to specify whether to average, take the first value, or use other methods for each attribute. You can also filter which attributes should be blended and override blending behavior per attribute or property.

This is commonly used in operations that merge or combine data from different sources, such as clustering, pathfinding, or point fusion. Adjusting these settings helps control how overlapping or merged data behaves in your procedural outputs.

{% hint style="info" %}
This configuration appears in nodes like: Sub Points Blend Operation, Clipper 2, Write Edge Properties, Path to Clusters, Fuse Clusters
{% endhint %}

#### Settings

<details>

<summary>BlendingFilter <br><em>Controls which attributes are considered for blending.</em></summary>

Determines whether all attributes are blended or only a selected subset.

**Values**:

* **All**: All attributes will be processed with the default blending method.
* **Filtered**: Only the explicitly listed attributes in `FilteredAttributes` will be blended.

</details>

<details>

<summary>FilteredAttributes <br><em>Selects specific attributes to blend when using "Filtered" mode.</em></summary>

When `BlendingFilter` is set to "Filtered", this list defines which attributes are included in the blending process. Other attributes are ignored.

</details>

<details>

<summary>DefaultBlending _Sets the default blending method for all applicable attributes._</summary>

Defines how values from multiple points or clusters should be combined by default.

**Values**:

* **Average**: The numeric average of all values is taken.
* **First**: The value from the first point or cluster is used.
* **Sum**: All values are added together.
* **Min**: The smallest value among all points or clusters is selected.
* **Max**: The largest value among all points or clusters is selected.

</details>

<details>

<summary>PropertiesOverrides _Overrides blending behavior for specific point properties like position, rotation, scale._</summary>

Allows you to define custom blending rules for standard point properties such as position, rotation, and scale. This setting is useful when you want different blending behavior for core spatial data.

</details>

<details>

<summary>AttributesOverrides _Overrides blending method for specific attributes by name._</summary>

Lets you specify a custom blending type for individual attributes. This gives fine-grained control over how each attribute is handled during blending, overriding the default setting.

</details>

#### Common Use Cases

* **Merging Clusters**: When fusing multiple clusters into one, use "Average" to blend numeric values like color or intensity.
* **Pathfinding**: Combine path points by taking the first value for properties like direction or rotation to maintain consistency.
* **Data Fusion**: When merging data from different sources, selectively blend only certain attributes (e.g., position and color) while leaving others untouched.

#### Notes

* The `PropertiesOverrides` setting takes precedence over `AttributesOverrides` when blending standard point properties.
* If an attribute is not listed in `FilteredAttributes`, it will be skipped during blending if the filter is enabled.
* Blending settings are applied per attribute, so you can have different behaviors for different data types within the same dataset.
