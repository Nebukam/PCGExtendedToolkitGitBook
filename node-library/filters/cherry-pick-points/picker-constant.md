---
description: 'In editor :: PCGEx | Picker : Constant'
icon: circle-dashed
---

# Picker : Constant

{% hint style="warning" %}
This page was generated from the source code. It captures what the node does, but still needs some serious  proofreading.
{% endhint %}

> A Picker subnode that selects a single index from a set of data.

#### How It Works

This Picker subnode chooses one specific item from a collection of points, edges, or other data. It uses either a direct position number (discrete mode) or a fraction between 0 and 1 (relative mode) to determine which item to select. The selected item is then passed on as the output.

In discrete mode, each number directly maps to an item in the list. For example, index 2 selects the third item (starting from zero). Negative numbers count backwards from the end of the list — so -1 picks the last item.

In relative mode, values are treated as percentages. A value of 0.5 means "the middle item," while 0 is the first and 1 is the last. The system also supports negative values in this mode to select items from the end of the list.

#### Configuration

<details>

<summary><strong>DiscreteIndex</strong><br><em>Use negative values to select from the end.</em></summary>

Sets the position of the item to pick using a direct index. Index 0 is the first item, and negative numbers count backwards from the end. For example, an index of -1 picks the last item in the set.

</details>

<details>

<summary><strong>RelativeIndex</strong><br><em>Use negative values to select from the end.</em></summary>

Sets the position of the item to pick as a value between 0 and 1. A value of 0 selects the first item, 1 selects the last, and 0.5 selects the middle. Negative values are also supported for selecting items from the end.

</details>

<details>

<summary><strong>Config</strong><br><em>Picker properties</em></summary>

The picker configuration settings that define how the index is interpreted and applied.

</details>

#### Usage Example

To select the third point in a point set:

1. Set **DiscreteIndex** to 2 (0-based indexing)
2. Connect this subnode to a Cherry Pick Points node
3. The node will return the third point from the input data

To select the middle point of a path:

1. Set **RelativeIndex** to 0.5
2. Connect this subnode to a Cherry Pick Points node
3. The node will return the point at the center of the path

#### Notes

* When using relative indexing, fractional values are rounded to the nearest index.
* Negative indices count from the end of the dataset (e.g., -1 is the last item).
* This subnode works best when the input data set has a consistent size or when you know the expected range of indices.
