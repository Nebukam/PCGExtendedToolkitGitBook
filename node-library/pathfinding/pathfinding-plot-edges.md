---
description: 'In editor :: PCGEx | Pathfinding : Plot Edges'
icon: scrubber
---

# Pathfinding : Plot Edges

{% hint style="warning" %}
This page was generated from the source code. It captures what the node does, but still needs some serious  proofreading.
{% endhint %}

> Extract a paths from edges clusters, going through every seed point in order.

#### How It Works

This node creates a continuous route by connecting seed points across different groups of edges. It starts by identifying where each seed point is located within the graph structure, then builds a path that moves through all the specified points in sequence. The path respects the connections defined by the edges and can include various elements like vertex points (intersections) or edge segments (road sections). You can choose whether to add starting and ending points, insert additional plot points along the way, or form a closed loop back to the beginning.

#### Configuration

<details>

<summary><strong>Data Matching</strong><br><em>If enabled, allows you to filter which plot data gets associated with which cluster.</em></summary>

When enabled, this setting lets you define rules that control how plot points are matched to clusters. This is useful when you want to limit which plot points are used for path generation within a specific cluster.

</details>

<details>

<summary><strong>Add Seed To Path</strong><br><em>Adds the seed point at the beginning of the path.</em></summary>

When enabled, the starting point of the path is added as the first element in the output.

</details>

<details>

<summary><strong>Add Goal To Path</strong><br><em>Adds the goal point at the end of the path.</em></summary>

When enabled, the ending point of the path is added as the last element in the output.

</details>

<details>

<summary><strong>Add Plot Points To Path</strong><br><em>Inserts plot points inside the path.</em></summary>

When enabled, any plot points defined in the input are inserted into the path at appropriate locations.

</details>

<details>

<summary><strong>Closed Loop</strong><br><em>Whether or not to close the path back to the start point.</em></summary>

When enabled, the path connects back to the first point, forming a closed loop.

</details>

<details>

<summary><strong>Path Composition</strong><br><em>What elements make up the path.</em></summary>

Controls what elements are included in the output path:

* **Vtx**: Only vertex points.
* **Edges**: Only edge segments.
* **Vtx & Edges**: Both vertex and edge data.

</details>

<details>

<summary><strong>Seed Picking</strong><br><em>Determines how a seed selects a node.</em></summary>

Defines how the system chooses which node to start from when building the path. This can be based on proximity or other criteria.

</details>

<details>

<summary><strong>Goal Picking</strong><br><em>Determines how a goal selects a node.</em></summary>

Defines how the system chooses which node to end at when building the path. This can be based on proximity or other criteria.

</details>

<details>

<summary><strong>Search Algorithm</strong><br><em>Algorithm used to find paths between nodes.</em></summary>

Selects the method used to locate paths between nodes in the graph. Examples include A\*, Dijkstra, or custom implementations.

</details>

<details>

<summary><strong>Statistics</strong><br><em>Output various performance statistics.</em></summary>

When enabled, this option collects data about processing time and resource usage for analysis.

</details>

<details>

<summary><strong>Use Octree Search</strong><br><em>Whether or not to search for closest node using an octree. Depending on your dataset, enabling this may be either much faster, or much slower.</em></summary>

When enabled, the system uses a spatial structure called an octree to speed up finding nearby nodes. This can significantly improve performance for large datasets but may slow things down in smaller or irregularly structured data.

</details>

<details>

<summary><strong>Omit Complete Path On Failed Plot</strong><br><em>If a plot fails to generate a valid path, this setting determines whether the entire path is omitted from the output.</em></summary>

Controls what happens if one of the plots cannot be processed. If enabled, the whole path is removed; otherwise, it continues with other plots.

</details>

<details>

<summary><strong>Paths Output Settings</strong><br><em>Controls how the resulting paths are structured and output.</em></summary>

Determines how the generated paths are organized in the final output.

</details>

<details>

<summary><strong>Greedy Queries</strong><br><em>If disabled, will share memory allocations between queries, forcing them to execute one after another. Much slower, but very conservative for memory.</em></summary>

When enabled, each query uses its own memory allocation, allowing parallel processing. When disabled, memory is shared between queries, which may reduce memory usage but can slow down execution.

</details>
