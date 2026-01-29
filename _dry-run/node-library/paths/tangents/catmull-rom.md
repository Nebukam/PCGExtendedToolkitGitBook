---
icon: bezier-curve
---

# Catmull-Rom

Computes tangents using the Catmull-Rom spline formula for smooth interpolation.

## Overview

Catmull-Rom calculates tangents by taking the vector from the previous point to the next point, scaled by 0.5. This is the classic Catmull-Rom spline tangent formula, which guarantees that a spline passing through the points will have C1 continuity (smooth first derivative).

## How It Works

For each interior point:

1. **Get previous and next positions**
2. **Compute direction** from previous to next: `(Next - Prev)`
3. **Scale by 0.5** to get the standard Catmull-Rom tangent
4. **Apply arrive/leave scaling**

```
     Prev ●─────────────────────● Next
                    │
                    │ Dir = (Next - Prev) * 0.5
                    ▼
              ●───────────●
              Arrive     Leave
              (same direction)
```

Both arrive and leave tangents point in the same direction (toward next, away from prev), creating smooth flow through the point.

## Endpoint Behavior

Uses the default endpoint handling: first point uses direction to second point; last point uses direction from second-to-last.

## Use Cases

- **Smooth splines**: Guaranteed mathematical smoothness
- **Animation paths**: Classic smooth interpolation for camera or object paths
- **Consistent curvature**: Predictable, even curves

## Compared To

- **Auto**: More adaptive to geometry but less mathematically smooth
- **From Neighbors**: Similar result but computed differently

## Technical Note

The Catmull-Rom tangent formula ensures that if you use these tangents with cubic Hermite interpolation, the resulting curve passes exactly through all control points with continuous velocity.

---

📦 **Module**: `PCGExFoundations` · 📄 [Source](https://github.com/Nebukam/PCGExtendedToolkit/blob/main/Source/PCGExFoundations/Public/Tangents/PCGExTangentsCatmullRom.h)
