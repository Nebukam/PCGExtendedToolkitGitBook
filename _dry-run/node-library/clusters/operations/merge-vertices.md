---
icon: compress
description: 'In editor :: PCGEx | Cluster : Merge Vtx'
---

# Cluster : Merge Vtx

Merge vertices so **all edges share the same vertex collection**, consolidating multiple vertex sets into a single unified collection.

## Overview

When working with multiple edge collections that share or reference the same vertices, Merge Vtx combines their vertex data into a single collection. This ensures all edges reference the same vertex pool, which is required for certain operations and can improve performance.

## Key Behavior

```
Before:                          After Merge:
  Vtx A: [1,2,3]                   Vtx: [1,2,3,4,5,6]
  Vtx B: [4,5,6]        →
                                   All edges reference
Separate vtx collections          unified vtx collection
```

## How It Works

1. **Collect Vertices**: Gather all vertex points from input collections
2. **Merge Data**: Combine into a single vertex collection
3. **Update References**: Ensure all edges point to the merged vertices
4. **Output**: Single unified vertex collection with all edges

## Inputs

| Pin | Type | Description |
|-----|------|-------------|
| **Vtx** | Points | Multiple vertex collections to merge |
| **Edges** | Points | Edge collections referencing the vertices |

## Outputs

| Pin | Type | Description |
|-----|------|-------------|
| **Vtx** | Points | Single merged vertex collection |
| **Edges** | Points | Edges updated to reference merged vertices |

## Settings

<details>
<summary><strong>Carry Over Settings</strong> <code>FPCGExCarryOverDetails</code></summary>

Controls which attributes are carried over during the merge.

⚡ PCG Overridable

</details>

## Use Cases

### Multiple Cluster Sources
When combining clusters from different sources that should share vertices.

### Pre-Processing for Operations
Some operations require a single vertex collection. Use Merge Vtx to prepare data.

### Memory Optimization
Consolidating duplicate vertices can reduce memory usage.

## Related

- [Pack Clusters](./pack-clusters.md) - Pack clusters for storage
- [Fuse Clusters](./fuse-clusters.md) - Merge overlapping vertices

---

📦 **Module**: `PCGExElementsClusters` · 📄 [Source](https://github.com/Nebukam/PCGExtendedToolkit/blob/main/Source/PCGExElementsClusters/Public/Elements/PCGExMergeVertices.h)
