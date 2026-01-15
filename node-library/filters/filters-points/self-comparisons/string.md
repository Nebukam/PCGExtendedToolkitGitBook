---
description: 'In editor :: PCGEx | Filter : Self Compare (String)'
icon: circle-dashed
---

# String

Creates a filter definition that compares an attribute value against itself at another index.

📌 **Subnode** — Connects to **Filters** pins.

**How It Works**

> AI-Generated, needs proofreading

* The node receives an attribute value and translates Operand A to `double` for comparison purposes.
* It uses the specified Comparison setting to define how the current attribute value is compared against another instance of itself at a different index.
* Index Mode determines how the alternative index (specified by Index (Attr) and translated to `int32`) is used to fetch the second operand for comparison.
* The Compare Against setting specifies whether Operand B should be directly from an attribute or derived in some way, though specifics depend on implementation details not provided here.

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

Operand B for testing -- Will be translated to `int32` under the hood.

⚡ PCG Overridable

</details>

<details>

<summary><strong>Index</strong> <code>int32</code></summary>

Operand B for testing

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

<summary><strong>Swap Operands</strong> <code>bool</code></summary>

Swap operands. Useful to invert "contains" checks

⚡ PCG Overridable

</details>

<details>

<summary><strong>Config</strong> <code>PCGExStringSelfCompareFilterConfig</code></summary>

Filter Config.

📦 See: StringSelfCompareFilter configuration

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

Operand B for testing -- Will be translated to `int32` under the hood.

⚡ PCG Overridable

</details>

<details>

<summary><strong>Index</strong> <code>int32</code></summary>

Operand B for testing

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

<summary><strong>Swap Operands</strong> <code>bool</code></summary>

Swap operands. Useful to invert "contains" checks

⚡ PCG Overridable

</details>

***

Source: `Source\PCGExFilters\Public\Filters\Points\PCGExStringSelfCompareFilter.h`
