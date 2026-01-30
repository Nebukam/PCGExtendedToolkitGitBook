---
icon: magnifying-glass
description: 'Search Algorithm :: Bellman-Ford'
---

# Bellman-Ford

Robust pathfinding that handles negative edge weights and detects negative cycles.

## Overview

The Bellman-Ford algorithm can handle graphs where edge weights (from heuristics) may be negative. It also detects negative weight cycles, which would cause infinite loops in other algorithms. While slower than A* or Dijkstra, it's essential when heuristic scores can go negative.

## Algorithm Details

Bellman-Ford relaxes all edges repeatedly:

```
for i = 1 to |V| - 1:
    for each edge (u, v):
        if g(u) + weight(u,v) < g(v):
            g(v) = g(u) + weight(u,v)
```

After V-1 iterations, if any edge can still be relaxed, a negative cycle exists.

## Settings

<details>
<summary><strong>Early Exit</strong> <code>bool</code></summary>

Exit the search early once a valid path is found.

Default: `true`

⚡ PCG Overridable

</details>

<details>
<summary><strong>Detect Negative Cycles</strong> <code>bool</code></summary>

If enabled, the search will fail if a negative weight cycle is detected. A negative cycle means the path cost can be reduced infinitely by traversing the cycle.

Default: `true`

⚡ PCG Overridable

</details>

## Performance

- **Time Complexity**: O(V × E) where V = vertices, E = edges
- **Space Complexity**: O(V) for distance tracking
- **Slower than**: A* and Dijkstra
- **More robust**: Handles cases others cannot

## When to Use

**Recommended for:**
- Heuristics that can produce negative scores
- When you need negative cycle detection
- Robustness over performance
- Complex scoring systems with penalties

**Avoid when:**
- All edge weights are non-negative (use A* or Dijkstra)
- Performance is critical
- Graph is very large

## Negative Weights and Cycles

### Negative Weights
Some heuristics may produce negative scores (e.g., "bonus" for preferred paths). A* and Dijkstra cannot handle these correctly, but Bellman-Ford can.

### Negative Cycles
A negative cycle occurs when a loop's total weight is negative. Traversing it repeatedly would decrease path cost infinitely. Bellman-Ford detects this and can either:
- **Fail** the search (with `Detect Negative Cycles` enabled)
- **Ignore** the cycle and return a path anyway

## Example Use Case

Consider a heuristic that gives a -10 bonus for paths through "preferred" nodes but +5 penalty for "avoided" nodes:

```
A --[+5]--> B --[-10]--> C --[+2]--> Goal
```

Only Bellman-Ford can correctly navigate such scoring systems.

---

📦 **Module**: `PCGExElementsPathfinding` · 📄 [Source](https://github.com/Nebukam/PCGExtendedToolkit/blob/main/Source/PCGExElementsPathfinding/Public/Search/PCGExSearchBellmanFord.h)
