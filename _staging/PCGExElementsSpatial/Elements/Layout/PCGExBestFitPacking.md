---
icon: arrows-left-right
description: 'Best Fit Packing - Optimal bin packing using best-fit decreasing algorithm with rotation support.'
---

# Best Fit Packing

Optimal bin packing using best-fit decreasing algorithm with rotation support.

## Overview

This node packs items (points) into container bins using a best-fit decreasing algorithm. Items are sorted by size, then each item is placed into the best available space across all bins, optionally testing rotations to find the tightest fit. Multiple scoring strategies control how "best" is defined -- from tightest geometric fit to minimizing wasted space. This produces more optimal packing than simple sequential placement at the cost of additional computation.

## How It Works

1. **Sorting**: Items are sorted by bounds size (optionally by volume) in the specified direction.
2. **Seed Setup**: Determines the starting position within each bin using UVW coordinates or world positions.
3. **Best-Fit Search**: For each item, evaluates all available spaces across all bins (or per-bin if Global Best Fit is disabled), optionally testing rotations.
4. **Scoring**: Scores each potential placement using the selected strategy (tightest fit, smallest space, least waste, or balanced).
5. **Placement**: Places the item in the highest-scoring position and splits the remaining space.
6. **Overflow**: Items that don't fit in any bin are output to the Discarded pin.

#### Usage Notes

- **Rotation Support**: When rotation is enabled, the algorithm tests cardinal (90-degree) or all orthogonal rotations to find the best orientation for each item.
- **Global vs Per-Bin**: With Global Best Fit enabled, each item considers all available spaces across all bins simultaneously. Disabling it restricts the search to the current bin only, which is faster but may produce less optimal results.
- **Placement Anchor**: Controls where within each free space the item is positioned -- corner, center, or closest to the seed point.

## Behavior

