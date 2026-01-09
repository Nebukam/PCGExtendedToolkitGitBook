---
description: 'In editor :: PCGEx | Picker : Ranges from Set'
icon: circle-dashed
---

# Picker : Ranges from Set

{% hint style="info" %}
This page was generated from the source code. It should properly capture what the node does, but still needs to be proofread by a human.
{% endhint %}

> A Picker that accepts lists of ranges in the form of FVector2, read from one or more attribute.

#### Overview

This node allows you to define a set of index ranges using attributes containing FVector2 values. These ranges specify start and end points for selecting indices from a dataset. It's useful when you want to cherry-pick specific segments or portions of data based on pre-defined ranges stored in attributes.

It reads one or more attributes that contain pairs of integers or floats representing start and end indices. These are interpreted as ranges, and the node will select all indices within those ranges. You can use negative values to select from the end of the dataset.

{% hint style="info" %}
Connects to **Picker** processing nodes.
{% endhint %}

#### How It Works

This node operates by reading one or more attributes that contain FVector2 values, where each vector represents a range with a start and end index. For each attribute specified:

1. It reads the FVector2 values as ranges (start, end).
2. It converts these ranges into a list of indices to be picked.
3. If the indices are negative, they are interpreted as positions from the end of the dataset.
4. The node then compiles all selected indices into a single set for use in downstream picker operations.

The ranges can be either discrete (integer) or relative (floating-point), depending on how you configure the picker settings. For relative values, the indices are treated as percentages and scaled to match the size of your dataset.

<details>

<summary>Inputs</summary>

* **Points**: The input point data that contains the attributes with range information.
* **Attributes**: One or more attributes containing FVector2 values representing ranges.

</details>

<details>

<summary>Outputs</summary>

* **Picks**: A set of indices selected from the input data based on the defined ranges in the attributes.

</details>

#### Configuration

***

**Attributes**

_**List of attributes to read ranges of indices from FVector2. Use negative values to select from the end.**_

Specifies which attribute(s) contain the range data. Each attribute should store FVector2 values, where the X component is the start index and Y component is the end index.

You can specify multiple attributes to combine different sets of ranges into a single picker output. If no attribute is specified in the details, it will use the first available one.

#### Usage Example

1. Create a point grid with 100 points.
2. Add an attribute to store ranges (e.g., `RangeData`) as FVector2 values.
3. Populate this attribute with values like `(0, 5)` and `(20, 30)` to define two index ranges.
4. Connect the point data to a **Picker : Ranges from Set** node.
5. Assign the `RangeData` attribute to the node's input.
6. The picker will select indices 0 through 5 and 20 through 30 from the point grid.

#### Notes

* Negative index values are interpreted as positions from the end of the dataset (e.g., -1 refers to the last element).
* If no attributes are specified, the node defaults to using the first available attribute.
* This node is particularly useful for selecting specific segments or regions in data sets where ranges are already defined.
