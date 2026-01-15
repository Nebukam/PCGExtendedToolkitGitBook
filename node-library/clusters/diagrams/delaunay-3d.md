---
description: 'In editor :: PCGEx | Cluster : Delaunay 3D'
icon: circle
---

# Delaunay 3D

Create a 3D delaunay tetrahedralization for each input dataset.

**How It Works**

> AI-Generated, needs proofreading

* Computes a 3D Delaunay tetrahedralization for each input dataset, forming a set of non-overlapping tetrahedra that encompass all points in the dataset.
* Optionally outputs the Urquhart graph by removing the longest edge from each Delaunay cell if the "Urquhart" setting is enabled.
* Outputs the original sites (points) used to generate the Delaunay tetrahedralization when the "Output Sites" option is selected.
* Marks points and edges that lie on the convex hull of the dataset, assigning a boolean attribute named according to the "Site Hull Attribute Name" setting; this attribute is true for points on the hull and false otherwise.
* Merges adjacent sites into single points if the "Merge Urquhart Sites" option is enabled, simplifying the resulting graph structure.

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

<summary><strong>Cluster Output Settings</strong> <code>PCGExGraphBuilderDetails</code></summary>

Graph & Edges output properties

📦 See: [Cluster Output Settings](https://pcgex.gitbook.io/pcgex/node-library/clusters/common-settings/output-settings)

⚡ PCG Overridable

</details>

**Sites**

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

<summary><strong>Merge Urquhart Sites</strong> <code>bool</code></summary>

Merge adjacent sites into a single point

⚡ PCG Overridable

</details>

***

Source: `Source\PCGExElementsClusters\Public\Elements\Diagrams\PCGExBuildDelaunayGraph.h`
