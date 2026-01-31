---
icon: layer-group
description: 'Partition by Values - Separates points into buckets based on attribute values'
---

# Partition by Values

Outputs separate buckets of points based on attribute values.

## Overview

This node partitions point collections into separate output buckets based on computed partition keys derived from attribute values. Each unique key combination produces a distinct output collection. The node accepts Partition Rule sub-nodes to define how attributes are transformed into keys, enabling flexible multi-attribute partitioning schemes.

## How It Works

1. **Gather Rules**: Collects partition rules from connected Partition Rule sub-nodes.
2. **Compute Keys**: For each point, evaluates all rules to produce a combined partition key.
3. **Group Points**: Points with identical combined keys are grouped together.

#### Usage Notes

- **Merge Before**: It is recommended to use a Merge node before partitioning to combine data from multiple sources.
- **Multi-Attribute Keys**: Connect multiple Partition Rule sub-nodes to partition by combinations of attributes.
- **Key Naming**: Output collections are named using the combined partition key values.

## Behavior

```
Multi-Attribute Partitioning:

Input Points with Biome and Height attributes:
   ┌─────────┬────────┬────────┐
   │ Point   │ Biome  │ Height │
   ├─────────┼────────┼────────┤
   │ A       │ Forest │ 100    │
   │ B       │ Forest │ 200    │
   │ C       │ Desert │ 100    │
   │ D       │ Forest │ 100    │
   │ E       │ Desert │ 200    │
   └─────────┴────────┴────────┘

With Rules: Biome (no filter) + Height (filter size=100):

   Bucket "Forest_1" → [A, D]  (Biome=Forest, Height key=1)
   Bucket "Forest_2" → [B]     (Biome=Forest, Height key=2)
   Bucket "Desert_1" → [C]     (Biome=Desert, Height key=1)
   Bucket "Desert_2" → [E]     (Biome=Desert, Height key=2)
```

## Inputs

| Pin | Type | Description |
|-----|------|-------------|
| **In** | Points | Input point collection to partition |
| **PartitionRules** | Params | Partition Rule sub-nodes defining how to compute partition keys |

## Settings

This node uses partition rules defined via connected sub-nodes and has no node-specific settings beyond inherited base settings.

### Inherited Settings

→ See [Partition by Values Base](PCGExPartitionByValues.md) for base partition settings.

## Outputs

| Pin | Type | Description |
|-----|------|-------------|
| **(Dynamic)** | Points | Separate point collections for each unique partition key combination |

---

📦 **Module**: `PCGExElementsMeta` · 📄 [Source](https://github.com/Nebukam/PCGExtendedToolkit/blob/main/Source/PCGExElementsMeta/Public/Elements/Partition/PCGExModularPartitionByValues.h)

<!-- VERIFICATION REPORT
Main Node (UPCGExModularPartitionByValuesSettings):
  Node-Specific Properties: 0 (inherits from base)
  Inherited Properties: Referenced to UPCGExPartitionByValuesBaseSettings
  Inputs: In (Points), PartitionRules (Params)
  Outputs: Dynamic buckets based on partition keys
-->
