---
description: 'In editor :: PCGEx | Edge Filter : Neighbors Count'
icon: circle-dashed
---

# Neighbors Count

Check against the edge' endpoints neighbor count.

📌 **Subnode** — Connects to **Filters** pins.

**How It Works**

> AI-Generated, needs proofreading

* The Edge Filter : Neighbors Count node evaluates edges based on the number of neighbors their endpoints have.
* It compares this count against a specified threshold, which can either be a constant value or an attribute read from the edge itself, depending on the setting of "Threshold Input".
* Depending on the "Mode" and "Comparison" settings, the node determines whether each edge meets the criteria to be considered a Bridge based on its endpoints' neighbor counts.
* If the comparison condition is met according to the specified threshold, the edge passes through the filter; otherwise, it does not.

#### Configuration

<details>

<summary><strong>Threshold Input</strong> <code>PCGExInputValueType</code></summary>

Whether to read the threshold from an attribute on the edge or a constant.

⚡ PCG Overridable

</details>

<details>

<summary><strong>Threshold (Attr)</strong> <code>PCGAttributePropertyInputSelector</code></summary>

Attribute to fetch threshold from

⚡ PCG Overridable

</details>

<details>

<summary><strong>Threshold</strong> <code>int32</code></summary>

The number of connection endpoints must have to be considered a Bridge.

⚡ PCG Overridable

</details>

<details>

<summary><strong>Mode</strong> <code>PCGExRefineEdgeThresholdMode</code></summary>

How should we check if the threshold is reached.

**Values:**

* **Sum**: The sum of adjacencies will be compared against the specified threshold
* **Any Endpoint**: At least one endpoint adjacency count must pass the comparison against the specified threshold
* **Both Endpoints**: Both endpoint adjacency count must individually pass the comparison against the specified threshold

⚡ PCG Overridable

</details>

<details>

<summary><strong>Comparison</strong> <code>PCGExComparison</code></summary>

Comparison check

⚡ PCG Overridable

</details>

<details>

<summary><strong>Tolerance</strong> <code>int32</code></summary>

Rounding mode for approx. comparison modes

⚡ PCG Overridable

</details>

<details>

<summary><strong>Invert</strong> <code>bool</code></summary>

Controls invert.

⚡ PCG Overridable

</details>

<details>

<summary><strong>Config</strong> <code>PCGExEdgeNeighborsCountFilterConfig</code></summary>

Test Config.

📦 See: EdgeNeighborsCountFilter configuration

⚡ PCG Overridable

</details>

<details>

<summary><strong>Threshold Input</strong> <code>PCGExInputValueType</code></summary>

Whether to read the threshold from an attribute on the edge or a constant.

⚡ PCG Overridable

</details>

<details>

<summary><strong>Threshold (Attr)</strong> <code>PCGAttributePropertyInputSelector</code></summary>

Attribute to fetch threshold from

⚡ PCG Overridable

</details>

<details>

<summary><strong>Threshold</strong> <code>int32</code></summary>

The number of connection endpoints must have to be considered a Bridge.

⚡ PCG Overridable

</details>

<details>

<summary><strong>Mode</strong> <code>PCGExRefineEdgeThresholdMode</code></summary>

How should we check if the threshold is reached.

**Values:**

* **Sum**: The sum of adjacencies will be compared against the specified threshold
* **Any Endpoint**: At least one endpoint adjacency count must pass the comparison against the specified threshold
* **Both Endpoints**: Both endpoint adjacency count must individually pass the comparison against the specified threshold

⚡ PCG Overridable

</details>

<details>

<summary><strong>Comparison</strong> <code>PCGExComparison</code></summary>

Comparison check

⚡ PCG Overridable

</details>

<details>

<summary><strong>Tolerance</strong> <code>int32</code></summary>

Rounding mode for approx. comparison modes

⚡ PCG Overridable

</details>

<details>

<summary><strong>Invert</strong> <code>bool</code></summary>

Controls invert.

⚡ PCG Overridable

</details>

***

Source: `Source\PCGExElementsClusters\Public\Filters\Edges\PCGExEdgeNeighborsCountFilter.h`
