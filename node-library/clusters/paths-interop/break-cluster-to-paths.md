---
description: 'In editor :: PCGEx | Cluster : Break to Paths'
icon: circle
---

# Break Cluster to Paths

{% hint style="info" %}
This page was generated from the source code. It should properly capture what the node does, but still needs to be proofread by a human.
{% endhint %}

> Create individual paths from continuous edge chains within clusters.

#### How It Works

This node analyzes the edges within each cluster and identifies continuous chains of connected edges. It then breaks these chains into individual paths, starting from a specified direction or node.

1. It traverses through the edges in each cluster to form continuous chains.
2. The traversal respects the **Direction Settings** to determine how points are ordered along each path.
3. If **Winding** is enabled, it enforces a consistent winding order on closed loops by projecting the points onto a 2D plane.
4. Chains that do not meet the minimum or maximum point count thresholds are filtered out.
5. The final paths are output as separate data entries.

The node supports operating either on full **Paths** (chains of edges with no crossings) or individual **Edges**, depending on your needs.

#### Configuration

<details>

<summary><strong>Leaves Handling</strong><br><em>How to handle leaves.</em></summary>

Controls whether leaf nodes (nodes with only one neighbor) are included in path chains.

* **Include Leaves**: Leaf nodes are included.
* **Exclude Leaves**: Leaf nodes are excluded from paths.
* **Only Leaves**: Only leaf nodes are processed.

</details>

<details>

<summary><strong>Operate On</strong><br><em>Operation target mode.</em></summary>

Determines whether to process full edge chains or individual edges.

* **Paths**: Process continuous edge chains that form paths with no crossings.
* **Edges**: Operate on each edge individually (more computationally expensive).

</details>

<details>

<summary><strong>Direction Settings</strong><br><em>Defines the direction in which points will be ordered to form the final paths.</em></summary>

Controls how the order of points is determined when forming paths.

* **Forward**: Points are ordered from start to end.
* **Backward**: Points are ordered from end to start.
* **Bidirectional**: Points can be ordered both ways, based on edge direction.

</details>

<details>

<summary><strong>Winding</strong><br><em>Enforce a winding order for paths.</em></summary>

Applies a consistent winding order (clockwise or counter-clockwise) to closed loops.

* **Unchanged**: No winding is applied.
* **Clockwise**: Paths are ordered clockwise.
* **CounterClockwise**: Paths are ordered counter-clockwise.

</details>

<details>

<summary><strong>Wind Only Closed Loops</strong><br><em>Whether to apply winding on closed loops only or all paths.</em></summary>

When enabled, winding is applied only to closed loops (paths that start and end at the same point). Otherwise, it applies to all paths.

</details>

<details>

<summary><strong>Projection Details</strong><br><em>Projection settings. Winding is computed on a 2D plane.</em></summary>

Settings for projecting points onto a 2D plane before computing winding order. Only used when **Winding** is not set to **Unchanged**.

</details>

<details>

<summary><strong>Min Point Count</strong><br><em>Do not output paths that have less points than this value.</em></summary>

Filters out paths with fewer points than the specified number.

</details>

<details>

<summary><strong>Omit Above Point Count</strong><br></summary>

When enabled, filters out paths that exceed the **Max Point Count**.

</details>

<details>

<summary><strong>Max Point Count</strong><br><em>Do not output paths that have more points than this value.</em></summary>

Filters out paths with more points than the specified number. Only active when **Omit Above Point Count** is enabled.

</details>

#### Usage Example

You have a cluster of nodes representing a road network. You want to extract individual roads (paths) from the network, ensuring that each road has at least 3 points and no more than 100 points. You also want to enforce a counter-clockwise winding for closed loops like roundabouts.

1. Connect your clustered data to the **Cluster Input**.
2. Set **Min Point Count** to `3`.
3. Set **Max Point Count** to `100`.
4. Enable **Wind Only Closed Loops** and set **Winding** to **CounterClockwise**.
5. Set **Operate On** to **Paths**.
6. Optionally, use a point filter subnode to define break points in the network.

This will output clean, valid paths representing roads or routes from your cluster data.

#### Notes

* This node is optimized for graph-based data where edges form continuous chains.
* Winding enforcement requires 2D projection, so ensure your data supports it.
* Setting **Operate On** to **Edges** can be very expensive with large datasets.
* Paths are output as separate point IO entries, which can be further processed or visualized.
