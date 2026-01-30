---
icon: route
description: 'In editor :: PCGEx | Pathfinding : Navmesh'
---

# Pathfinding : Navmesh

Extract paths from navmesh.

## Overview

This node performs pathfinding using Unreal Engine's navigation mesh (navmesh) system. Unlike cluster-based pathfinding that operates on graph structures, this node uses the level's built-in navmesh to find walkable paths between seed and goal points. This is ideal for AI-friendly paths that respect level geometry and navigation volumes.

## Inputs

| Pin | Type | Required | Description |
|-----|------|----------|-------------|
| **Seeds** | Points | Yes | Starting points for pathfinding |
| **Goals** | Points | Yes | Destination points for pathfinding |

## Outputs

| Pin | Type | Description |
|-----|------|-------------|
| **Paths** | Points | Output paths as point collections |

## Settings

### Goal Picker

<details>
<summary><strong>Goal Picker</strong> <code>UPCGExGoalPicker</code> (Instanced)</summary>

Controls how goals are selected for each seed point. This is an instanced object with its own settings panel.

Available types:
- **Default** - Uses seed point index to select matching goal index
- **All** - Creates paths from each seed to all goals
- **Random** - Randomly selects goal(s) for each seed
- **Index Attribute** - Reads goal index from seed point attribute(s)

⚡ PCG Overridable

</details>

### Path Composition

<details>
<summary><strong>Add Seed to Path</strong> <code>bool</code></summary>

If enabled, adds the original seed point at the beginning of the output path.

Default: `true`

</details>

<details>
<summary><strong>Add Goal to Path</strong> <code>bool</code></summary>

If enabled, adds the original goal point at the end of the output path.

Default: `true`

</details>

<details>
<summary><strong>Require Navigable End Location</strong> <code>bool</code></summary>

Whether the pathfinding requires a navigable end location. If enabled, paths that cannot reach a navigable goal will fail.

Default: `true`

</details>

<details>
<summary><strong>Fuse Distance</strong> <code>double</code></summary>

Fuse sub-points that are closer than this distance to reduce path complexity.

Default: `10`
Min: `0.001`

</details>

### Blending

<details>
<summary><strong>Blending</strong> <code>UPCGExSubPointsBlendInstancedFactory</code> (Instanced)</summary>

Controls how path points blend attributes from seed to goal. This is an instanced object with its own settings panel.

⚡ PCG Overridable

</details>

### Tagging & Forwarding

<details>
<summary><strong>Seed Attributes to Path Tags</strong> <code>FPCGExAttributeToTagDetails</code></summary>

Copy seed point attributes as tags on output paths.

- **Add Index Tag**: Add seed point index as a tag
- **Index Tag Prefix**: Prefix for the index tag
- **Prefix with Attribute Name**: Include attribute name in tag
- **Attributes**: List of attributes to convert to tags
- **Comma Separated Attribute Selectors**: Quick attribute list input

</details>

<details>
<summary><strong>Seed Forwarding</strong> <code>FPCGExForwardDetails</code></summary>

Which seed attributes to forward onto output paths.

- **Enabled**: Enable/disable forwarding
- **Preserve Attributes Default Value**: Keep original default values
- **Filter Mode**: All/Exclude/Include
- **Matches**: Attribute name patterns to match

</details>

<details>
<summary><strong>Goal Attributes to Path Tags</strong> <code>FPCGExAttributeToTagDetails</code></summary>

Copy goal point attributes as tags on output paths. Same options as Seed Attributes to Path Tags.

</details>

<details>
<summary><strong>Goal Forwarding</strong> <code>FPCGExForwardDetails</code></summary>

Which goal attributes to forward onto output paths. Same options as Seed Forwarding.

</details>

### Advanced

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

## Related

- [Pathfinding : Plot Navmesh](./pathfinding-plot-navmesh.md) - Plot paths through waypoints on navmesh
- [Pathfinding : Edges](./pathfinding-edges.md) - Cluster-based pathfinding

---

📦 **Module**: `PCGExElementsPathfindingNavmesh` · 📄 [Source](https://github.com/Nebukam/PCGExtendedToolkit/blob/main/Source/PCGExElementsPathfindingNavmesh/Public/Elements/PCGExPathfindingNavmesh.h)
