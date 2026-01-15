---
icon: circle
---

# Points Surface

Create a delaunay triangulated surface for each input dataset.

**How It Works**

> AI-Generated, needs proofreading

* Computes a Delaunay triangulation for the surface of each input dataset to generate a topological structure.
* Applies projection settings specified in the Projection Details section to adjust how points are mapped onto the surface.
* Optionally attempts to repair any issues with the generated topology if Attempt Repair is enabled, and can handle degenerate cases based on the Degeneration settings configured under Repair Degenerate.
* Suppresses warnings related to problematic vertices if Quiet Bad Vertices Warning is set to true.

#### Configuration

<details>

<summary><strong>Projection Details</strong> <code>PCGExGeo2DProjectionDetails</code></summary>

Projection settings.

📦 See: Geo2DProjection configuration

⚡ PCG Overridable

</details>

<details>

<summary><strong>Attempt Repair</strong> <code>bool</code></summary>

Controls attempt repair.

</details>

<details>

<summary><strong>Repair Degenerate</strong> <code>GeometryScriptDegenerateTriangleOptions</code></summary>

Degeneration settings.

⚡ PCG Overridable

</details>

<details>

<summary><strong>Topology</strong> <code>PCGExTopologyDetails</code></summary>

Topology settings. Some settings will be ignored based on selected output mode.

📦 See: Topology configuration

⚡ PCG Overridable

</details>

<details>

<summary><strong>Quiet Bad Vertices Warning</strong> <code>bool</code></summary>

Controls quiet bad vertices warning.

</details>

***

Source: `Source\PCGExElementsTopology\Public\Elements\PCGExTopologyPointSurface.h`
