---
icon: gears
description: Manipulate, combine, and transform cluster structures
---

# Cluster Operations

Nodes for **manipulating, combining, and transforming** cluster structures. These operations modify the graph topology - merging vertices, connecting isolated clusters, cleaning up invalid edges, and more.

## Nodes

| Node | Description |
|------|-------------|
| [Fuse Clusters](./fuse-clusters.md) | Find and merge point/edge intersections across clusters |
| [Sanitize Clusters](./sanitize-clusters.md) | Ensure clean, interconnected clusters |
| [Connect Clusters](./connect-clusters.md) | Connect isolated clusters by closest vertices |
| [Merge Vertices](./merge-vertices.md) | Merge vertices so all edges share the same collection |
| [Simplify Clusters](./simplify-clusters.md) | Simplify by operating on isolated chains |
| [Make Unique](./make-unique.md) | Output unique data pointers for input clusters |
| [Pack Clusters](./pack-clusters.md) | Pack each cluster into a single point data object |
| [Unpack Clusters](./unpack-clusters.md) | Restore vtx/edge clusters from packed dataset |

## Overview

```
Before Fuse:                After Fuse:
  Cluster A    Cluster B      Combined Cluster
    ●───●         ●───●            ●───●───●
    │   │    +    │   │            │   │   │
    ●───●         ●───●    →       ●───●───●
        ↑         ↑                    │
        └─overlap─┘              merged vertex
```

## Key Operations

### Fuse Clusters

Detects intersections between clusters and merges them:
- **Point/Point**: Overlapping vertices become one
- **Point/Edge**: Vertices on edges create new splits
- **Edge/Edge**: Crossing edges create new vertices

See [Intersection Details](../shared-settings/intersection-details.md) for full settings.

### Connect Clusters

Bridges isolated graph components:
- **Delaunay 3D/2D**: Natural connections via triangulation
- **Least Edges**: Minimum bridges for full connectivity
- **Most Edges**: Every cluster connected to every other

### Simplify Clusters

Reduces graph complexity:
- Collapses chains of degree-2 vertices
- Angular threshold filtering
- Optional leaf pruning

### Pack/Unpack

Converts between standard Vtx/Edges format and packed single-collection format for storage or transmission.

---

📦 **Module**: `PCGExElementsClusters`
