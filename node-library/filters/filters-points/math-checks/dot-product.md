---
description: 'In editor :: PCGEx | Filter : Dot'
icon: circle-dashed
---

# Dot Product

Creates a filter definition that compares dot value of two vectors.

📌 **Subnode** — Connects to **Filters** pins.

**How It Works**

> AI-Generated, needs proofreading

* Computes the dot product between two vectors, where Operand A is one vector and Operand B (Attr) is the other vector.
* Applies a transformation to Operand A using the local point's transform if "Transform Operand A" is enabled.
* Inverts the result of the dot product calculation if the "Invert" setting is set to true.
* Compares the computed (and possibly inverted) dot product against the specified type defined in "Compare Against".

#### Configuration

<details>

<summary><strong>Operand A</strong> <code>PCGAttributePropertyInputSelector</code></summary>

Vector operand A

</details>

<details>

<summary><strong>Transform Operand A</strong> <code>bool</code></summary>

Transform OperandA with the local point' transform

⚡ PCG Overridable

</details>

<details>

<summary><strong>└─ Invert</strong> <code>bool</code></summary>

Controls └─ invert.

⚡ PCG Overridable

</details>

<details>

<summary><strong>Compare Against</strong> <code>PCGExInputValueType</code></summary>

Type of OperandB

⚡ PCG Overridable

</details>

<details>

<summary><strong>Operand B (Attr)</strong> <code>PCGAttributePropertyInputSelector</code></summary>

Operand B for computing the dot product

⚡ PCG Overridable

</details>

<details>

<summary><strong>└─ Invert</strong> <code>bool</code></summary>

Controls └─ invert.

⚡ PCG Overridable

</details>

<details>

<summary><strong>Operand B</strong> <code>Vector</code></summary>

Operand B for computing the dot product.

⚡ PCG Overridable

</details>

<details>

<summary><strong>Transform Operand B</strong> <code>bool</code></summary>

Transform OperandB with the local point' transform

⚡ PCG Overridable

</details>

<details>

<summary><strong>Dot Comparison Details</strong> <code>PCGExDotComparisonDetails</code></summary>

Dot comparison settings

📦 See: DotComparison configuration

⚡ PCG Overridable

</details>

<details>

<summary><strong>Config</strong> <code>PCGExDotFilterConfig</code></summary>

Filter Config.

📦 See: DotFilter configuration

⚡ PCG Overridable

</details>

<details>

<summary><strong>Operand A</strong> <code>PCGAttributePropertyInputSelector</code></summary>

Vector operand A

</details>

<details>

<summary><strong>Transform Operand A</strong> <code>bool</code></summary>

Transform OperandA with the local point' transform

⚡ PCG Overridable

</details>

<details>

<summary><strong>└─ Invert</strong> <code>bool</code></summary>

Controls └─ invert.

⚡ PCG Overridable

</details>

<details>

<summary><strong>Compare Against</strong> <code>PCGExInputValueType</code></summary>

Type of OperandB

⚡ PCG Overridable

</details>

<details>

<summary><strong>Operand B (Attr)</strong> <code>PCGAttributePropertyInputSelector</code></summary>

Operand B for computing the dot product

⚡ PCG Overridable

</details>

<details>

<summary><strong>└─ Invert</strong> <code>bool</code></summary>

Controls └─ invert.

⚡ PCG Overridable

</details>

<details>

<summary><strong>Operand B</strong> <code>Vector</code></summary>

Operand B for computing the dot product.

⚡ PCG Overridable

</details>

<details>

<summary><strong>Transform Operand B</strong> <code>bool</code></summary>

Transform OperandB with the local point' transform

⚡ PCG Overridable

</details>

<details>

<summary><strong>Dot Comparison Details</strong> <code>PCGExDotComparisonDetails</code></summary>

Dot comparison settings

📦 See: DotComparison configuration

⚡ PCG Overridable

</details>

***

Source: `Source\PCGExFilters\Public\Filters\Points\PCGExDotFilter.h`
