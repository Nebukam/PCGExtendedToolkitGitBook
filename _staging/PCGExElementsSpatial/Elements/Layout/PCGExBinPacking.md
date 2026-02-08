---
icon: arrows-left-right
description: 'Bin Packing - Simple bin packing algorithm'
---

# Bin Packing

[EXPERIMENTAL] A simple bin packing node.

## Overview

This node provides a straightforward bin packing algorithm that places items (points) into container bins. Items are placed sequentially, starting from a seed position, with remaining space divided after each placement. This is a simpler alternative to Best Fit Packing, trading optimal efficiency for faster computation and predictable placement order.

## How It Works

1. **Sorting**: Items are sorted according to the specified direction and rules
2. **Seed Setup**: Determines the starting position within each bin
3. **Sequential Placement**: Places each item in the best available space
4. **Space Splitting**: Divides remaining space after each placement based on the split mode
5. **Overflow Handling**: Items that don't fit are output to the Discarded pin

#### Usage Notes

- **Experimental**: This node is marked experimental and may change in future versions
- **Simpler Algorithm**: Unlike Best Fit Packing, this doesn't test rotations or evaluate all bins globally
- **Predictable Order**: Items are placed in sort order, making results more predictable
- **Seed Proximity**: The placement favor option controls whether items cluster near the seed or conserve space

## Behavior

#### Bin Packing:
```
Sequential placement from seed:

    Seed at bottom (UVW = 0,0,-1):

    ┌────────────────────────┐
    │                        │
    │    (free space)        │
    │                        │
    ├────────┬───────────────┤
    │   A    │     B         │  ← Items placed from bottom
    └────────┴───────────────┘
         ↑
       Seed


Split modes after placement:

    Minimal:              Equal Split:
    ┌────────┬──────┐     ┌────────┬──────┐
    │ free 1 │      │     │ free 1 │ fr 2 │
    ├────────┤ fr 2 │     ├────────┼──────┤
    │  item  │      │     │  item  │ fr 3 │
    └────────┴──────┘     └────────┴──────┘
```

## Inputs

| Pin | Type | Description |
|-----|------|-------------|
| **In** | Points | Items to pack (uses point bounds as item size) |
| **Bins** | Points | Container bins (uses point bounds as bin size) |

## Settings

### Sorting

<details>
<summary><strong>Sort Direction</strong> <code>EPCGExSortDirection</code></summary>

Controls the order in which items are processed.

| Option | Description |
|--------|-------------|
| **Ascending** | Process items in ascending order |
| **Descending** | Process items in descending order |

Default: `Ascending`

⚡ PCG Overridable

</details>

### Seed Position

<details>
<summary><strong>Seed Mode</strong> <code>EPCGExBinSeedMode</code></summary>

How the starting position for packing is determined within each bin.

| Option | Description |
|--------|-------------|
| **UVW Constant** | Use a constant UVW position relative to bin bounds |
| **UVW Attribute** | Read UVW position from a bin attribute |
| **Position Constant** | Use a constant world position |
| **Position Attribute** | Read world position from a bin attribute |

Default: `UVW Constant`

⚡ PCG Overridable

</details>

<details>
<summary><strong>Seed UVW</strong> <code>FVector</code></summary>

The UVW position within the bin to start packing from. Values range from -1 to 1.

Default: `(0, 0, -1)` (bottom center)

📋 *Visible when Seed Mode = UVW Constant*

⚡ PCG Overridable

</details>

<details>
<summary><strong>Seed UVW Attribute</strong> <code>FPCGAttributePropertyInputSelector</code></summary>

The attribute containing the UVW seed position per bin.

📋 *Visible when Seed Mode = UVW Attribute*

⚡ PCG Overridable

</details>

<details>
<summary><strong>Seed Position</strong> <code>FVector</code></summary>

The world position to start packing from.

Default: `(0, 0, 0)`

📋 *Visible when Seed Mode = Position Constant*

⚡ PCG Overridable

</details>

<details>
<summary><strong>Seed Position Attribute</strong> <code>FPCGAttributePropertyInputSelector</code></summary>

The attribute containing the world seed position per bin.

📋 *Visible when Seed Mode = Position Attribute*

⚡ PCG Overridable

</details>

### Fitting

<details>
<summary><strong>Infer Split Axis From Seed</strong> <code>bool</code></summary>

When enabled, attempts to determine the split axis from the seed position. Falls back to the selected axis if inference fails.

Default: `false`

⚡ PCG Overridable

</details>

