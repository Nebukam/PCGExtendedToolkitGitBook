---
description: 'In editor :: PCGEx | Lloyd Relax 3D'
icon: circle
---

# Lloyd Relax 3D

Applies Lloyd relaxation to the input points.

**How It Works**

> AI-Generated, needs proofreading

* The Lloyd Relax 3D node applies Lloyd relaxation to the input points in three-dimensional space.
* It iterates over the input points for a specified number of iterations (an int32 value), adjusting their positions to achieve more uniform distribution.
* During each iteration, the algorithm computes new point locations based on the centroids of Voronoi cells associated with the current point configuration.
* The Influence Details setting allows customization of how much influence neighboring points have on the relaxation process for each point.

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

***

Source: `Source\PCGExElementsSpatial\Public\Elements\PCGExLloydRelax.h`
