---
icon: layer-group
description: 'Partition by Values - Split points into buckets based on attribute values'
---

# Partition by Values

Outputs separate buckets of points based on an attribute's value. Each bucket is named after a unique attribute value.

## Overview

This node partitions input points into separate data sets based on the values of one or more attributes. Points with identical attribute values are grouped together into the same partition. Each output partition is tagged with its unique value combination, enabling downstream filtering or per-group processing.

## How It Works

1. **Read Attributes**: Evaluate partition rules to read attribute values from each point
2. **Compute Keys**: Generate a partition key from the combined attribute values
3. **Group Points**: Sort and group points by their partition keys
4. **Output Partitions**: Create separate point collections for each unique key combination

#### Usage Notes

- **Merge First**: It's recommended to use a Merge node before partitioning to consolidate multiple inputs into a single data set.
- **Key Sum**: When using multiple partition rules, the Key Sum provides a combined identifier, though it may not be unique across all partitions.

## Behavior

```
Input Points with "BiomeType" attribute:

[Forest] [Desert] [Forest] [Ocean] [Desert] [Forest]

Output Partitions:
┌──────────────────┐
│ "Forest" bucket  │ → 3 points
│ "Desert" bucket  │ → 2 points
│ "Ocean" bucket   │ → 1 point
└──────────────────┘

Each bucket tagged with its partition value.
```

## Settings

<details>
<summary><strong>Split Output</strong> <code>bool</code></summary>

When enabled, creates separate point data outputs for each partition. When disabled, only writes partition identifier values as attributes without splitting the data.

Default: `true`

⚡ PCG Overridable

</details>

<details>
<summary><strong>Write Key Sum</strong> <code>bool</code></summary>

When enabled, writes the sum of all partition rule values to an attribute. Useful for creating a combined identifier when partitioning by multiple attributes.

Default: `false`

⚡ PCG Overridable

</details>

<details>
<summary><strong>Key Sum Attribute Name</strong> <code>FName</code></summary>

The name of the attribute to write the combined partition key sum to.

Default: `KeySum`

📋 *Visible when Write Key Sum = true*

⚡ PCG Overridable

</details>

<details>
<summary><strong>Partition Rules</strong> <code>TArray&lt;FPCGExPartitonRuleConfig&gt;</code></summary>

List of rules defining which attributes to use for partitioning. Each rule specifies an attribute to read and how its value contributes to the partition key.

</details>

---

![Static Badge](https://img.shields.io/badge/Module-PCGExElementsMeta-473F69)  ·  [Source](https://github.com/Nebukam/PCGExtendedToolkit/blob/main/Source/PCGExElementsMeta/Public/Elements/Partition/PCGExPartitionByValues.h)

<!-- VERIFICATION REPORT
Node-Specific Properties: 4 documented (bSplitOutput, bWriteKeySum, KeySumAttributeName, PartitionRules)
Inherited Properties: UPCGExPointsProcessorSettings base
Nested Types: FPCGExPartitonRuleConfig
-->
