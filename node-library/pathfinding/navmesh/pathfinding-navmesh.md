---
description: 'In editor :: PCGEx | Pathfinding : Navmesh'
icon: scrubber
---

# Pathfinding : Navmesh

Extract paths from navmesh.

**How It Works**

> AI-Generated, needs proofreading

* Extracts paths from a predefined navigation mesh (navmesh).
* Utilizes settings to control goal selection and path composition, including whether to add a seed point at the beginning of the path and whether to include the goal point.
* Ensures that the end location of the generated path is navigable if the "Require Navigable End Location" setting is enabled.
* Fuses sub points in the path based on a specified distance threshold defined by the "Fuse Distance" parameter.

#### Configuration

<details>

<summary><strong>Goal Picker</strong> <code>PCGExGoalPicker</code> ⚙️</summary>

Controls how goals are picked.

⚡ PCG Overridable

</details>

<details>

<summary><strong>Add Seed To Path</strong> <code>bool</code></summary>

Add seed point at the beginning of the path

</details>

<details>

<summary><strong>Add Goal To Path</strong> <code>bool</code></summary>

Add goal point at the beginning of the path

</details>

<details>

<summary><strong>Require Navigable End Location</strong> <code>bool</code></summary>

Whether the pathfinding requires a naviguable end location.

</details>

<details>

<summary><strong>Fuse Distance</strong> <code>double</code></summary>

Fuse sub points by distance.

</details>

**Advanced**

<details>

<summary><strong>Pathfinding Mode</strong> <code>PCGExPathfindingNavmeshMode</code></summary>

Pathfinding mode

</details>

<details>

<summary><strong>Nav Agent Properties</strong> <code>NavAgentProperties</code></summary>

Nav agent to be used by the nav system.

</details>

**Blending**

<details>

<summary><strong>Blending</strong> <code>PCGExSubPointsBlendInstancedFactory</code> ⚙️</summary>

Controls how path points blend from seed to goal.

⚡ PCG Overridable

</details>

**Tagging & Forwarding**

<details>

<summary><strong>Seed Attributes To Path Tags</strong> <code>PCGExAttributeToTagDetails</code></summary>

TBD

📦 See: AttributeToTag configuration

</details>

<details>

<summary><strong>Seed Forwarding</strong> <code>PCGExForwardDetails</code></summary>

Which Seed attributes to forward on paths.

📦 See: Forward configuration

</details>

<details>

<summary><strong>Goal Attributes To Path Tags</strong> <code>PCGExAttributeToTagDetails</code></summary>

TBD

📦 See: AttributeToTag configuration

</details>

<details>

<summary><strong>Goal Forwarding</strong> <code>PCGExForwardDetails</code></summary>

Which Goal attributes to forward on paths.

📦 See: Forward configuration

</details>

***

Source: `Source\PCGExElementsPathfindingNavmesh\Public\Elements\PCGExPathfindingNavmesh.h`
