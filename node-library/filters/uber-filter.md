---
description: 'In editor :: PCGEx | Uber Filter'
icon: scrubber
---

# Uber Filter

{% hint style="warning" %}
This page was generated from the source code. It captures what the node does, but still needs some serious  proofreading.
{% endhint %}

> Filter points based on multiple rules & conditions.

#### How It Works

The Uber Filter node evaluates each point against a collection of filter rules defined by connected subnodes. For every point, it runs all specified filters and combines their results according to the configured logic.

If the mode is set to **Partition points**, the node splits the input points into two groups: those that pass the filter (inside) and those that don't (outside). If the mode is set to **Write result**, it writes a boolean or numeric value directly to an attribute on each point indicating whether it passed the filters.

The node supports inverting the final result using the Swap toggle, which flips true/false values. It also allows you to specify how points that are not picked by any filter should be treated via the UnpickedFallback setting.

When tagging is enabled, the node can apply tags to the entire dataset based on whether any, all, or no points passed the filter.

#### Configuration

<details>

<summary><strong>Mode</strong><br><em>Write result to point instead of split outputs.</em></summary>

Controls how the filtering results are handled:

* **Partition points**: Splits the input into inside and outside datasets.
* **Write result**: Writes a boolean or numeric value directly to an attribute on each point.

</details>

<details>

<summary><strong>ResultDetails</strong><br><em>How to write the filter result when in Write mode.</em></summary>

Defines how the filter result is written to points:

* **Boolean**: Sets a boolean attribute (`true` if the point passed, `false` otherwise).
* **Counter**: Increments or decrements an integer counter based on pass/fail.
* **Bitmask**: Modifies a bitmask flag using specified operations.

</details>

<details>

<summary><strong>bSwap</strong><br><em>Invert the filter result.</em></summary>

When enabled, flips the boolean result of the filters so that points that would normally pass now fail and vice versa.

</details>

<details>

<summary><strong>bOutputDiscardedElements</strong><br><em>If enabled, will output discarded elements, otherwise omit creating the data entirely.</em></summary>

Controls whether points that fail the filter are included in the output:

* When enabled: Points that fail are included in a separate output.
* When disabled: Points that fail are omitted from the output entirely.

</details>

<details>

<summary><strong>bTagIfAnyPointPassed</strong><br><em>Tag the dataset if any point passed the filter.</em></summary>

When enabled, applies a tag to the entire dataset if at least one point passes the filters.

</details>

<details>

<summary><strong>HasAnyPointPassedTag</strong><br><em>Tag applied when any point passed the filter.</em></summary>

The name of the tag to apply when any point in the dataset passes the filter.

</details>

<details>

<summary><strong>bTagIfAllPointsPassed</strong><br><em>Tag the dataset if all points passed the filter.</em></summary>

When enabled, applies a tag to the entire dataset if all points pass the filters.

</details>

<details>

<summary><strong>AllPointsPassedTag</strong><br><em>Tag applied when all points passed the filter.</em></summary>

The name of the tag to apply when all points in the dataset pass the filter.

</details>

<details>

<summary><strong>bTagIfNoPointPassed</strong><br><em>Tag the dataset if no point passed the filter.</em></summary>

When enabled, applies a tag to the entire dataset if no points pass the filters.

</details>

<details>

<summary><strong>NoPointPassedTag</strong><br><em>Tag applied when no point passed the filter.</em></summary>

The name of the tag to apply when no points in the dataset pass the filter.

</details>

<details>

<summary><strong>UnpickedFallback</strong><br><em>How should point that aren't picked be considered?</em></summary>

Controls how points that don’t match any filter are treated:

* **Pass**: Points not matched by any filter are considered to have passed.
* **Fail**: Points not matched by any filter are considered to have failed.

</details>

#### Usage Example

1. Create a point set with multiple attributes.
2. Add an Uber Filter node and connect it to the point set.
3. Add several filter subnodes (e.g., distance, angle, attribute value) to the `SourceFiltersLabel` input.
4. Set the mode to **Write result** and configure the `ResultDetails` to write a boolean attribute.
5. Use the resulting attribute in downstream nodes for further processing or visualization.

#### Notes

* The Uber Filter node supports multiple filter subnodes, allowing complex logic combinations.
* When using **Partition points**, the inside and outside outputs are created automatically.
* Tagging options allow you to mark datasets based on overall pass/fail behavior for use in conditional logic later in your graph.
* Performance can be improved by disabling `bOutputDiscardedElements` if you don’t need the failed points in the output.
