---
description: 'In editor :: PCGEx | Filter : Within Range'
icon: circle-dashed
---

# Within Range

Creates a filter definition check if a value is within a given range.

📌 **Subnode** — Connects to **Filters** pins.

**How It Works**

> AI-Generated, needs proofreading

* The node receives an input value for `Operand A`, which is internally converted to a `double` type for processing.
* It reads range values from specified sources and attributes, expecting ranges in the form of `FVector2` that define minimum (`Range Min`) and maximum (`Range Max`) bounds.
* The node evaluates whether the processed `Operand A` value falls within the defined range by comparing it against `Range Min` and `Range Max`.
* Outputs a boolean result indicating if `Operand A` is within the specified range.

#### Configuration

<details>

<summary><strong>Operand A</strong> <code>PCGAttributePropertyInputSelector</code></summary>

Operand A for testing -- Will be translated to `double` under the hood.

⚡ PCG Overridable

</details>

<details>

<summary><strong>Source</strong> <code>PCGExRangeSource</code></summary>

Where to read ranges from

**Values:**

* **Constant**: Constant
* **Attribute Set**: Reading FVector2 attributes from an external attribute set

⚡ PCG Overridable

</details>

<details>

<summary><strong>Attributes</strong> <code>Array of FPCGAttributePropertyInputSelector</code></summary>

List of attributes to read ranges from FVector2.

⚡ PCG Overridable

</details>

<details>

<summary><strong>Range Min</strong> <code>double</code></summary>

Range min value.

⚡ PCG Overridable

</details>

<details>

<summary><strong>Range Max</strong> <code>double</code></summary>

Range max value

⚡ PCG Overridable

</details>

<details>

<summary><strong>Inclusive</strong> <code>bool</code></summary>

Whether the test should be inclusive of min/max values

⚡ PCG Overridable

</details>

<details>

<summary><strong>Invert</strong> <code>bool</code></summary>

If enabled, invert the result of the test and pass if value is outside the given range

⚡ PCG Overridable

</details>

<details>

<summary><strong>Config</strong> <code>PCGExWithinRangeFilterConfig</code></summary>

Filter Config.

📦 See: WithinRangeFilter configuration

⚡ PCG Overridable

</details>

<details>

<summary><strong>Operand A</strong> <code>PCGAttributePropertyInputSelector</code></summary>

Operand A for testing -- Will be translated to `double` under the hood.

⚡ PCG Overridable

</details>

<details>

<summary><strong>Source</strong> <code>PCGExRangeSource</code></summary>

Where to read ranges from

**Values:**

* **Constant**: Constant
* **Attribute Set**: Reading FVector2 attributes from an external attribute set

⚡ PCG Overridable

</details>

<details>

<summary><strong>Attributes</strong> <code>Array of FPCGAttributePropertyInputSelector</code></summary>

List of attributes to read ranges from FVector2.

⚡ PCG Overridable

</details>

<details>

<summary><strong>Range Min</strong> <code>double</code></summary>

Range min value.

⚡ PCG Overridable

</details>

<details>

<summary><strong>Range Max</strong> <code>double</code></summary>

Range max value

⚡ PCG Overridable

</details>

<details>

<summary><strong>Inclusive</strong> <code>bool</code></summary>

Whether the test should be inclusive of min/max values

⚡ PCG Overridable

</details>

<details>

<summary><strong>Invert</strong> <code>bool</code></summary>

If enabled, invert the result of the test and pass if value is outside the given range

⚡ PCG Overridable

</details>

***

Source: `Source\PCGExFilters\Public\Filters\Points\PCGExWithinRangeFilter.h`
