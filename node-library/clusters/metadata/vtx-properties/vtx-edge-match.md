---
description: 'In editor :: PCGEx | Vtx : Edge Match'
icon: circle-dashed
---

# Vtx : Edge Match

Find the edge that matches the closest provided direction.

📌 **Subnode** — Connects to **Filters** pins.

**How It Works**

> AI-Generated, needs proofreading

* The node identifies an origin point based on the specified "Origin: Direction orientation" setting to serve as the reference for direction comparison.
* It reads the direction input from the location defined by "Direction Input" and uses this direction vector for further processing.
* For each edge, the node computes a dot product between the provided direction (from "Direction (Attr)") and the direction of the current edge being evaluated.
* The node compares these computed dot products to find the edge with the highest value, indicating the closest match in direction to the input direction.
* If "Invert" is set to true, the node instead finds the edge with the smallest dot product value.

#### Configuration

<details>

<summary><strong>Origin</strong> <code>PCGExAdjacencyDirectionOrigin</code></summary>

Direction orientation

⚡ PCG Overridable

</details>

<details>

<summary><strong>Direction Input</strong> <code>PCGExInputValueType</code></summary>

Where to read the compared direction from.

⚡ PCG Overridable

</details>

<details>

<summary><strong>Direction (Attr)</strong> <code>PCGAttributePropertyInputSelector</code></summary>

Direction for computing the dot product against the edge's.

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

Whether to transform the direction source by the vtx' transform

⚡ PCG Overridable

</details>

<details>

<summary><strong>Dot Comparison Details</strong> <code>PCGExDotComparisonDetails</code></summary>

Dot comparison settings

📦 See: DotComparison configuration

⚡ PCG Overridable

</details>

<details>

<summary><strong>Output</strong> <code>PCGExEdgeOutputWithIndexSettings</code></summary>

Matching edge.

⚡ PCG Overridable

</details>

<details>

<summary><strong>Config</strong> <code>PCGExEdgeMatchConfig</code></summary>

Direction Settings.

📦 See: EdgeMatch configuration

⚡ PCG Overridable

</details>

<details>

<summary><strong>Origin</strong> <code>PCGExAdjacencyDirectionOrigin</code></summary>

Direction orientation

⚡ PCG Overridable

</details>

<details>

<summary><strong>Direction Input</strong> <code>PCGExInputValueType</code></summary>

Where to read the compared direction from.

⚡ PCG Overridable

</details>

<details>

<summary><strong>Direction (Attr)</strong> <code>PCGAttributePropertyInputSelector</code></summary>

Direction for computing the dot product against the edge's.

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

Whether to transform the direction source by the vtx' transform

⚡ PCG Overridable

</details>

<details>

<summary><strong>Dot Comparison Details</strong> <code>PCGExDotComparisonDetails</code></summary>

Dot comparison settings

📦 See: DotComparison configuration

⚡ PCG Overridable

</details>

<details>

<summary><strong>Output</strong> <code>PCGExEdgeOutputWithIndexSettings</code></summary>

Matching edge.

⚡ PCG Overridable

</details>

***

Source: `Source\PCGExElementsClusters\Public\Elements\Meta\VtxProperties\PCGExVtxPropertyEdgeMatch.h`
