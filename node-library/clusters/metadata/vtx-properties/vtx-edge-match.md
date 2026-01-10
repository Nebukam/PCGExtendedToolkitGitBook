---
description: 'In editor :: PCGEx | Vtx : Edge Match'
icon: circle-dashed
---

# Vtx : Edge Match

{% hint style="warning" %}
This page was generated from the source code. It captures what the node does, but still needs some serious  proofreading.
{% endhint %}

> Find the edge that matches the closest provided direction.

#### Overview

This node helps you identify which adjacent edge of a vertex best aligns with a given direction. It's useful for orienting geometry or determining connectivity patterns based on spatial relationships. For each vertex, it evaluates all connected edges and selects the one whose direction most closely matches your specified input direction using a dot product comparison.

You would use this when you want to determine the "primary" or "most aligned" edge from a vertex, such as for generating directional features like roads branching off from a junction, or determining which neighbor is most directly in front of a point.

{% hint style="info" %}
Connects to **clusters** and outputs to **vtx-properties**.
{% endhint %}

#### How It Works

For each vertex in the cluster:

1. It reads a direction vector from either a constant value or an attribute on the vertex.
2. If enabled, it transforms that direction using the vertex's local transform (position, rotation, scale).
3. For every edge connected to the vertex:
   * It computes the normalized direction of the edge (from one point to another).
   * It calculates the dot product between the input direction and the edge direction.
4. It compares the resulting dot product against a threshold or selection criteria defined in the comparison settings.
5. It selects the edge with the highest matching score (closest to 1.0 for same direction, or lowest for opposite direction if inverted).
6. The selected edge is output as a property on the vertex.

This process allows you to programmatically determine which neighbor or connection is most aligned with a desired orientation.

<details>

<summary>Inputs</summary>

* **Cluster**: Input cluster data containing vertices and their adjacency information.
* **Edge Data (Optional)**: Edge data that may be used for edge direction calculations if needed.

</details>

<details>

<summary>Outputs</summary>

* **Vtx Properties**: Adds a new vertex property indicating the matching edge, including its index in the adjacency list.

</details>

#### Configuration

<details>

<summary><strong>Origin</strong><br><em>Direction orientation.</em></summary>

Controls whether the direction is computed from the node to its neighbor or vice versa.

**Values**:

* **From Node**: Direction is from the vertex toward its neighbor.
* **From Neighbor**: Direction is from the neighbor toward the vertex.

</details>

<details>

<summary><strong>Direction Input</strong><br><em>Where to read the compared direction from.</em></summary>

Determines if the comparison direction comes from a constant value or an attribute on the vertex.

**Values**:

* **Constant**: Use the fixed `Direction` vector.
* **Attribute**: Read the direction from a specified attribute on the input data.

</details>

<details>

<summary><strong>Invert Direction</strong><br><em>Whether to invert the direction before comparison.</em></summary>

When enabled, flips the direction vector before computing the dot product. Useful for finding the most opposite edge instead of the most aligned one.

</details>

<details>

<summary><strong>Direction (Constant)</strong><br><em>Direction for computing the dot product against the edge's.</em></summary>

The fixed direction vector used when `Direction Input` is set to "Constant". This is normalized internally.

</details>

<details>

<summary><strong>Transform Direction</strong><br><em>Whether to transform the direction source by the vtx' transform.</em></summary>

When enabled, applies the vertex's local transformation (position, rotation, scale) to the input direction before comparison. Useful for aligning with world-space directions.

</details>

<details>

<summary><strong>Dot Comparison Details</strong><br><em>Dot comparison settings.</em></summary>

Settings that define how the dot product results are compared to select the best matching edge. This includes thresholds and selection logic.

</details>

<details>

<summary><strong>Matching Edge</strong><br><em>Matching edge.</em></summary>

Defines the output property name for the selected edge, including its index in the adjacency list.

</details>

#### Usage Example

You have a cluster of points representing road junctions. You want to determine which road leads "north" from each junction. Set:

* **Direction Input** to "Constant"
* **Direction (Constant)** to FVector(0, 1, 0) (north)
* **Origin** to "From Node" Then connect this node to a cluster and observe the output vertex properties showing the index of the edge that best matches the north direction.

#### Notes

* The dot product is used to measure alignment. A value of 1 means perfectly aligned; -1 means perfectly opposite.
* If multiple edges have similar scores, the first one found with the highest score will be selected.
* This node works best when edges are well-defined and not overlapping or ambiguous in direction.
