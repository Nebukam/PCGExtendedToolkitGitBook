---
icon: route
description: 'Path : Shift - Shift path points in a circular rotation.'
---

# Path : Shift

Shift path points.

## Overview

This node performs a circular shift of path point data, rotating the sequence so a different point becomes the starting point. You can shift just the indices, just the attributes, just the properties, or any combination. This is useful for reordering closed loops or adjusting where a path "begins."

## How It Works

1. **Determine Pivot**: Calculate the shift amount based on the selected input mode (discrete count, relative fraction, or filter match).
2. **Select What to Shift**: Based on shift type, prepare to shift indices, metadata, properties, or specific cherry-picked items.
3. **Apply Shift**: Rotate the selected data circularly by the computed amount.
4. **Handle Boundaries**: Apply index safety rules for out-of-range indices.

#### Usage Notes

- **Circular Rotation**: Shifting moves points from the end to the beginning (or vice versa). A shift of 2 on path [A,B,C,D,E] produces [C,D,E,A,B].
- **Index vs Data Shift**: "Index" shifts which physical point is at each position. "Metadata/Properties" keeps points in place but shifts their attribute values.
- **Filter Mode**: Useful for making a specific point (the first one matching the filter) become the new path start.
- **Closed Loops**: Particularly useful for closed loops where you want to control the seam point.

## Behavior

```
Shift by 2 positions (forward):

Original:   [A]──[B]──[C]──[D]──[E]
             0    1    2    3    4

After:      [C]──[D]──[E]──[A]──[B]
             0    1    2    3    4

Relative shift (0.5 on 5 points = index 2):
Same result as discrete shift of 2.
```

## Inputs

| Pin | Type | Description |
|-----|------|-------------|
| **In** | Points | Path points to shift |
| **Shift Filters** | Filter Factories | Filters to find the shift pivot point |

## Settings

### Node-Specific Settings

<details>
<summary><strong>Shift Type</strong> <code>EPCGExShiftType</code></summary>

What data gets shifted.

| Option | Description |
|--------|-------------|
| **Index** | Shift the actual point order (reorder points). |
| **Metadata** | Keep points in place but shift attribute values between them. |
| **Properties** | Keep points in place but shift native properties (position, rotation, scale). |
| **Metadata and Properties** | Shift both attributes and properties. |
| **Cherry Pick** | Select specific properties and attributes to shift. |

Default: `Metadata and Properties`

⚡ PCG Overridable

</details>

<details>
<summary><strong>Input Mode</strong> <code>EPCGExShiftPathMode</code></summary>

How the shift amount is determined.

| Option | Description |
|--------|-------------|
| **Discrete** | Shift by a fixed number of positions. |
| **Relative** | Shift by a fraction of path length (0.5 = halfway). |
| **Filter** | Find the first point matching filters and shift to make it the start. |

Default: `Relative`

⚡ PCG Overridable

</details>

<details>
<summary><strong>Relative Constant</strong> <code>double</code></summary>

Shift amount as a fraction of path length.

- `0.0` - No shift
- `0.5` - Shift to midpoint
- `1.0` - Full rotation (back to original)

Default: `0.5`

📋 *Visible when Input Mode = Relative*

⚡ PCG Overridable

</details>

<details>
<summary><strong>Truncate</strong> <code>EPCGExTruncateMode</code></summary>

How to convert the relative value to a discrete index when it falls between points.

| Option | Description |
|--------|-------------|
| **None** | No truncation. |
| **Round** | Round to nearest index. |
| **Ceil** | Round up. |
| **Floor** | Round down. |

Default: `Round`

📋 *Visible when Input Mode = Relative*

⚡ PCG Overridable

</details>

<details>
<summary><strong>Discrete Constant</strong> <code>int32</code></summary>

Number of positions to shift by. Positive values shift forward, negative values shift backward.

Default: `0`

📋 *Visible when Input Mode = Discrete*

⚡ PCG Overridable

</details>

<details>
<summary><strong>Index Safety</strong> <code>EPCGExIndexSafety</code></summary>

How to handle indices that go out of range after shifting.

| Option | Description |
|--------|-------------|
| **Ignore** | Invalid indices produce undefined behavior. |
| **Tile** | Wrap around (modulo). Index 7 on a 5-point path becomes index 2. |
| **Clamp** | Clamp to valid range. Index 7 becomes index 4 (last). |
| **Yoyo** | Bounce back at boundaries (like a yoyo pattern). |

Default: `Tile`

📋 *Visible when Input Mode ≠ Filter*

⚡ PCG Overridable

</details>

<details>
<summary><strong>Reverse Shift</strong> <code>bool</code></summary>

Reverse the shift direction. When enabled, shifts in the opposite direction.

Default: `false`

⚡ PCG Overridable

</details>

---

### Cherry Pick Settings

<details>
<summary><strong>Cherry Picked Properties</strong> <code>bitmask</code></summary>

When Shift Type is CherryPick, select which native point properties to shift (position, rotation, scale, etc.).

📋 *Visible when Shift Type = CherryPick*

</details>

<details>
<summary><strong>Cherry Picked Attributes</strong> <code>TArray&lt;FName&gt;</code></summary>

When Shift Type is CherryPick, list the specific attribute names to shift.

📋 *Visible when Shift Type = CherryPick*

</details>

---

### Warnings

<details>
<summary><strong>Quiet Double Shift Warning</strong> <code>bool</code></summary>

Suppress the warning when path data has already been shifted by a previous node. Enable this if you intentionally want to shift multiple times.

Default: `false`

</details>

### Inherited Settings

This node inherits path processing settings from its base class.

→ See [Path Processor Settings](../Core/PCGExPathProcessor.md) for: Path handling options.

---

[![Static Badge](https://img.shields.io/badge/Source-PCGExElementsPaths-473F69)](https://github.com/Nebukam/PCGExtendedToolkit/blob/main/Source/PCGExElementsPaths/Public/Elements/PCGExPathShift.h)

<!-- SOURCE: https://github.com/Nebukam/PCGExtendedToolkit/blob/main/Source/PCGExElementsPaths/Public/Elements/PCGExPathShift.h -->

<!-- VERIFICATION REPORT
Node-Specific Properties: 10 documented (ShiftType, InputMode, RelativeConstant, Truncate, DiscreteConstant, IndexSafety, bReverseShift, CherryPickedProperties, CherryPickedAttributes, bQuietDoubleShiftWarning)
Inherited Properties: Referenced to UPCGExPathProcessorSettings
Inputs: Points, Shift Filters (Filter Factories)
Outputs: Points (inherited)
Nested Types: EPCGExShiftType, EPCGExShiftPathMode, EPCGExTruncateMode, EPCGExIndexSafety
-->
