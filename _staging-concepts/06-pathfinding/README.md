# Pathfinding

**Pathfinding in PCGEx doesn't raycast through space. It walks through the connections you've built.** Your cluster's edges are the navigable network — if an edge exists, the path can follow it. If you've removed it during refinement, it's gone. This gives you complete control over where paths can go.

<!-- IMAGE: Cluster with highlighted path from A to B following edges -->

## Pathfinding Approaches

PCGEx offers multiple approaches depending on what you need.

### Goal-Based Pathfinding

**Pathfinding : Edges** finds optimal paths between specified points:
- Requires seed points (sources) and goal points (destinations)
- Uses algorithms (A*, Dijkstra) to find shortest/best paths
- Heuristics guide path selection

Classic pathfinding: "Find the best path from A to B."

### Sequential Plot Pathfinding

**Pathfinding : Plot Edges** traces through pre-ordered waypoints:
- Takes ordered input points
- Connects them sequentially through cluster topology
- Finds path between each consecutive pair

Often more intuitive: "Connect these waypoints in order through the cluster."

### Growth-Based Pathfinding

**Pathfinding : Grow Paths** expands from seeds until stopped:
- Seeds are starting points
- Paths grow outward following edges
- Stops on conditions (iteration count, distance, attribute-based limits)

Exploratory: "Grow outward from here until you can't."

### Flood Fill

Spreads values through cluster connectivity:
- Seeds initiate the spread
- Values propagate through edges
- Fill Controls govern spread behavior

Not traditional pathfinding, but uses the same cluster traversal:
- Territory assignment
- Distance calculation from sources
- Region segmentation

Fill Controls are sub-nodes that determine how flood fill spreads. Some Fill Controls can use filters for Vtx or Edge conditions.

## How Paths Are Guided

Pathfinding nodes use **heuristics** to score and select paths, not filters:
- Heuristics assign costs to edges and nodes
- Lower-cost paths are preferred
- Multiple heuristics combine into composite scores

For growth-based pathfinding, **attribute-based limits** control where paths can go:
- Stop attributes mark endpoints
- No-growth attributes block traversal

{% hint style="info" %}
If you need to exclude edges or vertices from pathfinding, remove them from the cluster beforehand using cluster refinement operations.
{% endhint %}

## Path Output

Pathfinding produces paths as point sequences:
- Each path is ordered points following the route
- Maintains cluster attribute inheritance
- Can be processed with path operations (offset, subdivide, etc.)

## Beyond A-to-B

PCGEx pathfinding includes operations that extract path-like data without explicit goals:

**Cells**: Find closed regions bounded by edges
**Contours**: Trace boundaries around regions
**Hulls**: Extract outer cluster boundary

These are covered in [Cells and Hulls](cells-and-hulls.md).

## When to Use What

| Need | Approach |
|------|----------|
| Best path between two points | Pathfinding : Edges |
| Connect ordered waypoints | Pathfinding : Plot Edges |
| Explore from seeds | Pathfinding : Grow Paths |
| Spread values/territories | Flood Fill |
| Find enclosed regions | Find Cells |
| Extract boundaries | Find Contours/Hull |

## In This Section

- [Algorithms](algorithms.md) - A*, Dijkstra, and when to use each
- [Heuristics](heuristics.md) - Scoring functions that guide path selection
- [Cells and Hulls](cells-and-hulls.md) - Extracting bounded regions

## Related

**Concepts:**
- [Clusters](/concepts/03-clusters/) - Pathfinding operates on clusters
- [Provider/Consumer](/concepts/01-architecture/provider-consumer.md) - Heuristics follow this pattern
- [Cluster Refinement](/concepts/03-clusters/refining-clusters.md) - Remove edges before pathfinding

**Node Library:**
- [Pathfinding Nodes](/node-library/pathfinding/) - Complete reference
- [Heuristic Nodes](/node-library/pathfinding/heuristics/) - All heuristic providers
