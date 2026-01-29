---
icon: grip-lines
description: 'In editor :: PCGEx | Path : Subdivide'
---

# Subdivide

Adds points between existing points along the path.

## Overview

Subdivision increases path density by inserting new points along each segment. This is useful when you need finer control over path geometry—more points mean smoother curves after smoothing, more precise placement for instancing, or better resolution for deformation.

## How It Works

For each segment (pair of consecutive points):

1. **Determine subdivision count** based on distance or fixed count
2. **Interpolate positions** along the segment
3. **Blend attributes** from the segment's endpoints
4. **Insert new points** into the path

## Settings

### Subdivision Mode

<details>
<summary><strong>Mode</strong> <code>Distance | Count</code></summary>

How to determine the number of subdivisions:

| Option | Behavior |
|--------|----------|
| **Distance** | Insert points every N units along the segment |
| **Count** | Insert exactly N points per segment |

Default: `Distance`

</details>

<details>
<summary><strong>Distance</strong> <code>double</code></summary>

Target spacing between points (when Mode is Distance). Actual spacing may vary slightly to fit segments evenly.

Default: `100`

⚡ PCG Overridable

</details>

<details>
<summary><strong>Count</strong> <code>int32</code></summary>

Number of points to insert per segment (when Mode is Count).

Default: `1`

⚡ PCG Overridable

</details>

### Attribute Handling

<details>
<summary><strong>Blending</strong> <code>Sub-Point Blending Operation</code></summary>

How to interpolate attributes for new points. New points receive blended values from the two endpoints of their segment.

Available operations:
- [Interpolate](./sub-point-blending/interpolate.md) - Blend based on position along segment (default)
- [Inherit First](./sub-point-blending/inherit-first.md) - Copy from segment start
- [Inherit Last](./sub-point-blending/inherit-last.md) - Copy from segment end
- [No Blending](./sub-point-blending/none.md) - Skip attribute blending

See [Sub-Point Blending](./sub-point-blending/) for details.

</details>

### Behavior

<details>
<summary><strong>Flag Subdivisions</strong> <code>bool</code></summary>

Write a boolean attribute marking which points were created by subdivision (vs original points).

Default: Disabled

</details>

<details>
<summary><strong>Subdivision Attribute</strong> <code>Attribute Name</code></summary>

Name of the boolean attribute to write when Flag Subdivisions is enabled.

Default: `IsSubdivision`

</details>

## Examples

**Uniform high density**:
- Mode: `Distance`
- Distance: `50` (point every 50 units)

**Fixed segments per edge**:
- Mode: `Count`
- Count: `3` (triple the point count)

**Mark original vs new points**:
- Flag Subdivisions: Enabled
- Subdivision Attribute: `WasSubdivided`

## Before / After

```
Before:  ●─────────────────●─────────────────●
         A                 B                 C

After:   ●────●────●────●────●────●────●────●
         A    .    .    B    .    .    .    C
         (. = interpolated points)
```

## Use Cases

- **Pre-smoothing**: Add points before smoothing for finer curves
- **Instance spacing**: Ensure minimum density for spawning objects
- **Deformation prep**: More points = smoother bends when deforming

## Related

### Often Used Together
- [Smooth](./smooth.md) - Apply after subdivision for smoother curves
- [Resample](./resample.md) - Alternative: uniform spacing in one step

### Path Shaping
- [Reduce](./reduce.md) - Opposite operation: remove points
- [Fuse Collinear](./fuse-collinear.md) - Remove unnecessary points

---

📦 **Module**: `PCGExElementsPaths` · 📄 [Source](https://github.com/Nebukam/PCGExtendedToolkit/blob/main/Source/PCGExElementsPaths/Private/Elements/PCGExSubdividePath.cpp)
