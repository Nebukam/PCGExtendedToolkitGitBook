---
icon: arrows-alt-h
description: 'In editor :: PCGEx | Path : Slide'
---

# Slide

Moves points along the path toward the next or previous point.

## Overview

Slide repositions points along their path segments without changing the path shape. Points move toward their neighbors while staying on the line between them—useful for adjusting spacing, creating overlap, or preparing for operations that need specific point positions.

## How It Works

For each point:

1. **Determine slide direction** (toward next or previous point)
2. **Calculate slide distance** from settings or attribute
3. **Move point** along the segment by that distance
4. **Optionally store** original position for later restoration

## Settings

### Slide Amount

<details>
<summary><strong>Distance</strong> <code>double</code></summary>

How far to slide each point.

- Positive values slide toward next point
- Negative values slide toward previous point

Default: `10`

⚡ PCG Overridable

</details>

<details>
<summary><strong>Distance Mode</strong> <code>Absolute | Relative</code></summary>

How to interpret the distance:

| Option | Behavior |
|--------|----------|
| **Absolute** | World units |
| **Relative** | Fraction of segment length (0.0 - 1.0) |

Default: `Absolute`

</details>

<details>
<summary><strong>Distance Source</strong> <code>Constant | Attribute</code></summary>

Where to read slide distance:

| Option | Behavior |
|--------|----------|
| **Constant** | Use fixed Distance value |
| **Attribute** | Read per-point distance from attribute |

Default: `Constant`

</details>

### Position Storage

<details>
<summary><strong>Store Original Position</strong> <code>bool</code></summary>

Write the original (pre-slide) position to an attribute. Useful if you need to restore or reference original positions later.

Default: Disabled

</details>

<details>
<summary><strong>Original Position Attribute</strong> <code>Attribute Name</code></summary>

Name of attribute for original positions.

Default: `OriginalPosition`

</details>

### Clamping

<details>
<summary><strong>Clamp to Segment</strong> <code>bool</code></summary>

Prevent points from sliding past their segment endpoints.

Default: Enabled

</details>

## Examples

**Small slide toward next point**:
- Distance: `20`
- Direction: Positive (toward next)

**Relative slide** (25% along each segment):
- Distance: `0.25`
- Distance Mode: `Relative`

**Variable slide by attribute**:
- Distance Source: `Attribute`
- Distance Attribute: `SlideAmount`

**Store originals for later**:
- Store Original Position: Enabled
- Can use stored positions for effects or restoration

## Use Cases

- **Spacing adjustment**: Fine-tune point positions along path
- **Overlap creation**: Slide points to create segment overlap
- **Animation prep**: Offset points for movement effects
- **Corner adjustment**: Move points before/after bevel operations

## Related

### Path Transformation
- [Shift](./shift.md) - Rotate point indices (circular)
- [Shrink](./shrink.md) - Remove points from ends
- [Offset](./offset.md) - Move perpendicular to path

---

📦 **Module**: `PCGExElementsPaths` · 📄 [Source](https://github.com/Nebukam/PCGExtendedToolkit/blob/main/Source/PCGExElementsPaths/Private/Elements/PCGExSlidePath.cpp)
