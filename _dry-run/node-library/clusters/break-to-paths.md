---
icon: diagram-project
description: 'In editor :: PCGEx | Cluster : Break to Paths'
---

# Cluster : Break to Paths

Create **individual paths from continuous edge chains** in a cluster. Extracts linear sequences of edges as separate path point collections.

## Overview

Break to Paths identifies continuous chains of edges within a cluster and outputs each chain as a separate path. A chain is a sequence of edges where vertices have exactly two connections (except at endpoints). This is useful for extracting roads, rivers, or other linear features from a graph structure.

## Key Behavior

```
Cluster Input:              Path Outputs:
    ●───●───●                  Path 1: ●───●───●
   /│       │\
  ● │       │ ●     →         Path 2: ●───●───●
   \│       │/
    ●───●───●                  Path 3: ●
                                       │
                                       ●
                               (vertical chain)
```

**Chain Detection**: Vertices with exactly 2 edges form the interior of chains. Vertices with 1 edge (leaves) or 3+ edges (junctions) form chain endpoints.

## How It Works

1. **Find Chains**: Identify continuous edge sequences
2. **Filter by Conditions**: Apply break condition filters
3. **Handle Leaves**: Include, exclude, or isolate leaf edges
4. **Order Points**: Apply direction settings for consistent ordering
5. **Apply Winding**: Optionally enforce clockwise/counter-clockwise order
6. **Output**: Generate separate path point collections

## Inputs

| Pin | Type | Description |
|-----|------|-------------|
| **Vtx** | Points | Cluster vertices |
| **Edges** | Points | Cluster edges |
| **Break Conditions** | Cluster Node Filters | (Optional) Filters for break points |
| **Sorting Rules** | Sorting Rules | (Optional) For direction settings |

## Outputs

| Pin | Type | Description |
|-----|------|-------------|
| **Paths** | Points | Extracted path point collections |

## Settings

### Settings

<details>
<summary><strong>Leaves Handling</strong> <code>EPCGExBreakClusterLeavesHandling</code></summary>

How to handle leaf nodes (vertices with only one edge).

| Option | Behavior |
|--------|----------|
| **Include Leaves** | Include leaf edges in chains |
| **Exclude Leaves** | Exclude leaf edges (only interior chains) |
| **Only Leaves** | Only process leaf edges |

Default: `Include Leaves`

⚡ PCG Overridable

</details>

<details>
<summary><strong>Operate On</strong> <code>EPCGExBreakClusterOperationTarget</code></summary>

What elements to extract as paths.

| Option | Behavior |
|--------|----------|
| **Paths** | Edge chains with no crossings (vertices with 2 neighbors) |
| **Edges** | Each edge individually (expensive) |

Default: `Paths`

⚡ PCG Overridable

</details>

<details>
<summary><strong>Direction Settings</strong> <code>FPCGExEdgeDirectionSettings</code></summary>

Controls point ordering within output paths. Uses sorting rules if configured.

⚡ PCG Overridable

</details>

<details>
<summary><strong>Winding</strong> <code>EPCGExWindingMutation</code></summary>

Enforce winding order for output paths.

| Option | Behavior |
|--------|----------|
| **Unchanged** | Keep original point order |
| **Clockwise** | Enforce clockwise winding |
| **Counter Clockwise** | Enforce counter-clockwise winding |

Default: `Counter Clockwise`

⚡ PCG Overridable

</details>

<details>
<summary><strong>Wind Only Closed Loops</strong> <code>bool</code></summary>

Only apply winding to paths that form closed loops. Open paths keep their directed order.

Default: `true`

⚡ PCG Overridable

</details>

<details>
<summary><strong>Projection Details</strong> <code>FPCGExGeo2DProjectionDetails</code></summary>

Projection settings for winding calculation (computed on 2D plane).

⚡ PCG Overridable
📋 Visible when: `Winding != Unchanged`

</details>

### Path Filtering

<details>
<summary><strong>Min Point Count</strong> <code>int32</code></summary>

Do not output paths with fewer points than this value.

Default: `2`

⚡ PCG Overridable

</details>

<details>
<summary><strong>Omit Above Point Count</strong> <code>bool</code></summary>

Enable maximum point count filtering.

Default: `false`

⚡ PCG Overridable

</details>

<details>
<summary><strong>Max Point Count</strong> <code>int32</code></summary>

Do not output paths with more points than this value.

Default: `500`

⚡ PCG Overridable
📋 Visible when: `Omit Above Point Count = true`

</details>

## Examples

**Extract all edge chains**:
- Default settings
- Result: One path per continuous chain in the cluster

**Extract closed loops only**:
- **Leaves Handling**: `Exclude Leaves`
- **Min Point Count**: `3`
- Result: Only closed polygon boundaries

**Individual edges as paths**:
- **Operate On**: `Edges`
- Result: Each edge becomes a 2-point path (expensive)

## Related

### Cluster Operations
- [Path to Clusters](./path-to-clusters.md) - Reverse operation
- [Refine Edges](./refine-edges.md) - Prepare cluster before breaking

### Path Operations
- Path manipulation nodes for further path processing

---

📦 **Module**: `PCGExElementsClusters` · 📄 [Source](https://github.com/Nebukam/PCGExtendedToolkit/blob/main/Source/PCGExElementsClusters/Public/Elements/Paths/PCGExBreakClustersToPaths.h)
