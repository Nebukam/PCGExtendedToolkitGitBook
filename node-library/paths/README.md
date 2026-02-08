---
icon: grid-round-2-plus
---

# Paths

**Paths are just ordered points.** No special data types, no hidden wrappers. When a PCGEx node says it operates on "paths," it means: these points are connected in the order you gave them. Everything here builds on that assumption.

The nodes in this section cover the full lifecycle of path data. You can create paths from splines or other sources, reshape them structurally, adjust positions and orientations, intersect them with geometry, extract properties, and convert them back into Unreal Engine objects.

### Sections

| Section                                       | Contents                                                                                |
| --------------------------------------------- | --------------------------------------------------------------------------------------- |
| [common-settings](common-settings/ "mention") | Shared configuration — path processor settings, tangents, sub-point blending            |
| [generate](generate/ "mention")               | Create paths from splines, offset curves, tensor fields, or by splitting existing paths |
| [modify](modify/ "mention")                   | Structural changes — bevel, resample, subdivide, fuse, stitch, shrink, and more         |
| [intersect](intersect/ "mention")             | Crossings and clipping — Clipper2 booleans, rect clip, path-path crossings              |
| [transform](transform/ "mention")             | Position and orientation — smooth, offset, orient, slide                                |
| [analyze](analyze/ "mention")                 | Property extraction — path statistics, tangent computation                              |
| [output](output/ "mention")                   | Conversion to Unreal objects — splines, spline meshes, staging-driven meshes            |

### Concepts

For understanding what paths are and how they relate to points and clusters:

* [Path Concepts](../../working-with-pcgex/paths/)
