---
icon: link
description: 'In editor :: PCGEx | Cluster : Connect'
---

# Cluster : Connect

Connects **isolated edge clusters** by their closest vertices, creating bridge edges between separate graph components that share the same vertex group.

## Overview

When you have multiple disconnected clusters within the same vertex collection, Connect Clusters adds bridge edges to join them. This is useful for ensuring full connectivity across fragmented graphs, like connecting road segments or linking terrain regions.

## Key Behavior

```
Before:                        After Connect:
  Cluster A    Cluster B         Cluster A────Cluster B
    ●───●        ●───●              ●───●────●───●
    │   │        │   │              │   │    │   │
    ●───●        ●───●              ●───●    ●───●

Isolated clusters              Connected via bridge edges
```

## How It Works

1. **Identify Clusters**: Find disconnected components within the same vtx group
2. **Find Bridge Points**: Use selected method to determine connection points
3. **Create Bridges**: Add new edges connecting the clusters
4. **Flag Bridges** (optional): Mark bridge vertices and edges

## Inputs

| Pin | Type | Description |
|-----|------|-------------|
| **Vtx** | Points | Cluster vertices |
| **Edges** | Points | Cluster edges |

## Outputs

| Pin | Type | Description |
|-----|------|-------------|
| **Vtx** | Points | Vertices (unchanged) |
| **Edges** | Points | Edges with new bridge connections |

## Settings

### Connection Method

<details>
<summary><strong>Connect Method</strong> <code>EPCGExBridgeClusterMethod</code></summary>

Algorithm used to find and create bridge edges.

| Option | Behavior |
|--------|----------|
| **Delaunay 3D** | Uses 3D Delaunay triangulation to find natural connections |
| **Delaunay 2D** | Uses 2D Delaunay triangulation with projection |
| **Least Edges** | Connects all clusters using minimum number of bridges |
| **Most Edges** | Each cluster gets a bridge to every other cluster |

Default: `Delaunay 3D`

</details>

<details>
<summary><strong>Projection Details</strong> <code>FPCGExGeo2DProjectionDetails</code></summary>

Projection settings for 2D Delaunay method.

⚡ PCG Overridable
📋 Visible when: `Connect Method = Delaunay 2D`

</details>

### Additional Outputs

<details>
<summary><strong>Flag Vtx Connector</strong> <code>bool</code></summary>

Write the number of bridges connected to each vertex.

Default: `false`

⚡ PCG Overridable

</details>

<details>
<summary><strong>Vtx Connector Flag Name</strong> <code>FName</code></summary>

Attribute name for the vertex bridge count (int32).

Default: `NumBridges`

⚡ PCG Overridable
📋 Visible when: `Flag Vtx Connector = true`

</details>

<details>
<summary><strong>Flag Edge Connector</strong> <code>bool</code></summary>

Flag edges that are bridges between clusters.

Default: `false`

⚡ PCG Overridable

</details>

<details>
<summary><strong>Edge Connector Flag Name</strong> <code>FName</code></summary>

Attribute name for the bridge edge flag (bool).

Default: `IsBridge`

⚡ PCG Overridable
📋 Visible when: `Flag Edge Connector = true`

</details>

### Data Handling

<details>
<summary><strong>Carry Over Settings</strong> <code>FPCGExCarryOverDetails</code></summary>

Controls which attributes are carried over to the output.

⚡ PCG Overridable

</details>

<details>
<summary><strong>Cluster Output Settings</strong> <code>FPCGExGraphBuilderDetails</code></summary>

Controls how the output cluster is constructed.

⚡ PCG Overridable

</details>

### Warnings

<details>
<summary><strong>Quiet No Bridge Warning</strong> <code>bool</code></summary>

If enabled, won't throw a warning if no bridge could be created.

Default: `false`

</details>

## Output Attributes

| Attribute | Type | On | Description |
|-----------|------|-----|-------------|
| `NumBridges` | int32 | Vtx | Number of bridges connected to vertex (when enabled) |
| `IsBridge` | bool | Edges | True if edge is a bridge (when enabled) |

## Connection Methods Explained

### Delaunay 3D/2D
Uses Delaunay triangulation across cluster centroids or representative points to find natural connection points. Produces balanced connectivity.

### Least Edges
Finds the minimum spanning tree of connections needed to ensure all clusters are reachable from any other cluster. Produces the sparsest result.

### Most Edges
Creates a bridge between every pair of clusters. Produces the densest result.

## Examples

**Sparse road network connection**:
- **Connect Method**: `Least Edges`
- Minimum bridges to ensure full connectivity

**Dense network with full connectivity**:
- **Connect Method**: `Most Edges`
- Every cluster connected to every other

**Natural terrain connections**:
- **Connect Method**: `Delaunay 3D`
- **Flag Edge Connector**: `true`
- Natural-looking connections with bridge marking

## Related

- [Fuse Clusters](./fuse-clusters.md) - Merge overlapping clusters
- [Sanitize Clusters](./sanitize-clusters.md) - Clean up after connecting

---

📦 **Module**: `PCGExElementsClusters` · 📄 [Source](https://github.com/Nebukam/PCGExtendedToolkit/blob/main/Source/PCGExElementsClusters/Public/Elements/PCGExConnectClusters.h)
