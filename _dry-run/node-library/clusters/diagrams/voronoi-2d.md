---
icon: diagram-project
description: 'In editor :: PCGEx | Cluster : Voronoi 2D'
---

# Cluster : Voronoi 2D

Create a **2D Voronoi graph** for each input point set, with support for multiple distance metrics and detailed site output.

## Overview

This node creates a Voronoi diagram by projecting 3D points onto a 2D plane. It offers more options than the 3D variant, including alternative distance metrics (Manhattan, Chebyshev) that produce different cell shapes, and detailed site output with influence statistics.

## Key Behavior

```
Euclidean Metric:        Manhattan Metric:        Chebyshev Metric:
    ┌───┬───┐               ┌─┬─┬─┐               ╔═══╦═══╗
   /   /   /               │ │ │ │               ║   ║   ║
  ├───┼───┤               ├─┼─┼─┤               ╠═══╬═══╣
   \   \   \               │ │ │ │               ║   ║   ║
    └───┴───┘               └─┴─┴─┘               ╚═══╩═══╝
  Natural curves          Axis-aligned           Grid-aligned
```

## How It Works

1. **Project Points**: Flatten 3D points to 2D using projection settings
2. **Compute Voronoi**: Generate cells using selected distance metric
3. **Find Cell Centers**: Calculate center points (centroid or circumcenter)
4. **Build Graph**: Connect adjacent cell centers with edges
5. **Output Sites** (optional): Return original seeds with computed influence data

## Inputs

| Pin | Type | Description |
|-----|------|-------------|
| **In** | Points | Seed points defining Voronoi cells |

## Outputs

| Pin | Type | Description |
|-----|------|-------------|
| **Vtx** | Points | Voronoi cell center vertices |
| **Edges** | Points | Edges connecting adjacent cells |
| **Sites** | Points | (Optional) Original seeds with influence data |

## Settings

### Settings

<details>
<summary><strong>Metric</strong> <code>EPCGExVoronoiMetric</code></summary>

Distance metric used for the Voronoi diagram. Different metrics produce different cell shapes.

| Option | Behavior |
|--------|----------|
| **Euclidean** | Classic Voronoi with curved boundaries (L2 norm) |
| **Manhattan** | Axis-aligned diamond-shaped cells (L1 norm) |
| **Chebyshev** | Axis-aligned square cells (L∞ norm) |

Default: `Euclidean`

⚡ PCG Overridable

</details>

<details>
<summary><strong>Method</strong> <code>EPCGExCellCenter</code></summary>

Method used to find Voronoi cell center location.

| Option | Behavior |
|--------|----------|
| **Centroid** | Geometric center of cell vertices |
| **Circumcenter** | Circumcenter of Delaunay triangle |

Default: `Centroid`

⚡ PCG Overridable

</details>

<details>
<summary><strong>Expand Bounds</strong> <code>double</code></summary>

Amount to expand bounds for point pruning and centroid calculation.

Default: `100`

⚡ PCG Overridable

</details>

<details>
<summary><strong>Prune Out Of Bounds</strong> <code>bool</code></summary>

Remove cell vertices outside expanded bounds.

Default: `false`

⚡ PCG Overridable
📋 Visible when: `Method = Circumcenter`

</details>

<details>
<summary><strong>Projection Details</strong> <code>FPCGExGeo2DProjectionDetails</code></summary>

Controls how 3D points are projected to 2D.

⚡ PCG Overridable

</details>

### Hull Marking

<details>
<summary><strong>Mark Hull</strong> <code>bool</code></summary>

Mark points and edges on the convex hull boundary.

Default: `false`

⚡ PCG Overridable

</details>

<details>
<summary><strong>Hull Attribute Name</strong> <code>FName</code></summary>

Name of the hull boolean attribute.

Default: `bIsOnHull`

⚡ PCG Overridable
📋 Visible when: `Mark Hull = true`

</details>

<details>
<summary><strong>Mark Edge On Touch</strong> <code>bool</code></summary>

Mark edges as "on hull" if at least one endpoint is on hull.

Default: `false`

