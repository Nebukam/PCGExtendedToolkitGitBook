---
description: 'In editor :: PCGEx | Sort Points'
icon: scrubber
---

# Sort Points

{% hint style="info" %}
## AI-generated page -- to be reviewed 
While not 100% accurate, it should properly capture what the node/factory does. It stills needs to be proofread by a human.
{% endhint %}

> Reorder input points based on specified criteria.

### Overview

This node rearranges your input points according to one or more sorting conditions. It's useful when you need to organize points in a particular sequence for downstream processing, such as creating ordered paths, applying sequential effects, or organizing data for procedural generation workflows.

The sorting can be based on point attributes (like position, custom tags, or metadata), and supports multiple rules that are applied in order. You can sort ascending or descending for each rule, allowing for complex sorting behaviors.

{% hint style="info" %}
Sorting is performed in-place on the input points, modifying their order in the output data.
{% endhint %}

<details>

<summary>Inputs</summary>

* **Input Points** _(Default)_: The point data to be sorted. Multiple inputs are supported.

</details>

<details>

<summary>Outputs</summary>

* **Output Points** _(Default)_: The input points, reordered according to the specified sorting rules.

</details>

### Properties Overview

Controls how the points are sorted and what criteria are used.

***

#### Sorting Rules

Define the conditions that determine point ordering.

**Sort Direction**

_Controls whether the sort is ascending or descending._

* Points will be ordered from lowest to highest (ascending) or highest to lowest (descending) based on the sorting criteria.
* Applies to all rules unless overridden per rule.

**Values**:

* **Ascending**: Sorts points in ascending order
* **Descending**: Sorts points in descending order

**Add Sorting Rule**

_Adds a new sorting criterion._

* Each rule defines one aspect of how points are compared.
* Rules are applied in the order they appear, with earlier rules taking precedence.
* You can add multiple rules to create complex sorting logic.

**Tag Name**

_Name of the attribute used for sorting._

* Points will be sorted based on the value of this tag.
* For vector tags, you can specify a component index (e.g., `MyTag:0` for X component).
* If the tag doesn't exist, it's treated as zero.

**Tolerance**

_Tolerance for comparing floating-point values._

* Used to determine if two values are considered equal during sorting.
* Helps avoid issues with floating-point precision when sorting by attributes like position or custom floats.
* Default is `DBL_COMPARE_TOLERANCE`.

**Invert Rule**

_When enabled, reverses the sort direction for this rule._

* Overrides the global sort direction for just this rule.
* Useful for mixing ascending and descending orders within a single sorting operation.
