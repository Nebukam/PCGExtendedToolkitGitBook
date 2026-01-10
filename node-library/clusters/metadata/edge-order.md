---
description: 'In editor :: PCGEx | Cluster : Edge Order'
icon: circle
---

# Edge Order

{% hint style="info" %}
This page was generated from the source code. It should properly capture what the node does, but still needs to be proofread by a human.
{% endhint %}

> Fix an order for edge start & end endpoints.

#### Overview

This node ensures that the start and end points of edges within clusters are consistently ordered. This is particularly useful when working with graph-based data where edge direction matters, such as in network layouts or pathfinding systems. It helps maintain predictable edge orientation by applying a consistent sorting rule to the endpoints of each edge.

The node operates on clustered point data, processing the edges associated with each cluster and reordering their start and end points according to specified criteria.

{% hint style="info" %}
Connects to **clusters** input and outputs modified **edges**.
{% endhint %}

#### How It Works

This node processes clusters of points and their associated edges. For each edge in a cluster, it evaluates the positions of the two endpoints and reorders them based on the configured direction settings.

The process works as follows:

1. The node retrieves the current cluster's edges
2. It applies a sorting rule to determine which endpoint should be considered the "start" and which the "end"
3. Each edge is reordered so that its start point aligns with the determined direction
4. The updated edge data is output with consistent endpoint ordering

The direction settings define how the endpoints are compared, such as by position along an axis or relative to a center point.

<details>

<summary>Inputs</summary>

* **Clusters**: Point data representing clusters of points
* **Edges**: Edge data associated with each cluster

</details>

<details>

<summary>Outputs</summary>

* **Edges**: Modified edge data where start and end points are consistently ordered

</details>

#### Configuration

<details>

<summary><strong>Direction Settings</strong><br><em>Defines the direction in which points will be ordered to form the final paths.</em></summary>

Controls how the start and end points of edges are ordered.

**Values**:

* **None**: No ordering is applied
* **X Axis**: Order by X coordinate
* **Y Axis**: Order by Y coordinate
* **Z Axis**: Order by Z coordinate
* **Distance to Center**: Order by distance from cluster center
* **Custom Axis**: Order along a custom axis vector

</details>

#### Usage Example

Use this node when you have clusters of points connected by edges and need consistent edge direction for downstream processing. For example, if you're generating road networks or flow diagrams where all edges should point in the same general direction (e.g., from left to right), this node ensures that each edge's start and end are ordered consistently.

#### Notes

* This node is most effective when used after cluster generation
* The ordering logic can be customized per cluster using the Direction Settings
* It modifies edge data in place, so it should be placed early in your graph before other edge-dependent operations
