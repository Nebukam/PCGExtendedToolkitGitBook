---
description: 'In editor :: PCGEx | Vtx Filter : Neighbors Count'
icon: circle-dashed
---

# Neighbors Count

Check against the node' neighbor count.

📌 **Subnode** — Connects to **Filters** pins.

**How It Works**

> AI-Generated, needs proofreading

* The node evaluates the number of neighbors for each vertex in a graph structure.
* It compares this neighbor count against a specified operand value (`Operand A`), which is internally converted to a `double`.
* The comparison uses a defined operator (e.g., equal, greater than) set by the "Comparison" setting and checks if the actual neighbor count meets this criterion.
* An optional tolerance can be applied to account for rounding errors or near matches in the comparison process.

#### Configuration

<details>

<summary><strong>Comparison</strong> <code>PCGExComparison</code></summary>

Comparison

</details>

<details>

<summary><strong>Compare Against</strong> <code>PCGExInputValueType</code></summary>

Type of Count

⚡ PCG Overridable

</details>

<details>

<summary><strong>Operand A (Attr)</strong> <code>PCGAttributePropertyInputSelector</code></summary>

Operand A for testing -- Will be translated to `double` under the hood.

⚡ PCG Overridable

</details>

<details>

<summary><strong>Operand A</strong> <code>int32</code></summary>

Constant Operand A for testing.

⚡ PCG Overridable

</details>

<details>

<summary><strong>Tolerance</strong> <code>double</code></summary>

Rounding mode for near measures

⚡ PCG Overridable

</details>

<details>

<summary><strong>Config</strong> <code>PCGExNodeNeighborsCountFilterConfig</code></summary>

Test Config.

📦 See: NodeNeighborsCountFilter configuration

⚡ PCG Overridable

</details>

<details>

<summary><strong>Comparison</strong> <code>PCGExComparison</code></summary>

Comparison

</details>

<details>

<summary><strong>Compare Against</strong> <code>PCGExInputValueType</code></summary>

Type of Count

⚡ PCG Overridable

</details>

<details>

<summary><strong>Operand A (Attr)</strong> <code>PCGAttributePropertyInputSelector</code></summary>

Operand A for testing -- Will be translated to `double` under the hood.

⚡ PCG Overridable

</details>

<details>

<summary><strong>Operand A</strong> <code>int32</code></summary>

Constant Operand A for testing.

⚡ PCG Overridable

</details>

<details>

<summary><strong>Tolerance</strong> <code>double</code></summary>

Rounding mode for near measures

⚡ PCG Overridable

</details>

***

Source: `Source\PCGExElementsClusters\Public\Filters\Nodes\PCGExNodeNeighborsCountFilter.h`
