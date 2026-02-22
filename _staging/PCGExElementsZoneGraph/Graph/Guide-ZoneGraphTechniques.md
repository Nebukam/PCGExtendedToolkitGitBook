---
icon: book-open
description: 'Guide: Practical techniques for Cluster to Zone Graph'
---

# Zone Graph Techniques

**The default decomposition gets you 80% of the way.** Clusters become roads and intersections automatically. These techniques cover the remaining 20%, where you need to control *where* intersections appear, *how large* they are, how roads connect to them cleanly, and how lane profiles flow through the network.

Each section pairs a feature with the settings that control it.

---

## Forced Intersections with Break Conditions

By default, the node only creates polygon intersections at vertices with three or more connections. Vertices along a straight chain become part of a road, no intersection. But sometimes you want an intersection on a straight segment.

**The Break Conditions filter pin** lets you mark specific vertices as chain-breaking points. Any vertex that passes the filter becomes a polygon, even if it only has two connections. The chain is split at that vertex, producing two shorter roads that meet at a new intersection polygon.

This is especially useful for producing clean arc turns. Without a forced intersection, two roads meeting at a gentle angle just become one continuous spline. Zone Graph routes through it as a straight road. With a forced polygon at that vertex, Zone Graph creates proper arc routing through the intersection, giving you smooth curved lane transitions.

<!-- IMAGE: Two-panel comparison, same cluster with a gentle bend.
Left panel: No break conditions — the bend is a single continuous spline road, lanes cut the corner.
Right panel: A break condition filter on the bend vertex — a polygon intersection appears, and Zone Graph creates arc routing through it with smooth curved lanes. -->

### How to set it up

1. Add a filter to the **Break Conditions** pin (any PCGEx cluster node filter works)
2. The filter evaluates each vertex. Passing vertices become forced intersections.
3. Common approach: flag target vertices with a boolean attribute upstream, then use a **Numeric Compare** filter on it.

{% hint style="success" %}
This is the primary tool for controlling intersection density. Want more intersections along a road? Flag more vertices. Want fewer? Tighten your filter.
{% endhint %}

---

## Polygon Radius and the Trim Buffer

The polygon radius defines how far each connection point sits from the intersection center. It also defines a boundary: any road geometry *inside* that boundary gets removed.

**This is how polygons "eat" nearby points.** When Trim Road Endpoints is enabled, the node walks along each road and clips everything inside the polygon boundary. Points that were close to the intersection center are removed, and a synthetic point is placed at the exact boundary crossing. The result is roads that start and end precisely at the polygon edge.

<!-- IMAGE: Close-up of an intersection with three roads converging.
Left: Trim disabled — roads overlap through the polygon center, creating messy lane geometry.
Right: Trim enabled — roads stop cleanly at the polygon boundary, each connection point aligned. -->

### The Trim Buffer

After trimming, you may still get road points sitting *just barely* outside the polygon boundary. These near-coincident points cause auto-bezier to produce bulging curves.

**Endpoint Trim Buffer** adds a safety margin. After the boundary clip, any remaining road points closer than this distance to the boundary are also removed. Set it to a small value (10-50) to keep things clean without eating too much of the road.

<!-- IMAGE: Zoomed view of one road meeting a polygon.
Top: Trim buffer = 0 — a road point sits 2 units outside the boundary, auto-bezier creates a visible bulge.
Bottom: Trim buffer = 20 — the near-boundary point is removed, the bezier curve is smooth. -->

### Degenerate Road Detection

If trimming removes *all* points from a road (because the road is shorter than the polygon radius), that road is marked degenerate and discarded entirely. This is intentional: a road that fits inside an intersection doesn't contribute useful navigation data.

If you're losing roads you expected to keep, reduce the polygon radius or increase vertex spacing.

| Setting | What it controls |
|---------|-----------------|
| **Polygon Radius** | Distance from center to connection points. Larger = bigger intersection, more aggressive trimming |
| **Trim Road Endpoints** | Enable boundary clipping. When off, roads are simply offset by the radius along their direction |
| **Endpoint Trim Buffer** | Safety margin after clipping. Removes near-boundary points to prevent bezier artifacts |
| **Radius (Attr)** | Per-vertex radius override. Different intersections can have different sizes |

---

## Auto-Radius from Lane Profiles

Instead of picking a polygon radius by hand, the node can derive it from the roads themselves. A four-lane highway naturally needs a larger intersection footprint than a single-lane alley.

**Auto Radius Mode** computes each polygon's radius from the lane profiles of its connected roads. Each road has already resolved its lane profile (see below), so the polygon can inspect the widths.

| Mode | Computes radius as |
|------|-------------------|
| **Widest Lane** | Width of the widest single lane across all connected roads |
| **Half Profile Width** | Half the total lane profile width (all lanes combined) |
| **Widest Lane (Min)** | `max(user radius, widest lane)` |
| **Half Profile Width (Min)** | `max(user radius, half profile)` |

The Min variants are useful when you want a guaranteed minimum size but let wide roads push the intersection larger.

<!-- IMAGE: Same cluster processed twice.
Left: Auto Radius = Disabled, Polygon Radius = 50 — all intersections are the same small size, a wide road's lanes get squeezed at intersections.
Right: Auto Radius = Half Profile Width — intersections are sized proportionally to their connected roads, wide roads get wide intersections. -->

