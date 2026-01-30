---
icon: magnifying-glass
description: Sub-nodes that control pathfinding search algorithms
---

# Search Algorithms

Search Algorithms are instanced sub-nodes that control how paths are discovered through cluster graphs. They are used by nodes like [Pathfinding : Edges](../../node-library/pathfinding/pathfinding-edges.md) and [Pathfinding : Plot Edges](../../node-library/pathfinding/pathfinding-plot-edges.md).

## Available Algorithms

| Algorithm | Description | Best For |
|-----------|-------------|----------|
| [A*](./a-star.md) | Heuristic-guided search | General use, fastest in most cases |
| [Dijkstra](./dijkstra.md) | Guaranteed shortest path | When heuristics might mislead |
| [Bellman-Ford](./bellman-ford.md) | Handles negative weights | When heuristics can be negative |
| [Bidirectional](./bidirectional.md) | Searches from both ends | Very large graphs |

## Algorithm Comparison

| Algorithm | Time Complexity | Handles Negative Weights | Early Exit | Notes |
|-----------|-----------------|-------------------------|------------|-------|
| **A\*** | O(E log V) | No | Yes | Best general-purpose choice |
| **Dijkstra** | O(E log V) | No | Optional | More respectful of modifiers |
| **Bellman-Ford** | O(V × E) | Yes | Optional | Detects negative cycles |
| **Bidirectional** | O(b^(d/2)) | No | Yes | Faster for deep searches |

Where: V = vertices, E = edges, b = branching factor, d = depth

## Common Settings

All search algorithms inherit from the base factory and share:

<details>
<summary><strong>Early Exit</strong> <code>bool</code></summary>

Exit the search early once a valid path is found. Disabling this explores all possible paths, which is slower but may find alternative routes.

Default: `true`

⚡ PCG Overridable

</details>

## Choosing an Algorithm

### Use A* (Default)
- Best performance in most scenarios
- Works well with distance-based heuristics
- Recommended starting point

### Use Dijkstra
- When you need guaranteed shortest paths
- When heuristics might mislead the search
- When path cost accuracy is critical

### Use Bellman-Ford
- When heuristics can produce negative scores
- When you need negative cycle detection
- When robustness is more important than speed

### Use Bidirectional
- For very large graphs with distant goals
- When search depth is significant
- Can be much faster than unidirectional searches

## Usage

Search Algorithms appear as instanced object properties on pathfinding nodes. Click the dropdown to select an algorithm, then configure its specific settings.

```
┌─────────────────────────────────┐
│ Search Algorithm                │
│ ┌─────────────────────────────┐ │
│ │ Type: [A* ▼]                │ │
│ │ Early Exit: [✓]             │ │
│ └─────────────────────────────┘ │
└─────────────────────────────────┘
```

---

📦 **Module**: `PCGExElementsPathfinding`
