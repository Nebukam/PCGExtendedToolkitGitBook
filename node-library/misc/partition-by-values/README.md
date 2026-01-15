---
description: 'In editor :: PCGEx | Partition by Values'
icon: scrubber
---

# Partition by Values

Outputs separate buckets of points based on an attribute' value. Each bucket is named after a unique attribute value. Note that it is recommended to use a Merge before.

**How It Works**

> AI-Generated, needs proofreading

* The node evaluates an attribute's value for each point and groups these points into separate buckets based on unique attribute values.
* Each bucket is named according to its corresponding unique attribute value.
* If "Split Output" is set to false, the node writes partition identifier values instead of creating new datasets for each partition.
* When "Write Key Sum" is enabled, the sum of partition values gets written as an attribute with a specified name defined by "Key Sum Attribute Name".
* The processing respects predefined "Partition Rules", though specifics of these rules are not detailed here.

#### Configuration

<details>

<summary><strong>Split Output</strong> <code>bool</code></summary>

If false, will only write partition identifier values instead of splitting partitions into new point datasets.

⚡ PCG Overridable

</details>

<details>

<summary><strong>Write Key Sum</strong> <code>bool</code></summary>

Write the sum of partition values to an attribute.

⚡ PCG Overridable

</details>

<details>

<summary><strong>Key Sum Attribute Name</strong> <code>Name</code></summary>

The Attribute name to write key sum to. Note that this value is not guaranteed to be unique.

⚡ PCG Overridable

</details>

<details>

<summary><strong>Partition Rules</strong> <code>Array of FPCGExPartitonRuleConfig</code></summary>

Rules

⚡ PCG Overridable

</details>

***

Source: `Source\PCGExElementsMeta\Public\Elements\Partition\PCGExPartitionByValues.h`
