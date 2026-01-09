---
description: 'In editor :: PCGEx | Fill Control : Vtx Filters'
icon: circle-dashed
---

# FC : Vtx Filters

{% hint style="info" %}
This page was generated from the source code. It should properly capture what the node does, but still needs to be proofread by a human.
{% endhint %}

> Filter that checks vertex data for flood fill operations.

#### Overview

This subnode defines filtering behavior for vertex-based flood fill operations. It allows you to specify which vertices are valid candidates for diffusion based on criteria derived from vertex attributes or spatial relationships.

It connects to the **Filter** input pin of flood fill processing nodes, where it determines whether a vertex should be considered during the diffusion process.

{% hint style="info" %}
Connects to the **Filter** pin of flood fill processing nodes.
{% endhint %}

#### How It Works

This subnode evaluates each vertex in the context of a flood fill operation and decides whether it meets specific criteria for inclusion. It uses a collection of point filters defined in its configuration to determine validity.

The evaluation process works as follows:

1. For each candidate vertex, it applies all configured point filters
2. A vertex is accepted if ALL filters pass (logical AND)
3. If any filter fails, the vertex is rejected

This behavior ensures that only vertices meeting all specified conditions are considered for diffusion, allowing precise control over which parts of a dataset participate in the flood fill process.

<details>

<summary>Inputs</summary>

* Point data containing vertex information
* Optional secondary data for attribute lookups or spatial queries
* Configuration specifying which filters to apply

</details>

<details>

<summary>Outputs</summary>

* Modified flood fill behavior where only valid vertices are processed
* Filtered candidate set used in diffusion operations

</details>

#### Configuration

***

**Config**

_Control Config._

Controls general settings for the vertex filter behavior, such as whether source data is supported.

**FilterFactories**

_Point Filters._

A list of point filter subnodes that define the criteria for accepting or rejecting vertices. Each filter must pass for a vertex to be considered valid.

When multiple filters are added, they are combined using logical AND — all filters must return true for the vertex to be accepted.

#### Usage Example

Use this subnode in a flood fill setup where you want to limit diffusion to specific regions of a mesh. For example:

* Apply a distance-based filter to only allow vertices within 10 units of a source point
* Combine with a normal angle filter to restrict diffusion along certain surface orientations
* Add a custom attribute filter to exclude vertices with a specific material tag

#### Notes

* The order of filters does not affect the outcome, as all must pass for inclusion
* Performance can be improved by minimizing the number of active filters
* This subnode is particularly useful when working with complex mesh topologies where you want fine-grained control over which vertices participate in diffusion
