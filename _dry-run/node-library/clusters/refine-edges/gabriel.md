---
icon: diagram-project
description: 'Refine : Gabriel'
---

# Refine : Gabriel

Keep only edges that pass the **Gabriel graph test** - no other vertex lies inside the edge's diametral sphere.

## Overview

The Gabriel graph is a subset of the Delaunay triangulation where an edge is kept only if no other vertex lies inside the circle (2D) or sphere (3D) having the edge as its diameter. This produces a sparser graph that often better represents natural connectivity.

## Key Behavior

```
Gabriel Test:

    Edge AB with diameter sphere:
         ╭─────────╮
        ╱     C     ╲
       │   ●         │      C inside sphere → Edge removed
       │             │
    A ●───────────── ● B
       │             │
        ╲           ╱
         ╰─────────╯

         ╭─────────╮
        ╱           ╲
       │             │      No points inside → Edge kept
       │             │
    A ●───────────── ● B
       │             │
        ╲           ╱
         ╰─────────╯
```

## How It Works

1. **For each edge**: Compute the diametral sphere (center at edge midpoint, radius = half edge length)
2. **Test vertices**: Check if any other vertex lies inside the sphere
3. **Mark validity**: Keep edge if sphere is empty, remove if any vertex inside

## Settings

<details>
<summary><strong>Invert</strong> <code>bool</code></summary>

Invert the refinement result. When enabled, keeps edges that fail the Gabriel test and removes edges that pass.

Default: `false`

⚡ PCG Overridable

</details>

## Comparison with Other Spatial Tests

| Test | Empty Region Shape | Sparsity |
|------|-------------------|----------|
| **Gabriel** | Diametral sphere | Medium |
| **β Skeleton (β=1)** | Same as Gabriel | Medium |
| **β Skeleton (β<1)** | Smaller lune | Denser |
| **β Skeleton (β>1)** | Larger circles | Sparser |

## Example

**Create Gabriel graph from Delaunay**:
1. Generate Delaunay triangulation
2. Connect to Refine Edges
3. Select Gabriel operation
4. Result: Subset of Delaunay with empty diametral spheres

---

📦 **Parent**: [Refine Edges](./README.md) · 📄 [Source](https://github.com/Nebukam/PCGExtendedToolkit/blob/main/Source/PCGExElementsClusters/Public/Elements/Refining/PCGExEdgeRefineGabriel.h)
