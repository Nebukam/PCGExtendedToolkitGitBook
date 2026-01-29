---
icon: grip-lines-vertical
description: 'In editor :: PCGEx | Path : Fuse Collinear'
---

# Fuse Collinear

Merges points that lie on straight line segments.

## Overview

Fuse Collinear removes redundant points from straight sections of a path. When multiple consecutive points lie on (or near) a straight line, only the endpoints of that line are kept—the intermediate points are removed. This is different from Reduce, which uses tangent analysis; Fuse Collinear strictly tests for collinearity.

## How It Works

For sequences of consecutive points:

1. **Test collinearity** of each point with its neighbors
2. **Mark collinear points** for removal
3. **Keep segment endpoints** (start/end of straight sections)
4. **Optionally blend** attributes from removed points

## Settings

### Collinearity Detection

<details>
<summary><strong>Threshold</strong> <code>double</code></summary>

Maximum perpendicular distance from the line for a point to be considered collinear. Points farther than this from the line connecting their neighbors are kept.

Default: `0.1`

⚡ PCG Overridable

</details>

### Attribute Handling

<details>
<summary><strong>Blend Fused Points</strong> <code>bool</code></summary>

When removing collinear points, blend their attribute values into the remaining endpoints.

Default: Disabled

</details>

<details>
<summary><strong>Blending</strong> <code>Blending Settings</code></summary>

How to blend attributes when Blend Fused Points is enabled.

</details>

### Endpoints

<details>
<summary><strong>Preserve Path Endpoints</strong> <code>bool</code></summary>

Never remove the first and last points of the path, regardless of collinearity.

Default: Enabled

</details>

## Examples

**Strict collinearity** (nearly perfect lines only):
- Threshold: `0.01`
- Only points very close to the line are removed

**Lenient collinearity** (approximate lines):
- Threshold: `5.0`
- Points within 5 units of the line are removed

**Preserve attribute averages**:
- Blend Fused Points: Enabled
- Removed point values contribute to remaining points

## Before / After

```
Before:  ●─●─●─●─●─●─●          ●
         (many points on line)  │
                                ●
                                │
                                ●

After:   ●─────────────●        ●
         (just endpoints)       │
                                ●
                                │
                                ●
         (straight sections simplified, corners preserved)
```

## Fuse Collinear vs Reduce

| Fuse Collinear | Reduce |
|----------------|--------|
| Tests geometric collinearity | Analyzes tangent deviation |
| Removes points on exact lines | Considers curve flow |
| Strict distance threshold | Flexible tolerance |
| Best for CAD-like cleanup | Best for general simplification |

## Use Cases

- **Clean imported data**: Remove redundant points from CAD imports
- **Post-subdivision cleanup**: Remove unnecessary midpoints
- **Optimize straight sections**: Keep only essential points on lines
- **Pre-processing**: Prepare paths for operations that don't need collinear density

## Related

### Path Shaping
- [Reduce](./reduce.md) - Tangent-based simplification
- [Resample](./resample.md) - Replace with uniform density

---

📦 **Module**: `PCGExElementsPaths` · 📄 [Source](https://github.com/Nebukam/PCGExtendedToolkit/blob/main/Source/PCGExElementsPaths/Private/Elements/PCGExFuseCollinear.cpp)
