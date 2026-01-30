---
icon: route
description: 'In editor :: PCGEx | Pathfinding : Find Cells'
---

# Pathfinding : Find Cells

Attempts to find closed cells of connected edges around seed points.

## Overview

This node discovers closed polygon cells within cluster graphs by tracing paths around seed points. Each seed point is used to find the smallest closed cell that contains or surrounds it. Cells are the minimal enclosed areas formed by the graph's edges, similar to faces in a mesh. This is useful for generating floor tiles, room layouts, or any cellular decomposition of graph structures.

## Inputs

| Pin | Type | Required | Description |
|-----|------|----------|-------------|
| **Vtx** | Points | Yes | Cluster vertices (inherited from base) |
| **Edges** | Points | Yes | Cluster edges (inherited from base) |
| **Seeds** | Points | Yes | Points used to find surrounding cells |

## Outputs

| Pin | Type | Description |
|-----|------|-------------|
| **Paths** | Points | Output cells as closed paths (one path per cell) |
| **CellBounds** | Points | (Optional) Cell bounding boxes as points |
| **SeedGenSuccess** | Points | (Optional) Seeds that successfully generated cells |
| **SeedGenFailed** | Points | (Optional) Seeds that failed to generate cells |

## Settings

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

| Option | Behavior |
|--------|----------|
| **Ascending** | Lower values win |
| **Descending** | Higher values win |

Default: `Ascending`

⚡ PCG Overridable
📋 Visible when: `Seed Ownership == Best Candidate`

</details>

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

**Aspect Filter** (`EPCGExCellShapeTypeOutput`): Filter by convex/concave shape (Both, Convex Only, Concave Only).

**Keep Cells With Leaves** (`bool`): Whether to keep cells that include dead ends wrapping.

**Duplicate Leaf Points** (`bool`): Whether to duplicate dead end points in the cell path.

**Omit Wrapping Bounds** (`bool`): Omit cells representing the outer boundary of the graph.

**Classification Tolerance** (`double`): Tolerance for wrapper cell classification.

**Keep if Sole** (`bool`): Keep wrapper cell if it's the only cell found.

**Bounds Size Filtering**:
- **Omit Below Bounds Size** / **Min Bounds Size**: Filter out small cells
- **Omit Above Bounds Size** / **Max Bounds Size**: Filter out large cells

**Point Count Filtering**:
- **Omit Below Point Count** / **Min Point Count**: Filter by minimum vertices
- **Omit Above Point Count** / **Max Point Count**: Filter by maximum vertices

**Area Filtering**:
- **Omit Below Area** / **Min Area**: Filter by minimum area
- **Omit Above Area** / **Max Area**: Filter by maximum area

**Perimeter Filtering**:
- **Omit Below Perimeter** / **Min Perimeter**: Filter by minimum perimeter
- **Omit Above Perimeter** / **Max Perimeter**: Filter by maximum perimeter

**Segment Length Filtering**:
- **Omit Below Segment Length** / **Min Segment Length**: Filter by minimum edge length
- **Omit Above Segment Length** / **Max Segment Length**: Filter by maximum edge length

**Compactness Filtering** (0-1 range):
- **Omit Below Compactness** / **Min Compactness**: Filter by minimum compactness
- **Omit Above Compactness** / **Max Compactness**: Filter by maximum compactness

Default Rotation Method: `Projection 2D`
Default Output Winding: `Counter-Clockwise`
Default Aspect Filter: `Both`

⚡ PCG Overridable (most sub-properties)

</details>

### Cell Artifacts

<details>
<summary><strong>Artifacts</strong> <code>FPCGExCellArtifactsDetails</code></summary>

Cell output settings controlling what data is generated.

**Output Paths** (`bool`): Output cells as closed paths (one path per cell). Default: `true`

**Output Cell Bounds** (`bool`): Output cells as OBB (Oriented Bounding Box) points. Default: `false`

**OBB Settings** (when Cell Bounds enabled):
- **Use Min Box Fit**: Use precise minimum box fit algorithm
- **Axis Order**: Axis order for OBB transform orientation
- **Min Extent**: Minimum extents for the bounding box

**Attribute Writing**:
- **Write Cell Hash** / **Cell Hash Attribute**: Unique hash per cell
- **Write Area** / **Area Attribute**: Cell area value
- **Write Compactness** / **Compactness Attribute**: Cell compactness (0-1)
- **Write Num Nodes** / **Num Nodes Attribute**: Number of vertices in cell
- **Write Vtx Id** / **Vtx ID Attribute**: Vertex index for each path point
- **Flag Terminal Point** / **Terminal Flag Attribute**: Mark terminal (dead-end) points
- **Write Num Repeat** / **Repeat Attribute**: Count of point repetitions in cell

