---
description: 'In editor :: PCGEx | Find Clusters'
icon: circle
---

# Find Clusters

{% hint style="info" %}
This page was generated from the source code. It should properly capture what the node does, but still needs to be proofread by a human.
{% endhint %}

> Identifies connected vertex and edge data within input collections to help organize procedural content into meaningful groups.

#### How It Works

The Find Clusters node examines all input data to locate relationships between points (vertices) and connections (edges). Based on the selected search mode, it determines how these elements relate to each other:

* In **All** mode, it looks for both vertex-to-edge and edge-to-vertex connections across all inputs.
* In **Vtx from Edges** mode, it identifies which vertices are connected to each edge in the input data.
* In **Edges from Vtx** mode, it finds which edges connect to specific vertices.

The node creates a mapping or lookup table without changing the original data. It also checks for consistency between inputs and can show warnings about mismatches if enabled.

#### Configuration

<details>

<summary><strong>Search Mode</strong><br><em>Defines how the node searches for connections between vertices and edges.</em></summary>

Controls the type of search performed across input data.

**Values**:

* **All**: Searches for both vertex-to-edge and edge-to-vertex relationships.
* **Vtx from Edges**: Focuses on finding which vertices are associated with each edge.
* **Edges from Vtx**: Identifies which edges connect to specific vertices.

</details>

<details>

<summary><strong>Skip Trivial Warnings</strong><br><em>Suppresses warnings about input mismatches and triage issues.</em></summary>

When enabled, prevents display of minor warnings related to data inconsistencies or mismatched inputs.

</details>

<details>

<summary><strong>Skip Important Warnings</strong><br><em>Suppresses warnings that would normally appear when using incompatible inputs in a cluster node.</em></summary>

When enabled, suppresses critical warnings about input compatibility that are otherwise shown during execution.

</details>

#### Usage Example

Use this node to prepare data for a cluster processing workflow. For instance, if you have multiple point clouds and edge networks representing different parts of a structure, you can use Find Clusters in **Edges from Vtx** mode to determine which edges connect to each vertex. Then, feed that output into a node that groups connected components together.

#### Notes

* This node is typically used as part of a larger graph where the results are consumed by other cluster or connectivity-related nodes.
* The search behavior changes based on the selected mode, so it's important to choose the correct one for your use case.
* Warnings can be suppressed if you're confident about input consistency and want cleaner logs.
