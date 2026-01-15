---
description: 'In editor :: PCGEx | Fill Control : Edge Filters'
icon: circle-dashed
---

# FC : Edge Filters

Filter edges along which the diffusion can occur.

📌 **Subnode** — Connects to **Filters** pins.

**How It Works**

> AI-Generated, needs proofreading

* The Fill Control : Edge Filters node processes edges within a graph structure to determine which edges are eligible for diffusion based on specified criteria.
* It utilizes settings from the Config: Control Config parameter to apply filters that define conditions under which diffusion can occur across edges.
* Edges failing to meet these filter criteria are excluded from the diffusion process, effectively controlling how information or values spread through the graph.

#### Configuration

<details>

<summary><strong>Config</strong> <code>PCGExFillControlConfigEdgeFilters</code></summary>

Control Config.

📦 See: FillControlConfigEdgeFilters configuration

⚡ PCG Overridable

</details>

***

Source: `Source\PCGExElementsClusters\Public\Elements\FloodFill\FillControls\PCGExFillControlEdgeFilters.h`
