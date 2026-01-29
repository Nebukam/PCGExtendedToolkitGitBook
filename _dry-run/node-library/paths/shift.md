---
icon: sync-alt
description: 'In editor :: PCGEx | Path : Shift'
---

# Shift

Circularly rotates point indices within a path.

## Overview

Shift changes which point is considered the "first" point by rotating the point order. The path's shape remains identical, but the starting point changes. For closed loops, this effectively rotates where the loop begins; for open paths, it moves points from one end to the other.

## How It Works

1. **Calculate shift amount** in points or distance
2. **Rotate point indices** by that amount
3. **Optionally shift attributes/properties** along with indices

## Settings

### Shift Amount

<details>
<summary><strong>Shift</strong> <code>int32</code></summary>

Number of positions to shift. Positive values shift forward (first points move to end), negative values shift backward.

Default: `1`

⚡ PCG Overridable

</details>

<details>
<summary><strong>Shift Mode</strong> <code>Count | Relative | Discrete</code></summary>

How to interpret the shift amount:

| Option | Behavior |
|--------|----------|
| **Count** | Exact number of points to shift |
| **Relative** | Fraction of total points (0.0 - 1.0) |
| **Discrete** | Distance-based shift (shifts to nearest point at distance) |

Default: `Count`

</details>

### What to Shift

<details>
<summary><strong>Shift Positions</strong> <code>bool</code></summary>

Rotate point positions along with indices.

Default: Enabled

</details>

<details>
<summary><strong>Shift Attributes</strong> <code>bool</code></summary>

Rotate attribute values along with indices.

Default: Enabled

</details>

<details>
<summary><strong>Shift Properties</strong> <code>bool</code></summary>

Rotate transform properties (rotation, scale) along with indices.

Default: Enabled

</details>

## Examples

**Shift by 5 points**:
- Shift: `5`
- Shift Mode: `Count`
- Points 0-4 move to the end

**Shift to midpoint** (50%):
- Shift: `0.5`
- Shift Mode: `Relative`
- Halfway through the path becomes the new start

**Shift positions only** (attributes stay fixed):
- Shift Positions: Enabled
- Shift Attributes: Disabled
- Useful for certain animation effects

## Visual Example

```
Before:  [0]─1─2─3─4─5     (point 0 is first)

Shift by 2:

After:   2─3─4─5─[0]─1     (point 2 is now first)
         (for closed loop, same shape, different start)
```

## Use Cases

- **Loop start adjustment**: Change where a closed loop begins
- **Alignment**: Align path start with a specific feature
- **Animation timing**: Change which point leads during playback
- **Matching paths**: Align multiple paths to start at corresponding positions

## Shift vs Reverse

| Shift | Reverse |
|-------|---------|
| Rotates order circularly | Flips order completely |
| Path direction unchanged | Path direction reversed |
| Good for closed loops | Good for direction correction |

## Related

### Path Transformation
- [Reverse Order](./reverse-order.md) - Flip path direction
- [Slide](./slide.md) - Move points along segments

---

📦 **Module**: `PCGExElementsPaths` · 📄 [Source](https://github.com/Nebukam/PCGExtendedToolkit/blob/main/Source/PCGExElementsPaths/Private/Elements/PCGExShiftPath.cpp)
