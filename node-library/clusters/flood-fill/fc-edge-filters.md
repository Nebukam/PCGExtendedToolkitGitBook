---
description: 'In editor :: PCGEx | Fill Control : Edge Filters'
icon: circle-dashed
---

# FC : Edge Filters

{% hint style="info" %}
This page was generated from the source code. It should properly capture what the node does, but still needs to be proofread by a human.
{% endhint %}

> Filters edges along which the diffusion can occur in flood fill operations.

#### How It Works

This subnode evaluates edges between points in a cluster to determine if they are valid for diffusion. It uses a collection of point filters that are applied to each edge. For an edge to be considered valid, all configured filters must pass for both points involved in the edge.

The filtering process happens during the flood fill algorithm's candidate evaluation phase. When a new point is being considered as part of the diffusion, this subnode checks if the edge connecting it to its parent point meets the defined criteria. If not, that edge is skipped and the diffusion cannot proceed through it.

#### Configuration

<details>

<summary><strong>Config</strong><br><em>Control Config.</em></summary>

Controls general behavior of this filter subnode. This includes settings that define how filters are applied and whether the system should consider source data during evaluation.

</details>

<details>

<summary><strong>Filter Subnodes</strong><br><em>List of point filter subnodes to apply to edge points.</em></summary>

A list of point filter subnodes that will be used to evaluate each point in an edge. All filters must pass for an edge to be valid.

</details>

#### Usage Example

Use this subnode when you want to restrict flood fill diffusion based on point properties such as height, color, or other attributes. For example, if you're simulating water flow through a terrain, you might use this to prevent water from flowing uphill by filtering out edges where the destination point is higher than the source.

#### Notes

* Multiple filters can be combined to create complex edge filtering logic.
* The order of filters in the list does not affect evaluation; all filters are applied equally.
* Performance is optimized when filters are fast and early-out conditions are used.
