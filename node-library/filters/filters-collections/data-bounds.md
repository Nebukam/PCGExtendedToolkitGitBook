---
description: 'In editor :: PCGEx | Data Filter : Bounds'
icon: circle-dashed
---

# Data Bounds

{% hint style="info" %}
This page was generated from the source code. It should properly capture what the node does, but still needs to be proofread by a human.
{% endhint %}

> Test an aspect of the collection' bounds.

#### Overview

This filter subnode evaluates specific aspects of a point collection's bounding volume and determines whether the collection passes or fails based on a comparison with a target value. It is useful for filtering collections by their size, shape, or spatial extent in procedural content generation workflows.

It connects to Filter pins on processing nodes that accept filters, allowing you to conditionally process or exclude collections based on their bounds.

{% hint style="info" %}
Connects to **Filter** pins on processing nodes.
{% endhint %}

#### How It Works

This filter evaluates a selected aspect of the collection's bounding volume (such as its volume, size, or ratio) and compares it against a target value using a comparison operator. The result determines whether the collection passes the filter.

The process involves:

1. Calculating the specified aspect of the collection’s bounds (e.g., volume, size, or ratio).
2. Comparing this calculated value to a fixed or dynamic operand B.
3. Returning true if the comparison passes, false otherwise.
4. Optionally inverting the result based on the invert flag.

<details>

<summary>Inputs</summary>

* Point collection data (from a source or previous processing node)

</details>

<details>

<summary>Outputs</summary>

* Boolean result indicating whether the collection meets the filter criteria

</details>

#### Configuration

***

**Operand A**

_The aspect of the bounds to evaluate._

This setting defines which part of the collection's bounding volume is measured. For example, you can test the total volume, size along a specific axis, or the ratio between dimensions.

**Values**:

* **Extents**: The full extent of the bounding box in each dimension.
* **Min**: The minimum coordinate values of the bounds.
* **Max**: The maximum coordinate values of the bounds.
* **Size**: The size of the bounds along each axis.
* **Volume**: The total volume of the bounding box.
* **Ratio**: The ratio between two axes (e.g., X/Y).
* **Ratio (Sorted)**: The ratio between the largest and smallest axes.

**Sub Operand**

_Sub-operand for certain aspects like Extents, Min, Max, or Size._

When Operand A is set to Extents, Min, Max, or Size, this setting specifies which component of that aspect to use. For example, if you select "Size", you can choose whether to measure the X, Y, Z, or total length.

**Values**:

* **Length**: Total length of the vector.
* **Length Squared**: Squared length (for performance).
* **X**: X component only.
* **Y**: Y component only.
* **Z**: Z component only.

**Ratio**

_Ratio to compute for aspects like AspectRatio._

When Operand A is set to "Ratio" or "Ratio (Sorted)", this defines which two axes are used in the ratio calculation. For example, XY means X divided by Y.

**Values**:

* **XY**: X / Y
* **XZ**: X / Z
* **YZ**: Y / Z
* **YX**: Y / X
* **ZX**: Z / X
* **ZY**: Z / Y

**Operand B**

_Target value for comparison._

This is the value against which the selected aspect of the bounds is compared. It can be a fixed number or a dynamic value from an input pin.

**bInvert**

_When enabled, inverts the result of this filter._

If enabled, points that would normally pass the filter will fail, and vice versa.

**Config**

_Filter configuration settings._

This contains all the above settings grouped together for use in the filter subnode. It allows you to define how the bounds are evaluated and compared.

#### Usage Example

You want to only process point collections that have a volume greater than 1000 units. Set Operand A to Volume, Operand B to 1000, and leave the comparison operator as "Greater Than". This will filter out any collection with a volume less than or equal to 1000.

#### Notes

* The filter evaluates bounds in world space.
* For performance-sensitive workflows, avoid using "Length Squared" unless you're comparing against another squared value.
* When using "Ratio (Sorted)", the largest axis is divided by the smallest axis for a normalized ratio.
