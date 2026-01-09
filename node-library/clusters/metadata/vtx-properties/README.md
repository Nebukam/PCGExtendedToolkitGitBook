---
description: 'In editor :: PCGEx | Cluster : Vtx Properties'
icon: scrubber
---

# Vtx Properties

{% hint style="warning" %}
## AI-generated page - To be reviewed. 
While not 100% accurante, it should properly capture what it does. It stills needs to be reviewed and proofread by a human.
{% endhint %}

> Extract & write extra informations from the edges connected to the vtx.

### Overview

This node analyzes the edges connected to each vertex in a cluster and extracts useful information that can be written back as vertex attributes. It's particularly helpful when you want to enrich vertex data with topological or geometric properties derived from neighboring connections.

The most common use cases include writing edge count per vertex and computing vertex normals based on connected edges. These properties are valuable for effects like vertex blending, procedural mesh deformation, or visual variations based on connectivity.

{% hint style="info" %}
This node operates on clusters and requires input data to be structured as such. It processes each vertex in the cluster and gathers information from its associated edges.
{% endhint %}

<details>

<summary>Inputs</summary>

* **Main Input (Point)**: Cluster points (vertices) to process.
* **Edges Input (Point)**: Edge data connected to the vertices.

</details>

<details>

<summary>Outputs</summary>

* **Main Output (Point)**: Vertices with potentially updated attributes.
* **Edge Output (Point)**: Edges, if needed for further processing.

</details>

### Properties Overview

Controls how vertex properties are extracted and written.

***

#### Settings

Configures the output behavior of the node.

**Mutate Vtx into their OOB**

_When enabled, vertices are adjusted to fit within their Out-of-Bounds (OOB) space based on neighboring connections._

* This modifies the position and scale of each vertex to reflect its local neighborhood.
* Useful for creating organic or clustered layouts where vertices stay close to their neighbors.

**Include Vtx In OOB**

_When enabled, the vertex itself is included in the OOB calculation when mutating it._

* Affects how the bounds are computed for the vertex's OOB.
* When disabled, only the connected edges contribute to the bounds.

**Write Vtx Edge Count**

_When enabled, writes the number of edges connected to each vertex as an attribute._

* Useful for creating visual variations or controlling procedural behaviors based on vertex connectivity.
* For example, you can use this count to vary point size or color.

**EdgeCount Attribute Name**

_Name of the vertex attribute where the edge count is written._

* Default name is `EdgeCount`.
* You can customize this to match your existing attribute naming conventions.

**Write Vtx Normal**

_When enabled, computes and writes a normal vector for each vertex based on connected edges._

* The normal is derived from the direction and orientation of adjacent edges.
* Useful for lighting effects or surface shading that depends on vertex connectivity.

**Normal Attribute Name**

_Name of the vertex attribute where the computed normal is written._

* Default name is `Normal`.
* This attribute will be a vector (FVector) containing the normal direction.

**Axis**

_Selects which axis of the vertex OOB to use for the normal computation._

* **None**: No specific axis is used.
* **X, Y, Z**: The normal is computed using the specified axis as reference.
* For example, setting this to `Z` will compute the normal along the Z-axis direction.

### Notes

* This node works best when your cluster data has well-defined edge connections. Make sure your edges are properly linked to vertices before applying this node.
* The vertex normal computation can be influenced by the number and orientation of connected edges, so it's a good idea to visualize results in the editor to ensure desired behavior.
* Using `EdgeCount` can help with creating varied effects like foliage density or mesh detail based on vertex connectivity.
