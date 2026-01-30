---
icon: magnifying-glass
description: 'Search Algorithm :: A*'
---

# A* (A-Star)

Heuristic-guided pathfinding that returns early with minimal node traversal.

## Overview

A* is the recommended default search algorithm for most pathfinding scenarios. It uses heuristics to guide the search toward the goal, visiting fewer nodes than Dijkstra while still finding optimal paths when heuristics are admissible (never overestimate).

## Algorithm Details

A* combines the actual cost from start (g-score) with an estimated cost to goal (h-score) to prioritize which nodes to explore:

```
f(n) = g(n) + h(n)
```

Where:
- `g(n)` = actual cost from start to node n
- `h(n)` = heuristic estimate from node n to goal
- `f(n)` = total estimated cost through node n

Nodes with lowest f-score are explored first.

## Settings

<details>
<summary><strong>Early Exit</strong> <code>bool</code></summary>

Exit the search early once a valid path is found. When enabled, returns the first valid path discovered. When disabled, continues searching to potentially find better paths.

Default: `true`

⚡ PCG Overridable

</details>

## Performance

- **Time Complexity**: O(E log V) where E = edges, V = vertices
- **Space Complexity**: O(V) for the open/closed sets
- **Best Case**: Heuristic guides directly to goal
- **Worst Case**: Degenerates to Dijkstra when heuristic is 0

## When to Use

**Recommended for:**
- General pathfinding on cluster graphs
- Distance-based navigation
- Most common pathfinding scenarios

**Avoid when:**
- Heuristics may produce negative values (use Bellman-Ford)
- You need to explore all paths (disable Early Exit)
- Very deep searches on large graphs (consider Bidirectional)

## Interaction with Heuristics

A*'s effectiveness depends heavily on the quality of heuristics provided:

| Heuristic Quality | Result |
|-------------------|--------|
| Admissible (never overestimates) | Guaranteed optimal path |
| Consistent (monotonic) | No node revisiting needed |
| Overestimates | May find suboptimal paths |
| Zero heuristic | Behaves like Dijkstra |

See [Heuristics](../heuristics/README.md) for available heuristic types.

---

📦 **Module**: `PCGExElementsPathfinding` · 📄 [Source](https://github.com/Nebukam/PCGExtendedToolkit/blob/main/Source/PCGExElementsPathfinding/Public/Search/PCGExSearchAStar.h)
