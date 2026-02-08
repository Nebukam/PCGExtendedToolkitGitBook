---
icon: route
description: 'Pathfinding : Plot Navmesh - Creates paths visiting waypoints in sequence through navmesh'
---

# Pathfinding : Plot Navmesh

Extract a single path from navmesh, going through each seed point in order.

## Overview

This node generates a continuous path that visits a sequence of plot (waypoint) points in order, finding optimal routes between consecutive waypoints using Unreal Engine's navigation mesh. Unlike regular navmesh pathfinding which goes from one seed to one goal, this creates a single path connecting multiple waypoints in sequence through the navmesh.

## How It Works

1. **Order Waypoints**: Processes plot points in their input order.
2. **Query Navmesh**: Finds paths between consecutive waypoints.
3. **Concatenate Segments**: Joins all path segments into a single continuous path.
4. **Optionally Close Loop**: Can connect the last point back to the first.

#### Usage Notes

- **Ordered Sequence**: Plot points are visited in their input order.
- **Closed Loop**: Enable to path from the last waypoint back to the first.
- **Failed Segments**: If any segment fails, optionally omit the entire path.
- **Plot Point Insertion**: Original plot points can be inserted into the output path.

## Behavior

#### Plot-Based Navmesh Path:
```
Level with plot points (A, B, C, D) and obstacles:
    ┌─────────────────────────────┐
    │  A        ████████       B  │
    │           ████████          │
    │  ▓▓▓▓▓▓▓▓████████▓▓▓▓▓▓▓▓  │
    │           ████████          │
    │  D        ████████       C  │
    └─────────────────────────────┘

Resulting Path (visiting in order):
    A → ... → B → ... → C → ... → D

Closed Loop: D → ... → A (back to start)
```

## Inputs

| Pin | Type | Description |
|-----|------|-------------|
| **Plots** | Points | Ordered waypoint collections to visit |

## Settings

### Path Composition

<details>
<summary><strong>Add Seed to Path</strong> <code>bool</code></summary>

When enabled, includes the first plot point at the beginning of the path.

Default: `true`

⚡ PCG Overridable

</details>

<details>
<summary><strong>Add Goal to Path</strong> <code>bool</code></summary>

When enabled, includes the last plot point at the end of the path.

Default: `true`

⚡ PCG Overridable

</details>

<details>
<summary><strong>Add Plot Points to Path</strong> <code>bool</code></summary>

When enabled, inserts all intermediate plot points into the path at their corresponding positions.

Default: `false`

⚡ PCG Overridable

</details>

<details>
<summary><strong>Closed Loop</strong> <code>bool</code></summary>

When enabled, paths from the last waypoint back to the first, creating a closed circuit.

Default: `false`

⚡ PCG Overridable

</details>

### Navigation

<details>
<summary><strong>Require Navigable End Location</strong> <code>bool</code></summary>

When enabled, pathfinding fails if waypoint locations are not on navigable surfaces.

Default: `true`

⚡ PCG Overridable

</details>

<details>
<summary><strong>Fuse Distance</strong> <code>double</code></summary>

Minimum distance between consecutive path points. Points closer than this are merged together.

Default: `10`

⚡ PCG Overridable

</details>

### Blending

<details>
<summary><strong>Blending</strong> <code>UPCGExSubPointsBlendInstancedFactory</code></summary>

Controls how attributes are interpolated along path segments.

Available: Inherit Start, Inherit End, None

⚡ PCG Overridable

</details>

### Advanced

<details>
<summary><strong>Pathfinding Mode</strong> <code>EPCGExPathfindingNavmeshMode</code></summary>

The navmesh query mode to use.

| Option | Description |
|--------|-------------|
| **Regular** | Standard navmesh pathfinding |
| **Hierarchical** | Uses hierarchical pathfinding for large distances |

Default: `Regular`

</details>

<details>
<summary><strong>Nav Agent Properties</strong> <code>FNavAgentProperties</code></summary>

Properties of the navigation agent used for pathfinding. Affects which areas of the navmesh are traversable.

</details>

<details>
<summary><strong>Omit Complete Path on Failed Plot</strong> <code>bool</code></summary>

When enabled, if any segment between waypoints fails, the entire path is discarded.

Default: `false`

⚡ PCG Overridable

</details>

## Outputs

| Pin | Type | Description |
|-----|------|-------------|
| **Paths** | Points | Continuous paths visiting all waypoints |

---

📦 **Module**: `PCGExElementsPathfindingNavmesh` · 📄 [Source](https://github.com/Nebukam/PCGExtendedToolkit/blob/main/Source/PCGExElementsPathfindingNavmesh/Public/Elements/PCGExPathfindingPlotNavmesh.h)

<!-- VERIFICATION REPORT
Node-Specific Properties: 10 documented
  - bAddSeedToPath, bAddGoalToPath, bAddPlotPointsToPath, bClosedLoop
  - bRequireNavigableEndLocation, FuseDistance
  - Blending (instanced factory)
  - PathfindingMode, NavAgentProperties
  - bOmitCompletePathOnFailedPlot
Inherited Properties: From UPCGExPointsProcessorSettings (not documented separately)
Inputs: Plots (Points)
Outputs: Paths (Points)
Nested Types: EPCGExPathfindingNavmeshMode
-->
