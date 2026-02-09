---
icon: question
---

# Common Cluster Operations

**You have points and you want connectivity. Or you have connectivity and you want to shape it.** This is your map.

### Building Clusters

| I want to...                           | Node                                    | Notes                                                                     |
| -------------------------------------- | --------------------------------------- | ------------------------------------------------------------------------- |
| Create dense triangular connectivity   | **Delaunay 2D** / **Delaunay 3D**       | Maximizes minimum angles. Urquhart mode strips longest edge per triangle. |
| Create territorial cell boundaries     | **Voronoi 2D** / **Voronoi 3D**         | Dual of Delaunay. Euclidean, Manhattan, or Chebyshev metric (2D).         |
| Connect each point to its K nearest    | **Connect Points**                      | Probe-based — configure exactly which connections form.                   |
| Extract topology from a static mesh    | **Mesh to Clusters**                    | Vtx at mesh vertices, Edges follow mesh edges.                            |
| Convert paths into a connected network | **Path to Clusters**                    | Endpoint merging within a distance threshold creates intersections.       |
| Build a convex hull                    | **Convex Hull 2D** / **Convex Hull 3D** | Outer boundary only. 2D projects onto a plane first.                      |
| Turn cells into an adjacency graph     | **Cell Diagram**                        | Cell centroids become Vtx, shared boundaries become Edges.                |
| Swap vertices and edges                | **Dual Graph**                          | Edges become Vtx, Vtx become Edges. Topological inversion.                |

### Refining Edges

All refinement operations run through the **Refine Edges** node, which accepts refinement sub-nodes.

| I want to...                            | Refinement                                         | Notes                                                              |
| --------------------------------------- | -------------------------------------------------- | ------------------------------------------------------------------ |
| Remove edges by custom condition        | **Filter**                                         | Uses the standard filter system. Invert to keep instead of remove. |
| Remove longest/shortest edge per Vtx    | **Remove Longest** / **Remove Shortest**           | Per-vertex, not global.                                            |
| Keep only longest/shortest edge per Vtx | **Keep Longest** / **Keep Shortest**               | Inverse of remove variants.                                        |
| Score edges and remove by rank          | **Remove Highest Score** / **Remove Lowest Score** | Requires heuristics sub-nodes for scoring.                         |
| Score edges and keep by rank            | **Keep Highest Score** / **Keep Lowest Score**     | Requires heuristics sub-nodes for scoring.                         |
| Produce a minimum spanning tree         | **MST (Prim)**                                     | Requires heuristics. Invert to remove the MST and keep the rest.   |
| Strip to Gabriel graph                  | **Gabriel**                                        | Removes edges with points inside diametric circle.                 |
| Strip to beta-skeleton                  | **Beta Skeleton**                                  | Beta=1 is Gabriel. Lower = denser, higher = sparser.               |
| Find structural bridge edges            | **DFS (Tarjan)**                                   | Identifies edges whose removal disconnects the cluster.            |
| Remove leaf vertices                    | **Remove Leaves** / **Remove Leaves (Recursive)**  | Single pass or recursive until none remain.                        |
| Remove overlapping/crossing edges       | **Overlap**                                        | Configurable angle filtering. Keep shortest or longest.            |
| Remove edges blocked by world geometry  | **Line Trace**                                     | Raycasts along edges. Scatter mode for wider traces.               |

### Relaxing Positions

All relaxation runs through the **Relax Clusters** node with a relaxation method sub-node. Topology stays the same — only positions change.

| I want to...                       | Method                               | Notes                                                               |
| ---------------------------------- | ------------------------------------ | ------------------------------------------------------------------- |
| Smooth toward neighbor average     | **Laplacian**                        | Simple, stable. Moves each Vtx toward its neighbor centroid.        |
| Spring + repulsion layout          | **Force Directed**                   | Classic force-directed. Spring constant and electrostatic constant. |
| Resolve bounding box overlaps      | **Box Fitting** / **Box Fitting v2** | v2 adds oriented bounds, configurable extents, separation modes.    |
| Resolve spherical overlaps         | **Radius Fitting**                   | Sphere-based collision. Radius from constant or attribute.          |
| Simulate with gravity and friction | **Verlet**                           | Verlet integration. Gravity, friction, edge stiffness, damping.     |

