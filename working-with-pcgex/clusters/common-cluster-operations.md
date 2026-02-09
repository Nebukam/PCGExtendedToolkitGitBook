---
icon: question
---

# Common Cluster Operations

**You have points and you want connectivity. Or you have connectivity and you want to shape it.** This is your map.

### Building Clusters

| I want to...                           | Node                                                                                                  | Notes                                                                     |
| -------------------------------------- | ----------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------- |
| Create dense triangular connectivity   | [cluster-delaunay-2d.md](../../node-library/clusters/generate/cluster-delaunay-2d.md "mention")       | Maximizes minimum angles. Urquhart mode strips longest edge per triangle. |
| Create territorial cell boundaries     | [cluster-voronoi-2d.md](../../node-library/clusters/generate/cluster-voronoi-2d.md "mention")         | Dual of Delaunay. Euclidean, Manhattan, or Chebyshev metric (2D).         |
| Connect each point to its K nearest    | [cluster-connect-points](../../node-library/clusters/generate/cluster-connect-points/ "mention")      | Probe-based — configure exactly which connections form.                   |
| Extract topology from a static mesh    | [mesh-to-clusters.md](../../node-library/clusters/generate/mesh-to-clusters.md "mention")             | Vtx at mesh vertices, Edges follow mesh edges.                            |
| Convert paths into a connected network | [path-to-clusters.md](../../node-library/clusters/interop/path-to-clusters.md "mention")              | Endpoint merging within a distance threshold creates intersections.       |
| Build a convex hull                    | [cluster-convex-hull-2d.md](../../node-library/clusters/generate/cluster-convex-hull-2d.md "mention") | Outer boundary only. 2D projects onto a plane first.                      |
| Turn cells into an adjacency graph     | [cluster-cell-diagram.md](../../node-library/clusters/generate/cluster-cell-diagram.md "mention")     | Cell centroids become Vtx, shared boundaries become Edges.                |
| Swap vertices and edges                | [cluster-dual-graph.md](../../node-library/clusters/generate/cluster-dual-graph.md "mention")         | Edges become Vtx, Vtx become Edges. Topological inversion.                |

### Refining Edges

All refinement operations run through the **Refine Edges** node, which accepts refinement sub-nodes.

| I want to...                            | Refinement                                                                                                                                                                                                                                                   | Notes                                                              |
| --------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------ |
| Remove edges by custom condition        | [refine-filter.md](../../node-library/clusters/refine/cluster-refine/refine-filter.md "mention")                                                                                                                                                             | Uses the standard filter system. Invert to keep instead of remove. |
| Remove longest/shortest edge per Vtx    | [length-based-refinements.md](../../node-library/clusters/refine/cluster-refine/length-based-refinements.md "mention")                                                                                                                                       | Per-vertex, not global.                                            |
| Keep only longest/shortest edge per Vtx | [length-based-refinements.md](../../node-library/clusters/refine/cluster-refine/length-based-refinements.md "mention")                                                                                                                                       | Inverse of remove variants.                                        |
| Score edges and remove by rank          | [score-based-refinements.md](../../node-library/clusters/refine/cluster-refine/score-based-refinements.md "mention")                                                                                                                                         | Requires heuristics sub-nodes for scoring.                         |
| Score edges and keep by rank            | [score-based-refinements.md](../../node-library/clusters/refine/cluster-refine/score-based-refinements.md "mention")                                                                                                                                         | Requires heuristics sub-nodes for scoring.                         |
| Produce a minimum spanning tree         | [refine-mst-prim.md](../../node-library/clusters/refine/cluster-refine/refine-mst-prim.md "mention")                                                                                                                                                         | Requires heuristics. Invert to remove the MST and keep the rest.   |
| Strip to Gabriel graph                  | [refine-gabriel.md](../../node-library/clusters/refine/cluster-refine/refine-gabriel.md "mention")                                                                                                                                                           | Removes edges with points inside diametric circle.                 |
| Strip to beta-skeleton                  | [refine-v-skeleton.md](../../node-library/clusters/refine/cluster-refine/refine-v-skeleton.md "mention")                                                                                                                                                     | Beta=1 is Gabriel. Lower = denser, higher = sparser.               |
| Find structural bridge edges            | [refine-dfs-tarjan.md](../../node-library/clusters/refine/cluster-refine/refine-dfs-tarjan.md "mention")                                                                                                                                                     | Identifies edges whose removal disconnects the cluster.            |
| Remove leaf vertices                    | <p><a data-mention href="../../node-library/clusters/refine/cluster-refine/remove-leaves.md">remove-leaves.md</a> <br><a data-mention href="../../node-library/clusters/refine/cluster-refine/remove-leaves-recursive.md">remove-leaves-recursive.md</a></p> | Single pass or recursive until none remain.                        |
| Remove overlapping/crossing edges       | [refine-overlap.md](../../node-library/clusters/refine/cluster-refine/refine-overlap.md "mention")                                                                                                                                                           | Configurable angle filtering. Keep shortest or longest.            |
| Remove edges blocked by world geometry  | [refine-line-trace.md](../../node-library/clusters/refine/cluster-refine/refine-line-trace.md "mention")                                                                                                                                                     | Raycasts along edges. Scatter mode for wider traces.               |