<details>
<summary><strong>Split Axis</strong> <code>EPCGExAxis</code></summary>

The main axis for creating new free spaces after placement. Items stack along this axis.

| Option | Description |
|--------|-------------|
| **Forward** | Split along forward axis |
| **Backward** | Split along backward axis |
| **Right** | Split along right axis |
| **Left** | Split along left axis |
| **Up** | Split along up axis |
| **Down** | Split along down axis |

Default: `Up`

⚡ PCG Overridable

</details>

<details>
<summary><strong>Split Mode</strong> <code>EPCGExSpaceSplitMode</code></summary>

How remaining space is divided after item placement.

| Option | Description |
|--------|-------------|
| **Minimal** | Create minimal number of new spaces |
| **Minimal Cross** | Minimal with cross-cutting |
| **Equal Split** | Split remaining space equally |
| **Cone** | Cone-shaped splitting |
| **Cone Cross** | Cone with cross-cutting |

Default: `Minimal`

⚡ PCG Overridable

</details>

<details>
<summary><strong>Avoid Wasted Space</strong> <code>bool</code></summary>

When enabled, discards free spaces below a size threshold to prevent fragmentation.

Default: `true`

⚡ PCG Overridable

</details>

<details>
<summary><strong>Placement Favor</strong> <code>EPCGExPlacementFavor</code></summary>

How to prioritize placement decisions.

| Option | Description |
|--------|-------------|
| **Seed Proximity** | Favor placements closer to the seed position |
| **Space Conservation** | Favor placements that conserve larger contiguous spaces |

Default: `Seed Proximity`

⚡ PCG Overridable

</details>

### Padding

<details>
<summary><strong>Occupation Padding Input</strong> <code>EPCGExInputValueType</code></summary>

Determines whether occupation padding is a constant or read from an attribute.

| Option | Description |
|--------|-------------|
| **Constant** | Use the constant padding value |
| **Attribute** | Read padding from a point attribute |

Default: `Constant`

⚡ PCG Overridable

</details>

<details>
<summary><strong>Occupation Padding</strong> <code>FVector</code></summary>

Padding added around each item's bounds after placement. Creates spacing between packed items but increases fragmentation.

Default: `(0, 0, 0)`

📋 *Visible when Occupation Padding Input = Constant*

⚡ PCG Overridable

</details>

<details>
<summary><strong>Absolute Padding</strong> <code>bool</code></summary>

When enabled, padding is not rotated with the item. When disabled, padding rotates with item orientation.

Default: `true`

⚡ PCG Overridable

</details>

### Warnings

<details>
<summary><strong>Quiet Too Many Bins Warning</strong> <code>bool</code></summary>

When enabled, suppresses warnings when there are more bins than input items.

Default: `false`

</details>

<details>
<summary><strong>Quiet Too Few Bins Warning</strong> <code>bool</code></summary>

When enabled, suppresses warnings when there are fewer bins than input items.

Default: `false`

</details>

## Outputs

| Pin | Type | Description |
|-----|------|-------------|
| **Out** | Points | Successfully packed items with updated transforms |
| **Bins** | Points | The bin points (pass-through) |
| **Discarded** | Points | Items that could not be packed |

---

![Static Badge](https://img.shields.io/badge/Source-PCGExElementsSpatial-473F69)  ·  [Source](https://github.com/Nebukam/PCGExtendedToolkit/blob/main/Source/PCGExElementsSpatial/Public/Elements/Layout/PCGExBinPacking.h)

<!-- SOURCE: https://github.com/Nebukam/PCGExtendedToolkit/blob/main/Source/PCGExElementsSpatial/Public/Elements/Layout/PCGExBinPacking.h -->

<!-- VERIFICATION REPORT
Node-Specific Properties: 15 documented (SortDirection, SeedMode, SeedUVW, SeedUVWAttribute, SeedPosition, SeedPositionAttribute, bInferSplitAxisFromSeed, SplitAxis, SplitMode, bAvoidWastedSpace, PlacementFavor, OccupationPaddingInput, OccupationPadding, bAbsolutePadding, bQuietTooManyBinsWarning, bQuietTooFewBinsWarning)
Inherited Properties: UPCGExPointsProcessorSettings (standard points processor)
Inputs: In, Bins (SourceBinsLabel)
Outputs: Out, Bins (OutputBinsLabel), Discarded
Nested Types: EPCGExSortDirection, EPCGExBinSeedMode, EPCGExAxis, EPCGExSpaceSplitMode, EPCGExPlacementFavor
-->
