---
description: 'In editor :: PCGEx | Merge Points'
icon: circle
---

# Merge Points

{% hint style="warning" %}
This page was generated from the source code. It captures what the node does, but still needs some serious  proofreading.
{% endhint %}

> Merges multiple point collections into a single output, with advanced sorting and attribute handling options.

#### How It Works

The Merge Points node combines several input point collections into one unified dataset. It processes each collection in order, merging all points together before applying any sorting rules. The node then evaluates which attributes or metadata should be carried over based on your specified settings. If enabled, it can also convert point tags into attributes using a defined list of tag names.

The sorting step ensures that the final merged collection is organized according to your preferences — such as by position, index, or custom properties. This allows you to control how the data flows through your procedural pipeline and makes downstream processing more predictable and efficient.

#### Configuration

<details>

<summary><strong>Collection Sorting</strong><br><em>Sorting settings for the merged collection.</em></summary>

Controls how the final merged point set is ordered. You can sort by various criteria such as position, index, or custom attributes.

</details>

<details>

<summary><strong>Carry Over Settings</strong><br><em>Meta filter settings for which data to keep during merge.</em></summary>

Determines which metadata or attributes from the input collections are preserved in the output. You can choose to include, exclude, or keep all attributes.

</details>

<details>

<summary><strong>Convert Tags to Attributes</strong><br><em>If enabled, will convert tags into attributes.</em></summary>

When enabled, point tags are converted into attributes in the output. Simple tags become boolean values; other formats like int32, double, FString, and FVector (2-4 components) are also supported.

</details>

<details>

<summary><strong>Tags to Attributes</strong><br><em>Tags that will be converted to attributes.</em></summary>

Lists the specific tags to convert into attributes. Only tags listed here will be processed if "Convert Tags to Attributes" is enabled.

</details>

<details>

<summary><strong>Quiet Tag Overlap Warning</strong><br><em>Suppresses warnings when overlapping tags are encountered.</em></summary>

When enabled, suppresses warning messages that would otherwise appear if multiple input collections have overlapping tag names during the conversion process.

</details>

#### Usage Example

Suppose you're generating a terrain with multiple noise layers and want to merge them into one point cloud. You could use this node to:

1. Merge all the point collections from your different noise generators.
2. Sort the points by their Y position (height).
3. Carry over specific attributes like "Elevation" and "Material ID".
4. Convert tags like "IsWater" or "IsMountain" into boolean attributes for downstream filtering.

This setup gives you full control over how your point data is combined, sorted, and structured for further use in your procedural pipeline.

#### Notes

* The node supports multiple input collections, making it ideal for combining complex procedural datasets.
* Sorting can significantly impact performance if dealing with large numbers of points.
* When converting tags to attributes, be mindful of potential name conflicts between different input collections.
