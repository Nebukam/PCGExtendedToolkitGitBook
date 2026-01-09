---
description: 'In editor :: PCGEx | Bin Packing'
icon: circle
---

# Best Fit Packing

{% hint style="warning" %}
## AI-generated page -- to be reviewed 
While not 100% accurate, it should properly capture what the node/factory does. It stills needs to be proofread by a human.
{% endhint %}

> Optimal bin packing using best-fit decreasing algorithm with rotation support.

### Overview

This node arranges input points into predefined bins using an optimized bin packing algorithm. It's particularly useful for organizing scattered elements into containers or spaces, such as placing objects into rooms, arranging items on shelves, or distributing assets across multiple areas. The algorithm uses a "best-fit decreasing" approach, sorting items by size and then placing each item in the best available space.

{% hint style="info" %}
The node requires both input points (items to place) and bin points (containers). Items will be placed into bins based on their relative positions and sizes.
{% endhint %}

<details>

<summary>Inputs</summary>

* **Input Points**: The items to be packed into bins
* **Bin Points**: The containers or spaces where items will be placed

</details>

<details>

<summary>Outputs</summary>

* **Output Points**: Input points with updated transforms and attributes reflecting their final placement
* **Discarded Points**: Items that couldn't be placed due to size or bin constraints

</details>

### Properties Overview

Controls how the packing algorithm behaves, including sorting, rotation, scoring, and space splitting.

***

#### Sorting

Controls how items are ordered before packing.

**Sort Direction**

_Controls whether items are sorted from largest to smallest (descending) or vice versa._

* Largest-first sorting is recommended for best-fit decreasing behavior
* **Values**:
  * **Ascending**: Sort from smallest to largest
  * **Descending**: Sort from largest to smallest

**Sort By Volume**

_When enabled, items will be sorted by volume before packing._

* This is the standard approach for bin packing algorithms
* Larger items are placed first to maximize space efficiency

***

#### Bin Seed

Determines where packing starts within each bin.

**Seed Mode**

_Selects how to define the starting position for packing within each bin._

* **Values**:
  * **UVW Constant**: Use a fixed UVW vector to determine seed location
  * **UVW Attribute**: Read UVW from an attribute on the bin point
  * **Position Constant**: Use a fixed world position as seed
  * **Position Attribute**: Read world position from an attribute on the bin point

**Seed UVW**

_The UVW coordinates used to determine where packing begins within each bin._

* UVW values are relative to the bin's bounds (0,0,0 = bottom-left-back, 1,1,1 = top-right-front)
* **Values**:
  * **Corner**: Bottom-left-back corner (default)
  * **Center**: Center of the bin
  * **Seed Proximity**: Closest point to the bin's seed

**Seed Position**

_The world position used as the starting point for packing within each bin._

* Only used when Seed Mode is set to "Position Constant"

**Seed Position Attribute**

_The attribute on bin points that contains the world position used as the starting point._

* Only used when Seed Mode is set to "Position Attribute"

***

#### Fitting

Controls how items are evaluated and placed.

**Score Mode**

_Selects the method for scoring potential placements._

* **Values**:
  * **Tightest Fit**: Prioritizes spaces where the item fits most tightly
  * **Smallest Space**: Prioritizes smallest space that can contain the item
  * **Least Waste**: Minimizes volume wasted after placement
  * **Balanced**: Balances between tight fit and space conservation

**Rotation Mode**

_Selects how to test rotations for each item._

* **Values**:
  * **None**: No rotation testing
  * **Cardinal (90°)**: Test 90° rotations only (4 orientations)
  * **All Orthogonal**: Test all 24 orthogonal orientations

**Placement Anchor**

_Determines where items are positioned within their chosen space._

* **Values**:
  * **Corner**: Place items at corner of free space
  * **Center**: Place items at center of free space
  * **Seed Proximity**: Place items as close to seed as possible

**Split Axis**

_Selects the axis along which new spaces are created after item placement._

* **Values**:
  * **Forward**: X+ axis (default)
  * **Backward**: X- axis
  * **Right**: Y+ axis
  * **Left**: Y- axis
  * **Up**: Z+ axis
  * **Down**: Z- axis

**Split Mode**

_Selects how to split the remaining space after an item is placed._

* **Values**:
  * **Minimal**: Create minimal partitions (default)
  * **Minimal (Cross Axis)**: Create partitions with cross-axis splitting
  * **Equal Split**: Split space evenly
  * **Cone**: Split in a cone shape (hidden)
  * **Cone (Cross Axis)**: Split in a cone shape with cross axis (hidden)

**Avoid Wasted Space**

_When enabled, the algorithm will avoid creating very small free spaces._

* Helps prevent fragmentation of available space
* Smaller spaces are discarded to reduce waste

**Wasted Space Threshold**

_Sets the minimum size threshold for free spaces as a ratio of the smallest item dimension._

* Only used when "Avoid Wasted Space" is enabled
* **Range**: 0.1 - 1.0 (default: 0.5)
* Smaller values allow more fragmentation

**Global Best Fit**

_When enabled, evaluates all bins for each item to find the globally best placement._

* If disabled, items are placed sequentially into bins
* Can be slower but may produce better results overall

**Tightness Weight**

_Sets the weight of tightness in balanced scoring mode._

* Only used when "Score Mode" is set to "Balanced"
* **Range**: 0.0 - 1.0 (default: 0.6)
* Higher values prefer tighter fits

***

#### Padding

Controls how much padding is applied around placed items.

**Occupation Padding Input**

_Selects whether to use a constant or attribute value for padding._

* **Values**:
  * **Constant**: Use a fixed padding value
  * **Attribute**: Read padding from an attribute on the item point

**Occupation Padding Attribute**

_The attribute that contains the padding values for each item._

* Only used when "Occupation Padding Input" is set to "Attribute"
* Values are broadcast to FVector format

**Occupation Padding**

_The fixed padding value applied around each item._

* Applied in local space relative to the item's orientation
* **Values**:
  * **Zero Vector**: No padding (default)
  * **Custom Vector**: Custom padding values

**Absolute Padding**

_When enabled, padding is not rotated with the item._

* If disabled, padding values are rotated along with the item's orientation
* When enabled, padding remains fixed in world space
