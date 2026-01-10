---
description: 'In editor :: PCGEx | Uber Filter (Collection)'
icon: scrubber
---

# Uber Filter (Collection)

{% hint style="info" %}
This page was generated from the source code. It should properly capture what the node does, but still needs to be proofread by a human.
{% endhint %}

> Filter entire collections of points based on multiple rules and conditions.

#### How It Works

This node evaluates groups of points as complete units, applying filters to determine whether each collection should be included or excluded from the output. It's designed to work with point data that has already been grouped into logical collections, such as clusters or regions.

For each collection, the node applies all connected subnodes (filters) and then checks if the collection meets the defined criteria based on the selected mode:

* **All** mode requires every point in the collection to pass at least one filter.
* **Any** mode allows a collection to pass if at least one point passes a filter.
* **Partial** mode lets you specify a minimum number or percentage of points that must pass the filters.

Collections that meet the criteria are sent to the "Inside" output, while those that don't pass go to the "Outside" output. The node supports both absolute and relative thresholds for partial filtering, so you can define rules like "at least 5 points" or "at least 70% of points."

#### Configuration

<details>

<summary><strong>Mode</strong><br><em>Controls how the filtering logic is applied across collections.</em></summary>

Determines whether all, any, or a portion of points in each collection must pass the filters.

**Values**:

* **All**: All points in a collection must pass at least one filter.
* **Any**: At least one point in a collection must pass a filter.
* **Partial**: A specified number or percentage of points in a collection must pass filters.

</details>

<details>

<summary><strong>Measure</strong><br><em>Defines how the threshold for partial filtering is interpreted.</em></summary>

Specifies whether the threshold value represents a ratio or an absolute count.

**Values**:

* **Relative**: The threshold is a ratio between 0 and 1 (e.g., 0.5 means 50%).
* **Discrete**: The threshold is an absolute number of points.

</details>

<details>

<summary><strong>Comparison</strong><br><em>Specifies how the actual number or ratio of passing points is compared to the threshold.</em></summary>

Sets the condition used to compare the number or ratio of passing points against the threshold value.

**Values**:

* **Strictly Equal**: Exactly matches the threshold.
* **Strictly Not Equal**: Does not match the threshold.
* **Equal Or Greater**: Is greater than or equal to the threshold.
* **Equal Or Smaller**: Is less than or equal to the threshold.
* **Strictly Greater**: Is strictly greater than the threshold.
* **Strictly Smaller**: Is strictly smaller than the threshold.
* **Nearly Equal**: Matches within a tolerance range.
* **Nearly Not Equal**: Does not match within a tolerance range.

</details>

<details>

<summary><strong>DblThreshold</strong><br><em>Partial value when using Relative measure.</em></summary>

The minimum proportion of points that must pass the filters in Partial mode, when Measure is set to Relative.

</details>

<details>

<summary><strong>IntThreshold</strong><br><em>Partial value when using Discrete measure.</em></summary>

The minimum number of points that must pass the filters in Partial mode, when Measure is set to Discrete.

</details>

<details>

<summary><strong>Tolerance</strong><br><em>Rounding mode for relative measures.</em></summary>

Controls how floating-point comparisons are handled when using Nearly Equal or Nearly Not Equal comparisons. A smaller tolerance means stricter matching.

</details>

<details>

<summary><strong>bSwap</strong><br><em>Invert the filter result.</em></summary>

When enabled, the node inverts its filtering logic. Collections that would normally pass are excluded, and those that would fail are included.

</details>

#### Usage Example

Imagine you're generating a forest with point clouds representing trees. You want to keep only groups where at least 70% of the points (trees) have a height greater than 5 meters.

1. Connect a **Height Filter** subnode to the **Source Filters** pin.
2. Set the **Mode** to **Partial**.
3. Set **Measure** to **Relative** and **DblThreshold** to `0.7`.
4. Set **Comparison** to **Equal Or Greater**.
5. The node will now only output collections where at least 70% of the points pass the height filter.

#### Notes

* This node works best when input data is already grouped into logical collections (e.g., from a clustering operation).
* The **Partial** mode is useful for filtering noisy or inconsistent data, such as selecting groups that meet a minimum quality threshold.
* Using **Swap** can be helpful for creating inverse filters without duplicating logic.
