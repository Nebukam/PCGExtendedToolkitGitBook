---
description: 'In editor :: PCGEx | Picker : Range'
icon: circle-dashed
---

# Picker : Range

{% hint style="warning" %}
This page was generated from the source code. It captures what the node does, but still needs some serious  proofreading.
{% endhint %}

> A Picker that selects a range of values.

#### How It Works

The Picker : Range subnode defines a continuous segment of data to extract from a dataset. It calculates which items to select based on a starting point and an ending point, either as absolute positions or as percentages of the total dataset size. You can choose to select from the beginning or end of your data using negative numbers.

When you define a range, it first determines whether your start and end points are given as exact indices (like "the 10th item") or as proportions (like "halfway through"). If you use negative values, they count backwards from the end of the list. For example, -1 means the last item, while -5 means the fifth-to-last item.

Once it figures out where the range begins and ends, it generates a list of valid indices within that span. These indices are then passed to the processing node that uses this subnode for selection. The system also handles cases where indices might go beyond the dataset boundaries by using settings like clamping or tiling.

#### Configuration

<details>

<summary><strong>DiscreteStartIndex</strong><br><em>Use negative values to select from the end.</em></summary>

Defines the starting index of the range as an absolute position in the dataset. Negative values count from the end (e.g., -1 is the last item).

</details>

<details>

<summary><strong>RelativeStartIndex</strong><br><em>Use negative values to select from the end.</em></summary>

Defines the starting index of the range as a percentage of the dataset size. For example, 0.5 means half-way through the list. Negative values count from the end (e.g., -0.2 means 20% from the end).

</details>

<details>

<summary><strong>DiscreteEndIndex</strong><br><em>Use negative values to select from the end.</em></summary>

Defines the ending index of the range as an absolute position in the dataset. Negative values count from the end (e.g., -1 is the last item).

</details>

<details>

<summary><strong>RelativeEndIndex</strong><br><em>Use negative values to select from the end.</em></summary>

Defines the ending index of the range as a percentage of the dataset size. For example, 0.8 means 80% through the list. Negative values count from the end (e.g., -0.3 means 30% from the end).

</details>

<details>

<summary><strong>Config</strong><br><em>Picker properties</em></summary>

The main configuration block for the picker settings.

</details>

#### Usage Example

Suppose you have a point cloud of 100 points and want to select the middle 20 points (indices 40 to 59). You would set:

* **DiscreteStartIndex**: 40
* **DiscreteEndIndex**: 59

Alternatively, if you want to select the last 10 points of that cloud, you could use:

* **DiscreteStartIndex**: -10
* **DiscreteEndIndex**: -1

This would select indices 90 through 99.

#### Notes

* The range is inclusive at both ends.
* Negative indices are interpreted as positions from the end of the dataset.
* Relative indices are normalized between 0 and 1, where 0 is the start and 1 is the end.
* This subnode works best when used with processing nodes that support index-based selection.
