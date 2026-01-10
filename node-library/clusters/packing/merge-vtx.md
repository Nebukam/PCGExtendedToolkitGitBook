---
description: 'In editor :: PCGEx | Cluster : Merge Vtx'
icon: circle
---

# Merge Vtx

{% hint style="info" %}
This page was generated from the source code. It should properly capture what the node does, but still needs to be proofread by a human.
{% endhint %}

> Merge vertex data so all edges share the same vertex collection.

#### How It Works

This node combines vertex information from multiple clusters into a single shared set. It ensures that every edge in the dataset references the same collection of vertices, eliminating inconsistencies that can occur when working with separate or duplicated vertex groups.

The process begins by scanning all input clusters to identify all unique vertex positions. It then creates a unified index system that assigns consistent identifiers to each vertex across the entire dataset. Each cluster's edges are updated to use these shared indices instead of their original references.

Vertex attributes and metadata are transferred according to the settings defined in the **Carry Over Settings** subnode, maintaining important data while ensuring uniformity across all elements.

#### Configuration

<details>

<summary><strong>Carry Over Settings</strong><br><em>Meta filter settings.</em></summary>

Controls how vertex attributes are transferred from input clusters to the merged output.

**Values**:

* **All**: Transfer all vertex attributes.
* **Exclude**: Remove listed vertex attributes, keep the others.
* **Include**: Keep only listed vertex attributes, discard the rest.

</details>

#### Usage Example

1. Create clustered graph data using nodes like "Cluster : Build".
2. Connect this to the "Cluster : Merge Vtx" node.
3. Adjust the **Carry Over Settings** subnode to specify which vertex attributes should be included or excluded.
4. The output provides unified vertex and edge data, with all edges pointing to the same shared vertex collection.

#### Notes

* This node is especially useful when preparing clustered graph data for rendering or simulation where consistent vertex references are required.
* Performance can be improved by limiting the number of vertex attributes carried over if they're not needed downstream.
