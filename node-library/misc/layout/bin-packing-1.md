---
description: 'In editor :: PCGEx | Bin Packing'
icon: circle
---

# Best Fit Packing

{% hint style="warning" %}
This page was generated from the source code. It captures what the node does, but still needs some serious  proofreading.
{% endhint %}

> Optimally packs points into bins using a best-fit decreasing algorithm with rotation support.

#### How It Works

Best Fit Packing organizes input points into predefined containers by placing each item into the most suitable container based on available space and fit quality. It uses a variant of the classic Best-Fit Decreasing (BFD) algorithm, which first sorts items by size before attempting to place them. This approach minimizes wasted space and maximizes container utilization.

The process begins by sorting items from largest to smallest, ensuring that bigger items are placed first for better packing efficiency. Then, each item is evaluated against all available containers to find the best fit. If rotation is enabled, multiple orientations are tested to improve fit quality. A scoring system determines how well an item fits into a specific space based on settings like tightness or waste minimization.

Once a suitable container and position are found, the item is placed, and the remaining space within that container is updated by splitting it into new free areas using the configured split mode and axis. This process repeats for all items until they are either placed or discarded if no suitable container exists. When enabled, global best-fit evaluation checks every container for each item to find the absolute best placement.

#### Configuration

<details>

<summary><strong>Sort Direction</strong><br><em>Controls the order in which points will be sorted, when using sorting rules. Uses largest-first by default for best-fit decreasing.</em></summary>

Determines whether items are sorted ascending or descending by volume before packing.

**Values**:

* **Ascending**: Sorts items from smallest to largest.
* **Descending**: Sorts items from largest to smallest (default).

</details>

<details>

<summary><strong>Sort By Volume</strong><br><em>If enabled, items will be sorted by volume (largest first) before packing. This is the classic BFD approach.</em></summary>

When enabled, items are sorted by their total volume before packing to improve efficiency.

</details>

<details>

<summary><strong>Seed Mode</strong><br><em>Per-bin seed. Represent a bound-relative location to start packing from.</em></summary>

Controls how the starting point for packing within each bin is determined.

**Values**:

* **UVW Constant**: Uses a fixed UVW vector.
* **UVW Attribute**: Uses a point attribute to define the UVW seed.
* **Position Constant**: Uses a fixed position vector.
* **Position Attribute**: Uses a point attribute to define the position seed.

</details>

<details>

<summary><strong>Seed UVW</strong><br><em>Per-bin seed. Represent a bound-relative location to start packing from.</em></summary>

Fixed UVW coordinate used as the seed when Seed Mode is set to UVW Constant.

</details>

<details>

<summary><strong>Seed UVW Attribute</strong><br><em>Per-bin seed. Represent a bound-relative location to start packing from.</em></summary>

Point attribute that defines the UVW seed for each bin when Seed Mode is set to UVW Attribute.

</details>

<details>

<summary><strong>Seed Position</strong><br><em>Per-bin seed. Represent a bound-relative location to start packing from.</em></summary>

Fixed position vector used as the seed when Seed Mode is set to Position Constant.

</details>

<details>

<summary><strong>Seed Position Attribute</strong><br><em>Per-bin seed. Represent a bound-relative location to start packing from.</em></summary>

Point attribute that defines the position seed for each bin when Seed Mode is set to Position Attribute.

</details>

<details>

<summary><strong>Score Mode</strong><br><em>Scoring method for selecting the best placement.</em></summary>

Determines how placements are scored to select the best fit.

**Values**:

* **Tightest Fit**: Prioritizes spaces where the item fits most tightly.
* **Smallest Space**: Prioritizes the smallest space that can contain the item.
* **Least Waste**: Minimizes volume wasted after placement.
* **Balanced**: Balances tightness and waste minimization.

</details>

<details>

<summary><strong>Rotation Mode</strong><br><em>Rotation testing mode. More rotations = better fit but slower.</em></summary>

Controls how many orientations an item is tested in to find the best fit.

**Values**:

* **None**: No rotation.
* **Cardinal (90°)**: Tests 90° rotations only (4 orientations).
* **All Orthogonal**: Tests all 24 orthogonal orientations.

