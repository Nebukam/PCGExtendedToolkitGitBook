---
description: 'In editor :: PCGEx | Partition by Values'
icon: scrubber
---

# Partition by Values

{% hint style="info" %}
## AI-generated page -- to be reviewed 
While not 100% accurate, it should properly capture what the node/factory does. It stills needs to be proofread by a human.
{% endhint %}

> Outputs separate buckets of points based on an attribute's value. Each bucket is named after a unique attribute value.

### Overview

This node separates your point data into distinct groups, or "buckets", based on the values found in a specified attribute. It's useful for organizing points into categories that can be processed independently or visualized separately.

For example, if you have a set of points with a "Color" attribute that contains values like "Red", "Blue", and "Green", this node will create three separate outputs: one for all red points, one for blue points, and one for green points. Each output bucket is named after its corresponding attribute value.

{% hint style="info" %}
It's recommended to use a Merge node before this one if you're working with multiple point datasets that need to be combined into a single dataset before partitioning.
{% endhint %}

<details>

<summary>Inputs</summary>

* **Main Input**: Points to be partitioned. Supports multiple inputs.

</details>

<details>

<summary>Outputs</summary>

* **Main Output**: The partitioned point data, split into separate buckets based on attribute values.
* **Additional Outputs**: Each bucket gets its own output pin named after the unique value found in the attribute.

</details>

### Properties Overview

Controls how the partitioning is performed and what data is generated.

***

#### Settings

Determines how the node processes your points.

**Split Output**

_When enabled, splits points into separate datasets for each unique attribute value. When disabled, writes partition identifiers to an attribute instead._

* If enabled, creates one output pin per unique attribute value.
* If disabled, writes the partition key directly to a point attribute.

**Write Key Sum**

_When enabled, calculates and stores the sum of all partition keys in an attribute._

* Useful for tracking how many points belong to each partition.
* Requires **Split Output** to be enabled.

**Key Sum Attribute Name**

_The name of the attribute where the key sum will be written._

* Only used when **Write Key Sum** is enabled.
* The attribute must exist or be created automatically if it doesn't.

***

#### Partition Rules

Defines how points are grouped together based on their attribute values.

**Partition Rules**

_A list of rules that define how to partition the data._

* Each rule specifies an attribute and how to filter points into partitions.
* You can add multiple rules to create more complex partitioning logic.
* Rules are applied in order, with each rule potentially creating sub-partitions.

### Notes

* This node works best when used with a Merge node beforehand if you're combining multiple datasets.
* If **Split Output** is disabled, the node will not create separate outputs but instead write partition identifiers directly to an attribute on each point.
* The attribute used for partitioning must be of a type that supports comparison (e.g., integer, string).
* For performance reasons, avoid using very high numbers of unique values in your partitioning attribute.
