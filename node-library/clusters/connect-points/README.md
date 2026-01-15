---
icon: scrubber
---

# Connect Points

Connect points according to a set of probes

**How It Works**

> AI-Generated, needs proofreading

* The Cluster : Connect Points node connects points based on a set of probes provided as input.
* It uses the "Prevent Coincidence" setting to determine whether to avoid connecting points that are closer to each other than the specified "Coincidence Tolerance" value.
* If "Project Points" is enabled, it applies the projection details defined in "PCGExGeo2DProjectionDetails" to adjust point positions before connecting them.
* The node outputs the connected graph and edges according to the settings configured in "Cluster Output Settings".

#### Configuration

<details>

<summary><strong>Prevent Coincidence</strong> <code>bool</code></summary>

Controls prevent coincidence.

⚡ PCG Overridable

</details>

<details>

<summary><strong>Coincidence Tolerance</strong> <code>double</code></summary>

Controls coincidence tolerance.

⚡ PCG Overridable

</details>

<details>

<summary><strong>Project Points</strong> <code>bool</code></summary>

Controls project points.

⚡ PCG Overridable

</details>

<details>

<summary><strong>Project Points</strong> <code>PCGExGeo2DProjectionDetails</code></summary>

Controls project points.

📦 See: Geo2DProjection configuration

⚡ PCG Overridable

</details>

<details>

<summary><strong>Cluster Output Settings</strong> <code>PCGExGraphBuilderDetails</code></summary>

Graph & Edges output properties

📦 See: GraphBuilder configuration

⚡ PCG Overridable

</details>

***

Source: `Source\PCGExElementsProbing\Public\Elements\PCGExConnectPoints.h`
