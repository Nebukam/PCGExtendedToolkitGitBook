---
icon: share-nodes
---

# Cluster : Decomposition

Compute convex/k decomposition of clusters and write partition as an ID on the nodes.

### Overview

This node performs convex decomposition on graph clusters, partitioning complex non-convex graph structures into smaller convex cells. Each vertex receives a cell ID attribute indicating which partition it belongs to. The algorithm recursively splits the cluster along concave regions until all resulting cells meet the convexity threshold.

### How It Works

1. **Analyze Concavity**: Examine cluster structure to identify concave regions where the graph boundary curves inward.
2. **Recursive Splitting**: Split the cluster at concave boundaries, dividing it into smaller subgraphs.
3. **Apply Constraints**: Continue splitting until cells meet the maximum concavity ratio, or constraints (max cells, max depth, min nodes) are reached.
4. **Assign Cell IDs**: Write a unique integer cell ID to each vertex indicating its partition membership.

**Usage Notes**

* **Concavity Ratio**: Controls how "convex" each cell must be. Lower values require stricter convexity, producing more cells. Higher values tolerate more concavity, producing fewer cells.
* **Constraint Balance**: The algorithm stops when any constraint is hit - reaching max cells, max recursion depth, or when further splitting would create cells with fewer than the minimum nodes.
* **Output Attribute**: The cell ID attribute can be used for filtering, coloring, or further processing of vertices by their partition.

### Behavior

```
Convex decomposition of a non-convex cluster:

Input cluster:              After decomposition:
    ●───●───●                  ●───●───●
    │       │                  │ A │ A │
    ●   ●   ●      ───→        ●───●───●
    │  / \  │                  │ B │ C │
    ●─●   ●─●                  ●─●   ●─●

Vertices receive CellID: A=0, B=1, C=2
(splits occur at concave boundaries)
```

### Settings

#### Node-Specific Settings

<details>

<summary><strong>Max Concavity Ratio</strong> <code>double</code></summary>

Maximum allowed concavity ratio for a cell to be considered "convex enough" and stop splitting. Lower values enforce stricter convexity (more rectangular cells), while higher values allow more irregular shapes.

Default: `0.01`

⚡ PCG Overridable

</details>

<details>

<summary><strong>Min Nodes Per Cell</strong> <code>int32</code></summary>

Minimum number of nodes a cell must contain. The algorithm will not split a cell if doing so would create partitions with fewer nodes than this threshold.

Default: `4`

⚡ PCG Overridable

</details>

<details>

<summary><strong>Max Cells</strong> <code>int32</code></summary>

Maximum number of cells to create from decomposition. Once this limit is reached, no further splitting occurs regardless of concavity.

Default: `32`

⚡ PCG Overridable

</details>

<details>

<summary><strong>Max Depth</strong> <code>int32</code></summary>

Maximum recursion depth for the decomposition algorithm. Limits how many times cells can be subdivided.

Default: `100`

⚡ PCG Overridable

</details>

<details>

<summary><strong>Cell ID Attribute Name</strong> <code>FName</code></summary>

Name of the integer attribute written to each vertex indicating its cell/partition membership.

Default: `CellID`

⚡ PCG Overridable

</details>

#### Inherited Settings

This node inherits cluster processing settings from its base class.

→ See Cluster Processor Settings for: Cluster handling and output options.

***

[![Static Badge](https://img.shields.io/badge/Source-PCGExElementsClusters-473F69)](https://github.com/Nebukam/PCGExtendedToolkit/blob/main/Source/PCGExElementsClusters/Public/Elements/Decomposition/PCGExClusterDecomposition.h)

<!-- SOURCE: https://github.com/Nebukam/PCGExtendedToolkit/blob/main/Source/PCGExElementsClusters/Public/Elements/Decomposition/PCGExClusterDecomposition.h -->
