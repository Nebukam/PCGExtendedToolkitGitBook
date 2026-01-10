---
description: 'In editor :: PCGEx | Partition by Values'
icon: scrubber
---

# Partition by Values

{% hint style="warning" %}
This page was generated from the source code. It captures what the node does, but still needs some serious  proofreading.
{% endhint %}

> Separates input points into distinct groups based on attribute values, with each group stored in its own output dataset named after the attribute value.

#### How It Works

This node organizes input points into separate datasets according to unique values found in a specified attribute. For every distinct value in that attribute, it creates a new output dataset. The name of each dataset matches the value it represents.

For example, if you have points with a "Material" attribute containing values like "Grass", "Stone", and "Water", this node will create three separate outputs named accordingly. Each output contains only the points that match its corresponding attribute value.

You can also choose to keep all points in one dataset while tagging them with their group identifier instead of splitting into multiple outputs. This is useful when you want to maintain a single data stream but still know which group each point belongs to.

The node supports hierarchical grouping through rules that define how to organize the points into partitions. These rules let you specify conditions for assigning points to different groups, enabling more complex partitioning logic.

Additionally, it can calculate and store the total of attribute values per group in a new attribute. This is helpful for statistical analysis or when you need aggregated data for downstream processing.

#### Configuration

<details>

<summary><strong>Split Output</strong><br><em>If disabled, points are not split into separate datasets but instead tagged with their partition identifier.</em></summary>

When enabled, each unique value in the attribute creates a new output dataset. When disabled, all points remain in one dataset but are labeled with which group they belong to.

</details>

<details>

<summary><strong>Write Key Sum</strong><br><em>Calculates and stores the total of attribute values for each partition.</em></summary>

When enabled, this feature computes the sum of the attribute values for each group and writes it into a new attribute. This is useful for tracking totals per category.

</details>

<details>

<summary><strong>Key Sum Attribute Name</strong><br><em>The name of the attribute where the sum of each partition's values will be stored.</em></summary>

Specifies the name of the attribute that holds the calculated sum for each group. By default, this is set to "KeySum".

</details>

<details>

<summary><strong>Partition Rules</strong><br><em>Defines how points are grouped into partitions using conditions and actions.</em></summary>

These rules determine how input points are assigned to different groups. Each rule specifies an attribute and the conditions used to classify points into specific partitions.

</details>

#### Usage Example

1. Start with a collection of points that have a "Material" attribute.
2. Apply this node to separate those points based on material type.
3. The result will be multiple output datasets, one for each material (e.g., "Grass", "Stone").
4. Optionally enable **Write Key Sum** to track the total area or count per material.

#### Notes

* It's recommended to use a Merge node before this one if you're combining data from multiple sources.
* The node works best with discrete attribute values such as integers or strings.
* If using **Split Output**, make sure your graph has enough output pins available.