{% hint style="info" %}
Auto-radius is computed per-road at each polygon. A polygon where a highway meets a narrow street will have different radii on each connection point, scaled to each road's profile.
{% endhint %}

---

## Road Orientation

Lane profiles are directional. A two-lane road with "left lane, right lane" reads differently depending on which end you're looking from. Consistent orientation ensures lanes align properly at intersections and through-traffic flows in a predictable direction.

### Depth-First (default)

BFS traversal assigns a depth to each intersection node. Roads are oriented from lower depth to higher depth. Leaf endpoints always flow toward their connected intersection.

This produces a natural tree-like flow: roads radiate outward from the root. For branching networks (road hierarchies, river systems), this is usually the right choice.

### Global Direction

All roads are oriented to flow along a single world-space direction vector. Good for grid-like networks where traffic should consistently flow north-to-south or east-to-west.

### Sort Direction

Uses the Direction Settings sorting rules. This gives you full control via the edge direction system, but requires more configuration.

### Invert Orientation

Flips all roads. Available for Depth-First and Global Direction modes.

<!-- IMAGE: Same Y-shaped cluster with three roads meeting at one intersection.
Left: Depth-First — arrows show roads flowing outward from the central intersection toward leaf endpoints.
Right: Global Direction (pointing right) — arrows show all roads oriented left-to-right, with the one pointing left reversed. -->

---

## Per-Edge Lane Profiles

Lane profiles can be overridden per-edge using an `FName` attribute. Each road resolves its profile by **majority vote** across all edges in its chain: if a chain has five edges and three carry the name `Highway`, that road becomes a Highway.

Each polygon connection point then inherits the profile of its connected road automatically. A single intersection can route between roads of different widths.

### How to set it up

1. Enable **Override Lane Profile** in the Zone Graph settings
2. Write an `FName` attribute to your edges upstream (default name: `LaneProfile`)
3. The value must match a profile name registered in `Project Settings > Zone Graph`
4. Unrecognized names fall back to the default profile

<!-- IMAGE: A cluster where edges are colored by lane profile attribute (e.g., blue = Highway, orange = Residential).
The resulting Zone Graph shows wide blue lanes and narrow orange lanes meeting at a shared intersection, with connection points sized differently for each road. -->

{% hint style="warning" %}
Lane profile resolution reads from **edge** attributes, not vertex attributes. This is because a single vertex (intersection) connects to multiple roads that may have different profiles. Edges belong to a specific road, so they're the natural place to carry profile data.
{% endhint %}

---

## Closed Loops

When a chain forms a closed loop (returns to its starting vertex) and both endpoints are binary (exactly two connections), the node creates a road-only loop with no polygon intersection.

This is the correct behavior: a closed ring of binary nodes has no junction, just a continuous loop road. Zone Graph treats it as a circular spline.

If you need an intersection on a closed loop, use Break Conditions to force one. The loop splits into open chains meeting at the forced intersection.

<!-- IMAGE: A triangular cluster where all three vertices have exactly two connections.
Left: No break conditions — three closed-loop roads form a triangle, no polygon intersections.
Right: One vertex has a break condition — the loop is split, that vertex becomes a polygon intersection, the two resulting road segments connect at arc-routed connections. -->

---

## Path Outputs

Beyond creating Zone Graph components, the node can output the generated geometry as PCG path data for downstream operations.

### Road Paths

Each road outputs as an open path with `ArriveTangent` and `LeaveTangent` vector attributes, preserving the spline tangent data from the compiled Zone Graph shape. Useful for spawning lane markings, barriers, or other road-following elements.

### Polygon Paths

Each intersection outputs as a closed path. Points are placed in left/right pairs at each connection, capturing the polygon's full boundary with lane-width spacing. Useful for spawning intersection geometry or debug visualization.

Enable these under **Settings > Output**. The paths appear on the **Polygon Paths** and **Road Paths** output pins.

<!-- IMAGE: A PCG graph with Cluster to Zone Graph outputting Road Paths into a downstream Spline Mesh node, producing lane markings along each road. The Polygon Paths feed into a separate branch that creates intersection surface geometry. -->

---

## Per-Point Attribute Overrides

Every Zone Graph property can be driven by point attributes. Toggle the override checkbox, and each vertex or edge reads its own value instead of using the shared setting.

| Property | Reads from | Type | Default attribute |
|----------|-----------|------|-------------------|
| Polygon Radius | Vtx | `double` | `ZG.PolygonRadius` |
| Polygon Routing | Vtx | `int32` (0=Bezier, 1=Arcs) | `PolygonRoutingType` |
| Polygon Point Type | Vtx | `int32` (0-3) | `PolygonPointType` |
| Road Point Type | Vtx | `int32` (0-3) | `RoadPointType` |
| Lane Profile | Edges | `FName` | `LaneProfile` |
| Intersection Tags | Vtx | `int32` (bitmask) | `IntersectionTags` |

A single cluster can produce roads with different profiles, intersections with different radii and routing types, and connection points with different shape types.

---

## Related

- [Cluster to Zone Graph](PCGExClusterToZoneGraph.md): Full settings reference
- [Zone Graph Overview](../../../_staging-concepts/zone-graph.md): Concept overview
- [Installation](../../../_staging-concepts/zone-graph-installation.md): Plugin setup
