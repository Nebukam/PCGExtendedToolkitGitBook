---
description: 'In editor :: PCGEx | Pathfinding : Edges'
icon: scrubber
---

# Pathfinding : Edges

{% hint style="warning" %}
This page was generated from the source code. It captures what the node does, but still needs some serious  proofreading.
{% endhint %}

> Extracts paths from edge clusters using pathfinding algorithms.

#### How It Works

This node processes edge-based graph data to find routes between starting and ending points. It works with clusters of connected edges and uses a chosen search method to determine valid paths. The node selects start and end points from the cluster, then builds a path based on the configured settings. You can choose what elements make up the output path — vertices (nodes), edges, or both. The node also supports adding the start and end points to the path itself, and can forward attributes from these points to the resulting paths.

The process includes:

1. Selecting a starting point (seed) and an ending point (goal) from the cluster
2. Using a selected search algorithm to find a route between them
3. Building the output path using the specified composition settings
4. Optionally including the start and end points in the final path
5. Copying attributes from the seed and goal points to the resulting paths

#### Configuration

<details>

<summary><strong>GoalPicker</strong><br><em>Controls how goals are picked.</em></summary>

A subnode that defines how goal points are selected from the input data or cluster.

</details>

<details>

<summary><strong>bAddSeedToPath</strong><br><em>Add seed point at the beginning of the path</em></summary>

When enabled, adds the seed point as the first element in the resulting path.

</details>

<details>

<summary><strong>bAddGoalToPath</strong><br><em>Add goal point at the beginning of the path</em></summary>

When enabled, adds the goal point as the last element in the resulting path.

</details>

<details>

<summary><strong>PathComposition</strong><br><em>What are the paths made of.</em></summary>

Controls what elements make up the output path:

* **Vtx**: Only vertices (nodes) from the graph
* **Edge**: Only edges connecting the nodes
* **Vtx & Edges**: Both vertices and edges in alternating order

</details>

<details>

<summary><strong>SeedPicking</strong><br><em>Drive how a seed selects a node.</em></summary>

A subnode that defines how seed points are selected from the cluster.

</details>

<details>

<summary><strong>GoalPicking</strong><br><em>Drive how a goal selects a node.</em></summary>

A subnode that defines how goal points are selected from the cluster.

</details>

<details>

<summary><strong>SearchAlgorithm</strong><br><em>Search algorithm.</em></summary>

A subnode that specifies which pathfinding algorithm to use (e.g., A\*, Dijkstra, etc.).

</details>

<details>

<summary><strong>SeedAttributesToPathTags</strong><br><em>TBD</em></summary>

Defines how attributes from seed points are used as tags in the output paths.

</details>

<details>

<summary><strong>SeedForwarding</strong><br><em>Which Seed attributes to forward on paths.</em></summary>

Specifies which attributes from seed points should be copied to the resulting paths.

</details>

<details>

<summary><strong>GoalAttributesToPathTags</strong><br><em>Which Goal attribute to use as tag.</em></summary>

Defines how attributes from goal points are used as tags in the output paths.

</details>

<details>

<summary><strong>GoalForwarding</strong><br><em>TBD</em></summary>

Specifies which attributes from goal points should be copied to the resulting paths.

</details>

<details>

<summary><strong>Statistics</strong><br><em>Output various statistics.</em></summary>

When enabled, outputs performance and processing statistics about the pathfinding operations.

</details>

<details>

<summary><strong>PathOutputDetails</strong><br><em>Paths Output Settings</em></summary>

Controls how paths are structured in the output, including point order and attribute handling.

</details>

<details>

<summary><strong>bUseOctreeSearch</strong><br><em>Whether or not to search for closest node using an octree.</em></summary>

When enabled, uses an octree structure to speed up node lookups during pathfinding. Can improve performance on large datasets but may be slower in some cases.

</details>

<details>

<summary><strong>bGreedyQueries</strong><br><em>If disabled, will share memory allocations between queries.</em></summary>

When disabled, forces sequential query execution to reduce memory usage. This is slower but more memory-efficient.

</details>
