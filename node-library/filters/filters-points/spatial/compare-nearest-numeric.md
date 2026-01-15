---
description: 'In editor :: PCGEx | Filter : Compare Nearest (Numeric)'
icon: circle-dashed
---

# Compare Nearest (Numeric)

Creates a filter definition that compares two numeric attribute values.

📌 **Subnode** — Connects to **Filters** pins.

**How It Works**

> AI-Generated, needs proofreading

* The node compares two numeric attribute values by translating both operands to `double` data type under the hood.
* It uses the specified comparison operator (set in "Comparison") to evaluate the relationship between Operand A and Operand B.
* Operand A is sourced from target points, while Operand B can be defined as either a specific attribute or a constant value based on the setting of "Compare Against".
* The node applies a distance method, selected via "Distance Details", for source & target points to determine proximity or similarity in their numeric values.

#### Configuration

<details>

<summary><strong>Distance Details</strong> <code>PCGExDistanceDetails</code></summary>

Distance method to be used for source & target points.

📦 See: Distance configuration

⚡ PCG Overridable

</details>

<details>

<summary><strong>Operand A</strong> <code>PCGAttributePropertyInputSelector</code></summary>

Operand A for testing -- Will be translated to `double` under the hood; read from the target points.

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

<summary><strong>Operand B (Attr)</strong> <code>PCGAttributePropertyInputSelector</code></summary>

Operand B for testing -- Will be translated to `double` under the hood.

⚡ PCG Overridable

</details>

<details>

<summary><strong>Operand B</strong> <code>double</code></summary>

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

Controls ignore self.

⚡ PCG Overridable

</details>

<details>

<summary><strong>Config</strong> <code>PCGExNumericCompareNearestFilterConfig</code></summary>

Filter Config.

📦 See: NumericCompareNearestFilter configuration

⚡ PCG Overridable

</details>

<details>

<summary><strong>Distance Details</strong> <code>PCGExDistanceDetails</code></summary>

Distance method to be used for source & target points.

📦 See: Distance configuration

⚡ PCG Overridable

</details>

<details>

<summary><strong>Operand A</strong> <code>PCGAttributePropertyInputSelector</code></summary>

Operand A for testing -- Will be translated to `double` under the hood; read from the target points.

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

<summary><strong>Operand B (Attr)</strong> <code>PCGAttributePropertyInputSelector</code></summary>

Operand B for testing -- Will be translated to `double` under the hood.

⚡ PCG Overridable

</details>

<details>

<summary><strong>Operand B</strong> <code>double</code></summary>

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

Controls ignore self.

⚡ PCG Overridable

</details>

***

Source: `Source\PCGExFilters\Public\Filters\Points\PCGExNumericCompareNearestFilter.h`
