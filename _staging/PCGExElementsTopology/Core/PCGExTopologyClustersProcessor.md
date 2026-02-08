---
icon: diagram-project
description: 'Topology Clusters Processor - Base processor for generating meshes from point clusters.'
---

# Topology Clusters Processor

Base processor to output meshes from clusters.

## Overview

This abstract base class provides the foundation for topology processors that convert point clusters into dynamic meshes. It handles 2D projection for triangulation, cell filtering based on geometric constraints, and mesh generation with configurable UV mapping and normals.

## How It Works

1. **Project to 2D**: Points are projected onto a 2D plane using the specified projection method for triangulation calculations.
2. **Build Cells**: The processor constructs cells (polygons) from the cluster topology.
3. **Apply Constraints**: Cells are filtered based on size, point count, area, perimeter, and other geometric properties.
4. **Generate Mesh**: Valid cells are triangulated and combined into a PCG Dynamic Mesh with optional UV mapping and computed normals.

## Settings

### Node-Specific Settings

<details>
<summary><strong>Output Mode</strong> <code>EPCGExTopologyOutputMode</code></summary>

Controls the output format for the generated mesh.

| Option | Description |
|--------|-------------|
| **Legacy** | Deprecated mode - no longer supported. Use PCG Dynamic Mesh instead. |
| **PCG Dynamic Mesh** | Creates a PCG dynamic mesh that integrates with Unreal's PCG system. |

Default: `PCGDynamicMesh`

⚡ PCG Overridable

</details>

---

### Projection Details

Settings for projecting 3D points onto a 2D plane for triangulation.

<details>
<summary><strong>Method</strong> <code>EPCGExProjectionMethod</code></summary>

How to determine the projection plane.

| Option | Description |
|--------|-------------|
| **Normal** | Project using a direction vector (from attribute or constant). |

Default: `Normal`

</details>

<details>
<summary><strong>Projection Vector</strong> <code>FPCGExInputShorthandSelectorVector</code></summary>

The direction vector used for projection. Can be read from an attribute or use a constant value.

Default: `@Data.Projection` attribute or `(0, 0, 1)` (Up vector)

</details>

---

### Cell Constraints

Filters that determine which cells (polygons) are included in the output mesh.

<details>
<summary><strong>Rotation Method</strong> <code>EPCGExCellRotationMethod</code></summary>

How to compute cell orientation/rotation.

Default: `Projection2D`

⚡ PCG Overridable

</details>

<details>
<summary><strong>Output Winding</strong> <code>EPCGExWinding</code></summary>

The winding order for output polygons, which affects face direction.

| Option | Description |
|--------|-------------|
| **CounterClockwise** | Vertices ordered counter-clockwise (standard for front-facing). |
| **Clockwise** | Vertices ordered clockwise. |

Default: `CounterClockwise`

⚡ PCG Overridable

</details>

<details>
<summary><strong>Aspect Filter</strong> <code>EPCGExCellShapeTypeOutput</code></summary>

Filter cells by their shape type (convex/concave).

Default: `Both`

⚡ PCG Overridable

</details>

<details>
<summary><strong>Keep Cells With Leaves</strong> <code>bool</code></summary>

Whether to keep cells that contain leaf vertices (endpoints connected to only one edge).

Default: `true`

⚡ PCG Overridable

</details>

<details>
<summary><strong>Duplicate Leaf Points</strong> <code>bool</code></summary>

When keeping cells with leaves, whether to duplicate leaf points.

Default: `false`

📋 *Visible when Keep Cells With Leaves = true*

⚡ PCG Overridable

</details>

<details>
<summary><strong>Omit Wrapping Bounds</strong> <code>bool</code></summary>

Exclude cells that wrap around the entire bounds of the point set (typically the outer boundary cell).

Default: `true`

⚡ PCG Overridable

</details>

<details>
<summary><strong>Classification Tolerance</strong> <code>double</code></summary>

Tolerance value for determining if a cell wraps the bounds.

Default: `0.1`

📋 *Visible when Omit Wrapping Bounds = true*

⚡ PCG Overridable

</details>

<details>
<summary><strong>Keep if Sole</strong> <code>bool</code></summary>

Keep the wrapping bounds cell if it's the only cell in the cluster.

Default: `true`

📋 *Visible when Omit Wrapping Bounds = true*

⚡ PCG Overridable

</details>

#### Size Constraints

<details>
<summary><strong>Omit Below/Above Bounds Size</strong> <code>bool</code></summary>

Filter cells by their bounding box size.

- **Min Bounds Size**: Minimum size threshold. Default: `3`
- **Max Bounds Size**: Maximum size threshold. Default: `500`

Default: Both disabled

⚡ PCG Overridable

</details>

<details>
<summary><strong>Omit Below/Above Point Count</strong> <code>bool</code></summary>

Filter cells by number of vertices.

- **Min Point Count**: Minimum vertices required. Default: `3`
- **Max Point Count**: Maximum vertices allowed. Default: `500`

