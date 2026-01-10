---
description: 'In editor :: PCGEx | Heuristics : Tensor'
icon: circle-dashed
---

# HX : Tensor

{% hint style="warning" %}
This page was generated from the source code. It captures what the node does, but still needs some serious  proofreading.
{% endhint %}

> Defines heuristics based on tensor field sampling for pathfinding.

#### How It Works

This subnode evaluates each point in the cluster by sampling tensor fields at that location. For each point, it calculates a scalar score based on the tensor data, which can be used as a heuristic for pathfinding.

1. **Tensor Sampling**: At each point's location, it samples one or more tensor fields using the configured sampling settings.
2. **Score Calculation**: The sampled tensor values are processed to produce a scalar score. If `bAbsolute` is enabled, the absolute value of the tensor component is used; otherwise, the raw value is used.
3. **Global vs Edge Scoring**:
   * For global scoring (used in initial node evaluation), it evaluates the tensor at the point's location relative to seed and goal positions.
   * For edge scoring (used when evaluating path segments), it evaluates the tensor along the direction of movement from one point to another.

The resulting score is used by pathfinding algorithms to prioritize or penalize certain paths based on the spatial characteristics defined in the tensor fields.

#### Configuration

<details>

<summary><strong>bAbsolute</strong><br><em>When enabled, uses absolute values of tensor samples for scoring.</em></summary>

Controls whether the heuristic score is based on the absolute value of the tensor sample (`true`) or its raw value (`false`). This affects how negative tensor values are treated in scoring.

**Values**:

* **true**: Uses absolute tensor values.
* **false**: Uses raw tensor values.

</details>

<details>

<summary><strong>TensorHandlerDetails</strong><br><em>Tensor sampling settings. Note that these are applied on the flattened sample, e.g after &#x26; on top of individual tensors' mutations.</em></summary>

Defines how tensor fields are sampled at each point. This includes parameters like radius, step size, and error tolerance for adaptive sampling.

</details>

<details>

<summary><strong>Config</strong><br><em>Filter Config.</em></summary>

General configuration options shared with other heuristic subnodes, such as weight factors and inversion settings.

</details>

#### Usage Example

1. Create a tensor field using a "Tensor Field" node.
2. Add a "Heuristics : Tensor" subnode to your pathfinding graph.
3. Connect the tensor field output to the subnode's input.
4. Configure `bAbsolute` to true if you want to prioritize magnitude over direction.
5. Set sampling parameters in `TensorHandlerDetails` to control how deeply the tensor is sampled.
6. Connect this subnode to a pathfinding node's Filter pin to apply the heuristic.

This setup allows paths to be influenced by spatial gradients or other tensor-defined patterns, such as guiding agents along terrain slopes or flow directions.

#### Notes

* The tensor sampling logic adapts step sizes based on local changes in tensor values for better accuracy.
* Multiple tensor fields can be combined through their mutation operations before being sampled.
* Performance scales with the number of points and complexity of tensor fields.
