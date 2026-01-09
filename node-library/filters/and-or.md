---
description: 'In editor :: PCGEx | Filter : AND // PCGEx | Filter : OR'
icon: circle-dashed
---

# And / Or

{% hint style="info" %}
This page was generated from the source code. It should properly capture what the node does, but still needs to be proofread by a human.
{% endhint %}

> Combines multiple filters using logical AND or OR operations to define a single filtering condition.

#### Overview

Filter Group is a subnode that allows you to combine multiple connected filter subnodes into one logical operation. It defines how the results of individual filters are combined—either requiring all filters to pass (AND) or only one to pass (OR). This enables complex filtering logic by chaining together simpler conditions.

This subnode connects to Filter pins on processing nodes, where it acts as a single unit that evaluates multiple filter conditions simultaneously. You can use it to create more sophisticated selection criteria for points, edges, or clusters in your procedural workflows.

{% hint style="info" %}
Connects to **Filter** pins on processing nodes.
{% endhint %}

#### How It Works

Filter Group defines a logical combination of multiple connected filters by evaluating them according to either an AND or OR rule.

* When set to **AND**, all connected filters must return true for the point/edge/cluster to pass the group filter.
* When set to **OR**, only one of the connected filters needs to return true for the group filter to pass.

The group also respects a priority system: it uses the highest priority value between its own setting and those defined by the connected filters. If inversion is enabled, the final result is flipped—passing points become failing, and vice versa.

Each connected filter is evaluated in sequence during processing, and their results are combined using the selected logical operation before being returned as a single pass/fail result.

<details>

<summary>Inputs</summary>

This node expects one or more connected subnodes that define individual filtering conditions (e.g., distance, angle, attribute values).

</details>

<details>

<summary>Outputs</summary>

A combined filter result based on the logical operation (AND/OR) of all connected filters.

</details>

#### Configuration

***

**Priority**

_Controls the priority level used when combining with other filters._

The group will use the highest value between this setting and any priorities defined by the connected filters. Higher values are processed first.

**Mode**

_Specifies how to combine the results from connected filters._

**AND**: All connected filters must return true for the point to pass. **OR**: Only one connected filter needs to return true for the point to pass.

**bInvert**

_When enabled, flips the final result of the group._

If enabled, points that would normally pass the group filter will fail, and those that fail will pass. This is useful for creating exclusion logic or negating a combined condition.
