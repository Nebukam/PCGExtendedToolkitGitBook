---
icon: diagram-project
description: 'Refine : DFS (Tarjan)'
---

# Refine : DFS (Tarjan)

Find **bridge edges** (articulation edges) using Tarjan's DFS algorithm - edges whose removal would disconnect the graph.

## Overview

A bridge (or cut edge) is an edge that, if removed, would increase the number of connected components in the graph. Tarjan's algorithm efficiently finds all bridges using depth-first search with discovery and low-link values.

## Key Behavior

```
Graph with bridges:          After DFS (Tarjan):

●───●═══●───●               ●───●   ●───●
    │   │                       │   │
    ●   ●                       ●   ●

═══ = bridge edge            Only bridges kept
─── = non-bridge edge        (critical connections)
```

Bridges are "critical" edges - they're the only path between certain parts of the graph.

## How It Works

1. **DFS traversal**: Visit all vertices in depth-first order
2. **Track discovery time**: Record when each vertex is first visited
3. **Track low-link**: Find lowest discovery time reachable from subtree
4. **Identify bridges**: Edge is a bridge if low-link of child > discovery of parent
5. **Mark edges**: Keep bridges, remove non-bridges (or inverse)

## Settings

<details>
<summary><strong>Invert</strong> <code>bool</code></summary>

Invert the refinement result.

| Invert | Bridge edges | Non-bridge edges |
|--------|--------------|------------------|
| `false` | Removed | Kept |
| `true` | Kept | Removed |

Default: `false`

⚡ PCG Overridable

</details>

## Use Cases

**Find critical connections** (Invert = true):
- Keeps only the edges that are essential for connectivity
- Useful for identifying chokepoints in networks

**Remove bottlenecks** (Invert = false):
- Removes bridges, keeping only edges in cycles
- Useful for finding redundant paths

## Algorithm Details

Tarjan's algorithm runs in O(V + E) time where V is vertices and E is edges. It works by:

1. Performing DFS from each unvisited vertex
2. Maintaining `disc[v]` (discovery time) and `low[v]` (lowest reachable ancestor)
3. For edge (u, v), if `low[v] > disc[u]`, then (u, v) is a bridge

## Examples

**Extract network backbone**:
- **Invert**: `true`
- Result: Only the minimum edges needed to keep graph connected

**Find redundant edges**:
- **Invert**: `false`
- Result: Only edges that have alternative paths (in cycles)

---

📦 **Parent**: [Refine Edges](./README.md) · 📄 [Source](https://github.com/Nebukam/PCGExtendedToolkit/blob/main/Source/PCGExElementsClusters/Public/Elements/Refining/PCGExEdgeRefineTrajanDFS.h)
