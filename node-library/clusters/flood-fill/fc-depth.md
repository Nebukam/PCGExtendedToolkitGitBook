---
description: 'In editor :: PCGEx | Fill Control : Depth'
icon: circle-dashed
---

# FC : Depth

{% hint style="info" %}
This page was generated from the source code. It should properly capture what the node does, but still needs to be proofread by a human.
{% endhint %}

> Control fill behavior based on how far a point has diffused from its starting location.

#### Overview

This subnode defines how flood-fill operations progress by limiting diffusion based on depth. It ensures that points can only spread a certain number of steps away from their origin, which is useful for creating controlled, bounded fills in procedural generation workflows.

It connects to the **Probe** pin of flood-fill graph-building nodes, where it determines whether a candidate point should be considered for inclusion in the diffusion based on its current depth.

{% hint style="info" %}
Connects to **Probe** pins on flood-fill graph-building nodes.
{% endhint %}

#### How It Works

This subnode enforces a maximum diffusion depth for each point during a flood-fill operation. As points spread outward from their starting locations, they are tracked by how many steps they've taken away from the original seed.

When a new candidate point is considered for inclusion in the diffusion:

* The system checks if the candidate's current depth (number of steps from the origin) is less than or equal to the configured maximum depth.
* If it exceeds the limit, the candidate is rejected and not added to the fill.
* If it meets the criteria, the candidate is allowed to continue the diffusion process.

This creates a bounded region that expands outward in a controlled way, preventing infinite or overly expansive fills.

<details>

<summary>Inputs</summary>

Expects input data with points that are part of a cluster or graph structure. The system uses point positions and their relationships to determine depth during diffusion.

</details>

<details>

<summary>Outputs</summary>

Does not produce new data but modifies how the flood-fill process evaluates candidates, effectively limiting the spread of the fill based on depth.

</details>

#### Configuration

***

**Max Depth Input**

_Controls whether the maximum depth is a fixed value or read from an attribute._

When set to **Constant**, the system uses the value defined in **Max Depth**. When set to **Attribute**, the system reads the depth limit from the point's **Max Depth (Attr)** attribute.

**Max Depth (Attr)**

_The name of the attribute used to define maximum depth when "Max Depth Input" is set to "Attribute"._

This attribute must be an integer and will be read per point during diffusion.

**Max Depth**

_The fixed maximum depth value when "Max Depth Input" is set to "Constant"._

Must be a positive integer. A value of 1 means only the starting point is included, while higher values allow more expansion.

#### Usage Example

Use this subnode in a flood-fill setup where you want to limit how far points can spread from their source. For example:

* Create a cluster of points.
* Use a **Flood Fill** node with this **Fill Control : Depth** subnode.
* Set **Max Depth** to 5.
* This ensures that the fill only spreads up to 5 steps away from the original point, creating a controlled, bounded region.

#### Notes

* The depth is calculated as the number of steps taken during the diffusion process, not based on spatial distance.
* This subnode works best when used with graph-based flood-fill algorithms where step tracking is meaningful.
* A low maximum depth value can create sharp boundaries, while higher values allow more organic, gradual expansion.
