---
description: 'In editor :: PCGEx | Write Index'
icon: circle
---

# Write Index

{% hint style="warning" %}
This page was generated from the source code. It captures what the node does, but still needs some serious  proofreading.
{% endhint %}

> Writes point or collection indices to attributes or tags.

#### How It Works

The Write Index node assigns sequential numbers to points based on their order within collections. For each point, it can write:

* The point's position within its collection (starting from zero)
* The total number of points in the collection
* A unique identifier for the collection itself (when multiple collections are present)

These values can be stored as attributes or tags and optionally normalized to a 0–1 range. If your data includes multiple collections, each one gets its own index and entry count.

The node also supports interpolation for attribute outputs, which helps ensure smooth transitions when using the data in other nodes that require continuous values.

#### Configuration

<details>

<summary><strong>bOutputPointIndex</strong><br><em>Whether to write the index of the point on the point.</em></summary>

When enabled, writes the current point's index within its collection to an attribute or tag.

</details>

<details>

<summary><strong>OutputAttributeName</strong><br><em>The name of the attribute to write its index to.</em></summary>

Defines the name of the attribute where the point index will be stored. Defaults to "CurrentIndex".

</details>

<details>

<summary><strong>bOneMinus</strong><br><em>Whether to subtract the index from 1.</em></summary>

When enabled, outputs `1 - Index` instead of the raw index.

</details>

<details>

<summary><strong>bNormalizedEntryIndex</strong><br><em>Whether to write the index as a normalized output value.</em></summary>

When enabled, normalizes the point index between 0 and 1 using the total number of entries in the collection.

</details>

<details>

<summary><strong>bOutputCollectionIndex</strong><br><em>Whether to output the collection index.</em></summary>

When enabled, writes a unique index for each collection to an attribute or tag.

</details>

<details>

<summary><strong>CollectionIndexAttributeName</strong><br><em>The name of the attribute/tag to write the collection index to.</em></summary>

Defines the name of the attribute or tag where the collection index will be stored. Defaults to "@Data.CollectionIndex".

</details>

<details>

<summary><strong>CollectionIndexOutputType</strong><br><em>Type of output for collection index.</em></summary>

Specifies whether the collection index is written as a **Double**, **Float**, **Int32**, or **Int64**.

</details>

<details>

<summary><strong>bOutputCollectionIndexToTags</strong><br><em>If enabled, output the collection index as a tag.</em></summary>

When enabled, writes the collection index to a tag instead of an attribute.

</details>

<details>

<summary><strong>bOutputCollectionNumEntries</strong><br><em>Whether to output the collection number of entries.</em></summary>

When enabled, writes the total number of points in each collection to an attribute or tag.

</details>

<details>

<summary><strong>NumEntriesAttributeName</strong><br><em>The name of the attribute/tag to write the collection num entries to.</em></summary>

Defines the name of the attribute or tag where the entry count will be stored. Defaults to "@Data.NumEntries".

</details>

<details>

<summary><strong>NumEntriesOutputType</strong><br><em>Type of output for number of entries.</em></summary>

Specifies whether the entry count is written as a **Double**, **Float**, **Int32**, or **Int64**.

</details>

<details>

<summary><strong>bNormalizeNumEntries</strong><br><em>If enabled, output the normalized collection num entries to the points.</em></summary>

When enabled, normalizes the entry count between 0 and 1.

</details>

<details>

<summary><strong>bOutputNumEntriesToTags</strong><br><em>If enabled, output the collection num entries as a tag.</em></summary>

When enabled, writes the entry count to a tag instead of an attribute.

</details>

<details>

<summary><strong>bAllowInterpolation</strong><br><em>Whether the created attributes allows interpolation or not.</em></summary>

When enabled, marks the output attributes to allow interpolation in downstream nodes.

</details>

#### Usage Example

Use this node to track point order within collections. For example:

* Assign a unique index to each point in a procedural forest.
* Tag points with their collection index to group them later.
* Normalize indices for use in shaders or animations that require 0–1 values.

#### Notes

* The node works on both single and multiple collection inputs.
* Normalized outputs are useful when you want consistent ranges across different data sizes.
* Interpolation is helpful for smooth transitions in visual effects or procedural animations.