### Topology & Structure

| I want to...                         | Node                   | Notes                                                                                     |
| ------------------------------------ | ---------------------- | ----------------------------------------------------------------------------------------- |
| Merge close vertices                 | **Fuse Clusters**      | Distance threshold. Attributes blend or prioritize. The standard way to combine clusters. |
| Merge vertices by filter             | **Merge Vertices**     | Collapses filtered Vtx into their neighbors.                                              |
| Simplify chain sequences             | **Simplify Clusters**  | Removes degree-2 Vtx that just sit between two neighbors.                                 |
| Add points along edges               | **Subdivide Edges**    | By count or distance. Increases resolution without changing topology shape.               |
| Split clusters along paths           | **Cut Clusters**       | Uses paths as cutting lines through cluster topology.                                     |
| Connect separate clusters            | **Connect Clusters**   | Bridges between disconnected cluster components.                                          |
| Filter vertices by condition         | **Filter Vtx**         | Removes Vtx and their edges. Cascading cleanup configurable.                              |
| Fix connectivity after vanilla edits | **Sanitize Clusters**  | Rebuilds indices after non-PCGEx nodes modify point counts.                               |
| Separate disconnected components     | **Decompose Clusters** | Each connected component becomes its own cluster.                                         |

### Attributes & Analysis

| I want to...                               | Node                      | Notes                                                                         |
| ------------------------------------------ | ------------------------- | ----------------------------------------------------------------------------- |
| Compute Vtx degree, betweenness, closeness | **Cluster Centrality**    | Standard graph centrality measures.                                           |
| Write per-Vtx topology metrics             | **Write Vtx Properties**  | Neighbor count, edge lengths, adjacency data. Accepts Vtx property sub-nodes. |
| Write per-Edge metrics                     | **Write Edge Properties** | Length, direction, endpoint-derived values.                                   |
| Sample attributes from connected neighbors | **Sample Neighbors**      | Blend, attribute, properties, or filter-based sampling sub-nodes.             |
| Define adjacency-based states              | **Write States**          | Evaluates adjacency conditions and writes state attributes.                   |
| Control edge ordering per Vtx              | **Edge Order**            | Sorts edges around each Vtx by angle, attribute, or custom rule.              |
| Partition Vtx into groups                  | **Partition Vertices**    | Groups Vtx by attribute or topology.                                          |

### Data Management

| I want to...                         | Node                        | Notes                                                     |
| ------------------------------------ | --------------------------- | --------------------------------------------------------- |
| Duplicate clusters per point         | **Copy Clusters to Points** | Stamps cluster copies at target positions.                |
| Serialize clusters for storage       | **Pack Clusters**           | Flattens Vtx + Edges into a single portable dataset.      |
| Restore packed clusters              | **Unpack Clusters**         | Reconstructs Vtx + Edges from packed data.                |
| Ensure independent cluster copies    | **Make Clusters Unique**    | Deep-copies shared data so edits don't cross-contaminate. |
| Find existing cluster data on points | **Find Clusters Data**      | Locates and validates cluster metadata.                   |
| Pick cluster closest to targets      | **Pick Closest Clusters**   | Spatial selection from multiple clusters.                 |
| Sample a Vtx by its unique ID        | **Sample Vtx by ID**        | Direct lookup without spatial search.                     |

### Path Interop

| I want to...                        | Node                        | Notes                                                |
| ----------------------------------- | --------------------------- | ---------------------------------------------------- |
| Extract edges as ordered paths      | **Break Clusters to Paths** | Chains edges into continuous path sequences.         |
| Cut clusters with path geometry     | **Cut Clusters**            | Paths act as cutting lines through cluster topology. |
| Convert paths into cluster topology | **Path to Clusters**        | Endpoint merging creates intersections.              |

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
