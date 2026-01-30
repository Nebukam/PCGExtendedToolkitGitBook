---
icon: route
description: 'In editor :: PCGEx | Pathfinding : Find Cells (Bounded)'
---

# Pathfinding : Find Cells (Bounded)

Finds closed cells around seed points and triages them by spatial bounds relationship (Inside/Touching/Outside).

## Overview

This node extends the standard Find Cells functionality by adding spatial triage based on a bounds volume. After discovering cells around seed points, each cell is classified based on its relationship to the provided bounds: fully inside, touching/intersecting, or fully outside. Cells can be output to separate pins or combined with triage tags.

## Inputs

| Pin | Type | Required | Description |
|-----|------|----------|-------------|
| **Vtx** | Points | Yes | Cluster vertices (inherited from base) |
| **Edges** | Points | Yes | Cluster edges (inherited from base) |
| **Seeds** | Points | Yes | Points used to find surrounding cells |
| **Bounds** | Points | Yes | Bounding volume for triage classification |

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
| **SeedGenSuccess** | Points | (Optional) Seeds that successfully generated cells |
| **SeedGenFailed** | Points | (Optional) Seeds that failed to generate cells |

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

### Seed Picking

<details>
<summary><strong>Seed Picking</strong> <code>FPCGExNodeSelectionDetails</code></summary>

Controls how seed points select their starting node in the cluster.

**Picking Method** (`EPCGExClusterClosestSearchMode`):

| Option | Behavior |
|--------|----------|
| **Closest vtx** | Find nearest vertex by position |
| **Closest edge** | Find nearest edge, then use closest endpoint |

**Max Distance** (`double`): Maximum distance to search. Use ≤ 0 to ignore distance check.

Default Picking Method: `Closest edge`
Default Max Distance: `-1` (unlimited)

⚡ PCG Overridable

</details>

<details>
<summary><strong>Seed Ownership</strong> <code>EPCGExCellSeedOwnership</code></summary>

How to determine seed ownership when multiple seeds compete for the same cell.

| Option | Behavior |
|--------|----------|
| **Seed Order** | First seed (by index order) wins ownership |
| **Closest** | Closest seed to cell centroid (3D distance) wins |
| **Closest (Projected)** | Closest seed to cell centroid (2D projected distance) wins |
| **Best Candidate** | Use sorting rules to determine winner |

Default: `Seed Order`

⚡ PCG Overridable

</details>

<details>
<summary><strong>Sort Direction</strong> <code>EPCGExSortDirection</code></summary>

Sort direction when using Best Candidate ownership.

Default: `Ascending`

⚡ PCG Overridable
📋 Visible when: `Seed Ownership == Best Candidate`

</details>

### Cell Constraints

<details>
<summary><strong>Constraints</strong> <code>FPCGExCellConstraintsDetails</code></summary>

Comprehensive filtering and constraint options for cell output. See [Pathfinding : Find Cells](./pathfinding-find-cells.md) for full details on all constraint options.

Key options include:
- Rotation method (Projection 2D, Topological Hints, Local Tangent 3D)
- Output winding order
- Aspect filtering (convex/concave)
- Size, point count, area, perimeter, segment length, and compactness filters

⚡ PCG Overridable (most sub-properties)

</details>

### Cell Artifacts

<details>
<summary><strong>Artifacts</strong> <code>FPCGExCellArtifactsDetails</code></summary>

Cell output settings controlling what data is generated. See [Pathfinding : Find Cells](./pathfinding-find-cells.md) for full details.

Key options include:
- Output paths and/or cell bounds
- Attribute writing (hash, area, compactness, etc.)
- Tagging (convex/concave)

⚡ PCG Overridable (most sub-properties)

</details>

### Expansion

<details>
<summary><strong>Seed Growth</strong> <code>FPCGExCellGrowthDetails</code></summary>

Expands seed selection to adjacent cells.

**Growth**: Growth depth for expansion. 0 = no expansion, 1 = immediate neighbors, etc. Supports constant value or attribute input.

Default: `0` (no expansion)

⚡ PCG Overridable

</details>

<details>
<summary><strong>Write Expansion Attributes</strong> <code>bool</code></summary>

If enabled, writes expansion metadata (pick count, depth) to output cells.

Default: `false`

⚡ PCG Overridable

</details>

<details>
<summary><strong>Pick Count Attribute Name</strong> <code>FName</code></summary>

Attribute name for pick count.

Default: `PCGEx/PickCount`

⚡ PCG Overridable
📋 Visible when: `Write Expansion Attributes == true`

</details>

<details>
<summary><strong>Depth Attribute Name</strong> <code>FName</code></summary>

Attribute name for depth.

Default: `PCGEx/Depth`

⚡ PCG Overridable
📋 Visible when: `Write Expansion Attributes == true`

</details>

### Seed Output

<details>
<summary><strong>Output Filtered Seeds</strong> <code>bool</code></summary>

Output filtered sets of seeds showing which generated valid cells.

Default: `false`

⚡ PCG Overridable

</details>

<details>
<summary><strong>Seed Mutations</strong> <code>FPCGExCellSeedMutationDetails</code></summary>

Settings for mutating successful seed points based on their cell. See [Pathfinding : Find Cells](./pathfinding-find-cells.md) for full details.

⚡ PCG Overridable
📋 Visible when: `Output Filtered Seeds == true`

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

### Forwarding

<details>
<summary><strong>Seed Attributes to Path Tags</strong> <code>FPCGExAttributeToTagDetails</code></summary>

Copy seed point attributes as tags on output paths.

</details>

<details>
<summary><strong>Seed Forwarding</strong> <code>FPCGExForwardDetails</code></summary>

Which seed attributes to forward onto output paths.

</details>

### Performance (Advanced)

<details>
<summary><strong>Use Octree Search</strong> <code>bool</code></summary>

Search for closest node using an octree.

Default: `false`

</details>

## Related

- [Pathfinding : Find Cells](./pathfinding-find-cells.md) - Find cells without bounds triage
- [Pathfinding : Find All Cells (Bounded)](./pathfinding-find-all-cells-bounded.md) - Find all cells with bounds triage

---

📦 **Module**: `PCGExElementsPathfinding` · 📄 [Source](https://github.com/Nebukam/PCGExtendedToolkit/blob/main/Source/PCGExElementsPathfinding/Public/Elements/PCGExPathfindingFindCellsBounded.h)
