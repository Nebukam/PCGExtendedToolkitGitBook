---
icon: circle
---

# Topology : Path Surface

Create a path surface topology.

### Overview

This node converts closed paths into triangulated surface meshes. Each path is treated as a polygon boundary that gets triangulated to create a PCG Dynamic Mesh output. The path points define the vertices of the resulting surface.

### How It Works

1. **Path Input**: The node receives paths as ordered point sequences, treating each as a closed polygon boundary.
2. **Project to 2D**: Path points are projected onto a 2D plane for triangulation calculations.
3. **Triangulate**: The closed polygon is triangulated to create mesh faces from the path boundary.
4. **Build Mesh**: Triangles are combined into a PCG Dynamic Mesh with optional UV mapping, normals, and material assignment.

**Usage Notes**

* **Closed Paths**: This node treats each path as a closed polygon. The last point implicitly connects back to the first.
* **Simple Polygons**: Paths should form simple (non-self-intersecting) polygons for reliable triangulation results.
* **Coordinate Space**: The output mesh coordinate space can be configured to match your scene requirements.

### Behavior

```
Input: Closed path             Output: Triangulated mesh

    ●───────●                      ●───────●
   ╱         ╲                    ╱|\     /|╲
  ●           ●       →          ● | \   / | ●
   ╲         ╱                    ╲|  \ /  |╱
    ●───────●                      ●───────●

The path boundary becomes a triangulated surface in the output mesh.
```

### Inputs

| Pin       | Type       | Description                              |
| --------- | ---------- | ---------------------------------------- |
| **Paths** | Point Data | Closed paths defining polygon boundaries |

### Outputs

| Pin      | Type             | Description                   |
| -------- | ---------------- | ----------------------------- |
| **Mesh** | PCG Dynamic Mesh | The triangulated surface mesh |

### Settings

#### Topology Details

Settings for mesh generation and output. These control material assignment, UV mapping, normals, and mesh processing.

<details>

<summary><strong>Material</strong> <code>TSoftObjectPtr&#x3C;UMaterialInterface></code></summary>

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

Suppress error messages when triangulation fails for a path.

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

📋 _Visible when Weld Edges = true_

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

📋 _Visible when Compute Normals = true_

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

#### Inherited Settings

This node inherits path processing settings from its base class.

→ See Path Processor Settings for: Path validation and invalid path filtering options.

***

📦 **Module**: `PCGExElementsTopology` · 📄 [Source](https://github.com/Nebukam/PCGExtendedToolkit/blob/main/Source/PCGExElementsTopology/Public/Elements/PCGExTopologyPathSurface.h)
