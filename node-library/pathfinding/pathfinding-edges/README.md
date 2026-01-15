---
description: 'In editor :: PCGEx | Pathfinding : Edges'
icon: scrubber
---

# Pathfinding : Edges

Extract paths from edges clusters.

⚙️ **Behavior** — Instanced pathfinding search.

**How It Works**

> AI-Generated, needs proofreading

* The Pathfinding : Edges node extracts paths from predefined clusters of edges within a graph structure.
* Goal Picker setting determines the method by which goal nodes are selected for path extraction.
* Seed Picking setting dictates how seed points are chosen to initiate the path extraction process.
* If "Add Seed To Path" is enabled, the starting seed point is included at the beginning of each extracted path.
* If "Add Goal To Path" is enabled, the goal node is also added to the beginning of the path.

#### Configuration

<details>

<summary><strong>Goal Picker</strong> <code>PCGExGoalPicker</code> ⚙️</summary>

Controls how goals are picked.

⚡ PCG Overridable

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

<summary><strong>Paths Output Settings</strong> <code>PCGExPathOutputDetails</code></summary>

...

📦 See: PathOutput configuration

</details>

<details>

<summary><strong>Use Octree Search</strong> <code>bool</code></summary>

Whether or not to search for closest node using an octree. Depending on your dataset, enabling this may be either much faster, or slightly slower.

</details>

<details>

<summary><strong>Greedy Queries</strong> <code>bool</code></summary>

If disabled, will share memory allocations between queries, forcing them to execute one after another. Much slower, but very conservative for memory. Using global feedback forces this behavior under the hood.

</details>

**Advanced**

<details>

<summary><strong>Statistics</strong> <code>PCGExPathStatistics</code></summary>

Output various statistics.

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

<summary><strong>Seed Attributes To Path Tags</strong> <code>PCGExAttributeToTagDetails</code></summary>

TBD

📦 See: AttributeToTag configuration

</details>

<details>

<summary><strong>Seed Forwarding</strong> <code>PCGExForwardDetails</code></summary>

Which Seed attributes to forward on paths.

📦 See: Forward configuration

</details>

<details>

<summary><strong>Goal Attributes To Path Tags</strong> <code>PCGExAttributeToTagDetails</code></summary>

Which Goal attribute to use as tag.

📦 See: AttributeToTag configuration

</details>

<details>

<summary><strong>Goal Forwarding</strong> <code>PCGExForwardDetails</code></summary>

TBD

📦 See: Forward configuration

</details>

***

Source: `Source\PCGExElementsPathfinding\Public\Elements\PCGExPathfindingEdges.h`