</details>

<details>

<summary><strong>Placement Anchor</strong><br><em>How to position items within their chosen space.</em></summary>

Determines where an item is placed within its chosen space.

**Values**:

* **Corner**: Places the item at the corner of the free space.
* **Center**: Centers the item within the free space.
* **Seed Proximity**: Places the item as close to the bin's seed location as possible.

</details>

<details>

<summary><strong>Split Axis</strong><br><em>The main split axis for creating new free spaces after placement.</em></summary>

Defines which axis is used to split the remaining space after placing an item.

</details>

<details>

<summary><strong>Split Mode</strong><br><em>Space splitting mode after item placement.</em></summary>

Controls how the free space is divided after an item is placed.

**Values**:

* **Minimal**: Splits space in a minimal way.
* **Minimal (Cross Axis)**: Splits space along the cross axis.
* **Equal Split**: Divides space equally.
* **Cone**: Splits space using a cone shape.
* **Cone (Cross Axis)**: Splits space using a cone along the cross axis.

</details>

<details>

<summary><strong>Avoid Wasted Space</strong><br><em>If enabled, fitting will try to avoid wasted space by not creating free spaces below a threshold.</em></summary>

When enabled, small unused spaces are discarded to prevent fragmentation.

</details>

<details>

<summary><strong>Wasted Space Threshold</strong><br><em>Minimum space threshold as a ratio of the smallest item dimension. Spaces smaller than this are discarded.</em></summary>

Sets the minimum size of free space that is considered useful. Smaller spaces are ignored.

</details>

<details>

<summary><strong>Global Best Fit</strong><br><em>If enabled, will evaluate all bins for each item to find the globally best placement.</em></summary>

When enabled, evaluates every bin for each item to find the absolute best fit instead of placing sequentially.

</details>

<details>

<summary><strong>Tightness Weight</strong><br><em>Weight for tightness in balanced scoring mode. Higher = prefer tighter fits.</em></summary>

Controls the balance between tightness and waste when Score Mode is set to Balanced.

</details>

<details>

<summary><strong>Occupation Padding Input</strong><br><em>Occupation padding source</em></summary>

Defines how padding is applied around items during placement.

**Values**:

* **Constant**: Uses a fixed padding value.
* **Attribute**: Uses an attribute to define padding per item.

</details>

<details>

<summary><strong>Occupation Padding (Attr)</strong><br><em>Occupation padding attribute -- Will be broadcast to FVector.</em></summary>

Point attribute used for padding when Occupation Padding Input is set to Attribute.

</details>

<details>

<summary><strong>Occupation Padding</strong><br><em>Occupation padding constant value.</em></summary>

Fixed padding value applied around items during placement.

</details>

<details>

<summary><strong>Absolute Padding</strong><br><em>If enabled, the padding will not be relative (rotated) if the item is rotated.</em></summary>

When enabled, padding remains fixed regardless of item rotation.

</details>

<details>

<summary><strong>Quiet Too Many Bins Warning</strong><br><em>If enabled, won't throw a warning if there are more bins than there are inputs.</em></summary>

Disables warnings when more bins are provided than items to pack.

</details>

<details>

<summary><strong>Quiet Too Few Bins Warning</strong><br><em>If enabled, won't throw a warning if there are fewer bins than there are inputs.</em></summary>

Disables warnings when fewer bins are provided than items to pack.

</details>

#### Usage Example

To pack a set of objects into containers:

1. Create a point cloud representing the objects to be packed.
2. Define bins as points with appropriate sizes and positions.
3. Connect both the object points and bin points to the Best Fit Packing node.
4. Adjust settings like Rotation Mode or Score Mode to optimize packing for your use case.
5. Use the output points to visualize or further process the packed arrangement.

#### Notes

* The algorithm prioritizes efficient space usage, but may not always produce a perfect fit due to the complexity of 3D bin packing.
* Performance can be affected by rotation testing and global best-fit evaluation.
* For best results with rotation, consider enabling Cardinal Only or All Orthogonal modes.
