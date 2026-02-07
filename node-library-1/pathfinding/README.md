---
icon: grid-round-2-plus
---

# Pathfinding

**Pathfinding on clusters — algorithms, heuristic scoring, goal selection, and region extraction.** Pathfinding in PCGEx walks the connections you've already built. It doesn't raycast through space; it traverses cluster edges guided by heuristic scores.

### Sections

| Section    | Contents                                                                                             |
| ---------- | ---------------------------------------------------------------------------------------------------- |
| Algorithms | A\*, Dijkstra, Bidirectional, Bellman-Ford                                                           |
| Heuristics | Scoring sub-nodes — distance, azimuth, attribute, inertia, turn penalty, steepness, feedback, tensor |
| Cells      | Region extraction — cell contours, convex hulls, bounded areas from cluster topology                 |
| Navmesh    | Navigation mesh integration                                                                          |

#### Heuristics

Heuristic sub-nodes follow the provider/consumer pattern. Each scores edges or nodes, and multiple heuristics combine with configurable aggregation (weighted average, sum, geometric mean, min, max). They're connected to pathfinding nodes via the Heuristics input pin.

### Concepts

For understanding algorithm tradeoffs, heuristic composition, and when to use what:

* [Pathfinding Concepts](../../working-with-pcgex-1/pathfinding/)
