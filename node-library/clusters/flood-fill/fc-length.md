---
description: 'In editor :: PCGEx | Fill Control : Length'
icon: circle-dashed
---

# FC : Length

{% hint style="info" %}
This page was generated from the source code. It should properly capture what the node does, but still needs to be proofread by a human.
{% endhint %}

> Stop fill after a certain number of vtx have been captured.

#### Overview

This subnode controls how far a flood fill operation can propagate by limiting the total distance traveled from the seed point. It's useful for creating bounded, realistic-looking fills that respect spatial constraints.

It defines a behavior for flood fill operations where the fill stops once a cumulative path length threshold is reached. This ensures that the fill doesn't extend indefinitely and respects physical or logical boundaries in your procedural generation.

This subnode connects to **Probe** pins on flood fill graph-building nodes, such as "Flood Fill" or "Cluster Flood Fill".

#### How It Works

This subnode defines a distance-based stopping condition for flood fill operations. It evaluates candidates based on how far they are from the starting point, using either:

1. **Edge Length**: The direct distance between two connected points
2. **Path Length**: The total accumulated distance from the seed to the candidate point

The fill operation tracks the cumulative path length as it explores new candidates. When a candidate's path length exceeds the defined maximum, that candidate is rejected and no further exploration occurs along that branch.

When using path length, each step in the flood fill adds up the distances between connected points, building a total travel distance from the seed. The operation stops when this cumulative distance surpasses the configured limit.

<details>

<summary>Inputs</summary>

This subnode does not directly consume data points or edges. It is used as part of a flood fill process and interacts with candidates during probing and capture phases.

</details>

<details>

<summary>Outputs</summary>

This subnode doesn't produce new data. Instead, it modifies the behavior of flood fill operations by controlling when to stop exploring candidates based on distance thresholds.

</details>

#### Configuration

***

**Use Path Length**

_When enabled, the fill stops based on the total accumulated path length from the seed point. When disabled, it uses the direct edge length between points._

This setting determines whether to measure distance along the actual path taken during flood fill (including all intermediate steps) or the straight-line distance of each individual edge.

**Max Length Input**

_Determines how the maximum distance is defined._

**Values**:

* **Constant**: Use a fixed numeric value for the max length.
* **Attribute**: Read the max length from an attribute on input data.

**Max Length Attribute**

_The name of the attribute to read the max length from, when using "Attribute" mode._

This setting only appears when "Max Length Input" is set to "Attribute".

**Max Length**

_The maximum allowed distance for the fill operation._

When "Max Length Input" is set to "Constant", this value defines the fixed limit. When "Attribute" is used, this value is ignored and the actual attribute value is used instead.

#### Usage Example

Use this subnode in a "Flood Fill" node to create a region that expands outward from a seed point but stops after traveling 50 units of distance. This can simulate effects like a splash, explosion radius, or influence area with limited reach.

#### Notes

* The path length calculation includes all edges traversed during the flood fill process.
* Using attribute-based max length allows for dynamic control per input point.
* This subnode works best when used in conjunction with other fill controls to define complex stopping behaviors.
