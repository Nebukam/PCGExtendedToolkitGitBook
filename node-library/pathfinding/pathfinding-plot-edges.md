---
description: 'In editor :: PCGEx | Pathfinding : Plot Edges'
icon: scrubber
---

# Pathfinding : Plot Edges

Extract a single path from edges clusters, going through every seed points in order.
ß
**How It Works**

> AI-Generated, needs proofreading

* Extracts individual paths from clusters of edges by traversing through specified seed points in a defined sequence.
* Optionally adds the seed point at the start and/or goal point at the end of the path based on the "Add Seed To Path" and "Add Goal To Path" settings.
* Inserts plot points into the path if the "Add Plot Points To Path" setting is enabled, integrating these points according to their specified order or criteria within the path sequence.
* Utilizes a data matching feature, when activated, to filter which plots are associated with specific edge clusters, ensuring precise path extraction based on predefined conditions.

#### Configuration

<details>

<summary><strong>Data Matching</strong> <code>PCGExMatchingDetails</code></summary>

If enabled, allows you to filter out which plots get associated to which clusters

📦 See: Matching configuration

</details>

<details>

<summary><strong>Add Seed To Path</strong> <code>bool</code></summary>

Add seed point at the beginning of the path

⚡ PCG Overridable

</details>

<details>

<summary><strong>Add Goal To Path</strong> <code>bool</code></summary>

Add goal point at the beginning of the path

⚡ PCG Overridable

</details>

<details>

<summary><strong>Add Plot Points To Path</strong> <code>bool</code></summary>

Insert plot points inside the path

⚡ PCG Overridable

</details>

<details>

<summary><strong>Closed Loop</strong> <code>bool</code></summary>

Controls closed loop.

⚡ PCG Overridable

</details>

<details>

<summary><strong>Path Composition</strong> <code>PCGExPathComposition</code></summary>

What are the paths made of.

⚡ PCG Overridable

</details>

<details>

<summary><strong>Search Algorithm</strong> <code>PCGExSearchInstancedFactory</code> ⚙️</summary>

Search algorithm.

⚡ PCG Overridable

</details>

<details>

<summary><strong>Statistics</strong> <code>PCGExPathStatistics</code></summary>

Output various statistics.

</details>

<details>

<summary><strong>Use Octree Search</strong> <code>bool</code></summary>

Whether or not to search for closest node using an octree. Depending on your dataset, enabling this may be either much faster, or much slower.

</details>

<details>

<summary><strong>Omit Complete Path On Failed Plot</strong> <code>bool</code></summary>

Controls omit complete path on failed plot.

</details>

<details>

<summary><strong>Paths Output Settings</strong> <code>PCGExPathOutputDetails</code></summary>

...

📦 See: PathOutput configuration

</details>

<details>

<summary><strong>Quiet Invalid Plot Warning</strong> <code>bool</code></summary>

Controls quiet invalid plot warning.

</details>

<details>

<summary><strong>Greedy Queries</strong> <code>bool</code></summary>

If disabled, will share memory allocations between queries, forcing them to execute one after another. Much slower, but very conservative for memory. Using global feedback forces this behavior under the hood.

</details>

**Node Picking**

<details>

<summary><strong>Seed Picking</strong> <code>PCGExNodeSelectionDetails</code></summary>

Drive how a seed selects a node.

📦 See: NodeSelection configuration

⚡ PCG Overridable

</details>

<details>

<summary><strong>Goal Picking</strong> <code>PCGExNodeSelectionDetails</code></summary>

Drive how a goal selects a node.

📦 See: NodeSelection configuration

⚡ PCG Overridable

</details>

**Tagging & Forwarding**

<details>

<summary><strong>Plot Forwarding</strong> <code>PCGExForwardDetails</code></summary>

Which data is forwarded from plots to paths

📦 See: Forward configuration

</details>

<details>

<summary><strong>Vtx Data Forwarding</strong> <code>PCGExForwardDetails</code></summary>

Which data is forwarded from vtx to paths.

📦 See: Forward configuration

</details>

<details>

<summary><strong>Edges Data Forwarding</strong> <code>PCGExForwardDetails</code></summary>

Which data is forwarded from edges to paths.

📦 See: Forward configuration

</details>

***

Source: `Source\PCGExElementsPathfinding\Public\Elements\PCGExPathfindingPlotEdges.h`
