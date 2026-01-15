---
description: 'In editor :: PCGEx | Edge Filter : Endpoints Compare (Numeric)'
icon: circle-dashed
---

# Endpoints Compare (Numeric)

Compare the value of an attribute on each of the edge endpoint.

📌 **Subnode** — Connects to **Filters** pins.

**How It Works**

> AI-Generated, needs proofreading

* The Edge Filter : Endpoints Compare (Numeric) node retrieves the numeric value of a specified attribute from both endpoints of an edge.
* It then applies a comparison operation defined by the "Comparison" setting to these two values.
* If the "Tolerance" is set, it rounds or adjusts the comparison according to the tolerance level before performing the check.
* The node outputs edges where the comparison result meets the criteria; if "Invert" is true, it outputs edges that do not meet the criteria instead.
* Configuration settings in "Config: Test Config" can be used to further tailor the behavior of the node during testing or specific scenarios.

#### Configuration

<details>

<summary><strong>Attribute</strong> <code>PCGAttributePropertyInputSelector</code></summary>

Attribute to compare

⚡ PCG Overridable

</details>

<details>

<summary><strong>Comparison</strong> <code>PCGExComparison</code></summary>

Comparison check

⚡ PCG Overridable

</details>

<details>

<summary><strong>Tolerance</strong> <code>double</code></summary>

Rounding mode for approx. comparison modes

⚡ PCG Overridable

</details>

<details>

<summary><strong>Invert</strong> <code>bool</code></summary>

Controls invert.

⚡ PCG Overridable

</details>

<details>

<summary><strong>Config</strong> <code>PCGExEdgeEndpointsCompareNumFilterConfig</code></summary>

Test Config.

📦 See: EdgeEndpointsCompareNumFilter configuration

⚡ PCG Overridable

</details>

<details>

<summary><strong>Attribute</strong> <code>PCGAttributePropertyInputSelector</code></summary>

Attribute to compare

⚡ PCG Overridable

</details>

<details>

<summary><strong>Comparison</strong> <code>PCGExComparison</code></summary>

Comparison check

⚡ PCG Overridable

</details>

<details>

<summary><strong>Tolerance</strong> <code>double</code></summary>

Rounding mode for approx. comparison modes

⚡ PCG Overridable

</details>

<details>

<summary><strong>Invert</strong> <code>bool</code></summary>

Controls invert.

⚡ PCG Overridable

</details>

***

Source: `Source\PCGExElementsClusters\Public\Filters\Edges\PCGExEdgeEndpointsCompareNumFilter.h`
