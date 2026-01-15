---
description: 'In editor :: PCGEx | Cluster : Refine'
icon: scrubber
---

# Refine Cluster

Refine edges according to special rules.

**How It Works**

> AI-Generated, needs proofreading

* The Cluster : Refine node applies refinement rules to edges using the PCGExEdgeRefineInstancedFactory for processing.
* It outputs refined edge results through the PCGExRefineEdgesOutput mode.
* Vertex and edge results are detailed in the PCGExFilterResultDetails structure, providing specific outcomes of the refinement process.
* The node includes a setting "Allow Zero Point Outputs" which is a boolean value that determines whether outputs with zero points are permitted.

#### Configuration

<details>

<summary><strong>Refinement</strong> <code>PCGExEdgeRefineInstancedFactory</code> ⚙️</summary>

Instanced pcgexedgerefineinstancedfactory behavior.

⚡ PCG Overridable

</details>

<details>

<summary><strong>Mode</strong> <code>PCGExRefineEdgesOutput</code></summary>

Controls mode.

**Values:**

* **Clusters**: Outputs clusters.
* **Points**
* **Attribute**: Writes the result of the filters to an attribute.

</details>

<details>

<summary><strong>├─ Vtx Result</strong> <code>PCGExFilterResultDetails</code></summary>

Controls ├─ vtx result.

📦 See: FilterResult configuration

⚡ PCG Overridable

</details>

<details>

<summary><strong>└─ Edge Result</strong> <code>PCGExFilterResultDetails</code></summary>

Controls └─ edge result.

📦 See: FilterResult configuration

⚡ PCG Overridable

</details>

<details>

<summary><strong>Allow Zero Point Outputs</strong> <code>bool</code></summary>

Controls allow zero point outputs.

</details>

<details>

<summary><strong>Sanitization</strong> <code>PCGExRefineSanitization</code></summary>

Controls sanitization.

**Values:**

* **None**: No sanitization.
* **Shortest**: If a node has no edge left, restore the shortest one.
* **Longest**: If a node has no edge left, restore the longest one.
* **Filters**: Use filters to find edges that must be preserved.

</details>

<details>

<summary><strong>Restore Edges That Connect To Valid Nodes</strong> <code>bool</code></summary>

Controls restore edges that connect to valid nodes.

</details>

<details>

<summary><strong>Cluster Output Settings</strong> <code>PCGExGraphBuilderDetails</code></summary>

Graph & Edges output properties

📦 See: [Cluster Output Settings](https://pcgex.gitbook.io/pcgex/node-library/clusters/common-settings/output-settings)

⚡ PCG Overridable

</details>

***

Source: `Source\PCGExElementsClusters\Public\Elements\PCGExRefineEdges.h`
