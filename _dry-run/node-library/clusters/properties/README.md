---
icon: tag
description: Write computed properties to vertices and edges
---

# Vertex & Edge Properties

Nodes for **extracting and writing computed properties** to cluster vertices and edges. These nodes analyze the graph structure and write useful metadata as attributes.

## Nodes

| Node | Description |
|------|-------------|
| [Vtx Properties](./vtx-properties/) | Extract edge information to vertex attributes |
| [Edge Properties](./edge-properties.md) | Extract endpoint information to edge attributes |
| [Sample Neighbors](./sample-neighbors.md) | Sample attributes from connected vertices |

## Overview

```
Cluster Input:              With Properties:
    ●───●───●                   ●───●───●
    │   │   │                   │   │   │
    ●───●───●      →           ●───●───●

                            Vtx: EdgeCount, Normal, OOB
                            Edge: Length, Direction, Heuristics
```

## Vtx Properties

Writes per-vertex attributes based on graph topology:
- **Edge Count**: Number of connected edges
- **Normal**: Direction derived from neighbor positions
- **OOB Mutation**: Transform vertices into oriented bounding boxes

## Edge Properties

Writes per-edge attributes with optional solidification:
- **Length**: Distance between endpoints
- **Direction**: Normalized vector from start to end
- **Heuristics**: Pathfinding scores
- **Solidification**: Transform edges into 3D boxes

## Sample Neighbors

Samples and blends attribute values from connected vertices:
- **Multiple Samplers**: Chain different blending operations
- **Depth Traversal**: Sample beyond immediate neighbors
- **Filtering**: Control which neighbors are sampled
- Useful for smoothing or propagating data across the graph

---

📦 **Module**: `PCGExElementsClusters`
