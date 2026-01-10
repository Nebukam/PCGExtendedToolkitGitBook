---
description: 'In editor :: PCGEx | Pathfinding : Grow Paths'
icon: scrubber
---

# Pathfinding : Grow Paths

{% hint style="warning" %}
Grow Paths has been deprecated in favor of [flood-fill](../clusters/flood-fill/ "mention").
{% endhint %}

{% hint style="info" %}
This page was generated from the source code. It should properly capture what the node does, but still needs to be proofread by a human.
{% endhint %}

> Grow paths from seeds using iterative expansion.

#### How It Works

This node starts by selecting seed points and expanding them into paths through a series of steps. Each seed begins a path that grows outward based on configurable rules like how many steps it can take, which direction it moves, and whether it can branch into multiple paths.

At each step, the node looks at neighboring points in the graph to find valid candidates for growth. If a candidate is allowed (not blocked by limits such as maximum distance or stop conditions), it adds that point to the path and continues. The process repeats until the path reaches its maximum number of steps or no more valid neighbors are found.

If branching is enabled, multiple paths can start from one seed point, up to a defined limit. The node supports both parallel and sequential growth modes, allowing flexibility in how paths expand across the graph.

#### Configuration

<details>

<summary><strong>SeedPicking</strong><br><em>Drive how a seed selects a node.</em></summary>

Controls how seeds are selected from input points to begin path growth. For example, it can select the closest node in the graph to each seed point.

</details>

<details>

<summary><strong>GrowthMode</strong><br><em>Controls how iterative growth is managed.</em></summary>

* **Parallel**: All seeds grow simultaneously, advancing one step at a time.
* **Sequence**: Each seed grows completely before the next seed begins.

</details>

<details>

<summary><strong>NumIterations</strong><br><em>The maximum number of growth iterations for a given seed.</em></summary>

Controls how many steps each path can take. Can be set as a constant or read from an attribute on the seed point.

**Values**:

* **Constant**: Use a fixed value.
* **SeedAttribute**: Read the value from an integer attribute on the seed point.
* **VtxAttribute**: Read the value from an integer attribute on the graph vertex.

</details>

<details>

<summary><strong>NumIterationsAttribute</strong><br><em>Num iteration attribute name.</em></summary>

Name of the attribute used when `NumIterations` is set to "Seed Attribute" or "Vtx Attribute".

</details>

<details>

<summary><strong>NumIterationsConstant</strong><br><em>Num iteration constant</em></summary>

Fixed number of iterations if `NumIterations` is set to "Constant".

</details>

<details>

<summary><strong>NumIterationsUpdateMode</strong><br><em>How to update the number of iteration for each seed.</em></summary>

Controls how the remaining number of iterations is updated during growth.

**Values**:

* **Once**: Read once at the beginning.
* **SetEachIteration**: Reset the value after each iteration.
* **AddEachIteration**: Add to the remaining iterations after each step.

</details>

<details>

<summary><strong>SeedNumBranches</strong><br><em>The maximum number of growth started by a given seed.</em></summary>

Controls how many paths can branch from a single seed. Can be set as a constant or read from an attribute on the seed point.

**Values**:

* **Constant**: Use a fixed value.
* **SeedAttribute**: Read the value from an integer attribute on the seed point.
* **VtxAttribute**: Read the value from an integer attribute on the graph vertex.

</details>

<details>

<summary><strong>SeedNumBranchesMean</strong><br><em>How the NumBranches value is to be interpreted against the actual number of neighbors.</em></summary>

Defines how the branch count is interpreted when it's a relative value (e.g., 0.5 means half the available neighbors).

**Values**:

* **Relative**: Input is normalized between 0..1 and used as a factor.
* **Discrete**: Raw value is used directly.

</details>

<details>

<summary><strong>NumBranchesConstant</strong><br><em>Num branches constant</em></summary>

Fixed number of branches if `SeedNumBranches` is set to "Constant".

</details>

<details>

<summary><strong>NumBranchesAttribute</strong><br><em>Num branches attribute name.</em></summary>

