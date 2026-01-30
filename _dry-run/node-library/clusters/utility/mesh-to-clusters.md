---
icon: diagram-project
description: 'In editor :: PCGEx | Mesh to Clusters'
---

# Mesh to Clusters

Create **clusters from mesh topology**, extracting vertices and edges from static mesh geometry.

## Overview

Mesh to Clusters reads the vertex and edge structure from a static mesh and outputs it as cluster data. This enables graph-based operations on mesh topology - useful for extracting connectivity patterns, creating wire-frame representations, or using meshes as templates for procedural generation.

## Key Behavior

```
Static Mesh Input:          Cluster Output:
    ┌─────────┐                 ●───●───●
    │ ╲     ╱ │                /│\   │  /│\
    │   ╲ ╱   │      →        ● │ ●──●──● │ ●
    │   ╱ ╲   │                \│/   │  \│/
    │ ╱     ╲ │                 ●───●───●
    └─────────┘
   (mesh triangles)         (vertex/edge graph)
```

## How It Works

1. **Load Mesh**: Read static mesh from constant or attribute
2. **Extract Vertices**: Get unique mesh vertex positions
3. **Extract Edges**: Build edges from mesh face topology
4. **Apply Transform**: Transform vertices based on input points
5. **Output Cluster**: Generate Vtx/Edges collections

## Inputs

| Pin | Type | Description |
|-----|------|-------------|
| **Targets** | Points | Points defining where to instantiate mesh clusters |

## Outputs

| Pin | Type | Description |
|-----|------|-------------|
| **Vtx** | Points | Mesh vertices as cluster vertices |
| **Edges** | Points | Mesh edges as cluster edges |

## Settings

### Settings

<details>
<summary><strong>Graph Output Type</strong> <code>EPCGExTriangulationType</code></summary>

How to extract edges from mesh triangles.

| Option | Behavior |
|--------|----------|
| **Raw** | All triangle edges (may have duplicates) |
| **Unique** | Only unique edges |

Default: `Raw`

⚡ PCG Overridable

</details>

<details>
<summary><strong>Static Mesh Input</strong> <code>EPCGExInputValueType</code></summary>

Source for the static mesh.

| Option | Behavior |
|--------|----------|
| **Constant** | Use a fixed static mesh asset |
| **Attribute** | Read mesh path from point attribute |

Default: `Constant`

⚡ PCG Overridable

</details>

<details>
<summary><strong>Static Mesh</strong> <code>TSoftObjectPtr&lt;UStaticMesh&gt;</code></summary>

The static mesh asset to extract topology from.

⚡ PCG Overridable
📋 Visible when: `Static Mesh Input = Constant`

</details>

<details>
<summary><strong>Static Mesh Attribute</strong> <code>FName</code></summary>

Attribute containing the static mesh path (FString, FName, or FSoftObjectPath).

Default: `Mesh`

⚡ PCG Overridable
📋 Visible when: `Static Mesh Input = Attribute`

</details>

<details>
<summary><strong>Attribute Handling</strong> <code>EPCGExMeshAttributeHandling</code></summary>

How to interpret the mesh attribute.

| Option | Behavior |
|--------|----------|
| **Static Mesh Soft Path** | Attribute is a direct mesh path |
| **Actor Reference** | Attribute is an actor reference (extract mesh from primitive) |

⚡ PCG Overridable
📋 Visible when: `Static Mesh Input = Attribute`

</details>

<details>
<summary><strong>Transform Details</strong> <code>FPCGExTransformDetails</code></summary>

How target point transforms affect the mesh vertices.

⚡ PCG Overridable

</details>

<details>
<summary><strong>Import Details</strong> <code>FPCGExGeoMeshImportDetails</code></summary>

Which mesh data to import (UV coordinates, normals, vertex colors, etc.).

⚡ PCG Overridable

</details>

<details>
<summary><strong>Ignore Mesh Warnings</strong> <code>bool</code></summary>

Skip invalid meshes without throwing warnings.

Default: `false`

⚡ PCG Overridable

</details>

<details>
<summary><strong>Vertex Merge Hash Tolerance</strong> <code>float</code></summary>

Tolerance for merging split vertices (at hard edges or UV seams).

Default: `0.0001`

⚡ PCG Overridable

</details>

<details>
<summary><strong>Precise Vertex Merge</strong> <code>bool</code></summary>

Use dual spatial hashes for more accurate vertex merging (slightly slower).

Default: `false`

</details>

### Cluster Output Settings

<details>
<summary><strong>Cluster Output Settings</strong> <code>FPCGExGraphBuilderDetails</code></summary>

Controls how the output cluster is constructed. See [Delaunay 3D](./delaunay-3d.md#cluster-output-settings) for full documentation.

⚡ PCG Overridable

</details>

### Attribute Forwarding

<details>
<summary><strong>Attributes Forwarding</strong> <code>FPCGExForwardDetails</code></summary>

Which input point attributes to forward to output clusters.

⚡ PCG Overridable

</details>

## Examples

**Extract wire-frame from mesh**:
- Provide a static mesh constant
- Use resulting cluster for visualization or further processing

**Per-point mesh variation**:
- **Static Mesh Input**: `Attribute`
- Each target point can reference a different mesh
- Creates cluster instances at each target

## Related

### Diagram Generation
- [Delaunay 3D](./delaunay-3d.md) - Generate clusters from points
- [Build Custom Graph](./build-custom-graph.md) - Blueprint-based cluster generation

### Cluster Operations
- [Refine Edges](./refine-edges.md) - Clean up mesh topology
- [Relax Clusters](./relax-clusters.md) - Smooth vertex positions

---

📦 **Module**: `PCGExElementsClusters` · 📄 [Source](https://github.com/Nebukam/PCGExtendedToolkit/blob/main/Source/PCGExElementsClusters/Public/Elements/PCGExMeshToClusters.h)