**Best-Fit Packing with Rotation:**
```
Items sorted by volume (descending):
Item A (large), Item B (medium), Item C (small)

Bin 1:
┌──────────────────────────┐
│                          │
│  ┌──────────┐ ┌───────┐ │
│  │          │ │       │ │
│  │    A     │ │ B(rot)│ │  ← B rotated for tighter fit
│  │          │ │       │ │
│  ├──────────┤ └───────┘ │
│  │  C │free │   free    │
│  └────┴─────┘           │
└──────────────────────────┘

Score Mode = Tightest Fit:
  → Favors spaces where item fills the most volume
Score Mode = Smallest Space:
  → Favors the smallest space that can hold the item
Score Mode = Least Waste:
  → Minimizes leftover unusable fragments
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
| **Ascending** | Process smaller items first |
| **Descending** | Process larger items first |

Default: `Descending`

⚡ PCG Overridable

</details>

<details>
<summary><strong>Sort By Volume</strong> <code>bool</code></summary>

When enabled, items are sorted by their bounding box volume. When disabled, a different size metric is used.

Default: `true`

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

Default: `(-1, -1, -1)` (bottom-left-back corner)

⚡ PCG Overridable

📋 *Visible when Seed Mode = UVW Constant*

</details>

<details>
<summary><strong>Seed UVW Attribute</strong> <code>FPCGAttributePropertyInputSelector</code></summary>

The attribute containing the UVW seed position per bin.

⚡ PCG Overridable

📋 *Visible when Seed Mode = UVW Attribute*

</details>

<details>
<summary><strong>Seed Position</strong> <code>FVector</code></summary>

The world position to start packing from.

Default: `(0, 0, 0)`

⚡ PCG Overridable

📋 *Visible when Seed Mode = Position Constant*

</details>

<details>
<summary><strong>Seed Position Attribute</strong> <code>FPCGAttributePropertyInputSelector</code></summary>

The attribute containing the world seed position per bin.

⚡ PCG Overridable

📋 *Visible when Seed Mode = Position Attribute*

</details>

### Fitting

<details>
<summary><strong>Score Mode</strong> <code>EPCGExBestFitScoreMode</code></summary>

How to score potential placements to determine the best fit.

| Option | Description |
|--------|-------------|
| **Tightest Fit** | Favor spaces where the item fills the highest proportion of available volume |
| **Smallest Space** | Favor the smallest space that can contain the item |
| **Least Waste** | Minimize leftover space that is too small to be useful |
| **Balanced** | Weighted blend between tightness and waste avoidance |

Default: `Tightest Fit`

⚡ PCG Overridable

</details>

<details>
<summary><strong>Rotation Mode</strong> <code>EPCGExBestFitRotationMode</code></summary>

Whether to test rotations when evaluating placements.

| Option | Description |
|--------|-------------|
| **None** | No rotation -- items are placed in their original orientation |
| **Cardinal Only** | Test 90-degree rotations around the split axis |
| **All Orthogonal** | Test all 90-degree rotations around all three axes |

Default: `Cardinal Only`

⚡ PCG Overridable

</details>

<details>
<summary><strong>Placement Anchor</strong> <code>EPCGExBestFitPlacementAnchor</code></summary>

Where within each free space the item is positioned.

| Option | Description |
|--------|-------------|
| **Corner** | Place at the corner of the free space |
| **Center** | Place at the center of the free space |
| **Seed Proximity** | Place as close to the seed position as possible |

Default: `Corner`

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
<summary><strong>Wasted Space Threshold</strong> <code>double</code></summary>

The volume ratio threshold below which free spaces are discarded. Higher values are more aggressive at eliminating small fragments.

Default: `0.5`

⚡ PCG Overridable

📋 *Visible when Avoid Wasted Space is enabled*

</details>

<details>
<summary><strong>Global Best Fit</strong> <code>bool</code></summary>

When enabled, each item evaluates all available spaces across all bins to find the globally best placement. When disabled, only searches within the current bin.

Default: `true`

⚡ PCG Overridable

</details>

<details>
<summary><strong>Tightness Weight</strong> <code>double</code></summary>

In Balanced score mode, controls the weight given to tightness of fit versus waste avoidance. Higher values favor tighter fits.

Default: `0.6`

⚡ PCG Overridable

📋 *Visible when Score Mode = Balanced*

</details>

### Padding

<details>
<summary><strong>Occupation Padding Input</strong> <code>EPCGExInputValueType</code></summary>

Whether occupation padding is a constant or read from an attribute.

| Option | Description |
|--------|-------------|
| **Constant** | Use the constant padding value |
| **Attribute** | Read padding from a point attribute |

Default: `Constant`

⚡ PCG Overridable

</details>

<details>
<summary><strong>Occupation Padding</strong> <code>FVector</code></summary>

Padding added around each item's bounds after placement. Creates spacing between packed items.

Default: `(0, 0, 0)`

⚡ PCG Overridable

📋 *Visible when Occupation Padding Input = Constant*

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
| **Labels** | Points | Labeling/metadata output |

---

📦 **Module**: `PCGExElementsSpatial` · 📄 [Source](https://github.com/Nebukam/PCGExtendedToolkit/blob/main/Source/PCGExElementsSpatial/Public/Elements/Layout/PCGExBestFitPacking.h)

<!-- VERIFICATION REPORT
Node-Specific Properties: 19 documented
- SortDirection (EPCGExSortDirection, default Descending, PCG_Overridable)
- bSortByVolume (bool, default true, PCG_Overridable)
- SeedMode (EPCGExBinSeedMode, default UVWConstant, PCG_Overridable)
- SeedUVW (FVector, default (-1,-1,-1), conditional, PCG_Overridable)
- SeedUVWAttribute (FPCGAttributePropertyInputSelector, conditional, PCG_Overridable)
- SeedPosition (FVector, default (0,0,0), conditional, PCG_Overridable)
- SeedPositionAttribute (FPCGAttributePropertyInputSelector, conditional, PCG_Overridable)
- ScoreMode (EPCGExBestFitScoreMode, default TightestFit, PCG_Overridable)
- RotationMode (EPCGExBestFitRotationMode, default CardinalOnly, PCG_Overridable)
- PlacementAnchor (EPCGExBestFitPlacementAnchor, default Corner, PCG_Overridable)
- SplitAxis (EPCGExAxis, default Up, PCG_Overridable)
- SplitMode (EPCGExSpaceSplitMode, default Minimal, PCG_Overridable)
- bAvoidWastedSpace (bool, default true, PCG_Overridable)
- WastedSpaceThreshold (double, default 0.5, conditional, PCG_Overridable)
- bGlobalBestFit (bool, default true, PCG_Overridable)
- TightnessWeight (double, default 0.6, conditional, PCG_Overridable)
- OccupationPaddingInput (EPCGExInputValueType, default Constant, PCG_Overridable)
- OccupationPadding (FVector, default ZeroVector, conditional, PCG_Overridable)
- bAbsolutePadding (bool, default true, PCG_Overridable)
- bQuietTooManyBinsWarning (bool, default false)
- bQuietTooFewBinsWarning (bool, default false)
Inherited Properties: UPCGExPointsProcessorSettings (standard points processor)
Inputs: In (SourceBinsLabel), Bins
Outputs: Out (OutputBinsLabel), Bins, Labels
Enums: EPCGExBestFitRotationMode, EPCGExBestFitScoreMode, EPCGExBestFitPlacementAnchor
-->
