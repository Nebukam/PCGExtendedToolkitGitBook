---
icon: arrow-right-arrow-left
description: 'In editor :: PCGEx | Path : Shift'
---

# Shift

Shifts (rotates) path points by reordering their indices, metadata, or properties.

## How It Works

1. Determine the **pivot index** (where the shift starts)
2. **Rotate** point data so the pivot becomes the new first point
3. Maintain path connectivity while changing order

## Inputs

| Pin | Type | Description |
|-----|------|-------------|
| **In** | Points | Path points to shift |
| **Shift Filters** | Filters | Optional filters to find pivot (when Input Mode = Filter) |

## Settings

<details>
<summary><strong>Shift Type</strong> <code>EPCGExShiftType</code></summary>

What data is shifted along with the points.

| Option | Description |
|--------|-------------|
| Index | Shift point order only |
| Metadata | Shift metadata/attributes |
| Properties | Shift point properties (transform, etc.) |
| Metadata and Properties | Shift both |
| CherryPick | Select specific properties/attributes to shift |

Default: `Metadata and Properties`

⚡ PCG Overridable

</details>

<details>
<summary><strong>Input Mode</strong> <code>EPCGExShiftPathMode</code></summary>

How the shift amount is determined.

| Option | Description |
|--------|-------------|
| Discrete | Shift by a fixed number of indices |
| Relative | Shift by a fraction of path length (0-1) |
| Filter | Use the first point passing filters as pivot |

Default: `Relative`

⚡ PCG Overridable

</details>

<details>
<summary><strong>Relative Constant</strong> <code>double</code></summary>

Relative shift amount as a fraction of path length.

Default: `0.5`

*Visible when Input Mode = Relative*

⚡ PCG Overridable

</details>

<details>
<summary><strong>Truncate</strong> <code>EPCGExTruncateMode</code></summary>

How to round the computed index from relative mode.

Default: `Round`

*Visible when Input Mode = Relative*

⚡ PCG Overridable

</details>

<details>
<summary><strong>Discrete Constant</strong> <code>int32</code></summary>

Number of positions to shift by.

Default: `0`

*Visible when Input Mode = Discrete*

⚡ PCG Overridable

</details>

<details>
<summary><strong>Index Safety</strong> <code>EPCGExIndexSafety</code></summary>

How to handle out-of-range indices.

Default: `Tile` (wrap around)

*Visible when Input Mode != Filter*

⚡ PCG Overridable

</details>

<details>
<summary><strong>Reverse Shift</strong> <code>bool</code></summary>

Shift in the opposite direction.

Default: `false`

⚡ PCG Overridable

</details>

<details>
<summary><strong>Cherry Picked Properties</strong> <code>bitmask</code></summary>

Specific point properties to shift.

*Visible when Shift Type = CherryPick*

</details>

<details>
<summary><strong>Cherry Picked Attributes</strong> <code>TArray&lt;FName&gt;</code></summary>

Specific attributes to shift.

*Visible when Shift Type = CherryPick*

</details>

<details>
<summary><strong>Quiet Double Shift Warning</strong> <code>bool</code></summary>

Suppress warning when shifting already-shifted data.

Default: `false`

</details>

## Examples

**Shift path to start at midpoint**:
- Input Mode: `Relative`
- Relative Constant: `0.5`

**Shift by 3 indices**:
- Input Mode: `Discrete`
- Discrete Constant: `3`

**Start path at first tagged point**:
- Input Mode: `Filter`
- Connect filter checking for tag

## Related

- [Slide](./slide.md) - Move points along path without reordering
- [Reverse](./reverse.md) - Reverse path direction

---

📦 **Module**: `PCGExElementsPaths` · 📄 [Source](https://github.com/Nebukam/PCGExtendedToolkit/blob/main/Source/PCGExElementsPaths/Private/Elements/PCGExPathShift.cpp)
