---
icon: diagram-project
description: 'In editor :: PCGEx | Path : To Clusters'
---

# Path : To Clusters

Merge **paths into edge clusters**, creating graph structures from linear path data.

## Overview

Path to Clusters converts path point collections into cluster format (Vtx + Edges). Multiple paths can be fused together, detecting intersections where paths cross or share vertices. This enables pathfinding and graph algorithms on path-based input data.

## Key Behavior

```
Path Inputs:                 Cluster Output:
  ●───●───●───●                  ●───●───●───●
                                     │
  ●───●───●───●        →         ●───●───●───●
        │                            │
  ●───●─┼─●───●                  ●───●───●───●
        │
        ●                            (fused at intersection)
```

**Fusing**: When enabled, detects Point/Point, Point/Edge, and Edge/Edge intersections to create a unified connected graph.

## How It Works

1. **Convert Paths**: Transform each path into vertex/edge format
2. **Fuse Vertices** (optional): Merge overlapping path endpoints
3. **Find Intersections** (optional): Detect Point/Edge and Edge/Edge crossings
4. **Blend Attributes**: Merge attributes at intersection points
5. **Build Cluster**: Generate unified Vtx/Edges output

## Inputs

| Pin | Type | Description |
|-----|------|-------------|
| **In** | Points | Path point collections to convert |

## Outputs

| Pin | Type | Description |
|-----|------|-------------|
| **Vtx** | Points | Cluster vertices |
| **Edges** | Points | Cluster edges |

## Settings

### Settings

<details>
<summary><strong>Fuse Paths</strong> <code>bool</code></summary>

Whether to fuse paths into a single unified graph. When disabled, each path becomes a separate cluster.

Default: `true`

⚡ PCG Overridable

</details>

### Intersection Detection

<details>
<summary><strong>Point/Point Settings</strong> <code>FPCGExPointPointIntersectionDetails</code></summary>

Settings for merging overlapping vertices from different paths. Includes tolerance, fuse method, distance measurement, and union metadata options.

See [Intersection Details → Point/Point](../shared-settings/intersection-details.md#pointpoint-intersection) for full settings documentation.

⚡ PCG Overridable
📋 Visible when: `Fuse Paths = true`

</details>

<details>
<summary><strong>Find Point Edge Intersections</strong> <code>bool</code></summary>

Detect where path vertices lie on edges of other paths.

Default: `false`

⚡ PCG Overridable
📋 Visible when: `Fuse Paths = true`

</details>

<details>
<summary><strong>Point/Edge Settings</strong> <code>FPCGExPointEdgeIntersectionDetails</code></summary>

Settings for Point/Edge intersection detection. Includes tolerance, self-intersection toggle, snap behavior, and metadata options.

See [Intersection Details → Point/Edge](../shared-settings/intersection-details.md#pointedge-intersection) for full settings documentation.

⚡ PCG Overridable
📋 Visible when: `Fuse Paths = true AND Find Point Edge Intersections = true`

</details>

<details>
<summary><strong>Find Edge Edge Intersections</strong> <code>bool</code></summary>

Detect where edges from different paths cross each other.

Default: `false`

⚡ PCG Overridable
📋 Visible when: `Fuse Paths = true`

</details>

<details>
<summary><strong>Edge/Edge Settings</strong> <code>FPCGExEdgeEdgeIntersectionDetails</code></summary>

Settings for Edge/Edge crossing detection. Includes tolerance, self-intersection toggle, angle filtering, and metadata options.

See [Intersection Details → Edge/Edge](../shared-settings/intersection-details.md#edgeedge-intersection) for full settings documentation.

⚡ PCG Overridable
📋 Visible when: `Fuse Paths = true AND Find Edge Edge Intersections = true`

</details>

### Data Blending

<details>
<summary><strong>Default Points Blending Details</strong> <code>FPCGExBlendingDetails</code></summary>

How to blend attributes for fused vertex points.

📋 Visible when: `Fuse Paths = true`

</details>

<details>
<summary><strong>Default Edges Blending Details</strong> <code>FPCGExBlendingDetails</code></summary>

How to blend attributes for fused edge points.

📋 Visible when: `Fuse Paths = true`

</details>

<details>
<summary><strong>Use Custom Point Edge Blending</strong> <code>bool</code></summary>

Use separate blending for Point/Edge intersections.

Default: `false`

⚡ PCG Overridable
📋 Visible when: `Fuse Paths = true`

</details>

<details>
<summary><strong>Custom Point Edge Blending Details</strong> <code>FPCGExBlendingDetails</code></summary>

Blending settings for Point/Edge intersections.

⚡ PCG Overridable
📋 Visible when: `Use Custom Point Edge Blending = true`

</details>

<details>
<summary><strong>Use Custom Edge Edge Blending</strong> <code>bool</code></summary>

Use separate blending for Edge/Edge crossings.

Default: `false`

⚡ PCG Overridable
📋 Visible when: `Fuse Paths = true`

</details>

<details>
<summary><strong>Custom Edge Edge Blending Details</strong> <code>FPCGExBlendingDetails</code></summary>

Blending settings for Edge/Edge crossings.

⚡ PCG Overridable
📋 Visible when: `Use Custom Edge Edge Blending = true`

</details>

### Carry Over

<details>
<summary><strong>Carry Over Settings</strong> <code>FPCGExCarryOverDetails</code></summary>

Controls which attributes are carried over to the output.

⚡ PCG Overridable

</details>

### Cluster Output Settings

<details>
<summary><strong>Cluster Output Settings</strong> <code>FPCGExGraphBuilderDetails</code></summary>

Controls how the output cluster is constructed. See [Delaunay 3D](../diagrams/delaunay-3d.md#cluster-output-settings) for full documentation.

⚡ PCG Overridable

</details>

## Examples

**Simple path conversion** (no fusion):
- **Fuse Paths**: `false`
- Each path becomes an independent cluster

**Merge overlapping paths**:
- **Fuse Paths**: `true`
- Point/Point fusion with small tolerance
- Paths sharing endpoints become connected

**Full intersection network**:
- **Fuse Paths**: `true`
- **Find Point Edge Intersections**: `true`
- **Find Edge Edge Intersections**: `true`
- Complete road/river network from crossing paths

## Related

### Cluster Operations
- [Break to Paths](./break-to-paths.md) - Reverse operation
- [Fuse Clusters](../operations/fuse-clusters.md) - Similar fusion for cluster inputs
- [Sanitize Clusters](../operations/sanitize-clusters.md) - Clean up after conversion

### Pathfinding
- Pathfinding nodes can operate on the resulting cluster

---

📦 **Module**: `PCGExElementsClusters` · 📄 [Source](https://github.com/Nebukam/PCGExtendedToolkit/blob/main/Source/PCGExElementsClusters/Public/Elements/Paths/PCGExPathToClusters.h)
