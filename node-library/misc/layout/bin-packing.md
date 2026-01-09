---
description: 'In editor :: PCGEx | Bin Packing'
icon: circle
---

# Bin Packing

{% hint style="info" %}
### AI-generated page -- to be reviewed

While not 100% accurate, it should properly capture what the node/factory does. It stills needs to be proofread by a human.
{% endhint %}

> \[EXPERIMENTAL] An simple bin packing node.

### Overview

This node organizes input points into bins using a bin packing algorithm, placing items as efficiently as possible within defined containers. It's useful for distributing objects across multiple areas while minimizing wasted space and maintaining logical grouping.

The node takes an input set of points (items to place) and another set of points (bins or containers). It attempts to fit each item into the most appropriate bin based on available space, using configurable rules for sorting, seed positioning, and packing behavior. Items that cannot be placed in any bin are sent to a separate output.

{% hint style="info" %}
This node is experimental and may not behave as expected in all scenarios. Use with caution.
{% endhint %}

<details>

<summary>Inputs</summary>

* **Main Input**: Points to be packed into bins
* **Bins Input**: Points defining the containers or bins where items will be placed

</details>

<details>

<summary>Outputs</summary>

* **Main Output**: Points that were successfully placed in bins
* **Discarded Output**: Points that could not be placed in any bin

</details>

### Properties Overview

Controls how items are sorted, positioned, and packed into bins.

***

#### Settings

Configures the core packing behavior and rules.

**Sort Direction**

_Controls the order in which points are processed._

* Items are sorted before packing to influence placement priority
* **Ascending**: Process smaller items first
* **Descending**: Process larger items first

**Seed Mode**

_Determines how bin seeds (starting positions) are defined._

* **UVW (Constant)**: Use a constant UVW coordinate relative to bin bounds
* **UVW**: Read UVW coordinates from an attribute on the bin point
* **Position (Constant)**: Use a constant world position as seed
* **Position (Attribute)**: Read world position from an attribute on the bin point

**Seed UVW**

_The UVW coordinate used as the seed when using "UVW (Constant)" mode._

* A value between 0 and 1, representing relative position within bin bounds
* Example: `FVector(0.5, 0.5, 0)` places seed at center bottom of bin

**Seed UVW Attribute**

_The attribute to read UVW coordinates from when using "UVW" mode._

* Must be a vector attribute on the bin point data

**Seed Position**

_The world position used as the seed when using "Position (Constant)" mode._

* Example: `FVector(0, 0, 0)` places seed at origin

**Seed Position Attribute**

_The attribute to read world position from when using "Position (Attribute)" mode._

* Must be a vector attribute on the bin point data

**Infer Split Axis From Seed**

_When enabled, attempts to determine the main packing axis based on seed positions._

* If disabled, uses the manually selected Split Axis
* Useful for dynamic layouts where bins are positioned in different orientations

**Split Axis**

_The primary axis along which items will be stacked._

* **Forward**: X+
* **Backward**: X-
* **Right**: Y+
* **Left**: Y-
* **Up**: Z+
* **Down**: Z-

**Split Mode**

_How the packing algorithm splits free space when placing items._

* **Minimal**: Splits space to minimize remaining free volume
* **Minimal (Cross Axis)**: Splits space along cross axis to minimize remaining free volume
* **Equal Split**: Divides space evenly between two partitions
* **Cone**: Creates a cone-shaped partition
* **Cone (Cross Axis)**: Creates a cone-shaped partition along the cross axis

**Avoid Wasted Space**

_When enabled, prevents creating small unused spaces._

* Helps reduce fragmentation and improves packing efficiency
* May result in fewer items fitting but better space usage overall

**Placement Favor**

_Determines how to prioritize placement when multiple options are available._

* **Seed Proximity**: Prioritizes placing items closer to the bin seed
* **Space Conservation**: Prioritizes placing items to conserve overall space

**Occupation Padding Input**

_Specifies whether padding is constant or read from an attribute._

* **Constant**: Use a fixed padding value
* **Attribute**: Read padding values from an attribute on the input points

**Occupation Padding Attribute**

_The attribute to read padding values from when using "Attribute" mode._

* Must be a vector attribute on the input point data

**Occupation Padding**

_The padding applied to placed items, increasing their footprint._

* Example: `FVector(0.1, 0.1, 0.1)` adds 0.1 units of padding in all directions
* Affects how much space an item occupies after placement

**Absolute Padding**

_When enabled, padding is not rotated with the item._

* If disabled, padding will rotate with the item's orientation
* Useful for maintaining consistent spacing regardless of rotation

***

#### Warnings and Errors

Controls warning messages when there are more or fewer bins than input points.

**Quiet Too Many Bins Warning**

_When enabled, suppresses warnings if there are more bins than input points._

* Prevents cluttering the log with unimportant messages

**Quiet Too Few Bins Warning**

_When enabled, suppresses warnings if there are fewer bins than input points._

* Useful when you expect some items to be discarded due to lack of bins
