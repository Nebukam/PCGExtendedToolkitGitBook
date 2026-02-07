---
icon: book
---

# Building Clusters

**There's no single method that gives you the perfect cluster. That's by design.** Some tools are broad — Delaunay connects everything into a dense triangulation. Others are surgical — Connect Points lets you define exactly which connections exist. The real workflow is building multiple clusters with different properties and fusing them together to get exactly what you need.

This is the canonical approach: generate, combine, refine. Not "pick the right algorithm." Pick several, merge their strengths.

### From Point Clouds

#### Geometric Diagrams

These methods connect everything at once. They're "shotgun" approaches — fast, comprehensive, and great as a starting layer that you refine or combine with more precise clusters.

**Delaunay Triangulation** creates triangular mesh-like connectivity. Every point connects to nearby points forming triangles where no point lies inside any triangle's circumcircle.

Properties:

* Dense connectivity
* No overlapping edges (in 2D projection)
* Maximizes minimum angles

**Voronoi Diagram** creates connections between neighboring Voronoi cells. Each cell contains all space closest to one Vtx than any other.

Properties:

* Dual of Delaunay
* Edges perpendicular to Delaunay edges
* Natural territorial partitioning

Both Delaunay and Voronoi have 2D and 3D variants. The 2D variants project onto a plane before computing, while 3D operates in full volumetric space.

#### Probe-Based Connection

**Connect Points** is the precise tool. You control exactly which connections form through configurable probes:

* **K-Nearest**: Connect each point to its K closest neighbors
* **Radius**: Connect all points within a distance threshold
* **Custom**: Probe-defined connection logic

Properties:

* Precise control over connection density
* Configurable through probe sub-nodes
* May produce asymmetric connections (A connects to B, but B might not connect to A depending on mode)

### From Grids

Grid-based cluster builders create regular connectivity:

* **4-way**: Cardinal directions (up, down, left, right)
* **8-way**: Cardinals plus diagonals
* **Custom**: Configurable neighbor patterns

Properties:

* Uniform spacing and connectivity
* Predictable structure
* Well-suited to tile-based operations

### From Meshes

**Mesh to Cluster** extracts mesh topology as cluster connectivity. Vtx appear at mesh vertex positions, Edges follow mesh edges.

This preserves mesh topology exactly and can extract from complex geometry.

### From Paths

**Paths to Cluster** connects path endpoints to form networks. Path points become Vtx, path segments become Edges, and endpoints can merge when close together.

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

**Decompose Clusters** does the opposite — it separates disconnected components. Each connected component becomes its own cluster.

### Quick Reference

| Method           | Character                                               |
| ---------------- | ------------------------------------------------------- |
| Delaunay         | Dense, comprehensive — good base layer                  |
| Voronoi          | Territorial partitioning — region boundaries            |
| Connect Points   | Precise, surgical — exactly the connections you specify |
| Grid builder     | Uniform, predictable — tile-based layouts               |
| Mesh to Cluster  | Topology extraction — inherit existing structure        |
| Paths to Cluster | Network from paths — merge at endpoints                 |
| Fuse Clusters    | Combine any of the above                                |

### After Building

Newly created clusters often need refinement: removing unwanted edges, filtering Vtx by criteria, subdividing long edges, computing additional attributes. See Refining Clusters for post-generation processing.

### Related

* Cluster Overview - Cluster fundamentals
* Refining Clusters - Post-generation processing
* Diagram Nodes - Delaunay, Voronoi node reference
