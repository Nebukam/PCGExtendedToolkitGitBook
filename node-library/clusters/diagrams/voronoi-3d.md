---
description: 'In editor :: PCGEx | Cluster : Voronoi 3D'
icon: circle
---

# Voronoi 3D

Create a 3D Voronoi graph for each input dataset.

**How It Works**

> AI-Generated, needs proofreading

* The Cluster : Voronoi 3D node generates a 3D Voronoi diagram for each input dataset by computing regions around points where every point in a given region is closer to its associated seed point than to any other.
* It uses the specified method setting to determine the location of Voronoi cells, adjusting based on the selected algorithm or technique.
* The node expands bounds as configured under "Expand Bounds" for pruning points and achieving balanced centroids, then prunes points outside these bounds if "Prune Out Of Bounds" is enabled.
* If "Mark Hull" is activated, the node identifies and marks points and edges that lie on the convex hull of the Voronoi diagram, assigning a boolean attribute named according to "Hull Attribute Name", where true indicates the point or edge lies on the hull.

#### Configuration

<details>

<summary><strong>Method</strong> <code>PCGExCellCenter</code></summary>

Method used to find Voronoi cell location

⚡ PCG Overridable

</details>

<details>

<summary><strong>Expand Bounds</strong> <code>double</code></summary>

Bounds used for point pruning & balanced centroid.

⚡ PCG Overridable

</details>

<details>

<summary><strong>Prune Out Of Bounds</strong> <code>bool</code></summary>

Prune points outside bounds

⚡ PCG Overridable

</details>

<details>

<summary><strong>Mark Hull</strong> <code>bool</code></summary>

Mark points & edges that lie on the hull

⚡ PCG Overridable

</details>

<details>

<summary><strong>Hull Attribute Name</strong> <code>Name</code></summary>

Name of the attribute to output the Hull boolean to. True if point is on the hull, otherwise false.

⚡ PCG Overridable

</details>

<details>

<summary><strong>Mark Edge On Touch</strong> <code>bool</code></summary>

When true, edges that have at least a point on the Hull as marked as being on the hull.

⚡ PCG Overridable

</details>

<details>

<summary><strong>Cluster Output Settings</strong> <code>PCGExGraphBuilderDetails</code></summary>

Graph & Edges output properties. Only available if bPruneOutsideBounds as it otherwise generates a complete graph.

📦 See: GraphBuilder configuration

⚡ PCG Overridable

</details>

***

Source: `Source\PCGExElementsClusters\Public\Elements\Diagrams\PCGExBuildVoronoiGraph.h`
