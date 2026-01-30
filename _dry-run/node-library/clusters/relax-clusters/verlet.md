---
icon: atom
description: 'Relax : Verlet (Gravity)'
---

# Relax : Verlet (Gravity)

Physics-based relaxation with **gravity, friction, and edge springs** using Verlet integration for smooth, momentum-preserving motion.

## Overview

Verlet relaxation simulates a physical system where:
- **Gravity** pulls vertices in a direction
- **Friction** dampens motion over time
- **Edge springs** maintain connections with configurable stiffness
- **Verlet integration** preserves momentum between iterations

This produces organic, physically-plausible motion useful for simulating hanging structures, cloth-like behavior, or gravity-affected networks.

## Key Behavior

```
Initial State:              After Verlet Relaxation:
    ●───●───●                   ●───●───●
    │   │   │                    \   │   /
    ●   ●   ●       →            ●───●───●
    │   │   │                      \ │ /
    ●───●───●                       \●/

Uniform grid                  Gravity pulls down,
                              springs resist stretching
```

## Settings

### Gravity

<details>
<summary><strong>Gravity Input</strong> <code>EPCGExInputValueType</code></summary>

Source for gravity values.

| Option | Behavior |
|--------|----------|
| **Constant** | Use a single gravity vector for all vertices |
| **Attribute** | Read per-vertex gravity from an FVector attribute |

Default: `Constant`

⚡ PCG Overridable

</details>

<details>
<summary><strong>Gravity (Attr)</strong> <code>FPCGAttributePropertyInputSelector</code></summary>

Attribute to read gravity vector from.

⚡ PCG Overridable
📋 Visible when: `Gravity Input = Attribute`

</details>

<details>
<summary><strong>Gravity</strong> <code>FVector</code></summary>

Constant gravity vector. Acts as an acceleration applied each iteration.

Default: `(0, 0, -100)`

⚡ PCG Overridable
📋 Visible when: `Gravity Input = Constant`

</details>

### Friction

<details>
<summary><strong>Friction Input</strong> <code>EPCGExInputValueType</code></summary>

Source for friction values.

| Option | Behavior |
|--------|----------|
| **Constant** | Use a single friction value for all vertices |
| **Attribute** | Read per-vertex friction from an attribute |

Default: `Constant`

⚡ PCG Overridable

</details>

<details>
<summary><strong>Friction (Attr)</strong> <code>FPCGAttributePropertyInputSelector</code></summary>

Attribute to read friction values from. Expected range: `[0..1]`

⚡ PCG Overridable
📋 Visible when: `Friction Input = Attribute`

</details>

<details>
<summary><strong>Friction</strong> <code>double</code></summary>

Constant friction value. Dampens velocity each iteration.

- `0.0` = No friction (full momentum preserved)
- `1.0` = Full friction (no movement, vertex is "pinned")

Range: `0` to `1`
Default: `0`

⚡ PCG Overridable
📋 Visible when: `Friction Input = Constant`

</details>

### Edge Constraints

<details>
<summary><strong>Edge Scaling Input</strong> <code>EPCGExInputValueType</code></summary>

Source for edge scaling values.

| Option | Behavior |
|--------|----------|
| **Constant** | Use a single scale for all edges |
| **Attribute** | Read per-edge scale from an attribute |

Default: `Constant`

⚡ PCG Overridable

</details>

<details>
<summary><strong>Edge Scaling (Attr)</strong> <code>FPCGAttributePropertyInputSelector</code></summary>

Attribute to read edge scaling from.

⚡ PCG Overridable
📋 Visible when: `Edge Scaling Input = Attribute`

</details>

<details>
<summary><strong>Edge Scaling</strong> <code>double</code></summary>

Scale factor applied to edge rest lengths. Values > 1 allow edges to stretch longer; values < 1 compress them.

Default: `1`

⚡ PCG Overridable
📋 Visible when: `Edge Scaling Input = Constant`

</details>

<details>
<summary><strong>Edge Stiffness Input</strong> <code>EPCGExInputValueType</code></summary>

Source for edge stiffness values.

| Option | Behavior |
|--------|----------|
| **Constant** | Use a single stiffness for all edges |
| **Attribute** | Read per-edge stiffness from an attribute |

