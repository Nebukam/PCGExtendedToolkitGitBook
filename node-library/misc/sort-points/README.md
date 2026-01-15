---
description: 'In editor :: PCGEx | Sort Points'
icon: scrubber
---

# Sort Points

Sort the source points according to specific rules.

**How It Works**

> AI-Generated, needs proofreading

* The Sort Points (Static) node processes a set of source points and organizes them based on predefined rules.
* It uses the "Sort Direction" setting to determine whether the sorting order is ascending or descending.
* The "Rules" setting defines an ordered list of attributes by which the points are sorted, with each subsequent rule applied if there is a tie in the preceding attribute.

#### Configuration

<details>

<summary><strong>Sort Direction</strong> <code>PCGExSortDirection</code></summary>

Controls the order in which points will be ordered.

⚡ PCG Overridable

</details>

<details>

<summary><strong>Rules</strong> <code>Array of FPCGExSortRuleConfig</code></summary>

Ordered list of attribute to check to sort over.

⚡ PCG Overridable

</details>

***

Source: `Source\PCGExElementsMeta\Public\Elements\Sorting\PCGExSortPoints.h`
