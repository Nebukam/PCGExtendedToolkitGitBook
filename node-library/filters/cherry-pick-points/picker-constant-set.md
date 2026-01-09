---
description: 'In editor :: PCGEx | Picker : Indices from Set'
icon: circle-dashed
---

# Picker : Indices from Set

{% hint style="warning" %}
## AI-generated page - To be reviewed. 
While not 100% accurante, it should properly capture what it does. It stills needs to be reviewed and proofread by a human.
{% endhint %}

> A picker that reads lists of indices from attributes and uses them to select points or data.

### Overview

This node allows you to define a set of indices by reading values from one or more attributes on your input data. It's particularly useful when you want to cherry-pick specific elements from a dataset using pre-defined index lists stored in attributes. The picker can read multiple attributes and combine their values into a single list of indices.

{% hint style="info" %}
If no attribute is specified in the node details, it will automatically use the first available attribute from your input data.
{% endhint %}

<details>

<summary>Inputs</summary>

* **Points** (Required): Input point data containing attributes with index lists

</details>

<details>

<summary>Outputs</summary>

* **Picker** (Output Pin): The picker factory that can be used by other nodes to select points based on the defined indices

</details>

### Properties Overview

Controls how the node reads and processes index data from attributes.

***

#### General

Reads lists of indices from one or more attributes and uses them as a source for selection.

**Attributes**

_The list of attributes to read individual indices from._

* Each attribute should contain integer values that represent indices
* Negative values can be used to select from the end of the list (e.g., -1 selects the last element)
* Multiple attributes can be specified to combine different index sets

**Example**: If you have an attribute named "PickList" with values \[0, 2, 4] and another named "ExtraPicks" with \[1, 3], the picker will use indices \[0, 2, 4, 1, 3] for selection.

### Notes

* This node is useful for creating dynamic pickers from existing data
* You can combine multiple attributes to build complex index sets
* The picker will automatically handle out-of-bounds indices based on the safety mode you set in your picker configuration
* Consider using this node when you need to select specific points or elements based on pre-defined lists stored in attributes
