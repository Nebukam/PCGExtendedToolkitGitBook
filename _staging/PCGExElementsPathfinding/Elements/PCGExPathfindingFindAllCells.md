---
icon: shapes
description: 'Pathfinding : Find All Cells - Discovers all closed polygonal regions in a cluster'
---

# Pathfinding : Find All Cells

Attempts to find the contours of all cluster cells.

## Overview

This node identifies all closed polygonal cells (faces) within a cluster graph by tracing the boundaries formed by edges. Each cell represents a closed region bounded by connected edges. The output includes path data for each cell's contour, with extensive filtering options based on size, area, compactness, and other geometric properties.

## How It Works

1. **Project to 2D**: Optionally projects the cluster to a 2D plane for consistent winding detection.
2. **Trace Cells**: For each edge, traces closed loops to identify cell boundaries.
3. **Apply Constraints**: Filters cells based on size, area, compactness, and other criteria.
4. **Expand Holes**: Optionally grows hole regions to exclude adjacent cells.
5. **Output Paths**: Builds path data for each valid cell contour.

#### Usage Notes

- **Winding Order**: Output paths can be forced to clockwise or counter-clockwise orientation.
- **Wrapping Bounds**: The outermost boundary that wraps the entire cluster can be excluded.
- **Holes Input**: Connect hole points to exclude cells containing those points.
- **Compactness**: Measures how circular a cell is (1.0 = perfect circle, lower = elongated).

## Behavior

```
Cell Detection:

Cluster Graph:
    [A]───[B]───[C]
     │ ╲ ╱ │ ╲ ╱ │
    [D]───[E]───[F]
     │ ╱ ╲ │ ╱ ╲ │
    [G]───[H]───[I]

Detected Cells (triangular regions):
   Cell 1: A → B → E → D → A
   Cell 2: B → C → F → E → B
   Cell 3: D → E → H → G → D
   Cell 4: E → F → I → H → E
   ... (and diagonal triangles)

Output: Collection of closed path contours
```

## Inputs

| Pin | Type | Description |
|-----|------|-------------|
| **Vtx** | Points | Cluster vertices |
| **Edges** | Points | Cluster edges |
| **Holes** | Points | Optional points marking regions to exclude |

## Settings

### Cell Constraints

<details>
<summary><strong>Constraints</strong> <code>FPCGExCellConstraintsDetails</code></summary>

Filtering rules for which cells to include in output.

| Property | Description |
|----------|-------------|
| **Rotation Method** | How to determine cell winding (Projection2D, etc.) |
| **Output Winding** | Clockwise or CounterClockwise orientation |
| **Aspect Filter** | Both, Convex only, or Concave only |
| **Keep Cells With Leaves** | Include cells that touch dead-end edges |
| **Omit Wrapping Bounds** | Exclude the outer boundary cell |
| **Min/Max Bounds Size** | Filter by bounding box diagonal |
| **Min/Max Point Count** | Filter by number of vertices |
| **Min/Max Area** | Filter by cell area |
| **Min/Max Perimeter** | Filter by edge length sum |
| **Min/Max Segment Length** | Filter by individual edge lengths |
| **Min/Max Compactness** | Filter by circularity ratio (0-1) |

⚡ PCG Overridable

</details>

### Cell Output

<details>
<summary><strong>Artifacts</strong> <code>FPCGExCellArtifactsDetails</code></summary>

Controls what data is output for each cell.

| Property | Description |
|----------|-------------|
| **Output Paths** | Output cell contours as path data |
| **Output Cell Bounds** | Output oriented bounding boxes |
| **Write Cell Hash** | Unique identifier for each cell |
| **Write Area** | Cell area as attribute |
| **Write Compactness** | Circularity ratio as attribute |
| **Write Num Nodes** | Vertex count as attribute |
| **Write Vtx ID** | Original vertex indices |
| **Flag Terminal Point** | Mark dead-end points |
| **Write Num Repeat** | Count of duplicate vertices |
| **Tag Concave/Convex** | Add shape type as tag |

⚡ PCG Overridable

</details>

### Hole Settings

<details>
<summary><strong>Hole Growth</strong> <code>FPCGExCellGrowthDetails</code></summary>

Expands hole exclusion to adjacent cells.

| Property | Description |
|----------|-------------|
| **Growth** | Number of cell layers to exclude around holes (constant or attribute) |

⚡ PCG Overridable

</details>

### Projection

<details>
<summary><strong>Projection Details</strong> <code>FPCGExGeo2DProjectionDetails</code></summary>

How the cluster is projected for 2D operations.

//→ See TODO FPCGExGeo2DProjectionDetails

</details>

### Performance

<details>
<summary><strong>Use Octree Search</strong> <code>bool</code></summary>

Uses octree spatial indexing for proximity queries. May improve or reduce performance depending on data.

Default: `false`

*Advanced setting*

</details>

### Inherited Settings

→ See [Clusters Processor Settings](../Core/PCGExClustersProcessor.md) for common cluster processing settings.

## Outputs

| Pin | Type | Description |
|-----|------|-------------|
| **Paths** | Points | Cell contour paths |
| **Cell Bounds** | Points | Oriented bounding boxes (if enabled) |
| **Vtx** | Points | Modified vertices |
| **Edges** | Points | Modified edges |

---

📦 **Module**: `PCGExElementsPathfinding` · 📄 [Source](https://github.com/Nebukam/PCGExtendedToolkit/blob/main/Source/PCGExElementsPathfinding/Public/Elements/PCGExPathfindingFindAllCells.h)

<!-- VERIFICATION REPORT
Node-Specific Properties: 5 documented (Constraints, Artifacts, HoleGrowth, ProjectionDetails, bUseOctreeSearch)
Inherited Properties: Referenced to UPCGExClustersProcessorSettings
Inputs: Vtx (Points), Edges (Points), Holes (Points)
Outputs: Paths (Points), Cell Bounds (Points), Vtx (Points), Edges (Points)
Nested Types: FPCGExCellConstraintsDetails, FPCGExCellArtifactsDetails, FPCGExCellGrowthDetails, FPCGExGeo2DProjectionDetails
-->
