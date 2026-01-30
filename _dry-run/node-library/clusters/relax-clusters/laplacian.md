---
icon: wave-pulse
description: 'Relax : Laplacian (Poisson)'
---

# Relax : Laplacian (Poisson)

Moves each vertex toward the **average position of its neighbors**, producing smooth, evenly-distributed results.

## Overview

Laplacian relaxation is the simplest and most commonly used smoothing algorithm. Each vertex moves toward the centroid of its connected neighbors, naturally evening out spacing across the cluster.

This is equivalent to solving the Laplacian equation on the graph, hence the name.

## Key Behavior

```
Before:                     After (1 iteration):
    A                           A
   /|\                         /|\
  / | \                       / | \
 B  C  D                     B  C  D
    ↓
C moves toward               C now at centroid
average of A,B,D             of A, B, D
```

**Formula**: `NewPosition = AveragePosition(Neighbors)`

Each iteration, every vertex moves to the exact centroid of its neighbors. With multiple iterations, this propagates smoothing across the entire cluster.

## Settings

### Base Settings

<details>
<summary><strong>Floating Point Precision</strong> <code>double</code></summary>

Internal precision multiplier for atomic operations. Higher values = more precision but potential overflow with extreme coordinates.

Default: `100` (0.01 unit precision)

⚡ PCG Overridable

</details>

## Behavior Notes

### Convergence

Laplacian relaxation converges toward a stable state where all vertices are evenly spaced relative to their neighbors. The rate of convergence depends on:

- **Graph topology**: Dense graphs converge faster
- **Initial distribution**: More irregular = more iterations needed
- **Boundary conditions**: Hull vertices have fewer neighbors, creating edge effects

### Edge Effects

Vertices on the convex hull (with fewer neighbors) tend to "pull inward" during relaxation. This is normal behavior - the algorithm naturally compacts the cluster toward its center of mass.

### When to Use

- **General smoothing**: After Delaunay triangulation
- **Uniform spacing**: Creating regular grid-like patterns
- **Quick results**: Fastest relaxation algorithm
- **Predictable behavior**: Deterministic, stable output

### When NOT to Use

- **Collision avoidance**: Use Box/Radius Fitting instead
- **Physical simulation**: Use Verlet or Force Directed
- **Edge length preservation**: Use Fitting algorithms with edge constraints

## Examples

**Basic smoothing** (10 iterations):
```
Iterations: 10
Influence: 1.0
```
Moderate smoothing, preserves general shape.

**Heavy smoothing** (50+ iterations):
```
Iterations: 50
Influence: 1.0
```
Strong regularization, approaches equilibrium.

**Partial smoothing** (with reduced influence):
```
Iterations: 20
Influence: 0.5
Progressive Influence: true
```
Blends original and smoothed positions.

## Comparison

| Aspect | Laplacian | Force Directed | Fitting |
|--------|-----------|----------------|---------|
| **Speed** | Fastest | Medium | Slowest |
| **Overlap handling** | None | Partial | Full |
| **Edge preservation** | Poor | Medium | Good |
| **Predictability** | High | Medium | Medium |

## Related

- [Force Directed](./force-directed.md) - Adds repulsion between vertices
- [Verlet](./verlet.md) - Physics-based with momentum

---

📦 **Module**: `PCGExElementsClusters` · 📄 [Source](https://github.com/Nebukam/PCGExtendedToolkit/blob/main/Source/PCGExElementsClusters/Public/Elements/Relax/PCGExLaplacianRelax.h)
