---
icon: sliders
---

# Inherit First

All sub-points copy attributes from the segment's start point.

## Overview

Inherit First applies a constant blend weight of 0 to all sub-points, meaning every new point receives the exact attributes of the segment's start point. This is useful when you want subdivided points to maintain consistency with where the segment begins.

## How It Works

For each sub-point:

1. **Use blend weight 0** (constant)
2. **Copy attributes** from the start point

```
Start ●────○────○────○────● End
  A   │    A    A    A    │  B
      │                   │
      └─ All inherit A ───┘
```

## Settings

<details>
<summary><strong>Blending Details</strong></summary>

Controls which attributes participate in blending. Even with Inherit First, the blending configuration determines which attributes are copied.

See: [Attribute Mapping](../../shared-concepts/attribute-mapping.md)

</details>

## Use Cases

- **Consistent segment identity**: All points on a segment share the start point's ID or tag
- **Forward propagation**: Attributes flow from path start toward end
- **Zone boundaries**: Subdivided points belong to the zone of the segment's origin

## Related

- [Inherit Last](./inherit-last.md) - Opposite behavior (copy from end)
- [Interpolate](./interpolate.md) - Gradual blending between endpoints

---

📦 **Module**: `PCGExBlending` · 📄 [Source](https://github.com/Nebukam/PCGExtendedToolkit/blob/main/Source/PCGExBlending/Private/SubPoints/DataBlending/PCGExSubPointsBlendInheritStart.cpp)
