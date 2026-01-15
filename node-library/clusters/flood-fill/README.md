---
description: 'In editor :: PCGEx | Cluster : Flood Fill'
icon: scrubber
---

# Flood Fill

Diffuses vtx attributes onto their neighbors.

**How It Works**

> AI-Generated, needs proofreading

* The Cluster : Flood Fill node initiates diffusion of vertex attributes starting from seed points selected according to specified settings.
* Vertex sorting and sort direction determine the order in which vertices are processed for attribute diffusion.
* During processing, each vertex's attributes are diffused to its neighbors based on defined parameters under the Processing setting.
* Seed picking configurations influence how initial seed points are chosen within the vertex set for initiating the flood fill operation.

#### Configuration

<details>

<summary><strong>Seed Picking</strong> <code>PCGExNodeSelectionDetails</code></summary>

Drive how a seed point selects a node.

📦 See: NodeSelection configuration

⚡ PCG Overridable

</details>

<details>

<summary><strong>Ordering</strong> <code>PCGExFloodFillOrder</code></summary>

Defines the sorting used for the vtx

**Values:**

* **Index**: Uses point index to drive diffusion order.
* **Sorting**: Use sorting rules to drive diffusion order.

</details>

<details>

<summary><strong>Sort Direction</strong> <code>PCGExSortDirection</code></summary>

Sort direction

</details>

<details>

<summary><strong>Seeds</strong> <code>PCGExFloodFillSeedPickingDetails</code></summary>

Seeds settings

📦 See: FloodFillSeedPicking configuration

</details>

<details>

<summary><strong>Processing</strong> <code>PCGExFloodFillProcessing</code></summary>

Defines how each vtx is diffused

**Values:**

* **Parallel**: Diffuse each vtx once before moving to the next iteration.
* **Sequential**: Diffuse each vtx until it stops before moving to the next one, and so on.

</details>

<details>

<summary><strong>Diffusion</strong> <code>PCGExFloodFillFlowDetails</code></summary>

Diffusion settings

📦 See: FloodFillFlow configuration

</details>

<details>

<summary><strong>Use Octree Search</strong> <code>bool</code></summary>

Whether or not to search for closest node using an octree. Depending on your dataset, enabling this may be either much faster, or much slower.

</details>

**Outputs**

<details>

<summary><strong>Write Diffusion Depth</strong> <code>bool</code></summary>

Write the diffusion depth the vtx was subjected to.

⚡ PCG Overridable

</details>

<details>

<summary><strong>Diffusion Depth</strong> <code>Name</code></summary>

Name of the 'int32' attribute to write diffusion depth to.

⚡ PCG Overridable

</details>

<details>

<summary><strong>Write Diffusion Order</strong> <code>bool</code></summary>

Write the final diffusion order.

⚡ PCG Overridable

</details>

<details>

<summary><strong>Diffusion Order</strong> <code>Name</code></summary>

Name of the 'int32' attribute to write order to.

⚡ PCG Overridable

</details>

<details>

<summary><strong>Write Diffusion Distance</strong> <code>bool</code></summary>

Write the final diffusion distance.

⚡ PCG Overridable

</details>

<details>

<summary><strong>Diffusion Distance</strong> <code>Name</code></summary>

Name of the 'double' attribute to write diffusion distance to.

⚡ PCG Overridable

</details>

<details>

<summary><strong>Write Diffusion Ending</strong> <code>bool</code></summary>

Write on the vtx whether it's a diffusion "endpoint".

⚡ PCG Overridable

</details>

<details>

<summary><strong>Diffusion Ending</strong> <code>Name</code></summary>

Name of the 'bool' attribute to write diffusion ending to.

⚡ PCG Overridable

</details>

<details>

<summary><strong>Seed Forwarding</strong> <code>PCGExForwardDetails</code></summary>

Which Seed attributes to forward on the vtx they diffused to.

📦 See: Forward configuration

⚡ PCG Overridable

</details>

**Outputs - Paths**

<details>

<summary><strong>Path Output</strong> <code>PCGExFloodFillPathOutput</code></summary>

TBD

**Values:**

* **None**: Don't output any paths.
* **Full**: Output full paths, from seed to end point -- generate a lot of overlap.
* **Partitions**: Output partial paths, only endpoints will overlap.

</details>

<details>

<summary><strong>├─ Partition over</strong> <code>PCGExFloodFillPathPartitions</code></summary>

TBD

**Values:**

* **Length**: TBD
* **Score**: TBD
* **Depth**: TBD

</details>

<details>

<summary><strong>└─ Sorting</strong> <code>PCGExSortDirection</code></summary>

TBD

</details>

<details>

<summary><strong>Seed Attributes To Path Tags</strong> <code>PCGExAttributeToTagDetails</code></summary>

TBD

📦 See: AttributeToTag configuration

</details>

***

Source: `Source\PCGExElementsClusters\Public\Elements\FloodFill\PCGExFloodFillClusters.h`
