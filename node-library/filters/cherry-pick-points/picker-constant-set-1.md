---
description: 'In editor :: PCGEx | Picker : Ranges from Set'
icon: circle-dashed
---

# Picker : Ranges from Set

{% hint style="info" %}
This page was generated from the source code. It should properly capture what the node does, but still needs to be proofread by a human.
{% endhint %}

> A Picker that reads lists of ranges in the form of FVector2 from one or more attributes and uses them to define which indices to pick.

#### How It Works

This node processes attribute data containing pairs of numbers (FVector2 values) to define index ranges. Each pair represents a starting point and an ending point for a range of indices. The node then selects all indices that fall within these ranges, including both the start and end points.

For example, if you have a range defined as \[2, 5], it will select indices 2, 3, 4, and 5. Negative numbers can be used to count from the end of your data set — for instance, -1 refers to the last point in the dataset.

The node supports multiple attributes, each defining its own set of ranges. If no specific attribute is selected, it will automatically use the first available one from your input data.

#### Configuration

<details>

<summary><strong>Attributes</strong><br><em>List of attributes to read ranges of indices from FVector2. Use negative values to select from the end.</em></summary>

Specifies which attributes contain the range data. Each attribute should store FVector2 values, where:

* X component = start index
* Y component = end index

If no attribute is specified, the node will use the first available attribute on the input data.

</details>
