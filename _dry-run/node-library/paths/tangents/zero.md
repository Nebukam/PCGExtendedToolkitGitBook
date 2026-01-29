---
icon: bezier-curve
---

# Zero

Produces zero-length tangent vectors for sharp corners.

## Overview

Zero sets both arrive and leave tangents to zero vectors. When used with splines, this creates sharp corners rather than smooth curves. The spline will make an abrupt direction change at points with zero tangents.

## How It Works

For every point (including endpoints):

1. **Set arrive tangent** to `(0, 0, 0)`
2. **Set leave tangent** to `(0, 0, 0)`

Scaling settings have no effect since the base vectors are zero.

## Use Cases

- **Sharp corners**: Force angular transitions in splines
- **Endpoint sharpness**: Use as Start/End Override for sharp path termination
- **Linear segments**: Zero tangents make spline segments behave like straight lines between points

## Common Pattern

Use Zero as an **endpoint override** with a smooth tangent operation for interior points:

```
Tangents: Auto
Start Override: Zero  ← Sharp start
End Override: Zero    ← Sharp end
```

This creates a path that starts and ends sharply but curves smoothly in between.

## Compared To

- Any other tangent operation produces non-zero tangents (curves)
- Zero is the only operation that guarantees sharp corners

---

📦 **Module**: `PCGExFoundations` · 📄 [Source](https://github.com/Nebukam/PCGExtendedToolkit/blob/main/Source/PCGExFoundations/Public/Tangents/PCGExTangentsZero.h)
