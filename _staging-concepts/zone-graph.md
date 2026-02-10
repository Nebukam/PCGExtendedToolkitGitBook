---
icon: road
---

# Zone Graph

**Clusters already describe connectivity. Zone Graph just needs that connectivity in the right shape.** PCGEx bridges the two with a single node that reads your cluster topology and outputs fully configured `UZoneShapeComponent` actors, complete with roads, intersections, per-connection lane profiles, and optional path data for downstream use.

{% hint style="warning" %}
The Zone Graph module is a **separate plugin** that must be built from source — it's not available on FAB. See [Installation](zone-graph-installation.md) for setup instructions, or grab it directly from [GitHub](https://github.com/Nebukam/PCGExtendedToolkitZoneGraph).
{% endhint %}

<!-- IMAGE: PCG graph showing a cluster (Vtx + Edges) feeding into the Cluster to Zone Graph node, with the viewport showing the resulting Zone Graph spline roads and polygon intersections overlaid on the original cluster wireframe -->

### One Node, Two Shape Types

**Cluster to Zone Graph** decomposes your cluster into chains and junctions, then creates the appropriate Zone Graph shape for each:

| Cluster Feature | Zone Graph Output | Shape Type |
|-----------------|-------------------|------------|
| Chain (sequence between junctions) | Road | Spline |
| Junction (3+ connections) | Intersection | Polygon |
| Leaf endpoint | Road terminus | _(no shape)_ |

Non-leaf nodes with three or more edges become polygon intersections. Everything between them becomes a spline road. Leaf nodes are just road endpoints. That's the core of it.

<!-- IMAGE: Side-by-side comparison. Left: a simple cluster with labeled junctions (A, B) and chains between them. Right: the Zone Graph result showing spline roads as colored lanes and polygon intersections as circular connection hubs at A and B -->

### Smart Intersections

Intersections aren't just circles dropped at junction nodes. Each connection point on a polygon gets its own lane profile inherited from the road it connects to, so a two-lane residential street and a four-lane arterial can meet at the same intersection and Zone Graph routes between them correctly.

The node also supports **auto-radius** computation. Instead of guessing intersection sizes, the node can derive polygon radii from the lane profiles of connected roads. A wide four-lane road will automatically produce a larger connection footprint than a narrow alley. You choose the strategy: widest single lane, half the total profile width, or use those as minimum bounds on a manual radius.

### Per-Edge Lane Profiles

Lane profile overrides read from **edge** attributes, not vertices. Each road resolves its profile via **majority vote** across its chain's edges. If a chain has five edges and three of them carry profile name `Highway`, that road becomes a Highway. This means you can paint lane profiles directly onto edges upstream and let the node figure out the rest.

Each polygon connection point then receives that road's resolved profile automatically. No manual matching needed.

### Path Outputs

Beyond creating Zone Graph components, the node can output the generated geometry as PCG path data on two optional pins:

- **Polygon Paths**: Each intersection outputs as a closed path. Points are placed in left/right pairs at each connection, capturing the polygon's full boundary with lane-width spacing.
- **Road Paths**: Each road outputs as an open path with `ArriveTangent` and `LeaveTangent` vector attributes, preserving the spline tangent data from the compiled Zone Graph shape.

This path data is useful for downstream visualization, debugging, or feeding into other PCGEx path operations.

### Per-Point Attribute Overrides

Every Zone Graph property can be driven by a point attribute. Toggle the override, point it at an attribute name, and each vertex or edge reads its own value:

| Property | Source | Attribute Type | Default Name |
|----------|--------|---------------|-------------|
| Polygon Radius | Vtx | `double` | `ZG.PolygonRadius` |
| Polygon Routing | Vtx | `int32` | `ZG.PolygonRoutingType` |
| Polygon Point Type | Vtx | `int32` | `ZG.PolygonPointType` |
| Road Point Type | Vtx | `int32` | `ZG.RoadPointType` |
| Lane Profile | Edges | `FName` | `ZG.LaneProfile` |
| Intersection Tags | Vtx | `int32` | `ZG.IntersectionTags` |

A single cluster can produce roads with different lane profiles, intersections with different radii, and connection points with different shape types.

{% hint style="warning" %}
**Editor-only.** This node should not be used in runtime-generated PCG components. It creates `UZoneShapeComponent` actors that require editor context and will abort with an error if it detects a runtime generation trigger.
{% endhint %}

{% hint style="info" %}
Lane profile names resolve against the profiles registered in your project's **Zone Graph Settings** (`Project Settings > Zone Graph`). Unrecognized names fall back to the default lane profile.
{% endhint %}

### Screenshot Suggestions

<!-- IMAGE: "Full pipeline" — A PCG graph with point generation → Build Delaunay 2D → Cluster to Zone Graph, showing the complete flow from scattered points to navigable Zone Graph lanes in the viewport -->

<!-- IMAGE: "Auto-radius comparison" — Same cluster processed with AutoRadius Disabled (uniform small polygons) vs HalfProfile (polygons sized to match their connected roads' lane widths) -->

<!-- IMAGE: "Per-edge lane profiles" — A cluster where edges are colored by lane profile attribute, showing the resulting Zone Graph with different lane widths on different roads meeting at shared intersections -->

<!-- IMAGE: "Path outputs" — The Road Paths and Polygon Paths output pins connected to downstream path visualization, showing tangent vectors on roads and closed polygon boundaries at intersections -->

<!-- IMAGE: "Break Conditions" — Two results from the same cluster: one without break conditions (fewer, larger intersections) and one with break conditions filtering on a custom attribute (more intersection polygons, shorter road segments) -->

<!-- IMAGE: "Detail panel" — The node's detail panel in the PCG graph editor, showing the ZoneGraph settings category expanded with auto-radius mode, polygon radius, routing type, point type, and lane profile fields visible -->

### Related

* [clusters](../working-with-pcgex/clusters/ "mention") - Building and processing the cluster data that feeds this node
* [topology](../working-with-pcgex/additional-systems/topology.md "mention") - Similar concept: converting clusters to renderable geometry
