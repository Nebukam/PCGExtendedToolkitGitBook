---
icon: grid-round-2-plus
---

# Shapes

**Shapes are parametric point patterns generated from mathematical definitions.** Each shape builder is a sub-node that describes a geometry — circles, regular polygons, 3D grids, Fibonacci sphere distributions — and **Create Shapes** is the node that applies those builders to seed points.

Every shape is generated relative to its seed point's transform. Position, rotation, and scale all flow through. With distance-based resolution, larger seeds automatically produce more points to maintain consistent spacing across different scales.

Create Shapes supports multiple output modes so the resulting points can be grouped per dataset, per seed, or per individual shape depending on what downstream processing needs.

### Concepts

For understanding shape generation and seed-relative behavior:

* [Shape Concepts](../../working-with-pcgex/additional-systems/shapes.md)
