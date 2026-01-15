---
description: 'In editor :: PCGEx | Cluster : Delaunay 2D'
icon: circle
---

# Delaunay 2D

Create a 2D delaunay triangulation for each input dataset.

**How It Works**

> AI-Generated, needs proofreading

* Computes a 2D Delaunay triangulation for each input dataset, ensuring no input points are inside the circumcircle of any triangle in the triangulation.
* Optionally outputs the Urquhart graph by removing the longest edge from each Delaunay cell if the "Urquhart" setting is enabled.
* Outputs the original sites (points) used to generate the Delaunay triangulation when "Output Sites" is selected.
* Marks points and edges that lie on the convex hull of the triangulation, assigning a boolean attribute named by "Site Hull Attribute Name", where `True` indicates the point or edge is part of the hull.
* Optionally merges adjacent sites into single points if "Urquhart Sites Merge" is enabled.

#### Configuration

<details>

<summary><strong>Urquhart</strong> <code>bool</code></summary>

Output the Urquhart graph of the Delaunay triangulation (removes the longest edge of each Delaunay cell)

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

Graph & Edges output properties

📦 See: [Cluster Output Settings](https://pcgex.gitbook.io/pcgex/node-library/clusters/common-settings/output-settings)

⚡ PCG Overridable

</details>

**Output**

<details>

<summary><strong>Output Sites</strong> <code>bool</code></summary>

Output delaunay sites

⚡ PCG Overridable

</details>

<details>

<summary><strong>Mark Site Hull</strong> <code>bool</code></summary>

Mark points & edges that lie on the hull

⚡ PCG Overridable

</details>

<details>

<summary><strong>Site Hull Attribute Name</strong> <code>Name</code></summary>

Name of the attribute to output the Hull boolean to. True if point is on the hull, otherwise false.

⚡ PCG Overridable

</details>

<details>

<summary><strong>Urquhart Sites Merge</strong> <code>PCGExUrquhartSiteMergeMode</code></summary>

Merge adjacent sites into a single point

**Values:**

* **None**: Do not merge sites.
* **Merge Sites**: Merge site is the average of the merge.
* **Merge Edges**: Merge site is the averge of the removed edges.

⚡ PCG Overridable

</details>

***

Source: `Source\PCGExElementsClusters\Public\Elements\Diagrams\PCGExBuildDelaunayGraph2D.h`
