---
description: 'In editor :: PCGEx | Vtx Filter : Edge Angle'
icon: circle-dashed
---

# Edge Angle

Dot product comparison of connected edges against themselves. Mostly useful on binary nodes only.

📌 **Subnode** — Connects to **Filters** pins.

**How It Works**

> AI-Generated, needs proofreading

* Computes the dot product between connected edges for each vertex to determine their relative angles.
* Compares the computed dot products against specified settings to filter vertices based on edge angle criteria.
* Returns predefined fallback values when processing leaf nodes (nodes with only one edge) or non-binary nodes (nodes with more than two edges).
* Inverts the filtering result, including fallbacks, if the "Invert" setting is enabled.

#### Configuration

<details>

<summary><strong>Leaves Fallback</strong> <code>PCGExFilterFallback</code></summary>

What should this filter return when dealing with leaves nodes? (node that only have one edge)

</details>

<details>

<summary><strong>Non Binary Fallback</strong> <code>PCGExFilterFallback</code></summary>

What should this filter return when dealing with complex, non-binary nodes? (node that have more that two edges)

</details>

<details>

<summary><strong>Dot Comparison Details</strong> <code>PCGExDotComparisonDetails</code></summary>

Dot comparison settings

📦 See: DotComparison configuration

⚡ PCG Overridable

</details>

<details>

<summary><strong>Invert</strong> <code>bool</code></summary>

Whether the result of the filter should be inverted or not. Note that this will also invert fallback results!

</details>

<details>

<summary><strong>Config</strong> <code>PCGExNodeEdgeAngleFilterConfig</code></summary>

Test Config.

📦 See: NodeEdgeAngleFilter configuration

⚡ PCG Overridable

</details>

<details>

<summary><strong>Leaves Fallback</strong> <code>PCGExFilterFallback</code></summary>

What should this filter return when dealing with leaves nodes? (node that only have one edge)

</details>

<details>

<summary><strong>Non Binary Fallback</strong> <code>PCGExFilterFallback</code></summary>

What should this filter return when dealing with complex, non-binary nodes? (node that have more that two edges)

</details>

<details>

<summary><strong>Dot Comparison Details</strong> <code>PCGExDotComparisonDetails</code></summary>

Dot comparison settings

📦 See: DotComparison configuration

⚡ PCG Overridable

</details>

<details>

<summary><strong>Invert</strong> <code>bool</code></summary>

Whether the result of the filter should be inverted or not. Note that this will also invert fallback results!

</details>

***

Source: `Source\PCGExElementsClusters\Public\Filters\Nodes\PCGExNodeEdgeAngleFilter.h`
