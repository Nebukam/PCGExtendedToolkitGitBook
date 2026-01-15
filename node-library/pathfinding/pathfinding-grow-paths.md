---
description: 'In editor :: PCGEx | Pathfinding : Grow Paths'
icon: scrubber
---

# Pathfinding : Grow Paths

{% hint style="warning" %}
Grow Paths has been deprecated in favor of [flood-fill](../clusters/flood-fill/ "mention").
{% endhint %}

Grow paths from seeds.

⚙️ **Behavior** — Instanced pathfinding search.

**How It Works**

> AI-Generated, needs proofreading

* The node initializes path growth from designated seeds within a graph structure.
* Seed selection follows rules defined by the "Seed Picking" setting to determine starting nodes for path generation.
* Path growth proceeds iteratively according to the "Growth Mode", with each iteration expanding paths outward from existing nodes until reaching the limit set by either "Num Iterations Constant" or the attribute specified in "Num Iterations Attribute".
* Each seed can undergo a maximum number of iterations as defined, allowing for controlled expansion and complexity of generated paths.

#### Configuration

<details>

<summary><strong>Seed Picking</strong> <code>PCGExNodeSelectionDetails</code></summary>

Drive how a seed selects a node.

📦 See: NodeSelection configuration

⚡ PCG Overridable

</details>

<details>

<summary><strong>Growth Mode</strong> <code>PCGExGrowthIterationMode</code></summary>

Controls how iterative growth is managed.

**Values:**

* **Parallel**: Does one growth iteration on each seed until none remain
* **Sequence**: Grow a seed to its end, then move to the next seed

</details>

<details>

<summary><strong>Num Iterations</strong> <code>PCGExGrowthValueSource</code></summary>

The maximum number of growth iterations for a given seed.

**Values:**

* **Constant**: Use a single constant for all seeds
* **Seed Attribute**: Attribute read on the seed.
* **Vtx Attribute**: Attribute read on the vtx.

</details>

<details>

<summary><strong>Num Iterations Attribute</strong> <code>PCGAttributePropertyInputSelector</code></summary>

Num iteration attribute name. (will be translated to int32)

⚡ PCG Overridable

</details>

<details>

<summary><strong>Num Iterations Constant</strong> <code>int32</code></summary>

Num iteration constant

⚡ PCG Overridable

</details>

<details>

<summary><strong>Num Iterations Update Mode</strong> <code>PCGExGrowthUpdateMode</code></summary>

Controls num iterations update mode.

**Values:**

* **Once**: Read once at the beginning of the computation.
* **Set Each Iteration**: Set the remaining number of iteration after each iteration.
* **Add Each Iteration**: Add to the remaning number of iterations after each iteration.

⚡ PCG Overridable

</details>

<details>

<summary><strong>Seed Num Branches</strong> <code>PCGExGrowthValueSource</code></summary>

The maximum number of growth started by a given seed.

**Values:**

* **Constant**: Use a single constant for all seeds
* **Seed Attribute**: Attribute read on the seed.
* **Vtx Attribute**: Attribute read on the vtx.

</details>

<details>

<summary><strong>Seed Num Branches Mean</strong> <code>PCGExMeanMeasure</code></summary>

How the NumBranches value is to be interpreted against the actual number of neighbors.

</details>

<details>

<summary><strong>Num Branches Constant</strong> <code>int32</code></summary>

Num branches constant

⚡ PCG Overridable

</details>

<details>

<summary><strong>Num Branches Attribute</strong> <code>PCGAttributePropertyInputSelector</code></summary>

Num branches attribute name. (will be translated to int32)

⚡ PCG Overridable

</details>

<details>

<summary><strong>Growth Direction</strong> <code>PCGExGrowthValueSource</code></summary>

The maximum number of growth iterations for a given seed.

**Values:**

* **Constant**: Use a single constant for all seeds
* **Seed Attribute**: Attribute read on the seed.
* **Vtx Attribute**: Attribute read on the vtx.

</details>

<details>

<summary><strong>Growth Direction Attribute</strong> <code>PCGAttributePropertyInputSelector</code></summary>

Growth direction attribute name. (will be translated to a FVector)

⚡ PCG Overridable

</details>

<details>

<summary><strong>Growth Direction Constant</strong> <code>Vector</code></summary>

Growth direction constant

⚡ PCG Overridable

</details>

<details>

<summary><strong>Growth Direction Update Mode</strong> <code>PCGExGrowthUpdateMode</code></summary>

Controls growth direction update mode.

**Values:**

* **Once**: Read once at the beginning of the computation.
* **Set Each Iteration**: Set the remaining number of iteration after each iteration.
* **Add Each Iteration**: Add to the remaning number of iterations after each iteration.

</details>

<details>

<summary><strong>Growth Max Distance</strong> <code>PCGExGrowthValueSource</code></summary>

The maximum growth distance for a given seed.

**Values:**

* **Constant**: Use a single constant for all seeds
* **Seed Attribute**: Attribute read on the seed.
* **Vtx Attribute**: Attribute read on the vtx.

</details>

<details>

<summary><strong>Growth Max Distance Attribute</strong> <code>PCGAttributePropertyInputSelector</code></summary>

Max growth distance attribute name. (will be translated to a FVector)

⚡ PCG Overridable

</details>

<details>

<summary><strong>Growth Max Distance Constant</strong> <code>double</code></summary>

Max growth distance constant

⚡ PCG Overridable

</details>

**Advanced**

<details>

<summary><strong>Statistics</strong> <code>PCGExPathStatistics</code></summary>

Output various statistics.

</details>

<details>

<summary><strong>Use Octree Search</strong> <code>bool</code></summary>

Whether or not to search for closest node using an octree. Depending on your dataset, enabling this may be either much faster, or slightly slower.

</details>

**Limits**

<details>

<summary><strong>Use Growth Stop</strong> <code>bool</code></summary>

Controls use growth stop.

⚡ PCG Overridable

</details>

<details>

<summary><strong>Growth Stop Attribute</strong> <code>PCGAttributePropertyInputSelector</code></summary>

An attribute read on the Vtx as a boolean. If true and this node is used in a path, the path stops there.

⚡ PCG Overridable

</details>

<details>

<summary><strong>Invert Growth Stop</strong> <code>bool</code></summary>

Inverse Growth Stop behavior

⚡ PCG Overridable

</details>

<details>

<summary><strong>Use No Growth</strong> <code>bool</code></summary>

Controls use no growth.

⚡ PCG Overridable

</details>

<details>

<summary><strong>No Growth Attribute</strong> <code>PCGAttributePropertyInputSelector</code></summary>

An attribute read on the Vtx as a boolean. If true, this point will never be grown on, but may be still used as seed.

⚡ PCG Overridable

</details>

<details>

<summary><strong>Invert No Growth</strong> <code>bool</code></summary>

Inverse No Growth behavior

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

***

Source: `Source\PCGExElementsPathfinding\Public\Elements\PCGExPathfindingGrowPaths.h`
