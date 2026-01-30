---
icon: square
description: 'Relax : Box Fitting'
---

# Relax : Box Fitting

Collision-aware relaxation that resolves **axis-aligned bounding box overlaps** while optionally preserving edge lengths.

## Overview

Box Fitting relaxation detects when vertex bounding boxes overlap and pushes them apart. This is useful for placing objects that need physical separation, like buildings, props, or any non-overlapping elements.

Two versions are available:
- **Box Fitting**: Uses point local bounds from the PCG data
- **Box Fitting v2**: Uses configurable extents with advanced separation modes

## Key Behavior

```
Before:                      After Box Fitting:
  ┌───┐                        ┌───┐
  │ A │┌───┐                   │ A │  ┌───┐
  └───┘│ B │        →          └───┘  │ B │
       └───┘                          └───┘

Overlapping boxes            Separated without overlap
```

## Box Fitting (v1)

Uses point local bounds from PCG data, transformed by point transform.

### Settings

<details>
<summary><strong>Padding</strong> <code>double</code></summary>

Additional spacing added to box bounds. Increases minimum separation between objects.

Default: `10`

⚡ PCG Overridable

</details>

---

## Box Fitting v2

More flexible version with configurable extents and separation modes.

### Extents Settings

<details>
<summary><strong>Extents Input</strong> <code>EPCGExInputValueType</code></summary>

Source for box extents values.

| Option | Behavior |
|--------|----------|
| **Constant** | Use a single extents vector for all vertices |
| **Attribute** | Read per-vertex extents from an FVector attribute |

Default: `Attribute`

⚡ PCG Overridable

</details>

<details>
<summary><strong>Extents (Attr)</strong> <code>FPCGAttributePropertyInputSelector</code></summary>

Attribute to read extents from. Values are half-size in each axis (like UE box extents).

Default: `$Extents`

⚡ PCG Overridable
📋 Visible when: `Extents Input = Attribute`

</details>

<details>
<summary><strong>Extents</strong> <code>FVector</code></summary>

Constant extents value. Half-size in each axis.

Default: `(50, 50, 50)`

⚡ PCG Overridable
📋 Visible when: `Extents Input = Constant`

</details>

### Separation Settings

<details>
<summary><strong>Separation Mode</strong> <code>EPCGExBoxFittingSeparation</code></summary>

How to determine separation direction when boxes overlap.

| Option | Behavior |
|--------|----------|
| **Minimum Penetration** | Separate along the axis with smallest overlap (most efficient) |
| **Edge Direction** | Prefer separation along connected edge directions (preserves graph structure) |
| **Centroid** | Separate directly away from each other's centers (radial push) |

Default: `Minimum Penetration`

⚡ PCG Overridable

</details>

<details>
<summary><strong>Padding</strong> <code>double</code></summary>

Additional spacing between boxes.

Default: `0`

⚡ PCG Overridable

</details>

<details>
<summary><strong>Use Oriented Bounds</strong> <code>bool</code></summary>

When enabled, considers point rotation when computing bounds. More accurate but more expensive.

Default: `false`

⚡ PCG Overridable

</details>

---

## Shared Settings (Base Class)

Both versions inherit from FittingRelaxBase with these shared settings:

### Repulsion

<details>
<summary><strong>Repulsion Constant</strong> <code>double</code></summary>

Strength of the separation force when boxes overlap. Higher values = faster separation but potentially more instability.

Default: `100`

⚡ PCG Overridable

</details>

### Edge Fitting

<details>
<summary><strong>Edge Fitting</strong> <code>EPCGExRelaxEdgeFitting</code></summary>

How to handle edge length constraints during fitting.

| Option | Behavior |
|--------|----------|
| **Ignore** | Don't consider edges during fitting (fastest) |
| **Fixed** | Maintain a constant edge length |
| **Existing** | Preserve original edge lengths |
| **Attribute** | Read target length from edge attribute |

Default: `Existing`

⚡ PCG Overridable

</details>

<details>
<summary><strong>Desired Edge Length</strong> <code>double</code></summary>

Target edge length when using Fixed mode.

Default: `100`

⚡ PCG Overridable
📋 Visible when: `Edge Fitting = Fixed`

</details>

<details>
<summary><strong>Desired Edge Length (Attr)</strong> <code>FPCGAttributePropertyInputSelector</code></summary>