### Relaxing Positions

All relaxation runs through the **Relax Clusters** node with a relaxation method sub-node. Topology stays the same — only positions change.

| I want to...                       | Method                                                                                                     | Notes                                                               |
| ---------------------------------- | ---------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------- |
| Smooth toward neighbor average     | [laplacian-poisson.md](../../node-library/clusters/transform/cluster-relax/laplacian-poisson.md "mention") | Simple, stable. Moves each Vtx toward its neighbor centroid.        |
| Spring + repulsion layout          | [force-directed.md](../../node-library/clusters/transform/cluster-relax/force-directed.md "mention")       | Classic force-directed. Spring constant and electrostatic constant. |
| Resolve bounding box overlaps      | [box-fitting.md](../../node-library/clusters/transform/cluster-relax/box-fitting.md "mention")             | v2 adds oriented bounds, configurable extents, separation modes.    |
| Resolve spherical overlaps         | [radius-fitting.md](../../node-library/clusters/transform/cluster-relax/radius-fitting.md "mention")       | Sphere-based collision. Radius from constant or attribute.          |
| Simulate with gravity and friction | [verlet-gravity.md](../../node-library/clusters/transform/cluster-relax/verlet-gravity.md "mention")       | Verlet integration. Gravity, friction, edge stiffness, damping.     |

### Topology & Structure

| I want to...                         | Node                                                                                              | Notes                                                                                     |
| ------------------------------------ | ------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------- |
| Merge close vertices                 | [cluster-fuse.md](../../node-library/clusters/refine/cluster-fuse.md "mention")                   | Distance threshold. Attributes blend or prioritize. The standard way to combine clusters. |
| Simplify chain sequences             | [cluster-simplify.md](../../node-library/clusters/refine/cluster-simplify.md "mention")           | Removes degree-2 Vtx that just sit between two neighbors.                                 |
| Add points along edges               | [tbd-subdivide-edges.md](../../node-library/clusters/refine/tbd-subdivide-edges.md "mention")     | By count or distance. Increases resolution without changing topology shape.               |
| Split clusters along paths           | [cluster-cut.md](../../node-library/clusters/interop/cluster-cut.md "mention")                    | Uses paths as cutting lines through cluster topology.                                     |
| Connect separate clusters            | [cluster-connect.md](../../node-library/clusters/refine/cluster-connect.md "mention")             | Bridges between disconnected cluster components.                                          |
| Filter vertices by condition         | [cluster-filter-vtx.md](../../node-library/clusters/refine/cluster-filter-vtx.md "mention")       | Removes Vtx and their edges. Cascading cleanup configurable.                              |
| Fix connectivity after vanilla edits | [cluster-sanitize.md](../../node-library/clusters/utilities/cluster-sanitize.md "mention")        | Rebuilds indices after non-PCGEx nodes modify point counts.                               |
| Separate disconnected components     | [cluster-decomposition.md](../../node-library/clusters/refine/cluster-decomposition.md "mention") | Each connected component becomes its own cluster.                                         |

### Attributes & Analysis

