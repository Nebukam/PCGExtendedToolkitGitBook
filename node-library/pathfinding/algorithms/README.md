---
icon: rectangles-mixed
---

# Algorithms

**Pathfinding algorithms. These are the main behaviors that find routes through cluster topology.**

| Node                       | Description                                                                                                                     |
| -------------------------- | ------------------------------------------------------------------------------------------------------------------------------- |
| **Search : A**\*           | Heuristic-guided best-first search. f(n) = g(n) + h(n). Guarantees shortest path with admissible heuristics. Early exit option. |
| **Search : Dijkstra**      | Classic shortest-path respecting edge weights. No heuristic guidance — explores more nodes but complete guarantee.              |
| **Search : Bidirectional** | Simultaneous search from seed and goal, meeting in the middle. Faster for large clusters.                                       |
| **Search : Bellman-Ford**  | Handles negative edge weights. Detects negative cycles. Slower but more robust.                                                 |

### Concepts

For understanding algorithm tradeoffs, heuristic composition, and when to use what:

* [Pathfinding Concepts](../../../working-with-pcgex/pathfinding/)
