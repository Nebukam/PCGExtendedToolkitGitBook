---
description: 'In editor :: PCGEx | Filter : Mean Value'
icon: circle-dashed
---

# Mean Value

Creates a filter definition that compares values against their mean.

📌 **Subnode** — Connects to **Filters** pins.

**How It Works**

> AI-Generated, needs proofreading

* The node computes the mean of input values according to the selected Mean Method setting.
* It compares each Target value against this computed mean to determine if it is above or below the threshold defined by Mean Value.
* Depending on the Measure mode (relative or absolute), the comparison adjusts the tolerance level for determining whether a value meets the criteria set by Mode Tolerance.

#### Configuration

<details>

<summary><strong>Target</strong> <code>PCGAttributePropertyInputSelector</code></summary>

Target value to compile -- Will be translated to `double` under the hood.

</details>

<details>

<summary><strong>Measure</strong> <code>PCGExMeanMeasure</code></summary>

Measure mode. If using relative, threshold values should be kept between 0-1, while absolute use the world-space length of the edge.

⚡ PCG Overridable

</details>

<details>

<summary><strong>Mean Method</strong> <code>PCGExMeanMethod</code></summary>

Which mean value is used to check whether the tested value is above or below.

⚡ PCG Overridable

</details>

<details>

<summary><strong>Mean Value</strong> <code>double</code></summary>

Minimum value threshold

⚡ PCG Overridable

</details>

<details>

<summary><strong>Mode Tolerance</strong> <code>double</code></summary>

Used to estimate the mode value.

⚡ PCG Overridable

</details>

<details>

<summary><strong>Do Exclude Below Mean</strong> <code>bool</code></summary>

Exclude if value is below a specific threshold.

⚡ PCG Overridable

</details>

<details>

<summary><strong>Exclude Below</strong> <code>double</code></summary>

Minimum value threshold.

⚡ PCG Overridable

</details>

<details>

<summary><strong>Do Exclude Above Mean</strong> <code>bool</code></summary>

Exclude if value is above a specific threshold.

⚡ PCG Overridable

</details>

<details>

<summary><strong>Exclude Above</strong> <code>double</code></summary>

Maximum threshold.

⚡ PCG Overridable

</details>

<details>

<summary><strong>Invert</strong> <code>bool</code></summary>

If enabled, invert the result of the test

⚡ PCG Overridable

</details>

<details>

<summary><strong>Config</strong> <code>PCGExMeanFilterConfig</code></summary>

Filter Config.

📦 See: MeanFilter configuration

⚡ PCG Overridable

</details>

<details>

<summary><strong>Target</strong> <code>PCGAttributePropertyInputSelector</code></summary>

Target value to compile -- Will be translated to `double` under the hood.

</details>

<details>

<summary><strong>Measure</strong> <code>PCGExMeanMeasure</code></summary>

Measure mode. If using relative, threshold values should be kept between 0-1, while absolute use the world-space length of the edge.

⚡ PCG Overridable

</details>

<details>

<summary><strong>Mean Method</strong> <code>PCGExMeanMethod</code></summary>

Which mean value is used to check whether the tested value is above or below.

⚡ PCG Overridable

</details>

<details>

<summary><strong>Mean Value</strong> <code>double</code></summary>

Minimum value threshold

⚡ PCG Overridable

</details>

<details>

<summary><strong>Mode Tolerance</strong> <code>double</code></summary>

Used to estimate the mode value.

⚡ PCG Overridable

</details>

<details>

<summary><strong>Do Exclude Below Mean</strong> <code>bool</code></summary>

Exclude if value is below a specific threshold.

⚡ PCG Overridable

</details>

<details>

<summary><strong>Exclude Below</strong> <code>double</code></summary>

Minimum value threshold.

⚡ PCG Overridable

</details>

<details>

<summary><strong>Do Exclude Above Mean</strong> <code>bool</code></summary>

Exclude if value is above a specific threshold.

⚡ PCG Overridable

</details>

<details>

<summary><strong>Exclude Above</strong> <code>double</code></summary>

Maximum threshold.

⚡ PCG Overridable

</details>

<details>

<summary><strong>Invert</strong> <code>bool</code></summary>

If enabled, invert the result of the test

⚡ PCG Overridable

</details>

***

Source: `Source\PCGExFilters\Public\Filters\Points\PCGExMeanFilter.h`