⚡ PCG Overridable

</details>

### Additional Outputs

<details>
<summary><strong>Output Sites</strong> <code>bool</code></summary>

Output the original seed points with computed influence data.

Default: `true`

⚡ PCG Overridable

</details>

<details>
<summary><strong>Prune Open Sites</strong> <code>bool</code></summary>

Remove sites whose cells were removed due to being out of bounds.

Default: `true`

⚡ PCG Overridable
📋 Visible when: `Output Sites = true AND Prune Out Of Bounds = true`

</details>

<details>
<summary><strong>Open Site Flag</strong> <code>FName</code></summary>

Attribute name to flag sites belonging to open (boundary) cells.

Default: `OpenSite`

📋 Visible when: `Output Sites = true AND Prune Out Of Bounds = true AND Prune Open Sites = false`

</details>

### Sites Output Details

<details>
<summary><strong>Write Influences Count</strong> <code>bool</code></summary>

Write the number of Voronoi cell vertices influenced by each site.

Default: `false`

⚡ PCG Overridable

</details>

<details>
<summary><strong>Influences Count Attribute Name</strong> <code>FName</code></summary>

Attribute name for influences count.

Default: `InfluencesCount`

⚡ PCG Overridable
📋 Visible when: `Write Influences Count = true`

</details>

<details>
<summary><strong>Write Min Radius</strong> <code>bool</code></summary>

Write the minimum distance from each site to its cell vertices.

Default: `false`

⚡ PCG Overridable

</details>

<details>
<summary><strong>Min Radius Attribute Name</strong> <code>FName</code></summary>

Attribute name for minimum radius.

Default: `MinRadius`

⚡ PCG Overridable
📋 Visible when: `Write Min Radius = true`

</details>

<details>
<summary><strong>Write Max Radius</strong> <code>bool</code></summary>

Write the maximum distance from each site to its cell vertices.

Default: `false`

⚡ PCG Overridable

</details>

<details>
<summary><strong>Max Radius Attribute Name</strong> <code>FName</code></summary>

Attribute name for maximum radius.

Default: `MaxRadius`

⚡ PCG Overridable
📋 Visible when: `Write Max Radius = true`

</details>

### Cluster Output Settings

<details>
<summary><strong>Cluster Output Settings</strong> <code>FPCGExGraphBuilderDetails</code></summary>

Controls how the output cluster is constructed. See [Delaunay 3D](./delaunay-3d.md#cluster-output-settings) for full documentation.

⚡ PCG Overridable

</details>

## Output Attributes

| Attribute | Type | On | Description |
|-----------|------|-----|-------------|
| `bIsOnHull` | bool | Vtx/Edges | Hull boundary marker (when enabled) |
| `OpenSite` | bool | Sites | True if site's cell is open/unbounded |
| `InfluencesCount` | int32 | Sites | Number of cell vertices influenced |
| `MinRadius` | double | Sites | Minimum distance to cell vertices |
| `MaxRadius` | double | Sites | Maximum distance to cell vertices |

## Examples

**Grid-like connectivity** (for tile-based systems):
- **Metric**: `Chebyshev`
- Produces square-ish cells with axis-aligned edges

**Organic region boundaries**:
- **Metric**: `Euclidean`
- Classic Voronoi with natural curved boundaries

**With cell size data**:
- **Output Sites**: `true`
- **Write Min/Max Radius**: `true`
- Get size information for each cell on the original seed points

## Related

### Diagram Nodes
- [Voronoi 3D](./voronoi-3d.md) - True 3D variant
- [Delaunay 2D](./delaunay-2d.md) - Dual diagram

### Follow-Up Operations
- [Refine Edges](../refine-edges/) - Adjust connectivity
- [Break to Paths](../path-conversion/break-to-paths.md) - Extract cell boundaries as paths

---

📦 **Module**: `PCGExElementsClusters` · 📄 [Source](https://github.com/Nebukam/PCGExtendedToolkit/blob/main/Source/PCGExElementsClusters/Public/Elements/Diagrams/PCGExBuildVoronoiGraph2D.h)
