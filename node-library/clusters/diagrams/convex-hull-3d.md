---
description: 'In editor :: PCGEx | Cluster : Convex Hull 3D'
icon: circle
---

# Convex Hull 3D

Create a 3D Convex Hull triangulation for each input dataset.

**How It Works**

> AI-Generated, needs proofreading

* The node processes input datasets individually to generate a 3D Convex Hull for each dataset.
* For each input dataset, the node computes the smallest convex polyhedron that encloses all points in the dataset.
* The output includes both the vertices and edges of the generated Convex Hulls, as specified by the Cluster Output Settings for Graph & Edges properties.

#### Configuration

<details>

<summary><strong>Cluster Output Settings</strong> <code>PCGExGraphBuilderDetails</code></summary>

Graph & Edges output properties

📦 See: GraphBuilder configuration

⚡ PCG Overridable

</details>

***

Source: `Source\PCGExElementsClusters\Public\Elements\Diagrams\PCGExBuildConvexHull.h`
