---
icon: triangle-exclamation
---

# Common Cluster Pitfalls

Clusters are more complex than paths, so there are more ways things can go wrong. Learn from these common mistakes.

## Pitfall #1: Forgetting to Sanitize After Manual Deletion

**The Problem:**
You use a vanilla PCG Filter node to remove some Vtx, then a PCGEx cluster node fails or produces garbage.

[[image placeholder: Graph showing Vtx → PCG Points Filter → Cluster Operation with error icon]]

**Why it happens:**
When you delete points with vanilla nodes, PCGEx doesn't know about it. The Edge indices still reference deleted Vtx, creating invalid connections.

**The Fix:**
Always use **Sanitize Clusters** after manual point deletion:

[[image placeholder: Correct graph showing Vtx → PCG Points Filter → Sanitize Clusters → Cluster Operations]]

{% hint style="danger" %}
**Critical Rule**\
Manual deletion = Sanitization required. No exceptions.
{% endhint %}

---

## Pitfall #2: Confusing Node Index with Point Index

// Hint : CPP only; Nodes don't expose the concept of node index

**The Problem:**
You're trying to read an attribute using a node index and getting wrong data or crashes.

**Why it happens:**
- **Point Index** = position in PCG point array
- **Node Index** = position in cluster topology

These can differ after filtering, merging, or sorting operations.

**The Fix:**
Use the right index for the right purpose:
- **Reading attributes** → Point Index
- **Traversing neighbors** → Node Index

{% hint style="success" %}
**For 99% of Cases**\
You don't need to think about this. PCGEx nodes handle it automatically. Only matters if you're writing blueprints/C++ that directly access cluster data.
{% endhint %}

---

## Pitfall #3: Edges Without Matching Vtx

**The Problem:**
You have Edge data but no Vtx data, or mismatched collections.

**Why it happens:**
- Deleted or lost Vtx collection in graph
- Connected wrong data to Vtx input
- Used edges from different cluster on wrong Vtx

**The Fix:**
- Always keep Vtx and Edges paired properly
- Use **Get Data from Named Pin** if you need to route them separately
- Check that Edge collections reference the correct Vtx collection

[[image placeholder: Node graph showing proper Vtx/Edges pairing with matching colors/labels]]

---

## Pitfall #4: Too Dense Connectivity = Performance Death

**The Problem:**
Cluster operations are extremely slow, editor freezes, or crashes.

**Why it happens:**
Generating a fully-connected graph with N points creates N*(N-1)/2 edges:
- 100 points = ~5,000 edges (okay)
- 1,000 points = ~500,000 edges (sluggish)
- 10,000 points = ~50 million edges (crash)

[[image placeholder: Graph showing exponential growth of edge count vs point count]]

**The Fix:**
Limit connectivity using:
- **Connect Points** with radius or K-nearest (instead of "all to all")
- **Refine Edges** to remove long/unnecessary edges
- **Subsample** Vtx before building clusters
- Use spatial partitioning (only connect within regions)

{% hint style="warning" %}
**Rule of Thumb**\
Keep average neighbor count under 10 for real-time operations. More than 20 neighbors per node = danger zone.
{% endhint %}

---

## Pitfall #5: Expecting Bidirectional Edge Attributes

**The Problem:**
You set an attribute on an edge expecting it to work in both directions, but it only works one way.

**Why it happens:**
While edges are *topologically* bidirectional (you can traverse A→B and B→A), they only store data once. Some operations interpret edge direction.

**The Fix:**
Understand which operations are direction-aware:
- **Pathfinding:** Uses specified heuristics to determine "forward"
- **Flow operations:** May use edge direction from Start→End
- **Most others:** Treat edges as undirected

If direction matters for your use case, some nodes have settings to control how direction is determined.

---

## Pitfall #6: Invalid Clusters After Aggressive Filtering

**The Problem:**
After filtering Vtx, cluster becomes invalid (all edges gone, disconnected nodes, empty output).

**Why it happens:**
Removing too many Vtx leaves:
- Isolated nodes with no connections
- Sub-networks smaller than min size
- All edges invalidated

**The Fix:**
- Check your filter logic (is it too aggressive?)
- Enable "Prune Isolated" to remove orphan nodes
- Use "Min Cluster Size" settings to skip degenerate clusters
- Review output in visual debugger

[[image placeholder: Dense cluster becoming sparse after filtering, with some isolated nodes marked as "will be pruned"]]

---

## Pitfall #7: Modifying PCGEx/ Attributes Manually

**The Problem:**
You use an Attribute Set node to modify `PCGEx/EdgeStart` or similar, and clusters break catastrophically.

**Why it happens:**
These attributes maintain cluster integrity. Changing them without updating internal structures corrupts the cluster.

**The Fix:**
**Never modify `PCGEx/` prefixed attributes directly.** Use PCGEx nodes to manage clusters.

{% hint style="danger" %}
**Hands Off PCGEx/ Attributes**\
Think of them like internal pointers in C++. Modifying them is like manual memory corruption - nothing good comes from it.
{% endhint %}

---

## Pitfall #8: Assuming Edges Are Geometry

**The Problem:**
You create a cluster and wonder why nothing renders.

**Why it happens:**
**Clusters don't create renderable geometry.** They're abstract connectivity data.

**The Fix:**
Understand the pipeline:
1. **Cluster** = topology/connectivity
2. **Spawn nodes** = place meshes at Vtx
3. **Spline Mesh nodes** = render along edges
4. **Custom mesh generation** = build geometry from topology

[[image placeholder: Pipeline showing Cluster → Spawn Static Mesh at Vtx → Spawn Spline Mesh along Edges → Rendered Result]]

