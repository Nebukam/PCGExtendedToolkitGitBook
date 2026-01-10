---
description: 'In editor :: PCGEx | Filter : AND // PCGEx | Filter : OR'
icon: circle-dashed
---

# And / Or

{% hint style="warning" %}
This page was generated from the source code. It captures what the node does, but still needs some serious  proofreading.
{% endhint %}

> Groups multiple filter subnodes together and applies a logical operation (AND or OR) to their results.

#### How It Works

Filter Group defines a behavior that evaluates multiple connected filter subnodes and applies a logical operation to their results. When a point is tested, each connected filter is evaluated in sequence. The group then applies either an AND or OR logic:

* In **AND mode**, all connected filters must return true for the point to pass.
* In **OR mode**, only one connected filter needs to return true for the point to pass.

The group also supports priority handling where it uses the highest priority value between its own setting and those of the connected filters. If inversion is enabled, the final result is flipped (true becomes false and vice versa).

#### Configuration

<details>

<summary><strong>Mode</strong><br><em>Filter Mode.</em></summary>

Determines how the group evaluates connected filter subnodes.

**Values**:

* **AND**: All connected filter subnodes must pass for the point to be included.
* **OR**: Only one connected filter subnode needs to pass for the point to be included.

</details>

<details>

<summary><strong>Priority</strong><br><em>Filter Priority. Will use the highest value between the one set here and from the connected filters.</em></summary>

Sets the priority level of this group. When multiple filters are evaluated, the highest priority value is used to determine execution order or weighting.

</details>

<details>

<summary><strong>bInvert</strong><br><em>Inverts the group output value.</em></summary>

When enabled, the result of the group evaluation is flipped. If all filters pass in AND mode, the point will be excluded instead of included.

</details>

#### Usage Example

Create a Filter Group with two subnodes: one that checks if a point's height is above 10 units, and another that checks if its color is blue. Set the group to **AND** mode so only points that are both tall and blue will pass. Then connect this group to a Point Filter node to selectively include only those points in your procedural generation.

#### Notes

Filter Group evaluates filters in the order they are connected. The priority setting helps determine how the group interacts with other filters in complex workflows. Inversion can be used to create exclusion criteria from inclusive filter combinations.
