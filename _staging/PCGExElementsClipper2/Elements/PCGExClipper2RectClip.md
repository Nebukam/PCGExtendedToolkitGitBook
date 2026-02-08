---
icon: crop
description: 'Clipper2 : Rect Clip - Fast axis-aligned rectangle clipping'
---

# Clipper2 : Rect Clip

Fast rectangle clipping using optimized Clipper2 algorithm.

## Overview

This node clips paths against an axis-aligned bounding box using Clipper2's optimized rectangle clipping algorithm. It is significantly faster than using boolean intersection with a rectangle shape. The clipping bounds can be derived from operand data bounds or specified manually, with optional padding adjustments.

## How It Works

1. **Determine Clip Rectangle**: Computes the clipping rectangle from either operand bounds or manual specification.
2. **Apply Padding**: Optionally expands or contracts the rectangle by the padding amount.
3. **Project to 2D**: Input paths are projected onto a 2D plane (only X and Y are used after projection).
4. **Clip Paths**: Uses Clipper2's RectClip64 algorithm for polygons or RectClipLines64 for open paths.
5. **Unproject Results**: Clipped paths are transformed back to 3D space with interpolated attributes.

#### Usage Notes

- **AABB Only**: This node works exclusively with axis-aligned bounding boxes. For arbitrary polygon clipping, use the Boolean node with Intersection operation.
- **Performance**: RectClip is optimized specifically for rectangle clipping and is much faster than general boolean operations for this use case.
- **Invert Clip**: When inverted, the operation keeps portions of paths outside the rectangle (using boolean difference internally).
- **Open Paths as Lines**: When enabled, open paths are clipped as line segments, preserving their open state. When disabled, they're treated as closed polygons.

## Behavior

```
Rect Clip Operation:

Input Path        Clip Rectangle     Result
    ╭───╮            ┌─────┐          ┌─╮
   ╱     ╲           │     │          │ │
  ╱   ╳   ╲    +     │     │    =     │╳│
  ╲       ╱          │     │          │ │
   ╲     ╱           └─────┘          └─╯
    ╰───╯

Inverted Clip:
    ╭───╮            ┌─────┐        ╭─┐   ┌─╮
   ╱     ╲           │     │       ╱  │   │  ╲
  ╱   ╳   ╲    +     │     │  =   ╱   │   │   ╲
  ╲       ╱          │     │      ╲   │   │   ╱
   ╲     ╱           └─────┘       ╲ ─┘   └─ ╱
    ╰───╯                           ╰─╯   ╰─╯
```

## Inputs

| Pin | Type | Description |
|-----|------|-------------|
| **In** | Paths | Input paths to clip |
| **Operands** | Spatial Data | Data whose bounds define the clip rectangle (when using Operand Bounds) |

## Settings

### Node-Specific Settings

<details>
<summary><strong>Projection Details</strong> <code>FPCGExGeo2DProjectionDetails</code></summary>

Controls how 3D paths are projected to 2D for clipping. Note that only X and Y coordinates are used after projection.

//→ See TODO FPCGExGeo2DProjectionDetails

</details>

### Clip Bounds Settings

<details>
<summary><strong>Bounds Source</strong> <code>EPCGExRectClipBoundsSource</code></summary>

Determines where the clipping rectangle bounds come from.

| Option | Description |
|--------|-------------|
| **Operand Bounds** | Uses the combined bounding box of all operand spatial data in the group |
| **Manual** | Uses manually specified rectangle bounds |

Default: `Operand Bounds`

⚡ PCG Overridable

</details>

<details>
<summary><strong>Manual Bounds</strong> <code>FBox</code></summary>

The clipping rectangle bounds in world space. Only X and Y dimensions are used after projection to 2D.

Default: `(-100, -100, -100)` to `(100, 100, 100)`

📋 *Visible when Bounds Source = Manual*

⚡ PCG Overridable

</details>

<details>
<summary><strong>Bounds Padding</strong> <code>double</code></summary>

Uniform padding to apply to the clipping bounds. Positive values expand the rectangle, negative values shrink it.

Default: `0.0`

⚡ PCG Overridable

</details>

<details>
<summary><strong>Bounds Padding Scale</strong> <code>FVector2D</code></summary>

Per-axis multipliers for the padding. Allows non-uniform padding by scaling the X and Y padding independently.

Default: `(1.0, 1.0)`

⚡ PCG Overridable

</details>

### Tweaks Settings

<details>
<summary><strong>Clip Open Paths As Lines</strong> <code>bool</code></summary>

When enabled, open paths are clipped using line-segment clipping, preserving their open state. When disabled, open paths are treated as closed polygons for clipping purposes.

Default: `true`

📋 *Visible when Skip Open Paths is disabled*

⚡ PCG Overridable

</details>

<details>
<summary><strong>Clip As Lines</strong> <code>bool</code></summary>

When enabled, clips closed paths as line segments instead of polygons. The output will be open paths representing the portions of the original path edges that fall within the rectangle.

Default: `false`

📋 *Visible when Invert Clip is disabled*

⚡ PCG Overridable

</details>

<details>
<summary><strong>Invert Clip</strong> <code>bool</code></summary>

When enabled, inverts the clipping operation to keep portions of paths outside the rectangle. Internally uses boolean difference with the rectangle.

Default: `false`

⚡ PCG Overridable

</details>

### Inherited Settings

This node inherits common Clipper2 processing settings from its base class.

→ See [Clipper2 Processor Settings](../Core/PCGExClipper2Processor.md) for: Precision, Simplify Paths, Preserve Collinear, Arc Tolerance, Carry Over Details, Blending Details, Open Paths Output, Data Matching, and other shared settings.

## Outputs

| Pin | Type | Description |
|-----|------|-------------|
| **Out** | Paths | Clipped paths within (or outside, if inverted) the rectangle |
| **Open Paths** | Paths | Open paths (when Output Pin mode is selected) |

---

📦 **Module**: `PCGExElementsClipper2` · 📄 [Source](https://github.com/Nebukam/PCGExtendedToolkit/blob/main/Source/PCGExElementsClipper2/Public/Elements/PCGExClipper2RectClip.h)

<!-- VERIFICATION REPORT
Node-Specific Properties: 8 documented (ProjectionDetails, BoundsSource, ManualBounds, BoundsPadding, BoundsPaddingScale, bClipOpenPathsAsLines, bClipAsLines, bInvertClip)
Inherited Properties: Referenced to UPCGExClipper2ProcessorSettings
Inputs: In (Paths), Operands (Spatial Data)
Outputs: Out (Paths), Open Paths (Paths - conditional)
Nested Types: FPCGExGeo2DProjectionDetails, EPCGExRectClipBoundsSource
-->
