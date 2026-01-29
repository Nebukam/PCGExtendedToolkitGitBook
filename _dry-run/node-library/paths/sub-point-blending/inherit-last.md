---
icon: sliders
---

# Inherit Last

All sub-points copy attributes from the segment's end point.

## Overview

Inherit Last applies a constant blend weight of 1 to all sub-points, meaning every new point receives the exact attributes of the segment's end point. This is the opposite of Inherit First—useful when you want subdivided points to anticipate where the segment is heading.

## How It Works

For each sub-point:

1. **Use blend weight 1** (constant)
2. **Copy attributes** from the end point

```
Start ●────○────○────○────● End
  A   │    B    B    B    │  B
      │                   │
      └─ All inherit B ───┘
```

## Settings

<details>
<summary><strong>Blending Details</strong></summary>

Controls which attributes participate in blending. Even with Inherit Last, the blending configuration determines which attributes are copied.

See: [Attribute Mapping](../../shared-concepts/attribute-mapping.md)

</details>

## Use Cases

- **Destination tagging**: All points on a segment carry the destination's attributes
- **Backward propagation**: Attributes flow from path end toward start
- **Lookahead data**: Subdivided points know what's coming next

## Related

- [Inherit First](./inherit-first.md) - Opposite behavior (copy from start)
- [Interpolate](./interpolate.md) - Gradual blending between endpoints

---

📦 **Module**: `PCGExBlending` · 📄 [Source](https://github.com/Nebukam/PCGExtendedToolkit/blob/main/Source/PCGExBlending/Private/SubPoints/DataBlending/PCGExSubPointsBlendInheritEnd.cpp)
