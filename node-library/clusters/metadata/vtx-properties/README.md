---
description: 'In editor :: PCGEx | Cluster : Vtx Properties'
icon: scrubber
---

# Vtx Properties

Extract & write extra informations from the edges connected to the vtx.

**How It Works**

> AI-Generated, needs proofreading

* Extracts information from edges connected to vertices and writes this data back onto the vertices themselves.
* If "Mutate Vtx To OOB" is enabled, modifies each vertex based on its connections to other vertices within the Out-of-Bounds (OOB) context.
* When "Write Vtx Edge Count" is selected, computes the number of edges connected to each vertex and writes this count into a specified vertex attribute named by the user in the 'EdgeCount' setting.
* If "Write Vtx Normal" is enabled, calculates a normal vector based on the edges connected to each vertex and stores this normal in a vertex attribute as defined by the 'Normal' setting.

#### Configuration

**Outputs**

<details>

<summary><strong>Mutate Vtx To OOB</strong> <code>bool</code></summary>

Mutate Vtx into their OOB based on neighboring connections.

⚡ PCG Overridable

</details>

<details>

<summary><strong>Write Vtx Edge Count</strong> <code>bool</code></summary>

Write normal from edges on vertices.

⚡ PCG Overridable

</details>

<details>

<summary><strong>EdgeCount</strong> <code>Name</code></summary>

Name of the 'normal' vertex attribute to write normal to.

⚡ PCG Overridable

</details>

<details>

<summary><strong>Write Vtx Normal</strong> <code>bool</code></summary>

Write normal from edges on vertices.

⚡ PCG Overridable

</details>

<details>

<summary><strong>Normal</strong> <code>Name</code></summary>

Name of the 'normal' vertex attribute to write normal to.

⚡ PCG Overridable

</details>

<details>

<summary><strong>└─ Axis</strong> <code>PCGExMinimalAxis</code></summary>

Which axis of the vtx OOB to use as normal.

⚡ PCG Overridable

</details>

<details>

<summary><strong>Include Vtx In OOB</strong> <code>bool</code></summary>

Controls include vtx in oob.

</details>

***

Source: `Source\PCGExElementsClusters\Public\Elements\Meta\PCGExWriteVtxProperties.h`
