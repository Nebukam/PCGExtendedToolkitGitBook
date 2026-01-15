---
description: 'In editor :: PCGEx | Lloyd Relax 2D'
icon: circle
---

# Lloyd Relax 2D

Applies Lloyd relaxation to the input points.

**How It Works**

> AI-Generated, needs proofreading

* The Lloyd Relax 2D node applies Lloyd relaxation to the input points, redistributing them to achieve more uniform spacing.
* Iterations: int32 specifies the number of times the relaxation process is applied to the set of points.
* Influence Settings and Projection settings are parameters that can modify how the relaxation affects the distribution of points, though specific details on their impact are not provided.

#### Configuration

<details>

<summary><strong>Iterations</strong> <code>int32</code></summary>

Controls iterations.

⚡ PCG Overridable

</details>

<details>

<summary><strong>Influence Details</strong> <code>PCGExInfluenceDetails</code></summary>

Influence Settings

📦 See: Influence configuration

⚡ PCG Overridable

</details>

<details>

<summary><strong>Projection Details</strong> <code>PCGExGeo2DProjectionDetails</code></summary>

Projection settings.

📦 See: Geo2DProjection configuration

⚡ PCG Overridable

</details>

***

Source: `Source\PCGExElementsSpatial\Public\Elements\PCGExLloydRelax2D.h`
