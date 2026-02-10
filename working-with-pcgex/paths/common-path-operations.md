---
icon: question
layout:
  width: default
  title:
    visible: true
  description:
    visible: true
  tableOfContents:
    visible: true
  outline:
    visible: true
  pagination:
    visible: true
  metadata:
    visible: true
---

# Common Path Operations

**You have a path and you want to do something to it.** This is your map. Find the goal, find the node.

### Shape & Geometry

| I want to...                    | Node                                                                           | Notes                                                                                         |
| ------------------------------- | ------------------------------------------------------------------------------ | --------------------------------------------------------------------------------------------- |
| Round off sharp corners         | [path-bevel.md](../../node-library/paths/modify/path-bevel.md "mention")       | Radius or distance mode. Line, arc, or custom profile.                                        |
| Offset the path sideways        | [path-offset.md](../../node-library/paths/transform/path-offset.md "mention")  | Perpendicular displacement. Raw, smooth, or mitre adjustment for corners.                     |
| Reduce noise and jagged edges   | [path-smooth](../../node-library/paths/transform/path-smooth/ "mention")       | Moving average or radius-based neighbor gathering. Preserves start/end optionally.            |
| Shrink the path from its ends   | [path-shrink.md](../../node-library/paths/modify/path-shrink.md "mention")     | By count or distance. Start, end, or both.                                                    |
| Slide points toward neighbors   | [path-slide.md](../../node-library/paths/transform/path-slide.md "mention")    | Shifts points along the path toward next or previous neighbor by relative or discrete amount. |
| Turn a path into oriented boxes | [path-solidify.md](../../node-library/paths/modify/path-solidify.md "mention") | Converts each segment into an axis-aligned bound representation.                              |

### Point Count & Spacing

| I want to...                          | Node                                                                                       | Notes                                                                         |
| ------------------------------------- | ------------------------------------------------------------------------------------------ | ----------------------------------------------------------------------------- |
| Enforce uniform spacing               | [path-resample.md](../../node-library/paths/modify/path-resample.md "mention")             | Sweep (keep count) or redistribute (target spacing).                          |
| Add more points between existing ones | [path-subdivide.md](../../node-library/paths/modify/path-subdivide.md "mention")           | By count, distance, or Manhattan distance per segment.                        |
| Remove points that don't add shape    | [path-fuse-collinear.md](../../node-library/paths/modify/path-fuse-collinear.md "mention") | Collinearity threshold in degrees. Simplifies without changing overall shape. |
| Reduce points while preserving shape  | [path-reduce.md](../../node-library/paths/modify/path-reduce.md "mention")                 | Tangent-based reduction with error tolerance. Preserve or anchor mode.        |
| Insert external points into a path    | [path-insert.md](../../node-library/paths/modify/path-insert.md "mention")                 | Snaps target points to nearest path location. Limit by count or spacing.      |

### Order & Direction

| I want to...                               | Node                                                                                        | Notes                                                                                 |
| ------------------------------------------ | ------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------- |
| Flip the path direction                    | [reverse-order.md](../../node-library/utilities/sorting/reverse-order.md "mention")         | Unconditional, by sorting rules, or by winding direction (CW/CCW).                    |
| Rotate the starting point of a closed path | [path-shift.md](../../node-library/paths/modify/path-shift.md "mention")                    | Circular rotation by index, metadata, or filter. Closed paths only.                   |
| Orient points along the path               | [path-orient](../../node-library/paths/transform/path-orient/ "mention")                    | Average, look-at, or weighted method. Configurable orient and up axes.                |
| Write tangent vectors                      | [path-write-tangents.md](../../node-library/paths/analyze/path-write-tangents.md "mention") | Auto, Catmull-Rom, from neighbors, or from transform. Separate arrive/leave tangents. |

### Splitting & Joining

| I want to...                         | Node                                                                           | Notes                                                                             |
| ------------------------------------ | ------------------------------------------------------------------------------ | --------------------------------------------------------------------------------- |
| Break a path into pieces             | [path-split.md](../../node-library/paths/generate/path-split.md "mention")     | Split, remove, disconnect, partition, or switch mode. Filter-driven split points. |
| Connect multiple paths end-to-end    | [path-stitch.md](../../node-library/paths/modify/path-stitch.md "mention")     | Connect or fuse endpoints. Line intersection for alignment.                       |
| Deform points along a path or spline | [copy-to-path.md](../../node-library/paths/generate/copy-to-path.md "mention") | Maps source points onto a path shape. Wraps closed loops.                         |

### Attributes & Metadata

| I want to...                        | Node                                                                                             | Notes                                                                                               |
| ----------------------------------- | ------------------------------------------------------------------------------------------------ | --------------------------------------------------------------------------------------------------- |
| Blend attributes from start to end  | [path-blend.md](../../node-library/paths/modify/path-blend.md "mention")                         | Gradient over distance, count, or fixed range.                                                      |
| Roll attributes along the path      | [path-attribute-rolling.md](../../node-library/paths/modify/path-attribute-rolling.md "mention") | Segments path into ranges, blends within them. Circular buffer behavior.                            |
| Compute path length, area, centroid | [path-properties.md](../../node-library/paths/analyze/path-properties.md "mention")              | Writes per-path metrics (length, area, OBB, centroid) and per-point data (angle, distance, normal). |

### Spatial Queries

| I want to...                      | Node                                                                                                    | Notes                                                                     |
| --------------------------------- | ------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------- |
| Find where paths cross each other | [path-path-crossings.md](../../node-library/paths/intersect/path-path-crossings.md "mention")           | Between paths or self-intersection. Creates points at crossing locations. |
| Find points near a path           | [path-bounds-intersection.md](../../node-library/paths/intersect/path-bounds-intersection.md "mention") | Entry/exit classification. Blending at intersection points.               |

### Output & Conversion

| I want to...                       | Node                                                                                               | Notes                                                           |
| ---------------------------------- | -------------------------------------------------------------------------------------------------- | --------------------------------------------------------------- |
| Create an Unreal spline            | [create-spline.md](../../node-library/paths/output/create-spline.md "mention")                     | Data only, component, or both. Configurable point types.        |
| Spawn spline meshes along the path | [path-spline-mesh-simple.md](../../node-library/paths/output/path-spline-mesh-simple.md "mention") | Static mesh asset per segment. Material from attribute.         |
| Convert a spline back to a path    | [spline-to-path.md](../../node-library/paths/generate/spline-to-path.md "mention")                 | Inherits scale/rotation. Writes arrive/leave tangents.          |
| Feed paths into cluster topology   | See [cluster-path-interoperability.md](../clusters/cluster-path-interoperability.md "mention")     | **Path to Clusters** merges endpoints into a connected network. |

### Chaining Operations

Order matters. A common sequence:

1. **Simplify** — Fuse Collinear or Reduce to remove noise
2. **Resample** — Enforce consistent spacing
3. **Transform** — Offset, Bevel, Subdivide
4. **Finalize** — Write Properties, Create Spline, Solidify

Smoothing before resampling produces different results than resampling before smoothing. Experiment with order.

### Related

* [.](./ "mention") — Path fundamentals
* [segments-vs-points.md](segments-vs-points.md "mention") — Understanding segment-based operations
* [paths](../../node-library/paths/ "mention") — Complete node reference
