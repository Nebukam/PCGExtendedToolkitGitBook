---
description: 'In editor :: PCGEx | Edge Filter : Endpoints Compare (String)'
icon: circle-dashed
---

# Endpoints Compare (String)

Compare the value of an attribute on each of the edge endpoint.

📌 **Subnode** — Connects to **Filters** pins.

**How It Works**

> AI-Generated, needs proofreading

* The Edge Filter : Endpoints Compare (String) node compares the string values of a specified attribute at both endpoints of an edge.
* It uses the selected comparison check to evaluate whether the attribute values meet the defined criteria.
* If the Invert option is set to true, the node inverts the result of the comparison check.
* The Config setting allows for additional configuration parameters that may affect how the comparison is performed or evaluated.

#### Configuration

<details>

<summary><strong>Attribute</strong> <code>PCGAttributePropertyInputSelector</code></summary>

Attribute to compare

⚡ PCG Overridable

</details>

<details>

<summary><strong>Comparison</strong> <code>PCGExStringComparison</code></summary>

Comparison check

⚡ PCG Overridable

</details>

<details>

<summary><strong>Invert</strong> <code>bool</code></summary>

Controls invert.

⚡ PCG Overridable

</details>

<details>

<summary><strong>Config</strong> <code>PCGExEdgeEndpointsCompareStrFilterConfig</code></summary>

Test Config.

📦 See: EdgeEndpointsCompareStrFilter configuration

⚡ PCG Overridable

</details>

<details>

<summary><strong>Attribute</strong> <code>PCGAttributePropertyInputSelector</code></summary>

Attribute to compare

⚡ PCG Overridable

</details>

<details>

<summary><strong>Comparison</strong> <code>PCGExStringComparison</code></summary>

Comparison check

⚡ PCG Overridable

</details>

<details>

<summary><strong>Invert</strong> <code>bool</code></summary>

Controls invert.

⚡ PCG Overridable

</details>

***

Source: `Source\PCGExElementsClusters\Public\Filters\Edges\PCGExEdgeEndpointsCompareStrFilter.h`
