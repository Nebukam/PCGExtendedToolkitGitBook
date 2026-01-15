---
description: 'In editor :: PCGEx | Vtx : Special Neighbors'
icon: circle-dashed
---

# Vtx : Special Neighbors

Fetch data from neighbors

📌 **Subnode** — Connects to **Vtx Properties** pins.

**How It Works**

> AI-Generated, needs proofreading

* The node fetches data from neighboring vertices based on specific criteria defined for edge lengths.
* For the "Largest Neighbor," the node selects the neighbor connected by the shortest edge.
* For the "Smallest Neighbor," the node selects the neighbor connected by the longest edge.
* Configuration options include settings related to directionality, which influence how neighbors are selected and processed.

#### Configuration

<details>

<summary><strong>Largest Neighbor</strong> <code>PCGExEdgeOutputWithIndexSettings</code></summary>

Shortest edge.

⚡ PCG Overridable

</details>

<details>

<summary><strong>Smallest Neighbor</strong> <code>PCGExEdgeOutputWithIndexSettings</code></summary>

Longest edge.

⚡ PCG Overridable

</details>

<details>

<summary><strong>Config</strong> <code>PCGExSpecialNeighborsConfig</code></summary>

Direction Settings.

📦 See: SpecialNeighbors configuration

⚡ PCG Overridable

</details>

<details>

<summary><strong>Largest Neighbor</strong> <code>PCGExEdgeOutputWithIndexSettings</code></summary>

Shortest edge.

⚡ PCG Overridable

</details>

<details>

<summary><strong>Smallest Neighbor</strong> <code>PCGExEdgeOutputWithIndexSettings</code></summary>

Longest edge.

⚡ PCG Overridable

</details>

***

Source: `Source\PCGExElementsClusters\Public\Elements\Meta\VtxProperties\PCGExVtxPropertySpecialNeighbors.h`
