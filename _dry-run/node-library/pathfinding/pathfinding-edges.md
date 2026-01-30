---
icon: route
description: 'In editor :: PCGEx | Pathfinding : Edges'
---

# Pathfinding : Edges

Finds paths between seed and goal points through cluster graphs using configurable search algorithms and heuristics.

## Overview

This node performs graph-based pathfinding on cluster data. For each seed point, it finds a path to one or more goal points by traversing the cluster's edges. The search behavior is controlled by pluggable search algorithms (A\*, Dijkstra, etc.) and heuristics that score traversal costs.

## Inputs

| Pin | Type | Required | Description |
|-----|------|----------|-------------|
| **Vtx** | Points | Yes | Cluster vertices (inherited from base) |
| **Edges** | Points | Yes | Cluster edges (inherited from base) |
| **Seeds** | Points | Yes | Starting points for pathfinding |
| **Goals** | Points | Yes | Destination points for pathfinding |
| **Heuristics** | Heuristics | Yes | Heuristic factories for path scoring |
| **Overrides : Goal Picker** | Params | No | Override goal picker settings |
| **Overrides : Search** | Params | No | Override search algorithm settings |

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
- **Default** - Uses seed point index to select matching goal index (seed 0 → goal 0, etc.)
- **All** - Creates paths from each seed to all goals
- **Random** - Randomly selects goal(s) for each seed
- **Index Attribute** - Reads goal index from seed point attribute(s)

**Index Safety** (on all pickers):

| Option | Behavior |
|--------|----------|
| **Ignore** | Skip if index is out of bounds |
| **Clamp** | Clamp to valid range |
| **Tile** | Wrap around (modulo) |

</details>

### Path Composition

<details>
<summary><strong>Add Seed to Path</strong> <code>bool</code></summary>

If enabled, adds the original seed point at the beginning of the output path.

Default: `false`

⚡ PCG Overridable

</details>

<details>
<summary><strong>Add Goal to Path</strong> <code>bool</code></summary>

If enabled, adds the original goal point at the end of the output path.

Default: `false`

⚡ PCG Overridable

</details>

<details>
<summary><strong>Path Composition</strong> <code>EPCGExPathComposition</code></summary>

What the output paths are made of.

| Option | Behavior |
|--------|----------|
| **Vtx** | Path contains vertex points |
| **Edge** | Path contains edge points |

Default: `Vtx`

⚡ PCG Overridable

</details>

### Node Picking

<details>
<summary><strong>Seed Picking</strong> <code>FPCGExNodeSelectionDetails</code></summary>

Controls how seed points select their starting node in the cluster.

**Picking Method** (`EPCGExClusterClosestSearchMode`):

| Option | Behavior |
|--------|----------|
| **Closest vtx** | Find nearest vertex by position |
| **Closest edge** | Find nearest edge, then use closest endpoint |

**Max Distance** (`double`): Maximum distance to search. Use ≤ 0 to ignore distance check.

Default Picking Method: `Closest edge`
Default Max Distance: `-1` (unlimited)

⚡ PCG Overridable

</details>

<details>
<summary><strong>Goal Picking</strong> <code>FPCGExNodeSelectionDetails</code></summary>

Controls how goal points select their target node in the cluster. Same options as Seed Picking.

Default Picking Method: `Closest edge`
Default Max Distance: `-1` (unlimited)

⚡ PCG Overridable

</details>

### Search Algorithm

<details>
<summary><strong>Search Algorithm</strong> <code>UPCGExSearchInstancedFactory</code> (Instanced)</summary>

The pathfinding algorithm to use. This is an instanced object with its own settings panel.

Available types:
- **A\*** - A-star algorithm (default, best for most cases)
- **Dijkstra** - Dijkstra's algorithm
- **Bellman-Ford** - Bellman-Ford algorithm (handles negative weights)
- **Bidirectional** - Searches from both ends simultaneously

**Early Exit** (`bool`): Exit search once a valid path is found. Disabling explores all possible paths.

Default: A\* with Early Exit enabled

</details>

<details>
<summary><strong>Heuristic Score Mode</strong> <code>EPCGExHeuristicScoreMode</code></summary>

How to combine scores from multiple heuristics.

| Option | Behavior |
|--------|----------|
| **Weighted Average** | Average weighted by each heuristic's weight |
| **Sum** | Add all scores together |
| **Min** | Use lowest score |
| **Max** | Use highest score |

Default: `Weighted Average`

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

### Statistics (Advanced)

<details>
<summary><strong>Statistics</strong> <code>FPCGExPathStatistics</code></summary>

Output various pathfinding statistics to attributes.

- **Write Point Use Count**: Write how many paths use each vertex
- **Point Use Count Attribute Name**: Attribute name for point use count (default: `PointUseCount`)
- **Write Edge Use Count**: Write how many paths use each edge
- **Edge Use Count Attribute Name**: Attribute name for edge use count (default: `EdgeUseCount`)

⚡ PCG Overridable

</details>

### Path Output Settings

<details>
<summary><strong>Path Output Details</strong> <code>FPCGExPathOutputDetails</code></summary>

Filter output paths by point count.

- **Remove Small Paths**: Discard paths below minimum point count
- **Min Point Count**: Minimum threshold (default: 3)
- **Remove Large Paths**: Discard paths above maximum point count
- **Max Point Count**: Maximum threshold (default: 500)

⚡ PCG Overridable

</details>

### Performance (Advanced)

<details>
<summary><strong>Use Octree Search</strong> <code>bool</code></summary>

Search for closest node using an octree. Depending on your dataset, this may be faster or slower.

Default: `false`

</details>

<details>
<summary><strong>Greedy Queries</strong> <code>bool</code></summary>

If enabled, allocates separate memory for each query allowing parallel execution. If disabled, shares memory between queries (slower but memory-conservative). Using global feedback forces sequential execution regardless.

Default: `true`

</details>

## Related

- [Pathfinding : Plot Edges](./pathfinding-plot-edges.md) - Plot paths through waypoints
- [Heuristics](../../sub-nodes/heuristics/README.md) - Scoring functions for pathfinding

---

📦 **Module**: `PCGExElementsPathfinding` · 📄 [Source](https://github.com/Nebukam/PCGExtendedToolkit/blob/main/Source/PCGExElementsPathfinding/Public/Elements/PCGExPathfindingEdges.h)
