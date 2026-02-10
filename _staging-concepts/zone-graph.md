---
icon: road
---

# Zone Graph

**Clusters already describe connectivity. Zone Graph just needs that connectivity in the right shape.** PCGEx bridges the two with a single node that reads your cluster topology and outputs fully configured `UZoneShapeComponent` actors — roads, intersections, lane profiles, and all.

<!-- IMAGE: PCG graph showing a cluster (Vtx + Edges) feeding into the Cluster to Zone Graph node, with the viewport showing the resulting Zone Graph spline roads and polygon intersections overlaid on the original cluster wireframe -->

### One Node, Two Shape Types

**Cluster to Zone Graph** decomposes your cluster into chains and junctions, then creates the appropriate Zone Graph shape for each:

| Cluster Feature | Zone Graph Output | Shape Type |
|-----------------|-------------------|------------|
| Chain (sequence between junctions) | Road | Spline |
| Junction (3+ connections) | Intersection | Polygon |
| Leaf endpoint | Road terminus | _(no shape — road simply ends)_ |

That's the core of it. Non-leaf nodes with three or more edges become polygon intersections. Everything between them becomes a spline road. Leaf nodes are just road endpoints.

<!-- IMAGE: Side-by-side comparison. Left: a simple cluster with labeled junctions (A, B) and chains between them. Right: the Zone Graph result showing spline roads as colored lanes and polygon intersections as circular connection hubs at A and B -->

### How the Decomposition Works

The node walks the cluster's edge connectivity and identifies **chains** — unbroken sequences of binary nodes (exactly two connections) bounded by junctions or leaves. Each chain becomes one spline-shaped road component.

At every junction, the node creates a polygon-shaped intersection. Connected roads are ordered radially around the junction center, and each connection point sits at a configurable **polygon radius** from center. Road endpoints are offset inward by the same radius so they meet the intersection boundary cleanly.

```
Cluster                          Zone Graph
═══════                          ══════════

    C                            Road: A → B → C  (spline)
    │                            Road: D → E → F  (spline)
    B───E───F                    Road: B → E      (spline)
    │   │
    A   D                        Polygon at B  (3 connections)
                                 Polygon at E  (3 connections)
```

Optional **Break Conditions** filters let you force additional points to act as chain boundaries — turning what would be a mid-road point into a junction with its own intersection polygon.

### Per-Point Attribute Overrides

Every Zone Graph property can be driven by a point attribute instead of using a single value for the whole cluster. Toggle the override, point it at an attribute name, and each vertex reads its own value:

| Property | Attribute Type | Default Attribute Name |
|----------|---------------|----------------------|
| Polygon Radius | `double` | `ZG.PolygonRadius` |
| Polygon Routing Type | `int32` (0=Bezier, 1=Arcs) | `ZG.PolygonRoutingType` |
| Polygon Point Type | `int32` (0-3) | `ZG.PolygonPointType` |
| Road Point Type | `int32` (0-3) | `ZG.RoadPointType` |
| Lane Profile | `FName` | `ZG.LaneProfile` |
| Intersection Tags | `int32` (bitmask) | `ZG.IntersectionTags` |

This means a single cluster can produce roads with different lane profiles, intersections with different radii, and connection points with different shape types — all controlled by attributes you set upstream.

<!-- IMAGE: A cluster where different vertices have different ZG.PolygonRadius values, showing the resulting Zone Graph with visibly larger intersection polygons at high-radius nodes and smaller ones at low-radius nodes -->

### Direction and Edge Sorting

Road traversal order matters for Zone Graph — lanes have a forward direction. The node uses PCGEx's standard **Edge Direction Settings** to determine which way each chain is walked. If your cluster has directional attributes, they'll be respected.

{% hint style="warning" %}
**Editor-only.** This node should not be used in runtime-generated PCG components. It creates `UZoneShapeComponent` actors that require editor context. The node will log an error and abort if it detects a runtime generation trigger.
{% endhint %}

{% hint style="info" %}
Lane profile overrides resolve by name against the profiles registered in your project's **Zone Graph Settings** (`Project Settings > Zone Graph`). Unrecognized names fall back to the default lane profile.
{% endhint %}

### Screenshot Suggestions

<!-- IMAGE: "Full pipeline" — A PCG graph with point generation → Build Delaunay 2D → Cluster to Zone Graph, showing the complete flow from scattered points to navigable Zone Graph lanes in the viewport -->

<!-- IMAGE: "Break Conditions" — Two results from the same cluster: one without break conditions (fewer, larger intersections) and one with break conditions filtering on a custom attribute (more intersection polygons, shorter road segments) -->

<!-- IMAGE: "Viewport overlay" — The Unreal viewport with Zone Graph visualization enabled, showing colored lanes, intersection routing arcs, and the original cluster debug lines overlaid for comparison -->

<!-- IMAGE: "Detail panel" — The node's detail panel in the PCG graph editor, showing the ZoneGraph settings category expanded with polygon radius, routing type, point type, and lane profile fields visible -->

### Related

* [clusters](../working-with-pcgex/clusters/ "mention") - Building and processing the cluster data that feeds this node
* [topology](../working-with-pcgex/additional-systems/topology.md "mention") - Similar concept: converting clusters to renderable geometry
