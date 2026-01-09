---
description: 'In editor :: PCGEx | Data Filter : Bounds'
icon: circle-dashed
---

# Data Bounds

{% hint style="danger" %}
This documentation has been AI-generated from the source code and may not be 100% accurate.
{% endhint %}

> Tests whether a collection's bounds meet specific criteria based on various measurable aspects.

### Overview

This filter factory evaluates the geometric bounds of a point collection and determines if they match certain conditions. It's commonly used in procedural generation workflows to selectively process or exclude collections based on their size, shape, or spatial extent.

{% hint style="info" %}
Connects to **Filter** pins on processing nodes like **Data Filter**, **Data Prune**, or **Data Split**.
{% endhint %}

### How It Works

This filter examines the bounding box of a point collection and compares one of its measurable aspects against a target value. The comparison can be any standard mathematical relationship (equal, greater than, less than, etc.). You can test aspects like volume, size ratios, or individual axis extents.

### Configuration

***

#### General

**Operand A**

_What aspect of the bounds to test._

Selects which part of the collection's bounds to measure and compare.

**Values**:

* **Extents**: The full extent of the bounding box along each axis (X, Y, Z)
* **Min**: The minimum point of the bounding box
* **Max**: The maximum point of the bounding box
* **Size**: The overall size of the bounding box (width, height, depth)
* **Volume**: The total volume of the bounding box
* **Ratio**: The ratio between two axes (e.g., X/Y)
* **Ratio (Sorted)**: The ratio between the largest and smallest axis extents

**Sub Operand**

_What component of the selected aspect to use._

Only visible when Operand A is set to Extents, Min, Max, or Size.

**Values**:

* **Length**: The overall length of the component
* **Length Squared**: The squared length (faster computation)
* **X**: The X component value
* **Y**: The Y component value
* **Z**: The Z component value

**Ratio**

_Which axis ratio to test._

Only visible when Operand A is set to Ratio or Ratio (Sorted).

**Values**:

* **XY**: X divided by Y
* **XZ**: X divided by Z
* **YZ**: Y divided by Z
* **YX**: Y divided by X
* **ZX**: Z divided by X
* **ZY**: Z divided by Y

**Operand B**

_The target value to compare against._

This defines the threshold or reference value for comparison.

Use either a constant value or an attribute from your point data. You can specify the comparison type (equal, greater than, etc.).

**Invert the result of this filter**

_When enabled, points that would pass the test will fail, and vice versa._

### Usage Example

You want to only process collections that are large enough to contain meaningful detail but not too large to cause performance issues.

1. Set **Operand A** to **Volume**
2. Set **Operand B** to a constant value of `1000`
3. Choose comparison type **EqualOrGreater** (volume >= 1000)
4. Connect this filter to a **Data Filter** node
5. This will pass only collections with a volume of at least 1000 cubic units

### Notes

* The bounds are calculated based on the points' positions in world space.
* For ratio comparisons, the filter uses the absolute values of axes.
* When using **Ratio (Sorted)**, it always returns the largest axis divided by the smallest axis.
* You can combine multiple filters to create complex conditions (e.g., volume > 100 AND aspect ratio < 5).
* This filter is particularly useful for culling collections that are too small or too large for your scene's requirements.

### Inputs

* **Collection**: The point collection to evaluate
* **Filter**: Connection point for applying the filter logic

### Outputs

* **Pass**: Output for collections that meet the filter criteria
* **Fail**: Output for collections that do not meet the filter criteria
