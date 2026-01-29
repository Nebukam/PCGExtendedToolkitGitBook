---
icon: bezier-curve
---

# From Neighbors

Computes tangents by averaging the directions to adjacent points.

## Overview

From Neighbors calculates tangent direction by taking the average of two vectors: the direction from the current point toward the previous point (inverted), and the direction toward the next point. This produces a tangent that bisects the angle at each point.

## How It Works

For each interior point:

1. **Compute direction to previous** (inverted to point forward)
2. **Compute direction to next**
3. **Average the two directions** using lerp at 0.5
4. **Apply scaling** for arrive and leave

```
     Prev ●
           \
            \ Dir A (inverted)
             \
              ● Current
             /│\
            / │ \ Dir B
           /  │  \
     Next ●   │
              │
              ▼
         Averaged tangent
```

Both arrive and leave tangents use this same averaged direction.

## Endpoint Behavior

Uses the default endpoint handling: first point uses direction to second point; last point uses direction from second-to-last.

## Use Cases

- **Angle bisection**: Tangent splits the corner angle evenly
- **Symmetric smoothing**: Equal influence from both neighbors
- **General-purpose curves**: Good default for varied path shapes

## Compared To

- **Auto**: Uses apex geometry instead of simple averaging
- **Catmull-Rom**: Uses mathematical formula (Prev→Next) instead of averaging

---

📦 **Module**: `PCGExFoundations` · 📄 [Source](https://github.com/Nebukam/PCGExtendedToolkit/blob/main/Source/PCGExFoundations/Public/Tangents/PCGExTangentsFromNeighbors.h)