---

## Pitfall #9: Losing Cluster Data in Multi-Step Workflows

**The Problem:**
You process clusters through multiple nodes and suddenly edges disappear.

**Why it happens:**
Some vanilla PCG nodes (like Transform Points) only process the main input and don't pass through secondary data like edges.

**The Fix:**
- Use **Named Pins** to preserve both Vtx and Edges through complex graphs
- Some PCGEx nodes have "Pass-through" options for edges
- Keep Vtx and Edges on separate branches until final merge

[[image placeholder: Graph showing correct routing with named pins preserving both Vtx and Edges]]

---

## Pitfall #10: Wrong Merge Threshold = Unwanted Fusing

**The Problem:**
When merging clusters, nearby Vtx accidentally fuse together, collapsing your structure.

[[image placeholder: Before/after showing distinct grid points becoming merged into fewer points when merge threshold is too large]]

**Why it happens:**
**Merge Vertices** combines Vtx within a distance threshold. Too large = aggressive merging.

**The Fix:**
- Set merge threshold carefully (should be smaller than minimum Vtx spacing)
- Use "Exact Match" mode if you only want identical positions merged
- Preview results before continuing pipeline

---

## Pitfall #11: Edge Directions Don't Match Spatial Layout

**The Problem:**
Pathfinding or flow operations go the "wrong way" through edges.

**Why it happens:**
Edge direction (Start→End) might not match your spatial expectations. For example, an edge might be stored as Bottom→Top when you expect Top→Bottom.

**The Fix:**
Most nodes with direction-aware behavior have settings to control direction interpretation:
- **Use Edge Direction:** Trust the Start→End order
- **Use Spatial Direction:** Compute direction from positions
- **Use Heuristic:** Use pathfinding heuristic to determine forward

---

## Pitfall #12: Pathfinding Returns No Paths

**The Problem:**
Pathfinding node returns empty output despite valid cluster.

**Why it happens:**
- **No path exists:** Start and End are in disconnected components
- **Cost too high:** Edge weights make path "too expensive" within budget
- **Invalid seeds:** Start or End points don't map to valid Vtx

**The Fix:**
- Use **Cluster Decomposition** first to verify connectivity
- Check edge weights aren't astronomical
- Visualize seed points to confirm they're on Vtx
- Increase pathfinding budget if needed

---

## Pitfall #13: Vtx Reordering Breaks Assumptions

**The Problem:**
You store Vtx indices elsewhere (in attributes, in external arrays) and after a cluster operation those indices are wrong.

**Why it happens:**
When Vtx are added or removed, PCGEx spatially sorts them (X, Y, Z order). Indices change.

**The Fix:**
- Don't rely on Vtx index stability across operations
- Use unique IDs stored in attributes instead of indices
- Re-query indices after cluster modifications

{% hint style="info" %}
**Spatial Sorting**\
Sorting is deterministic (always produces same order for same positions) but indices change when Vtx count changes.
{% endhint %}

---

## Pitfall #14: Flood Fill Doesn't Stop Where Expected

**The Problem:**
Flood fill spreads beyond where you thought it would stop.

[[image placeholder: Flood fill spreading past expected boundary because edge filter didn't catch all boundary edges]]

**Why it happens:**
- Filter doesn't catch all boundary edges
- Depth/distance limit set too high
- "Stop At" conditions not properly configured

**The Fix:**
- Visualize edges with debugging (color by filter pass/fail)
- Test filters independently before using in flood fill
- Use both distance AND step count limits
- Enable "Strict" mode if available

---

## Pitfall #15: Relaxation Makes Things Worse

**The Problem:**
After relaxation, cluster looks messier than before.

[[image placeholder: Nice layout becoming tangled mess after relaxation]]

**Why it happens:**
- Wrong relaxation method for your topology
- Too many iterations (overshooting optimal)
- Boundaries not properly constrained

**The Fix:**
- Try different relaxation algorithms
- Reduce iteration count (start with 10-20)
- Pin boundary Vtx (don't relax)
- Use lower influence strength

---

## Debugging Checklist

When clusters misbehave:

- [ ] Are Vtx and Edges properly paired?
- [ ] Did you sanitize after manual deletions?
- [ ] Is connectivity reasonable (< 10 neighbors per node average)?
- [ ] Are there isolated Vtx after filtering?
- [ ] Do edges reference valid Vtx indices?
- [ ] Are `PCGEx/` attributes unmodified?
- [ ] Is the cluster actually connected (use Decomposition to check)?
- [ ] Are seed points actually on Vtx?
- [ ] Is the log showing warnings or errors?

---

## Visualization is Your Friend

The #1 debugging tool for clusters:

[[image placeholder: Editor viewport showing cluster with Vtx as spheres and Edges as lines, with one invalid section highlighted]]

- Visualize clusters at every major step
- Color-code by attributes to understand data flow
- Check edge directions with arrow visualization
- Verify connectivity looks sensible

{% hint style="success" %}
**Pro Tip**\
Keep a Debug Cluster Visualization subgraph in your library and drop it in whenever something goes wrong.
{% endhint %}

---

## When to Ask for Help

If you've checked the above and clusters still break:
1. Simplify to minimal repro (smallest cluster, simplest operation)
2. Check with fresh test data (rule out data issues)
3. Review the specific node's documentation
4. Post in community with:
   - Graph screenshot
   - Cluster visualization
   - Log warnings/errors

Most cluster issues are:
- Missing sanitization
- Too dense connectivity
- Wrong data routing (Vtx/Edges mismatch)

Fix these fundamentals first.
