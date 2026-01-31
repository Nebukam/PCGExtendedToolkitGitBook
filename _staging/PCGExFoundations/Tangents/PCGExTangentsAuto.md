---
icon: puzzle-piece
description: 'Auto - Automatically calculates tangents from neighboring point positions.'
---

# Auto

Automatically calculates tangents from neighboring point positions.

## Overview

This tangent factory computes arrive and leave tangents for each point based on the geometric relationship between the current point and its neighbors. It constructs an apex (the triangle formed by the previous, current, and next points) and derives tangent directions that point toward the neighbors, creating smooth transitions along a path or spline.

## How It Works

1. **Neighbor Identification**: For each point, identifies the previous and next points in the sequence
2. **Apex Construction**: Creates an apex geometry using the three points (prev, current, next)
3. **Arrive Tangent Calculation**: Computes direction from current point toward previous point
4. **Leave Tangent Calculation**: Computes direction from current point toward next point
5. **Scaling Application**: Applies arrive and leave scale factors to the tangent vectors
6. **Tangent Output**: Returns scaled arrive and leave tangents for the point

#### Usage Notes

- **Neighbor Dependency**: This method requires valid previous and next points. Edge points (first and last in sequence) may receive special handling depending on the parent node configuration.
- **Geometric Basis**: Tangents are purely geometric - derived from point positions without considering transforms, velocities, or other attributes.
- **Scale Factors**: Adjust arrive/leave scales to control curve tension. Higher values create smoother, wider curves; lower values create tighter curves.
- **Symmetry**: If arrive and leave scales are equal, tangents will be symmetric, creating balanced curves. Unequal scales can create asymmetric transitions.

## Behavior

```
Point sequence: P0 → P1 → P2 → P3

For P1:
  Apex = triangle(P0, P2, P1)

  Arrive tangent: Direction from P1 toward P0 (scaled by ArriveScale)
  Leave tangent: Direction from P1 toward P2 (scaled by LeaveScale)
```

#### Tangent Direction:
```
Points arranged as:
  P0 (prev) ← P1 (current) → P2 (next)

Arrive: P1 → P0 direction
  Points backward along the path
  Used for incoming curve smoothness

Leave: P1 → P2 direction
  Points forward along the path
  Used for outgoing curve smoothness
```

#### Scaling Effect:
```
ArriveScale = 1.0, LeaveScale = 1.0:
  Standard tangent lengths
  Balanced curvature

ArriveScale = 2.0, LeaveScale = 2.0:
  Longer tangents
  Smoother, wider curves

ArriveScale = 0.5, LeaveScale = 0.5:
  Shorter tangents
  Tighter, sharper curves
```

#### Apex Geometry:
```
The apex is the triangle formed by:
  - TowardStart: Vector from current to previous
  - TowardEnd: Vector from current to next
  - Vertex: Current point position

Arrive = TowardStart * ArriveScale
Leave = -TowardEnd * LeaveScale
```

Good for: smooth path curves, automatic spline generation, natural transitions, geometric tangents

## Settings

This factory has no configurable properties of its own. Tangent scaling is controlled by the parent node's **Scaling** settings (Arrive Scale and Leave Scale).

### Inherited Settings

The scaling parameters are defined in the parent context where this factory is used:

- **Arrive Scale Input**: Constant or Attribute source for arrive tangent scale
- **Arrive Scale**: Scale factor for arrive tangents (default: 1.0)
- **Leave Scale Input**: Constant or Attribute source for leave tangent scale
- **Leave Scale**: Scale factor for leave tangents (default: 1.0)

→ See [Write Tangents](../../elements/paths/write-tangents.md) for tangent scaling configuration.

## Practical Examples

**Smooth Path Curves:**
```
[Path Points]
  ↓
[Write Tangents] Tangents: Auto, Scales: 1.0
  ↓
[Points with geometric tangents for smooth spline conversion]
```

**Tight Corners:**
```
[Path Points]
  ↓
[Write Tangents] Tangents: Auto, Arrive Scale: 0.3, Leave Scale: 0.3
  ↓
[Points with short tangents for sharp turns]
```

**Asymmetric Transitions:**
```
[Path Points]
  ↓
[Write Tangents] Tangents: Auto, Arrive Scale: 2.0, Leave Scale: 0.5
  ↓
[Points with long incoming, short outgoing tangents]
```

---

📦 **Module**: `PCGExFoundations` · 📄 [Source](https://github.com/Nebukam/PCGExtendedToolkit/blob/main/Source/PCGExFoundations/Public/Tangents/PCGExTangentsAuto.h)

<!-- VERIFICATION REPORT
Factory Type: Instanced Factory (Tangent Calculation)
Base Class: UPCGExTangentsInstancedFactory
Own Properties: None (uses parent scaling configuration)
Inherited Settings: Arrive Scale, Leave Scale (from FPCGExTangentsScalingDetails)
Computation: Apex geometry from prev/current/next points
Tangent Direction: Arrive (toward prev), Leave (toward next)
Scaling: Applied via parent context
Neighbor Dependency: Requires valid prev/next points
Use Cases: Smooth path curves, automatic spline generation, geometric tangents
Related Factories: CatmullRom, FromNeighbors, FromTransform, Zero
-->
