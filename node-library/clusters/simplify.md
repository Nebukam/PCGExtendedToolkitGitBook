---
description: 'In editor :: PCGEx | Cluster : Simplify'
icon: circle
---

# Simplify

Simplify connections by operating on isolated chains of nodes (only two neighbors).

**How It Works**

> AI-Generated, needs proofreading

* The Cluster : Simplify node processes isolated chains of nodes where each node has only two neighbors to simplify connections.
* If "Operate On Leaves Only" is enabled, the node checks for and operates on dead-end nodes (nodes with one connection).
* When "Merge Above Angular Threshold" is set to true and an angular threshold is defined, nodes are merged if their angle falls below this threshold; enabling "Invert" reverses this behavior, targeting angles above the threshold instead.
* The "Edge Filter Role" setting defines how connected edge filters interact with the simplification process, though specific interactions depend on additional configuration not detailed here.

#### Configuration

<details>

<summary><strong>Operate On Leaves Only</strong> <code>bool</code></summary>

If enabled, only check for dead ends.

⚡ PCG Overridable

</details>

<details>

<summary><strong>Edge Filter Role</strong> <code>PCGExSimplifyClusterEdgeFilterRole</code></summary>

Define the behavior of connected edge filters, if any

**Values:**

* **Preserve**: Preserve endpoints of edges that pass the filters
* **Collapse**: Collapse endpoints of edges that pass the filters

⚡ PCG Overridable

</details>

<details>

<summary><strong>Merge Above Angular Threshold</strong> <code>bool</code></summary>

Controls merge above angular threshold.

⚡ PCG Overridable

</details>

<details>

<summary><strong>Angular Threshold</strong> <code>double</code></summary>

If enabled, uses an angular threshold below which nodes are merged.

⚡ PCG Overridable

</details>

<details>

<summary><strong>├─ Invert</strong> <code>bool</code></summary>

Removes hard angles instead of collinear ones.

⚡ PCG Overridable

</details>

<details>

<summary><strong>├─ Fuse Collocated</strong> <code>bool</code></summary>

If enabled, will consider collocated binary nodes for collocation and remove them as part of the simplification.

⚡ PCG Overridable

</details>

<details>

<summary><strong>└─ Tolerance</strong> <code>double</code></summary>

Distance used to consider point to be overlapping.

⚡ PCG Overridable

</details>

<details>

<summary><strong>Prune Leaves</strong> <code>bool</code></summary>

If enabled, prune dead ends.

⚡ PCG Overridable

</details>

<details>

<summary><strong>Cluster Output Settings</strong> <code>PCGExGraphBuilderDetails</code></summary>

Graph & Edges output properties

📦 See: [Cluster Output Settings](https://pcgex.gitbook.io/pcgex/node-library/clusters/common-settings/output-settings)

⚡ PCG Overridable

</details>

**Data Blending**

<details>

<summary><strong>Edge Blending Details</strong> <code>PCGExBlendingDetails</code></summary>

Defines how fused point properties and attributes are merged together for Edges (When an edge is the result of a simplification).

📦 See: Blending configuration

⚡ PCG Overridable

</details>

<details>

<summary><strong>Carry Over Settings</strong> <code>PCGExCarryOverDetails</code></summary>

Meta filter settings for edge data.

📦 See: CarryOver configuration

⚡ PCG Overridable

</details>

<details>

<summary><strong>Edge Union Data</strong> <code>PCGExEdgeUnionMetadataDetails</code></summary>

Edge Union Data

📦 See: EdgeUnionMetadata configuration

⚡ PCG Overridable

</details>

***

Source: `Source\PCGExElementsClusters\Public\Elements\PCGExSimplifyClusters.h`