Default: `Constant`

⚡ PCG Overridable

</details>

<details>
<summary><strong>Edge Stiffness (Attr)</strong> <code>FPCGAttributePropertyInputSelector</code></summary>

Attribute to read edge stiffness from. Expected range: `[0..1]`, internally divided by 3.

⚡ PCG Overridable
📋 Visible when: `Edge Stiffness Input = Attribute`

</details>

<details>
<summary><strong>Edge Stiffness</strong> <code>double</code></summary>

How strongly edges resist stretching/compression.

- `0.0` = Edges freely stretch (no constraint)
- `1.0` = Edges are stiff (strong length preservation)

Note: Internally divided by ~3 for stability.

Range: `0` to `1`
Default: `0.5`

⚡ PCG Overridable
📋 Visible when: `Edge Stiffness Input = Constant`

</details>

### Simulation

<details>
<summary><strong>Time Step</strong> <code>double</code></summary>

Simulation time advance per iteration. Smaller values = more stable but slower convergence.

Default: `0.1`

⚡ PCG Overridable

</details>

### Base Settings

<details>
<summary><strong>Floating Point Precision</strong> <code>double</code></summary>

Internal precision multiplier for atomic operations.

Default: `100`

⚡ PCG Overridable

</details>

## Algorithm Steps

Each iteration performs three steps:

1. **Apply Gravity**: Add gravity force to each vertex (scaled by TimeStep²)
2. **Compute Spring Corrections**: For each edge, calculate correction to maintain rest length
3. **Update Positions**: Apply accumulated forces, respecting friction

### Verlet Integration

Unlike simple Euler integration, Verlet preserves velocity implicitly:
```
Velocity = CurrentPosition - PreviousPosition
NewPosition = CurrentPosition + Velocity * (1 - Friction) + Acceleration
```

This produces more stable, natural-looking motion.

## Use Cases

### Hanging Structures
```
Gravity: (0, 0, -100)
Friction: 0.1
Edge Stiffness: 0.8
Iterations: 100
```
Vertices at top with Friction=1 act as anchor points.

### Cloth Simulation
```
Gravity: (0, 0, -50)
Friction: 0.2
Edge Stiffness: 0.6
Edge Scaling: 1.0
Iterations: 200
```
Pin corner vertices with per-vertex friction=1.

### Settling/Stabilization
```
Gravity: (0, 0, -20)
Friction: 0.5
Edge Stiffness: 0.3
Iterations: 50
```
Light gravity to settle floating vertices.

## Behavior Notes

### Pinning Vertices

Set `Friction = 1.0` on vertices you want to remain stationary. Use an attribute to pin specific vertices:
1. Create `Friction` attribute on vertices
2. Set `1.0` for pinned vertices, `0.0` for free vertices
3. Set `Friction Input = Attribute`

### Stability

High TimeStep or Stiffness values can cause instability. If simulation explodes:
- Reduce TimeStep (try `0.05`)
- Reduce Edge Stiffness (try `0.3`)
- Increase Iterations to compensate

### Edge Length Preservation

The algorithm uses **existing edge lengths** as rest lengths. Edge Scaling modifies the target:
- `Edge Scaling = 2.0` = Edges try to be twice their original length
- `Edge Scaling = 0.5` = Edges try to be half their original length

## Comparison

| Aspect | Verlet | Force Directed | Laplacian |
|--------|--------|----------------|-----------|
| **Momentum** | Yes | No | No |
| **Gravity** | Yes | No | No |
| **Friction** | Yes | No | No |
| **Physical accuracy** | High | Medium | Low |
| **Speed** | Slow | Medium | Fast |

## Related

- [Force Directed](./force-directed.md) - Simpler spring-charge without momentum
- [Laplacian](./laplacian.md) - Basic smoothing
- [Box Fitting](./box-fitting.md) - Collision-based fitting

---

📦 **Module**: `PCGExElementsClusters` · 📄 [Source](https://github.com/Nebukam/PCGExtendedToolkit/blob/main/Source/PCGExElementsClusters/Public/Elements/Relax/PCGExVerletRelax.h)
