---
icon: diagram-project
description: 'In editor :: PCGEx | Cluster : Relax'
---

# Cluster : Relax

Relax point positions using **edges connecting them**, iteratively adjusting vertex locations using **pluggable relaxation algorithms**.

## Overview

Relax Clusters applies iterative relaxation algorithms to smooth or regularize vertex positions based on their edge connections. This is useful for improving the visual quality of clusters after generation or refinement, creating more evenly-spaced layouts, or simulating physical systems.

Different relaxation algorithms produce different results - from smooth averaging (Laplacian) to physics-based spring systems (Force Directed) to collision-aware fitting (Box/Radius Fitting).

## Key Behavior

```
Before Relaxation:          After Laplacian Relax:
    ●───●                       ●───●
   /│   │\                     / \   / \
  ● │   │ ●         →         ●───●───●
   \│   │/                     \ /   \ /
    ●───●                       ●───●

Uneven spacing              Even, smoothed positions
```

## How It Works

1. **Initialize**: Set up read/write buffers for position data
2. **Iterate**: For each iteration:
   - Read current positions
   - Apply relaxation forces based on algorithm
   - Write updated positions
3. **Apply Influence**: Blend original and relaxed positions per iteration or at end
4. **Output**: Write final positions and optional relaxation metadata

## Inputs

| Pin | Type | Description |
|-----|------|-------------|
| **Vtx** | Points | Cluster vertices to relax |
| **Edges** | Points | Cluster edges defining connections |
| **Vtx Filters** | Filters | (Optional) Filter which vertices are relaxed |

## Outputs

| Pin | Type | Description |
|-----|------|-------------|
| **Vtx** | Points | Relaxed cluster vertices |
| **Edges** | Points | Cluster edges (unchanged) |

## Settings

### Relaxation

<details>
<summary><strong>Iterations</strong> <code>int32</code></summary>

Number of relaxation iterations to perform. More iterations produce smoother results but take longer.

Range: `1` minimum
Default: `10`

⚡ PCG Overridable

</details>

<details>
<summary><strong>Relaxing</strong> <code>UPCGExRelaxClusterOperation</code></summary>

The relaxation algorithm to apply. See [Available Operations](#available-operations) below.

⚡ PCG Overridable

</details>

### Influence

<details>
<summary><strong>Influence Input</strong> <code>EPCGExInputValueType</code></summary>

Source for influence values.

| Option | Behavior |
|--------|----------|
| **Constant** | Use a single value for all vertices |
| **Attribute** | Read per-vertex influence from an attribute |

Default: `Constant`

⚡ PCG Overridable

</details>

<details>
<summary><strong>Influence (Attr)</strong> <code>FPCGAttributePropertyInputSelector</code></summary>

Attribute to read influence values from.

⚡ PCG Overridable
📋 Visible when: `Influence Input = Attribute`

</details>

<details>
<summary><strong>Influence</strong> <code>double</code></summary>

How much effect is applied. Controls blend between original and relaxed positions.

- `1.0` = Full relaxation effect
- `0.0` = No effect (original position)
- `-1.0` = Inverse effect (move away from relaxed position)

Range: `-1` to `1`
Default: `1.0`

⚡ PCG Overridable
📋 Visible when: `Influence Input = Constant`

</details>

<details>
<summary><strong>Progressive Influence</strong> <code>bool</code></summary>

When enabled, applies influence after each iteration. When disabled, applies once at the end of all iterations.

- **Enabled**: Gradual blending during relaxation
- **Disabled**: Full relaxation then single blend

Default: `true`

⚡ PCG Overridable

</details>

### Outputs

<details>
<summary><strong>Write Direction And Size</strong> <code>bool</code></summary>

Write the final relaxation direction and magnitude as an FVector attribute.

Default: `false`

⚡ PCG Overridable

</details>

<details>
<summary><strong>Direction And Size Attribute Name</strong> <code>FName</code></summary>

Name of the FVector attribute for direction and size.

Default: `DirectionAndSize`

⚡ PCG Overridable
📋 Visible when: `Write Direction And Size = true`

</details>

<details>
<summary><strong>Write Direction</strong> <code>bool</code></summary>

Write the final relaxation direction (normalized) as an FVector attribute.

Default: `false`

⚡ PCG Overridable

</details>

<details>
<summary><strong>Direction Attribute Name</strong> <code>FName</code></summary>

Name of the FVector attribute for normalized direction.

Default: `Direction`

⚡ PCG Overridable
📋 Visible when: `Write Direction = true`

</details>

<details>
<summary><strong>Write Amplitude</strong> <code>bool</code></summary>

Write the final relaxation amplitude (magnitude) as a double attribute.

Default: `false`

⚡ PCG Overridable

</details>

<details>
<summary><strong>Amplitude Attribute Name</strong> <code>FName</code></summary>

Name of the double attribute for amplitude.

Default: `Amplitude`

⚡ PCG Overridable
📋 Visible when: `Write Amplitude = true`

</details>

## Available Operations

### Smoothing

| Operation | Description | Documentation |
|-----------|-------------|---------------|
| **Laplacian (Poisson)** | Move vertices toward neighbor average | [laplacian.md](./laplacian.md) |

### Physics-Based

| Operation | Description | Documentation |
|-----------|-------------|---------------|
| **Force Directed** | Spring attraction + charge repulsion | [force-directed.md](./force-directed.md) |
| **Verlet (Gravity)** | Physics simulation with gravity and friction | [verlet.md](./verlet.md) |

### Collision Fitting

| Operation | Description | Documentation |
|-----------|-------------|---------------|
| **Box Fitting** | Resolve AABB overlaps using point bounds | [box-fitting.md](./box-fitting.md) |
| **Box Fitting v2** | Resolve overlaps with configurable extents and separation | [box-fitting.md](./box-fitting.md) |
| **Radius Fitting** | Resolve spherical overlaps | [radius-fitting.md](./radius-fitting.md) |

## Output Attributes

| Attribute | Type | Description |
|-----------|------|-------------|
| `DirectionAndSize` | FVector | Direction and magnitude of final movement |
| `Direction` | FVector | Normalized direction of final movement |
| `Amplitude` | double | Magnitude of final movement |

## Examples

**Smooth Delaunay output**:
- Input: Delaunay triangulation
- **Relaxing**: `Laplacian (Poisson)`
- **Iterations**: `20`
- Result: Evenly-spaced triangulation

**Graph layout with separation**:
- **Relaxing**: `Force Directed`
- **Spring Constant**: `0.05` (weak attraction)
- **Electrostatic Constant**: `2000` (strong repulsion)
- Result: Spread-out graph with maintained connections

**Non-overlapping placement**:
- **Relaxing**: `Box Fitting v2`
- **Extents**: From `$Extents` attribute
- **Iterations**: `50`
- Result: Boxes separated without overlap

## Related

### Cluster Operations
- [Refine Edges](../refine-edges/) - Often used before relaxation to reduce edge density
- [Delaunay 2D](../delaunay-2d.md) - Common input for relaxation

---

📦 **Module**: `PCGExElementsClusters` · 📄 [Source](https://github.com/Nebukam/PCGExtendedToolkit/blob/main/Source/PCGExElementsClusters/Public/Elements/PCGExRelaxClusters.h)
