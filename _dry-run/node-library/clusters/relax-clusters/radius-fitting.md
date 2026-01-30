---
icon: circle
description: 'Relax : Radius Fitting'
---

# Relax : Radius Fitting

Collision-aware relaxation that resolves **spherical overlaps** based on vertex radii while optionally preserving edge lengths.

## Overview

Radius Fitting relaxation detects when vertex spheres overlap and pushes them apart. This is ideal for circular or spherical objects, particle systems, or any placement where uniform spacing based on object size is desired.

## Key Behavior

```
Before:                      After Radius Fitting:
    ○                            ○
   ○ ○              →           ○   ○
    ○                            ○

Overlapping spheres          Separated by combined radii
```

## Settings

### Radius

<details>
<summary><strong>Radius Input</strong> <code>EPCGExInputValueType</code></summary>

Source for radius values.

| Option | Behavior |
|--------|----------|
| **Constant** | Use a single radius for all vertices |
| **Attribute** | Read per-vertex radius from an attribute |

Default: `Attribute`

⚡ PCG Overridable

</details>

<details>
<summary><strong>Radius (Attr)</strong> <code>FPCGAttributePropertyInputSelector</code></summary>

Attribute to read radius from.

Default: `$Extents.Length` (diagonal of extents vector)

⚡ PCG Overridable
📋 Visible when: `Radius Input = Attribute`

</details>

<details>
<summary><strong>Radius</strong> <code>double</code></summary>

Constant radius value for all vertices.

Default: `100`

⚡ PCG Overridable
📋 Visible when: `Radius Input = Constant`

</details>

### Repulsion

<details>
<summary><strong>Repulsion Constant</strong> <code>double</code></summary>

Strength of the separation force when spheres overlap. The force is proportional to `Overlap / Distance²`, making nearby overlaps resolve faster.

Default: `100`

⚡ PCG Overridable

</details>

### Edge Fitting

<details>
<summary><strong>Edge Fitting</strong> <code>EPCGExRelaxEdgeFitting</code></summary>

How to handle edge length constraints during fitting.

| Option | Behavior |
|--------|----------|
| **Ignore** | Don't consider edges (fastest, best overlap resolution) |
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

Stiffness of edge springs. Lower values allow more stretching for better overlap resolution.

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

## Algorithm

### Overlap Detection

For each pair of vertices A and B:
```
CombinedRadius = RadiusA + RadiusB
Distance = length(B - A)
Overlap = CombinedRadius - Distance
```

If `Overlap > 0`, the spheres intersect.

### Repulsion Force

```
Direction = normalize(B - A)
Force = RepulsionConstant * (Overlap / Distance²) * Direction
```

The inverse square relationship ensures:
- Strong force when vertices are close
- Gentle force as they approach separation
- Smooth, stable convergence

### Combined with Edge Springs

When `Edge Fitting != Ignore`, edge springs apply forces to maintain edge lengths. The final vertex movement balances:
- Sphere repulsion (push apart)
- Edge springs (maintain connections)

## Use Cases

### Particle Separation
```
Radius: 50 (constant)
Edge Fitting: Ignore
Repulsion Constant: 150
Iterations: 50
```
Fast separation without edge constraints.

### Uniform Object Spacing
```
Radius Input: Attribute ($BoundingSphereRadius)
Edge Fitting: Existing
Scale: 1.2
Spring Constant: 0.05
Iterations: 100
```
Objects stay connected but don't overlap.

### Tree Placement
```
Radius Input: Attribute (CrownRadius)
Edge Fitting: Ignore
Repulsion Constant: 200
Iterations: 80
```
Trees spread to avoid crown overlap.

### Variable Size Objects
```
Radius Input: Attribute ($Scale.X * 50)
Edge Fitting: Existing
Scale: 1.0
Iterations: 150
```
Mixed-size objects maintain proper spacing.

## Behavior Notes

### Radius Attribute

The default attribute `$Extents.Length` uses the length of the point's extents vector. This works well for:
- Uniform-scale points (all axes same)
- Points where extents represent bounding sphere

For non-uniform objects, consider:
- `$Extents.X` (single axis)
- `$Scale.X * constant` (scaled base radius)
- Custom `Radius` attribute

### Convergence

Radius Fitting typically converges faster than Box Fitting because:
- Simpler overlap calculation
- Smooth force falloff
- Single separation direction

Start with 30-50 iterations and increase if needed.

### Dense Clusters

For very dense initial placement, consider:
1. Increase Repulsion Constant (try 200-500)
2. Increase Iterations (try 100-200)
3. Set Edge Fitting to Ignore initially, then run again with edges

## Comparison

| Aspect | Radius Fitting | Box Fitting |
|--------|----------------|-------------|
| **Shape** | Spherical | Rectangular |
| **Overlap test** | Distance < sum of radii | AABB intersection |
| **Best for** | Circular objects, particles | Buildings, rectangular props |
| **Speed** | Faster | Slower |
| **Accuracy** | Lower (bounding sphere) | Higher (exact bounds) |

## Related

- [Box Fitting](./box-fitting.md) - Rectangular collision detection
- [Force Directed](./force-directed.md) - Repulsion without collision
- [Laplacian](./laplacian.md) - Simple smoothing

---

📦 **Module**: `PCGExElementsClusters` · 📄 [Source](https://github.com/Nebukam/PCGExtendedToolkit/blob/main/Source/PCGExElementsClusters/Public/Elements/Relax/PCGExRadiusFittingRelax.h)
