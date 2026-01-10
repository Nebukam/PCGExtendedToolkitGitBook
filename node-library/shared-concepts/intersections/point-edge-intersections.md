---
icon: xmark-large
---

# Point/Edge Intersections

{% hint style="info" %}
This page was generated from the source code. It should properly capture what the node does, but still needs to be proofread by a human.
{% endhint %}

> Controls how points are checked against edges for intersection and how results are handled.

#### Overview

This configuration determines whether points can intersect with edges they are mapped to, how those intersections are processed, and whether to snap points to the exact location on an edge. It also allows you to write metadata about which points were involved in intersections. This is useful when working with clusters or paths where you want to identify and optionally adjust points that lie on or near edges.

When enabled, the system checks for intersections between points and edges, potentially moving points to align precisely with the edge. You can control whether self-intersections are allowed, how to handle overlapping points, and whether to flag intersection points in the output data.

{% hint style="info" %}
This configuration appears in nodes like: Path to Clusters, Fuse Clusters
{% endhint %}

#### Settings

<details>

<summary><strong>Enable Self Intersection</strong><br><em>When enabled, points can intersect with edges they are mapped to.</em></summary>

Controls whether a point is allowed to intersect with an edge it is directly associated with. When disabled, the system will skip checking intersections with edges that the point belongs to.

</details>

<details>

<summary><strong>Fuse Details</strong><br><em>Settings for how overlapping points are merged during intersection processing.</em></summary>

Controls how points that are identified as being at the same location (or very close) are handled. This includes settings like distance thresholds and whether to merge attributes.

</details>

<details>

<summary><strong>Snap On Edge</strong><br><em>When enabled, points are moved exactly onto the intersecting edge.</em></summary>

When enabled, any point that intersects with an edge will be snapped to the exact location on that edge. When disabled, the point remains at its original position unless other processing occurs.

</details>

<details>

<summary><strong>Write Is Intersector</strong><br><em>When enabled, a metadata attribute is added to flag points involved in intersections.</em></summary>

When enabled, this adds a boolean attribute to each point that indicates whether it was involved in an intersection with an edge. This can be useful for filtering or visualizing results later.

**Values**:

* **False**: No metadata is written.
* **True**: A new attribute named according to the "Is Intersector Attribute Name" setting will be added.

</details>

<details>

<summary><strong>Is Intersector Attribute Name</strong><br><em>Name of the boolean attribute used to flag intersection points.</em></summary>

The name of the attribute that stores whether a point was involved in an edge intersection. Only relevant when "Write Is Intersector" is enabled.

</details>

#### Common Use Cases

* **Path Optimization**: Snap points to edges to ensure paths align with cluster boundaries.
* **Cluster Filtering**: Identify and flag points that intersect with edges for further processing or visualization.
* **Overlap Resolution**: Merge overlapping points that result from intersection checks using Fuse Details settings.

#### Notes

* The "Fuse Details" section controls how close points need to be before they are considered the same location.
* Enabling "Snap On Edge" can change point positions, which may affect downstream nodes that rely on original point locations.
* The metadata attribute is only added if "Write Is Intersector" is enabled.
