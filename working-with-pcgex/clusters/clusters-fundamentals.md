---
icon: book-open
---

# Cluster Fundamentals

Let's dig deeper into how clusters actually work and what happens behind the scenes (without getting too technical).

## The Two-Dataset Pattern

When you work with clusters, you're always juggling two point collections:

[[image placeholder: Node graph showing Vtx input pin and Edges input pin connecting to a cluster operation node]]

### Vtx (Vertices) - The "What"

Vtx points represent **the things you care about**:
- Spatial positions (intersections, landmarks, nodes)
- Attributes (height, type, color, etc.)
- Properties (rotation, scale, density)

**Key insight:** Vtx are normal PCG points. They have position, rotation, scale, and any custom attributes you want. Nothing special here.

### Edges - The "How They Connect"

Edge points represent **connections between Vtx**:
- Each edge point stores two indices (Start and End Vtx)
- Edge position is automatically set to the midpoint between connected Vtx
- Edges can have their own attributes (distance, type, weight, etc.)

**Key insight:** Edges are also normal PCG points. They just happen to store connection info in attributes.

[[image placeholder: Diagram showing 3 Vtx points and 2 Edge points. Arrows showing how Edge[0] stores "connects Vtx 0 to Vtx 1" and Edge[1] stores "connects Vtx 1 to Vtx 2"]]

## How Connection Data is Stored

The connection information lives in standard attributes on Vtx & Edge points as `int64` attributes containing connectivity data.  
That's it. Just regular PCG attributes anyone can read (but shouldn't modify).

{% hint style="info" %}
**You Can Inspect These**\
Open the Point Inspector in the PCG editor and look at Edge points. You'll see the indices right there in the attributes list.
{% endhint %}

{% hint style="danger" %}
**But Don't Modify Them**\
While you *can* see and read these attributes, **never modify them manually**. Use PCGEx nodes to maintain consistency.
{% endhint %}

## The Cluster Mental Model

Think of a cluster as a **relationship database**:

```
Vtx Table:
  Index | Position    | CustomAttr
  ------|-------------|------------
  0     | (0,0,0)     | "House"
  1     | (100,0,0)   | "Store"
  2     | (50,50,0)   | "Park"

Edges Table:
  Index | Start | End | Distance
  ------|-------|-----|----------
  0     | 0     | 1   | 100
  1     | 1     | 2   | 70.7
  2     | 0     | 2   | 70.7
```

The Edges "table" references rows in the Vtx "table" by index. This is exactly how database foreign keys work.

[[image placeholder: Database-style diagram showing Vtx table with 3 rows and Edges table with 3 rows, with arrows showing foreign key relationships]]

// Technical segue
## Node Index vs Point Index

This is a crucial concept that trips up many users:

- **Point Index:** Position in the PCG point data array (for reading/writing attributes)
- **Node Index:** Position in the cluster topology (for neighbor queries)

Most of the time these are the same, but they can differ when:
- Vtx are filtered (some become invalid but stay in the array)
- Clusters are merged
- Vtx are sorted spatially

**Rule of thumb:**
- Use **Point Index** when reading/writing attributes
- Use **Node Index** when traversing connections

{% hint style="success" %}
**For 99% of Use Cases**\
You won't need to think about this. PCGEx nodes handle the mapping automatically. Only matters for advanced blueprint/C++ integration.
{% endhint %}

## Undirected Connections

Edges in PCGEx clusters are **undirected** by default:

[[image placeholder: Two Vtx points with an edge between them, labeled "Edge from 0→1 also means edge from 1→0"]]

This means:
- If Edge connects Vtx A to Vtx B
- Then you can traverse from A→B **and** B→A

There's no "half edges" - the connection works both ways automatically.

{% hint style="info" %}
**When Direction Matters**\
Some operations (like pathfinding or flow analysis) let you specify how to determine "forward" direction at the time of use. The edge itself remains undirected.  
{% endhint %}

