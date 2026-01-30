---
icon: table-cells
description: Split vertices into per-cluster groups
---

# Partition Vtx

Splits a unified vertex collection into separate point collections, one per cluster. Useful for processing clusters individually when they share a common vertex pool.

```
Unified Vtx:                 Partitioned Output:
  [A B C D E F G H]            Cluster 1: [A B C]
  (all vertices together)       Cluster 2: [D E F]
                                Cluster 3: [G H]
        ↓
  ●───●   ●───●───●
  │   │       │
  ●   │   ●───●───●
      │
  ●───●

  (3 clusters share vtx pool)
```

## Inputs & Outputs

| Label | Type | Description |
|-------|------|-------------|
| **In** | Points | Vtx points (unified collection) |
| **In** | Points | Edge points |
| **Out** | Points | Partitioned Vtx (one collection per cluster) |
| **Out** | Points | Edges (forwarded) |

## Settings

This node has no additional settings. It automatically partitions vertices based on cluster connectivity.

## How It Works

### Cluster Detection

The node analyzes edge connectivity to determine which vertices belong to which cluster:

```
Input:                      Analysis:
  ●───●   ●───●───●           ●───●   = Cluster 1 (indices 0,1,2)
  │   │       │               │   │
  ●   │   ●───●───●           ●   │   ●───●───● = Cluster 2 (indices 3,4,5,6,7)
      │                           │
  ●───●                       ●───● = Cluster 3 (indices 8,9)
```

### Output Format

Each cluster's vertices are extracted into a separate point collection:

```
Cluster 1 Collection:     Cluster 2 Collection:     Cluster 3 Collection:
  [Point 0]                 [Point 0]                 [Point 0]
  [Point 1]                 [Point 1]                 [Point 1]
  [Point 2]                 [Point 2]
                            [Point 3]
                            [Point 4]
```

Points are re-indexed within each collection (0, 1, 2...) rather than maintaining original indices.

## Use Cases

### Per-Cluster Processing

When you need to process each cluster independently:

```
Before:                     After Partition:
  Single vtx collection       3 separate collections
      ↓                            ↓
  Hard to iterate           Easy to process individually
  per-cluster               with For Each loop
```

### Attribute Aggregation

Partition before using nodes that aggregate per-collection:

```
Partition → Bounds Node → Per-cluster bounding boxes
Partition → Centroid → Per-cluster centers
```

### Conditional Output

When downstream nodes expect one collection per cluster:

```
Unified clusters → Partition → Different processing per cluster
```

## Relationship to Pack/Unpack

| Node | Purpose |
|------|---------|
| **Partition Vtx** | Split vtx by cluster membership |
| **Pack Clusters** | Convert Vtx+Edges to single collection |
| **Unpack Clusters** | Restore Vtx+Edges from packed format |

Partition Vtx focuses on vertex data only, while Pack/Unpack handles the full cluster structure.

---

📦 **Module**: `PCGExElementsClusters`
