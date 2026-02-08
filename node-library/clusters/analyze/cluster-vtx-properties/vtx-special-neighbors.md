---
icon: circle-dashed
---

# Vtx : Special Neighbors

Outputs data about a vertex's largest and smallest neighbors based on their bounds extents.

### Overview

This vertex property provider analyzes the neighbors connected to each vertex and identifies which have the largest and smallest bounds. Unlike Special Edges which focuses on edge length, this node examines the size of neighboring vertices themselves. You can output direction vectors, distances, edge indices, and vertex indices for both extremes.

> This is a [vtx-property-provider.md](vtx-property-provider.md "mention")

### How It Works

1. **Neighbor Analysis**: For each vertex, the node examines all connected neighbors and compares their bounds extents.
2. **Size Comparison**: Identifies which neighbor has the largest bounds and which has the smallest.
3. **Data Extraction**: Gathers the direction and distance to each identified neighbor along with index information.
4. **Attribute Output**: Writes the enabled outputs as vertex attributes with configurable names.

**Usage Notes**

* **Bounds-Based**: This node compares neighbor vertices by their bounds size, not by edge length.
* **Per-Vertex Output**: Each vertex receives data about its own largest/smallest neighbors independently.
* **Index Outputs**: Use the edge and vertex index outputs to trace back to specific neighbors for further processing.

### Behavior

```
Input Cluster:                  Output Attributes (per vertex):

    B (large)                   For vertex A with neighbors B,C,D:
    |
    |                           Largest: neighbor B (biggest bounds)
    |                             → LargestDir, LargestLen, LargestVtxIndex...
    A----C (medium)
    |                           Smallest: neighbor D (smallest bounds)
    |                             → SmallestDir, SmallestLen, SmallestVtxIndex...
    |
    D (small)
```

### Settings

#### Largest Neighbor

<details>

<summary><strong>Largest Neighbor</strong> <code>FPCGExEdgeOutputWithIndexSettings</code></summary>

Output settings for the neighbor with the largest bounds.

**Direction Output:**

| Setting                 | Type    | Default      | Description                                                       |
| ----------------------- | ------- | ------------ | ----------------------------------------------------------------- |
| **Write Direction**     | `bool`  | `false`      | Enable to write the direction to the largest neighbor             |
| **Direction Attribute** | `FName` | `LargestDir` | Attribute name for the direction vector                           |
| **Invert**              | `bool`  | `false`      | Invert the direction (point away from neighbor instead of toward) |

**Length Output:**

| Setting              | Type    | Default      | Description                                          |
| -------------------- | ------- | ------------ | ---------------------------------------------------- |
| **Write Length**     | `bool`  | `false`      | Enable to write the distance to the largest neighbor |
| **Length Attribute** | `FName` | `LargestLen` | Attribute name for the distance value                |

**Index Output:**

| Setting                      | Type    | Default                | Description                                                   |
| ---------------------------- | ------- | ---------------------- | ------------------------------------------------------------- |
| **Write Edge Index**         | `bool`  | `false`                | Enable to write the index of the edge to the largest neighbor |
| **Edge Index Attribute**     | `FName` | `LargestEdgeIndex`     | Attribute name for the edge index                             |
| **Write Vtx Index**          | `bool`  | `false`                | Enable to write the index of the largest neighbor vertex      |
| **Vtx Index Attribute**      | `FName` | `LargestVtxIndex`      | Attribute name for the vertex index                           |
| **Write Neighbor Count**     | `bool`  | `false`                | Enable to write the total neighbor count                      |
| **Neighbor Count Attribute** | `FName` | `LargestNeighborCount` | Attribute name for neighbor count                             |

All settings are PCG Overridable.

</details>

#### Smallest Neighbor

<details>

<summary><strong>Smallest Neighbor</strong> <code>FPCGExEdgeOutputWithIndexSettings</code></summary>

Output settings for the neighbor with the smallest bounds.

**Direction Output:**

| Setting                 | Type    | Default       | Description                                            |
| ----------------------- | ------- | ------------- | ------------------------------------------------------ |
| **Write Direction**     | `bool`  | `false`       | Enable to write the direction to the smallest neighbor |
| **Direction Attribute** | `FName` | `SmallestDir` | Attribute name for the direction vector                |
| **Invert**              | `bool`  | `false`       | Invert the direction                                   |

**Length Output:**

| Setting              | Type    | Default       | Description                                           |
| -------------------- | ------- | ------------- | ----------------------------------------------------- |
| **Write Length**     | `bool`  | `false`       | Enable to write the distance to the smallest neighbor |
| **Length Attribute** | `FName` | `SmallestLen` | Attribute name for the distance value                 |

**Index Output:**

| Setting                      | Type    | Default                 | Description                                                    |
| ---------------------------- | ------- | ----------------------- | -------------------------------------------------------------- |
| **Write Edge Index**         | `bool`  | `false`                 | Enable to write the index of the edge to the smallest neighbor |
| **Edge Index Attribute**     | `FName` | `SmallestEdgeIndex`     | Attribute name for the edge index                              |
| **Write Vtx Index**          | `bool`  | `false`                 | Enable to write the index of the smallest neighbor vertex      |
| **Vtx Index Attribute**      | `FName` | `SmallestVtxIndex`      | Attribute name for the vertex index                            |
| **Write Neighbor Count**     | `bool`  | `false`                 | Enable to write the total neighbor count                       |
| **Neighbor Count Attribute** | `FName` | `SmallestNeighborCount` | Attribute name for neighbor count                              |

All settings are PCG Overridable.

</details>

#### Inherited Settings

This node inherits common settings from its base class.

See Vtx Property Provider for base class information.

***

[![Static Badge](https://img.shields.io/badge/Source-PCGExElementsClusters-473F69)](https://github.com/Nebukam/PCGExtendedToolkit/blob/main/Source/PCGExElementsClusters/Public/Elements/Meta/VtxProperties/PCGExVtxPropertySpecialNeighbors.h)

<!-- SOURCE: https://github.com/Nebukam/PCGExtendedToolkit/blob/main/Source/PCGExElementsClusters/Public/Elements/Meta/VtxProperties/PCGExVtxPropertySpecialNeighbors.h -->
