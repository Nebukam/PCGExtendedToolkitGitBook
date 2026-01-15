---
description: 'In editor :: PCGEx | Vtx Filter : Adjacency'
icon: circle-dashed
---

# Adjacency

Numeric comparison of adjacent values, testing either adjacent nodes or connected edges.

📌 **Subnode** — Connects to **Filters** pins.

**How It Works**

> AI-Generated, needs proofreading

* The Vtx Filter : Adjacency node evaluates numeric values of adjacent vertices or connected edges based on specified settings.
* It translates Operand A to a `double` type for comparison purposes and uses the selected Comparison operator to test against either adjacent nodes or connected edges.
* Users can specify whether Operand A is an attribute value (Operand A (Attr)) or a constant value, which then gets compared with the numeric values of the adjacency as defined by the Adjacency Settings.

#### Configuration

<details>

<summary><strong>Adjacency</strong> <code>PCGExAdjacencySettings</code></summary>

Adjacency Settings

</details>

<details>

<summary><strong>Compare Against</strong> <code>PCGExInputValueType</code></summary>

Type of OperandA

⚡ PCG Overridable

</details>

<details>

<summary><strong>Operand A (Attr)</strong> <code>PCGAttributePropertyInputSelector</code></summary>

Operand A for testing -- Will be translated to `double` under the hood.

⚡ PCG Overridable

</details>

<details>

<summary><strong>Operand A</strong> <code>double</code></summary>

Constant Operand A for testing.

⚡ PCG Overridable

</details>

<details>

<summary><strong>Comparison</strong> <code>PCGExComparison</code></summary>

Comparison

</details>

<details>

<summary><strong>Operand BSource</strong> <code>PCGExClusterElement</code></summary>

Source of the Operand B value -- either the neighboring point, or the edge connecting to that point.

</details>

<details>

<summary><strong>Operand B (Neighbor)</strong> <code>PCGAttributePropertyInputSelector</code></summary>

Operand B for testing -- Will be translated to `double` under the hood.

</details>

<details>

<summary><strong>Tolerance</strong> <code>double</code></summary>

Rounding mode for near measures

⚡ PCG Overridable

</details>

<details>

<summary><strong>Config</strong> <code>PCGExNodeAdjacencyFilterConfig</code></summary>

Test Config.

📦 See: NodeAdjacencyFilter configuration

⚡ PCG Overridable

</details>

<details>

<summary><strong>Adjacency</strong> <code>PCGExAdjacencySettings</code></summary>

Adjacency Settings

</details>

<details>

<summary><strong>Compare Against</strong> <code>PCGExInputValueType</code></summary>

Type of OperandA

⚡ PCG Overridable

</details>

<details>

<summary><strong>Operand A (Attr)</strong> <code>PCGAttributePropertyInputSelector</code></summary>

Operand A for testing -- Will be translated to `double` under the hood.

⚡ PCG Overridable

</details>

<details>

<summary><strong>Operand A</strong> <code>double</code></summary>

Constant Operand A for testing.

⚡ PCG Overridable

</details>

<details>

<summary><strong>Comparison</strong> <code>PCGExComparison</code></summary>

Comparison

</details>

<details>

<summary><strong>Operand BSource</strong> <code>PCGExClusterElement</code></summary>

Source of the Operand B value -- either the neighboring point, or the edge connecting to that point.

</details>

<details>

<summary><strong>Operand B (Neighbor)</strong> <code>PCGAttributePropertyInputSelector</code></summary>

Operand B for testing -- Will be translated to `double` under the hood.

</details>

<details>

<summary><strong>Tolerance</strong> <code>double</code></summary>

Rounding mode for near measures

⚡ PCG Overridable

</details>

***

Source: `Source\PCGExElementsClusters\Public\Filters\Nodes\PCGExNodeAdjacencyFilter.h`
