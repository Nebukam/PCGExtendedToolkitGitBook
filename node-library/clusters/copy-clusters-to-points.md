---
description: 'In editor :: PCGEx | Cluster : Copy to Points'
icon: circle
---

# Copy Clusters to Points

{% hint style="info" %}
This page was generated from the source code. It should properly capture what the node does, but still needs to be proofread by a human.
{% endhint %}

> Create copies of input clusters onto target points.

#### Overview

This node duplicates input clusters and places them at the locations defined by target points. It's useful for scenarios where you want to replicate cluster data across multiple locations, such as placing multiple instances of a structure or pattern at different positions in a scene. The node supports matching input clusters to target points, allowing fine-grained control over which cluster is copied where.

{% hint style="info" %}
Connects to **Clusters** and **Points** pins.
{% endhint %}

#### How It Works

This node first gathers all the input clusters and target points. If data matching is enabled, it uses a matching mechanism to determine which clusters should be copied to which points. For each target point, it creates a copy of the selected cluster, placing it at that point's location. The transform settings control how the copied cluster inherits or overrides properties like position, rotation, and scale from the target point. Optionally, attributes from the target points can be added to the clusters or passed through to them.

#### Configuration

<details>

<summary><strong>Data Matching</strong><br><em>If enabled, allows you to pick which input gets copied to which target point.</em></summary>

When enabled, this setting lets you define a matching logic between clusters and points. This is useful when you want to control which cluster data is placed at each point, rather than copying all clusters to all points.

</details>

<details>

<summary><strong>Transform Details</strong><br><em>Target inherit behavior</em></summary>

Controls how the transform (position, rotation, scale) of the copied cluster inherits from or overrides the target point's transform. This allows for precise control over placement and orientation.

</details>

<details>

<summary><strong>Targets Attributes To Cluster Tags</strong><br><em>How to apply attributes from target points as tags on clusters.</em></summary>

This setting controls how attributes from the target points are added to the clusters as metadata or tags. This can be useful for preserving point-specific information in the cluster data.

</details>

<details>

<summary><strong>Targets Forwarding</strong><br><em>Which target attributes to pass through to clusters.</em></summary>

Determines which attributes from the target points are passed through to the cluster data. This allows you to propagate point-specific information (like color, ID, or custom data) into the copied cluster data.

</details>

#### Usage Example

1. Create a set of clusters representing different building types.
2. Set up a series of points that define where buildings should be placed.
3. Use this node to copy each cluster type to the corresponding point.
4. Enable data matching if you want specific clusters to go to specific points.
5. Adjust transform settings to ensure proper orientation and scale when placing the clusters.

#### Notes

* This node does not sanitize input data, so make sure your clusters and points are valid before using it.
* The matching logic can be complex; use with care when dealing with large datasets.
* Forwarding attributes from target points can significantly increase data size, especially if many attributes are selected.
