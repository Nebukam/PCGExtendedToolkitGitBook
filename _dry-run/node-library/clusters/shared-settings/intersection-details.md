---
icon: crosshairs
description: Shared intersection detection settings for cluster fusion operations
---

# Intersection Details

Intersection detection settings control how clusters detect overlapping vertices, points on edges, and crossing edges. These shared settings are used by [Fuse Clusters](./fuse-clusters.md) and [Path to Clusters](./path-to-clusters.md).

## Point/Point Intersection

`FPCGExPointPointIntersectionDetails`

Detects and merges vertices that are close enough to be considered the same point.

### Fuse Details

<details>
<summary><strong>Component Wise Tolerance</strong> <code>bool</code></summary>

Use per-axis tolerances (Manhattan-style) instead of a single spherical tolerance.

Default: `false`

⚡ PCG Overridable

</details>

<details>
<summary><strong>Tolerance</strong> <code>double</code></summary>

Maximum distance between points to consider them overlapping. Points within this distance will be merged.

Default: `0.001` (DBL_COLLOCATION_TOLERANCE)

⚡ PCG Overridable
📋 Visible when: `Component Wise Tolerance = false`

</details>

<details>
<summary><strong>Tolerances</strong> <code>FVector</code></summary>

Per-axis (X, Y, Z) tolerances for Manhattan-style distance checking.

Default: `(0.001, 0.001, 0.001)`

⚡ PCG Overridable
📋 Visible when: `Component Wise Tolerance = true`

</details>

<details>
<summary><strong>Source Distance</strong> <code>EPCGExDistance</code></summary>

How to measure distance from the source point.

| Option | Behavior |
|--------|----------|
| **Center** | Use point center position |
| **Sphere Bounds** | Use point's scaled sphere bounds |
| **Box Bounds** | Use point's box extents |

Default: `Center`

⚡ PCG Overridable

</details>

<details>
<summary><strong>Target Distance</strong> <code>EPCGExDistance</code></summary>

How to measure distance to the target point.

| Option | Behavior |
|--------|----------|
| **Center** | Use point center position |
| **Sphere Bounds** | Use point's scaled sphere bounds |
| **Box Bounds** | Use point's box extents |

Default: `Center`

⚡ PCG Overridable

</details>

<details>
<summary><strong>Fuse Method</strong> <code>EPCGExFuseMethod</code></summary>

Algorithm used for point fusion.

| Option | Behavior |
|--------|----------|
| **Spatial Hash** | Fast but blocky. Creates grid-aligned approximation. |
| **Octree** | Slow but precise. Respects original topology. Requires stable insertion with large tolerances. |

Default: `Spatial Hash`

⚡ PCG Overridable

</details>

<details>
<summary><strong>Voxel Grid Offset</strong> <code>FVector</code></summary>

Offset the spatial hash grid by this amount. Useful for controlling which points become the "master" when fusing.

Default: `(0, 0, 0)`

⚡ PCG Overridable
📋 Visible when: `Fuse Method = Spatial Hash`

</details>

<details>
<summary><strong>Stabilize Insertion Order</strong> <code>bool</code></summary>

When fusing over very large radii, ensures consistent point selection by stabilizing insertion order. Significantly slower but deterministic.

Default: `false`

</details>

### Point Union Metadata

<details>
<summary><strong>Write Is Union</strong> <code>bool</code></summary>

Write a boolean attribute marking points that are the result of a fusion operation.

Default: `false`

⚡ PCG Overridable

</details>

<details>
<summary><strong>Is Union Attribute Name</strong> <code>FName</code></summary>

Name of the boolean union marker attribute.

Default: `bIsUnion`

⚡ PCG Overridable
📋 Visible when: `Write Is Union = true`

</details>

<details>
<summary><strong>Write Union Size</strong> <code>bool</code></summary>

Write the number of points that were fused together.

Default: `false`

⚡ PCG Overridable

</details>

<details>
<summary><strong>Union Size Attribute Name</strong> <code>FName</code></summary>

Name of the union size attribute (int32).

Default: `UnionSize`

⚡ PCG Overridable
📋 Visible when: `Write Union Size = true`

</details>

### Edge Union Metadata

<details>
<summary><strong>Write Is Union</strong> <code>bool</code></summary>

Write a boolean attribute marking edges that are the result of a fusion operation.

Default: `false`

⚡ PCG Overridable

</details>

<details>
<summary><strong>Is Union Attribute Name</strong> <code>FName</code></summary>

Name of the boolean union marker attribute for edges.

Default: `bIsUnion`

⚡ PCG Overridable
📋 Visible when: `Write Is Union = true`

</details>

<details>
<summary><strong>Write Union Size</strong> <code>bool</code></summary>

Write the number of edges that were fused together.

Default: `false`

⚡ PCG Overridable

</details>

<details>
<summary><strong>Union Size Attribute Name</strong> <code>FName</code></summary>

Name of the union size attribute for edges.

Default: `UnionSize`

⚡ PCG Overridable
📋 Visible when: `Write Union Size = true`

</details>

<details>
<summary><strong>Write Is Sub Edge</strong> <code>bool</code></summary>

Write a boolean marking edges created from subdivisions (when an edge is split by an intersection).

Default: `false`

⚡ PCG Overridable

</details>

<details>
<summary><strong>Is Sub Edge Attribute Name</strong> <code>FName</code></summary>

