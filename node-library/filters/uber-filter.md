---
description: 'In editor :: PCGEx | Uber Filter'
icon: scrubber
---

# Uber Filter

{% hint style="warning" %}
## AI-generated page - To be reviewed. 
While not 100% accurante, it should properly capture what it does. It stills needs to be reviewed and proofread by a human.
{% endhint %}

> Filter points based on multiple rules & conditions.

### Overview

The Uber Filter node allows you to apply complex filtering logic to your point data using multiple filter factories. It's designed to handle advanced filtering scenarios where a single filter isn't sufficient, enabling you to combine various conditions and rules into one cohesive operation.

This node is particularly useful when you need to process points based on several criteria that must be evaluated together — such as checking if a point meets all conditions or any of multiple conditions. You can choose how the filtered results are output: either by splitting them into separate inside/outside datasets, or by writing the boolean result directly to an attribute.

{% hint style="info" %}
The node supports multiple input filters connected via the "Filters" pin. These filters are evaluated in order, and their combined result determines whether a point passes or fails.
{% endhint %}

<details>

<summary>Inputs</summary>

* **Source (Default)**: Point data to be filtered
* **Filters**: Multiple filter factories that define the conditions for filtering

</details>

<details>

<summary>Outputs</summary>

* **Inside** (when Mode = Partition): Points that passed all filters
* **Outside** (when Mode = Partition): Points that failed at least one filter
* **Output** (when Mode = Write): Original point data with a new attribute containing the filter result

</details>

### Properties Overview

Controls how the filtering is performed and how results are output.

***

#### General Settings

Controls core behavior of the filtering operation.

**Mode**

_Controls how the filtered results are handled._

* When set to **Partition points**, the node creates two separate datasets: one for points that pass all filters (Inside), and another for those that fail at least one filter (Outside).
* When set to **Write result**, the node writes a boolean attribute to each point indicating whether it passed all filters, without changing the structure of the data.

**Values**:

* **Partition points**: Create inside/outside dataset from the filter results.
* **Write result**: Write filter result to an attribute but don't change point structure.

**ResultDetails**

_Configures how the filter result is written when Mode = Write._

* This setting allows you to customize the name and behavior of the attribute that stores the filter outcome.
* Includes options for using a boolean, counter, or bitmask to represent the result.

**bSwap**

_When enabled, inverts the final filter result._

* If a point would normally pass the filters, it will be marked as failing, and vice versa.
* Useful when you want to exclude points that meet certain criteria rather than include them.

**bOutputDiscardedElements**

_Controls whether discarded elements are output when Mode = Partition._

* When enabled, the Outside dataset includes all points that failed at least one filter.
* When disabled, no data is created for the Outside pin, saving performance if you don't need to process discarded points.

**UnpickedFallback**

_Determines how points not selected by any picker are treated._

* If a point doesn't match any of your defined filters (e.g., due to missing data or invalid conditions), this setting defines whether it should be considered as passing or failing the filter.

**Values**:

* **Pass**: Points without valid filter results are considered to pass.
* **Fail**: Points without valid filter results are considered to fail.

***

#### Tagging Settings

Controls optional tagging behavior for the entire dataset based on overall filter performance.

**bTagIfAnyPointPassed**

_When enabled, tags the output data if at least one point passed all filters._

* Adds a tag to the output indicating that some points met all criteria.
* Useful for conditional logic in downstream nodes.

**HasAnyPointPassedTag**

_Name of the tag added when bTagIfAnyPointPassed is enabled._

* Defaults to "SomePointsPassed".

**bTagIfAllPointsPassed**

_When enabled, tags the output data if every point passed all filters._

* Adds a tag indicating that all points met all criteria.
* Useful for validating complete success in filtering.

**AllPointsPassedTag**

_Name of the tag added when bTagIfAllPointsPassed is enabled._

* Defaults to "AllPointsPassed".

**bTagIfNoPointPassed**

_When enabled, tags the output data if no point passed all filters._

* Adds a tag indicating that none of the points met all criteria.
* Useful for detecting failure states in filtering.

**NoPointPassedTag**

_Name of the tag added when bTagIfNoPointPassed is enabled._

* Defaults to "NoPointPassed".
