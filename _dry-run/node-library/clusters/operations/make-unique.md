---
icon: fingerprint
description: 'In editor :: PCGEx | Cluster : Make Unique'
---

# Cluster : Make Unique

Outputs a **new, unique data pointer** for the input clusters, avoiding overlap and unexpected behaviors when the same cluster data is used in multiple branches.

## Overview

In PCG, data references can be shared across multiple execution paths. This can cause unexpected behavior when one path modifies data that another path also uses. Make Unique creates a fresh copy of the cluster data, ensuring each branch has its own independent data to work with.

## Key Behavior

```
Before:                        After Make Unique:

  ┌──► Process A ──┐              ┌──► Process A (Copy 1)
  │                │              │
Data               Conflict?   Data──► Make Unique
  │                │              │
  └──► Process B ──┘              └──► Process B (Copy 2)

Shared data reference          Independent data copies
```

## How It Works

1. **Receive Input**: Takes cluster Vtx and Edges
2. **Create Copies**: Allocates new data with copied content
3. **Output**: Returns new pointers to the copied data

## Inputs

| Pin | Type | Description |
|-----|------|-------------|
| **Vtx** | Points | Cluster vertices |
| **Edges** | Points | Cluster edges |

## Outputs

| Pin | Type | Description |
|-----|------|-------------|
| **Vtx** | Points | Unique copy of vertices |
| **Edges** | Points | Unique copy of edges |

## Settings

This node has no configurable settings - it simply creates a unique copy of the input data.

## When to Use

### Multiple Processing Branches
When the same cluster feeds into multiple processing paths that modify the data differently.

### Before Destructive Operations
When you need to preserve the original data while also modifying a copy.

### Debugging Data Flow
To isolate data flow issues by ensuring each branch has independent data.

## Example Workflow

```
Delaunay 2D ──► Make Unique ──► Refine (MST) ──► Output A
                    │
                    └────────► Relax ──────────► Output B
```

Without Make Unique, both branches might conflict. With it, each gets its own data copy.

## Related

- [Pack Clusters](./pack-clusters.md) - Pack clusters for storage
- [Unpack Clusters](./unpack-clusters.md) - Restore packed clusters

---

📦 **Module**: `PCGExElementsClusters` · 📄 [Source](https://github.com/Nebukam/PCGExtendedToolkit/blob/main/Source/PCGExElementsClusters/Public/Elements/PCGExMakeClustersUnique.h)
