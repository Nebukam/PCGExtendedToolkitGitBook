# Cluster-Path Interoperability

**Paths and clusters aren't competing formats — they're complementary tools, and converting between them is a core part of the workflow.** Paths give you ordered sequences you can offset, subdivide, and spawn along. Clusters give you topology you can analyze, refine, and pathfind through. Most non-trivial workflows use both, converting at the boundary where one format's strengths give way to the other's.

This is the same philosophy as [building clusters](building-clusters.md): no single representation does everything. You move between them.

## Paths to Clusters

### Why Convert

You have paths — maybe hand-authored splines, maybe procedural segments — and you want to treat them as a connected network. Converting to a cluster gives you topology: neighbor queries, pathfinding, refinement, flood fill. Things that paths alone can't do.

### Basic Conversion

Path points become Vtx. Path segment order becomes Edge connections:
- Path point 0 → Vtx 0
- Path point 1 → Vtx 1
- Segment 0→1 → Edge connecting Vtx 0 to Vtx 1

<!-- IMAGE: Linear path becoming cluster with same structure -->

For closed paths, the final segment (last point to first point) becomes an additional edge.

### Endpoint Merging

This is the key mechanism. When multiple paths convert together, endpoints within a distance threshold merge into a single Vtx. Three paths meeting at a crossroad become one Vtx with three edges — an intersection, not three dead ends sitting on top of each other.

<!-- IMAGE: Three paths meeting at a point, becoming single Vtx with three edges -->

The merging threshold controls what counts as "the same point." This is how disconnected path segments become a navigable network.

### Attributes

Path point attributes transfer to Vtx. Segment attributes become edge attributes if segment-to-edge correspondence is maintained.

## Clusters to Paths

### Why Convert

You've built and refined a cluster — now you need ordered sequences for spawning meshes along routes, creating splines, or applying path-specific operations like offset and subdivide. Converting edges to paths gives you that ordered format.

### Edge Extraction

**Break Clusters to Paths** converts edges to path segments. Each edge becomes a minimal two-point path, or edges chain into longer paths where possible.

<!-- IMAGE: Cluster becoming collection of linear path segments -->

### Pathfinding Extraction

Pathfinding operations extract specific routes as paths: find the shortest path between two Vtx and receive an ordered path following the route. This produces clean ordered paths from complex cluster topology.

<!-- IMAGE: Cluster with highlighted path from A to B, becoming extracted path -->

### Decomposition Strategies

Different extraction strategies produce different results:
- **All edges**: Every edge becomes a path segment
- **Chains only**: Only continuous sequences become paths
- **Filtered**: Only edges meeting criteria become paths

## The Back-and-Forth

Real workflows rarely go in one direction. A common pattern:

1. **Start with paths** — splines, procedural segments, whatever defines your initial layout
2. **→ Cluster** — merge at intersections, fuse with other clusters, analyze topology
3. **Refine** — remove edges, relax positions, compute centrality
4. **Pathfind** — find specific routes through the refined network
5. **→ Paths** — extract routes back as ordered sequences
6. **Process** — offset, subdivide, smooth the extracted paths
7. **Output** — spawn geometry along the final paths

Or flip it: start from a cluster (Delaunay on a point cloud), extract cells as paths, process those paths, convert back to clusters for further analysis.

{% hint style="success" %}
If you find yourself wanting "cluster features on paths" or "path features on clusters," the answer is usually: convert, do the work, convert back.
{% endhint %}

### Recovering Attributes with Sampling

Each conversion and processing step can change your data — positions shift, points get added or removed, attributes get lost in translation. The **data sampling** toolset is how you bring values back from earlier states.

A common pattern: you compute centrality on a cluster, extract paths via pathfinding, subdivide and offset those paths — and now you want the original centrality values on the final points. Sample Nearest from the earlier Vtx dataset onto your processed path points, and the values carry forward.

This applies broadly across the back-and-forth:
- Sample original path attributes onto post-cluster-refinement Vtx
- Sample cluster-computed properties onto extracted path points
- Sample pre-relaxation positions to measure displacement

Keep earlier datasets around as sampling sources. They're cheap to hold and invaluable for copying data across processing stages.

## Attribute Preservation

Direct conversion transfers attributes automatically:
- Vtx attributes → Path point attributes
- Edge attributes → Path segment attributes (where applicable)
- Path point attributes → Vtx attributes

For attributes that don't survive a round-trip — or that you compute mid-workflow and need on later results — use sampling to bridge the gap.

## Round-Trip Considerations

Converting path → cluster → path doesn't always produce identical output. Endpoint merging changes topology, cluster operations may modify positions or attributes, and path extraction may order points differently.

If you need to preserve exact path structure, keep the original and use the cluster conversion separately — or sample its attributes onto the final result.

## Related

- [Path Overview](/concepts/02-paths/) - Path fundamentals
- [Cluster Overview](README.md) - Cluster fundamentals
- [Building Clusters](building-clusters.md) - The "combine methods" philosophy
- [Pathfinding](/concepts/06-pathfinding/) - Finding routes through clusters