**Tagging**:
- **Tag Concave** / **Concave Tag**: Tag concave cells
- **Tag Convex** / **Convex Tag**: Tag convex cells
- **Tag Forwarding**: Forward tags from source clusters

⚡ PCG Overridable (most sub-properties)

</details>

### Expansion

<details>
<summary><strong>Seed Growth</strong> <code>FPCGExCellGrowthDetails</code></summary>

Expands seed selection to adjacent cells.

**Growth** (`FPCGExInputShorthandSelectorInteger32Abs`): Growth depth for expansion. 0 = no expansion, 1 = immediate neighbors, 2 = neighbors of neighbors, etc. Supports constant value or attribute input.

Default: `0` (no expansion)

⚡ PCG Overridable

</details>

<details>
<summary><strong>Write Expansion Attributes</strong> <code>bool</code></summary>

If enabled, writes expansion metadata to output cells.

Default: `false`

⚡ PCG Overridable

</details>

<details>
<summary><strong>Pick Count Attribute Name</strong> <code>FName</code></summary>

Attribute name for pick count (how many times a cell was selected by seeds/growth).

Default: `PCGEx/PickCount`

⚡ PCG Overridable
📋 Visible when: `Write Expansion Attributes == true`

</details>

<details>
<summary><strong>Depth Attribute Name</strong> <code>FName</code></summary>

Attribute name for depth (minimum depth at which cell was picked, 0 = direct seed).

Default: `PCGEx/Depth`

⚡ PCG Overridable
📋 Visible when: `Write Expansion Attributes == true`

</details>

### Seed Output

<details>
<summary><strong>Output Filtered Seeds</strong> <code>bool</code></summary>

Output filtered sets of seeds showing which generated valid cells and which failed.

Default: `false`

⚡ PCG Overridable

</details>

<details>
<summary><strong>Seed Mutations</strong> <code>FPCGExCellSeedMutationDetails</code></summary>

Settings for mutating successful seed points based on their cell.

**Aspect Filter**: Filter by cell shape for mutations.

**Location** (`EPCGExCellSeedLocation`):

| Option | Behavior |
|--------|----------|
| **Original** | Keep original seed position |
| **Centroid** | Move to cell centroid |
| **Path bounds center** | Move to center of path bounds |
| **First Node** | Move to first node of cell |
| **Last Node** | Move to last node of cell |

**Match Cell Bounds** (`bool`): Match seed bounds to cell bounds.

**Reset Scale** (`bool`): Reset seed scale to (1,1,1).

**Reset Rotation** (`bool`): Reset seed rotation to identity.

**Property Outputs**: Output area, perimeter, or compactness to point properties (Density, Steepness, or Color channels).

Default Location: `Centroid`

📋 Visible when: `Output Filtered Seeds == true`

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

### Forwarding

<details>
<summary><strong>Seed Attributes to Path Tags</strong> <code>FPCGExAttributeToTagDetails</code></summary>

Copy seed point attributes as tags on output paths.

- **Add Index Tag**: Add seed point index as a tag
- **Index Tag Prefix**: Prefix for the index tag
- **Prefix with Attribute Name**: Include attribute name in tag
- **Attributes**: List of attributes to convert to tags
- **Comma Separated Attribute Selectors**: Quick attribute list input

</details>

<details>
<summary><strong>Seed Forwarding</strong> <code>FPCGExForwardDetails</code></summary>

Which seed attributes to forward onto output paths.

- **Enabled**: Enable/disable forwarding
- **Preserve Attributes Default Value**: Keep original default values
- **Filter Mode**: All/Exclude/Include
- **Matches**: Attribute name patterns to match

</details>

### Performance (Advanced)

<details>
<summary><strong>Use Octree Search</strong> <code>bool</code></summary>

Search for closest node using an octree. Depending on your dataset, this may be faster or slower.

Default: `false`

</details>

## Related

- [Pathfinding : Find Cells (Bounded)](./pathfinding-find-cells-bounded.md) - Find cells with spatial bounds triage
- [Pathfinding : Find All Cells](./pathfinding-find-all-cells.md) - Find all cells without seeds
- [Pathfinding : Find All Cells (Bounded)](./pathfinding-find-all-cells-bounded.md) - Find all cells with bounds triage

---

📦 **Module**: `PCGExElementsPathfinding` · 📄 [Source](https://github.com/Nebukam/PCGExtendedToolkit/blob/main/Source/PCGExElementsPathfinding/Public/Elements/PCGExPathfindingFindCells.h)
