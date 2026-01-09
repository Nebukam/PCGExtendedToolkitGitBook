---
description: 'In editor :: PCGEx | Picker : Constant'
icon: circle-dashed
---

# Picker : Constant

{% hint style="info" %}
### AI-generated page -- to be reviewed

While not 100% accurate, it should properly capture what the node/factory does. It stills needs to be proofread by a human.
{% endhint %}

> A Picker that selects a single index or relative position from a collection of data.

### Overview

This node allows you to pick one specific item from a set of data using either an absolute index or a relative position. It's useful when you want to consistently select the same item regardless of how many items are in your dataset, such as always picking the first, last, or a specific middle element.

{% hint style="info" %}
This picker is ideal for selecting a fixed item from a list or array, rather than randomizing or sampling from it.
{% endhint %}

<details>

<summary>Inputs</summary>

* **Source** (Points): Expects a collection of points to pick from.

</details>

<details>

<summary>Outputs</summary>

* **Picker** (Points): Outputs the selected point(s) based on the configured index or relative position.

</details>

### Properties Overview

This node selects one item using either an absolute index or a normalized relative value.

***

#### General

Controls how the picker chooses which item to select.

**Discrete Index**

_Selects a specific item by its position in the list._

* When set to 0, it picks the first item.
* Negative values count from the end (e.g., -1 selects the last item).
* If the index is out of bounds, behavior depends on the safety mode selected.

**Values**:

* **0**: Selects the first item
* **1**: Selects the second item
* **-1**: Selects the last item

**Relative Index**

_Selects a specific item by its normalized position in the list._

* Value ranges from 0.0 to 1.0, where 0.0 is the first item and 1.0 is the last.
* Useful when you want to pick items based on percentage or proportion.
* If the value is outside the 0.0–1.0 range, behavior depends on the safety mode selected.

**Values**:

* **0.0**: Selects the first item
* **0.5**: Selects the middle item
* **1.0**: Selects the last item

**Treat As Normalized**

_When enabled, the index is treated as a relative value between 0 and 1._

* When enabled, the picker uses `RelativeIndex` instead of `DiscreteIndex`.
* When disabled, the picker uses `DiscreteIndex`.

### Notes

* This node works best when you know exactly which item you want to pick from your dataset.
* For example, if you have 10 points and set Discrete Index to 5, it will always select the 6th point (zero-indexed).
* If you're working with dynamic data where the number of items changes frequently, consider using a relative index (0.0–1.0) for more consistent results.
* The picker supports negative indices when `Treat As Normalized` is disabled, allowing you to select from the end of the list.
