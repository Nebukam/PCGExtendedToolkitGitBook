---
description: 'In editor :: PCGEx | Bin Packing'
icon: circle
---

# Bin Packing

{% hint style="info" %}
This page was generated from the source code. It should properly capture what the node does, but still needs to be proofread by a human.
{% endhint %}

> \[EXPERIMENTAL] A simple bin packing node that organizes input points into predefined bins using an efficient space-fitting algorithm.

#### How It Works

The Bin Packing node arranges input points into bins by first sorting them based on a specified rule, then placing each point into available spaces within the bins. Each bin has defined boundaries and a starting point for placement, which is determined by a seed value.

1. Input points are sorted according to the configured sort direction.
2. For each bin:
   * A seed point determines where to begin placing items.
   * The algorithm attempts to fit each item into available space within the bin.
3. When an item cannot fit in any current space, it may be discarded or placed in a new bin if allowed.
4. Placement decisions are influenced by the selected split axis and mode, which define how free space is partitioned after each item placement.
5. Padding can be applied to items to simulate physical constraints or spacing requirements.

The algorithm attempts to minimize wasted space by choosing placements that leave the smallest amount of unused volume for future items, unless configured otherwise.

#### Configuration

<details>

<summary><strong>Sort Direction</strong><br><em>Controls the order in which points will be sorted, when using sorting rules.</em></summary>

Determines whether the input points are sorted in ascending or descending order before packing. This affects how items are placed into bins.

**Values**:

* **Ascending**: Sorts from lowest to highest.
* **Descending**: Sorts from highest to lowest.

</details>

<details>

<summary><strong>Seed Mode</strong><br><em>Per-bin seed. Represent a bound-relative location to start packing from.</em></summary>

Defines how the starting point for packing within each bin is determined.

**Values**:

* **UVWConstant**: Uses a constant UVW vector.
* **UVWAttribute**: Uses a per-bin attribute value for UVW.
* **PositionConstant**: Uses a constant world position.
* **PositionAttribute**: Uses a per-bin attribute value for world position.

</details>

<details>

<summary><strong>Seed UVW</strong><br><em>A constant bound-relative position.</em></summary>

A vector defining the relative position within each bin where packing begins, when using UVWConstant mode.

</details>

<details>

<summary><strong>Seed UVW Attribute</strong><br><em>A per-bin bound-relative position.</em></summary>

An attribute that defines a UVW vector for each bin, used to determine the starting point for packing.

</details>

<details>

<summary><strong>Seed Position</strong><br><em>A constant world position.</em></summary>

A world-space vector defining where packing begins within each bin, when using PositionConstant mode.

</details>

<details>

<summary><strong>Seed Position Attribute</strong><br><em>A per-bin world position.</em></summary>

An attribute that defines a world-space vector for each bin, used to determine the starting point for packing.

</details>

<details>

<summary><strong>Infer Split Axis From Seed</strong><br><em>Will attempt to infer the split axis from relative seed positioning, and fall back to selected axis if it can't find one.</em></summary>

When enabled, the node attempts to automatically determine which axis should be used for stacking based on the relative position of the seed point. If this fails, it falls back to the manually selected Split Axis.

</details>

<details>

<summary><strong>Split Axis</strong><br><em>The main stacking axis is the axis that will generate the smallest free space for further insertion.</em></summary>

The primary axis along which items are stacked within a bin. This affects how the available space is partitioned after each item placement.

**Values**:

* **Forward**: X+
* **Backward**: X-
* **Right**: Y+
* **Left**: Y-
* **Up**: Z+
* **Down**: Z-

</details>

<details>

<summary><strong>Split Mode</strong><br><em>The cross stacking axis is the axis that will generate the largest free space on the "sides" of the main axis.</em></summary>

Controls how the remaining space is divided after placing an item. This determines whether to prioritize minimizing or maximizing space on the sides.

**Values**:

* **Minimal**: Minimizes the space left for further insertion.
* **Minimal (Cross Axis)**: Minimizes space along the cross axis.
* **Equal Split**: Splits space evenly.
* **Cone**: Uses a cone-shaped split pattern.
* **Cone (Cross Axis)**: Uses a cone-shaped split along the cross axis.

</details>

<details>

<summary><strong>Avoid Wasted Space</strong><br><em>If enabled, fitting will try to avoid wasted space by not creating free spaces that are below a certain threshold.</em></summary>

When enabled, the node avoids placing items if doing so would result in a small amount of unused space, aiming for more efficient packing.

</details>

<details>

<summary><strong>Placement Favor</strong><br><em>Determines whether the algorithm prioritizes placing items close to the seed point or conserves space for future items.</em></summary>

Determines whether the algorithm prioritizes placing items near the seed or minimizes wasted space.

**Values**:

* **Seed Proximity**: Prioritizes placing items near the seed.
* **Space Conservation**: Prioritizes minimizing wasted space.

</details>

<details>

<summary><strong>Occupation Padding Input</strong><br><em>Occupation padding source</em></summary>

Controls how the padding value is defined for each item.

**Values**:

* **Constant**: Uses a fixed padding value.
* **Attribute**: Uses an attribute to define padding per item.

</details>

<details>

<summary><strong>Occupation Padding Attribute</strong><br><em>An attribute that defines the padding for each item.</em></summary>

An attribute that defines the padding for each item, used to expand its bounds after placement. Only visible when Occupation Padding Input is set to Attribute.

</details>

<details>

<summary><strong>Occupation Padding</strong><br><em>Occupation padding. Occupation padding is an amount by which the bounds of a placed point will be expanded by after placement. This yield to greater fragmentation.</em></summary>

A fixed vector defining how much padding to apply to each item's bounds when placing it. This can help simulate physical constraints or spacing.

</details>

<details>

<summary><strong>Absolute Padding</strong><br><em>If enabled, the padding will not be relative (rotated) if the item is rotated.</em></summary>

When enabled, padding values are applied in world space rather than being rotated with the item. This ensures consistent spacing regardless of orientation.

</details>

<details>

<summary><strong>Quiet Too Many Bins Warning</strong><br><em>If enabled, won't throw a warning if there are more bins than there are inputs.</em></summary>

When enabled, suppresses warnings that would otherwise appear when the number of bins exceeds the number of input points.

</details>

<details>

<summary><strong>Quiet Too Few Bins Warning</strong><br><em>If enabled, won't throw a warning if there are fewer bins than there are inputs.</em></summary>

When enabled, suppresses warnings that would otherwise appear when the number of bins is less than the number of input points.

</details>

#### Usage Example

To arrange scattered trees into a grid of containers:

1. Create a set of bin points representing container locations.
2. Connect these to the Bin Packing node's input.
3. Set the Seed Mode to PositionConstant and define a seed vector that places items near the center of each bin.
4. Enable Avoid Wasted Space to ensure efficient packing.
5. Optionally, use Occupation Padding to add spacing between items.

#### Notes

* This is an experimental feature and may not be fully optimized for performance.
* Bin Packing works best when bins are large enough to accommodate most items.
* Sorting rules can significantly affect the final layout; experiment with different sort orders.
* The algorithm prioritizes minimizing space waste, but this can sometimes lead to suboptimal packing in complex scenarios.
