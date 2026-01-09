---
description: 'In editor :: PCGEx | Picker : Constant'
icon: circle-dashed
---

# Picker : Constant

{% hint style="info" %}
This page was generated from the source code. It should properly capture what the node does, but still needs to be proofread by a human.
{% endhint %}

> A Picker that has a single value.

#### Overview

The Picker : Constant subnode selects a specific point or index from a dataset using a fixed value. It's useful when you want to consistently pick one item, such as the first, last, or a specific numbered point in a sequence.

This node is typically used as a subnode for other processing nodes that need to select specific data points, like cherry-picking or sampling operations.

{% hint style="info" %}
Connects to **Picker** pins on nodes that support index-based selection.
{% endhint %}

#### How It Works

This Picker selects one or more indices from an input set of data using a constant value. It supports both discrete (integer) and relative (floating-point) indexing.

* If **DiscreteIndex** is used, it directly picks the point at that position in the dataset.
  * Positive values select from the start (0 = first point)
  * Negative values select from the end (-1 = last point)
* If **RelativeIndex** is used, it treats the value as a normalized percentage of the dataset size.
  * 0.0 = first point
  * 1.0 = last point
  * 0.5 = middle point

The node supports different handling strategies for out-of-bounds indices, which can be configured in the picker settings.

<details>

<summary>Inputs</summary>

* **Points**: The dataset of points to pick from.
* **Picker**: Optional input for additional picker configuration or override behavior.

</details>

<details>

<summary>Outputs</summary>

* **Picker**: A set of indices that were selected based on the constant value.

</details>

#### Configuration

***

**DiscreteIndex**

_The index of the point to select, using discrete (integer) values._

Use positive numbers to count from the start of the dataset and negative numbers to count from the end. For example:

* `0` selects the first point.
* `-1` selects the last point.

When enabled, this setting overrides **RelativeIndex** if both are configured.

**RelativeIndex**

_The index of the point to select, using relative (floating-point) values._

This value is interpreted as a percentage of the dataset size:

* `0.0` = first point
* `0.5` = middle point
* `1.0` = last point

When enabled, this setting overrides **DiscreteIndex** if both are configured.

**Config**

_Picker properties_

This section allows you to configure how the picker behaves when selecting indices, including handling of out-of-bounds values and index normalization.

#### Usage Example

To always select the third point in a dataset:

1. Set **DiscreteIndex** to `2` (zero-based indexing).
2. Connect this Picker subnode to a cherry-pick or sampling node that needs a fixed selection.

To always select the middle point of a dataset:

1. Set **RelativeIndex** to `0.5`.
2. Connect this Picker subnode to a node that requires a central selection.

#### Notes

* The picker supports both positive and negative indices for discrete selection.
* Relative indexing is useful when you want to pick a point based on percentage rather than absolute position.
* Out-of-bounds handling can be configured in the parent picker settings to control behavior when an index exceeds dataset bounds.
