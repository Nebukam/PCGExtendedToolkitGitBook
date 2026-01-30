---
icon: diagram-project
description: 'In editor :: PCGEx | Cluster : Delaunay 2D'
---

# Cluster : Delaunay 2D

Create a **2D Delaunay triangulation** for each input point set, projecting points onto a plane before triangulation.

## Overview

This node creates a Delaunay triangulation by first projecting 3D points onto a 2D plane, then computing the triangulation. The resulting edges connect nearby points in a "natural" way, making it ideal for terrain-based or top-down connectivity.

The 2D variant is faster than 3D and often more appropriate for height-field-like point distributions.

## Key Behavior

```
Input Points (3D):        Project to 2D:          Triangulate:
    ●       ●                 ●       ●               ●───────●
  (varying Z)                   (flat)               /│\     /│\
  ●     ●     ●       →     ●     ●     ●     →     ● │ ●───● │ ●
                                                     \│/     \│/
    ●       ●                 ●       ●               ●───────●
```

**Urquhart Mode**: Remove the longest edge from each triangle for sparser connectivity.

## How It Works

1. **Project Points**: Project 3D points to 2D using configured projection
2. **Triangulate**: Compute Delaunay triangulation on projected points
3. **Apply Urquhart** (optional): Remove longest edge from each triangle
4. **Mark Hull** (optional): Flag boundary points/edges
5. **Output Sites** (optional): Output triangle circumcenters with optional merging

## Inputs

| Pin | Type | Description |
|-----|------|-------------|
| **In** | Points | Input points to triangulate |

## Outputs

| Pin | Type | Description |
|-----|------|-------------|
| **Vtx** | Points | Cluster vertices (same as input points) |
| **Edges** | Points | Edge points connecting vertices |
| **Sites** | Points | (Optional) Triangle circumcenters |

## Settings

### Settings

<details>
<summary><strong>Urquhart</strong> <code>bool</code></summary>

Output the Urquhart graph of the Delaunay triangulation. Removes the longest edge of each triangle, producing sparser connectivity.

Default: `false`

⚡ PCG Overridable

</details>

<details>
<summary><strong>Projection Details</strong> <code>FPCGExGeo2DProjectionDetails</code></summary>

Controls how 3D points are projected to 2D for triangulation.

- **Projection Type**: Method for flattening points (typically XY plane)
- **Projection Normal**: Custom projection direction

⚡ PCG Overridable

</details>

### Output

<details>
<summary><strong>Output Sites</strong> <code>bool</code></summary>

Output Delaunay sites (triangle circumcenters) as a separate point collection.

Default: `false`

⚡ PCG Overridable

</details>

<details>
<summary><strong>Mark Site Hull</strong> <code>bool</code></summary>

Mark sites that lie on the convex hull with a boolean attribute.

Default: `false`

⚡ PCG Overridable

</details>

<details>
<summary><strong>Site Hull Attribute Name</strong> <code>FName</code></summary>

Name of the attribute to output the hull boolean.

Default: `bIsOnHull`

⚡ PCG Overridable
📋 Visible when: `Mark Site Hull = true`

</details>

<details>
<summary><strong>Urquhart Sites Merge</strong> <code>EPCGExUrquhartSiteMergeMode</code></summary>

How to merge adjacent sites when using Urquhart mode with site output.

| Option | Behavior |
|--------|----------|
| **None** | Do not merge sites |
| **Merge Sites** | Merged site position is average of original sites |
| **Merge Edges** | Merged site position is average of removed edge endpoints |

Default: `None`

⚡ PCG Overridable
📋 Visible when: `Urquhart = true AND Output Sites = true`

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

Mark edges as "on hull" if at least one endpoint is on the hull.

Default: `false`

⚡ PCG Overridable

</details>

### Cluster Output Settings

<details>
<summary><strong>Cluster Output Settings</strong> <code>FPCGExGraphBuilderDetails</code></summary>

Controls how the output cluster is constructed. See [Delaunay 3D](./delaunay-3d.md#cluster-output-settings) for full documentation of these settings.

⚡ PCG Overridable

</details>

## Output Attributes

| Attribute | Type | On | Description |
|-----------|------|-----|-------------|
| `bIsOnHull` | bool | Vtx/Edges/Sites | True if point lies on convex hull (when enabled) |
| `EdgeLength` | double | Edges | Length of edge (when enabled in Cluster Output Settings) |

## Examples

**Terrain connectivity**:
- Default projection (XY plane)
- Connects points that are nearby when viewed from above

**Urquhart with merged sites**:
- **Urquhart**: `true`
- **Output Sites**: `true`
- **Urquhart Sites Merge**: `Merge Sites`
- Produces sparser graph with merged cell centers

## Comparison: Delaunay 2D vs 3D

| Aspect | Delaunay 2D | Delaunay 3D |
|--------|-------------|-------------|
| **Projection** | Required (flattens Z) | None (true 3D) |
| **Cell Type** | Triangles (3 points) | Tetrahedra (4 points) |
| **Speed** | Faster | Slower |
| **Best For** | Height-fields, terrain | Volumetric point clouds |

## Related

### Diagram Nodes
- [Delaunay 3D](./delaunay-3d.md) - True 3D tetrahedralization
- [Voronoi 2D](./voronoi-2d.md) - Dual diagram (cells from points)

### Follow-Up Operations
- [Refine Edges](./refine-edges.md) - Remove unwanted edges
- [Break to Paths](./break-to-paths.md) - Extract edge chains as paths

---

📦 **Module**: `PCGExElementsClusters` · 📄 [Source](https://github.com/Nebukam/PCGExtendedToolkit/blob/main/Source/PCGExElementsClusters/Public/Elements/Diagrams/PCGExBuildDelaunayGraph2D.h)
