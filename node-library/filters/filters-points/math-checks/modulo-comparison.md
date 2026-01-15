---
description: 'In editor :: PCGEx | Filter : Modulo Compare'
icon: circle-dashed
---

# Modulo Comparison

A % B != C

📌 **Subnode** — Connects to **Filters** pins.

**How It Works**

> AI-Generated, needs proofreading

* The node computes the modulo operation between `Operand A` and `Operand B`, where both operands are converted to `double`.
* It then compares the result of this modulo operation against `C` using the specified comparison operator.
* If the comparison evaluates to true, the input data associated with `Operand A` passes through the filter; otherwise, it does not.

#### Configuration

<details>

<summary><strong>Operand A</strong> <code>PCGAttributePropertyInputSelector</code></summary>

Operand A for testing -- Will be translated to `double` under the hood.

⚡ PCG Overridable

</details>

<details>

<summary><strong>Operand BSource</strong> <code>PCGExInputValueType</code></summary>

Type of OperandB

⚡ PCG Overridable

</details>

<details>

<summary><strong>Operand B (Attr)</strong> <code>PCGAttributePropertyInputSelector</code></summary>

Operand B for testing (Modulo base) -- Will be translated to `double` under the hood.

⚡ PCG Overridable

</details>

<details>

<summary><strong>Operand B</strong> <code>double</code></summary>

Operand B for testing

⚡ PCG Overridable

</details>

<details>

<summary><strong>Comparison</strong> <code>PCGExComparison</code></summary>

Comparison

⚡ PCG Overridable

</details>

<details>

<summary><strong>Compare Against</strong> <code>PCGExInputValueType</code></summary>

Type of OperandC

⚡ PCG Overridable

</details>

<details>

<summary><strong>Operand C</strong> <code>PCGAttributePropertyInputSelector</code></summary>

Operand C for testing -- Will be translated to `double` under the hood.

⚡ PCG Overridable

</details>

<details>

<summary><strong>Operand C</strong> <code>double</code></summary>

Operand C for testing

⚡ PCG Overridable

</details>

<details>

<summary><strong>Tolerance</strong> <code>double</code></summary>

Near-equality tolerance

⚡ PCG Overridable

</details>

<details>

<summary><strong>Zero Result</strong> <code>bool</code></summary>

Which value to return when dealing with zero-values

⚡ PCG Overridable

</details>

<details>

<summary><strong>Config</strong> <code>PCGExModuloCompareFilterConfig</code></summary>

Filter Config.

📦 See: ModuloCompareFilter configuration

⚡ PCG Overridable

</details>

<details>

<summary><strong>Operand A</strong> <code>PCGAttributePropertyInputSelector</code></summary>

Operand A for testing -- Will be translated to `double` under the hood.

⚡ PCG Overridable

</details>

<details>

<summary><strong>Operand BSource</strong> <code>PCGExInputValueType</code></summary>

Type of OperandB

⚡ PCG Overridable

</details>

<details>

<summary><strong>Operand B (Attr)</strong> <code>PCGAttributePropertyInputSelector</code></summary>

Operand B for testing (Modulo base) -- Will be translated to `double` under the hood.

⚡ PCG Overridable

</details>

<details>

<summary><strong>Operand B</strong> <code>double</code></summary>

Operand B for testing

⚡ PCG Overridable

</details>

<details>

<summary><strong>Comparison</strong> <code>PCGExComparison</code></summary>

Comparison

⚡ PCG Overridable

</details>

<details>

<summary><strong>Compare Against</strong> <code>PCGExInputValueType</code></summary>

Type of OperandC

⚡ PCG Overridable

</details>

<details>

<summary><strong>Operand C</strong> <code>PCGAttributePropertyInputSelector</code></summary>

Operand C for testing -- Will be translated to `double` under the hood.

⚡ PCG Overridable

</details>

<details>

<summary><strong>Operand C</strong> <code>double</code></summary>

Operand C for testing

⚡ PCG Overridable

</details>

<details>

<summary><strong>Tolerance</strong> <code>double</code></summary>

Near-equality tolerance

⚡ PCG Overridable

</details>

<details>

<summary><strong>Zero Result</strong> <code>bool</code></summary>

Which value to return when dealing with zero-values

⚡ PCG Overridable

</details>

***

Source: `Source\PCGExFilters\Public\Filters\Points\PCGExModuloCompareFilter.h`
