---
icon: handshake
---

# Working with Vtx and Edges

Now that you understand what Vtx and Edges are, let's learn how to actually work with them in practice.

## Creating Your First Cluster

There are many ways to create clusters. Here are the most common starting points:

### From Point Clouds - Geometric Graphs

**Delaunay Triangulation:**
Creates triangular mesh-like connectivity between points.

[[image placeholder: Random point cloud on left, Delaunay triangulated version on right showing triangle connectivity]]

**When to use:** Dense, mesh-like connectivity, organic structures

---

**Voronoi Diagram:**
Creates connections between neighboring Voronoi cells.

[[image placeholder: Point cloud with Voronoi cells drawn, showing edge connections between adjacent cells]]

**When to use:** Territorial/zoning systems, region-based layouts

---

**Connect Points:**
Connect each point to its K-nearest neighbors or all points within radius.

[[image placeholder: Points with each point connected to its 3 nearest neighbors]]

**When to use:** Precise control over connection count, uniform connectivity

---

### From Grids

**Grid-based cluster builders** create regular connectivity patterns.

[[image placeholder: Grid of points with 4-way connectivity (cross pattern) vs 8-way connectivity (including diagonals)]]

**When to use:** Tile-based systems, regular layouts, game boards

---

### From Paths

**Paths to Cluster** connects path endpoints to form networks.

[[image placeholder: Multiple separate paths becoming interconnected at their endpoints]]

**When to use:** Road networks, river systems, cable routing

---

### From Meshes

**Mesh to Cluster** extracts mesh topology as cluster connectivity.

[[image placeholder: Static mesh with visible polygons becoming cluster with Vtx at vertices and Edges along mesh edges]]

**When to use:** Mesh-aware procedural generation, topology analysis

---

## Reading Vtx Attributes

Vtx are regular PCG points, so read attributes the normal way:

**With vanilla PCG nodes:**
- Attribute Expression
- Attribute Filter
- Copy Points
- Any standard PCG operation

**With PCGEx nodes:**
Most cluster nodes have settings to read from Vtx attributes for per-node behavior.

[[image placeholder: Node settings panel showing attribute selector for "Read Scale from Attribute"]]

{% hint style="success" %}
**Pro Tip**\
Store procedural data on Vtx (like "building height", "zone type") and use it to drive cluster operations.
{% endhint %}

---

## Reading Edge Attributes

Edges are also regular points, but you need to route them to the right input:

[[image placeholder: PCG graph showing cluster operation with separate Vtx and Edges input pins]]

**Common edge attributes:**
- Distance (automatically computed in many operations)
- Weight (for pathfinding costs)
- Type (road type, connection category, etc.)

---

## Modifying Vtx with Vanilla Nodes

You can use standard PCG nodes on Vtx:

**Safe Operations:**
- Set Attribute (change colors, scales, types)
- Transform Points (move, rotate, scale)
- Copy/Transfer Attributes

**Risky Operations:**
- Delete Points
- Points Filter (with deletion mode)
- Sample Data

{% hint style="warning" %}
**After Deleting Points**\
If you delete Vtx using vanilla nodes, run **Sanitize Clusters** before using them in other PCGEx cluster operations.
{% endhint %}

[[image placeholder: Graph showing Vtx → Vanilla Filter (deletes points) → Sanitize Clusters → Cluster Operations]]

---

## Modifying Edges with PCGEx Nodes

Most edge modification happens through PCGEx-specific nodes:

### Refine Edges

Filters edges based on conditions and removes unwanted connections.

[[image placeholder: Dense cluster becoming sparse cluster after edge refinement]]

**Common use cases:**
- Remove edges longer than threshold
- Keep only edges connecting similar types
- Remove edges crossing obstacles

---

### Subdivide Edges

Adds Vtx along edges, splitting them into smaller segments.

[[image placeholder: Cluster with long edges becoming cluster with additional Vtx inserted along those edges]]

**Common use cases:**
- Add detail to sparse clusters
- Create attachment points along connections
- Smooth out large gaps

---

### Filter Edges

Similar to Refine Edges but with more output options (keep, remove, mark).

---

## Sampling Neighbors

One of the most powerful cluster operations: reading attributes from neighboring Vtx.

**Sample Neighbors node** lets you:
- Get average of neighbor attributes
- Find min/max among neighbors
- Count neighbors meeting conditions
- Blend neighbor values

[[image placeholder: Center Vtx highlighted with arrows showing it reading "height" attribute from all connected neighbors, then computing average]]

**Use cases:**
- Smoothing attributes across connectivity
- Propagating values through networks
- Computing derived properties (e.g., "average neighbor density")

---

## Flood Fill Operations

Spread attributes through cluster connectivity like water filling a network.

[[image placeholder: Animated-style sequence showing attribute spreading from seed Vtx through connections, reaching further nodes step by step]]

