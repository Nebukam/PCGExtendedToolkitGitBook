---
icon: sliders
---

# Interpolate

Blends sub-point attributes based on their position along the segment.

## Overview

Interpolate computes a blend weight for each sub-point based on where it falls between the segment's start and end points. Points near the start inherit more from the start point; points near the end inherit more from the end point.

This is the most common sub-point blending mode, producing smooth attribute transitions along subdivided paths.

## How It Works

For each sub-point:

1. **Calculate blend weight** based on the selected Blend Over mode
2. **Blend attributes** using that weight (0 = start, 1 = end)

The weight calculation depends on the **Blend Over** setting.

## Settings

<details>
<summary><strong>Blend Over</strong> <code>Distance | Count | Fixed</code></summary>

How to calculate the blend weight for each sub-point:

| Option | Behavior |
|--------|----------|
| **Distance** | Weight based on distance traveled along segment. A point 30% of the way along gets weight 0.3. |
| **Count** | Weight based on point index. Third of 10 sub-points gets weight 0.3. |
| **Fixed** | All sub-points use the same constant weight value. |

**Distance** is preferred when segment lengths vary, as it produces consistent interpolation regardless of point density.

**Count** is faster but can produce uneven results if point spacing varies.

**Fixed** is useful when you want all sub-points to have identical attribute values (e.g., midpoint values with Lerp = 0.5).

Default: `Distance`

</details>

<details>
<summary><strong>Lerp</strong> <code>double</code></summary>

The constant blend weight when Blend Over is set to **Fixed**.

- `0.0` = All sub-points get start point's attributes
- `0.5` = All sub-points get midpoint blend
- `1.0` = All sub-points get end point's attributes

Default: `0.5`

⚡ PCG Overridable

</details>

<details>
<summary><strong>Blending Details</strong></summary>

Controls which attributes participate in blending and how each is blended.

See: [Attribute Mapping](../../shared-concepts/attribute-mapping.md)

</details>

## Example

With **Blend Over = Distance** on a segment with color transitioning from red to blue:

```
Start (Red) ●────○────○────○────● End (Blue)
                 │    │    │
                 │    │    └─ 75% blue
                 │    └─ 50% blend (purple)
                 └─ 25% blue
```

## Use Cases

- **Smooth color gradients**: Interpolate color attributes along path
- **Gradual scale transitions**: Blend scale from start to end
- **Attribute fading**: Any attribute that should transition smoothly

---

📦 **Module**: `PCGExBlending` · 📄 [Source](https://github.com/Nebukam/PCGExtendedToolkit/blob/main/Source/PCGExBlending/Private/SubPoints/DataBlending/PCGExSubPointsBlendInterpolate.cpp)
