---
description: 'In editor :: PCGEx | Fill Control : Edge Filters'
icon: circle-dashed
---

# FC : Edge Filters

{% hint style="info" %}
This page was generated from the source code. It should properly capture what the node does, but still needs to be proofread by a human.
{% endhint %}

> Filter edges along which the diffusion can occur.

#### Overview

This subnode defines which edges are valid for use in flood fill operations. It acts as a filter that evaluates whether an edge between two points should be considered when propagating a diffusion process. This is useful for creating controlled, structured diffusion patterns where not all connections between points are allowed.

It connects to the **Edge Filters** input pin of flood fill processing nodes, allowing you to define which edges can be traversed during diffusion.

#### How It Works

This subnode evaluates edges in a point cloud to determine if they should be used for diffusion. It uses a collection of point filters to test each edge's validity. For an edge to be considered valid, **all** configured filters must pass the test for that edge. The filters are applied to the points at both ends of the edge.

Each filter operates on the data associated with the two points connected by the edge. If any filter rejects an edge, that edge is excluded from the diffusion process. This allows you to define complex rules about which connections should be allowed, such as filtering based on point attributes like height, color, or custom tags.

<details>

<summary>Inputs</summary>

This node expects a set of point filters to be connected to its input pins. These filters are applied to edges in the point cloud.

</details>

<details>

<summary>Outputs</summary>

The output is a configuration that defines which edges are valid for diffusion based on the applied filters.

</details>

#### Configuration

***

**Config**

_Control Config._

Controls general settings related to how this filter operates within the flood fill system.

**FilterFactories**

_The list of point filters to apply to each edge._

Each connected filter will be evaluated against the points at both ends of an edge. An edge is only considered valid if **all** filters pass for that edge.

#### Usage Example

Use this subnode in a flood fill setup where you want to restrict diffusion to specific types of edges. For example, you might connect a "Height Difference" filter to ensure that diffusion only occurs between points with a height difference below a certain threshold. This would prevent diffusion from crossing steep terrain features.

#### Notes

* Multiple filters can be connected to define complex edge validity rules.
* The order of filters does not matter; all must pass for an edge to be valid.
* Filters are applied per-edge, so performance depends on the number and complexity of filters used.
