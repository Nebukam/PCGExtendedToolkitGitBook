---
icon: border-outer
---

# Cells and Hulls

**Not all cluster traversal is about getting from A to B.** PCGEx can also extract structural features from cluster topology — the enclosed regions between edges (cells) and the outer boundary of the whole cluster (hulls). These operations produce paths, so everything you know about path processing applies to the results.

### Cells

Cells are closed regions bounded by cluster edges. Think of them as the "polygons" formed by the cluster's edge network — each cell is a closed loop of Vtx tracing one enclosed area.

<figure><img src="../../.gitbook/assets/placeholder-wide.jpg" alt=""><figcaption><p>Cluster with individual cells highlighted in different colors</p></figcaption></figure>

#### Seeded Cell Finding

[find-cells.md](../../node-library/pathfinding/cells/find-cells.md "mention") finds cells around specific seed points:

* Each seed claims a cell — the closed region of edges surrounding it
* Seeds compete for ownership when cells overlap (configurable: seed order or best candidate)
* Supports seed growth, which expands selection to adjacent cells
* Outputs the cell boundary as a closed path, plus an oriented bounding box

This is what you want when you care about _specific_ regions — place seeds where you want cells extracted.

[find-cells-bounded.md](../../node-library/pathfinding/cells/find-cells-bounded.md "mention") adds spatial triage:

* Same seed-based cell finding, plus a bounds input
* Each found cell is categorized as Inside, Touching, or Outside the bounds
* Outputs can be separated into distinct pins or combined with triage tags

#### Exhaustive Cell Finding

[find-all-cells.md](../../node-library/pathfinding/cells/find-all-cells.md "mention") enumerates every cell in the cluster:

* No seeds needed — discovers all enclosed regions automatically
* Supports hole exclusion: provide "hole" points to skip cells containing them
* Hole growth expands exclusion to adjacent cells
* Outputs all cell boundaries as closed paths

[find-all-cells-bounded.md](../../node-library/pathfinding/cells/find-all-cells-bounded.md "mention") adds the same spatial triage:

* Finds all cells, then categorizes each as Inside, Touching, or Outside the bounds

#### Cell Constraints

All cell-finding nodes share constraint settings that filter which cells are valid:

* Minimum/maximum vertex count
* Planarity checks
* 2D projection settings for planar analysis

### Hulls

[find-cluster-hull.md](../../node-library/pathfinding/cells/find-cluster-hull.md "mention") extracts the outer boundary of each cluster as a single closed path.

<figure><img src="../../.gitbook/assets/placeholder-wide.jpg" alt=""><figcaption><p>Cluster with hull path highlighted as outer boundary</p></figcaption></figure>

Where cells are the interior polygons, the hull is the outermost perimeter:

* One hull path per cluster
* Excludes all internal structure
* Uses the same constraint and projection settings as cell finding

### Comparison

| Node                                                                                                  | Input                               | Output                            |
| ----------------------------------------------------------------------------------------------------- | ----------------------------------- | --------------------------------- |
| [find-cells.md](../../node-library/pathfinding/cells/find-cells.md "mention")                         | Seeds + Cluster                     | Cell path per seed                |
| [find-cells-bounded.md](../../node-library/pathfinding/cells/find-cells-bounded.md "mention")         | Seeds + Cluster + Bounds            | Cell paths, triaged by bounds     |
| [find-all-cells.md](../../node-library/pathfinding/cells/find-all-cells.md "mention")                 | Cluster (+ optional Holes)          | All cell paths                    |
| [find-all-cells-bounded.md](../../node-library/pathfinding/cells/find-all-cells-bounded.md "mention") | Cluster + Bounds (+ optional Holes) | All cell paths, triaged by bounds |
| [find-cluster-hull.md](../../node-library/pathfinding/cells/find-cluster-hull.md "mention")           | Cluster                             | Single hull path per cluster      |

### Practical Uses

#### Region Identification

Extract cells to identify distinct areas:

1. Generate cluster from points
2. Find all cells (or seed specific regions)
3. Each cell represents a bounded region
4. Process regions independently — filter by area, assign attributes, spawn content

#### Boundary Drawing

Extract hulls for boundary visualization:

1. Generate cluster
2. Find cluster hull
3. Use the hull path for spawning boundaries, walls, or borders

#### Area Calculation

Cells provide polygon boundaries for measurement:

1. Extract cells as paths
2. Calculate polygon area from point positions
3. Use area values for filtering or weighting

#### Mesh Generation

Cells map directly to polygon geometry:

1. Extract cells from cluster
2. Each cell becomes a polygon face
3. Suitable for mesh construction

### Seeds and Starting Points

The seeded variants (Find Cells) and exhaustive variants (Find All Cells) serve different purposes:

* **Seeded**: You control which cells are extracted by placing seeds. Useful when you want specific regions.
* **Exhaustive**: Every cell in the cluster is found. Useful when you need the complete cell decomposition.

For seeded finding, seed placement determines which regions are extracted. Seeds are matched to nearby cluster Vtx, and the cell surrounding that Vtx is traced.

### Output as Paths

All these operations output closed paths:

* Each cell boundary or hull is an ordered sequence of Vtx
* Can be processed with path operations (offset, subdivide, smooth)
* Maintains cluster attribute inheritance

### Relation to Pathfinding

These operations share infrastructure with pathfinding — they traverse cluster topology and produce ordered point sequences using the same data structures. But they don't require goals or heuristics. They're structural extraction, not route finding.

### Related

* [.](./ "mention") - Pathfinding concepts
* [paths](../paths/ "mention") - Path operations for extracted boundaries
* [cluster-path-interoperability.md](../clusters/cluster-path-interoperability.md "mention") - Converting between formats
