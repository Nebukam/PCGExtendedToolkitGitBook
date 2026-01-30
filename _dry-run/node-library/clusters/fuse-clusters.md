---
icon: diagram-project
description: 'In editor :: PCGEx | Cluster : Fuse'
---

# Cluster : Fuse

Find **Point/Point, Point/Edge, and Edge/Edge intersections** between all input clusters, merging them into unified clusters.

## Overview

Fuse Clusters detects where clusters overlap or intersect and combines them. It can merge overlapping vertices (Point/Point), create new vertices where points cross edges (Point/Edge), and create intersection vertices where edges cross other edges (Edge/Edge).

This is essential for combining multiple cluster sources into a coherent graph.

## Key Behavior

```
Before:                        After Fuse:
   ●───●                         ●───●
       │                             │
   ●───┼───●     →               ●───●───●
       │                             │
   ●───●                         ●───●

Two separate clusters           One unified cluster
edges cross but not connected   new vertex at intersection
```

## How It Works

1. **Point/Point**: Find vertices close enough to merge (within tolerance)
2. **Point/Edge**: Find vertices that lie on edges of other clusters
3. **Edge/Edge**: Find where edges from different clusters cross each other
4. **Merge**: Blend attributes from merged/intersecting elements
5. **Rebuild**: Generate unified cluster output

## Inputs

| Pin | Type | Description |
|-----|------|-------------|
| **Vtx** | Points | Vertex points from input clusters |
| **Edges** | Points | Edge points from input clusters |

## Outputs

| Pin | Type | Description |
|-----|------|-------------|
| **Vtx** | Points | Unified vertex points |
| **Edges** | Points | Unified edge points |

## Settings

### Intersection Detection

<details>
<summary><strong>Point/Point Settings</strong> <code>FPCGExPointPointIntersectionDetails</code></summary>

Settings for detecting and merging overlapping vertices. Includes tolerance, fuse method, distance measurement, and union metadata options.

See [Intersection Details → Point/Point](./intersection-details.md#pointpoint-intersection) for full settings documentation.

⚡ PCG Overridable

</details>

<details>
<summary><strong>Find Point Edge Intersections</strong> <code>bool</code></summary>

Enable detection of points that lie on edges from other clusters.

Default: `false`

⚡ PCG Overridable

</details>

<details>
<summary><strong>Point/Edge Settings</strong> <code>FPCGExPointEdgeIntersectionDetails</code></summary>

Settings for point-on-edge detection. Includes tolerance, self-intersection toggle, snap behavior, and metadata options.

See [Intersection Details → Point/Edge](./intersection-details.md#pointedge-intersection) for full settings documentation.

⚡ PCG Overridable
📋 Visible when: `Find Point Edge Intersections = true`

</details>

<details>
<summary><strong>Find Edge Edge Intersections</strong> <code>bool</code></summary>

Enable detection of edge crossings between clusters.

Default: `false`

⚡ PCG Overridable

</details>

<details>
<summary><strong>Edge/Edge Settings</strong> <code>FPCGExEdgeEdgeIntersectionDetails</code></summary>

Settings for edge crossing detection. Includes tolerance, self-intersection toggle, angle filtering, and metadata options.

See [Intersection Details → Edge/Edge](./intersection-details.md#edgeedge-intersection) for full settings documentation.

⚡ PCG Overridable
📋 Visible when: `Find Edge Edge Intersections = true`

</details>

### Data Blending

<details>
<summary><strong>Default Points Blending Details</strong> <code>FPCGExBlendingDetails</code></summary>

Defines how attributes are merged for fused vertex points.

⚡ PCG Overridable

</details>

<details>
<summary><strong>Default Edges Blending Details</strong> <code>FPCGExBlendingDetails</code></summary>

Defines how attributes are merged for fused edge points.

⚡ PCG Overridable

</details>

<details>
<summary><strong>Use Custom Point Edge Blending</strong> <code>bool</code></summary>

Use separate blending settings for Point/Edge intersection vertices.

Default: `false`

⚡ PCG Overridable

</details>

<details>
<summary><strong>Custom Point Edge Blending Details</strong> <code>FPCGExBlendingDetails</code></summary>

Blending settings for Point/Edge intersection vertices.

⚡ PCG Overridable
📋 Visible when: `Use Custom Point Edge Blending = true`

</details>

<details>
<summary><strong>Use Custom Edge Edge Blending</strong> <code>bool</code></summary>

Use separate blending settings for Edge/Edge crossing vertices.

Default: `false`

⚡ PCG Overridable

</details>

<details>
<summary><strong>Custom Edge Edge Blending Details</strong> <code>FPCGExBlendingDetails</code></summary>

Blending settings for Edge/Edge crossing vertices.

⚡ PCG Overridable
📋 Visible when: `Use Custom Edge Edge Blending = true`

</details>

### Meta Filters

<details>
<summary><strong>Vtx Carry Over Settings</strong> <code>FPCGExCarryOverDetails</code></summary>

Controls which attributes are carried over to the output vertices.

⚡ PCG Overridable

</details>

<details>
<summary><strong>Edges Carry Over Settings</strong> <code>FPCGExCarryOverDetails</code></summary>

Controls which attributes are carried over to the output edges.

⚡ PCG Overridable

</details>

### Cluster Output Settings

<details>
<summary><strong>Cluster Output Settings</strong> <code>FPCGExGraphBuilderDetails</code></summary>

Controls how the output cluster is constructed. See [Delaunay 3D](./delaunay-3d.md#cluster-output-settings) for full documentation.

⚡ PCG Overridable

</details>

## Examples

**Merge overlapping vertices only**:
- Point/Point Settings enabled with small tolerance
- Point/Edge and Edge/Edge disabled
- Fast, simple deduplication

**Full intersection detection**:
- All three intersection types enabled
- Useful for combining grid-like and organic cluster sources

## Related

### Cluster Operations
- [Sanitize Clusters](./sanitize-clusters.md) - Clean up cluster connectivity
- [Merge Vertices](./merge-vertices.md) - Combine vertex collections

---

📦 **Module**: `PCGExElementsClusters` · 📄 [Source](https://github.com/Nebukam/PCGExtendedToolkit/blob/main/Source/PCGExElementsClusters/Public/Elements/PCGExFuseClusters.h)
