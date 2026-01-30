---
icon: arrows-maximize
description: 'In editor :: PCGEx | Vtx : Special Neighbors'
---

# Vtx : Special Neighbors

Find largest and smallest neighbors by bounds size.

## Overview

This property node identifies which connected neighbor has the largest or smallest bounding box extent. It outputs direction vectors, lengths, and indices for the extreme neighbors.

```
Vertex with neighbors:      Output attributes:
      B (large)             Largest: B
      │                     Smallest: C
      │                     + direction, length, indices
  A───●───C (small)
 (med)
```

## How It Works

1. **Examine neighbors**: For each vertex, iterate through all connected neighbors
2. **Compare bounds**: Track largest and smallest neighbors by bounds extent
3. **Write outputs**: Store selected values as vertex attributes

## Settings

<details>
<summary><strong>Largest Neighbor</strong> <code>FPCGExEdgeOutputWithIndexSettings</code></summary>

Output settings for the neighbor with the largest bounds.

⚡ PCG Overridable

| Property | Type | Default | Description |
|----------|------|---------|-------------|
| **Write Direction** | bool | `false` | Write direction vector toward neighbor |
| **Direction** | FName | `LargestDir` | Attribute name for direction |
| **Invert** | bool | `false` | Invert the direction vector |
| **Write Length** | bool | `false` | Write distance to neighbor |
| **Length** | FName | `LargestLen` | Attribute name for length |
| **Write Edge Index** | bool | `false` | Write edge index in edges collection |
| **Edge Index** | FName | `LargestEdgeIndex` | Attribute name for edge index |
| **Write Vtx Index** | bool | `false` | Write neighbor vertex index |
| **Vtx Index** | FName | `LargestVtxIndex` | Attribute name for vertex index |
| **Write Neighbor Count** | bool | `false` | Write total neighbor count |
| **Neighbor Count** | FName | `LargestNeighborCount` | Attribute name for count |

</details>

<details>
<summary><strong>Smallest Neighbor</strong> <code>FPCGExEdgeOutputWithIndexSettings</code></summary>

Output settings for the neighbor with the smallest bounds.

⚡ PCG Overridable

| Property | Type | Default | Description |
|----------|------|---------|-------------|
| **Write Direction** | bool | `false` | Write direction vector toward neighbor |
| **Direction** | FName | `SmallestDir` | Attribute name for direction |
| **Invert** | bool | `false` | Invert the direction vector |
| **Write Length** | bool | `false` | Write distance to neighbor |
| **Length** | FName | `SmallestLen` | Attribute name for length |
| **Write Edge Index** | bool | `false` | Write edge index in edges collection |
| **Edge Index** | FName | `SmallestEdgeIndex` | Attribute name for edge index |
| **Write Vtx Index** | bool | `false` | Write neighbor vertex index |
| **Vtx Index** | FName | `SmallestVtxIndex` | Attribute name for vertex index |
| **Write Neighbor Count** | bool | `false` | Write total neighbor count |
| **Neighbor Count** | FName | `SmallestNeighborCount` | Attribute name for count |

</details>

---

📦 **Module**: `PCGExElementsClusters` · 📄 [Source](https://github.com/Nebukam/PCGExtendedToolkit/blob/main/Source/PCGExElementsClusters/Public/Elements/Meta/VtxProperties/PCGExVtxPropertySpecialNeighbors.h)
