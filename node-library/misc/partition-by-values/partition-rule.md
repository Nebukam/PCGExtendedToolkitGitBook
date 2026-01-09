---
description: 'In editor :: PCGEx | Partition Rule'
icon: circle-dashed
---

# Partition Rule

{% hint style="warning" %}
## AI-generated page -- to be reviewed 
While not 100% accurate, it should properly capture what the node/factory does. It stills needs to be proofread by a human.
{% endhint %}

> Creates a single partition rule to be used with the Partition by Values node.

### Overview

This node defines a single rule that controls how points are grouped when using the Partition by Values node. It allows you to specify filtering parameters and output behavior for one specific partition, such as how to group points based on attribute values and whether to write additional metadata about the partitions.

{% hint style="info" %}
Use this node in combination with the "Partition by Values" node to define how your point data should be split into different groups or buckets.
{% endhint %}

<details>

<summary>Inputs</summary>

This node does not take any direct input data.

</details>

<details>

<summary>Outputs</summary>

* **PartitionRule**: Outputs a single partition rule that can be consumed by the Partition by Values node.

</details>

### Properties Overview

This node allows you to define how points are filtered and grouped into partitions, along with optional metadata writing behavior.

***

#### Rule Configuration

Controls how points are filtered and grouped into partitions.

**Enable Rule**

_When enabled, this partition rule is active and will be used by the Partition by Values node._

* Controls whether this rule should be applied to the point data
* When disabled, this rule is ignored during partitioning

**Filter Size**

_Specifies how points are grouped together based on their attribute values._

* Larger values result in fewer, larger groups of points
* Smaller values create more, smaller groups
* Example: A value of 1.0 groups points with similar attribute values together; a value of 0.1 creates much finer groupings

**Upscale Multiplier**

_Multiplies the raw attribute values before applying the filter size._

* Useful for handling floating-point precision issues
* Example: If your attribute values are very small (like 0.001), you can upscale them by a factor of 1000 to make grouping more effective

**Offset**

_Adds a constant value to the attribute after upscaling but before filtering._

* Applied after the upscale multiplier
* Can be used to shift all attribute values in a consistent way
* Example: Adding an offset of 0.5 shifts all values by half a unit

**Write Partition Key**

_When enabled, writes the partition key (the unique attribute value) as an output attribute._

* The key is written to the point data for each point in the partition
* Useful for tracking which group each point belongs to after partitioning

**Key Attribute Name**

_Name of the attribute where the partition key will be written._

* Only used when "Write Partition Key" is enabled
* Example: If set to "PartitionKey", each point will have a new attribute called "PartitionKey" with its group identifier

**Use Partition Index as Key**

_When enabled, uses the index of the partition (0, 1, 2...) instead of the actual attribute value._

* Useful when you want to number your partitions numerically rather than using the original attribute values
* Example: If you have 3 partitions, they will be labeled as 0, 1, and 2 regardless of their original attribute values

**Write Tag**

_When enabled, writes a tag to identify points in this partition._

* Creates a tag that can be used for filtering or visual identification later
* Useful for debugging or creating visual variations based on partitions

**Tag Prefix Name**

_Name prefix for the tag written to each point._

* Only used when "Write Tag" is enabled
* Example: If set to "Group\_", points in this partition will be tagged with "Group\_0", "Group\_1", etc.

**Tag Use Partition Index as Key**

_When enabled, uses the partition index (0, 1, 2...) for the tag instead of the actual attribute value._

* Similar to using partition index as key, but for tags
* Example: If set to true, points in this rule will be tagged with "Group\_0", "Group\_1", etc., where the number corresponds to the rule's position in the list

### Notes

* This node is designed to work with the Partition by Values node and should typically be used as part of a larger graph
* Multiple Partition Rule nodes can be connected to a single Partition by Values node to define multiple partitioning criteria
* When using "Use Partition Index as Key", consider that the index order depends on how rules are arranged in your graph
* The "Filter Size" parameter works best when attribute values are within a reasonable range; use "Upscale Multiplier" for very small or very large values
* For best performance, avoid creating too many small partitions with very tight filter sizes
