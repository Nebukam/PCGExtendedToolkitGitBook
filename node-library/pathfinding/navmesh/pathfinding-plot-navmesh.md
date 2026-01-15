---
description: 'In editor :: PCGEx | Pathfinding : Plot Navmesh'
icon: scrubber
---

# Pathfinding : Plot Navmesh

Extract a single paths from navmesh, going through each seed points in order.

⚙️ **Behavior** — Instanced value blender.

**How It Works**

> AI-Generated, needs proofreading

* Extracts a single path from a navigation mesh by connecting seed points in the specified order.
* Optionally adds the initial seed point at the beginning of the generated path if "Add Seed To Path" is enabled.
* Optionally appends the goal point to the end of the path when "Add Goal To Path" setting is active.
* Inserts additional plot points within the path if "Add Plot Points To Path" option is selected.
* Creates a closed loop path if the "Closed Loop" boolean is set to true, connecting the last point back to the first.

#### Configuration

<details>

<summary><strong>Add Seed To Path</strong> <code>bool</code></summary>

Add seed point at the beginning of the path

⚡ PCG Overridable

</details>

<details>

<summary><strong>Add Goal To Path</strong> <code>bool</code></summary>

Add goal point at the end of the path

⚡ PCG Overridable

</details>

<details>

<summary><strong>Add Plot Points To Path</strong> <code>bool</code></summary>

Insert plot points inside the path

⚡ PCG Overridable

</details>

<details>

<summary><strong>Closed Loop</strong> <code>bool</code></summary>

Controls closed loop.

⚡ PCG Overridable

</details>

<details>

<summary><strong>Require Navigable End Location</strong> <code>bool</code></summary>

Whether the pathfinding requires a naviguable end location.

⚡ PCG Overridable

</details>

<details>

<summary><strong>Fuse Distance</strong> <code>double</code></summary>

Fuse sub points by distance.

⚡ PCG Overridable

</details>

<details>

<summary><strong>Blending</strong> <code>PCGExSubPointsBlendInstancedFactory</code> ⚙️</summary>

Controls how path points blend from seed to goal.

⚡ PCG Overridable

</details>

<details>

<summary><strong>Pathfinding Mode</strong> <code>PCGExPathfindingNavmeshMode</code></summary>

Pathfinding mode

</details>

<details>

<summary><strong>Nav Agent Properties</strong> <code>NavAgentProperties</code></summary>

Nav agent to be used by the nav system.

</details>

<details>

<summary><strong>Omit Complete Path On Failed Plot</strong> <code>bool</code></summary>

Controls omit complete path on failed plot.

⚡ PCG Overridable

</details>

***

Source: `Source\PCGExElementsPathfindingNavmesh\Public\Elements\PCGExPathfindingPlotNavmesh.h`
