---
description: 'In editor :: PCGEx | Pathfinding : Grow Paths'
icon: scrubber
---

# Pathfinding : Grow Paths

{% hint style="warning" %}
## AI-generated page -- to be reviewed 
While not 100% accurate, it should properly capture what the node/factory does. It stills needs to be proofread by a human.
{% endhint %}

{% hint style="warning" %}
Grow Paths has been deprecated in favor of [flood-fill](../clusters/flood-fill/ "mention").
{% endhint %}

> Grow paths from seed points by iteratively extending them through connected nodes.

### Overview

This node takes seed points and grows paths by extending them through a graph structure, connecting to neighboring nodes based on defined rules. It's useful for creating network-like structures such as roads, rivers, or pathways that branch out from starting points.

The node supports multiple growth modes, allowing you to control how paths are extended and how many iterations each seed performs. You can also define limits on path length and stop conditions to prevent infinite growth or unwanted extensions.

{% hint style="info" %}
This node works with graph data from previous nodes in the PCG graph. It requires a valid set of points representing nodes and edges connecting them.
{% endhint %}

<details>

<summary>Inputs</summary>

* **Main Input**: Points representing graph nodes
* **Edges Input**: Edges connecting the nodes

</details>

<details>

<summary>Outputs</summary>

* **Output**: Generated paths as point collections, each containing a sequence of connected points

</details>

### Properties Overview

Controls how path growth is managed and what data is used during the process.

***

#### General

Controls core behavior for how paths are grown from seeds.

**GrowthMode**

_Controls how iterative growth is managed._

* When set to **Parallel**, all active seeds grow simultaneously, processing one iteration for each before moving to the next.
* When set to **Sequence**, each seed grows completely to its end before moving to the next seed.

**Values**:

* **Parallel**: Does one growth iteration on each seed until none remain
* **Sequence**: Grow a seed to its end, then move to the next seed

**NumIterations**

_Determines how many growth iterations each seed performs._

* When set to **Constant**, uses the value in `NumIterationsConstant`.
* When set to **Seed Attribute**, reads an integer attribute from each seed point.
* When set to **Vtx Attribute**, reads an integer attribute from each node.

**Values**:

* **Constant**: Use a single constant for all seeds
* **Seed Attribute**: Attribute read on the seed
* **Vtx Attribute**: Attribute read on the vtx

**NumIterationsConstant**

_The fixed number of iterations for each seed when `NumIterations` is set to Constant._

* Controls how many times each seed will grow its path.

**NumIterationsUpdateMode**

_How the number of iterations is updated during growth._

* When set to **Once**, reads the iteration count only once at the beginning.
* When set to **Set Each Iteration**, updates the remaining iterations after each growth step.
* When set to **Add Each Iteration**, adds to the remaining iterations after each growth step.

**Values**:

* **Once**: Read once at the beginning of the computation
* **Set Each Iteration**: Set the remaining number of iteration after each iteration
* **Add Each Iteration**: Add to the remaning number of iterations after each iteration

**SeedNumBranches**

_Determines how many branches are started from each seed._

* When set to **Constant**, uses the value in `NumBranchesConstant`.
* When set to **Seed Attribute**, reads an integer attribute from each seed point.
* When set to **Vtx Attribute**, reads an integer attribute from each node.

**Values**:

* **Constant**: Use a single constant for all seeds
* **Seed Attribute**: Attribute read on the seed
* **Vtx Attribute**: Attribute read on the vtx

**SeedNumBranchesMean**

_How the number of branches is interpreted when using attribute-based values._

* When set to **Discrete**, uses the raw integer value.
* When set to **Relative**, normalizes the value between 0 and 1, then multiplies by the actual number of neighbors.

**Values**:

* **Discrete**: Raw value will be used, or used as absolute
* **Relative**: Input value will be normalized between 0..1, or used as a factor

**NumBranchesConstant**

_The fixed number of branches for each seed when `SeedNumBranches` is set to Constant._

* Controls how many paths are started from each seed.

**NumBranchesAttribute**

_Name of the attribute to read branch count from when `SeedNumBranches` is set to Seed Attribute._

* Used to dynamically control branching per seed point.

**GrowthDirection**

_Determines which direction paths grow from seeds._

* When set to **Constant**, uses the value in `GrowthDirectionConstant`.
* When set to **Seed Attribute**, reads a vector attribute from each seed point.
* When set to **Vtx Attribute**, reads a vector attribute from each node.

**Values**:

* **Constant**: Use a single constant for all seeds
* **Seed Attribute**: Attribute read on the seed
* **Vtx Attribute**: Attribute read on the vtx

**GrowthDirectionConstant**

_The fixed direction for growth when `GrowthDirection` is set to Constant._

* Controls which direction each path extends from its starting point.

**GrowthDirectionUpdateMode**

_How the growth direction is updated during growth._

* When set to **Once**, reads the direction only once at the beginning.
* When set to **Set Each Iteration**, updates the direction after each growth step.
* When set to **Add Each Iteration**, adds to the direction vector after each growth step.

**Values**:

* **Once**: Read once at the beginning of the computation
* **Set Each Iteration**: Set the remaining number of iteration after each iteration
* **Add Each Iteration**: Add to the remaning number of iterations after each iteration

**GrowthMaxDistance**

_Determines how far paths can grow from seeds._

* When set to **Constant**, uses the value in `GrowthMaxDistanceConstant`.
* When set to **Seed Attribute**, reads a double attribute from each seed point.
* When set to **Vtx Attribute**, reads a double attribute from each node.

**Values**:

* **Constant**: Use a single constant for all seeds
* **Seed Attribute**: Attribute read on the seed
* **Vtx Attribute**: Attribute read on the vtx

**GrowthMaxDistanceConstant**

_The maximum distance a path can grow when `GrowthMaxDistance` is set to Constant._

* Controls how far each path extends from its seed.

***

#### Tagging & Forwarding

Controls which attributes are copied from seeds to generated paths.

**SeedAttributesToPathTags**

_Specifies which seed attributes should be converted into tags on the resulting paths._

* Enables tagging paths with information from seed points, useful for categorizing or filtering later in the pipeline.

**SeedForwarding**

_Configures which seed attributes are forwarded to the output paths._

* Allows copying of attributes from seed points to the generated path data for downstream processing.

***

#### Advanced

Controls performance and statistics options.

**Statistics**

_Enables writing usage statistics to output paths._

* When enabled, writes point use count and edge use count attributes to help analyze path density or usage patterns.

**bUseOctreeSearch**

_Whether to use an octree for faster node lookups during growth._

* When enabled, improves performance on large datasets by using spatial indexing.
* May be slower on small datasets due to overhead.
