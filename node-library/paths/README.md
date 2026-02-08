---
icon: grid-round-2-plus
---

# Paths

**Paths are just ordered points.** No special data types, no hidden wrappers. When a PCGEx node says it operates on "paths," it means: these points are connected in the order you gave them. Everything here builds on that assumption.

The nodes in this section cover the full lifecycle of path data. You can create paths from splines or other sources, reshape them structurally, adjust positions and orientations, intersect them with geometry, extract properties, and convert them back into Unreal Engine objects.

### Sections

| Section         | Contents                                                                          |
| --------------- | --------------------------------------------------------------------------------- |
| Common Settings | Shared configuration — path processor settings, tangents, sub-point blending      |
| Generate        | Create paths from splines, offset curves, tensor fields, or by splitting existing paths |
| Modify          | Structural changes — bevel, resample, subdivide, fuse, stitch, shrink, and more   |
| Intersect       | Crossings and clipping — Clipper2 booleans, rect clip, path-path crossings        |
| Transform       | Position and orientation — smooth, offset, orient, slide                           |
| Analyze         | Property extraction — path statistics, tangent computation                         |
| Output          | Conversion to Unreal objects — splines, spline meshes, staging-driven meshes      |

### Concepts

For understanding what paths are and how they relate to points and clusters:

* [Path Concepts](../../working-with-pcgex/paths/)
