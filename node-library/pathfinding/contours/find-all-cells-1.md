---
description: 'In editor :: PCGEx | Pathfinding : Find Cluster Hull'
icon: circle
---

# Find Cluster Hull

Output a single hull per cluster, as a path.

**How It Works**

> AI-Generated, needs proofreading

* Computes a single hull for each cluster within the dataset.
* Utilizes specified constraints (`PCGExCellConstraintsDetails`) and artifacts (`Cell artifacts`) to define the boundaries and characteristics of the clusters.
* Applies projection settings to determine how the hull is represented in the output path, using an octree search method if enabled to find the closest node efficiently.
* Suppresses warnings related to failing to find a hull when `Quiet Failed To Find Hull Warning` is set to true.

#### Configuration

<details>

<summary><strong>Constraints</strong> <code>PCGExCellConstraintsDetails</code></summary>

Controls constraints.

📦 See: CellConstraints configuration

⚡ PCG Overridable

</details>

<details>

<summary><strong>Artifacts</strong> <code>PCGExCellArtifactsDetails</code></summary>

Cell artifacts.

📦 See: CellArtifacts configuration

⚡ PCG Overridable

</details>

<details>

<summary><strong>Projection Details</strong> <code>PCGExGeo2DProjectionDetails</code></summary>

Projection settings.

📦 See: Geo2DProjection configuration

⚡ PCG Overridable

</details>

<details>

<summary><strong>Use Octree Search</strong> <code>bool</code></summary>

Whether or not to search for closest node using an octree. Depending on your dataset, enabling this may be either much faster, or much slower.

</details>

<details>

<summary><strong>Quiet Failed To Find Hull Warning</strong> <code>bool</code></summary>

Controls quiet failed to find hull warning.

</details>

***

Source: `Source\PCGExElementsPathfinding\Public\Elements\PCGExPathfindingFindClusterHull.h`
