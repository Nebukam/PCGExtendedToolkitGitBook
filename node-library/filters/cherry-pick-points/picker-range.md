---
description: 'In editor :: PCGEx | Picker : Range'
icon: circle-dashed
---

# Picker : Range

{% hint style="info" %}
This page was generated from the source code. It should properly capture what the node does, but still needs to be proofread by a human.
{% endhint %}

> A Picker that selects a range of values.

#### Overview

This subnode defines a range of indices or values to select from a dataset. It's commonly used in filtering operations where you want to pick a subset of points, edges, or other data elements based on their position or value. The selected range can be specified using either discrete integer indices or relative decimal positions, allowing for flexible selection logic.

This subnode connects to Picker nodes that require a range-based selection mechanism. It's typically used in conjunction with filtering or sampling operations to extract specific parts of your dataset.

{% hint style="info" %}
Connects to **Picker** processing nodes.
{% endhint %}

#### How It Works

This subnode selects a continuous range of items from a dataset by defining start and end points. The selection process works as follows:

1. It evaluates the start and end indices, which can be either discrete (integer) or relative (decimal).
2. For discrete indices, positive values count from the beginning of the dataset, while negative values count from the end.
3. For relative indices, decimal values are interpreted as percentages of the dataset size (e.g., 0.5 = halfway through).
4. It then generates a list of all valid indices between the start and end points.
5. The resulting set of indices is used to filter or sample the input data.

The selection logic handles out-of-bounds cases by applying a safety mode, such as clamping or tiling, depending on your configuration.

<details>

<summary>Inputs</summary>

Expects a dataset with indexed elements (points, edges, etc.) that can be selected using integer indices.

</details>

<details>

<summary>Outputs</summary>

Produces a set of indices that define the range to be picked from the input data. These indices are used by downstream nodes for filtering or sampling.

</details>

#### Configuration

***

**DiscreteStartIndex**

_The starting index of the range, using discrete integer values._

Use positive numbers to select from the beginning of the dataset and negative numbers to select from the end.

**RelativeStartIndex**

_The starting index of the range, using relative decimal values (0.0 to 1.0)._

Values are interpreted as percentages of the dataset size. For example, 0.25 selects a quarter of the way through the data.

**DiscreteEndIndex**

_The ending index of the range, using discrete integer values._

Use positive numbers to select from the beginning of the dataset and negative numbers to select from the end.

**RelativeEndIndex**

_The ending index of the range, using relative decimal values (0.0 to 1.0)._

Values are interpreted as percentages of the dataset size. For example, 0.75 selects three-quarters of the way through the data.

#### Usage Example

Suppose you have a point cloud with 100 points and want to select points from index 20 to 40 (inclusive):

* Set `DiscreteStartIndex` to **20**
* Set `DiscreteEndIndex` to **40**

If you want to select the middle half of the dataset:

* Set `RelativeStartIndex` to **0.25**
* Set `RelativeEndIndex` to **0.75**

#### Notes

* Negative indices count from the end of the dataset (e.g., -1 is the last element).
* Relative indices are normalized between 0.0 and 1.0, where 0.0 is the first element and 1.0 is the last.
* The range selection includes both start and end indices.
* This subnode works best when used with datasets that have a consistent order or index structure.
