---
icon: magnifying-glass
description: 'Search Algorithm :: Dijkstra'
---

# Dijkstra

Classic shortest-path algorithm that's more respectful of modifiers and weights.

## Overview

Dijkstra's algorithm finds the shortest path by exploring nodes in order of their distance from the start. Unlike A*, it doesn't use heuristics to guide the search, making it slower but more predictable. It guarantees finding the optimal path based purely on edge weights.

## Algorithm Details

Dijkstra expands nodes based solely on the actual cost from the start:

```
priority(n) = g(n)
```

Where:
- `g(n)` = actual accumulated cost from start to node n

Nodes with lowest g-score are explored first, radiating outward from the start.

## Settings

<details>
<summary><strong>Early Exit</strong> <code>bool</code></summary>

Exit the search early once a valid path is found. When enabled, stops as soon as the goal is reached. When disabled, continues exploring the entire graph.

Default: `true`

⚡ PCG Overridable

</details>

## Performance

- **Time Complexity**: O(E log V) where E = edges, V = vertices
- **Space Complexity**: O(V) for the priority queue
- **Guaranteed**: Always finds the optimal path (with non-negative weights)

## When to Use

**Recommended for:**
- When heuristics might mislead the search
- When edge weights vary significantly
- When you need guaranteed shortest paths
- Complex cost functions where heuristics are unreliable

**Avoid when:**
- Performance is critical (A* is usually faster)
- Edge weights can be negative (use Bellman-Ford)
- You have good heuristics available

## Comparison with A*

| Aspect | Dijkstra | A* |
|--------|----------|-----|
| Uses heuristics | No | Yes |
| Nodes explored | More | Fewer |
| Path quality | Always optimal | Optimal with admissible heuristic |
| Speed | Slower | Faster |
| Weight sensitivity | Higher | Lower |

## Interaction with Heuristics

While Dijkstra doesn't use heuristics for pathfinding, the heuristics connected to the node still affect edge weights during traversal. Dijkstra respects these weights more faithfully than A*, which may shortcut based on heuristic estimates.

---

📦 **Module**: `PCGExElementsPathfinding` · 📄 [Source](https://github.com/Nebukam/PCGExtendedToolkit/blob/main/Source/PCGExElementsPathfinding/Public/Search/PCGExSearchDijkstra.h)
