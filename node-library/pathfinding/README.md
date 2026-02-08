---
icon: grid-round-2-plus
---

# Pathfinding

**Pathfinding in PCGEx walks the connections you've already built.** It doesn't raycast through space or sample a navmesh grid. It traverses cluster edges, guided by heuristic scores that you compose from sub-nodes.

The core workflow is straightforward: pick an algorithm, attach one or more heuristic sub-nodes to define what "good" means, and let the search find routes through your cluster topology. Heuristics follow the provider/consumer pattern and combine with configurable aggregation -- weighted average, sum, geometric mean, min, or max -- so you control exactly how traversal costs are evaluated.

Beyond algorithm-driven search, **Plot Edges** writes pathfinding results as edge attributes back onto the cluster, and **Grow Paths** expands outward from seed points using heuristic-guided growth. The section also covers flood fill, cell and hull extraction, and navmesh integration for cases where you need engine-level navigation.

### Sections

<table data-view="cards"><thead><tr><th>Section</th><th>Contents</th></tr></thead><tbody><tr><td><a data-mention href="common-settings/">common-settings</a></td><td>Shared configuration — heuristic composition, path statistics</td></tr><tr><td><a data-mention href="../../working-with-pcgex/pathfinding/algorithms.md">algorithms.md</a></td><td>A*, Dijkstra, Bidirectional, Bellman-Ford</td></tr><tr><td><a data-mention href="heuristics/">heuristics</a></td><td>Scoring sub-nodes — distance, azimuth, attribute, inertia, turn penalty, steepness, feedback, tensor</td></tr><tr><td><a data-mention href="pathfinding-edges/">pathfinding-edges</a></td><td>Goal-based pathfinding with goal picker sub-nodes</td></tr><tr><td><a data-mention href="cluster-flood-fill/">cluster-flood-fill</a></td><td>Region growth from seed points with configurable fill controls</td></tr><tr><td><a data-mention href="cells/">cells</a></td><td>Region extraction — cell discovery, convex hulls, bounded areas from cluster topology</td></tr><tr><td><a data-mention href="navmesh/">navmesh</a></td><td>Navigation mesh integration — pathfinding and plotting without clusters</td></tr></tbody></table>

### Concepts

For understanding algorithm tradeoffs, heuristic composition, and when to use what:

* [Pathfinding Concepts](../../working-with-pcgex/pathfinding/)
