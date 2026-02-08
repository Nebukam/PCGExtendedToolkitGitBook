---
icon: grid-round-2-plus
---

# Pathfinding

**Pathfinding in PCGEx walks the connections you've already built.** It doesn't raycast through space or sample a navmesh grid. It traverses cluster edges, guided by heuristic scores that you compose from sub-nodes.

The core workflow is straightforward: pick an algorithm, attach one or more heuristic sub-nodes to define what "good" means, and let the search find routes through your cluster topology. Heuristics follow the provider/consumer pattern and combine with configurable aggregation -- weighted average, sum, geometric mean, min, or max -- so you control exactly how traversal costs are evaluated.

Beyond algorithm-driven search, **Plot Edges** writes pathfinding results as edge attributes back onto the cluster, and **Grow Paths** expands outward from seed points using heuristic-guided growth. The section also covers flood fill, cell and hull extraction, and navmesh integration for cases where you need engine-level navigation.

### Sections

| Section           | Contents                                                                                             |
| ----------------- | ---------------------------------------------------------------------------------------------------- |
| Common Settings   | Shared configuration — heuristic composition, path statistics                                        |
| Algorithms        | A\*, Dijkstra, Bidirectional, Bellman-Ford                                                           |
| Heuristics        | Scoring sub-nodes — distance, azimuth, attribute, inertia, turn penalty, steepness, feedback, tensor |
| Pathfinding Edges | Goal-based pathfinding with goal picker sub-nodes                                                    |
| Flood Fill        | Region growth from seed points with configurable fill controls                                       |
| Cells             | Region extraction — cell discovery, convex hulls, bounded areas from cluster topology                |
| Navmesh           | Navigation mesh integration — pathfinding and plotting without clusters                              |

### Concepts

For understanding algorithm tradeoffs, heuristic composition, and when to use what:

* [Pathfinding Concepts](../../working-with-pcgex/pathfinding/)
