---
description: 'In editor :: PCGEx | Filter : Compare (Numeric)'
icon: circle-dashed
---

# Numeric

Creates a filter definition that compares two numeric attribute values.

📌 **Subnode** — Connects to **Filters** pins.

**How It Works**

> AI-Generated, needs proofreading

* Receives two numeric operands (Operand A and Operand B) which are internally converted to `double` for comparison.
* Utilizes the specified Comparison setting to define the type of comparison operation (e.g., equals, greater than).
* Determines the source of Operand B based on the Compare Against setting, whether it's an attribute value or a direct numeric input.
* Executes the comparison between Operand A and Operand B according to the defined Comparison setting.
* Outputs a boolean result indicating whether the comparison condition is met.

#### Configuration

<details>

<summary><strong>Operand A</strong> <code>PCGAttributePropertyInputSelector</code></summary>

Operand A for testing -- Will be translated to `double` under the hood.

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

<summary><strong>Config</strong> <code>PCGExNumericCompareFilterConfig</code></summary>

Filter Config.

📦 See: NumericCompareFilter configuration

⚡ PCG Overridable

</details>

<details>

<summary><strong>Operand A</strong> <code>PCGAttributePropertyInputSelector</code></summary>

Operand A for testing -- Will be translated to `double` under the hood.

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

***

Source: `Source\PCGExFilters\Public\Filters\Points\PCGExNumericCompareFilter.h`
