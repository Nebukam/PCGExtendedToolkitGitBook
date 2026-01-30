---
icon: toolbox
description: Specialized cluster operations
---

# Utility

Specialized cluster operations that don't fit neatly into other categories.

## Nodes

| Node | Description |
|------|-------------|
| [Mesh to Clusters](./mesh-to-clusters.md) | Create clusters from mesh topology |
| [Build Custom Graph](./build-custom-graph.md) | Create clusters using blueprint objects |
| [Copy to Points](./copy-to-points.md) | Create cluster copies at target points |
| [Partition Vtx](./partition-vtx.md) | Split vertices into per-cluster groups |
| [Centrality](./centrality.md) | Compute betweenness centrality |

## Overview

### Mesh to Clusters

Converts static mesh topology into cluster format:
- Mesh vertices become cluster vertices
- Mesh edges become cluster edges
- Useful for using mesh geometry as graph data

### Build Custom Graph

Creates clusters procedurally using blueprints:
- Define vertices and edges via code
- Full control over graph structure

### Copy to Points

Instances clusters at target locations:
- Each target point gets a copy of the cluster
- Useful for repeating graph patterns

### Partition Vtx

Splits vertices into groups by cluster membership:
- Separates disconnected components
- Useful for per-cluster processing

### Centrality

Computes betweenness centrality for vertices:
- Measures how often a vertex lies on shortest paths
- High centrality = important hub vertex

---

📦 **Module**: `PCGExElementsClusters`
