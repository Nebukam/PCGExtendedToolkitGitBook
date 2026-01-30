---
icon: ruler
description: 'In editor :: PCGEx | Vtx : Special Edges'
---

# Vtx : Special Edges

Find shortest, longest, and average edge information per vertex.

## Overview

For each vertex, this property node examines all connected edges and identifies the shortest, longest, and computes the average. It outputs direction vectors, lengths, and indices.

```
Vertex with edges:          Output attributes:
      B                     Shortest: A (len=5)
      │ len=15              Longest: B (len=15)
      │                     Average: direction, len=10
  A───●───C
len=5   len=10
```

## How It Works

1. **Examine edges**: For each vertex, iterate through all connected edges
2. **Find extremes**: Track shortest and longest edges by length
3. **Compute average**: Calculate average direction and length across all edges
4. **Write outputs**: Store selected values as vertex attributes

## Settings

<details>
<summary><strong>Shortest Edge</strong> <code>FPCGExEdgeOutputWithIndexSettings</code></summary>

Output settings for the shortest edge connected to each vertex.

⚡ PCG Overridable

| Property | Type | Default | Description |
|----------|------|---------|-------------|
| **Write Direction** | bool | `false` | Write direction vector toward endpoint |
| **Direction** | FName | `ShortestDir` | Attribute name for direction |
| **Invert** | bool | `false` | Invert the direction vector |
| **Write Length** | bool | `false` | Write edge length |
| **Length** | FName | `ShortestLen` | Attribute name for length |
| **Write Edge Index** | bool | `false` | Write edge index in edges collection |
| **Edge Index** | FName | `ShortestEdgeIndex` | Attribute name for edge index |
| **Write Vtx Index** | bool | `false` | Write connected vertex index |
| **Vtx Index** | FName | `ShortestVtxIndex` | Attribute name for vertex index |
| **Write Neighbor Count** | bool | `false` | Write total neighbor count |
| **Neighbor Count** | FName | `ShortestNeighborCount` | Attribute name for count |

</details>

<details>
<summary><strong>Longest Edge</strong> <code>FPCGExEdgeOutputWithIndexSettings</code></summary>

Output settings for the longest edge connected to each vertex.

⚡ PCG Overridable

| Property | Type | Default | Description |
|----------|------|---------|-------------|
| **Write Direction** | bool | `false` | Write direction vector toward endpoint |
| **Direction** | FName | `LongestDir` | Attribute name for direction |
| **Invert** | bool | `false` | Invert the direction vector |
| **Write Length** | bool | `false` | Write edge length |
| **Length** | FName | `LongestLen` | Attribute name for length |
| **Write Edge Index** | bool | `false` | Write edge index in edges collection |
| **Edge Index** | FName | `LongestEdgeIndex` | Attribute name for edge index |
| **Write Vtx Index** | bool | `false` | Write connected vertex index |
| **Vtx Index** | FName | `LongestVtxIndex` | Attribute name for vertex index |
| **Write Neighbor Count** | bool | `false` | Write total neighbor count |
| **Neighbor Count** | FName | `LongestNeighborCount` | Attribute name for count |

</details>

<details>
<summary><strong>Average Edge</strong> <code>FPCGExSimpleEdgeOutputSettings</code></summary>

Output settings for the average across all edges connected to each vertex.

⚡ PCG Overridable

| Property | Type | Default | Description |
|----------|------|---------|-------------|
| **Write Direction** | bool | `false` | Write average direction vector |
| **Direction** | FName | `AverageDir` | Attribute name for direction |
| **Invert** | bool | `false` | Invert the direction vector |
| **Write Length** | bool | `false` | Write average edge length |
| **Length** | FName | `AverageLen` | Attribute name for length |

</details>

---

📦 **Module**: `PCGExElementsClusters` · 📄 [Source](https://github.com/Nebukam/PCGExtendedToolkit/blob/main/Source/PCGExElementsClusters/Public/Elements/Meta/VtxProperties/PCGExVtxPropertySpecialEdges.h)
