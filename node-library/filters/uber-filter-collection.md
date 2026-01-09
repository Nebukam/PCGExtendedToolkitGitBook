---
description: 'In editor :: PCGEx | Uber Filter (Collection)'
icon: scrubber
---

# Uber Filter (Collection)

{% hint style="info" %}
### AI-generated page -- to be reviewed

While not 100% accurate, it should properly capture what the node/factory does. It stills needs to be proofread by a human.
{% endhint %}

> Filter entire collections based on multiple rules & conditions.

### Overview

This node filters collections of points using a variety of filter types, allowing you to determine which collections pass or fail based on their contents. It's particularly useful when working with multiple collections and needing to apply consistent filtering logic across them.

The node evaluates each collection against one or more filters and decides whether to keep the entire collection or discard it. You can choose between different modes that control how many points in a collection must pass the filters for the collection itself to be considered valid.

{% hint style="info" %}
This node works with collections, not individual points. It evaluates entire collections as units.
{% endhint %}

<details>

<summary>Inputs</summary>

* **Main Input** (default): Collection data to filter
* **Filters**: Optional point filters to apply to the collection

</details>

<details>

<summary>Outputs</summary>

* **Inside** (default): Collections that passed the filter
* **Outside** (default): Collections that failed the filter
* **Filtered** (optional): Points that passed the filter, written as attributes instead of split outputs

</details>

### Properties Overview

Controls how collections are filtered and what happens to them after evaluation.

***

#### Filtering Mode

Controls how many points in a collection must pass the filters for the collection to be considered valid.

**Mode**

_Controls which points must pass the filters._

* When set to **All**, all points in a collection must pass the filters.
* When set to **Any**, at least one point in a collection must pass the filters.
* When set to **Partial**, a specified amount of points must pass the filters.

**Values**:

* **All**: All points must pass the filters.
* **Any**: At least one point must pass the filter.
* **Partial**: A given amount of points must pass the filter.

***

#### Partial Mode Settings

Controls how the "partial" mode evaluates the number of passing points against the threshold.

**Measure**

_Determines whether the threshold is a relative percentage or an absolute count._

* When set to **Relative**, the threshold is interpreted as a percentage (0.0 to 1.0) of points that must pass.
* When set to **Discrete**, the threshold is interpreted as an absolute number of points that must pass.

**Values**:

* **Relative**: Input value will be normalized between 0..1, or used as a factor.
* **Discrete**: Raw value will be used, or used as absolute.

**Comparison**

_Selects how to compare the actual number of passing points against the threshold._

* When set to **EqualOrGreater**, at least the specified amount of points must pass.
* When set to **StrictlyGreater**, more than the specified amount of points must pass.
* When set to **EqualOrSmaller**, no more than the specified amount of points can pass.
* When set to **StrictlySmaller**, fewer than the specified amount of points can pass.
* When set to **StrictlyEqual**, exactly the specified amount of points must pass.
* When set to **StrictlyNotEqual**, not exactly the specified amount of points can pass.
* When set to **NearlyEqual**, approximately the specified amount of points must pass (within tolerance).
* When set to **NearlyNotEqual**, approximately not the specified amount of points can pass (within tolerance).

**Values**:

* **==**: Operand A Strictly Equal to Operand B
* **!=**: Operand A Strictly Not Equal to Operand B
* **>=**: Operand A Equal or Greater to Operand B
* **<=**: Operand A Equal or Smaller to Operand B
* **>**: Operand A Strictly Greater to Operand B
* **<**: Operand A Strictly Smaller to Operand B
* **\~=**: Operand A Nearly Equal to Operand B
* \*\*!\~=: Operand A Nearly Not Equal to Operand B

**DblThreshold**

_The percentage of points that must pass when using relative measure._

* Value is interpreted as a percentage between 0.0 and 1.0.
* For example, setting this to 0.75 means 75% of points in a collection must pass.

**IntThreshold**

_The absolute number of points that must pass when using discrete measure._

* Value is interpreted as a count of points.
* For example, setting this to 10 means at least 10 points in a collection must pass.

**Tolerance**

_Tolerance for nearly equal comparisons._

* Only used when comparison is set to Nearly Equal or Nearly Not Equal.
* Controls how close the actual value must be to the threshold to be considered "equal".

***

#### General Settings

Controls additional behavior of the filter node.

**bSwap**

_When enabled, inverts the filter result._

* If a collection would normally pass the filter, it will now fail and vice versa.
* Useful for creating exclusion filters or testing different logic flows.

### Notes

* This node works with collections as units, not individual points.
* Use **All** mode when you need every point in a collection to meet criteria.
* Use **Any** mode when you only care if at least one point meets criteria.
* Use **Partial** mode when you want to specify an exact number or percentage of points that must pass.
* The node supports multiple filter types connected to the Filters input for complex filtering logic.
* When using **Partial** mode, consider whether you want a relative threshold (percentage) or discrete count (number of points).
* Performance can be improved by enabling caching if the same filters are applied repeatedly.
