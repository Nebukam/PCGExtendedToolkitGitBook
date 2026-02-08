---
icon: puzzle-piece
description: 'Zero - Sets tangents to zero vectors for linear interpolation between points.'
---

# Zero

Sets tangents to zero vectors for linear interpolation between points.

## Overview

This tangent factory produces zero-length tangents for all points, eliminating curve smoothing and resulting in straight line segments between control points. With no tangent influence, interpolation becomes purely linear, creating sharp corners at each point rather than smooth curves.

## How It Works

1. **Tangent Assignment**: Sets both arrive and leave tangents to (0, 0, 0)
2. **Output**: Returns zero vectors regardless of point position, rotation, or neighbors

#### Usage Notes

- **Linear Interpolation**: Zero tangents produce straight-line segments between points with no curve smoothing.
- **Sharp Corners**: All points become corner vertices rather than smooth curve points.
- **Performance**: Most efficient tangent calculation (no computation required).
- **Override Use**: Commonly used as Start/End Override to force linear entry/exit on paths with curved middle sections.

## Behavior

```
Point sequence: P0 → P1 → P2 → P3

For all points:
  Arrive tangent: (0, 0, 0)
  Leave tangent: (0, 0, 0)

Result: P0 ──→ P1 ──→ P2 ──→ P3 (straight segments)
```

#### Zero vs Non-Zero Tangents:
```
With Non-Zero Tangents (e.g., Auto):
  P0 ~~~~ P1 ~~~~ P2 ~~~~ P3
  (smooth curves)

With Zero Tangents:
  P0 ──── P1 ──── P2 ──── P3
  (straight lines)
```

#### Common Use Case - Linear Entry/Exit:
```
Path with curved middle, linear edges:

Tangents: Auto
Start Override: Zero
End Override: Zero

Result:
  P0 ──→ P1 ~~~~ P2 ~~~~ P3 ──→ P4
       linear  curved  curved  linear
```

#### Comparison with Other Methods:
```
Auto: Tangents point toward/away from neighbors
  → Curved interpolation

Catmull-Rom: Tangents based on neighbor spacing
  → Smooth spline interpolation

Zero: Tangents are (0, 0, 0)
  → Linear interpolation (no curves)
```

#### Scale Independence:
```
Even with scaling applied:
  Base tangent: (0, 0, 0)
  ArriveScale: 2.0
  LeaveScale: 2.0

  Result: (0, 0, 0) * 2.0 = (0, 0, 0)

Scaling has no effect on zero tangents.
```

Good for: linear interpolation, sharp corners, piecewise linear paths, no smoothing, linear overrides

## Settings

This factory has no configurable properties. It always produces zero-length tangents.

### Inherited Settings

Scaling parameters have no effect since tangents are always zero:

- **Arrive Scale**: Ignored (0 * scale = 0)
- **Leave Scale**: Ignored (0 * scale = 0)

→ See [Write Tangents](../../elements/paths/write-tangents.md) for tangent configuration context.

## Practical Examples

**Linear Path:**
```
[Path Points]
  ↓
[Write Tangents] Tangents: Zero
  ↓
[Straight line segments between all points]
```

**Linear Entry/Exit:**
```
[Path Points]
  ↓
[Write Tangents] Tangents: Auto, Start Override: Zero, End Override: Zero
  ↓
[Linear start → Curved middle → Linear end]
```

**Sharp Corners:**
```
[Corner Points]
  ↓
[Write Tangents] Tangents: Zero
  ↓
[Sharp angular path with no rounding]
```

---

📦 **Module**: `PCGExFoundations` · 📄 [Source](https://github.com/Nebukam/PCGExtendedToolkit/blob/main/Source/PCGExFoundations/Public/Tangents/PCGExTangentsZero.h)

<!-- VERIFICATION REPORT
Factory Type: Instanced Factory (Tangent Calculation)
Base Class: UPCGExTangentsInstancedFactory
Own Properties: None
Tangent Values: Always (0, 0, 0) for both arrive and leave
Result: Linear interpolation (no curves)
Characteristics: Sharp corners, straight segments, no smoothing
Performance: Most efficient (no computation)
Common Use: Linear overrides for path edges, piecewise linear paths
Scale Independence: Scaling has no effect on zero vectors
Related Factories: Auto, CatmullRom, FromNeighbors, FromTransform
-->
