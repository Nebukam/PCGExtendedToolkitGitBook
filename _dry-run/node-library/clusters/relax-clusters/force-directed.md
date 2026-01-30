---
icon: magnet
description: 'Relax : Force Directed'
---

# Relax : Force Directed

Simulates a physical **spring-charge system** with attractive and repulsive forces between vertices.

## Overview

Force Directed relaxation treats the graph as a physical system:
- **Edges act as springs**: Connected vertices attract each other (Hooke's Law)
- **Vertices act as charged particles**: All vertices repel each other (Coulomb's Law)

The balance between attraction and repulsion creates naturally spaced layouts where connected vertices stay close but don't overlap.

## Key Behavior

```
Spring Force (Attraction):      Charge Force (Repulsion):
    A ←──spring──→ B                A ←···repel···→ B

Connected vertices               All vertex pairs
pull toward each other           push apart

Combined Result:
    ●───●───●
   / \     / \
  ●   ●───●   ●
   \ /     \ /
    ●───●───●

Balanced spacing with maintained connections
```

## Settings

<details>
<summary><strong>Spring Constant</strong> <code>double</code></summary>

Strength of the attractive force between connected vertices. Higher values pull connected vertices closer together.

Based on Hooke's Law: `F = k * distance`

Default: `0.1`

⚡ PCG Overridable

</details>

<details>
<summary><strong>Electrostatic Constant</strong> <code>double</code></summary>

Strength of the repulsive force between all vertex pairs. Higher values push vertices further apart.

Based on Coulomb's Law: `F = k / distance²`

Default: `1000`

⚡ PCG Overridable

</details>

### Base Settings

<details>
<summary><strong>Floating Point Precision</strong> <code>double</code></summary>

Internal precision multiplier for atomic operations.

Default: `100`

⚡ PCG Overridable

</details>

## Physics Model

### Attractive Force (Springs)

For each edge connecting vertices A and B:
```
Direction = normalize(B - A)
Distance = length(B - A)
Force = SpringConstant * Distance * Direction
```

Connected vertices attract proportionally to their distance - the further apart, the stronger the pull.

### Repulsive Force (Charges)

For each pair of connected vertices:
```
Direction = normalize(B - A)
Distance = length(B - A)
Force = ElectrostaticConstant / Distance² * Direction
```

Note: In this implementation, repulsion is only computed between **connected** vertices (neighbors), not all pairs. This is more efficient but produces different results than classical force-directed layouts.

### Force Balance

The system reaches equilibrium when:
```
SpringConstant * Distance = ElectrostaticConstant / Distance²
```

Solving: `Distance³ = ElectrostaticConstant / SpringConstant`

With defaults (0.1, 1000): Equilibrium distance ≈ 21.5 units

## Tuning Guide

### Tight Clustering
```
Spring Constant: 0.5 (high)
Electrostatic Constant: 500 (low)
```
Strong attraction, weak repulsion = compact layout.

### Spread Out Layout
```
Spring Constant: 0.05 (low)
Electrostatic Constant: 2000 (high)
```
Weak attraction, strong repulsion = expanded layout.

### Balanced Layout (default)
```
Spring Constant: 0.1
Electrostatic Constant: 1000
```
Good general-purpose settings.

## Behavior Notes

### Convergence

Force Directed relaxation may oscillate if constants are too high. Use more iterations with lower constants for stable results.

### Only Connected Pairs

Unlike classical force-directed algorithms, this implementation only applies repulsion between **connected** vertices. Non-connected vertices can overlap. For full overlap prevention, use [Box Fitting](./box-fitting.md) or [Radius Fitting](./radius-fitting.md).

### When to Use

- **Graph visualization**: Creating readable node layouts
- **Network diagrams**: Spreading connected components
- **Organic layouts**: Natural-looking vertex distribution

### When NOT to Use

- **Collision-free placement**: Use Fitting algorithms
- **Simple smoothing**: Use Laplacian (faster)
- **Physical simulation**: Use Verlet (has momentum)

## Examples

**Network visualization**:
```
Iterations: 30
Spring Constant: 0.1
Electrostatic Constant: 1000
```

**Tight clusters with separation**:
```
Iterations: 50
Spring Constant: 0.3
Electrostatic Constant: 500
```

**Maximally spread**:
```
Iterations: 40
Spring Constant: 0.02
Electrostatic Constant: 3000
```

## Comparison

| Aspect | Force Directed | Laplacian | Verlet |
|--------|----------------|-----------|--------|
| **Repulsion** | Yes (neighbors) | No | No |
| **Momentum** | No | No | Yes |
| **Speed** | Medium | Fast | Slow |
| **Stability** | Good | Excellent | Variable |

## Related

- [Laplacian](./laplacian.md) - Simpler smoothing without repulsion
- [Verlet](./verlet.md) - Physics-based with momentum and gravity
- [Box Fitting](./box-fitting.md) - Collision-based separation

---

📦 **Module**: `PCGExElementsClusters` · 📄 [Source](https://github.com/Nebukam/PCGExtendedToolkit/blob/main/Source/PCGExElementsClusters/Public/Elements/Relax/PCGExForceDirectedRelax.h)
