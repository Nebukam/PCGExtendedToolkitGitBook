---
icon: arrow-progress
---

# Pathfinding

**Pathfinding in PCGEx doesn't raycast through space. It walks through the connections you've built.** Your cluster's edges are the navigable network — if an edge exists, the path can follow it. If you've removed it during refinement, it's gone. This gives you complete control over where paths can go.

<figure><img src="../../.gitbook/assets/placeholder-wide.jpg" alt=""><figcaption><p>Cluster with highlighted path from A to B following edges</p></figcaption></figure>

### Pathfinding Approaches

PCGEx offers multiple approaches depending on what you need.

#### Goal-Based Pathfinding

**Pathfinding : Edges** finds optimal paths between specified points:

* Requires seed points (sources) and goal points (destinations)
* Uses algorithms (A\*, Dijkstra) to find shortest/best paths
* Heuristics guide path selection

Classic pathfinding: "Find the best path from A to B."

#### Sequential Plot Pathfinding

**Pathfinding : Plot Edges** traces through pre-ordered waypoints:

* Takes ordered input points
* Connects them sequentially through cluster topology
* Finds path between each consecutive pair

Often more intuitive: "Connect these waypoints in order through the cluster."

#### Growth-Based Pathfinding

**Pathfinding : Grow Paths** expands from seeds until stopped:

* Seeds are starting points
* Paths grow outward following edges
* Stops on conditions (iteration count, distance, attribute-based limits)

Exploratory: "Grow outward from here until you can't."

#### Flood Fill

Spreads values through cluster connectivity:

* Seeds initiate the spread
* Values propagate through edges
* Fill Controls govern spread behavior

Not traditional pathfinding, but uses the same cluster traversal:

* Territory assignment
* Distance calculation from sources
* Region segmentation

Fill Controls are sub-nodes that determine how flood fill spreads. Some Fill Controls can use filters for Vtx or Edge conditions.

### How Paths Are Guided

Pathfinding nodes use **heuristics** to score and select paths, not filters:

* Heuristics assign costs to edges and nodes
* Lower-cost paths are preferred
* Multiple heuristics combine into composite scores

For growth-based pathfinding, **attribute-based limits** control where paths can go:

* Stop attributes mark endpoints
*   No-growth attributes block traversal

    <div data-gb-custom-block data-tag="hint" data-style="info" class="hint hint-info"><p>If you need to exclude edges or vertices from pathfinding, remove them from the cluster beforehand using cluster refinement operations.</p></div>

### Path Output

Pathfinding produces paths as point sequences:

* Each path is ordered points following the route
* Maintains cluster attribute inheritance
* Can be processed with path operations (offset, subdivide, etc.)

### Beyond A-to-B

PCGEx pathfinding includes operations that extract path-like data without explicit goals:

**Cells**: Find closed regions bounded by edges — either around specific seeds or exhaustively across the whole cluster **Hulls**: Extract the outer boundary of a cluster as a single path

These are covered in Cells and Hulls.

### When to Use What

| Need                         | Approach                                                                                                                                                              |
| ---------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Best path between two points | [pathfinding-edges](../../node-library/pathfinding/pathfinding-edges/ "mention")                                                                                      |
| Connect ordered waypoints    | [pathfinding-plot-edges.md](../../node-library/pathfinding/pathfinding-plot-edges.md "mention")                                                                       |
| Spread values/territories    | [cluster-flood-fill](../../node-library/pathfinding/cluster-flood-fill/ "mention")                                                                                    |
| Find enclosed regions        | [find-cells.md](../../node-library/pathfinding/cells/find-cells.md "mention") / [find-all-cells.md](../../node-library/pathfinding/cells/find-all-cells.md "mention") |
| Extract outer boundary       | [find-cluster-hull.md](../../node-library/pathfinding/cells/find-cluster-hull.md "mention")                                                                           |

### In This Section

* [algorithms.md](algorithms.md "mention") - A\*, Dijkstra, and when to use each
* [heuristics.md](heuristics.md "mention") - Scoring functions that guide path selection
* [cells-and-hulls.md](cells-and-hulls.md "mention")  - Extracting bounded regions

### Related

**Concepts:**

* [clusters](../clusters/ "mention") - Pathfinding operates on clusters
* [provider-consumer-pattern.md](../architecture/provider-consumer-pattern.md "mention") - Heuristics follow this pattern
* [refining-clusters.md](../clusters/refining-clusters.md "mention") - Remove edges before pathfinding

**Node Library:**

* [pathfinding](../../node-library/pathfinding/ "mention") - Complete reference
* [heuristics](../../node-library/pathfinding/heuristics/ "mention") - All heuristic providers