Default: Both disabled

⚡ PCG Overridable

</details>

<details>
<summary><strong>Omit Below/Above Area</strong> <code>bool</code></summary>

Filter cells by their 2D area.

- **Min Area**: Minimum area threshold. Default: `3`
- **Max Area**: Maximum area threshold. Default: `500`

Default: Both disabled

⚡ PCG Overridable

</details>

<details>
<summary><strong>Omit Below/Above Perimeter</strong> <code>bool</code></summary>

Filter cells by their perimeter length.

- **Min Perimeter**: Minimum perimeter threshold. Default: `3`
- **Max Perimeter**: Maximum perimeter threshold. Default: `500`

Default: Both disabled

⚡ PCG Overridable

</details>

<details>
<summary><strong>Omit Below/Above Segment Length</strong> <code>bool</code></summary>

Filter cells by edge segment length.

- **Min Segment Length**: Minimum edge length. Default: `3`
- **Max Segment Length**: Maximum edge length. Default: `500`

Default: Both disabled

⚡ PCG Overridable

</details>

<details>
<summary><strong>Omit Below/Above Compactness</strong> <code>bool</code></summary>

Filter cells by compactness ratio (how circular the shape is). A value of 1 is a perfect circle, lower values indicate more elongated or irregular shapes.

- **Min Compactness**: Minimum compactness (0-1). Default: `0`
- **Max Compactness**: Maximum compactness (0-1). Default: `1`

Default: Both disabled

⚡ PCG Overridable

</details>

---

### Topology Details

Settings for mesh generation and output.

<details>
<summary><strong>Material</strong> <code>TSoftObjectPtr&lt;UMaterialInterface&gt;</code></summary>

Material to apply to the generated mesh.

Default: None

⚡ PCG Overridable

</details>

<details>
<summary><strong>Default Vertex Color</strong> <code>FLinearColor</code></summary>

Default color assigned to mesh vertices.

Default: `White`

⚡ PCG Overridable

</details>

<details>
<summary><strong>UV Channels</strong> <code>FPCGExTopologyUVDetails</code></summary>

Configuration for UV coordinate generation.

</details>

<details>
<summary><strong>Primitive Options</strong> <code>FGeometryScriptPrimitiveOptions</code></summary>

Unreal Geometry Script options for primitive generation.

</details>

<details>
<summary><strong>Triangulation Options</strong> <code>FGeometryScriptPolygonsTriangulationOptions</code></summary>

Options controlling how polygons are triangulated into the mesh.

</details>

<details>
<summary><strong>Quiet Triangulation Error</strong> <code>bool</code></summary>

Suppress error messages when triangulation fails for a cell.

Default: `false`

⚡ PCG Overridable

</details>

<details>
<summary><strong>Weld Edges</strong> <code>bool</code></summary>

Weld coincident edges in the output mesh to create a watertight mesh.

Default: `false`

⚡ PCG Overridable

</details>

<details>
<summary><strong>Weld Edges Options</strong> <code>FGeometryScriptWeldEdgesOptions</code></summary>

Options for edge welding tolerance and behavior.

📋 *Visible when Weld Edges = true*

⚡ PCG Overridable

</details>

<details>
<summary><strong>Compute Normals</strong> <code>bool</code></summary>

Calculate vertex normals for the output mesh.

Default: `true`

⚡ PCG Overridable

</details>

<details>
<summary><strong>Normals Options</strong> <code>FGeometryScriptCalculateNormalsOptions</code></summary>

Options for normal calculation (smoothing angle, etc.).

📋 *Visible when Compute Normals = true*

⚡ PCG Overridable

</details>

<details>
<summary><strong>Flip Normals</strong> <code>bool</code></summary>

Invert the direction of computed normals.

Default: `false`

⚡ PCG Overridable

</details>

<details>
<summary><strong>Coordinate Space</strong> <code>EPCGCoordinateSpace</code></summary>

The coordinate space for the output mesh.

Default: `OriginalComponent`

⚡ PCG Overridable

</details>

### Inherited Settings

This node inherits cluster processing settings from its base class.

→ See [Clusters Processor Settings](../../PCGEx/Core/PCGExClustersProcessor.md) for: Cluster settings, edge handling, and point data options.

---

📦 **Module**: `PCGExElementsTopology` · 📄 [Source](https://github.com/Nebukam/PCGExtendedToolkit/blob/main/Source/PCGExElementsTopology/Public/Core/PCGExTopologyClustersProcessor.h)

<!-- VERIFICATION REPORT
Node-Specific Properties: 4 top-level (OutputMode, ProjectionDetails, Constraints, Topology)
Inherited Properties: Referenced to UPCGExClustersProcessorSettings
Inputs: Labels (inherited)
Outputs: Labels (inherited)
Nested Types: EPCGExTopologyOutputMode, FPCGExGeo2DProjectionDetails, FPCGExCellConstraintsDetails, FPCGExTopologyDetails
-->
