---
description: 'In editor :: PCGEx | Filter : Segment Length'
icon: circle-dashed
---

# Segment Length

{% hint style="danger" %}
This documentation has been AI-generated from the source code and may not be 100% accurate.
{% endhint %}

> Creates a filter definition that compares the distance between the tested point and another inside the same dataset.

### Overview

This filter evaluates whether the distance between a point and another point in the same dataset meets a specified condition. It's useful for filtering points based on their relationship to neighboring points, such as ensuring points are within a certain distance of each other or that segments between points meet specific length requirements.

{% hint style="info" %}
Connects to Filter pins on processing nodes like **Filter Points** or **Cluster Points**
{% endhint %}

### How It Works

The filter calculates the distance between:

* The current point being tested
* Another point in the dataset, determined by an index offset or specific index value

It then compares this distance against a threshold using a comparison operator. The result determines whether the point passes or fails the filter.

### Inputs and Outputs

#### Inputs

* **Filter**: Connection point for applying this filter to processing nodes
* **Source Data**: The dataset containing points to be filtered

#### Outputs

* **Pass**: Points that meet the filter criteria
* **Fail**: Points that do not meet the filter criteria

### Configuration

***

#### General

**Threshold Input**

_Whether to read the threshold from an attribute on the point or a constant._

When set to **Attribute**, you must specify which attribute to use for the threshold value. When set to **Constant**, you define a fixed numeric value.

**Values**:

* **Constant**: Uses a fixed numeric value as the threshold
* **Attribute**: Reads the threshold from an attribute on each point

**Threshold (Attr)**

_The attribute to fetch threshold from_

Only visible when "Threshold Input" is set to **Attribute**

**Threshold**

_The constant threshold value_

Only visible when "Threshold Input" is set to **Constant**

**└─ Squared Distance**

_Whether to compare against the squared distance._

When enabled, the filter uses the squared distance for performance reasons. This is useful when comparing against a squared threshold value.

**Comparison**

_The comparison operator used to evaluate the distance against the threshold._

**Values**:

* **StrictlyGreater**: Point passes if distance > threshold
* **StrictlyLess**: Point passes if distance < threshold
* **Equal**: Point passes if distance = threshold
* **NotEqual**: Point passes if distance ≠ threshold
* **NearlyEqual**: Point passes if distance ≈ threshold (within tolerance)
* **NearlyNotEqual**: Point passes if distance ≉ threshold (outside tolerance)

**Tolerance**

_The tolerance value used for approximate comparisons._

Only visible when Comparison is set to **NearlyEqual** or **NearlyNotEqual**

**Index Mode**

_How the index of the point to compare against is interpreted._

**Values**:

* **Pick**: The index represents a specific point in the dataset
* **Offset**: The index represents an offset from the current point's position

**Compare Against**

_Whether to read the comparison index from an attribute or use a constant._

When set to **Attribute**, you must specify which attribute to use for the index value. When set to **Constant**, you define a fixed numeric value.

**Values**:

* **Constant**: Uses a fixed numeric value as the index
* **Attribute**: Reads the index from an attribute on each point

**Index (Attr)**

_The attribute to fetch comparison index from_

Only visible when "Compare Against" is set to **Attribute**

**Index**

_The constant index value_

Only visible when "Compare Against" is set to **Constant**

**Index Safety**

_How to handle out-of-bounds indices._

**Values**:

* **Ignore**: Out of bounds indices are ignored (0,1,2,-1,-1,-1,...)
* **Tile**: Out of bounds indices are tiled (0,1,2,0,1,2...)
* **Clamp**: Out of bounds indices are clamped (0,1,2,2,2,2...)
* **Yoyo**: Out of bounds indices are mirrored and back (0,1,2,1,0,1...)

**└─ Tile on closed loops**

_Whether to force tile safety on closed loop paths._

When enabled, if the dataset forms a closed loop (like a circle), the filter will automatically use tile safety for index handling.

**Invalid Point Fallback**

_What should this filter return when the point required for computing length is invalid?_

This handles edge cases like the first or last point in an open path where there's no valid comparison point.

**Values**:

* **Pass**: Invalid points are considered to pass the filter
* **Fail**: Invalid points are considered to fail the filter

**Invert**

_Whether the result of the filter should be inverted._

When enabled, points that would normally pass now fail and vice versa. This also inverts the fallback behavior.

### Usage Example

Create a filter to remove points that are too close to their previous neighbor in a path:

1. Set **Compare Against** to **Constant**
2. Set **Index** to **-1** (to compare with the previous point)
3. Set **Threshold Input** to **Constant**
4. Set **Threshold** to **50**
5. Set **Comparison** to **StrictlyLess**
6. Set **Invalid Point Fallback** to **Pass** (so first points don't get filtered out)

This will remove any point that is closer than 50 units to its previous neighbor in the dataset.

### Notes

* The filter works on a single dataset, comparing each point against another point within that same dataset
* For closed loops, consider using **Tile** index safety or enabling **Tile on closed loops** for better results
* When using attribute-based thresholds or indices, ensure those attributes exist and are properly populated in your data
* The **Squared Distance** option can improve performance when working with large datasets where exact distance calculations aren't required
