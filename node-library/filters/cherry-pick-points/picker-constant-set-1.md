---
description: 'In editor :: PCGEx | Picker : Ranges from Set'
icon: circle-dashed
---

# Picker : Ranges from Set

{% hint style="danger" %}
This documentation has been AI-generated from the source code and may not be 100% accurate.
{% endhint %}

> A picker that reads lists of index ranges from attributes, where each range is defined as a FVector2.

### Overview

This node allows you to define multiple index ranges using attributes stored in your point data. Each attribute should contain FVector2 values, where the X component represents the start index and Y represents the end index of a range. These ranges are then used to select points for picking operations. It's particularly useful when you want to dynamically control which parts of your dataset are picked based on attribute values.

{% hint style="info" %}
If no attributes are specified in the node settings, it will automatically use the first available attribute from your input data.
{% endhint %}

<details>

<summary>Inputs</summary>

* **Main**: Expects point data with attributes containing FVector2 values representing ranges.

</details>

<details>

<summary>Outputs</summary>

* **Picker**: Outputs a picker that can be used by downstream nodes to select points based on the defined ranges.

</details>

### Properties Overview

This node reads index ranges from attributes and uses them to define which points to pick.

***

#### General

Controls how the node reads and interprets range data from attributes.

**Attributes**

_The list of attributes to read ranges of indices from. Each attribute should contain FVector2 values, where X is the start index and Y is the end index._

* The node will read all specified attributes and combine their ranges.
* Use negative values to select from the end of the dataset (e.g., -1 refers to the last point).
* If left empty, the node will use the first available attribute in the input data.

### Notes

* Each FVector2 in an attribute defines a range: `[X, Y]` where X is inclusive and Y is exclusive.
* Ranges can overlap or be non-contiguous; all points within any defined range will be included.
* Negative indices are supported and refer to positions from the end of the dataset (e.g., -1 = last point).
* This picker works best when used in combination with other nodes that consume pickers, such as "Cherry Pick Points" or "Filter by Picker".
* You can define multiple attributes to create complex selection patterns across your dataset.
