---
description: 'In editor :: PCGEx | Cluster : Convex Hull 2D'
icon: circle
---

# Convex Hull 2D

Create a 2D Convex Hull triangulation for each input dataset. Deprecated as of 5.4; use Find Convex Hull 2D instead.

**How It Works**

> AI-Generated, needs proofreading

* Computes a 2D Convex Hull for each input dataset, forming a triangulation that encompasses all points within each cluster.
* Outputs clusters based on the boolean setting "Output Clusters", determining whether to return individual clusters or combined results.
* Applies specified projection settings from "Projection Details" to adjust how data is projected onto the 2D plane before computing the Convex Hull.
* Uses the "Winding" setting to define the orientation (clockwise, counterclockwise) of the path around the hull points.
* Configures the output properties for graph and edges through "Cluster Output Settings", defining how the resulting triangulation is represented.

#### Configuration

<details>

<summary><strong>Output Clusters</strong> <code>bool</code></summary>

Controls output clusters.

</details>

<details>

<summary><strong>Projection Details</strong> <code>PCGExGeo2DProjectionDetails</code></summary>

Projection settings.

📦 See: Geo2DProjection configuration

⚡ PCG Overridable

</details>

<details>

<summary><strong>Winding</strong> <code>PCGExWinding</code></summary>

Path Winding

</details>

<details>

<summary><strong>Cluster Output Settings</strong> <code>PCGExGraphBuilderDetails</code></summary>

Graph & Edges output properties

📦 See: GraphBuilder configuration

⚡ PCG Overridable

</details>

***

Source: `Source\PCGExElementsClusters\Public\Elements\Diagrams\PCGExBuildConvexHull2D.h`
