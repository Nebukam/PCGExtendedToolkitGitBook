---
description: 'In editor :: PCGEx | Sampler : Vtx Blend'
icon: circle-dashed
---

# Sampler : Vtx Blend

{% hint style="info" %}
## AI-generated page -- to be reviewed 
While not 100% accurate, it should properly capture what the node/factory does. It stills needs to be proofread by a human.
{% endhint %}

> Creates a vertex attribute sampler that blends values from neighboring vertices using configurable blending operations.

### Overview

This node generates a vertex attribute sampler that collects data from neighboring vertices and combines them using blending operations. It's particularly useful for creating smooth transitions, averaging properties across connected vertices, or applying weighted combinations of neighbor data to each vertex in a cluster.

The sampler works by collecting values from adjacent vertices and then applying blend operations to combine these values into a single output per vertex. This is commonly used for smoothing vertex properties like color, height, or other attributes that benefit from neighbor-based averaging or blending.

{% hint style="info" %}
This node requires a valid cluster with vertex and edge data to function properly. The neighbor relationships must be established before this node can sample from neighbors.
{% endhint %}

<details>

<summary>Inputs</summary>

* **Source** (Required): Cluster data containing vertices and edges
* **Neighbor Filters** (Optional): Filters to control which neighbors are considered for sampling

</details>

<details>

<summary>Outputs</summary>

* **Sampler** (Required): The configured neighbor sampler that can be used by other nodes in the graph

</details>

### Properties Overview

Controls how neighbor data is collected and blended.

***

#### General

Configures the core behavior of the vertex blending sampler.

**Priority**

_Determines the order in which samplers are processed when multiple exist._

* Higher priority values are processed after lower ones
* Default value: `0`
* Use this to control sampling order when multiple samplers affect the same attributes

**Blending Operations**

_Configures how neighbor data is combined for each vertex._

* **Blending Factories**: List of blending operations to apply to sampled data
* Each factory defines a specific blending mode (average, max, min, etc.) and target attribute
* You can add multiple blending operations to blend different attributes independently

**Values**:

* **None**: No blending applied
* **Average**: Simple average of neighbor values
* **Sum**: Sum of neighbor values
* **Min**: Minimum value from neighbors
* **Max**: Maximum value from neighbors
* **Weighted Average**: Average weighted by neighbor influence
* **Custom Blend**: User-defined blend function

### Notes

* This node is designed to work with vertex-based data and requires a valid cluster structure
* Blending operations are applied per-vertex, so performance scales with the number of vertices
* The order of blending operations matters - earlier operations affect later ones if they target the same attribute
* For best results, ensure your neighbor relationships are properly defined in the cluster before using this sampler
* Consider using filters to limit which neighbors contribute to the final blended value for better control over the output
