---
icon: diagram-project
description: 'In editor :: PCGEx | Cluster : Voronoi 3D'
---

# Cluster : Voronoi 3D

Create a **3D Voronoi graph** for each input point set, where vertices represent cell centers and edges connect adjacent cells.

## Overview

Voronoi diagrams partition space into cells, where each cell contains all points closer to its seed (input point) than to any other seed. This node creates a cluster from the Voronoi cell structure - vertices are cell centers, and edges connect adjacent cells.

Voronoi is the **dual** of Delaunay: where Delaunay connects nearby seed points, Voronoi connects the spaces between them.

## Key Behavior

```
Input Points (Seeds):     Voronoi Cells:          Voronoi Graph:
    ●       ●            ┌───┬───┬───┐              ●───●───●
                         │ A │ B │ C │              │   │   │
  ●     ●     ●      →   ├───┼───┼───┤      →      ●───●───●
                         │ D │ E │ F │              │   │   │
    ●       ●            └───┴───┴───┘              ●───●───●

Seeds define cells       Cells partition space    Graph connects cell centers
```

## How It Works

1. **Compute Voronoi**: Generate Voronoi cells from input points (via Delaunay dual)
2. **Find Cell Centers**: Calculate center point for each cell (centroid or circumcenter)
3. **Build Edges**: Connect centers of adjacent cells
4. **Prune Bounds** (optional): Remove cells extending beyond bounds
5. **Mark Hull** (optional): Flag cells on convex hull boundary

## Inputs

| Pin | Type | Description |
|-----|------|-------------|
| **In** | Points | Seed points that define Voronoi cells |

## Outputs

| Pin | Type | Description |
|-----|------|-------------|
| **Vtx** | Points | Voronoi cell center vertices |
| **Edges** | Points | Edges connecting adjacent cell centers |

## Settings

### Settings

<details>
<summary><strong>Method</strong> <code>EPCGExCellCenter</code></summary>

Method used to find Voronoi cell center location.

| Option | Behavior |
|--------|----------|
| **Centroid** | Geometric center of cell vertices (bounded, balanced) |
| **Circumcenter** | Circumcenter of Delaunay tetrahedron (mathematically precise but can be unbounded) |

Default: `Centroid`

⚡ PCG Overridable

</details>

<details>
<summary><strong>Expand Bounds</strong> <code>double</code></summary>

Amount to expand bounds for point pruning and balanced centroid calculation. Larger values include more outer cells; smaller values clip cells at the boundary.

Default: `100`

⚡ PCG Overridable

</details>

<details>
<summary><strong>Prune Out Of Bounds</strong> <code>bool</code></summary>

Remove cell vertices that lie outside the expanded bounds. Only relevant when using Circumcenter method.

Default: `false`

⚡ PCG Overridable
📋 Visible when: `Method = Circumcenter`

</details>

### Hull Marking

<details>
<summary><strong>Mark Hull</strong> <code>bool</code></summary>

Mark points and edges that lie on the convex hull boundary.

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

Mark edges as "on hull" if at least one endpoint is on the hull.

Default: `false`

⚡ PCG Overridable

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
| `bIsOnHull` | bool | Vtx/Edges | True if on convex hull boundary (when enabled) |
| `EdgeLength` | double | Edges | Edge length (when enabled in Cluster Output Settings) |

## Examples

**Cell-based connectivity**:
- **Method**: `Centroid`
- Creates connections between cell centers for region-based algorithms

**Precise mathematical Voronoi**:
- **Method**: `Circumcenter`
- **Prune Out Of Bounds**: `true`
- True circumcenters, clipped to reasonable bounds

## Comparison: Voronoi vs Delaunay

| Aspect | Voronoi | Delaunay |
|--------|---------|----------|
| **Vertices** | Cell centers | Original seed points |
| **Edges** | Connect adjacent cells | Connect nearby seeds |
| **Output Count** | Fewer vertices (1 per cell) | Same as input (1 per seed) |
| **Best For** | Region-based operations | Point-based connectivity |
| **Relationship** | Dual | Dual |

## Related

### Diagram Nodes
- [Voronoi 2D](./voronoi-2d.md) - 2D variant with more options
- [Delaunay 3D](./delaunay-3d.md) - Dual diagram (seed connectivity)

### Follow-Up Operations
- [Refine Edges](./refine-edges.md) - Adjust edge connectivity
- [Relax Clusters](./relax-clusters.md) - Smooth vertex positions

---

📦 **Module**: `PCGExElementsClusters` · 📄 [Source](https://github.com/Nebukam/PCGExtendedToolkit/blob/main/Source/PCGExElementsClusters/Public/Elements/Diagrams/PCGExBuildVoronoiGraph.h)
