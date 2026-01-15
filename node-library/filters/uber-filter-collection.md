---
description: 'In editor :: PCGEx | Uber Filter (Collection)'
icon: scrubber
---

# Uber Filter (Collection)

Filter entire collections based on multiple rules & conditions.

**How It Works**

> AI-Generated, needs proofreading

* The Uber Filter (Collection) node processes collections by applying multiple rules and conditions to filter elements within those collections.
* In "Write result to point instead of split outputs" mode, the node writes the filtered collection directly to a specified output point rather than splitting into separate output streams based on filtering criteria.
* Using settings like Measure, Comparison, Dbl Threshold, and Int Threshold, the node evaluates each element in the collection against defined partial value types and thresholds for numerical comparisons.

#### Configuration

<details>

<summary><strong>Mode</strong> <code>PCGExUberFilterCollectionsMode</code></summary>

Write result to point instead of split outputs

**Values:**

* **All**: All points must pass the filters.
* **Any**: At least one point must pass the filter.
* **Partial**: A given amount of points must pass the filter.

⚡ PCG Overridable

</details>

<details>

<summary><strong>Measure</strong> <code>PCGExMeanMeasure</code></summary>

Partial value type

⚡ PCG Overridable

</details>

<details>

<summary><strong>Comparison</strong> <code>PCGExComparison</code></summary>

Partial value comparison

⚡ PCG Overridable

</details>

<details>

<summary><strong>Dbl Threshold</strong> <code>double</code></summary>

Partial value type

⚡ PCG Overridable

</details>

<details>

<summary><strong>Int Threshold</strong> <code>int32</code></summary>

Partial value type

⚡ PCG Overridable

</details>

<details>

<summary><strong>Tolerance</strong> <code>double</code></summary>

Rounding mode for relative measures

⚡ PCG Overridable

</details>

<details>

<summary><strong>Swap</strong> <code>bool</code></summary>

Invert the filter result

⚡ PCG Overridable

</details>

***

Source: `Source\PCGExFoundations\Public\Elements\Filtering\PCGExUberFilterCollections.h`
