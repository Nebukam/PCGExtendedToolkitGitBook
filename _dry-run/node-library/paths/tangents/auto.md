---
icon: bezier-curve
---

# Auto

Computes tangents from the geometric apex formed by neighboring points.

## Overview

Auto calculates tangent directions by analyzing the apex angle at each point—the angle formed between the previous point, current point, and next point. The arrive tangent points toward the previous point; the leave tangent points toward the next point. This produces tangents that naturally follow the path geometry.

## How It Works

For each interior point:

1. **Build apex geometry** from previous, current, and next points
2. **Compute arrive direction** toward previous point
3. **Compute leave direction** toward next point
4. **Apply scaling** to both vectors

```
     Prev ●
           \
            \ ← Arrive
             \
              ●──────→ Leave
             /   Current
            /
           /
     Next ●
```

The tangent lengths are based on the actual distances to neighbors, scaled by the Arrive/Leave Scale settings.

## Endpoint Behavior

For the **first point**: Uses the direction toward the second point for both tangents.

For the **last point**: Uses the direction from the second-to-last point for both tangents.

## Use Cases

- **General-purpose tangents**: Works well for most path shapes
- **Geometry-following curves**: Tangents respect the actual path layout
- **Variable curvature**: Naturally adapts to tight and gentle turns

## Compared To

- **Catmull-Rom**: More mathematically smooth but less adaptive to geometry
- **From Neighbors**: Similar concept but uses averaged direction instead of apex geometry

---

📦 **Module**: `PCGExFoundations` · 📄 [Source](https://github.com/Nebukam/PCGExtendedToolkit/blob/main/Source/PCGExFoundations/Public/Tangents/PCGExTangentsAuto.h)
