---
icon: circle
---

# Clipper2 : Triangulate

Performs Constrained Delaunay Triangulation on closed paths and outputs a Dynamic Mesh.

**How It Works**

> AI-Generated, needs proofreading

* Computes Constrained Delaunay Triangulation on provided closed paths to generate a mesh.
* Outputs the resulting triangulated geometry as a Dynamic Mesh object.
* Applies specified projection settings and fill rule (PCGExClipper2FillRule) during the triangulation process.
* Optionally optimizes triangle quality using Delaunay optimization if "Use Delaunay" is enabled.
* Attempts to repair any degenerate geometry in the output mesh based on selected repair options, if "Attempt Repair" and specific "Repair Degenerate" settings are configured.

#### Configuration

<details>

<summary><strong>Projection Details</strong> <code>PCGExGeo2DProjectionDetails</code></summary>

Projection settings

📦 See: Geo2DProjection configuration

⚡ PCG Overridable

</details>

<details>

<summary><strong>Fill Rule</strong> <code>PCGExClipper2FillRule</code></summary>

Controls fill rule.

⚡ PCG Overridable

</details>

<details>

<summary><strong>Use Delaunay</strong> <code>bool</code></summary>

Use Delaunay optimization for better triangle quality

⚡ PCG Overridable

</details>

<details>

<summary><strong>Quiet Bad Vertices Warning</strong> <code>bool</code></summary>

Suppress warnings about bad/duplicate vertices

⚡ PCG Overridable

</details>

**Mesh**

<details>

<summary><strong>Attempt Repair</strong> <code>bool</code></summary>

Attempt to repair degenerate geometry after triangulation

⚡ PCG Overridable

</details>

<details>

<summary><strong>Repair Degenerate</strong> <code>GeometryScriptDegenerateTriangleOptions</code></summary>

Repair options for degenerate geometry

⚡ PCG Overridable

</details>

<details>

<summary><strong>Topology</strong> <code>PCGExTopologyDetails</code></summary>

Topology settings. Some settings will be ignored based on selected output mode.

📦 See: Topology configuration

</details>

***

Source: `Source\PCGExElementsTopology\Public\Elements\PCGExClipper2Triangulate.h`
