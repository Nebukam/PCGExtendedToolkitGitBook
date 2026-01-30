---
icon: route
description: 'In editor :: PCGEx | Pathfinding : Plot Navmesh'
---

# Pathfinding : Plot Navmesh

Extract a single path from navmesh, going through each seed points in order.

## Overview

This node performs plot-based pathfinding using Unreal Engine's navigation mesh. Unlike standard navmesh pathfinding which finds paths between discrete seed/goal pairs, Plot Navmesh chains multiple waypoints together into a single continuous path. The path visits each plot point in sequence, finding the navmesh route between consecutive points.

## Inputs

| Pin | Type | Required | Description |
|-----|------|----------|-------------|
| **Plots** | Points | Yes | Ordered waypoints to path through |

## Outputs

| Pin | Type | Description |
|-----|------|-------------|
| **Paths** | Points | Output paths as point collections |

## Settings

### Path Composition

<details>
<summary><strong>Add Seed to Path</strong> <code>bool</code></summary>

If enabled, adds the original seed (first plot point) at the beginning of the output path.

Default: `true`

⚡ PCG Overridable

</details>

<details>
<summary><strong>Add Goal to Path</strong> <code>bool</code></summary>

If enabled, adds the original goal (last plot point) at the end of the output path.

Default: `true`

⚡ PCG Overridable

</details>

<details>
<summary><strong>Add Plot Points to Path</strong> <code>bool</code></summary>

If enabled, inserts the intermediate plot points into the output path at their corresponding positions.

Default: `false`

⚡ PCG Overridable

</details>

<details>
<summary><strong>Closed Loop</strong> <code>bool</code></summary>

If enabled, creates a closed loop by connecting the last plot point back to the first.

Default: `false`

⚡ PCG Overridable

</details>

<details>
<summary><strong>Require Navigable End Location</strong> <code>bool</code></summary>

Whether the pathfinding requires a navigable end location.

Default: `true`

⚡ PCG Overridable

</details>

<details>
<summary><strong>Fuse Distance</strong> <code>double</code></summary>

Fuse sub-points that are closer than this distance to reduce path complexity.

Default: `10`
Min: `0.001`

⚡ PCG Overridable

</details>

### Blending

<details>
<summary><strong>Blending</strong> <code>UPCGExSubPointsBlendInstancedFactory</code> (Instanced)</summary>

Controls how path points blend attributes from seed to goal. This is an instanced object with its own settings panel.

⚡ PCG Overridable

</details>

### Navigation

<details>
<summary><strong>Pathfinding Mode</strong> <code>EPCGExPathfindingNavmeshMode</code></summary>

Navmesh pathfinding algorithm mode.

| Option | Behavior |
|--------|----------|
| **Regular** | Regular pathfinding |
| **Hierarchical** | Cell-based pathfinding |

Default: `Regular`

</details>

<details>
<summary><strong>Nav Agent Properties</strong> <code>FNavAgentProperties</code></summary>

Navigation agent properties used by the nav system. This includes agent radius, height, and other navigation-specific settings.

</details>

### Error Handling

<details>
<summary><strong>Omit Complete Path on Failed Plot</strong> <code>bool</code></summary>

If enabled, the entire path is discarded if any segment between plot points fails to resolve.

Default: `false`

⚡ PCG Overridable

</details>

## Related

- [Pathfinding : Navmesh](./pathfinding-navmesh.md) - Standard seed-to-goal navmesh pathfinding
- [Pathfinding : Plot Edges](./pathfinding-plot-edges.md) - Plot paths through cluster graphs

---

📦 **Module**: `PCGExElementsPathfindingNavmesh` · 📄 [Source](https://github.com/Nebukam/PCGExtendedToolkit/blob/main/Source/PCGExElementsPathfindingNavmesh/Public/Elements/PCGExPathfindingPlotNavmesh.h)
