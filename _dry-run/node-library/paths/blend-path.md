---
icon: sliders
description: 'In editor :: PCGEx | Path : Blend'
---

# Blend Path

Interpolates point properties and attributes from the path's start to its end.

## Overview

Blend Path creates smooth gradients along a path by interpolating values between the first and last points. Use it to create gradual transitions—fading colors, scaling sizes, or transitioning any attribute from one value to another along the path's length.

## Settings

### Blend Over

<details>
<summary><strong>Blend Over</strong> <code>Distance | Index | Fixed</code></summary>

How to calculate the blend weight:

| Option | Behavior |
|--------|----------|
| **Distance** | Blend based on distance traveled along path |
| **Index** | Blend based on point index (0 to N-1) |
| **Fixed** | Use a constant or attribute-driven lerp value |

Default: `Distance`

⚡ PCG Overridable

</details>

### Fixed Lerp Settings (when Blend Over is Fixed)

<details>
<summary><strong>Lerp Input</strong> <code>Constant | Attribute</code></summary>

Where to read the fixed lerp value from.

Default: `Constant`

⚡ PCG Overridable

</details>

<details>
<summary><strong>Lerp</strong> <code>double</code></summary>

Fixed blend weight (0.0 = start values, 1.0 = end values).

Default: `0.5`

⚡ PCG Overridable

</details>

<details>
<summary><strong>Lerp (Attr)</strong> <code>Attribute Selector</code></summary>

Attribute containing per-point lerp values.

⚡ PCG Overridable

</details>

### Blending Settings

<details>
<summary><strong>Blending Settings</strong> <code>FPCGExBlendingDetails</code></summary>

Controls how different property types are blended between start and end points.

Default: Position uses `Lerp`, other properties use `None`

⚡ PCG Overridable

</details>

### Endpoint Handling

<details>
<summary><strong>Blend First Point</strong> <code>bool</code></summary>

Apply blending to the first point. Can be useful with some blend modes.

Default: Disabled

⚡ PCG Overridable

</details>

<details>
<summary><strong>Blend Last Point</strong> <code>bool</code></summary>

Apply blending to the last point. Can be useful with some blend modes.

Default: Disabled

⚡ PCG Overridable

</details>

## Inputs

| Pin | Type | Description |
|-----|------|-------------|
| **In** | Points | Path points to blend |
| **Blending** | Blend Ops | Attribute blending operations |

## Examples

**Scale gradient** (small at start, large at end):
- Blend Over: `Distance`
- Configure blending to lerp Scale

**Fixed 50% blend**:
- Blend Over: `Fixed`
- Lerp: `0.5`
- All points get halfway values between start and end

**Attribute-driven blend**:
- Blend Over: `Fixed`
- Lerp Input: `Attribute`
- Lerp (Attr): `$CustomAlpha`

## Use Cases

- **Gradient effects**: Color, scale, or opacity transitions
- **Tapering**: Paths that thin from start to end
- **Progressive effects**: Values that build up along the path
- **Smooth transitions**: Ease-in/ease-out property changes

## Related

### Path Blending
- [Attribute Rolling](./attribute-rolling.md) - Range-based value propagation
- [Properties](./properties.md) - Compute PointTime for distance-based blending

---

📦 **Module**: `PCGExElementsPaths` · 📄 [Source](https://github.com/Nebukam/PCGExtendedToolkit/blob/main/Source/PCGExElementsPaths/Private/Elements/PCGExBlendPath.cpp)
