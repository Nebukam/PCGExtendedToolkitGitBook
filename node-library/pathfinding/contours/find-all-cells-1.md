---
description: 'In editor :: PCGEx | Pathfinding : Find Cluster Hull'
icon: circle
---

# Find Cluster Hull

{% hint style="info" %}
This page was generated from the source code. It should properly capture what the node does, but still needs to be proofread by a human.
{% endhint %}

> Generates a single boundary shape (hull) for each group of points, outputting it as a path.

#### Overview

This node creates a convex or concave boundary shape around groups of points, known as clusters. It's useful for defining areas, generating navigation meshes, or visualizing groupings in your data. Each cluster gets its own hull shape that encloses all or selected points within that group.

{% hint style="info" %}
Connects to **Cluster** input pins and outputs to **Path** output pins.
{% endhint %}

#### How It Works

This node processes each group of points separately, creating a boundary shape around them. It first collects all the points belonging to a cluster, then applies any filters you've set. Then it calculates a shape that surrounds these points—either a tight convex shape or a more detailed concave shape depending on your settings.

For each cluster:

1. It gathers all points in that group.
2. It checks if the group meets your filtering rules (like minimum point count).
3. It builds a boundary shape using either a simple convex method or a more complex concave method.
4. The resulting shape is output as a path, where each point in the path marks a corner of the boundary.

If you're working with many points, enabling spatial search optimization can speed up this process by quickly finding nearby points during shape creation.

<details>

<summary>Inputs</summary>

* **Cluster**: Input data containing groups of points to process.
* **Edge** (optional): Optional edge data for graph-based operations.

</details>

<details>

<summary>Outputs</summary>

* **Path**: A single path per group, representing the computed boundary shape.

</details>

#### Configuration

<details>

<summary><strong>Constraints</strong><br><em>Cell constraints.</em></summary>

Controls how groups are filtered and processed based on point density or other criteria. For example, you can set a minimum number of points required to generate a boundary shape.

</details>

<details>

<summary><strong>Artifacts</strong><br><em>Cell artifacts.</em></summary>

Defines which properties or attributes of the groups are output. For instance, you can choose to output density or steepness values for each point in the boundary shape.

</details>

<details>

<summary><strong>ProjectionDetails</strong><br><em>Projection settings.</em></summary>

Controls how 3D points are flattened into 2D space for boundary shape calculation. This is useful when working with elevation data, as it allows you to compute shapes in a flat coordinate system.

</details>

<details>

<summary><strong>bUseOctreeSearch</strong><br><em>Whether or not to search for closest node using an octree.</em></summary>

When enabled, the node uses an optimized spatial structure to speed up finding nearby points during boundary shape creation. This can significantly improve performance when dealing with large datasets.

</details>

<details>

<summary><strong>bQuietFailedToFindHullWarning</strong><br><em>Suppresses warnings when a boundary shape cannot be computed for a group.</em></summary>

When enabled, suppresses warning messages that would normally appear if a boundary shape fails to be generated for a given group.

</details>

#### Usage Example

1. Use a **Cluster** node to group your points into clusters.
2. Connect the output of the **Cluster** node to the input of this **Pathfinding : Find Cluster Hull** node.
3. Adjust the **Constraints** to define which groups should have boundary shapes computed (e.g., minimum point count).
4. Set **ProjectionDetails** to flatten elevation data if needed.
5. The result is a set of paths, one per group, representing the boundary shape.

#### Notes

* Boundary shape computation can be computationally expensive for large groups. Consider using constraints to limit processing.
* If you're working with 3D data, projection settings are important to ensure accurate shapes.
* Enabling **bUseOctreeSearch** can improve performance but may not always be beneficial depending on your dataset size and structure.
