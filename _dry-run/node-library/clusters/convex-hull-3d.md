---
icon: diagram-project
description: 'In editor :: PCGEx | Cluster : Convex Hull 3D'
---

# Cluster : Convex Hull 3D

Create a **3D convex hull triangulation** for each input point set, generating a cluster representing the outer boundary surface.

## Overview

The convex hull is the smallest convex shape that contains all input points - like shrink-wrapping a rubber band around the points. This node outputs only the boundary surface as a cluster, with vertices on the hull and edges forming the triangulated surface.

Unlike Delaunay (which connects all points), convex hull only includes points that lie on the outer boundary.

## Key Behavior

```
Input Points:               Convex Hull Output:
    ●       ●                   ●───────●
      ●                        /│\     /│\
  ●     ●     ●      →       ●  │  ●  │  ●
      ●                        \│/     \│/
    ●       ●                   ●───────●

Interior point ● excluded    Only boundary points connected
```

## How It Works

1. **Compute Hull**: Find convex hull of input points (via Delaunay)
2. **Extract Surface**: Identify points and edges on hull boundary
3. **Build Cluster**: Output only hull vertices and their connecting edges

## Inputs

| Pin | Type | Description |
|-----|------|-------------|
| **In** | Points | Input points to compute hull from |

## Outputs

| Pin | Type | Description |
|-----|------|-------------|
| **Vtx** | Points | Hull vertices (subset of input points) |
| **Edges** | Points | Edges connecting hull vertices |

## Settings

### Cluster Output Settings

<details>
<summary><strong>Cluster Output Settings</strong> <code>FPCGExGraphBuilderDetails</code></summary>

Controls how the output cluster is constructed.

**Edge Position** `double` - Interpolation (0-1) for edge point placement.
Default: `0.5`

**Solidification** - Basic edge alignment settings for rendering.

**Remove Small/Big Clusters** - Filter by vertex/edge count.

**Output Edge Length** - Write edge length attribute.

See [Delaunay 3D](./delaunay-3d.md#cluster-output-settings) for full documentation.

⚡ PCG Overridable

</details>

## Output Attributes

| Attribute | Type | On | Description |
|-----------|------|-----|-------------|
| `EdgeLength` | double | Edges | Edge length (when enabled in Cluster Output Settings) |

## Examples

**Extract boundary points**:
- Use hull vertices as boundary markers
- Interior points are automatically excluded

**Create enclosing mesh**:
- Hull edges form triangulated surface
- Useful for collision or visibility bounds

## Comparison: Convex Hull vs Delaunay

| Aspect | Convex Hull | Delaunay |
|--------|-------------|----------|
| **Output Vertices** | Only boundary points | All input points |
| **Connectivity** | Surface triangles only | All nearby connections |
| **Interior Points** | Excluded | Included |
| **Best For** | Boundary detection | Full connectivity |

## Related

### Diagram Nodes
- [Convex Hull 2D](./convex-hull-2d.md) - 2D variant (deprecated)
- [Delaunay 3D](./delaunay-3d.md) - Full triangulation including interior

### Follow-Up Operations
- [Break to Paths](./break-to-paths.md) - Extract hull edges as paths

---

📦 **Module**: `PCGExElementsClusters` · 📄 [Source](https://github.com/Nebukam/PCGExtendedToolkit/blob/main/Source/PCGExElementsClusters/Public/Elements/Diagrams/PCGExBuildConvexHull.h)
