---
icon: grid-round-2-plus
---

# Shapes

**Parametric shape builders — generate point patterns from mathematical definitions.** Each shape is generated fresh from its seed point: position, rotation, and scale determine the result. With distance-based resolution, larger seeds produce more points to maintain consistent spacing.

#### Available Shapes

| Shape                | What It Generates                                                       |
| -------------------- | ----------------------------------------------------------------------- |
| **Circle**           | Circular or arc patterns — configurable start/end angle                 |
| **Polygon**          | Regular polygons with optional skeleton spokes from center to perimeter |
| **3D Grid**          | Three-dimensional grid with per-axis resolution and fit adjustment      |
| **Fibonacci Sphere** | Near-optimal uniform sphere distribution via Fibonacci lattice          |

#### Create Shapes

The **Create Shapes** node takes seed points and applies shape builder sub-nodes to each. Output modes: Per Dataset, Per Seed, or Per Shape.

### Concepts

For understanding shape generation and seed-relative behavior:

* [Shape Concepts](./)
