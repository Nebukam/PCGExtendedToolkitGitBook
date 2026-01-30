---
icon: object-group
description: Filter and select clusters or vertices
---

# Selection & Filtering

Nodes for **filtering and selecting** clusters, vertices, or edges based on various criteria.

## Nodes

| Node | Description |
|------|-------------|
| [Filter Vtx](./filter-vtx.md) | Filter vertices from clusters |
| [Pick Closest](./pick-closest.md) | Pick clusters closest to target points |
| [Find Clusters](./find-clusters.md) | Find vtx/edge pairs in data collections |
| [Find Point on Bounds](./find-point-on-bounds.md) | Find closest vtx or edge on cluster bounds |

## Overview

```
Input Clusters:             After Selection:
    ●───●───●                   ●───●───●
    │   │   │                       │
    ●───●───●      →               ●
    │   │   │
    ●───●───●

All clusters               Only matching selection
```

## Filter Vtx

Filters vertices using standard PCGEx filter system:
- Remove vertices that don't match criteria
- Optionally remove edges connected to filtered vertices
- Useful for pruning unwanted parts of the graph

## Pick Closest

Selects clusters based on proximity to target points:
- Find the nearest cluster to each target
- Useful for associating clusters with locations

## Find Clusters

Locates vtx/edge pairs within data collections:
- Matches vertices and edges that belong together
- Useful when clusters are stored separately

## Find on Bounds

Finds vertices or edges on cluster boundaries:
- Closest point on cluster bounds
- Useful for edge-of-graph operations

---

📦 **Module**: `PCGExElementsClusters`