Attribute to read target edge length from.

⚡ PCG Overridable
📋 Visible when: `Edge Fitting = Attribute`

</details>

<details>
<summary><strong>Scale</strong> <code>double</code></summary>

Scale factor applied to edge lengths.

Default: `2`

⚡ PCG Overridable
📋 Visible when: `Edge Fitting = Attribute` or `Edge Fitting = Existing`

</details>

<details>
<summary><strong>Spring Constant</strong> <code>double</code></summary>

Stiffness of edge springs. Lower values allow more edge stretching for better placement; higher values preserve edge topology.

Default: `0.1`

⚡ PCG Overridable
📋 Visible when: `Edge Fitting != Ignore`

</details>

### Simulation

<details>
<summary><strong>Time Step</strong> <code>double</code></summary>

Simulation time advance per iteration.

Default: `0.01`

⚡ PCG Overridable

</details>

### Base Settings

<details>
<summary><strong>Floating Point Precision</strong> <code>double</code></summary>

Internal precision multiplier.

Default: `100`

⚡ PCG Overridable

</details>

## Algorithm Steps

Each iteration performs three steps:

1. **Edge Springs**: Apply spring forces to maintain edge lengths (if Edge Fitting != Ignore)
2. **Box Repulsion**: Detect overlaps and calculate separation forces
3. **Position Update**: Apply accumulated forces with TimeStep

## Separation Modes Explained

### Minimum Penetration
Finds the axis (X, Y, or Z) with the smallest overlap and separates along that axis only. Produces axis-aligned movement, efficient for grid-like layouts.

```
Overlap in X: 20    →  Separate on Z axis
Overlap in Y: 50       (smallest overlap)
Overlap in Z: 10
```

### Edge Direction
For connected vertices, separates along the edge direction. For non-connected vertices, falls back to Minimum Penetration. Best for preserving graph topology.

### Centroid
Always separates directly away from each other's centers. Produces radial expansion, good for organic layouts.

## Use Cases

### Non-Overlapping Building Placement
```
Extents Input: Attribute ($Extents)
Separation Mode: Minimum Penetration
Padding: 10
Edge Fitting: Ignore
Iterations: 100
```

### Props with Spacing
```
Extents: (25, 25, 25)
Separation Mode: Centroid
Padding: 5
Iterations: 50
```

### Connected Elements with Preserved Topology
```
Separation Mode: Edge Direction
Edge Fitting: Existing
Spring Constant: 0.2
Scale: 1.5
Iterations: 100
```

## Behavior Notes

### v1 vs v2

| Feature | Box Fitting | Box Fitting v2 |
|---------|-------------|----------------|
| **Extents Source** | Point local bounds | Configurable |
| **Separation Modes** | Overlap-based | 3 modes |
| **Oriented Bounds** | Always | Optional |
| **Flexibility** | Simple | Advanced |

### Convergence

Box Fitting may need many iterations to fully resolve all overlaps, especially with:
- Many densely packed boxes
- Large size variations
- Strong edge constraints

Start with 50-100 iterations and increase if needed.

### Edge Fitting Trade-offs

- **Ignore**: Fastest, best overlap resolution, but edges may stretch significantly
- **Existing/Fixed**: Preserves topology but may leave some overlaps
- **Lower Spring Constant**: Better overlap resolution, more edge stretching

## Comparison

| Aspect | Box Fitting | Radius Fitting | Force Directed |
|--------|-------------|----------------|----------------|
| **Shape** | Rectangular | Spherical | N/A |
| **Overlap detection** | AABB | Sphere | N/A |
| **Best for** | Buildings, props | Circular objects | Graph layout |

## Related

- [Radius Fitting](./radius-fitting.md) - Spherical collision detection
- [Force Directed](./force-directed.md) - Graph layout without collision
- [Verlet](./verlet.md) - Physics with gravity

---

📦 **Module**: `PCGExElementsClusters` · 📄 Source: [Box Fitting](https://github.com/Nebukam/PCGExtendedToolkit/blob/main/Source/PCGExElementsClusters/Public/Elements/Relax/PCGExBoxFittingRelax.h) · [Box Fitting v2](https://github.com/Nebukam/PCGExtendedToolkit/blob/main/Source/PCGExElementsClusters/Public/Elements/Relax/PCGExBoxFittingRelax2.h)
