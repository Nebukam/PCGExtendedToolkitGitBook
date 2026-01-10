---
description: 'In editor :: PCGEx | Fill Control : Vtx Filters'
icon: circle-dashed
---

# FC : Vtx Filters

{% hint style="warning" %}
This page was generated from the source code. It captures what the node does, but still needs some serious  proofreading.
{% endhint %}

> Filter that checks vertex data for flood fill operations.

#### How It Works

This subnode evaluates each vertex in a flood fill operation against a set of user-defined conditions. It determines whether a vertex should be included in the diffusion process based on its properties, such as position, normal, or custom attributes.

The filtering logic works by checking if all specified conditions are met for each vertex. If a vertex passes all filters, it is accepted and can participate in the flood fill spread. If any condition fails, the vertex is rejected and excluded from the diffusion.

Each filter defines a specific rule that must be satisfied for a vertex to be considered valid. For example, you might set conditions based on distance from a source point, angle of the surface normal, or values stored in custom vertex attributes.

#### Configuration

<details>

<summary><strong>Config</strong><br><em>Control Config.</em></summary>

Controls general behavior of this filter subnode. This includes settings that define how the filtering is applied to the vertex data during the flood fill process.

</details>

<details>

<summary><strong>y</strong><br><em>Control Config.</em></summary>

Internal configuration value used for controlling the filter behavior. Typically not exposed directly in the UI but managed by the system.

</details>

#### Usage Example

Use this subnode when you want to limit a flood fill operation to only affect specific parts of a mesh or point cloud. For example, you might use it to ensure that a flood fill only propagates through vertices with a certain normal angle or within a defined distance from a source point.

#### Notes

This subnode is designed for use in advanced procedural workflows where fine-grained control over diffusion behavior is needed. It requires a valid vertex data source and proper configuration of filters to function correctly.
