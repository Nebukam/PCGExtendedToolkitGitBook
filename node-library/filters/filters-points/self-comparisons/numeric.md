---
description: 'In editor :: PCGEx | Filter : Self Compare (Numeric)'
icon: circle-dashed
---

# Numeric

Creates a filter definition that compares an attribute numeric value against itself at another index.

📌 **Subnode** — Connects to **Filters** pins.

**How It Works**

> AI-Generated, needs proofreading

* The node receives an attribute's numeric value and translates Operand A to a `double` for comparison purposes.
* Utilizes the specified Comparison setting to evaluate the relationship between the current numeric value and another value from the same attribute at a different index defined by Index Mode.
* Applies the Tolerance setting to determine near-equality, if applicable, when performing the comparison operation.
* The Compare Against setting determines how Operand B is derived for the comparison against Operand A.

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

<summary><strong>Tolerance</strong> <code>double</code></summary>

Near-equality tolerance

⚡ PCG Overridable

</details>

<details>

<summary><strong>Index Mode</strong> <code>PCGExIndexMode</code></summary>

Index mode

⚡ PCG Overridable

</details>

<details>

<summary><strong>Compare Against</strong> <code>PCGExInputValueType</code></summary>

Type of OperandB

⚡ PCG Overridable

</details>

<details>

<summary><strong>Index (Attr)</strong> <code>PCGAttributePropertyInputSelector</code></summary>

Index value to use according to the selected Index Mode -- Will be translated to `int32` under the hood.

⚡ PCG Overridable

</details>

<details>

<summary><strong>Index</strong> <code>int32</code></summary>

Const Index value to use according to the selected Index Mode

⚡ PCG Overridable

</details>

<details>

<summary><strong>Index Safety</strong> <code>PCGExIndexSafety</code></summary>

Index safety

⚡ PCG Overridable

</details>

<details>

<summary><strong>Invalid Index Fallback</strong> <code>PCGExFilterFallback</code></summary>

How to deal with invalid indices

⚡ PCG Overridable

</details>

<details>

<summary><strong>Config</strong> <code>PCGExNumericSelfCompareFilterConfig</code></summary>

Filter Config.

📦 See: NumericSelfCompareFilter configuration

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

<summary><strong>Tolerance</strong> <code>double</code></summary>

Near-equality tolerance

⚡ PCG Overridable

</details>

<details>

<summary><strong>Index Mode</strong> <code>PCGExIndexMode</code></summary>

Index mode

⚡ PCG Overridable

</details>

<details>

<summary><strong>Compare Against</strong> <code>PCGExInputValueType</code></summary>

Type of OperandB

⚡ PCG Overridable

</details>

<details>

<summary><strong>Index (Attr)</strong> <code>PCGAttributePropertyInputSelector</code></summary>

Index value to use according to the selected Index Mode -- Will be translated to `int32` under the hood.

⚡ PCG Overridable

</details>

<details>

<summary><strong>Index</strong> <code>int32</code></summary>

Const Index value to use according to the selected Index Mode

⚡ PCG Overridable

</details>

<details>

<summary><strong>Index Safety</strong> <code>PCGExIndexSafety</code></summary>

Index safety

⚡ PCG Overridable

</details>

<details>

<summary><strong>Invalid Index Fallback</strong> <code>PCGExFilterFallback</code></summary>

How to deal with invalid indices

⚡ PCG Overridable

</details>

***

Source: `Source\PCGExFilters\Public\Filters\Points\PCGExNumericSelfCompareFilter.h`
