---
icon: shapes
description: 'Clipper2 : Triangulate - Performs Constrained Delaunay Triangulation on closed paths and outputs a Dynamic Mesh.'
---

# Clipper2 : Triangulate

Performs Constrained Delaunay Triangulation on closed paths and outputs a Dynamic Mesh.

## Overview

This node converts closed paths into triangulated meshes using Clipper2's Constrained Delaunay Triangulation algorithm. The triangulation preserves source point indices, allowing attribute lookup from the original path points to be transferred to mesh vertices.

## How It Works

1. **Project to 2D**: Paths are projected onto a 2D plane using the specified projection method for triangulation calculations.
2. **Apply Fill Rule**: The fill rule determines how overlapping or nested paths are interpreted as solid vs hollow regions.
3. **Triangulate**: Clipper2 performs constrained Delaunay triangulation, optionally optimizing for better triangle quality.
4. **Build Mesh**: Triangles are assembled into a PCG Dynamic Mesh with optional repair, normals computation, and UV mapping.
5. **Map Attributes**: Source point indices are preserved so vertex attributes can be looked up from the original paths.

{% hint style="success" %}
### Automatic Hole Detection
The relationship between paths (which is a hole vs an outer boundary) is computed automatically based on data groups. Paths within the same data group are processed together, and Clipper2 determines containment relationships based on the fill rule and path winding. You don't need to manually tag or classify paths as holes.
{% endhint %}

#### Usage Notes

- **Closed Paths Only**: This node only processes closed paths. Open paths are not supported for triangulation.
- **Fill Rule**: The fill rule affects how overlapping paths are handled - EvenOdd alternates between filled and hollow with each overlap, while NonZero fills any region enclosed by paths winding in the same direction.
- **Delaunay Optimization**: When enabled, produces more uniform triangles by optimizing edge flips. Disable for faster processing when triangle quality is not critical.

## Behavior

```
Input: Closed path points     Output: Triangulated mesh
     ┌─────────────┐               ┌─────────────┐
     │ ●─────────● │               │ ●─────────● │
     │ │         │ │      →        │ │\       /│ │
     │ │         │ │               │ │ \     / │ │
     │ │         │ │               │ │  \   /  │ │
     │ ●─────────● │               │ ●───●───● │
     └─────────────┘               └─────────────┘
```

## Outputs

| Pin | Type | Description |
|-----|------|-------------|
| **Mesh** | PCG Dynamic Mesh | The triangulated mesh output |

## Settings

### Node-Specific Settings

<details>
<summary><strong>Projection Details</strong> <code>FPCGExGeo2DProjectionDetails</code></summary>

Settings for projecting 3D paths onto a 2D plane for triangulation. Paths are triangulated in 2D, then the resulting mesh is reconstructed in 3D space.

//→ See TODO FPCGExGeo2DProjectionDetails

</details>

<details>
<summary><strong>Fill Rule</strong> <code>EPCGExClipper2FillRule</code></summary>

Determines how overlapping or nested path regions are filled.

| Option | Description |
|--------|-------------|
| **Even Odd** | Alternates between filled and hollow with each boundary crossing. A point is inside if it crosses an odd number of boundaries. |
| **Non Zero** | Fills regions based on winding direction. A point is inside if the total winding number is non-zero. |
| **Positive** | Only fills regions with positive winding (counter-clockwise paths). |
| **Negative** | Only fills regions with negative winding (clockwise paths). |

Default: `EvenOdd`

⚡ PCG Overridable

</details>

<details>
<summary><strong>Use Delaunay</strong> <code>bool</code></summary>

Enable Delaunay optimization for better triangle quality. Delaunay triangulation maximizes the minimum angle of triangles, producing more uniform shapes that are better for rendering and simulation.

Default: `true`

⚡ PCG Overridable

</details>

---

### Mesh Settings

<details>
<summary><strong>Attempt Repair</strong> <code>bool</code></summary>

Attempt to repair degenerate geometry (zero-area triangles, duplicate vertices) after triangulation.

Default: `false`

⚡ PCG Overridable

</details>

<details>
<summary><strong>Repair Degenerate</strong> <code>FGeometryScriptDegenerateTriangleOptions</code></summary>

Options for handling degenerate triangles during repair.

📋 *Visible when Attempt Repair = true*

⚡ PCG Overridable

</details>

<details>
<summary><strong>Topology</strong> <code>FPCGExTopologyDetails</code></summary>

Mesh generation settings including material, vertex colors, UV channels, normals, and coordinate space.

See [Topology Clusters Processor](../Core/PCGExTopologyClustersProcessor.md) for detailed topology settings documentation.

</details>

---

### Warnings and Errors

<details>
<summary><strong>Quiet Bad Vertices Warning</strong> <code>bool</code></summary>

Suppress warnings about bad or duplicate vertices encountered during triangulation.

Default: `false`

⚡ PCG Overridable

</details>

### Inherited Settings

This node inherits path processing settings from its base class.

→ See [Clipper2 Processor Settings](../Core/PCGExClipper2Processor.md) for: Path matching, carry-over attributes, and blending options.

---

📦 **Module**: `PCGExElementsTopology` · 📄 [Source](https://github.com/Nebukam/PCGExtendedToolkit/blob/main/Source/PCGExElementsTopology/Public/Elements/PCGExClipper2Triangulate.h)

<!-- VERIFICATION REPORT
Node-Specific Properties: 7 documented (ProjectionDetails, FillRule, bUseDelaunay, bAttemptRepair, RepairDegenerate, Topology, bQuietBadVerticesWarning)
Inherited Properties: Referenced to UPCGExClipper2ProcessorSettings
Inputs: Inherited from base
Outputs: Mesh (PCG Dynamic Mesh)
Nested Types: EPCGExClipper2FillRule, FPCGExGeo2DProjectionDetails, FPCGExTopologyDetails
-->
