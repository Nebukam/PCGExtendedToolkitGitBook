---
icon: exchange-alt
description: 'In editor :: PCGEx | Reverse Order'
---

# Reverse Order

Reverses the order of points in a path or changes the winding direction.

## Overview

Reverse Order flips the direction of a path—what was the start becomes the end, and vice versa. This affects point order, path direction, and (for closed paths) winding order. Use it to correct path direction, match winding conventions, or prepare paths for direction-sensitive operations.

## Settings

### Method

<details>
<summary><strong>Method</strong> <code>Unconditional | Sorting Rules | Winding</code></summary>

How to determine when to reverse:

| Option | Behavior |
|--------|----------|
| **Unconditional** | Reverse all paths always |
| **Sorting Rules** | Reverse based on sorting direction (uses Sorting Rules input pin) |
| **Winding** | Reverse based on winding order (closed paths only) |

Default: `Unconditional`

⚡ PCG Overridable

</details>

### Sorting Rules Settings (when Method is Sorting Rules)

<details>
<summary><strong>Sort Direction</strong> <code>Ascending | Descending</code></summary>

Direction for sorting-based reversal.

Default: `Ascending`

⚡ PCG Overridable

</details>

### Winding Settings (when Method is Winding)

<details>
<summary><strong>Winding</strong> <code>Clockwise | CounterClockwise</code></summary>

Target winding order. Paths not matching this winding are reversed.

Default: `CounterClockwise`

⚡ PCG Overridable

</details>

<details>
<summary><strong>Projection Details</strong> <code>FPCGExGeo2DProjectionDetails</code></summary>

Projection settings for 2D winding calculation.

⚡ PCG Overridable

</details>

### Attribute Swapping

<details>
<summary><strong>Swap Attributes Values</strong> <code>Array</code></summary>

Pairs of attributes whose values should be swapped when reversing. Each entry specifies:
- **First Attribute Name** - First attribute in the swap pair
- **Second Attribute Name** - Second attribute in the swap pair
- **Multiply By Minus One** - Optionally negate numeric values after swap

⚡ PCG Overridable

</details>

### Tagging

<details>
<summary><strong>Tag If Reversed</strong> <code>bool</code></summary>

Add a tag to data that was reversed.

Default: Enabled

</details>

<details>
<summary><strong>Is Reversed Tag</strong> <code>FString</code></summary>

Tag to apply when points were reversed.

Default: `Reversed`

</details>

<details>
<summary><strong>Tag If Not Reversed</strong> <code>bool</code></summary>

Add a tag to data that was not reversed.

Default: Disabled

</details>

<details>
<summary><strong>Is Not Reversed Tag</strong> <code>FString</code></summary>

Tag to apply when points were not reversed.

Default: `NotReversed`

</details>

## Inputs

| Pin | Type | Description |
|-----|------|-------------|
| **In** | Points | Path points to potentially reverse |
| **Sorting Rules** | Sorting Rules | Sorting rules for Sorting Rules method |

## Examples

**Reverse all paths**:
- Method: `Unconditional`

**Standardize winding** (all counter-clockwise):
- Method: `Winding`
- Winding: `CounterClockwise`

**Swap arrive/leave tangents on reversal**:
- Swap Attributes Values: `ArriveTangent` <-> `LeaveTangent`
- Multiply By Minus One: Enabled (negates tangent directions)

## Use Cases

- **Direction correction**: Fix backwards paths from external sources
- **Winding standardization**: Ensure consistent winding for boolean operations
- **Preparation**: Match direction requirements of downstream nodes
- **Tangent swapping**: Automatically swap directional attributes when reversing

## Related

### Path Operations
- [Shift](./shift.md) - Rotate point order without reversing
- [Properties](./properties.md) - Read current winding order

---

📦 **Module**: `PCGExElementsPaths` · 📄 [Source](https://github.com/Nebukam/PCGExtendedToolkit/blob/main/Source/PCGExElementsPaths/Private/Elements/PCGExReversePointOrder.cpp)
