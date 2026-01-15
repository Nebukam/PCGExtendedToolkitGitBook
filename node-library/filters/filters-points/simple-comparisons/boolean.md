---
description: 'In editor :: PCGEx | Filter : Bool Compare'
icon: circle-dashed
---

# Boolean

(bool) A == (bool) B

📌 **Subnode** — Connects to **Filters** pins.

**How It Works**

> AI-Generated, needs proofreading

* The node compares two boolean operands, `Operand A` and `Operand B`, after converting both to their underlying `double` representation for comparison purposes.
* `Operand A` is specified as the first operand for testing, while `Operand B` can be set either directly or through an attribute (`Operand B (Attr)`), with its type defined by `Compare Against`.
* The node uses a specified comparison operator (`Comparison`) to evaluate whether `Operand A` equals `Operand B`, outputting a boolean result based on the equality test.

#### Configuration

<details>

<summary><strong>Operand A</strong> <code>PCGAttributePropertyInputSelector</code></summary>

Operand A for testing -- Will be translated to `double` under the hood.

⚡ PCG Overridable

</details>

<details>

<summary><strong>Comparison</strong> <code>PCGExEquality</code></summary>

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

Operand B for testing -- Will be translated to `bool` under the hood.

⚡ PCG Overridable

</details>

<details>

<summary><strong>Operand B</strong> <code>bool</code></summary>

Operand B for testing

⚡ PCG Overridable

</details>

<details>

<summary><strong>Config</strong> <code>PCGExBooleanCompareFilterConfig</code></summary>

Filter Config.

📦 See: BooleanCompareFilter configuration

⚡ PCG Overridable

</details>

<details>

<summary><strong>Operand A</strong> <code>PCGAttributePropertyInputSelector</code></summary>

Operand A for testing -- Will be translated to `double` under the hood.

⚡ PCG Overridable

</details>

<details>

<summary><strong>Comparison</strong> <code>PCGExEquality</code></summary>

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

Operand B for testing -- Will be translated to `bool` under the hood.

⚡ PCG Overridable

</details>

<details>

<summary><strong>Operand B</strong> <code>bool</code></summary>

Operand B for testing

⚡ PCG Overridable

</details>

***

Source: `Source\PCGExFilters\Public\Filters\Points\PCGExBooleanCompareFilter.h`
