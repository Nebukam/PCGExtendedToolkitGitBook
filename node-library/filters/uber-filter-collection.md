---
description: 'In editor :: PCGEx | Uber Filter (Collection)'
icon: scrubber
---

# Uber Filter (Collection)

{% hint style="info" %}
This page was generated from the source code. It should properly capture what the node does, but still needs to be proofread by a human.
{% endhint %}

> Filter entire collections based on multiple rules & conditions.

#### Overview

This node evaluates collections of points and determines whether they meet specified filtering criteria. It can be used to separate data into "inside" and "outside" groups, or to write a result directly to the input points. This is useful for organizing procedural content by logical groupings or applying conditional logic across entire sets of data.

It connects to point inputs and outputs, allowing it to process multiple collections simultaneously.

{% hint style="info" %}
Connects to **point inputs** and supports **multiple input pins**.\
Subnode: Point Filters
{% endhint %}

#### How It Works

This node evaluates each collection of points against a set of filter rules defined by subnodes. Based on the selected mode, it decides whether the entire collection passes or fails the filters:

* **All**: All points in a collection must pass the filters for the collection to be considered "inside."
* **Any**: At least one point in a collection must pass the filters for the collection to be considered "inside."
* **Partial**: A specified number or proportion of points in a collection must pass the filters for the collection to be considered "inside."

For partial mode, you can define whether the threshold is based on a relative value (0–1) or an absolute count. The comparison operator determines how the threshold is evaluated against the actual number of passing points.

The node supports optional inversion of the filter result via the **Swap** toggle, which flips the inside/outside classification.

<details>

<summary>Inputs</summary>

* Point data collections that will be filtered.
* Optional subnode filters to apply to each point in a collection.

</details>

<details>

<summary>Outputs</summary>

* If not using "Write Result to Point" mode, outputs two sets of points:
  * Points that passed the filter (inside)
  * Points that failed the filter (outside)
* If enabled, writes a boolean result directly to each point's data.

</details>

#### Configuration

***

**Mode**

_Controls how the node evaluates collections._

When set to **All**, only collections where every point passes the filters are considered "inside."\
When set to **Any**, collections with at least one passing point are considered "inside."\
When set to **Partial**, a specific number or proportion of points must pass for the collection to be considered "inside."

**Values**:

* **All**: All points must pass the filters.
* **Any**: At least one point must pass the filter.
* **Partial**: A given amount of points must pass the filter.

***

**Measure**

_Partial value type._

Controls whether the threshold for partial mode is interpreted as a relative proportion (0 to 1) or an absolute count.

**Values**:

* **Relative**: Threshold is a proportion between 0 and 1.
* **Discrete**: Threshold is an absolute number of points.

***

**Comparison**

_Partial value comparison._

Determines how the threshold is compared to the actual number of passing points in a collection.

**Values**:

* **Strictly Equal**: Exactly matches the threshold.
* **Strictly Not Equal**: Must not match the threshold.
* **Equal or Greater**: Must be greater than or equal to the threshold.
* **Equal or Smaller**: Must be less than or equal to the threshold.
* **Strictly Greater**: Must be strictly greater than the threshold.
* **Strictly Smaller**: Must be strictly smaller than the threshold.
* **Nearly Equal**: Matches within a tolerance range.
* **Nearly Not Equal**: Does not match within a tolerance range.

***

**DblThreshold**

_Partial value type._

The threshold value used when **Measure** is set to **Relative**. This defines how many points (as a proportion) must pass the filter for partial mode.

**Range**: 0 to 1\
**Default**: 0.5

***

**IntThreshold**

_Partial value type._

The threshold value used when **Measure** is set to **Discrete**. This defines how many points must pass the filter for partial mode.

**Range**: 0 and above\
**Default**: 10

***

**Tolerance**

_Rounding mode for relative measures._

Controls how closely a value must match when using "Nearly Equal" or "Nearly Not Equal" comparisons in partial mode.

**Default**: `DBL_COMPARE_TOLERANCE`

***

**bSwap**

_Invert the filter result._

When enabled, the node flips the classification of inside and outside points. Points that would normally be considered "inside" are marked as "outside" and vice versa.

#### Usage Example

1. Create a collection of points representing terrain features.
2. Add a subnode filter to identify points with elevation above 100 units.
3. Set the mode to **Partial**.
4. Choose **Relative** measure and set threshold to 0.7.
5. Use **Equal or Greater** comparison.
6. This will classify collections where at least 70% of points pass the elevation filter as "inside."

#### Notes

* The node supports multiple input pins, allowing you to process several point collections simultaneously.
* When using partial mode with relative thresholds, ensure that your collection sizes are large enough to provide meaningful comparisons.
* Use **Swap** to reverse filter logic when needed for complex conditional setups.
