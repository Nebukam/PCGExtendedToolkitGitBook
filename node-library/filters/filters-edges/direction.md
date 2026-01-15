---
description: 'In editor :: PCGEx | Edge Filter : Edge Direction'
icon: circle-dashed
---

# Direction

Dot product comparison of the edge direction against a local attribute or constant.

📌 **Subnode** — Connects to **Filters** pins.

**How It Works**

> AI-Generated, needs proofreading

* The Edge Filter node computes the dot product between the edge direction and a specified direction (either from an attribute or a constant).
* Based on the comparison type set in "Comparison Quality", the node evaluates whether to retain or filter out edges according to their computed dot product value.
* If "Compare Against" is set to use an attribute, the node reads this attribute's value for each edge and converts it to a `double` for the comparison operation.
* The "Invert" setting reverses the outcome of the comparison, meaning edges that would otherwise be filtered out are retained, and vice versa.
* When using "Fast" comparison mode, adjacency consolidation is ignored in the filtering process.

#### Configuration

<details>

<summary><strong>Direction Settings</strong> <code>PCGExEdgeDirectionSettings</code></summary>

Defines the direction in which points will be ordered to form the final paths.

⚡ PCG Overridable

</details>

<details>

<summary><strong>Comparison Quality</strong> <code>PCGExDirectionCheckMode</code></summary>

Type of check; Note that Fast comparison ignores adjacency consolidation.

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

<summary><strong>Config</strong> <code>PCGExIsoEdgeDirectionFilterConfig</code></summary>

Test Config.

📦 See: IsoEdgeDirectionFilter configuration

⚡ PCG Overridable

</details>

<details>

<summary><strong>Direction Settings</strong> <code>PCGExEdgeDirectionSettings</code></summary>

Defines the direction in which points will be ordered to form the final paths.

⚡ PCG Overridable

</details>

<details>

<summary><strong>Comparison Quality</strong> <code>PCGExDirectionCheckMode</code></summary>

Type of check; Note that Fast comparison ignores adjacency consolidation.

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

Source: `Source\PCGExElementsClusters\Public\Filters\Edges\PCGExIsoEdgeDirectionFilter.h`
