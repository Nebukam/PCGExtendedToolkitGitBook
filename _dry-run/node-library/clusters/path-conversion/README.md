---
icon: route
description: Convert between paths and cluster structures
---

# Path Conversion

Nodes for **converting between paths and clusters**. Paths are sequential point chains; clusters are graph structures with arbitrary connectivity.

## Nodes

| Node | Description |
|------|-------------|
| [Path to Clusters](./path-to-clusters.md) | Merge paths into edge clusters with intersection detection |
| [Break to Paths](./break-to-paths.md) | Extract continuous edge chains as paths |
| [Cut Clusters](./cut-clusters.md) | Cut cluster nodes and edges using paths |

## Overview

```
Paths:                      Cluster:
  ●→●→●→●                     ●───●───●
                              │   │   │
  ●→●→●→●        ↔            ●───●───●
                              │   │   │
  ●→●→●→●                     ●───●───●

Sequential chains           Graph structure
```

## Path to Clusters

Converts paths into a unified cluster by:
1. Creating edges from path segments
2. Detecting where paths intersect (optional)
3. Merging overlapping vertices
4. Creating new vertices at edge crossings

Uses [Intersection Details](../shared-settings/intersection-details.md) for Point/Point, Point/Edge, and Edge/Edge detection.

## Break to Paths

Extracts continuous edge chains from clusters:
- Finds chains of degree-2 vertices
- Outputs each chain as a separate path
- Useful for extracting roads, rivers, or boundaries from graphs

## Cut Clusters

Uses paths as cutting tools to split cluster edges and vertices along the path boundaries.

---

📦 **Module**: `PCGExElementsClusters`
