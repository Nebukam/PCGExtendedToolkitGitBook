---
icon: grid-round-2-plus
---

# Paths

**Paths are just ordered points.** No special data types, no hidden wrappers. When a PCGEx node says it operates on "paths," it means: these points are connected in the order you gave them. Everything here builds on that assumption.

The nodes in this section cover the full lifecycle of path data. You can create paths from splines or other sources, reshape them structurally, adjust positions and orientations, intersect them with geometry, extract properties, and convert them back into Unreal Engine objects.

### Sections

<table data-view="cards"><thead><tr><th>Section</th><th>Contents</th></tr></thead><tbody><tr><td><a data-mention href="common-settings/">common-settings</a></td><td>Shared configuration — path processor settings, tangents, sub-point blending</td></tr><tr><td><a data-mention href="generate/">generate</a></td><td>Create paths from splines, offset curves, tensor fields, or by splitting existing paths</td></tr><tr><td><a data-mention href="modify/">modify</a></td><td>Structural changes — bevel, resample, subdivide, fuse, stitch, shrink, and more</td></tr><tr><td><a data-mention href="intersect/">intersect</a></td><td>Crossings and clipping — Clipper2 booleans, rect clip, path-path crossings</td></tr><tr><td><a data-mention href="transform/">transform</a></td><td>Position and orientation — smooth, offset, orient, slide</td></tr><tr><td><a data-mention href="analyze/">analyze</a></td><td>Property extraction — path statistics, tangent computation</td></tr><tr><td><a data-mention href="output/">output</a></td><td>Conversion to Unreal objects — splines, spline meshes, staging-driven meshes</td></tr></tbody></table>

### Concepts

For understanding what paths are and how they relate to points and clusters:

* [Path Concepts](../../working-with-pcgex/paths/)
