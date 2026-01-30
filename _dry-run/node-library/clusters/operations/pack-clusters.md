---
icon: box-archive
description: 'In editor :: PCGEx | Cluster : Pack'
---

# Cluster : Pack

Pack each cluster into a **single point data object** containing both vertices and edges, designed for storage, serialization.

> This is a legacy feature.

## Overview

Pack Clusters combines the separate Vtx and Edges collections into a single point collection per cluster. This packed format is more portable and can be stored, passed around, or serialized more easily. Use [Unpack Clusters](./unpack-clusters.md) to restore the original Vtx/Edges format.

## Key Behavior

```
Before:                        After Pack:
  Vtx: [●, ●, ●]                  Packed: [●, ●, ●, ─, ─]
  Edges: [─, ─]        →              ↑
                                 Single collection with
Separate collections            both vtx and edges
```

## How It Works

1. **Process Each Cluster**: Iterate through input clusters
2. **Combine Data**: Merge vtx and edge points into single collection
3. **Add Markers**: Include metadata to identify vtx vs edge points
4. **Output**: Single packed collection per cluster

## Inputs

| Pin | Type | Description |
|-----|------|-------------|
| **Vtx** | Points | Cluster vertices |
| **Edges** | Points | Cluster edges |

## Outputs

| Pin | Type | Description |
|-----|------|-------------|
| **Packed Clusters** | Points | Single collection per cluster containing both vtx and edges |

## Settings

<details>
<summary><strong>Carry Over Settings</strong> <code>FPCGExCarryOverDetails</code></summary>

Controls which attributes are carried over to the packed output.

⚡ PCG Overridable

</details>

## Use Cases

### Saving to Assets
Packed format is simpler to save as a single asset.

### Passing Through Subgraphs
Easier to pass one collection through subgraph interfaces.

### Serialization
Single collection format works better with some serialization methods.

### Simplifying Graph Complexity
Reduces the number of data pins and connections in complex graphs.

## Related

- [Unpack Clusters](./unpack-clusters.md) - Restore Vtx/Edges from packed format
- [Merge Vertices](./merge-vertices.md) - Merge multiple vertex collections

---

📦 **Module**: `PCGExElementsClusters` · 📄 [Source](https://github.com/Nebukam/PCGExtendedToolkit/blob/main/Source/PCGExElementsClusters/Public/Elements/PCGExPackClusters.h)