Name of the attribute used when `SeedNumBranches` is set to "Seed Attribute" or "Vtx Attribute".

</details>

<details>

<summary><strong>GrowthDirection</strong><br><em>The maximum number of growth iterations for a given seed.</em></summary>

Controls the direction in which each path grows. Can be a constant vector or read from an attribute.

**Values**:

* **Constant**: Use a fixed vector.
* **SeedAttribute**: Read the vector from an attribute on the seed point.
* **VtxAttribute**: Read the vector from an attribute on the graph vertex.

</details>

<details>

<summary><strong>GrowthDirectionAttribute</strong><br><em>Growth direction attribute name.</em></summary>

Name of the attribute used when `GrowthDirection` is set to "Seed Attribute" or "Vtx Attribute".

</details>

<details>

<summary><strong>GrowthDirectionConstant</strong><br><em>Growth direction constant</em></summary>

Fixed vector direction if `GrowthDirection` is set to "Constant".

</details>

<details>

<summary><strong>GrowthMaxDistance</strong><br><em>The maximum growth distance for a given seed.</em></summary>

Controls the maximum total distance a path can travel. Can be a constant or read from an attribute.

**Values**:

* **Constant**: Use a fixed value.
* **SeedAttribute**: Read the value from a double attribute on the seed point.
* **VtxAttribute**: Read the value from a double attribute on the graph vertex.

</details>

<details>

<summary><strong>GrowthMaxDistanceAttribute</strong><br><em>Max growth distance attribute name.</em></summary>

Name of the attribute used when `GrowthMaxDistance` is set to "Seed Attribute" or "Vtx Attribute".

</details>

<details>

<summary><strong>GrowthMaxDistanceConstant</strong><br><em>Max growth distance constant</em></summary>

Fixed maximum distance if `GrowthMaxDistance` is set to "Constant".

</details>

<details>

<summary><strong>bUseGrowthStop</strong><br><em>Whether or not to stop growth at a vertex.</em></summary>

When enabled, paths will stop growing if a vertex has a boolean attribute set to true.

</details>

<details>

<summary><strong>GrowthStopAttribute</strong><br><em>An attribute read on the Vtx as a boolean. If true and this node is used in a path, the path stops there.</em></summary>

Name of the boolean attribute on graph vertices that stops growth when true.

</details>

<details>

<summary><strong>bInvertGrowthStop</strong><br><em>Inverse Growth Stop behavior</em></summary>

When enabled, paths stop growing if a vertex has a boolean attribute set to false.

</details>

<details>

<summary><strong>bUseNoGrowth</strong><br><em>Whether or not to prevent growth on a vertex.</em></summary>

When enabled, vertices with a true value in the specified attribute will never be used for growth, but can still act as seeds.

</details>

<details>

<summary><strong>NoGrowthAttribute</strong><br><em>An attribute read on the Vtx as a boolean. If true, this point will never be grown on, but may be still used as seed.</em></summary>

Name of the boolean attribute on graph vertices that prevents growth.

</details>

<details>

<summary><strong>bInvertNoGrowth</strong><br><em>Inverse No Growth behavior</em></summary>

When enabled, paths will not grow on vertices with a false value in the specified attribute.

</details>

<details>

<summary><strong>SeedAttributesToPathTags</strong><br><em>TBD</em></summary>

Controls how seed attributes are converted into tags for output paths.

</details>

<details>

<summary><strong>SeedForwarding</strong><br><em>Which Seed attributes to forward on paths.</em></summary>

Determines which attributes from the seed points are copied to the resulting path data.

</details>

<details>

<summary><strong>Statistics</strong><br><em>Output various statistics.</em></summary>

When enabled, outputs performance and processing statistics for debugging or optimization.

</details>

<details>

<summary><strong>bUseOctreeSearch</strong><br><em>Whether or not to search for closest node using an octree.</em></summary>

When enabled, uses an octree structure for faster neighbor lookups. May improve performance on large datasets.

</details>
