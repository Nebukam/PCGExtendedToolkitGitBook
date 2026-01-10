---
description: 'In editor :: PCGEx | Data Filter : Bounds'
icon: circle-dashed
---

# Data Bounds

{% hint style="info" %}
This page was generated from the source code. It should properly capture what the subnode does, but still needs to be proofread by a human.
{% endhint %}

> Tests whether a collection's bounds meet specific criteria based on various aspects like volume, size, or ratios.

#### How It Works

This subnode examines the spatial characteristics of a collection's bounding box and checks if they match your specified conditions. It calculates a measurement from the bounds—such as total volume, size along an axis, or a ratio between two axes—and compares that value to a threshold. If the comparison passes, the subnode returns true; otherwise, it returns false. You can also choose to invert this result so that matching collections are excluded instead of included.

#### Configuration

<details>

<summary><strong>Operand A</strong><br><em>The aspect of the bounds to measure.</em></summary>

The primary measurement to extract from the collection’s bounding box.

**Values**:

* **Extents**: The full extent of the bounds in each axis.
* **Min**: The minimum point of the bounds.
* **Max**: The maximum point of the bounds.
* **Size**: The size of the bounds along each axis.
* **Volume**: The total volume of the bounds.
* **Ratio**: The ratio between two axes (requires a Sub Operand).
* **Ratio (Sorted)**: The ratio of the largest to smallest axis (e.g., max / min).

</details>

<details>

<summary><strong>Sub Operand</strong><br><em>The component of the selected aspect to use.</em></summary>

Used when Operand A is set to Extents, Min, Max, or Size. Determines which axis or component to extract.

**Values**:

* **Length**: The total length of the vector.
* **Length Squared**: The squared length of the vector (faster computation).
* **X**: The X component.
* **Y**: The Y component.
* **Z**: The Z component.

</details>

<details>

<summary><strong>Ratio</strong><br><em>The axes to compute the ratio from.</em></summary>

Used when Operand A is set to Ratio or Ratio (Sorted). Specifies which two axes to use for computing the ratio.

**Values**:

* **XY**: X divided by Y.
* **XZ**: X divided by Z.
* **YZ**: Y divided by Z.
* **YX**: Y divided by X.
* **ZX**: Z divided by X.
* **ZY**: Z divided by Y.

</details>

<details>

<summary><strong>Operand B</strong><br><em>The threshold value to compare against.</em></summary>

The target value used in the comparison. This can be a fixed number or a dynamic input from another node.

</details>

<details>

<summary><strong>Invert</strong><br><em>Invert the result of this filter.</em></summary>

When enabled, the outcome of the comparison is flipped. If the condition would pass, it fails, and vice versa.

</details>

#### Usage Example

You want to filter out collections that are too flat in shape. Set Operand A to "Ratio (Sorted)", Sub Operand to "Length", and Ratio to "XY". Then set Operand B to 0.1. This will include only collections where the ratio of the largest axis to the smallest is greater than 0.1, effectively excluding very flat or elongated shapes.

#### Notes

* The filter works on the bounding box of the collection.
* For performance reasons, using "Length Squared" instead of "Length" can be faster when comparing large datasets.
* When using "Ratio (Sorted)", it computes the maximum axis divided by the minimum axis to avoid negative or zero ratios.
