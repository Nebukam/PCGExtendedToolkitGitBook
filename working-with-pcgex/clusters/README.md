---
icon: hexagon-nodes
---

# Clusters

**Clusters are just two collections of regular points that describe relationships between positions in space.**

No special data types. No magic geometry. Just **two point datasets working together**: Vtx (vertices) for the locations you care about, and Edges for the connections between them.

The "magic" is that these connections are explicit rather than assumed. Instead of distance-based queries ("what's within X units?"), clusters let you define exactly which points are neighbors. This explicit connectivity is what makes pathfinding, flood fill, and graph analysis possible.

### Everything Is Points

Like paths, clusters don't introduce new data types. They use regular PCG points with specific attributes:

* **Vtx points** represent locations
* **Edge points** represent connections between Vtx
* Connection data is stored as `int64` attributes

<figure><img src="../../.gitbook/assets/image (307).png" alt=""><figcaption><p>Special debug subgraphs help with visualization</p></figcaption></figure>

Since it's all standard point data, vanilla PCG nodes work on cluster data. You can transform Vtx, filter Edges, and modify attributes with standard operations.

### The Dual-Dataset Pattern

Clusters always involve two point collections traveling together:

| Collection | Contains                          | Represents                  |
| ---------- | --------------------------------- | --------------------------- |
| **Vtx**    | Point positions and attributes    | The "nodes" of your network |
| **Edges**  | Connection indices and attributes | The "links" between nodes   |

<figure><img src="../../.gitbook/assets/image (308).png" alt=""><figcaption></figcaption></figure>

Most cluster operations have both Vtx and Edges input pins. Operations read from both, may modify both, and output both.

{% hint style="info" %}
Multiple clusters can reference the same Vtx collection with different Edge collections. This is common when generating multiple connectivity patterns from the same points.
{% endhint %}

### How Connections Are Stored

Each Vtx is assigned a unique ID, and each Edge point stores two of these IDs — a start and an end. Think of it like a database relationship:

<figure><img src="../../.gitbook/assets/image (309).png" alt=""><figcaption></figcaption></figure>

Edges reference Vtx by unique ID, not by point order. This means reordering, sorting, or shuffling your Vtx points won't break connectivity — the IDs travel with the points.

{% hint style="warning" %}
## Don't Modify Connection Attributes Manually

The ID attributes on Edges maintain cluster integrity. Use PCGEx nodes for topology modifications; they handle the bookkeeping automatically.
{% endhint %}

### Undirected Connections

Edges are undirected by default. An edge connecting Vtx A to Vtx B is traversable in both directions. There are no "one-way" edges in standard clusters.

Some operations (pathfinding, flow analysis) can interpret edges directionally at runtime, but the underlying data remains bidirectional.

### Neighbor Relationships

The value of clusters is fast neighbor queries. Without cluster topology, finding neighbors of a point means checking distance to every other point (O(N)). With clusters, finding neighbors of a Vtx is a direct edge lookup — O(K) where K is neighbor count, typically 3-8.

This is what makes pathfinding, flood fill, and graph analysis practical on large point sets.

### Attributes on Vtx vs Edges

Both collections carry custom attributes, but with different semantics:

**Vtx Attributes** describe locations: height, type, category, color, scale, rotation, or any per-location data.

**Edge Attributes** describe connections: distance, weight, cost, type, category, or any per-connection data.

This dual-attribute system models complex relationships precisely.

### Sanitization

If vanilla PCG nodes delete Vtx or Edge points, the cluster's connectivity data becomes invalid: edge indices point to removed elements or wrong positions. Run [cluster-sanitize.md](../../node-library/clusters/utilities/cluster-sanitize.md "mention") to rebuild connectivity before using the cluster with PCGEx nodes again.

{% hint style="warning" %}
Rebuilding cluster connectivity has a cost. Prefer PCGEx's built-in filtering and refinement nodes, which handle connectivity automatically and avoid the need for explicit sanitization.
{% endhint %}

All PCGEx cluster operations output valid clusters. Explicit sanitization is only needed after vanilla PCG nodes modify point counts.

> #### Why "Cluster" not "Graph"
>
> The term "graph" is overloaded in PCG contexts: it could mean the PCG graph editor, a graph data structure, or a graph visualization. PCGEx uses "cluster" to avoid confusion.
>
> When reading about graph algorithms (pathfinding, spanning trees), translate: "graph vertex" = Vtx, "graph edge" = Edge.

### In This Section

* [the-dual-dataset.md](the-dual-dataset.md "mention") - Working with Vtx and Edges together
* [building-clusters.md](building-clusters.md "mention") - Creating clusters from points, meshes, paths
* [refining-clusters.md](refining-clusters.md "mention") - Filtering, simplifying, modifying topology
* [cluster-path-interoperability.md](cluster-path-interoperability.md "mention") - Converting between clusters and paths

### Related

**Concepts:**

* [paths](../paths/ "mention") - The other core data structure
* [filters](../filters/ "mention") - Edge and Vtx filters
* [pathfinding](../pathfinding/ "mention") - Traversing clusters

**Node Library:**

* [clusters](../../node-library/clusters/ "mention") - Complete cluster operation reference
* [generate](../../node-library/clusters/generate/ "mention") - Delaunay, Voronoi, etc.
