---
description: 'In editor :: PCGEx | Tensor : Null'
icon: circle-dashed
---

# Tensor : Null

{% hint style="info" %}
This page was generated from the source code. It should properly capture what the node does, but still needs to be proofread by a human.
{% endhint %}

> Creates a tensor that represents a null field, effectively doing nothing.

#### How It Works

This tensor performs no actual computation. When sampled, it returns a zero-weighted result that effectively cancels out any influence from this tensor component. It does not modify point positions or attributes in any way.

The node defines an empty tensor configuration that can be used as part of a larger tensor system. It acts as a placeholder or neutral element within a tensor operation chain, allowing for flexible composition where some effectors may intentionally do nothing.

#### Overview

This node generates a tensor that has no effect on point positions or attributes. It's useful when you want to define a tensor component that contributes nothing to the overall transformation or influence of points in your procedural generation setup. This can be helpful for conditional logic, placeholder tensors, or when you need to disable certain tensor behaviors without removing them from the graph.

This node is typically used as part of a tensor configuration where multiple effectors are combined, and one or more may be intentionally set to null to avoid applying any transformation.

{% hint style="info" %}
Connects to **Tensor Subnode Provider** nodes (e.g., `Create Tensor Null`) via the **Subnode** pin.
{% endhint %}

#### Configuration

<details>

<summary><strong>Config</strong><br><em>Tensor properties</em></summary>

Controls the settings that define how this null tensor behaves within a tensor system.

This configuration is intentionally minimal, as the node represents a null field with no actual behavior or influence.

</details>

#### Usage Example

Use this node in a tensor setup where you want to conditionally apply or skip certain tensor effectors. For example, you might have a graph that applies different types of tensor forces (e.g., attraction, repulsion, noise) based on some criteria. If a particular condition is not met, you can route the output through this null tensor node to effectively disable that effector without breaking the flow.

#### Notes

* This node is primarily used for composition and conditional logic within tensor systems.
* It does not produce any data or modify points directly; it only defines a neutral tensor component.
* Useful in combination with other tensor nodes to create flexible, conditional procedural behaviors.
