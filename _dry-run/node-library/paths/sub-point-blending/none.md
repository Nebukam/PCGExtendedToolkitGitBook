---
icon: sliders
---

# No Blending

Sub-points receive no blended attributes—only their interpolated positions.

## Overview

No Blending skips the attribute blending step entirely. Sub-points are created with interpolated positions along the segment, but their attributes are not populated from the segment endpoints. This is the fastest option when you don't need attribute continuity.

## How It Works

For each sub-point:

1. **Position is interpolated** along the segment (this always happens)
2. **Attributes are not blended** (skipped entirely)

Sub-points will have default/uninitialized values for attributes, or whatever values were set by prior operations.

## Settings

No additional settings. The Blending Details are ignored since no blending occurs.

## Use Cases

- **Performance**: Skip unnecessary blending when attributes don't matter
- **Position-only subdivision**: You only need denser geometry, not attribute data
- **Custom attribute assignment**: You'll set attributes via a separate operation afterward

## Related

- [Interpolate](./interpolate.md) - When you need smooth attribute transitions
- [Inherit First](./inherit-first.md) / [Inherit Last](./inherit-last.md) - When you need uniform attributes

---

📦 **Module**: `PCGExBlending` · 📄 [Source](https://github.com/Nebukam/PCGExtendedToolkit/blob/main/Source/PCGExBlending/Private/SubPoints/DataBlending/PCGExSubPointsBlendNone.cpp)
