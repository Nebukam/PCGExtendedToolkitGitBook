---
description: 'In editor :: PCGEx | Uber Filter'
icon: scrubber
---

# Uber Filter

Filter points based on multiple rules & conditions.

**How It Works**

> AI-Generated, needs proofreading

* The Uber Filter node processes point data by applying multiple rules and conditions to filter these points.
* In "Write result to point instead of split outputs" mode, the node writes the filtering outcome directly into each point using the specified `Result` type (PCGExFilterResultDetails).
* If "Swap: Invert the filter result" is enabled, the node inverts the filtering logic, meaning points that would normally be filtered out are kept, and vice versa.
* When "Output Discarded Elements" is enabled, the node outputs elements that do not meet the filter criteria; otherwise, it omits creating data for these discarded elements entirely.
* The node sets a tag if any point passes through the filter, based on the `Tag If Any Point Passed` boolean setting.

#### Configuration

<details>

<summary><strong>Mode</strong> <code>PCGExUberFilterMode</code></summary>

Write result to point instead of split outputs

**Values:**

* **Partition points**: Create inside/outside dataset from the filter results.
* **Write result**: Simply write filter result to an attribute but doesn't change point structure.

⚡ PCG Overridable

</details>

<details>

<summary><strong>└─ Result</strong> <code>PCGExFilterResultDetails</code></summary>

Controls └─ result.

📦 See: FilterResult configuration

⚡ PCG Overridable

</details>

<details>

<summary><strong>Swap</strong> <code>bool</code></summary>

Invert the filter result

⚡ PCG Overridable

</details>

<details>

<summary><strong>Output Discarded Elements</strong> <code>bool</code></summary>

If enabled, will output discarded elements, otherwise omit creating the data entirely.

⚡ PCG Overridable

</details>

<details>

<summary><strong>Unpicked Fallback</strong> <code>PCGExFilterFallback</code></summary>

How should point that aren't picked be considered?

</details>

**Tagging**

<details>

<summary><strong>Tag If Any Point Passed</strong> <code>bool</code></summary>

Controls tag if any point passed.

</details>

<details>

<summary><strong>Has Any Point Passed Tag</strong> <code>String</code></summary>

...

</details>

<details>

<summary><strong>Tag If All Points Passed</strong> <code>bool</code></summary>

Controls tag if all points passed.

</details>

<details>

<summary><strong>All Points Passed Tag</strong> <code>String</code></summary>

...

</details>

<details>

<summary><strong>Tag If No Point Passed</strong> <code>bool</code></summary>

Controls tag if no point passed.

</details>

<details>

<summary><strong>No Point Passed Tag</strong> <code>String</code></summary>

...

</details>

***

Source: `Source\PCGExFoundations\Public\Elements\Filtering\PCGExUberFilter.h`
