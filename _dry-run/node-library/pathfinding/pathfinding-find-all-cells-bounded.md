---
icon: route
description: 'In editor :: PCGEx | Pathfinding : Find All Cells (Bounded)'
---

# Pathfinding : Find All Cells (Bounded)

Finds all cluster cells and triages them by spatial bounds relationship (Inside/Touching/Outside).

## Overview

This node combines the complete cell enumeration of "Find All Cells" with spatial triage based on a bounds volume. All cells in the cluster are discovered, then classified based on their relationship to the provided bounds: fully inside, touching/intersecting, or fully outside. Optional "holes" input allows excluding cells that contain specified points.

## Inputs

| Pin | Type | Required | Description |
|-----|------|----------|-------------|
| **Vtx** | Points | Yes | Cluster vertices (inherited from base) |
| **Edges** | Points | Yes | Cluster edges (inherited from base) |
| **Bounds** | Points | Yes | Bounding volume for triage classification |
| **Holes** | Points | No | (Optional) Points marking cells to exclude |

## Outputs

When using **Separate Pins** output mode:

| Pin | Type | Description |
|-----|------|-------------|
| **Paths : Inside** | Points | Cells fully inside bounds |
| **Paths : Touching** | Points | Cells intersecting bounds |
| **Paths : Outside** | Points | Cells fully outside bounds |
| **Bounds : Inside** | Points | (Optional) Cell bounds for inside cells |
| **Bounds : Touching** | Points | (Optional) Cell bounds for touching cells |
| **Bounds : Outside** | Points | (Optional) Cell bounds for outside cells |

When using **Combined** output mode, cells are output to single pins with triage tags applied.

## Settings

### Triage Output

<details>
<summary><strong>Output Mode</strong> <code>EPCGExCellTriageOutput</code></summary>

How to output triaged cells.

| Option | Behavior |
|--------|----------|
| **Separate Pins** | Output Inside/Touching/Outside to separate pins |
| **Combined** | Output matching cells to a single pin with triage tags |

Default: `Separate Pins`

</details>

<details>
<summary><strong>Triage Flags</strong> <code>uint8</code> (Bitmask)</summary>

Which cell categories to output.

| Flag | Description |
|------|-------------|
| **Inside** | Output cells fully inside the bounds |
| **Touching** | Output cells touching/intersecting the bounds |
| **Outside** | Output cells fully outside the bounds |

Default: `Inside + Touching`

⚡ PCG Overridable

</details>

### Cell Constraints

<details>
<summary><strong>Constraints</strong> <code>FPCGExCellConstraintsDetails</code></summary>

Comprehensive filtering and constraint options for cell output.

Key options include:
- Rotation method (Projection 2D, Topological Hints, Local Tangent 3D)
- Output winding order
- Aspect filtering (convex/concave)
- Size, point count, area, perimeter, segment length, and compactness filters

See [Pathfinding : Find Cells](./pathfinding-find-cells.md) for full details.

⚡ PCG Overridable (most sub-properties)

</details>

### Cell Artifacts

<details>
<summary><strong>Artifacts</strong> <code>FPCGExCellArtifactsDetails</code></summary>

Cell output settings controlling what data is generated.

**Output Paths** (`bool`): Output cells as closed paths. Default: `true`

**Output Cell Bounds** (`bool`): Output cells as OBB points. Default: `false`

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

**Method**: Normal (explicit vector) or Best Fit (computed from points).

**Projection Vector**: Normal vector defining the projection plane.

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

- [Pathfinding : Find All Cells](./pathfinding-find-all-cells.md) - Find all cells without bounds triage
- [Pathfinding : Find Cells (Bounded)](./pathfinding-find-cells-bounded.md) - Find seed-based cells with bounds triage

---

📦 **Module**: `PCGExElementsPathfinding` · 📄 [Source](https://github.com/Nebukam/PCGExtendedToolkit/blob/main/Source/PCGExElementsPathfinding/Public/Elements/PCGExPathfindingFindAllCellsBounded.h)
