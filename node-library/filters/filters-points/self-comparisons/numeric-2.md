---
description: 'In editor :: PCGEx | Filter : Segment Length'
icon: circle-dashed
---

# Segment Length

{% hint style="info" %}
This page was generated from the source code. It should properly capture what the node does, but still needs to be proofread by a human.
{% endhint %}

> Creates a filter definition that compares the distance between the tested point and another inside the same dataset.

#### Overview

This subnode filters points based on the length of the segment formed between the tested point and another point in the same dataset. It's useful for identifying points that are either too close or too far from a reference point, which can be helpful in path generation, terrain modeling, or procedural mesh creation.

It connects to **Filter** pins on processing nodes, where it defines a condition that points must meet to pass through. You can configure how the comparison is made, what distance threshold is used, and which point is used as the reference for measuring the segment length.

{% hint style="info" %}
Connects to Filter pins on processing nodes.
{% endhint %}

#### How It Works

This filter evaluates a segment length by comparing the distance between two points in the same dataset. The tested point is compared against another point, which can be selected based on either a fixed index offset or a specific index value from an attribute.

It calculates the distance (or squared distance) between these two points and compares it to a threshold using a comparison operator. If the result matches the filter's condition, the point passes the filter.

The reference point is determined by:

1. **Index Mode**: Either "Offset" (e.g., index + 1 = next point) or "Pick" (a specific index).
2. **Index Value**: Either a constant value or an attribute value.
3. **Index Safety**: How to handle out-of-bounds indices, such as clamping, tiling, or ignoring.

If the reference point is invalid (e.g., trying to access the previous point of the first point in a path), it falls back to either "Pass" or "Fail".

<details>

<summary>Inputs</summary>

* Points from a single dataset
* Optional attribute for threshold value (if set to read from attribute)
* Optional attribute for index value (if set to read from attribute)

</details>

<details>

<summary>Outputs</summary>

* Boolean result indicating whether the point passes the filter based on segment length

</details>

#### Configuration

***

**ThresholdInput**

_Whether to read the threshold from an attribute on the point or a constant._

Controls if the comparison threshold is a fixed value or taken from a point attribute.

**Values**:

* **Constant**: Use a fixed numeric value.
* **Attribute**: Read the threshold from a point attribute.

**ThresholdConstant**

_Threshold_

The fixed distance value used for comparison when ThresholdInput is set to Constant.

**bCompareAgainstSquaredDistance**

\_ └─ Squared Distance\_

When enabled, compares against the squared distance instead of the actual distance. This can improve performance by avoiding square root calculations.

**Comparison**

_Comparison check_

The comparison operator used to evaluate the segment length against the threshold.

**Values**:

* **StrictlyGreater**: The segment length must be greater than the threshold.
* **StrictlyLess**: The segment length must be less than the threshold.
* **Equal**: The segment length must equal the threshold.
* **NotEqual**: The segment length must not equal the threshold.
* **NearlyEqual**: The segment length is approximately equal to the threshold (within tolerance).
* **NearlyNotEqual**: The segment length is approximately not equal to the threshold (outside tolerance).

**Tolerance**

_Rounding mode for approx. comparison modes_

Used only when Comparison is set to NearlyEqual or NearlyNotEqual. Defines how close the values must be to be considered equal.

**IndexMode**

_Index mode_

Determines how the index of the reference point is interpreted.

**Values**:

* **Pick**: The index value directly refers to a specific point.
* **Offset**: The index value is an offset from the current point's index (e.g., 1 = next point, -1 = previous point).

**CompareAgainst**

_Type of OperandB_

Controls whether the reference point index is a fixed value or taken from an attribute.

**Values**:

* **Constant**: Use a fixed numeric index.
* **Attribute**: Read the index from a point attribute.

**IndexConstant**

_Index_

The fixed index used to select the reference point when CompareAgainst is set to Constant.

**IndexSafety**

_Index safety_

How to handle cases where the calculated index for the reference point is out of bounds (e.g., negative or beyond the dataset size).

**Values**:

* **Ignore**: Skip the comparison if the index is invalid.
* **Tile**: Wrap around to valid indices (e.g., index -1 becomes the last point).
* **Clamp**: Clamp the index to the nearest valid value (e.g., index -1 becomes 0).
* **Yoyo**: Mirror the index back and forth (e.g., index -1 becomes 1, index -2 becomes 2).

**bForceTileIfClosedLoop**

\_ └─ Tile on closed loops\_

When enabled, forces tiling behavior even if IndexSafety is set to a different mode for closed loop paths.

**InvalidPointFallback**

_What should this filter return when the point required for computing length is invalid? (i.e, first or last point)_

Controls what happens when the reference point cannot be computed (e.g., trying to get the previous point of the first point in a path).

**Values**:

* **Pass**: The point passes the filter.
* **Fail**: The point fails the filter.

**bInvert**

_Whether the result of the filter should be inverted or not. Note that this will also invert fallback results!_

When enabled, reverses the outcome of the filter (i.e., points that would pass now fail and vice versa).

#### Usage Example

You're generating a path and want to ensure segments between consecutive points are at least 50 units long. You can use this subnode with:

* ThresholdInput = Constant
* ThresholdConstant = 50
* IndexMode = Offset
* IndexConstant = 1
* Comparison = StrictlyGreater

This will filter out any point where the distance to the next point in the path is less than 50 units.

#### Notes

* Using squared distance can improve performance for comparisons that don't require the actual distance.
* The IndexSafety setting is crucial when working with paths or loops to avoid invalid index access.
* This filter works best on ordered datasets like paths or sequences of points where point indices have meaningful relationships.
