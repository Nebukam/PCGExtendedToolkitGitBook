---
description: 'In editor :: PCGEx | Cluster : Vtx Properties'
icon: scrubber
---

# Vtx Properties

{% hint style="info" %}
This page was generated from the source code. It should properly capture what the node does, but still needs to be proofread by a human.
{% endhint %}

> Extract and write extra information from edges connected to vertices in clusters.

#### How It Works

This node processes each cluster individually by examining the edges that connect to its vertices. For each vertex, it aggregates information from the connected edges and computes new properties such as edge count or normal vectors.

It first identifies which edges are connected to each vertex, then calculates the requested attributes based on those connections. If enabled, it can also update the vertex's position to align with its orientation derived from neighboring edges.

The node supports writing two types of data:

1. **Edge Count**: The number of edges connected to each vertex.
2. **Normal Vector**: A computed normal vector derived from the directions and orientations of connected edges, using a specified axis of the vertex's bounding box as reference.

These values are stored in new vertex attributes with customizable names.

#### Configuration

<details>

<summary><strong>Mutate Vtx to OOB</strong><br><em>Mutate Vtx into their OOB based on neighboring connections.</em></summary>

When enabled, the vertex positions are adjusted to align with the orientation derived from its connected edges. This can be useful for making vertices better fit within a structured layout or for visual alignment.

</details>

<details>

<summary><strong>Write Edge Count</strong><br><em>Write normal from edges on vertices.</em></summary>

When enabled, the node counts how many edges are connected to each vertex and writes this value into a new vertex attribute.

</details>

<details>

<summary><strong>EdgeCount Attribute Name</strong><br><em>Name of the 'normal' vertex attribute to write normal to.</em></summary>

Defines the name of the vertex attribute where the edge count will be stored. Defaults to "EdgeCount".

</details>

<details>

<summary><strong>Write Normal</strong><br><em>Write normal from edges on vertices.</em></summary>

When enabled, the node computes a normal vector for each vertex based on its connected edges and stores it in a new vertex attribute.

</details>

<details>

<summary><strong>Normal Attribute Name</strong><br><em>Name of the 'normal' vertex attribute to write normal to.</em></summary>

Defines the name of the vertex attribute where the computed normal will be stored. Defaults to "Normal".

</details>

<details>

<summary><strong>Normal Axis</strong><br><em>Which axis of the vtx OOB to use as normal.</em></summary>

Selects which axis of the vertex's bounding box is used to define the orientation for the computed normal vector. Options are:

* **None**: No axis selected.
* **X**: Use the X-axis.
* **Y**: Use the Y-axis.
* **Z**: Use the Z-axis.

</details>