**Flood Fill Clusters node:**
- Start from seed points
- Spread through edges up to distance/step limit
- Can respect filters (e.g., don't cross "wall" edges)

**Use cases:**
- Zoning (fill connected regions)
- Territory assignment
- Distance-based property assignment

---

## Pathfinding

Find shortest paths between Vtx following cluster connectivity.

[[image placeholder: Cluster with two Vtx marked as start/end, showing shortest path highlighted in different color]]

**Pathfinding nodes:**
- Find Single Path (A* between two points)
- Find All Paths (from each point in a set to targets)
- Explore Graph (find reachable nodes within budget)

**Edge weights:**
Can use edge distance, custom cost attributes, or computed heuristics.

---

## Writing Cluster Properties

**Write Vtx Properties:**
Computes and writes properties like:
- Neighbor count (degree/valency)
- Position relative to cluster bounds
- Centrality measures

**Write Edge Properties:**
Computes and writes properties like:
- Edge length/distance
- Edge angles
- Connectivity metrics

[[image placeholder: Cluster before/after showing Vtx colored by neighbor count (blue=few, red=many connections)]]

---

## Filtering Vtx with Topology Awareness

**Filter Vtx** node has special modes:
- **Output Complete:** Full cluster with filtered Vtx marked invalid
- **Output Valid Only:** New cluster with only passing Vtx
- **Output Attributes:** Just marks which passed/failed

**Smart edge handling:**
When Vtx are removed, edges can:
- Be removed if either endpoint is invalid
- Be kept if both endpoints are valid
- Be updated to maintain connectivity

{% hint style="info" %}
**Cascading Filters**\
Removing Vtx can isolate other Vtx (leaving them with no connections). Enable "Prune Isolated" to clean these up automatically.
{% endhint %}

---

## Relaxation (Position Optimization)

**Relax Clusters** moves Vtx toward optimal positions based on neighbors.

[[image placeholder: Before/after showing irregular cluster becoming more evenly spaced after relaxation]]

**Relaxation methods:**
- Spring forces (edges act like springs)
- Uniform distribution (equalize distances)
- Custom algorithms

**Use cases:**
- Clean up procedural layouts
- Optimize spacing
- Create natural-looking networks

---

## Merging Clusters

**Merge Vertices** combines multiple Vtx collections into one unified network.

[[image placeholder: Two separate clusters merging into one larger interconnected cluster]]

**Merge behavior:**
- Close Vtx are merged (within threshold)
- Edges are preserved and updated
- Attributes can be averaged or prioritized

**Use cases:**
- Combining procedural layers (roads + pedestrian paths)
- Stitching generated regions
- Building complex networks from simple pieces

---

## Extracting Data from Clusters

### To Paths

**Break Clusters to Paths:**
Converts edges into individual path sequences.

[[image placeholder: Cluster with branching connections becoming multiple separate linear paths]]

**Pathfinding:**
Extracts specific paths based on start/end criteria.

---

### To Points

**Copy Points from Vtx:**
Extracts Vtx as standalone points (loses connectivity).

**Copy Points from Edges:**
Extracts edge midpoints as standalone points.

---

### To Geometry

**Spawn at Vtx:**
Places meshes/actors at Vtx locations.

**Spawn along Edges:**
Places meshes along edge paths.

[[image placeholder: Cluster with mesh pieces spawned at each Vtx and spline meshes along each edge]]

---

## Decomposition & Partitioning

**Cluster Decomposition:**
Breaks cluster into connected components.

[[image placeholder: Single cluster with 3 disconnected sub-networks being split into 3 separate clusters]]

**Partition Vertices:**
Separates Vtx into multiple collections based on attributes.

**Use cases:**
- Separate disconnected networks
- Split by region/type
- Isolate components for independent processing

---

## Common Workflows

### Building Generator (Delaunay + Refine)
1. Create points (random sampling in bounds)
2. Build Delaunay Graph (mesh connectivity)
3. Refine Edges (remove long edges, keep local connections)
4. Filter Vtx (keep interesting positions)
5. Spawn buildings at Vtx

---

### Road Network (Paths + Merge + Pathfinding)
1. Create road spine paths
2. Convert paths to clusters
3. Merge clusters (connects intersections)
4. Pathfinding (find routes between points)
5. Extract paths, spawn road meshes

---

### Territory System (Voronoi + Flood Fill)
1. Create territory seed points
2. Build Voronoi Graph
3. Flood fill from seeds (spread "faction" attribute)
4. Filter edges crossing faction boundaries
5. Create borders from filtered edges

---

## Next: Avoiding Mistakes

{% content-ref url="common-pitfalls.md" %}
[common-pitfalls.md](common-pitfalls.md)
{% endcontent-ref %}
