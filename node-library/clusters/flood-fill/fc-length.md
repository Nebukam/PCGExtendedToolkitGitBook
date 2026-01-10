---
description: 'In editor :: PCGEx | Fill Control : Length'
icon: circle-dashed
---

# FC : Length

{% hint style="warning" %}
This page was generated from the source code. It captures what the node does, but still needs some serious  proofreading.
{% endhint %}

> Stop fill after a certain number of vtx have been captured.

#### Overview

This subnode controls how far a flood fill operation can propagate by limiting the total distance traveled from the starting point. It's useful when you want to define a maximum reach for your fill, such as creating a circular or spherical region around a seed point with a defined radius.

It modifies the behavior of flood fill operations by stopping further expansion once a specified length threshold is reached. This can help control performance and create more predictable, bounded fills.

{% hint style="info" %}
Connects to **Probe** pins on graph-building nodes like `Flood Fill` or `Cluster Flood Fill`.
{% endhint %}

#### How It Works

This subnode defines a distance-based stopping condition for flood fill operations. It evaluates each candidate point during the diffusion process and compares its accumulated path length (from the seed) to a maximum allowed value.

The logic works as follows:

1. As points are discovered during flood fill, their cumulative path length from the seed is tracked.
2. For each new candidate point, the system calculates whether adding it would exceed the defined maximum distance.
3. If the total path length would surpass the limit, that candidate is rejected and not added to the fill.
4. The process continues until no more valid candidates can be found within the distance constraint.

This approach ensures that the fill does not expand beyond a certain spatial extent, creating bounded regions based on actual travel distance rather than vertex count or simple Euclidean distance.

<details>

<summary>Inputs</summary>

* Expects a set of points to be processed by a flood fill operation.
* Requires access to the diffusion context and candidate data for path length calculations.

</details>

<details>

<summary>Outputs</summary>

* Modifies the set of valid candidates during flood fill.
* Prevents candidates from being added if they would exceed the maximum distance threshold.
* Does not produce new data, but influences which points are included in the final fill.

</details>

#### Configuration

<details>

<summary><strong>Use Path Length</strong><br><em>Path length is the accumulated length from the seed to the evaluated candidate, while regular length is the length of the edge.</em></summary>

When enabled, the system uses the total path distance from the seed point to the current candidate for comparison against the maximum length. When disabled, it compares only the direct edge length between two adjacent points.

</details>

<details>

<summary><strong>Max Length Input</strong><br><em>How to define the maximum allowed distance.</em></summary>

Controls whether the maximum distance is a fixed constant or read from an attribute on the input data.

**Values**:

* **Constant**: Use the value defined in the Max Length setting.
* **Attribute**: Read the maximum length from a numeric attribute on the input points.

</details>

<details>

<summary><strong>Max Length (Attr)</strong><br><em>Max Length Attribute</em></summary>

The name of the attribute that contains the maximum allowed distance for each point, when Max Length Input is set to "Attribute".

</details>

<details>

<summary><strong>Max Length</strong><br><em>Max Length Constant</em></summary>

The fixed value used as the maximum allowed distance when Max Length Input is set to "Constant". Must be greater than 0.

</details>

#### Usage Example

Use this subnode in a flood fill setup where you want to limit how far the fill spreads from the seed point. For instance, if you're generating a forest area around a tree, you could use a Max Length of 50 units to ensure that the fill only covers a circular region with a 50-unit radius.

#### Notes

* The path length calculation considers the actual route taken through the graph, not straight-line distances.
* This subnode is particularly useful for creating organic or natural-looking fills where you want to avoid infinite propagation.
* Performance can be improved by setting a reasonable Max Length value to limit the number of candidates processed.
