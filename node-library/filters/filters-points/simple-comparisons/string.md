---
description: 'In editor :: PCGEx | Filter : Compare (String)'
icon: circle-dashed
---

# String

Creates a filter definition that compares two string attribute values.

📌 **Subnode** — Connects to **Filters** pins.

**How It Works**

> AI-Generated, needs proofreading

* The node receives two string attribute values: Operand A and Operand B (Attr), both of which are internally converted to `double` for comparison purposes.
* Based on the specified Comparison setting, the node performs a comparison between the translated double values of Operand A and Operand B (Attr).
* The Compare Against setting determines whether Operand B is an attribute value or a direct input value, influencing how Operand B is interpreted in the comparison process.

#### Configuration

<details>

<summary><strong>Operand A</strong> <code>Name</code></summary>

Operand A for testing -- Will be translated to `double` under the hood.

⚡ PCG Overridable

</details>

<details>

<summary><strong>Comparison</strong> <code>PCGExStringComparison</code></summary>

Comparison

⚡ PCG Overridable

</details>

<details>

<summary><strong>Compare Against</strong> <code>PCGExInputValueType</code></summary>

Type of OperandB

⚡ PCG Overridable

</details>

<details>

<summary><strong>Operand B (Attr)</strong> <code>Name</code></summary>

Operand B for testing -- Will be translated to `double` under the hood.

⚡ PCG Overridable

</details>

<details>

<summary><strong>Operand B</strong> <code>String</code></summary>

Operand B for testing

⚡ PCG Overridable

</details>

<details>

<summary><strong>Swap Operands</strong> <code>bool</code></summary>

Swap operands. Useful to invert "contains" checks

⚡ PCG Overridable

</details>

<details>

<summary><strong>Config</strong> <code>PCGExStringCompareFilterConfig</code></summary>

State name.

📦 See: StringCompareFilter configuration

⚡ PCG Overridable

</details>

<details>

<summary><strong>Operand A</strong> <code>Name</code></summary>

Operand A for testing -- Will be translated to `double` under the hood.

⚡ PCG Overridable

</details>

<details>

<summary><strong>Comparison</strong> <code>PCGExStringComparison</code></summary>

Comparison

⚡ PCG Overridable

</details>

<details>

<summary><strong>Compare Against</strong> <code>PCGExInputValueType</code></summary>

Type of OperandB

⚡ PCG Overridable

</details>

<details>

<summary><strong>Operand B (Attr)</strong> <code>Name</code></summary>

Operand B for testing -- Will be translated to `double` under the hood.

⚡ PCG Overridable

</details>

<details>

<summary><strong>Operand B</strong> <code>String</code></summary>

Operand B for testing

⚡ PCG Overridable

</details>

<details>

<summary><strong>Swap Operands</strong> <code>bool</code></summary>

Swap operands. Useful to invert "contains" checks

⚡ PCG Overridable

</details>

***

Source: `Source\PCGExFilters\Public\Filters\Points\PCGExStringCompareFilter.h`
