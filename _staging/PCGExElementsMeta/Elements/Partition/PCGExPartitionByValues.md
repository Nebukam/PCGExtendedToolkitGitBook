---
icon: layer-group
description: 'Partition by Values (Static) - Separates points into buckets using inline attribute rules'
---

# Partition by Values (Static)

Outputs separate buckets of points based on attribute values with inline rule configuration.

## Overview

This node partitions point collections into separate output buckets based on attribute values. Unlike the modular variant that uses sub-nodes, this version defines partition rules directly in the node settings. Each unique partition key produces a distinct output collection. The node can optionally just write partition identifiers without splitting the output.

## How It Works

1. **Evaluate Rules**: For each point, evaluates all configured partition rules to compute individual keys.
2. **Combine Keys**: Combines individual rule keys into a composite partition key.
3. **Group Points**: Points with identical combined keys are grouped together.
4. **Output**: Either splits into separate collections per key, or writes identifiers to the original data.

#### Usage Notes

- **Merge Before**: It is recommended to use a Merge node before partitioning to combine data from multiple sources.
- **Static Rules**: Rules are defined directly in the node settings, making this variant simpler for fixed partitioning schemes.
- **No-Split Mode**: Disable Split Output to write partition identifiers without creating separate collections.
- **Key Sum**: The Key Sum is a combined numeric value from all rules - useful for quick identification but not guaranteed unique.

## Behavior

```
Single Attribute Partitioning:

Input Points with Height attribute:
   Point A: Height = 150
   Point B: Height = 350
   Point C: Height = 120
   Point D: Height = 380

Rule: Filter Size = 100

   Bucket "1" → [A, C]  (Height 100-199)
   Bucket "3" → [B, D]  (Height 300-399)

No-Split Mode (bSplitOutput = false):
   All points remain together with PartitionKey attribute written
```

## Inputs

| Pin | Type | Description |
|-----|------|-------------|
| **In** | Points | Input point collection to partition |

## Settings

<details>
<summary><strong>Split Output</strong> <code>bool</code></summary>

When enabled, outputs separate point collections for each partition. When disabled, only writes partition identifier values to attributes without splitting.

Default: `true`

⚡ PCG Overridable

</details>

<details>
<summary><strong>Write Key Sum</strong> <code>bool</code></summary>

When enabled, writes the sum of all partition rule keys to an attribute.

Default: `false`

⚡ PCG Overridable

</details>

<details>
<summary><strong>Key Sum Attribute Name</strong> <code>FName</code></summary>

The attribute name to write the key sum to. Note that this value is not guaranteed to be unique across different key combinations.

Default: `KeySum`

📋 *Visible when Write Key Sum is enabled*

⚡ PCG Overridable

</details>

<details>
<summary><strong>Partition Rules</strong> <code>TArray&lt;FPCGExPartitonRuleConfig&gt;</code></summary>

Array of partition rule configurations. Each rule transforms an attribute value into a partition key component.

→ See [Partition Rule](PCGExModularPartitionByValues.md#partition-rule) for rule configuration details.

⚡ PCG Overridable

</details>

### Inherited Settings

→ See [Points Processor Settings](../../Core/PCGExPointsProcessor.md) for common point processing settings.

## Outputs

| Pin | Type | Description |
|-----|------|-------------|
| **(Dynamic)** | Points | Separate point collections for each unique partition key (when Split Output enabled) |
| **Out** | Points | Original points with partition attributes (when Split Output disabled) |

---

📦 **Module**: `PCGExElementsMeta` · 📄 [Source](https://github.com/Nebukam/PCGExtendedToolkit/blob/main/Source/PCGExElementsMeta/Public/Elements/Partition/PCGExPartitionByValues.h)

<!-- VERIFICATION REPORT
Node-Specific Properties: 4 documented (bSplitOutput, bWriteKeySum, KeySumAttributeName, PartitionRules)
Inherited Properties: Referenced to UPCGExPointsProcessorSettings
Inputs: In (Points)
Outputs: Dynamic buckets or Out with attributes
Nested Types: FPCGExPartitonRuleConfig (shared with modular variant)
-->
