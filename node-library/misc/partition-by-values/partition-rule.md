---
description: 'In editor :: PCGEx | Partition Rule'
icon: circle-dashed
---

# Partition Rule

Creates an single partition rule to be used with the Partition by Values node.

**How It Works**

> AI-Generated, needs proofreading

* The Partition Rule node generates a single partition rule based on the configuration settings provided in the "Rule Config".
* This generated rule is designed for compatibility and usage with the Partition by Values node to define how data should be divided.
* Configuration details within "Rule Config" dictate the specifics of the partitioning criteria, which the node then formalizes into a rule.

#### Configuration

<details>

<summary><strong>Config</strong> <code>PCGExPartitonRuleConfig</code></summary>

Rule Config

📦 See: PartitonRule configuration

⚡ PCG Overridable

</details>

***

Source: `Source\PCGExElementsMeta\Public\Elements\Partition\PCGExModularPartitionByValues.h`

#### Settings

<details>

<summary><strong>Enabled</strong> <code>bool</code></summary>

Enable or disable this partition.

</details>

<details>

<summary><strong>Filter Size</strong> <code>double</code></summary>

Filter Size. Higher values means fewer, larger groups.

⚡ PCG Overridable

</details>

<details>

<summary><strong>Upscale</strong> <code>double</code></summary>

Upscale multiplier, applied before filtering. Handy to deal with floating point values.

⚡ PCG Overridable

</details>

<details>

<summary><strong>Offset</strong> <code>double</code></summary>

Offset input value. Applied after upscaling the raw value.

⚡ PCG Overridable

</details>

<details>

<summary><strong>Write Key</strong> <code>bool</code></summary>

Controls write key.

⚡ PCG Overridable

</details>

<details>

<summary><strong>Key Attribute Name</strong> <code>FName</code></summary>

Name of the int64 attribute to write the partition Key to.

⚡ PCG Overridable

</details>

<details>

<summary><strong>Use Partition Index As Key</strong> <code>bool</code></summary>

Output the partition index instead of the value used for partitioning.

⚡ PCG Overridable

</details>

<details>

<summary><strong>Write Tag</strong> <code>bool</code></summary>

Whether to write the partition Key to a tag. Will write tags as 'Prefix::Key'

⚡ PCG Overridable

</details>

<details>

<summary><strong>Tag Prefix Name</strong> <code>FName</code></summary>

Name of the tag prefix used for this partition.

⚡ PCG Overridable

</details>

<details>

<summary><strong>Tag Use Partition Index As Key</strong> <code>bool</code></summary>

Output the partition index to the tag instead of the value used for partitioning.

⚡ PCG Overridable

</details>

#### Used In

* ModularPartitionByValues
* PartitionByValues

***

Defined in: `Source\PCGExElementsMeta\Public\Elements\Partition\PCGExPartition.h`
