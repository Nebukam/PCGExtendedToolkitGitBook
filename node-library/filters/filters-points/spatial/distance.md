---
description: 'In editor :: PCGEx | Filter : Distance'
icon: circle-dashed
---

# Distance

Creates a filter definition that compares the distance from the point to the nearest target.

📌 **Subnode** — Connects to **Filters** pins.

**How It Works**

> AI-Generated, needs proofreading

* The node computes the distance from each point to its nearest target using the specified distance method in "Distance Details".
* It then compares this computed distance against an operand B value defined by "Compare Against" and "Distance Threshold (Attr)".
* Based on the comparison type set in "Comparison", the node filters points where the condition between the computed distance and the threshold is met.

#### Configuration

<details>

<summary><strong>Distance Details</strong> <code>PCGExDistanceDetails</code></summary>

Distance method to be used for source & target points.

📦 See: Distance configuration

⚡ PCG Overridable

</details>

<details>

<summary><strong>Comparison</strong> <code>PCGExComparison</code></summary>

Comparison

⚡ PCG Overridable

</details>

<details>

<summary><strong>Compare Against</strong> <code>PCGExInputValueType</code></summary>

Type of OperandB

⚡ PCG Overridable

</details>

<details>

<summary><strong>Distance Threshold (Attr)</strong> <code>PCGAttributePropertyInputSelector</code></summary>

Operand B for testing -- Will be translated to `double` under the hood.

⚡ PCG Overridable

</details>

<details>

<summary><strong>Distance Threshold</strong> <code>double</code></summary>

Operand B for testing

⚡ PCG Overridable

</details>

<details>

<summary><strong>Tolerance</strong> <code>double</code></summary>

Near-equality tolerance

⚡ PCG Overridable

</details>

<details>

<summary><strong>Ignore Self</strong> <code>bool</code></summary>

If enabled, a collection will never be tested against itself

⚡ PCG Overridable

</details>

<details>

<summary><strong>Check Against Data Bounds</strong> <code>bool</code></summary>

If enabled, when used with a collection filter, will use collection bounds as a proxy point instead of per-point testing

⚡ PCG Overridable

</details>

<details>

<summary><strong>Config</strong> <code>PCGExDistanceFilterConfig</code></summary>

Filter Config.

📦 See: DistanceFilter configuration

⚡ PCG Overridable

</details>

<details>

<summary><strong>Distance Details</strong> <code>PCGExDistanceDetails</code></summary>

Distance method to be used for source & target points.

📦 See: Distance configuration

⚡ PCG Overridable

</details>

<details>

<summary><strong>Comparison</strong> <code>PCGExComparison</code></summary>

Comparison

⚡ PCG Overridable

</details>

<details>

<summary><strong>Compare Against</strong> <code>PCGExInputValueType</code></summary>

Type of OperandB

⚡ PCG Overridable

</details>

<details>

<summary><strong>Distance Threshold (Attr)</strong> <code>PCGAttributePropertyInputSelector</code></summary>

Operand B for testing -- Will be translated to `double` under the hood.

⚡ PCG Overridable

</details>

<details>

<summary><strong>Distance Threshold</strong> <code>double</code></summary>

Operand B for testing

⚡ PCG Overridable

</details>

<details>

<summary><strong>Tolerance</strong> <code>double</code></summary>

Near-equality tolerance

⚡ PCG Overridable

</details>

<details>

<summary><strong>Ignore Self</strong> <code>bool</code></summary>

If enabled, a collection will never be tested against itself

⚡ PCG Overridable

</details>

<details>

<summary><strong>Check Against Data Bounds</strong> <code>bool</code></summary>

If enabled, when used with a collection filter, will use collection bounds as a proxy point instead of per-point testing

⚡ PCG Overridable

</details>

***

Source: `Source\PCGExFilters\Public\Filters\Points\PCGExDistanceFilter.h`
