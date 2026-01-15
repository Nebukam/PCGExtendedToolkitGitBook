---
description: 'In editor :: PCGEx | Cluster : Voronoi 2D'
icon: circle
---

# Voronoi 2D

Create a 2D Voronoi graph for each input dataset.

**How It Works**

> AI-Generated, needs proofreading

* The Cluster : Voronoi 2D node generates a 2D Voronoi diagram for each input dataset provided to it.
* If "Write Influences Count" is set to true, the node calculates and assigns the number of influences (points) per region in the Voronoi diagram, storing this count under the attribute name specified by "Influences Count Attribute Name".
* When "Write Min Radius" is enabled, the node computes and stores the minimum radius for each region within the Voronoi diagram using the attribute name defined by "Min Radius Attribute Name".
* Similarly, if "Write Max Radius" is true, the maximum radius per region in the Voronoi diagram gets calculated and assigned to an attribute named according to "Max Radius Attribute Name".

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

<summary><strong>Projection Details</strong> <code>PCGExGeo2DProjectionDetails</code></summary>

Projection settings.

📦 See: Geo2DProjection configuration

⚡ PCG Overridable

</details>

<details>

<summary><strong>Cluster Output Settings</strong> <code>PCGExGraphBuilderDetails</code></summary>

Graph & Edges output properties. Only available if bPruneOutsideBounds as it otherwise generates a complete graph.

📦 See: [Cluster Output Settings](https://pcgex.gitbook.io/pcgex/node-library/clusters/common-settings/output-settings)

⚡ PCG Overridable

</details>

**Additional Outputs**

<details>

<summary><strong>Write Influences Count</strong> <code>bool</code></summary>

Controls write influences count.

⚡ PCG Overridable

</details>

<details>

<summary><strong>Influences Count Attribute Name</strong> <code>Name</code></summary>

Controls influences count attribute name.

⚡ PCG Overridable

</details>

<details>

<summary><strong>Write Min Radius</strong> <code>bool</code></summary>

Controls write min radius.

⚡ PCG Overridable

</details>

<details>

<summary><strong>Min Radius Attribute Name</strong> <code>Name</code></summary>

Controls min radius attribute name.

⚡ PCG Overridable

</details>

<details>

<summary><strong>Write Max Radius</strong> <code>bool</code></summary>

Controls write max radius.

⚡ PCG Overridable

</details>

<details>

<summary><strong>Max Radius Attribute Name</strong> <code>Name</code></summary>

Controls max radius attribute name.

⚡ PCG Overridable

</details>

<details>

<summary><strong>Output Sites</strong> <code>bool</code></summary>

Whether to output updated sites

⚡ PCG Overridable

</details>

<details>

<summary><strong>Prune Open Sites</strong> <code>bool</code></summary>

If enabled, sites that belong to an removed (out-of-bound) cell will be removed from the output.

⚡ PCG Overridable

</details>

<details>

<summary><strong>Open Site Flag</strong> <code>Name</code></summary>

Flag sites belonging to an open cell with a boolean attribute.

⚡ PCG Overridable

</details>

<details>

<summary><strong>Sites Output Details</strong> <code>PCGExVoronoiSitesOutputDetails</code></summary>

Controls sites output details.

📦 See: VoronoiSitesOutput configuration

⚡ PCG Overridable

</details>

***

Source: `Source\PCGExElementsClusters\Public\Elements\Diagrams\PCGExBuildVoronoiGraph2D.h`
