---
icon: book
---

# Refining Clusters

**A generated cluster is a starting point, not a finished product.** Delaunay gives you a dense mesh of triangles; what you usually want is a subset of that — the connections that actually serve your layout. Refinement is how you get there.

Operations fall into several categories: edge removal, Vtx filtering, topology simplification, position optimization, and attribute enrichment. Most workflows chain a few of these together.

### Edge Refinement

#### Removing Edges

**Refine Edges** removes connections based on conditions: edge length thresholds, endpoint attribute conditions, or spatial criteria like crossing bounds or intersecting geometry.

<figure><img src="../../.gitbook/assets/placeholder-wide.jpg" alt=""><figcaption><p>Dense cluster becoming sparse after edge removal</p></figcaption></figure>

Common refinement operations:

* Remove edges longer than a threshold
* Remove edges where endpoints have different attribute values
* Remove edges crossing exclusion zones

This is where a dense Delaunay result turns into the sparse network you actually need.

#### Subdividing Edges

**Subdivide Edges** adds Vtx along edges, either by count (N new Vtx per edge) or by distance (one Vtx every X units).

<figure><img src="../../.gitbook/assets/placeholder-wide.jpg" alt=""><figcaption><p>Long edges gaining intermediate Vtx points</p></figcaption></figure>

Subdivision increases resolution along connections: more attachment points, higher pathfinding granularity, and finer control over per-edge operations.

### Vtx Refinement

#### Filtering Vtx

**Filter Vtx** removes vertices based on conditions: attribute filters (value comparisons), topology filters (neighbor count, degree), or spatial filters (within bounds, near reference).

When Vtx are removed:

* Edges with invalid endpoints become invalid
* "Prune Isolated" removes Vtx left with no connections
* Cascading effects can simplify topology significantly

#### Validity Marking

Refinement can mark Vtx as invalid without removing them. Indices remain stable and operations skip invalid Vtx. Run **Sanitize Clusters** to actually remove invalid elements and repack data.

### Topology Simplification

#### Fusing

**Fuse Clusters** merges close Vtx. Vtx within a threshold merge to one, edges update to reference merged Vtx, and duplicate edges can be removed or preserved.

<figure><img src="../../.gitbook/assets/placeholder-wide.jpg" alt=""><figcaption><p>Cluster with nearly-overlapping Vtx becoming cleaner after fusion</p></figcaption></figure>

#### Bridge Detection

**Find Bridges** identifies edges whose removal would disconnect the cluster. These are structurally critical connections — the load-bearing walls of your network.

#### Island Removal

**Prune Isolated** removes Vtx with no connections. This typically happens when all edges to a Vtx are removed during refinement. Cascading is configurable: removing an edge may create an isolated Vtx, which triggers more removal.

### Position Optimization

#### Relaxation

**Relax Clusters** moves Vtx toward optimal positions using spring forces, Lloyd relaxation, or custom constraints.

<figure><img src="../../.gitbook/assets/placeholder-wide.jpg" alt=""><figcaption><p>Irregular cluster becoming more evenly spaced after relaxation</p></figcaption></figure>

Relaxation preserves topology (same edges, same connections) but changes positions. More iterations approach equilibrium.

#### Projection

Move Vtx onto surfaces, snap to grids, or align to geometry: project to landscape, snap to grid positions, or align to reference geometry.

### Attribute Enrichment

#### Neighbor Sampling

**Sample Neighbors** computes Vtx attributes from connected neighbors: average of neighbor values, min/max among neighbors, count of neighbors meeting criteria.

<figure><img src="../../.gitbook/assets/placeholder-wide.jpg" alt=""><figcaption><p>Vtx colored by average neighbor attribute value</p></figcaption></figure>

#### Centrality Measures

Compute topological importance: degree (connection count), betweenness (how often a Vtx appears in shortest paths), closeness (average distance to all other Vtx), and more.

#### Edge Properties

Compute Edge attributes: length/distance, direction vectors, properties derived from endpoint Vtx.

### Combining Refinements

A typical workflow chains operations in sequence:

1. **Generate** (Delaunay, Connect Points)
2. **Filter edges** (remove by length, criteria)
3. **Filter Vtx** (remove by attribute, topology)
4. **Prune isolated** (clean up orphaned Vtx)
5. **Relax positions** (optimize spacing)
6. **Compute properties** (centrality, neighbor data)

Order matters. Filtering before relaxation produces different results than relaxing before filtering.

### Related

* [.](./ "mention") - Cluster fundamentals
* [building-clusters.md](building-clusters.md "mention") - Creating clusters
* [filters](../filters/ "mention") - Filter system used by refinement operations
