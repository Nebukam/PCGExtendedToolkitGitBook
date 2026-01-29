---
icon: sliders
---

# Sub-Point Blending

Sub-point blending operations control how attributes are interpolated for newly created points along a path segment. When operations like [Subdivide](../subdivide.md) insert points between existing path points, these operations determine what attribute values the new points receive.

## How It Works

When a path segment is subdivided, new "sub-points" are created between two existing points (the **start** and **end** of the segment). Each sub-point needs attribute values, and sub-point blending determines how those values are computed:

```
Start ●────○────○────○────● End
      │    │    │    │    │
      │    └────┴────┘    │
      │     Sub-points    │
      │                   │
      └─── Blending ──────┘
```

The blending operation receives:
- The start point's attributes
- The end point's attributes
- A weight value (0.0 = start, 1.0 = end)

How that weight is calculated depends on the **Blend Over** mode (for Interpolate) or is fixed (for Inherit operations).

## Available Operations

| Operation | Behavior |
|-----------|----------|
| [Interpolate](./interpolate.md) | Blend attributes based on position along segment |
| [Inherit First](./inherit-first.md) | All sub-points copy attributes from segment start |
| [Inherit Last](./inherit-last.md) | All sub-points copy attributes from segment end |
| [No Blending](./none.md) | Sub-points keep default/uninitialized attributes |

## Common Settings

All sub-point blending operations share the **Blending Details** configuration, which controls how individual attributes are blended:

<details>
<summary><strong>Blending Details</strong></summary>

Controls which attributes participate in blending and how each is blended.

See: [Attribute Mapping](../../shared-concepts/attribute-mapping.md) for blending configuration options.

</details>

## Nodes That Use Sub-Point Blending

- [Subdivide](../subdivide.md) - Insert points along path segments

---

📦 **Module**: `PCGExBlending` · 📄 [Source](https://github.com/Nebukam/PCGExtendedToolkit/blob/main/Source/PCGExBlending/Public/SubPoints/DataBlending/)
