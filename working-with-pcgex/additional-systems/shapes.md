---
icon: shapes
---

# Shapes

**Sometimes you need a clean starting shape before the procedural logic takes over.** A circle of evenly spaced points. A grid. A sphere. Shape builders generate these parametric primitives as standard PCG points — ready to feed into clusters, paths, staging, or anything else downstream.

### How It Works

[create-shapes.md](../../node-library/shapes/create-shapes.md "mention") takes seed points and applies one or more shape builder sub-nodes to each. Every seed becomes the origin for shape generation — the seed's position, rotation, and scale define where and how big each shape is.

This isn't stamping the same copy onto every point. Each shape is **generated fresh from its seed**. A large seed produces a large circle; a small seed produces a small one. With distance-based resolution, the large circle also gets _more points_ to maintain consistent spacing — while the small one gets fewer. Consistent metrics no matter the seed. The shape adapts to the seed, not the other way around.

Output can be organized three ways:

* **Per Dataset**: All shapes merged into one collection per input
* **Per Seed**: One collection per seed point
* **Per Shape**: One collection per shape builder definition

### Available Shapes

<table data-view="cards"><thead><tr><th>Shape</th><th>What It Generates</th><th data-hidden data-card-target data-type="content-ref"></th></tr></thead><tbody><tr><td><a data-mention href="../../node-library/shapes/shape-circle.md">shape-circle.md</a></td><td>Points in a circular or arc pattern — configurable start/end angle, closed loop detection</td><td><a href="../../node-library/shapes/shape-circle.md">shape-circle.md</a></td></tr><tr><td><a data-mention href="../../node-library/shapes/shape-f-sphere.md">shape-f-sphere.md</a></td><td>Points distributed on a sphere using Fibonacci lattice — near-optimal uniformity without polar clustering</td><td><a href="../../node-library/shapes/shape-f-sphere.md">shape-f-sphere.md</a></td></tr><tr><td><a data-mention href="../../node-library/shapes/shape-3d-grid.md">shape-3d-grid.md</a></td><td>Three-dimensional grid pattern with per-axis resolution and fit adjustment</td><td><a href="../../node-library/shapes/shape-3d-grid.md">shape-3d-grid.md</a></td></tr><tr><td><a data-mention href="../../node-library/shapes/shape-polygon.md">shape-polygon.md</a></td><td>Regular polygon (triangle, square, pentagon, hex...) with optional skeleton spokes from center to perimeter</td><td><a href="../../node-library/shapes/shape-polygon.md">shape-polygon.md</a></td></tr></tbody></table>

Each shape supports two **resolution modes**: Fixed (exact point count regardless of size) or Distance (points spaced at a target interval — so larger shapes naturally produce more points). Parameters can be driven by attributes, so a single shape node can produce different geometry per seed.

#### Polygon Skeleton

The polygon shape has an extra trick: enabling **skeleton** adds spokes from the center to the perimeter, connecting at vertices, edge midpoints, or both. This produces a radial structure directly — useful as a starting point for further processing. Output attributes can tag whether each point is on the hull, its angle from center, which edge it belongs to, and its position along that edge.

#### Fibonacci Sphere

The Fibonacci lattice distributes points on a sphere with near-optimal spacing. It's deterministic, produces an exact point count, and avoids the polar clustering that UV-based sphere sampling suffers from. Multiple phi constants are available (golden ratio, sqrt(2), custom) to control the spiral pattern.

### What Comes Out

Shape builders output standard PCG points. That's it — no special format, no locked-in pipeline. The points can:

* Seed cluster generation (structured starting positions)
* Define path structures (circles, spirals as closed paths)
* Drive asset staging (regular placement grids)
* Serve as spatial references for other operations

Points can optionally carry a `ShapeId` attribute identifying which builder generated them, and shapes below a minimum point count can be pruned automatically.

<figure><img src="../../.gitbook/assets/placeholder-wide.jpg" alt=""><figcaption><p>Circle, polygon, grid, and sphere shape outputs visualized as point clouds</p></figcaption></figure>

### Related

* [shapes](../../node-library/shapes/ "mention") Nodes
* [clusters](../../node-library/clusters/ "mention") - Shapes can seed cluster generation
