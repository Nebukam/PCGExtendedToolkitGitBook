---
icon: function
---

# Algorithms

**Every algorithm here uses the same heuristics system.** The difference is search strategy, not scoring. You pick the algorithm that fits your cluster's shape and your performance needs; heuristic sub-nodes handle the rest.

**A\*** is the default starting point. It combines accumulated cost with a heuristic estimate to focus the search toward the goal, exploring fewer nodes than an undirected approach. **Dijkstra** drops the forward estimate and explores more broadly, which makes it thorough but slower on large clusters. **Bidirectional** search runs from both seed and goal simultaneously, meeting in the middle, and scales better when the cluster is large and the endpoints are far apart. **Bellman-Ford** handles negative edge weights and detects negative cycles, trading speed for robustness in cases where the other algorithms can't guarantee correctness.

All four accept the same heuristic sub-nodes on the same input pin. Swapping algorithms is a single node change.

### Concepts

For understanding algorithm tradeoffs, heuristic composition, and when to use what:

* [Pathfinding Concepts](../../../working-with-pcgex/pathfinding/)
