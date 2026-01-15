---
description: 'In editor :: PCGEx | Cluster : Decomposition'
icon: circle
---

# Decomposition

Compute convex/k decomposition of clusters and write partition as an ID on the nodes.

**How It Works**

> AI-Generated, needs proofreading

* Computes convex/k decomposition of clusters within the input geometry.
* Assigns an ID to each partition resulting from the decomposition and writes this ID as an attribute named "Name" on the nodes.
* Writes the normal vectors derived from edges onto the vertices of the decomposed partitions.

#### Settings

<details>

<summary><strong>Max Concavity Ratio</strong> <code>double</code></summary>

Maximum allowed "concavity" - ratio of points inside hull vs on hull. 0 = all must be on hull

⚡ PCG Overridable

</details>

<details>

<summary><strong>Min Nodes Per Cell</strong> <code>int32</code></summary>

Minimum nodes per cell

⚡ PCG Overridable

</details>

<details>

<summary><strong>Max Cells</strong> <code>int32</code></summary>

Maximum cells to produce

⚡ PCG Overridable

</details>

<details>

<summary><strong>Max Depth</strong> <code>int32</code></summary>

Maximum recursion depth

⚡ PCG Overridable

</details>

#### Used In

* ClusterDecomposition

***

Defined in: `Source\PCGExElementsClusters\Public\Elements\Decomposition\PCGExSimpleConvexDecomposer.h`

#### Configuration

<details>

<summary><strong>Decomposition Settings</strong> <code>PCGExConvexDecompositionDetails</code></summary>

Write normal from edges on vertices.

📦 See: ConvexDecomposition configuration

⚡ PCG Overridable

</details>

<details>

<summary><strong>Cell IDAttribute Name</strong> <code>Name</code></summary>

Controls cell idattribute name.

⚡ PCG Overridable

</details>

***

Source: `Source\PCGExElementsClusters\Public\Elements\Decomposition\PCGExClusterDecomposition.h`
