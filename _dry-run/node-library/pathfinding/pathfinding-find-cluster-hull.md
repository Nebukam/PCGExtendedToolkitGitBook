---
icon: route
description: 'In editor :: PCGEx | Pathfinding : Find Cluster Hull'
---

# Pathfinding : Find Cluster Hull

Output a single hull per cluster, as a path.

## Overview

This node finds the outer boundary (hull) of each cluster graph and outputs it as a closed path. Unlike the cell-finding nodes that discover internal cells, this specifically extracts the outer perimeter of the graph structure. This is useful for generating boundaries, outlines, or convex/concave hulls of graph structures.

## Inputs

| Pin | Type | Required | Description |
|-----|------|----------|-------------|
| **Vtx** | Points | Yes | Cluster vertices (inherited from base) |
| **Edges** | Points | Yes | Cluster edges (inherited from base) |

## Outputs

| Pin | Type | Description |
|-----|------|-------------|
| **Paths** | Points | Output hulls as closed paths (one path per cluster) |
| **CellBounds** | Points | Hull bounding boxes as points (when Artifacts.bOutputCellBounds enabled) |

## Settings

### Cell Constraints

<details>
<summary><strong>Constraints</strong> <code>FPCGExCellConstraintsDetails</code></summary>

Filtering and constraint options for hull output.

**Rotation Method** (`EPCGExCellRotationMethod`):

| Option | Behavior |
|--------|----------|
| **Projection 2D** | Standard: project positions to 2D, sort edges by angle around each vertex |
| **Topological Hints** | Follow binary node chains for angle calculation |
| **Local Tangent 3D** | Use vertex normals for local tangent frame |

**Output Winding** (`EPCGExWinding`): Output winding order (Clockwise or Counter-Clockwise).

**Aspect Filter** (`EPCGExCellShapeTypeOutput`): Filter by convex/concave shape.

**Keep Cells With Leaves** (`bool`): Whether to keep hulls that include dead ends.

**Omit Wrapping Bounds** (`bool`): Omit hulls representing the outer boundary.

**Size/Count/Area/Perimeter/Segment/Compactness Filtering**: Multiple filter options for hull geometry. See [Pathfinding : Find Cells](./pathfinding-find-cells.md) for full details on all constraint options.

Default Rotation Method: `Projection 2D`

⚡ PCG Overridable (most sub-properties)

</details>

### Hull Artifacts

<details>
<summary><strong>Artifacts</strong> <code>FPCGExCellArtifactsDetails</code></summary>

Hull output settings controlling what data is generated.

**Output Paths** (`bool`): Output hulls as closed paths. Default: `true`

**Output Cell Bounds** (`bool`): Output hulls as OBB (Oriented Bounding Box) points. Default: `false`

**Attribute Writing**: Cell hash, area, compactness, num nodes, vtx ID, terminal flags, repeat count.

**Tagging**: Tag convex/concave hulls, forward cluster tags.

See [Pathfinding : Find Cells](./pathfinding-find-cells.md) for full details on all artifact options.

⚡ PCG Overridable (most sub-properties)

</details>

### Projection

<details>
<summary><strong>Projection Details</strong> <code>FPCGExGeo2DProjectionDetails</code></summary>

Settings for 2D projection used in hull calculations.

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

### Warnings and Errors

<details>
<summary><strong>Quiet Failed to Find Hull Warning</strong> <code>bool</code></summary>

Suppress warning when a hull could not be found for a cluster.

Default: `false`

</details>

## Related

- [Pathfinding : Find Cells](./pathfinding-find-cells.md) - Find internal cells
- [Pathfinding : Find All Cells](./pathfinding-find-all-cells.md) - Find all cells including boundary

---

📦 **Module**: `PCGExElementsPathfinding` · 📄 [Source](https://github.com/Nebukam/PCGExtendedToolkit/blob/main/Source/PCGExElementsPathfinding/Public/Elements/PCGExPathfindingFindClusterHull.h)
