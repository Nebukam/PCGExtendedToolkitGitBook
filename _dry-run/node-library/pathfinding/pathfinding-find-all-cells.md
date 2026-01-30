---
icon: route
description: 'In editor :: PCGEx | Pathfinding : Find All Cells'
---

# Pathfinding : Find All Cells

Attempts to find the contours of all cluster cells.

## Overview

This node discovers all closed polygon cells within a cluster graph without requiring seed points. It enumerates every minimal enclosed area formed by the graph's edges. Optional "holes" input allows excluding cells that contain specified points. This is useful for generating complete cellular decompositions of graph structures.

## Inputs

| Pin | Type | Required | Description |
|-----|------|----------|-------------|
| **Vtx** | Points | Yes | Cluster vertices (inherited from base) |
| **Edges** | Points | Yes | Cluster edges (inherited from base) |
| **Holes** | Points | No | (Optional) Points marking cells to exclude |

## Outputs

| Pin | Type | Description |
|-----|------|-------------|
| **Paths** | Points | Output cells as closed paths (one path per cell) |
| **CellBounds** | Points | (Optional) Cell bounding boxes as points |

## Settings

### Cell Constraints

<details>
<summary><strong>Constraints</strong> <code>FPCGExCellConstraintsDetails</code></summary>

Comprehensive filtering and constraint options for cell output.

**Rotation Method** (`EPCGExCellRotationMethod`):

| Option | Behavior |
|--------|----------|
| **Projection 2D** | Standard: project positions to 2D, sort edges by angle around each vertex |
| **Topological Hints** | Follow binary node chains for angle calculation, useful for Voronoi-like graphs |
| **Local Tangent 3D** | Use vertex normals for local tangent frame on 3D surfaces |

**Output Winding** (`EPCGExWinding`): Output winding order (Clockwise or Counter-Clockwise).

**Aspect Filter** (`EPCGExCellShapeTypeOutput`): Filter by convex/concave shape.

**Keep Cells With Leaves** (`bool`): Whether to keep cells that include dead ends.

**Omit Wrapping Bounds** (`bool`): Omit cells representing the outer boundary.

**Size/Count/Area/Perimeter/Segment/Compactness Filtering**: Multiple filter options for cell geometry. See [Pathfinding : Find Cells](./pathfinding-find-cells.md) for full details.

Default Rotation Method: `Projection 2D`

⚡ PCG Overridable (most sub-properties)

</details>

### Cell Artifacts

<details>
<summary><strong>Artifacts</strong> <code>FPCGExCellArtifactsDetails</code></summary>

Cell output settings controlling what data is generated.

**Output Paths** (`bool`): Output cells as closed paths. Default: `true`

**Output Cell Bounds** (`bool`): Output cells as OBB points. Default: `false`

**Attribute Writing**: Cell hash, area, compactness, num nodes, vtx ID, terminal flags, repeat count.

**Tagging**: Tag convex/concave cells, forward cluster tags.

See [Pathfinding : Find Cells](./pathfinding-find-cells.md) for full details on all options.

⚡ PCG Overridable (most sub-properties)

</details>

### Hole Exclusion

<details>
<summary><strong>Hole Growth</strong> <code>FPCGExCellGrowthDetails</code></summary>

Expands hole exclusion to adjacent cells.

**Growth**: Growth depth for hole expansion. 0 = only cells containing holes, 1 = also exclude neighbors, etc. Supports constant value or attribute input.

Default: `0` (no expansion)

⚡ PCG Overridable

</details>

### Projection

<details>
<summary><strong>Projection Details</strong> <code>FPCGExGeo2DProjectionDetails</code></summary>

Settings for 2D projection used in cell calculations.

**Method** (`EPCGExProjectionMethod`):

| Option | Behavior |
|--------|----------|
| **Normal** | Use explicit normal vector for projection plane |
| **Best Fit** | Compute eigen values to find best-fit plane |

**Projection Vector**: Normal vector defining the projection plane. Supports constant value or attribute input.

Default Method: `Normal`
Default Projection Vector: `(0, 0, 1)` (Up)

⚡ PCG Overridable

</details>

### Performance (Advanced)

<details>
<summary><strong>Use Octree Search</strong> <code>bool</code></summary>

Search for closest node using an octree.

Default: `false`

</details>

## Related

- [Pathfinding : Find Cells](./pathfinding-find-cells.md) - Find cells around seed points
- [Pathfinding : Find All Cells (Bounded)](./pathfinding-find-all-cells-bounded.md) - Find all cells with bounds triage

---

📦 **Module**: `PCGExElementsPathfinding` · 📄 [Source](https://github.com/Nebukam/PCGExtendedToolkit/blob/main/Source/PCGExElementsPathfinding/Public/Elements/PCGExPathfindingFindAllCells.h)
