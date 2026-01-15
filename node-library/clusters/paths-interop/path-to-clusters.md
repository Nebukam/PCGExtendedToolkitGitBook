---
description: 'In editor :: PCGEx | Path : To Clusters'
icon: circle
---

# Path to Clusters

Merge paths to edge clusters for glorious pathfinding inception

**How It Works**

> AI-Generated, needs proofreading

* The node merges input paths into clusters based on specified settings for pathfinding optimization.
* If "Fuse Paths" is enabled, the node combines individual paths into a single interconnected graph structure.
* When "Find Point Edge Intersections" is selected, the node identifies and processes intersections between points and edges according to the provided Point/Edge Settings.
* With "Find Edge Edge Intersections" activated, the node detects and handles crossings between edges within the merged path clusters.

#### Configuration

<details>

<summary><strong>Fuse Paths</strong> <code>bool</code></summary>

Whether to fuse paths into a single graph or not.

⚡ PCG Overridable

</details>

<details>

<summary><strong>Point/Point Settings</strong> <code>PCGExPointPointIntersectionDetails</code></summary>

Fuse Settings

📦 See: PointPointIntersection configuration

⚡ PCG Overridable

</details>

<details>

<summary><strong>Find Point Edge Intersections</strong> <code>bool</code></summary>

Find Point-Edge intersection (points on edges)

⚡ PCG Overridable

</details>

<details>

<summary><strong>Point/Edge Settings</strong> <code>PCGExPointEdgeIntersectionDetails</code></summary>

Point-Edge intersection settings

📦 See: PointEdgeIntersection configuration

⚡ PCG Overridable

</details>

<details>

<summary><strong>Find Edge Edge Intersections</strong> <code>bool</code></summary>

Find Edge-Edge intersection (edge crossings)

⚡ PCG Overridable

</details>

<details>

<summary><strong>Edge/Edge Settings</strong> <code>PCGExEdgeEdgeIntersectionDetails</code></summary>

Edge-Edge intersection settings

📦 See: EdgeEdgeIntersection configuration

⚡ PCG Overridable

</details>

<details>

<summary><strong>Carry Over Settings</strong> <code>PCGExCarryOverDetails</code></summary>

Meta filter settings.

📦 See: CarryOver configuration

⚡ PCG Overridable

</details>

<details>

<summary><strong>Cluster Output Settings</strong> <code>PCGExGraphBuilderDetails</code></summary>

Graph & Edges output properties

📦 See: GraphBuilder configuration

⚡ PCG Overridable

</details>

**Data Blending**

<details>

<summary><strong>Default Points Blending Details</strong> <code>PCGExBlendingDetails</code></summary>

Defines how fused point properties and attributes are merged together for fused points.

📦 See: Blending configuration

</details>

<details>

<summary><strong>Default Edges Blending Details</strong> <code>PCGExBlendingDetails</code></summary>

Defines how fused point properties and attributes are merged together for fused edges.

📦 See: Blending configuration

</details>

<details>

<summary><strong>Use Custom Point Edge Blending</strong> <code>bool</code></summary>

Controls use custom point edge blending.

⚡ PCG Overridable

</details>

<details>

<summary><strong>Custom Point Edge Blending Details</strong> <code>PCGExBlendingDetails</code></summary>

Defines how fused point properties and attributes are merged together for Point/Edge intersections.

📦 See: Blending configuration

⚡ PCG Overridable

</details>

<details>

<summary><strong>Use Custom Edge Edge Blending</strong> <code>bool</code></summary>

Controls use custom edge edge blending.

⚡ PCG Overridable

</details>

<details>

<summary><strong>Custom Edge Edge Blending Details</strong> <code>PCGExBlendingDetails</code></summary>

Defines how fused point properties and attributes are merged together for Edge/Edge intersections (Crossings).

📦 See: Blending configuration

⚡ PCG Overridable

</details>

***

Source: `Source\PCGExElementsClusters\Public\Elements\Paths\PCGExPathToClusters.h`
