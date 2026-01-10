---
description: 'In editor :: PCGEx | Pathfinding : Plot Navmesh'
icon: scrubber
---

# Pathfinding : Plot Navmesh

{% hint style="info" %}
This page was generated from the source code. It should properly capture what the node does, but still needs to be proofread by a human.
{% endhint %}

> Extract a paths from navmesh, going through each seed point in order.

#### How It Works

This node creates continuous routes by connecting seed points using Unreal's navigation system. It calculates valid paths between each pair of consecutive points and combines them into a single output path. The process begins with the first seed point as the starting location and ends at the last seed point, following the navmesh constraints.

When multiple seed points are provided, the node computes individual segments between each pair and joins them together. If enabled, it can also add extra points along the route to smooth transitions or provide more detail. The final path can be configured to form a closed loop, where the last point connects back to the first point.

The node supports various settings that control how the path is constructed, including whether to include the original seed points at the start and end of each segment, how many intermediate points to add, and how to handle cases where parts of the path cannot be computed.

#### Inputs

* **Points**: A collection of seed points that define the start and end locations for pathfinding.
* **Nav Agent Properties**: Defines how the navigation system interprets movement constraints (e.g., agent radius, height, etc.).

#### Outputs

* **Paths**: A collection of paths connecting the seed points via the navmesh. Each path is composed of multiple sub-points that represent the navigable route.

#### Configuration

<details>

<summary><strong>Add Seed to Path</strong><br><em>Whether to include the seed point at the beginning of each path.</em></summary>

When enabled, the first point in each path will be the original seed point. This is useful for ensuring the path starts exactly where intended.

</details>

<details>

<summary><strong>Add Goal to Path</strong><br><em>Whether to include the goal point at the end of each path.</em></summary>

When enabled, the final point in each path will be the original goal point. This ensures the path ends precisely where intended.

</details>

<details>

<summary><strong>Add Plot Points to Path</strong><br><em>Whether to insert additional plot points inside the path.</em></summary>

When enabled, intermediate points are added between seed points based on blending settings. These can be used to smooth or refine paths for visual effects or gameplay.

</details>

<details>

<summary><strong>Closed Loop</strong><br><em>Whether to connect the last point back to the first point.</em></summary>

When enabled, the path forms a closed loop by connecting the final point to the initial seed point. This is useful for creating circular routes or zones.

</details>

<details>

<summary><strong>Require Navigable End Location</strong><br><em>Whether the pathfinding requires a naviguable end location.</em></summary>

When enabled, the node will fail if the final destination cannot be reached via the navmesh. When disabled, it may still produce a path even if the last point is unreachable.

</details>

<details>

<summary><strong>Fuse Distance</strong><br><em>Fuse sub points by distance.</em></summary>

Controls how close two points must be to be merged into one. A value of 10 means any two points closer than 10 units will be fused together, reducing the number of intermediate points.

</details>

<details>

<summary><strong>Blending</strong><br><em>Controls how path points blend from seed to goal.</em></summary>

A Subnode that defines how to interpolate or generate additional points between seed points. This can be used to smooth paths, add detail, or control point distribution.

</details>

<details>

<summary><strong>Pathfinding Mode</strong><br><em>Pathfinding mode.</em></summary>

* **Regular**: Standard pathfinding using the navmesh.
* **Hierarchical**: Uses a cell-based approach for faster computation in large environments.

</details>

<details>

<summary><strong>Nav Agent Properties</strong><br><em>Nav agent to be used by the nav system.</em></summary>

Defines movement properties such as radius, height, and step height that affect how the pathfinding behaves. These settings must match the character or object for which you're generating paths.

</details>

<details>

<summary><strong>Omit Complete Path on Failed Plot</strong><br><em>Whether to omit a complete path if any part of it fails.</em></summary>

When enabled, if a segment of the path cannot be computed (e.g., due to unreachable points), the entire path is discarded. When disabled, partial paths may still be generated.

</details>

#### Usage Example

1. Place seed points in your scene that represent locations you want to connect.
2. Connect these points to the input of this node.
3. Set `Pathfinding Mode` to **Regular** and configure `Nav Agent Properties` to match your character's dimensions.
4. Enable `Add Plot Points to Path` if you want smooth curves or additional detail.
5. Use a path visualization tool or a mesh generator to render the resulting paths.

#### Notes

* This node requires a valid navmesh in the scene for pathfinding to work.
* Performance can be affected by the number of seed points and blending complexity.
* For large datasets, consider using `Fuse Distance` to reduce output point count.
