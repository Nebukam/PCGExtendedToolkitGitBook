---
description: 'In editor :: PCGEx | Data Filter : Tag Value'
icon: circle-dashed
---

# Tag Value

Test the value of one or multiple tags

📌 **Subnode** — Connects to **Filters** pins.

**How It Works**

> AI-Generated, needs proofreading

* The node evaluates the value of tags specified by the "Tag Name" setting against predefined criteria.
* It uses the "Match" mode to determine how string comparisons are handled if the tag values are strings.
* A strict type check is performed based on the "Value Type" setting, ensuring that only matching types proceed further in the evaluation process.
* The node applies a comparison operation defined by the "Comparison" setting between the tag value and the constant value provided as "Operand B (Numeric)".
* If all conditions are met, the node outputs true; otherwise, it outputs false.

#### Configuration

<details>

<summary><strong>Tag Name</strong> <code>String</code></summary>

Constant tag name value.

⚡ PCG Overridable

</details>

<details>

<summary><strong>Match</strong> <code>PCGExStringMatchMode</code></summary>

Controls match.

</details>

<details>

<summary><strong>Value Type</strong> <code>PCGExComparisonDataType</code></summary>

Expected value type, this is a strict check.

</details>

<details>

<summary><strong>Comparison</strong> <code>PCGExComparison</code></summary>

Comparison

</details>

<details>

<summary><strong>Operand B (Numeric)</strong> <code>double</code></summary>

Constant tag string value.

⚡ PCG Overridable

</details>

<details>

<summary><strong>Tolerance</strong> <code>double</code></summary>

Near-equality tolerance

⚡ PCG Overridable

</details>

<details>

<summary><strong>Comparison</strong> <code>PCGExStringComparison</code></summary>

Comparison

</details>

<details>

<summary><strong>Operand B (String)</strong> <code>String</code></summary>

Constant tag string value.

⚡ PCG Overridable

</details>

<details>

<summary><strong>Multi Match</strong> <code>PCGExFilterGroupMode</code></summary>

OR only requires a single match to pass, AND requires all matches to pass.

</details>

<details>

<summary><strong>Invert</strong> <code>bool</code></summary>

Invert the result of this filter.

</details>

<details>

<summary><strong>Config</strong> <code>PCGExTagValueFilterConfig</code></summary>

Filter Config.

📦 See: TagValueFilter configuration

⚡ PCG Overridable

</details>

<details>

<summary><strong>Tag Name</strong> <code>String</code></summary>

Constant tag name value.

⚡ PCG Overridable

</details>

<details>

<summary><strong>Match</strong> <code>PCGExStringMatchMode</code></summary>

Controls match.

</details>

<details>

<summary><strong>Value Type</strong> <code>PCGExComparisonDataType</code></summary>

Expected value type, this is a strict check.

</details>

<details>

<summary><strong>Comparison</strong> <code>PCGExComparison</code></summary>

Comparison

</details>

<details>

<summary><strong>Operand B (Numeric)</strong> <code>double</code></summary>

Constant tag string value.

⚡ PCG Overridable

</details>

<details>

<summary><strong>Tolerance</strong> <code>double</code></summary>

Near-equality tolerance

⚡ PCG Overridable

</details>

<details>

<summary><strong>Comparison</strong> <code>PCGExStringComparison</code></summary>

Comparison

</details>

<details>

<summary><strong>Operand B (String)</strong> <code>String</code></summary>

Constant tag string value.

⚡ PCG Overridable

</details>

<details>

<summary><strong>Multi Match</strong> <code>PCGExFilterGroupMode</code></summary>

OR only requires a single match to pass, AND requires all matches to pass.

</details>

<details>

<summary><strong>Invert</strong> <code>bool</code></summary>

Invert the result of this filter.

</details>

***

Source: `Source\PCGExFilters\Public\Filters\Collections\PCGExTagValueFilter.h`