## Neighbor Relationships

The power of clusters is fast neighbor queries:

**Without clusters:**
```
"Find neighbors of Point 5"
→ Check distance to all other points
→ O(N) operation, slow with many points
```

**With clusters:**
```
"Find neighbors of Vtx 5"
→ Look up edges connected to Node 5
→ O(K) operation where K = neighbor count, typically 3-8
```

[[image placeholder: Performance graph showing linear vs constant time for neighbor lookup as point count increases]]

This is why clusters enable real-time pathfinding, flood fill, and graph analysis - you don't re-compute relationships every frame.

## Attributes on Vtx vs Edges

Both Vtx and Edges can have custom attributes, and they mean different things:

### Vtx Attributes (Properties of Places)
- Building height
- Terrain type
- Zone designation
- Color, material, etc.

### Edge Attributes (Properties of Connections)
- Road type (highway, street, path)
- Travel time/cost
- Capacity/width
- Connection quality

[[image placeholder: City map with Vtx colored by zone (residential=green, commercial=blue) and Edges colored by road type (highway=red, street=yellow)]]

This dual-attribute system lets you model complex relationships precisely.

## Valid vs Invalid Elements

Clusters support **soft deletion** via validity flags:

- Vtx and Edges have a `bValid` flag
- Invalid elements stay in the array (preserving indices)
- Operations skip invalid elements

**Why not just delete them?**
- Deleting from arrays is expensive (requires re-indexing everything)
- Marking invalid is O(1), deletion is O(N)
- You can "un-invalid" elements later if needed

{% hint style="info" %}
**Sanitize Clusters**\
After filtering operations that create lots of invalid elements, use **Sanitize Clusters** to clean up and pack the data efficiently.
{% endhint %}

## Cluster Boundaries & Octrees

PCGEx automatically maintains spatial acceleration structures:

- **Bounding boxes** around Vtx and Edge collections
- **Octrees** for fast "nearest neighbor" queries
- **Rebuilt automatically** when positions change

You don't need to manage these - they're created on-demand and cached.

## Closed vs Open Networks

Unlike paths, clusters don't have an explicit "closed" flag because:
- Clusters are **graphs**, not sequences
- They can have cycles, branches, loops, dead-ends all in the same structure
- Topology is determined by connectivity, not a flag

[[image placeholder: Complex cluster showing mixed topology: some areas form loops, others have dead-ends, some branch into trees]]

## What Happens When You Modify Clusters

Different operations have different effects:

**Safe Modifications (No Sanitization Needed):**
- Changing Vtx positions
- Modifying attributes on Vtx or Edges
- Changing properties (rotation, scale, color, etc.)

**Requires Sanitization:**
- Deleting Vtx points with vanilla nodes
- Deleting Edge points with vanilla nodes
- Manually adding points to collections

**Automatically Handled by PCGEx:**
- Operations like Refine Edges, Filter Vtx
- Cluster generation nodes
- Merge operations

{% hint style="success" %}
**99% of the Time**\
Use PCGEx nodes for cluster modifications and you'll never need to sanitize manually.
{% endhint %}

## The Cluster Lifecycle

Typical workflow:

1. **Generate** - Create initial cluster (Delaunay, Connect Points, from paths, etc.)
2. **Refine** - Remove unwanted edges, add subdivisions, filter Vtx
3. **Enrich** - Compute properties (centrality, distances, attributes)
4. **Analyze/Transform** - Pathfinding, flood fill, relaxation, etc.
5. **Output** - Convert to paths, spawn geometry, export data

[[image placeholder: Flow diagram showing these 5 stages with example node types at each stage]]

## Next Steps

Now that you understand the fundamentals, learn how to actually work with Vtx and Edges:

{% content-ref url="working-with-vtx-and-edges.md" %}
[working-with-vtx-and-edges.md](working-with-vtx-and-edges.md)
{% endcontent-ref %}
