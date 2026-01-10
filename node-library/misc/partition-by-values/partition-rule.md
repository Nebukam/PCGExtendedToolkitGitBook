---
description: 'In editor :: PCGEx | Partition Rule'
icon: circle-dashed
---

# Partition Rule

{% hint style="warning" %}
This page was generated from the source code. It captures what the node does, but still needs some serious  proofreading.
{% endhint %}

> Creates a single partition rule to be used with the Partition by Values node.

#### How It Works

The Partition Rule subnode defines how points are grouped when using the Partition by Values node. It evaluates each point's attribute value and assigns it to a specific partition bucket based on that value.

When processing points, the system reads the specified attribute from each point and checks if its value matches the rule's conditions. Points that match the rule are grouped together into the same output dataset. Each unique attribute value gets its own partition bucket, allowing you to separate data based on specific criteria like tags, IDs, or custom values.

This subnode acts as a configuration template that defines one way to split data, which can be combined with other rules in the Partition by Values node to create complex partitioning behaviors.

#### Configuration

<details>

<summary><strong>Rule Config</strong><br><em>Rule Config</em></summary>

This setting controls how the rule evaluates point attributes to determine partition membership. It defines which attribute is used for grouping, whether to use exact matching or range-based matching, and how to handle missing or invalid values.

</details>

#### Usage Example

1. Create a Partition Rule subnode and configure it to use an attribute like "MaterialType"
2. Connect the Partition Rule to a Partition by Values node
3. The Partition by Values node will create separate output datasets for each unique value in the "MaterialType" attribute
4. Points with MaterialType="Wood" go into one bucket, "Metal" into another, etc.

#### Notes

* Multiple Partition Rule subnodes can be connected to a single Partition by Values node to define multiple grouping criteria.
* The rule's configuration affects how points are matched and grouped.
* This node works best when used with attributes that have discrete values rather than continuous data.
