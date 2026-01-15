---
description: 'In editor :: PCGEx | Vtx Filter : Edge Direction'
icon: circle-dashed
---

# Edge Direction

Dot product comparison of connected edges against a direction attribute stored on the vtx.

📌 **Subnode** — Connects to **Filters** pins.

**How It Works**

> AI-Generated, needs proofreading

* The node computes the dot product between the direction of connected edges and a specified direction attribute stored on the vertex (`Direction (Attr)`).
* It compares this computed dot product against a threshold defined by `Comparison Quality`, with the `Fast` setting potentially bypassing adjacency consolidation for quicker processing.
* The comparison uses the direction read from the location specified in `Compare Against`, translating it into a `double` type for consistency in calculations.

#### Configuration

<details>

<summary><strong>Comparison Quality</strong> <code>PCGExDirectionCheckMode</code></summary>

Type of check; Note that Fast comparison ignores adjacency consolidation.

</details>

<details>

<summary><strong>Adjacency</strong> <code>PCGExAdjacencySettings</code></summary>

Adjacency Settings

⚡ PCG Overridable

</details>

<details>

<summary><strong>Direction Order</strong> <code>PCGExAdjacencyDirectionOrigin</code></summary>

Direction orientation

</details>

<details>

<summary><strong>Compare Against</strong> <code>PCGExInputValueType</code></summary>

Where to read the compared direction from.

</details>

<details>

<summary><strong>Direction (Attr)</strong> <code>PCGAttributePropertyInputSelector</code></summary>

Operand B for testing -- Will be translated to `double` under the hood.

⚡ PCG Overridable

</details>

<details>

<summary><strong>└─ Invert</strong> <code>bool</code></summary>

Controls └─ invert.

⚡ PCG Overridable

</details>

<details>

<summary><strong>Direction</strong> <code>Vector</code></summary>

Direction for computing the dot product against the edge's.

⚡ PCG Overridable

</details>

<details>

<summary><strong>Transform Direction</strong> <code>bool</code></summary>

Transform the reference direction with the local point' transform

⚡ PCG Overridable

</details>

<details>

<summary><strong>Dot Comparison Details</strong> <code>PCGExDotComparisonDetails</code></summary>

Dot comparison settings

📦 See: DotComparison configuration

⚡ PCG Overridable

</details>

<details>

<summary><strong>Hash Comparison Details</strong> <code>PCGExVectorHashComparisonDetails</code></summary>

Hash comparison settings

📦 See: VectorHashComparison configuration

⚡ PCG Overridable

</details>

<details>

<summary><strong>Config</strong> <code>PCGExNodeEdgeDirectionFilterConfig</code></summary>

Test Config.

📦 See: NodeEdgeDirectionFilter configuration

⚡ PCG Overridable

</details>

<details>

<summary><strong>Comparison Quality</strong> <code>PCGExDirectionCheckMode</code></summary>

Type of check; Note that Fast comparison ignores adjacency consolidation.

</details>

<details>

<summary><strong>Adjacency</strong> <code>PCGExAdjacencySettings</code></summary>

Adjacency Settings

⚡ PCG Overridable

</details>

<details>

<summary><strong>Direction Order</strong> <code>PCGExAdjacencyDirectionOrigin</code></summary>

Direction orientation

</details>

<details>

<summary><strong>Compare Against</strong> <code>PCGExInputValueType</code></summary>

Where to read the compared direction from.

</details>

<details>

<summary><strong>Direction (Attr)</strong> <code>PCGAttributePropertyInputSelector</code></summary>

Operand B for testing -- Will be translated to `double` under the hood.

⚡ PCG Overridable

</details>

<details>

<summary><strong>└─ Invert</strong> <code>bool</code></summary>

Controls └─ invert.

⚡ PCG Overridable

</details>

<details>

<summary><strong>Direction</strong> <code>Vector</code></summary>

Direction for computing the dot product against the edge's.

⚡ PCG Overridable

</details>

<details>

<summary><strong>Transform Direction</strong> <code>bool</code></summary>

Transform the reference direction with the local point' transform

⚡ PCG Overridable

</details>

<details>

<summary><strong>Dot Comparison Details</strong> <code>PCGExDotComparisonDetails</code></summary>

Dot comparison settings

📦 See: DotComparison configuration

⚡ PCG Overridable

</details>

<details>

<summary><strong>Hash Comparison Details</strong> <code>PCGExVectorHashComparisonDetails</code></summary>

Hash comparison settings

📦 See: VectorHashComparison configuration

⚡ PCG Overridable

</details>

***

Source: `Source\PCGExElementsClusters\Public\Filters\Nodes\PCGExNodeEdgeDirectionFilter.h`
