---
icon: arrow-right-to-bracket
---

# Filter Results

{% hint style="warning" %}
This page was generated from the source code. It captures what the node does, but still needs some serious  proofreading.
{% endhint %}

> Controls how filter results are written and processed in PCG operations.

#### Overview

This configuration block defines how the outcome of a filtering operation is handled and stored. You can choose whether to store the result as a simple boolean flag, increment a counter, or manipulate bitmask values. It's useful when you want to track which elements pass or fail filters for downstream processing, such as creating visual indicators, counting occurrences, or managing state flags.

This block is commonly used in nodes that apply filtering logic and need to output results for further use in the graph. When enabled, it allows you to specify where and how the filter outcome should be stored on the points or edges.

{% hint style="info" %}
This configuration appears in nodes like: PCGEx Filter Vertices, PCGEx Refine Edges (vertex), PCGEx Refine Edges (edge), PCGEx Uber Filter
{% endhint %}

#### Settings

<details>

<summary><strong>bOptional</strong><br><em>When enabled, this filter result configuration can be toggled on or off.</em></summary>

When enabled, the entire filter result configuration becomes optional and can be turned on or off via the `bEnabled` setting.

</details>

<details>

<summary><strong>bEnabled</strong><br><em>Controls whether this filter result configuration is active.</em></summary>

When enabled, the filter result will be written according to the selected action. If disabled, no output is generated for this filter.

</details>

<details>

<summary><strong>Action</strong><br><em>Determines how the filter result is stored or processed.</em></summary>

Specifies what type of data should be written based on the filter outcome.

**Values**:

* **Bool**: Stores a simple true/false value in an attribute.
* **Counter**: Increments or decrements a numeric counter for each pass/fail.
* **Bitmask**: Applies bitmask operations to a flag when filters pass or fail.

</details>

<details>

<summary><strong>ResultAttributeName</strong><br><em>The name of the attribute where the result will be stored.</em></summary>

Defines the name of the attribute that will hold the filter result. For example, if set to "IsSelected", the result will be written to an attribute named `IsSelected`.

</details>

<details>

<summary><strong>PassIncrement</strong><br><em>The value added to a counter when a filter passes.</em></summary>

When using the **Counter** action, this value is added to the counter for each point or edge that passes the filter. For example, setting it to `1` will increment the counter by 1 for every passing item.

</details>

<details>

<summary><strong>FailIncrement</strong><br><em>The value added to a counter when a filter fails.</em></summary>

When using the **Counter** action, this value is added to the counter for each point or edge that fails the filter. For example, setting it to `-1` will decrement the counter by 1 for every failing item.

</details>

<details>

<summary><strong>bDoBitmaskOpOnPass</strong><br><em>When enabled, bitmask operations are applied when a filter passes.</em></summary>

Controls whether the bitmask operation defined in `PassBitmask` is executed when a filter passes.

</details>

<details>

<summary><strong>PassBitmask</strong><br><em>Defines the bitmask operations to perform when a filter passes.</em></summary>

Specifies the bitmask operations that are applied to the result attribute when a filter passes. Only visible when `Action` is set to **Bitmask** and `bDoBitmaskOpOnPass` is enabled.

</details>

<details>

<summary><strong>bDoBitmaskOpOnFail</strong><br><em>When enabled, bitmask operations are applied when a filter fails.</em></summary>

Controls whether the bitmask operation defined in `FailBitmask` is executed when a filter fails.

</details>

<details>

<summary><strong>FailBitmask</strong><br><em>Defines the bitmask operations to perform when a filter fails.</em></summary>

Specifies the bitmask operations that are applied to the result attribute when a filter fails. Only visible when `Action` is set to **Bitmask** and `bDoBitmaskOpOnFail` is enabled.

</details>

#### Common Use Cases

* **Tracking Filter Passes**: Use the **Bool** action to mark which points or edges pass a filter, then use those results in downstream nodes.
* **Counting Occurrences**: Use the **Counter** action to count how many times a condition is met. For example, counting how many points are within a certain distance of a landmark.
* **Managing State Flags**: Use the **Bitmask** action to set or clear specific bits in an attribute based on filter outcomes, useful for managing multi-state flags.

#### Notes

* The **Counter** and **Bitmask** actions are mutually exclusive with the **Bool** action. Only one can be active at a time.
* When using **Bitmask**, both `PassBitmask` and `FailBitmask` are optional and can be configured independently.
* If you're using **Counter**, make sure to set both `PassIncrement` and `FailIncrement` to meaningful values, even if one is zero.
