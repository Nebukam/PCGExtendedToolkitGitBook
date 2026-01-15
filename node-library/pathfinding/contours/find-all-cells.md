---
description: 'In editor :: PCGEx | Pathfinding : Find All Cells'
icon: circle
---

# Find All Cells

Attempts to find the contours of all cluster cells.

**How It Works**

> AI-Generated, needs proofreading

* The node processes a dataset to identify and outline all cluster cells within it by computing their contours.
* It applies constraints defined in `PCGExCellConstraintsDetails` to filter or modify the cell identification process.
* The node uses projection settings specified under "Projection Details" to project data for analysis, aiding in contour detection.
* If "Use Octree Search" is enabled, the node employs an octree structure to efficiently search for the closest nodes, potentially speeding up or slowing down processing depending on the dataset's characteristics.

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

***

Source: `Source\PCGExElementsPathfinding\Public\Elements\PCGExPathfindingFindAllCells.h`
