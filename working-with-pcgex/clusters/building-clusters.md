---
icon: book
---

# Building Clusters

**There's no single method that gives you the perfect cluster. That's by design.** Some tools are broad — Delaunay connects everything into a dense triangulation. Others are surgical — Connect Points lets you define exactly which connections exist. The real workflow is building multiple clusters with different properties and fusing them together to get exactly what you need.

This is the canonical approach: generate, combine, refine. Not "pick the right algorithm." Pick several, merge their strengths.

### From Point Clouds

#### Geometric Diagrams

These methods connect everything at once. They're "shotgun" approaches — fast, comprehensive, and great as a starting layer that you refine or combine with more precise clusters.

[cluster-delaunay-2d.md](../../node-library/clusters/generate/cluster-delaunay-2d.md "mention") creates triangular mesh-like connectivity. Every point connects to nearby points forming triangles where no point lies inside any triangle's circumcircle.

<figure><img src="../../.gitbook/assets/placeholder-wide.jpg" alt=""><figcaption><p>Random point cloud transformed into Delaunay triangulation showing triangle connectivity</p></figcaption></figure>

Properties:

* Dense connectivity
* No overlapping edges (in 2D projection)
* Maximizes minimum angles

[cluster-voronoi-2d.md](../../node-library/clusters/generate/cluster-voronoi-2d.md "mention") creates connections between neighboring Voronoi cells. Each cell contains all space closest to one Vtx than any other.

<figure><img src="../../.gitbook/assets/placeholder-wide.jpg" alt=""><figcaption><p>Points with Voronoi cell boundaries, edges connecting adjacent cell centers</p></figcaption></figure>

Properties:

* Dual of Delaunay
* Edges perpendicular to Delaunay edges
* Natural territorial partitioning

Both Delaunay and Voronoi have 2D and 3D variants. The 2D variants project onto a plane before computing, while 3D operates in full volumetric space.

#### Probe-Based Connection

[cluster-connect-points](../../node-library/clusters/generate/cluster-connect-points/ "mention") is the precise tool. You control exactly which connections form through configurable probes:

* **K-Nearest**: Connect each point to its K closest neighbors
* **Radius**: Connect all points within a distance threshold
* **Custom**: Probe-defined connection logic

<figure><img src="../../.gitbook/assets/placeholder-wide.jpg" alt=""><figcaption><p>Points with K-nearest connections (K=3), showing each point connected to exactly 3 others</p></figcaption></figure>

Properties:

* Precise control over connection density
* Configurable through probe sub-nodes
* May produce asymmetric connections (A connects to B, but B might not connect to A depending on mode)

### From Grids

Grid-based cluster builders create regular connectivity:

* **4-way**: Cardinal directions (up, down, left, right)
* **8-way**: Cardinals plus diagonals
* **Custom**: Configurable neighbor patterns

<figure><img src="../../.gitbook/assets/placeholder-wide.jpg" alt=""><figcaption><p>Grid showing 4-way vs 8-way connectivity patterns</p></figcaption></figure>

Properties:

* Uniform spacing and connectivity
* Predictable structure
* Well-suited to tile-based operations

### From Meshes

[mesh-to-clusters.md](../../node-library/clusters/generate/mesh-to-clusters.md "mention") extracts mesh topology as cluster connectivity. Vtx appear at mesh vertex positions, Edges follow mesh edges.

<figure><img src="../../.gitbook/assets/placeholder-wide.jpg" alt=""><figcaption><p>Static mesh becoming cluster with same vertex/edge structure</p></figcaption></figure>

This preserves mesh topology exactly and can extract from complex geometry.

### From Paths

[path-to-clusters.md](../../node-library/clusters/interop/path-to-clusters.md "mention") connects path endpoints to form networks. Path points become Vtx, path segments become Edges, and endpoints can merge when close together.

<figure><img src="../../.gitbook/assets/placeholder-wide.jpg" alt=""><figcaption><p>Separate path segments becoming interconnected cluster at meeting points</p></figcaption></figure>

The merging threshold controls when endpoints connect, turning independent path segments into a navigable network.

### Combining Clusters

This is where the real power is. **Fuse Clusters** merges multiple clusters into one: close Vtx merge within a threshold, edges update to reference merged Vtx, and attributes can be averaged or prioritized.

The typical pattern:

1. Generate a broad cluster (Delaunay) for baseline connectivity
2. Generate a precise cluster (Connect Points) for specific connections you know you want
3. Fuse them together
4. Refine the result — remove what you don't need

Each generation method has a different personality. Delaunay gives you everything but lets you trim. K-Nearest gives you controlled density. Voronoi gives you territorial boundaries. None of them alone is the "right" answer for a complex layout. Combining them is.

{% hint style="success" %}
Think of cluster generation methods as ingredients, not solutions. The final cluster is a recipe.
{% endhint %}

#### Decomposition

[Broken link](/broken/pages/AOTY2nXtIncmlNZiY71n "mention") does the opposite — it separates disconnected components. Each connected component becomes its own cluster.

### Quick Reference

| Method                                                                                           | Character                                               |
| ------------------------------------------------------------------------------------------------ | ------------------------------------------------------- |
| [cluster-delaunay-2d.md](../../node-library/clusters/generate/cluster-delaunay-2d.md "mention")  | Dense, comprehensive — good base layer                  |
| [cluster-voronoi-2d.md](../../node-library/clusters/generate/cluster-voronoi-2d.md "mention")    | Territorial partitioning — region boundaries            |
| [cluster-connect-points](../../node-library/clusters/generate/cluster-connect-points/ "mention") | Precise, surgical — exactly the connections you specify |
| [mesh-to-clusters.md](../../node-library/clusters/generate/mesh-to-clusters.md "mention")        | Topology extraction — inherit existing structure        |
| [path-to-clusters.md](../../node-library/clusters/interop/path-to-clusters.md "mention")         | Network from paths — merge at endpoints                 |
| [cluster-fuse.md](../../node-library/clusters/refine/cluster-fuse.md "mention")                  | Combine any of the above                                |

### After Building

Newly created clusters often need refinement: removing unwanted edges, filtering Vtx by criteria, subdividing long edges, computing additional attributes. See [refining-clusters.md](refining-clusters.md "mention") for post-generation processing.

### Related

* [.](./ "mention") - Cluster fundamentals
* [refining-clusters.md](refining-clusters.md "mention") - Post-generation processing
* [generate](../../node-library/clusters/generate/ "mention") - Delaunay, Voronoi node reference
