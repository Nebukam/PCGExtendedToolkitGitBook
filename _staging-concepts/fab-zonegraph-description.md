# FAB Description — PCGExElementsZoneGraph

## Short Description (FAB subtitle, ~140 chars)

Generate ZoneGraph AI navigation data from PCGEx clusters — roads, intersections, lane profiles, and auto-radius, all inside your PCG graph.

## Long Description (FAB body)

PCGExElementsZoneGraph bridges PCGEx's cluster topology with Epic's ZoneGraph plugin. Build connected networks with PCGEx — Delaunay, Voronoi, MST, pathfinding results, or any custom connectivity — then convert them directly into ZoneGraph roads and intersections. AI navigation data authored procedurally, inside your PCG graphs, with no manual ZoneGraph setup.

### What It Does

**Cluster → ZoneGraph conversion** — Automatically decomposes cluster topology into roads (spline shapes) and intersections (polygon shapes). Chains of connected nodes become roads; junction nodes become intersections. The decomposition is fully automatic based on connectivity.

**Lane profile resolution** — Each road resolves its lane profile from edge attributes using majority vote across its chain. Different roads can carry different lane profiles, and each intersection connection point inherits the profile of its connected road — so a single intersection can route correctly between roads of different widths.

**Auto-radius** — Intersection polygon radii can be computed automatically from connected road lane widths. Wide roads produce larger intersection footprints; narrow roads produce tighter ones. Five modes available: disabled, widest lane, half profile width, and min-of variants that respect a user-specified floor.

**Per-point attribute overrides** — Polygon radius, routing type, shape point type, lane profile, and intersection tags can all be overridden per-vertex or per-edge via PCG attributes. Full PCG Overridable support for graph-level parameter control.

**Break conditions** — Plug in PCGEx cluster filters to designate additional nodes as chain boundaries, splitting roads and producing more intersection polygons exactly where you need them.

**Path data output** — Optionally output intersection polygons as closed PCG paths and road splines as PCG paths with tangent attributes. Use these for downstream operations — spawning lane markings, placing barriers, debugging road layout — without leaving the PCG graph.

**Works with any cluster source** — Delaunay triangulation, Voronoi connectivity, minimum spanning trees, pathfinding results, custom connectivity, or hand-authored topology. If PCGEx can build a cluster from it, this plugin can convert it to ZoneGraph data.

### Workflow

1. Generate or author points in your PCG graph
2. Build clusters using any PCGEx cluster node (Build Graph, Build Delaunay, Build Voronoi, etc.)
3. Optionally refine topology — prune edges, simplify, run pathfinding
4. Connect the cluster output to Cluster to Zone Graph
5. Configure lane profiles, intersection settings, and attribute overrides
6. Zone Graph components are created on the target actor — AI navigation is ready

### Requirements

- Unreal Engine 5.6+
- PCGExtendedToolkit (free, MIT licensed)
- ZoneGraph plugin (included with the engine, must be enabled)

### Important

Both this plugin and Epic's ZoneGraph plugin are experimental. Epic warns that ZoneGraph will have API-breaking changes as its development progresses, which may require updates to this plugin.

### License

MIT — free for personal and commercial use.
