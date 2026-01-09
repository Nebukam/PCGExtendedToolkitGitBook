---
description: 'In editor :: PCGEx | State : Cluster'
icon: circle-dashed
---

# State : Cluster

{% hint style="info" %}
This page was generated from the source code. It should properly capture what the node does, but still needs to be proofread by a human.
{% endhint %}

> A single, filter-driven vertex state for clusters.

#### Overview

This subnode defines a behavior that assigns a flag or state to cluster vertices based on a filter condition. It allows you to tag or mark specific points within a cluster using a logical test, such as position, attribute values, or other criteria. This is useful when you want to apply conditional logic to vertex data during procedural generation.

It connects to the **Filter** input pin of processing nodes that handle cluster-based operations. You can use multiple instances of this subnode to define various states for different conditions.

{% hint style="info" %}
Connects to Filter pins on processing nodes.
{% endhint %}

#### How It Works

This subnode evaluates a filter condition against each vertex in a cluster. If the condition passes, it assigns a flag or state to that vertex. The evaluation is based on the settings defined in the **Config** section.

The logic works as follows:

1. For each vertex in the cluster, the filter condition is tested.
2. If the test returns true, the vertex is marked with a specific flag.
3. If the test returns false, the vertex is not flagged.
4. The resulting flags are stored and can be used by downstream nodes to make further decisions or modify behavior.

This subnode does not directly process data — it defines a condition that other nodes use to determine whether a vertex should be considered part of a certain state.

<details>

<summary>Inputs</summary>

* **Cluster**: The input cluster containing vertices to evaluate.
* **Filter Condition**: A set of rules or criteria used to test each vertex in the cluster.

</details>

<details>

<summary>Outputs</summary>

* **Flags**: A set of flags assigned to vertices based on whether they pass the filter condition.

</details>

#### Configuration

***

**Config**

_The configuration settings for defining the behavior of this state._

This section allows you to define how the filter is applied. It includes settings such as:

* The name of the flag or state.
* Priority level, which determines how multiple states interact.
* Whether output should be enabled.

The **Overridable** toggle allows these settings to be modified at runtime when used in a graph that supports overrides.

#### Usage Example

Suppose you want to mark all vertices in a cluster that are located above a certain height as "High Ground". You would:

1. Create a **State : Cluster** subnode.
2. Set the filter condition to test if the vertex Z position is greater than 100.
3. Assign a flag name like "HighGround".
4. Connect this subnode to a processing node that supports cluster flags.

This allows downstream nodes to identify and act on vertices marked as "HighGround".

#### Notes

* Multiple **State : Cluster** subnodes can be used in sequence to define complex vertex states.
* Flags assigned by this subnode can be used for further filtering, sorting, or procedural operations.
* The priority setting determines the order in which flags are applied when multiple states exist.