| I want to...                               | Node                                                                                                   | Notes                                                                         |
| ------------------------------------------ | ------------------------------------------------------------------------------------------------------ | ----------------------------------------------------------------------------- |
| Compute Vtx degree, betweenness, closeness | [cluster-centrality.md](../../node-library/clusters/analyze/cluster-centrality.md "mention")           | Standard graph centrality measures.                                           |
| Write per-Vtx topology metrics             | [cluster-vtx-properties](../../node-library/clusters/analyze/cluster-vtx-properties/ "mention")        | Neighbor count, edge lengths, adjacency data. Accepts Vtx property sub-nodes. |
| Write per-Edge metrics                     | [cluster-edge-properties.md](../../node-library/clusters/analyze/cluster-edge-properties.md "mention") | Length, direction, endpoint-derived values.                                   |
| Sample attributes from connected neighbors | [cluster-sample-neighbors](../../node-library/sampling/cluster-sample-neighbors/ "mention")            | Blend, attribute, properties, or filter-based sampling sub-nodes.             |
| Define adjacency-based states              | [cluster-write-states](../../node-library/clusters/analyze/cluster-write-states/ "mention")            | Evaluates adjacency conditions and writes state attributes.                   |
| Control edge ordering per Vtx              | [cluster-edge-order.md](../../node-library/clusters/analyze/cluster-edge-order.md "mention")           | Sorts edges around each Vtx by angle, attribute, or custom rule.              |
| Partition Vtx into per-cluster groups      | [cluster-partition-vtx.md](../../node-library/clusters/analyze/cluster-partition-vtx.md "mention")     | Groups Vtx by connectivity                                                    |

### Data Management

| I want to...                         | Node                                                                                                   | Notes                                                     |
| ------------------------------------ | ------------------------------------------------------------------------------------------------------ | --------------------------------------------------------- |
| Duplicate clusters per point         | [cluster-copy-to-points.md](../../node-library/clusters/transform/cluster-copy-to-points.md "mention") | Stamps cluster copies at target positions.                |
| Serialize clusters for storage       | [cluster-pack.md](../../node-library/clusters/utilities/pack-and-unpack/cluster-pack.md "mention")     | Flattens Vtx + Edges into a single portable dataset.      |
| Restore packed clusters              | [cluster-unpack.md](../../node-library/clusters/utilities/pack-and-unpack/cluster-unpack.md "mention") | Reconstructs Vtx + Edges from packed data.                |
| Ensure independent cluster copies    | [cluster-make-unique.md](../../node-library/clusters/utilities/cluster-make-unique.md "mention")       | Deep-copies shared data so edits don't cross-contaminate. |
| Find existing cluster data on points | [find-clusters.md](../../node-library/clusters/utilities/find-clusters.md "mention")                   | Locates and validates cluster metadata.                   |
| Pick cluster closest to targets      | [cluster-pick-closest.md](../../node-library/clusters/utilities/cluster-pick-closest.md "mention")     | Spatial selection from multiple clusters.                 |

### Path Interop

| I want to...                        | Node                                                                                                 | Notes                                                |
| ----------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------- |
| Extract edges as ordered paths      | [cluster-break-to-paths.md](../../node-library/clusters/interop/cluster-break-to-paths.md "mention") | Chains edges into continuous path sequences.         |
| Cut clusters with path geometry     | [cluster-cut.md](../../node-library/clusters/interop/cluster-cut.md "mention")                       | Paths act as cutting lines through cluster topology. |
| Convert paths into cluster topology | [path-to-clusters.md](../../node-library/clusters/interop/path-to-clusters.md "mention")             | Endpoint merging creates intersections.              |

See Cluster-Path Interop for the full back-and-forth workflow.

### Typical Workflow

1. **Build** — Delaunay, Voronoi, or Custom Graph for initial connectivity
2. **Combine** — Fuse Clusters to merge multiple generation passes
3. **Refine** — Remove unwanted edges by length, score, geometry, or filter
4. **Relax** — Optimize positions with Laplacian or Force Directed
5. **Analyze** — Write Properties, Centrality, Sample Neighbors
6. **Extract** — Break to Paths, pathfind, or feed into topology/staging

### Related

* [.](./ "mention") — Cluster fundamentals
* [building-clusters.md](building-clusters.md "mention") — Generation strategies in depth
* [refining-clusters.md](refining-clusters.md "mention") — Refinement concepts
* [clusters](../../node-library/clusters/ "mention") — Complete node reference
