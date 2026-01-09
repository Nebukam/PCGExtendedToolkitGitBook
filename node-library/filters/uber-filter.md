---
description: 'In editor :: PCGEx | Uber Filter'
icon: scrubber
---

# Uber Filter

{% hint style="info" %}
This page was generated from the source code. It should properly capture what the node does, but still needs to be proofread by a human.
{% endhint %}

> Filter points based on multiple rules & conditions.

#### Overview

The Uber Filter node allows you to apply complex filtering logic to your point data using multiple subnodes that define different conditions. It evaluates each point against these filters and decides whether to keep or discard it, depending on the mode selected.

This node is useful when you want to combine several logical checks into a single operation, such as filtering points that meet all criteria, any criteria, or a custom combination of rules. You can also write the result directly to an attribute instead of splitting outputs, which is helpful for downstream processing or visualization.

{% hint style="info" %}
Connects to **Point Filters** subnode pin.
{% endhint %}

#### How It Works

The Uber Filter node evaluates each point against a set of filter conditions defined by its connected subnodes. For every point, it runs through all the filters and determines if the point passes or fails based on how those filters are combined.

If the mode is set to **Partition points**, it splits the input into two datasets: one containing points that passed all filters (inside), and another with points that failed at least one filter (outside). If the mode is set to **Write result**, it writes a boolean or numeric value to an attribute on each point indicating whether it passed the filters.

The node also supports tagging behaviors, where you can tag the entire dataset based on whether any, all, or none of the points passed the filters. This allows for conditional logic in subsequent nodes.

<details>

<summary>Inputs</summary>

* Point data to be filtered
* One or more filter subnodes that define the conditions

</details>

<details>

<summary>Outputs</summary>

* If mode is **Partition points**: Two outputs — one with points that passed all filters, and another with those that failed.
* If mode is **Write result**: One output where each point has an attribute indicating pass/fail status.
* Optionally tagged data based on global filtering results.

</details>

#### Configuration

***

**Mode**

_Controls how the filter results are handled._

When set to **Partition points**, the node creates two separate outputs: one for points that passed all filters and another for those that did not. When set to **Write result**, it writes the outcome directly to an attribute on each point.

**Values**:

* **Partition points**: Create inside/outside dataset from the filter results.
* **Write result**: write filter result to an attribute but doesn't change point structure.

***

**ResultDetails**

_Controls how the result is written when in "Write result" mode._

This setting defines what type of data is written to the point attribute, such as a boolean value or a counter that tracks how many times a point passed or failed.

**Values**:

* **Boolean**: Sets a boolean attribute on the points. True when filters pass, False if they don't.
* **Counter**: Mutates a int32 counter with the specified increment/decrement associated with pass/fail. (i.e +1 on pass, -2 on fail)
* **Bitmask**: Mutates a bitmask flag with the operations associated with pass/fail.

***

**bSwap**

_When enabled, inverts the filter result._

If enabled, points that would normally be kept are discarded and vice versa.

***

**bOutputDiscardedElements**

_Controls whether discarded elements are output._

When enabled, the node outputs both inside and outside datasets. When disabled, only the inside dataset is created, omitting the discarded data entirely.

***

**bTagIfAnyPointPassed**

_When enabled, tags the data if any point passed the filters._

This applies a tag to the entire dataset if at least one point passes all filters.

***

**HasAnyPointPassedTag**

_Name of the tag applied when any point passes._

Controls what label is used for tagging when some points pass the filter.

***

**bTagIfAllPointsPassed**

_When enabled, tags the data if all points passed the filters._

This applies a tag to the entire dataset if every point passes all filters.

***

**AllPointsPassedTag**

_Name of the tag applied when all points pass._

Controls what label is used for tagging when all points pass the filter.

***

**bTagIfNoPointPassed**

_When enabled, tags the data if no point passed the filters._

This applies a tag to the entire dataset if none of the points pass any filter.

***

**NoPointPassedTag**

_Name of the tag applied when no point passes._

Controls what label is used for tagging when no points pass the filter.

***

**UnpickedFallback**

_Determines how points that don't match any filters are treated._

This setting controls whether points that fail to meet any condition are considered as passing or failing by default.

**Values**:

* **Pass**: Points that aren’t picked will be considered to successfully pass the filter.
* **Fail**: Points that aren’t picked will be considered to failing to pass the filter.

#### Usage Example

1. Connect a set of points to the Uber Filter node.
2. Add multiple filter subnodes (e.g., distance, angle, attribute value).
3. Set the mode to **Partition points** to separate valid and invalid points.
4. Optionally enable tagging so that downstream nodes can react differently depending on whether any or all points passed.

#### Notes

* The Uber Filter is ideal for combining multiple filtering criteria into one operation.
* Using the **Write result** mode allows you to store pass/fail information directly on each point, which can be useful for advanced logic or visualization.
* Tagging options help track global filter behavior across datasets.
* Performance may vary depending on how many filters are applied and how complex they are.
