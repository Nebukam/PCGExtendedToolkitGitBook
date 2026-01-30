---
icon: route
description: 'In editor :: PCGEx | Pathfinding : Plot Edges'
---

# Pathfinding : Plot Edges

Extract a single path from edges clusters, going through every seed points in order.

## Overview

This node performs plot-based pathfinding on cluster data. Unlike standard pathfinding which finds optimal paths between discrete seed/goal pairs, Plot Edges chains multiple waypoints together into a single continuous path. The path visits each plot point in sequence, finding the shortest route between consecutive points through the cluster graph.

## Inputs

| Pin | Type | Required | Description |
|-----|------|----------|-------------|
| **Vtx** | Points | Yes | Cluster vertices (inherited from base) |
| **Edges** | Points | Yes | Cluster edges (inherited from base) |
| **Plots** | Points | Yes | Ordered waypoints to path through |
| **Heuristics** | Heuristics | Yes | Heuristic factories for path scoring |
| **Overrides : Search** | Params | No | Override search algorithm settings |
| **Match Rules** | Match Rules | No | Rules for matching plots to clusters (when Data Matching is enabled) |

## Outputs

| Pin | Type | Description |
|-----|------|-------------|
| **Paths** | Points | Output paths as point collections |
| **Unmatched** | Points | (Optional) Plots that could not be matched to clusters. Only available when Data Matching is enabled with split unmatched option. |

## Settings

### Heuristics

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

### Data Matching

<details>
<summary><strong>Data Matching</strong> <code>FPCGExMatchingDetails</code></summary>

Controls how plots are associated with clusters. When enabled, allows filtering which plots get associated to which clusters based on matching criteria.

**Mode** (`EPCGExMapMatchMode`):

| Option | Behavior |
|--------|----------|
| **Disabled** | No matching, plots can use any cluster |
| **All** | All match tests must pass |
| **Any** | Any single match test must pass |

**Cluster Match Mode** (`EPCGExClusterComponentTagMatchMode`): Which cluster component must match (Vtx, Edges, Any, Both, or Separate).

**Split Unmatched** (`bool`): Output unmatched data to a separate pin.

**Output Unmatched** (`bool`): If split is disabled, whether to still output unmatched data.

**Quiet Unmatched Warning** (`bool`): Suppress warning when no valid matches found.

**Limit Matches** (`bool`): Whether to limit the number of matches.

**Limit Input** (`EPCGExInputValueType`): Supports constant value or attribute input.

**Limit** (`int32`): Maximum number of matches per plot.

Default Mode: `Disabled`
Default Cluster Match Mode: `Vtx`

</details>

### Path Composition

<details>
<summary><strong>Add Seed to Path</strong> <code>bool</code></summary>

If enabled, adds the original seed (first plot point) at the beginning of the output path.

Default: `false`

⚡ PCG Overridable

</details>

<details>
<summary><strong>Add Goal to Path</strong> <code>bool</code></summary>

If enabled, adds the original goal (last plot point) at the end of the output path.

Default: `false`

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

Controls how the first plot point selects its starting node in the cluster.

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

Controls how subsequent plot points select their target nodes in the cluster. Same options as Seed Picking.

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

### Statistics

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
<summary><strong>Omit Complete Path on Failed Plot</strong> <code>bool</code></summary>

If enabled, the entire path is discarded if any segment between plot points fails to resolve.

Default: `false`

</details>

<details>
<summary><strong>Path Output Details</strong> <code>FPCGExPathOutputDetails</code></summary>

Filter output paths by point count.

- **Remove Small Paths**: Discard paths below minimum point count
- **Min Point Count**: Minimum threshold (default: 3)
- **Remove Large Paths**: Discard paths above maximum point count
- **Max Point Count**: Maximum threshold (default: 500)

⚡ PCG Overridable

</details>

### Warnings and Errors

<details>
<summary><strong>Quiet Invalid Plot Warning</strong> <code>bool</code></summary>

Suppress warning when a plot could not be resolved to valid paths.

Default: `false`

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

- [Pathfinding : Edges](./pathfinding-edges.md) - Standard seed-to-goal pathfinding
- [Pathfinding : Grow Paths](./pathfinding-grow-paths.md) - Grow paths from seeds
- [Heuristics](../../sub-nodes/heuristics/README.md) - Scoring functions for pathfinding

---

📦 **Module**: `PCGExElementsPathfinding` · 📄 [Source](https://github.com/Nebukam/PCGExtendedToolkit/blob/main/Source/PCGExElementsPathfinding/Public/Elements/PCGExPathfindingPlotEdges.h)
