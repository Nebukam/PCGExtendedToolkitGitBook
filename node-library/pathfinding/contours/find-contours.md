---
description: 'In editor :: PCGEx | Pathfinding : Find Cells'
icon: circle
---

# Find Cells

Attempts to find a closed cell of connected edges around seed points.

**How It Works**

> AI-Generated, needs proofreading

* The node initializes by identifying seed points from which to start pathfinding operations.
* It then attempts to find closed cells of connected edges around each seed point based on specified constraints and seed picking rules.
* During the process, the node applies any defined seed mutations to modify the behavior or properties of the seeds as they navigate through the graph.
* If configured, the node outputs a filtered set of points that includes only those seeds which successfully generated valid paths within the defined constraints.

#### Configuration

<details>

<summary><strong>Seed Picking</strong> <code>PCGExNodeSelectionDetails</code></summary>

Drive how a seed selects a node.

📦 See: NodeSelection configuration

⚡ PCG Overridable

</details>

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

<summary><strong>Output Filtered Seeds</strong> <code>bool</code></summary>

Output a filtered set of points containing only seeds that generated a valid path

⚡ PCG Overridable

</details>

<details>

<summary><strong>Seed Mutations</strong> <code>PCGExCellSeedMutationDetails</code></summary>

Controls seed mutations.

📦 See: CellSeedMutation configuration

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

**Forwarding**

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

Source: `Source\PCGExElementsPathfinding\Public\Elements\PCGExPathfindingFindContours.h`
