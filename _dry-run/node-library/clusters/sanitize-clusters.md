---
icon: diagram-project
description: 'In editor :: PCGEx | Cluster : Sanitize'
---

# Cluster : Sanitize

Ensure the input vertices and edges output **clean, interconnected clusters**. May create new clusters but does not create or delete points.

## Overview

Sanitize Clusters validates and reorganizes cluster data to ensure proper connectivity. If input vertices and edges form disconnected sub-graphs, this node separates them into distinct clusters. It's useful for cleaning up cluster data after operations that may have broken connectivity.

## Key Behavior

```
Before:                        After Sanitize:
   ●───●───●                      Cluster 1:
       │                          ●───●───●
       ●                              │
                                      ●
   ●───●
       │                          Cluster 2:
       ●                          ●───●
                                      │
Disconnected pieces               ●
in same collection
                                  Separated into valid clusters
```

**Important**: Sanitize does not modify points or edges - it only reorganizes them into properly connected clusters.

## How It Works

1. **Analyze Connectivity**: Find all connected components in the graph
2. **Separate Clusters**: Group vertices and edges by their connected component
3. **Validate**: Ensure each output cluster is internally connected
4. **Output**: Generate separate cluster outputs for each connected component

## Inputs

| Pin | Type | Description |
|-----|------|-------------|
| **Vtx** | Points | Vertex points (may contain disconnected components) |
| **Edges** | Points | Edge points |

## Outputs

| Pin | Type | Description |
|-----|------|-------------|
| **Vtx** | Points | Cleaned vertex points (one collection per connected cluster) |
| **Edges** | Points | Cleaned edge points (one collection per connected cluster) |

## Settings

### Cluster Output Settings

<details>
<summary><strong>Cluster Output Settings</strong> <code>FPCGExGraphBuilderDetails</code></summary>

Controls how output clusters are constructed.

**Note**: Isolated point pruning is ignored by this node - all input points are preserved.

See [Delaunay 3D](./delaunay-3d.md#cluster-output-settings) for full documentation of available settings.

⚡ PCG Overridable

</details>

## Examples

**After merging clusters from different sources**:
- Input: Mixed vertex/edge data that may not be fully connected
- Output: Separate, valid clusters for each connected component

**Validating imported graph data**:
- Ensures external graph data meets PCGEx cluster requirements
- Separates any disconnected portions into proper clusters

## Related

### Cluster Operations
- [Fuse Clusters](./fuse-clusters.md) - Merge overlapping clusters (use before Sanitize)
- [Merge Vertices](./merge-vertices.md) - Combine vertex collections

---

📦 **Module**: `PCGExElementsClusters` · 📄 [Source](https://github.com/Nebukam/PCGExtendedToolkit/blob/main/Source/PCGExElementsClusters/Public/Elements/PCGExSanitizeClusters.h)
