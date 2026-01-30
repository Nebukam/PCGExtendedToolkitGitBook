---
icon: diagram-project
description: 'In editor :: PCGEx | Cluster : Delaunay 3D'
---

# Cluster : Delaunay 3D

Create a **3D Delaunay tetrahedralization** for each input point set, generating a cluster where nearby points are connected by edges.

## Overview

Delaunay triangulation connects points such that no point lies inside the circumsphere of any tetrahedron. This produces a "natural" connectivity graph where nearby points are connected, making it useful as a starting point for graph-based operations.

The 3D variant creates a tetrahedralization (4-point cells) rather than the 2D triangulation (3-point cells).

## Key Behavior

```
Input Points:           Delaunay 3D Output:
    ●       ●               ●───────●
                           /│\     /│
  ●     ●     ●     →     ● │ ●───● │
                           \│/   \ │/
    ●       ●               ●───────●

Points become vertices, edges connect "naturally" neighboring points
```

**Urquhart Mode**: Optionally remove the longest edge from each Delaunay cell, producing a sparser graph that often better represents organic connectivity.

## How It Works

1. **Compute Tetrahedralization**: Build Delaunay tetrahedralization from input points
2. **Extract Edges**: Create unique edges from tetrahedron faces
3. **Apply Urquhart** (optional): Remove longest edge from each cell
4. **Mark Hull** (optional): Flag points/edges on convex hull boundary
5. **Output Sites** (optional): Output Delaunay cell centers (circumcenters)

## Inputs

| Pin | Type | Description |
|-----|------|-------------|
| **In** | Points | Input points to triangulate |

## Outputs

| Pin | Type | Description |
|-----|------|-------------|
| **Vtx** | Points | Cluster vertices (same as input points) |
| **Edges** | Points | Edge points connecting vertices |
| **Sites** | Points | (Optional) Delaunay cell circumcenters |

## Settings

### Settings

<details>
<summary><strong>Urquhart</strong> <code>bool</code></summary>

Output the Urquhart graph of the Delaunay triangulation. The Urquhart graph removes the longest edge of each Delaunay cell, producing a sparser connectivity graph.

Default: `false`

⚡ PCG Overridable

</details>

### Sites Output

<details>
<summary><strong>Output Sites</strong> <code>bool</code></summary>

Output Delaunay sites (circumcenters of tetrahedra) as a separate point collection.

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

Name of the attribute to output the hull boolean. True if site is on hull.

Default: `bIsOnHull`

⚡ PCG Overridable
📋 Visible when: `Mark Site Hull = true`

</details>

### Hull Marking

<details>
<summary><strong>Mark Hull</strong> <code>bool</code></summary>

Mark points and edges that lie on the convex hull boundary with a boolean attribute.

Default: `false`

⚡ PCG Overridable

</details>

<details>
<summary><strong>Hull Attribute Name</strong> <code>FName</code></summary>

Name of the attribute to output the hull boolean. True if on hull.

Default: `bIsOnHull`

⚡ PCG Overridable
📋 Visible when: `Mark Hull = true`

</details>

<details>
<summary><strong>Mark Edge On Touch</strong> <code>bool</code></summary>

When enabled, edges that have at least one endpoint on the hull are marked as being on the hull (rather than requiring both endpoints).

Default: `false`

⚡ PCG Overridable

</details>

### Cluster Output Settings

<details>
<summary><strong>Cluster Output Settings</strong> <code>FPCGExGraphBuilderDetails</code></summary>

Controls how the output cluster is constructed.

**Edge Position** `double` - Interpolation (0-1) for edge point placement between start and end vertices.
Default: `0.5`

**Solidification** - Basic edge alignment settings:
- **Solidification Axis**: Align edge point rotation to edge direction (None, X, Y, Z)
- **Radius Type**: How to calculate edge radius (Average, Lerp, Min, Max, Fixed)
- **Radius Constant/Scale**: Fixed radius value or scale factor

**Remove Small Clusters** `bool` - Filter out clusters with fewer than threshold vertices/edges.
- **Min Vtx Count**: Minimum vertices required. Default: `3`
- **Min Edge Count**: Minimum edges required. Default: `3`

**Remove Big Clusters** `bool` - Filter out clusters with more than threshold vertices/edges.
- **Max Vtx Count**: Maximum vertices allowed. Default: `500`
- **Max Edge Count**: Maximum edges allowed. Default: `500`

**Refresh Edge Seed** `bool` - Regenerate random seeds for edge points.
Default: `false`

**Build And Cache Clusters** - Whether to pre-build cluster data structures.
Default: `Default`

**Output Edge Length** `bool` - Write edge length to an attribute.
- **Edge Length Name**: Attribute name. Default: `EdgeLength`

⚡ PCG Overridable (most sub-settings)

</details>

## Output Attributes

| Attribute | Type | On | Description |
|-----------|------|-----|-------------|
| `bIsOnHull` | bool | Vtx/Edges/Sites | True if point lies on convex hull (when enabled) |
| `EdgeLength` | double | Edges | Length of edge (when enabled) |

## Examples

**Basic Delaunay triangulation**:
- **Urquhart**: `false`
- Use for complete triangulation connectivity

**Sparse organic connections**:
- **Urquhart**: `true`
- Removes longest edges for more natural-looking connectivity

**With hull boundary detection**:
- **Mark Hull**: `true`
- **Hull Attribute Name**: `bIsOnHull`
- Useful for finding boundary points for further processing

## Related

### Diagram Nodes
- [Delaunay 2D](./delaunay-2d.md) - 2D triangulation with projection
- [Voronoi 3D](./voronoi-3d.md) - Dual of Delaunay (cells instead of triangles)
- [Convex Hull 3D](./convex-hull-3d.md) - Outer boundary only

### Follow-Up Operations
- [Refine Edges](../refine-edges/) - Remove unwanted edges
- [Relax Clusters](../relax-clusters/) - Improve vertex positions

---

📦 **Module**: `PCGExElementsClusters` · 📄 [Source](https://github.com/Nebukam/PCGExtendedToolkit/blob/main/Source/PCGExElementsClusters/Public/Elements/Diagrams/PCGExBuildDelaunayGraph.h)
