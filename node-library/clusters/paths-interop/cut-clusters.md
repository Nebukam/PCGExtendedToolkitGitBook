---
description: 'In editor :: PCGEx | Cluster : Cut'
icon: circle
---

# Cut Clusters

{% hint style="info" %}
This page was generated from the source code. It should properly capture what the node does, but still needs to be proofread by a human.
{% endhint %}

> Cut clusters nodes and edges using paths.

#### Overview

The **Cluster : Cut** node modifies existing clusters by removing or preserving parts of their structure based on intersections with paths. It allows you to selectively remove nodes or edges from clusters depending on whether they intersect with one or more input paths. This is useful for creating dynamic cluster topologies that respond to environmental features like roads, rivers, or other geometric constraints.

This node operates on clusters and their associated edges and points, using path data to determine which elements should be cut out or preserved. You can configure how intersections are detected and what happens to the remaining parts of the cluster after cutting.

{% hint style="info" %}
Connects to **Clusters** input pin and outputs modified **Points** and **Edges**.
{% endhint %}

#### How It Works

The node evaluates each cluster against a set of paths. For each path, it checks for intersections with nodes or edges in the cluster based on the selected mode.

* If **Nodes** mode is selected, it checks if any node points intersect with the path.
* If **Edges** mode is selected, it checks if any edge segments intersect with the path.
* If **Edges & Nodes** mode is selected, it checks both nodes and edges for intersections.

It then determines which elements to remove or keep based on whether the intersection occurs and whether invert mode is enabled. Invert mode keeps only the parts that intersect rather than removing them.

For each cluster:

1. It processes all paths.
2. For each path, it identifies intersecting nodes/edges.
3. Based on settings like `NodeExpansion` and `NodeDistanceSettings`, it expands node bounds to detect overlaps.
4. If invert mode is enabled, it keeps only the elements that intersect; otherwise, it removes them.
5. It updates the cluster's structure accordingly, potentially removing edges or nodes, and adjusts connected components.

The final output contains modified clusters with nodes and/or edges removed based on path intersections.

#### Configuration

<details>

<summary><strong>Intersection Details</strong><br><em>Settings for how intersections are calculated.</em></summary>

Controls the precision and method used to detect path intersections with nodes or edges.

</details>

<details>

<summary><strong>Invert</strong><br><em>Keep intersections/proximity instead of removing.</em></summary>

When enabled, this keeps only the parts that intersect with paths rather than removing them. Useful for creating holes or gaps in clusters.

</details>

<details>

<summary><strong>Mode</strong><br><em>Whether to check path overlap with nodes, edges, or both.</em></summary>

* **Nodes**: Only checks node points.
* **Edges**: Only checks edge segments.
* **Edges & Nodes**: Checks both nodes and edges.

</details>

<details>

<summary><strong>Node Expansion</strong><br><em>Expansion factor of node points to check for initial overlap.</em></summary>

Expands the bounds of each node point by a scaling factor to determine if it overlaps with paths. A value of 1 means no expansion, while higher values increase the detection area.

</details>

<details>

<summary><strong>Node Distance Settings</strong><br><em>How distance is calculated for node-point overlap checks.</em></summary>

Controls how the distance between a node and path is measured:

* **Center**: Uses the center point of the node.
* **Sphere Bounds**: Uses the sphere radius based on the node's scaled bounds.
* **Box Bounds**: Uses the box extents of the node's bounds.

</details>

<details>

<summary><strong>Affected Nodes Affect Connected Edges</strong><br><em>When enabled, removing a node also removes connected edges.</em></summary>

If enabled, when a node is removed due to intersection, all edges connected to that node are also removed from the cluster.

</details>

<details>

<summary><strong>Affected Edges Affect Endpoints</strong><br><em>When enabled, removing an edge also removes its endpoints if they are not connected to other valid edges.</em></summary>

If enabled, when an edge is removed due to intersection, the nodes at both ends of that edge are also removed if they are no longer connected to any valid edges.

</details>

<details>

<summary><strong>Keep Edges That Connect Valid Nodes</strong><br><em>When enabled, keeps edges connecting two preserved nodes even if they don't intersect with the path.</em></summary>

If enabled and in invert mode, this preserves edges that connect two valid (non-cut) nodes, even if those edges do not directly intersect with a path.

</details>

<details>

<summary><strong>Cluster Output Settings</strong><br><em>Graph &#x26; Edges output properties.</em></summary>

Controls how the final cluster graph and edge data are structured in the output.

</details>

#### Usage Example

1. Create a set of clusters using a clustering node.
2. Add a path (e.g., a road or river) that you want to cut through those clusters.
3. Connect both the clusters and paths into the **Cluster : Cut** node.
4. Set the mode to **Edges & Nodes** to ensure both are considered for cutting.
5. Optionally, enable invert mode if you want to keep only the parts intersecting with the path.
6. The output will contain modified clusters where nodes or edges that intersect with the path have been removed.

#### Notes

* This node is useful for creating realistic terrain features like roads cutting through forests or rivers splitting islands.
* Performance can be improved by limiting the number of input paths and using appropriate expansion settings.
* When using invert mode, consider enabling **Keep Edges That Connect Valid Nodes** to maintain structural integrity in clusters.
