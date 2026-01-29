---
icon: vector-square
---

# Clusters

**Clusters are just two collections of regular points that describe relationships between positions in space.**

No special data types. No magic geometry. Just **two point datasets working together:**
1. **Vtx (Vertices)** - The positions/nodes you care about
2. **Edges** - Connections between those positions

That's it. The "magic" is that these connections are **explicit** rather than assumed (like distance-based queries), giving you precise control over relationships.

[[image placeholder: Split view showing Vtx points as spheres on left, Edge points as connecting lines on right, then combined view showing how they work together to form a graph structure]]

## The Core Insight

In standard PCG, if you want to know "which points are neighbors," you typically ask: _"What's within distance X?"_ This is **implicit** - you don't store the relationships, you compute them on demand.

In clusters, you **explicitly define** which points are neighbors. Point A connects to Point B because you said so, not because they're close. This fundamental difference unlocks:
- **Pathfinding** on custom network topologies
- **Flood fill** operations through connections
- **Zoning** based on connectivity
- **Layouts** that respect explicit relationships
- **Analysis** of graph properties (centrality, flow, etc.)

## Why Two Point Collections?

Think of it like a contacts list:

**Vtx = People** (your friends, their locations)
**Edges = Phone Numbers** (how to reach one person from another)

[[image placeholder: Diagram showing Vtx points labeled as "Person A", "Person B", "Person C", and Edge points labeled with "A→B", "B→C", showing the connection data]]

You can have the same people (Vtx) with different phone networks (Edges). For example:
- Family connections (one Edge collection)
- Work connections (different Edge collection)
- Friend connections (yet another Edge collection)

**Same Vtx, different Edges = different relationship networks.**

## What Makes Clusters Different from Paths?

| Paths | Clusters |
|-------|----------|
| Points connect in order (0→1→2→3) | Points connect arbitrarily (0 connects to 2, 5, and 7) |
| Linear/sequential | Graph/network |
| Each point has 1-2 neighbors | Each point can have any number of neighbors |
| Order matters | Connectivity matters |

[[image placeholder: Side-by-side comparison. Left: ordered path with sequential connections. Right: cluster with non-sequential, branching connections forming a network]]

Paths are a **special case** of clusters (linear chains), but clusters are much more flexible.

## The Mental Model

Think of clusters like **a city map**:
- **Vtx** = Intersections, landmarks, places
- **Edges** = Roads connecting them

You don't measure "as the crow flies" - you follow the roads. The roads tell you which places connect, regardless of distance.

[[image placeholder: City map showing intersections as Vtx points and roads as Edge connections, with an example showing how pathfinding follows edges not straight lines]]

## Key Rules to Remember

{% hint style="success" %}
**Rule #1: Vtx and Edges are both "just points"**\
They use standard PCG point data. You can read/write attributes with vanilla nodes. The relationships are stored in regular attributes (`PCGEx/` prefixed).
{% endhint %}

{% hint style="info" %}
**Rule #2: One Edge collection = One connected graph**\
Each Edge dataset represents a single interconnected network. Multiple networks = multiple Edge collections.
{% endhint %}

{% hint style="info" %}
**Rule #3: Edges need at least 2 Vtx to exist**\
No points = no connections.
{% endhint %}

{% hint style="warning" %}
**Rule #4: Don't manually remove points without sanitizing**\
If you use vanilla PCG nodes to delete Vtx or Edge points, run **Sanitize Clusters** before using them in other PCGEx nodes.
{% endhint %}

{% hint style="warning" %}
**Rule #5: Don't touch PCGEx/ attributes directly**\
These attributes store the connection data. Modifying them manually will break clusters. Let PCGEx nodes manage them.
{% endhint %}

## What Can You Do With Clusters?

Clusters enable graph-based operations:

**Generation:**
- Build graphs from point clouds (Delaunay, Voronoi, Connect Points, etc.)
- Create grid-based connectivity
- Extract topology from meshes

**Transformation:**
- Relax vertex positions based on neighbors
- Refine edges (remove, subdivide, filter)
- Merge multiple cluster networks

**Analysis:**
- Compute centrality measures
- Find shortest paths (pathfinding)
- Detect components and branches
- Measure graph properties

**Data Flow:**
- Flood fill attributes through connections
- Sample neighbor properties
- Propagate values along edges

**Output:**
- Convert clusters to paths (via pathfinding or edge extraction)
- Generate geometry based on connectivity
- Create splines following graph structure

## From Clusters to Everything Else

Clusters are the **foundation** for complex procedural systems:
- **Clusters → Paths:** Use pathfinding or edge-following to extract linear paths
- **Paths → Clusters:** Connect path endpoints to build networks
- **Clusters → Geometry:** Place meshes at Vtx, spawn along Edges
- **Clusters → Zoning:** Use flood fill to create connected regions

## Dive Deeper

Ready to understand how clusters really work?

{% content-ref url="clusters-fundamentals.md" %}
[clusters-fundamentals.md](clusters-fundamentals.md)
{% endcontent-ref %}

{% content-ref url="working-with-vtx-and-edges.md" %}
[working-with-vtx-and-edges.md](working-with-vtx-and-edges.md)
{% endcontent-ref %}

{% content-ref url="common-pitfalls.md" %}
[common-pitfalls.md](common-pitfalls.md)
{% endcontent-ref %}

## Visual Debugging

PCGEx includes subgraphs to visualize clusters in the editor. This is essential for understanding connectivity.

[[image placeholder: Editor viewport showing Vtx as colored spheres and Edges as lines connecting them, demonstrating a complex graph structure]]

{% hint style="success" %}
**Pro Tip:** Always visualize clusters when debugging. Network topology is impossible to understand from numbers alone.
{% endhint %}

## Important Technicalities

{% hint style="info" %}
Most cluster nodes share common settings. Read more in the [Clusters node library page](../../node-library/clusters/).
{% endhint %}

When working with clusters, remember:
1. **One Edge dataset = one connected graph.** Vtx can be shared across multiple Edge collections.
2. **Vtx are spatially sorted** (X, Y, Z order) when additions/deletions occur. Don't rely on index stability.
3. **You can modify attributes safely** without sanitization - only point addition/removal needs sanitization.

{% content-ref url="technical-note-clusters.md" %}
[technical-note-clusters.md](technical-note-clusters.md)
{% endcontent-ref %}

Ready to build your first cluster? Check out the Hello Cluster guides:

{% content-ref url="hello-cluster/" %}
[hello-cluster](hello-cluster/)
{% endcontent-ref %}