Name of the sub-edge marker attribute.

Default: `SubEdge`

⚡ PCG Overridable
📋 Visible when: `Write Is Sub Edge = true`

</details>

---

## Point/Edge Intersection

`FPCGExPointEdgeIntersectionDetails`

Detects vertices that lie on edges from other clusters, creating new vertices at intersection points.

<details>
<summary><strong>Enable Self Intersection</strong> <code>bool</code></summary>

When enabled, points check against edges from their own cluster. When disabled, points only check edges from other clusters.

Default: `true`

⚡ PCG Overridable

</details>

### Fuse Details

<details>
<summary><strong>Component Wise Tolerance</strong> <code>bool</code></summary>

Use per-axis tolerances instead of spherical tolerance.

Default: `false`

⚡ PCG Overridable

</details>

<details>
<summary><strong>Tolerance</strong> <code>double</code></summary>

Maximum distance from the edge line for a point to be considered "on" the edge.

Default: `0.001`

⚡ PCG Overridable
📋 Visible when: `Component Wise Tolerance = false`

</details>

<details>
<summary><strong>Tolerances</strong> <code>FVector</code></summary>

Per-axis tolerances.

Default: `(0.001, 0.001, 0.001)`

⚡ PCG Overridable
📋 Visible when: `Component Wise Tolerance = true`

</details>

<details>
<summary><strong>Source Distance</strong> <code>EPCGExDistance</code></summary>

How to measure distance from the source point to the edge.

| Option | Behavior |
|--------|----------|
| **Center** | Use point center position |
| **Sphere Bounds** | Use point's scaled sphere bounds |
| **Box Bounds** | Use point's box extents |

Default: `Center`

⚡ PCG Overridable

</details>

### Intersection Options

<details>
<summary><strong>Snap On Edge</strong> <code>bool</code></summary>

When enabled, intersecting points are moved exactly onto the edge line.

Default: `false`

⚡ PCG Overridable

</details>

### Metadata

<details>
<summary><strong>Write Is Intersector</strong> <code>bool</code></summary>

Write a boolean marking points that intersected an edge.

Default: `false`

⚡ PCG Overridable

</details>

<details>
<summary><strong>Is Intersector Attribute Name</strong> <code>FName</code></summary>

Name of the intersector marker attribute.

Default: `bIsIntersector`

⚡ PCG Overridable
📋 Visible when: `Write Is Intersector = true`

</details>

---

## Edge/Edge Intersection

`FPCGExEdgeEdgeIntersectionDetails`

Detects where edges from different clusters cross each other, creating new vertices at crossing points.

<details>
<summary><strong>Enable Self Intersection</strong> <code>bool</code></summary>

When enabled, edges check against other edges from their own cluster. When disabled, edges only check edges from other clusters.

Default: `true`

⚡ PCG Overridable

</details>

<details>
<summary><strong>Tolerance</strong> <code>double</code></summary>

Maximum distance between crossing points to create an intersection vertex.

Default: `0.0001` (DBL_INTERSECTION_TOLERANCE)

⚡ PCG Overridable

</details>

### Angle Filtering

<details>
<summary><strong>Use Min Angle</strong> <code>bool</code></summary>

Filter intersections by minimum angle between edges.

Default: `false`

⚡ PCG Overridable

</details>

<details>
<summary><strong>Min Angle</strong> <code>double</code></summary>

Minimum angle (in degrees) between edges to count as intersection. Edges crossing at shallower angles are ignored.

Range: `0` to `90`
Default: `0`

⚡ PCG Overridable
📋 Visible when: `Use Min Angle = true`

</details>

<details>
<summary><strong>Use Max Angle</strong> <code>bool</code></summary>

Filter intersections by maximum angle between edges.

Default: `false`

⚡ PCG Overridable

</details>

<details>
<summary><strong>Max Angle</strong> <code>double</code></summary>

Maximum angle (in degrees) between edges to count as intersection. Edges crossing at steeper angles are ignored.

Range: `0` to `90`
Default: `90`

⚡ PCG Overridable
📋 Visible when: `Use Max Angle = true`

</details>

### Metadata

<details>
<summary><strong>Write Crossing</strong> <code>bool</code></summary>

Write a boolean marking points created from edge crossings.

Default: `false`

⚡ PCG Overridable

</details>

<details>
<summary><strong>Crossing Attribute Name</strong> <code>FName</code></summary>

Name of the crossing marker attribute.

Default: `bCrossing`

⚡ PCG Overridable
📋 Visible when: `Write Crossing = true`

</details>

---

## Visual Overview

```
Point/Point:              Point/Edge:              Edge/Edge:
   ●───●                     ●                        ╲   ╱
     ↓                       │                         ╲ ╱
   ●─●─●                   ●─┼───●                    ──●──
                             │                         ╱ ╲
Overlapping vertices    Point on edge line        Edge crossing
become one              splits the edge           creates new vertex
```

## Used By

- [Fuse Clusters](./fuse-clusters.md) - All three intersection types
- [Path to Clusters](./path-to-clusters.md) - All three intersection types

---

📦 **Module**: `PCGExBlending` · 📄 [Source](https://github.com/Nebukam/PCGExtendedToolkit/blob/main/Source/PCGExBlending/Public/Details/PCGExIntersectionDetails.h)
