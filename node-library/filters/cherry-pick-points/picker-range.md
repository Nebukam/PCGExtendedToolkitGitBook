---
description: 'In editor :: PCGEx | Picker : Range'
icon: circle-dashed
---

# Picker : Range

{% hint style="info" %}
## AI-generated page -- to be reviewed 
While not 100% accurate, it should properly capture what the node/factory does. It stills needs to be proofread by a human.
{% endhint %}

> A Picker that selects a range of values from a list or sequence.

### Overview

This node allows you to define a range of indices to pick from a collection of data points. It's useful when you want to select a continuous subset of items, such as picking the first 5 points, or the last 3 points, or any arbitrary slice in between. You can specify both start and end points for your range, and choose whether to treat these values as absolute indices or relative percentages.

{% hint style="info" %}
The Picker : Range works with indexed data, such as point sequences or arrays of data. It's commonly used in conjunction with other nodes that generate or manipulate ordered collections.
{% endhint %}

<details>

<summary>Inputs</summary>

* **Source** (optional): A collection of points or data to pick from.

</details>

<details>

<summary>Outputs</summary>

* **Picker** (output pin): The resulting selection of indices based on the defined range.

</details>

### Properties Overview

This node lets you define a range of indices to select. You can choose between absolute and relative indexing modes, and specify start and end points for your selection.

***

#### General

Controls how the range is interpreted and applied.

**Discrete Start Index**

_The starting index of the range in absolute terms._

* Determines where the selection begins.
* Use negative values to count from the end (e.g., -1 selects the last item).
* Example: If you have 10 items and set this to 2, the selection starts at the third item.

**Relative Start Index**

_The starting index of the range as a percentage of total items._

* When enabled, values are treated as percentages between 0 and 1.
* Use negative values to count from the end (e.g., -0.5 selects halfway from the end).
* Example: If you have 10 items and set this to 0.25, the selection starts at the 25% mark.

**Discrete End Index**

_The ending index of the range in absolute terms._

* Determines where the selection ends.
* Use negative values to count from the end (e.g., -1 selects the last item).
* Example: If you have 10 items and set this to 7, the selection ends at the eighth item.

**Relative End Index**

_The ending index of the range as a percentage of total items._

* When enabled, values are treated as percentages between 0 and 1.
* Use negative values to count from the end (e.g., -0.5 selects halfway from the end).
* Example: If you have 10 items and set this to 0.75, the selection ends at the 75% mark.

**Treat As Normalized**

_When enabled, start and end indices are interpreted as relative values between 0 and 1._

* When disabled, indices are treated as absolute positions.
* Example: With 10 items, setting Start to 0.25 and End to 0.75 selects the middle 50% of items.

### Notes

* The range is inclusive on both ends, meaning both start and end indices are included in the selection.
* Negative indices count from the end of the list (e.g., -1 is the last item).
* If your range extends beyond the available data, it will be clamped to valid bounds.
* This node works best with ordered data such as point sequences where index order matters.
