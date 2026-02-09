---
icon: question
---

# Common Path Operations

**You have a path and you want to do something to it.** This is your map. Find the goal, find the node.

### Shape & Geometry

| I want to...                    | Node         | Notes                                                                                         |
| ------------------------------- | ------------ | --------------------------------------------------------------------------------------------- |
| Round off sharp corners         | **Bevel**    | Radius or distance mode. Line, arc, or custom profile.                                        |
| Offset the path sideways        | **Offset**   | Perpendicular displacement. Raw, smooth, or mitre adjustment for corners.                     |
| Reduce noise and jagged edges   | **Smooth**   | Moving average or radius-based neighbor gathering. Preserves start/end optionally.            |
| Shrink the path from its ends   | **Shrink**   | By count or distance. Start, end, or both.                                                    |
| Slide points toward neighbors   | **Slide**    | Shifts points along the path toward next or previous neighbor by relative or discrete amount. |
| Turn a path into oriented boxes | **Solidify** | Converts each segment into an axis-aligned bound representation.                              |

### Point Count & Spacing

| I want to...                          | Node               | Notes                                                                         |
| ------------------------------------- | ------------------ | ----------------------------------------------------------------------------- |
| Enforce uniform spacing               | **Resample**       | Sweep (keep count) or redistribute (target spacing).                          |
| Add more points between existing ones | **Subdivide**      | By count, distance, or Manhattan distance per segment.                        |
| Remove points that don't add shape    | **Fuse Collinear** | Collinearity threshold in degrees. Simplifies without changing overall shape. |
| Reduce points while preserving shape  | **Reduce**         | Tangent-based reduction with error tolerance. Preserve or anchor mode.        |
| Insert external points into a path    | **Insert**         | Snaps target points to nearest path location. Limit by count or spacing.      |

### Order & Direction

| I want to...                               | Node               | Notes                                                                                 |
| ------------------------------------------ | ------------------ | ------------------------------------------------------------------------------------- |
| Flip the path direction                    | **Reverse Order**  | Unconditional, by sorting rules, or by winding direction (CW/CCW).                    |
| Rotate the starting point of a closed path | **Shift**          | Circular rotation by index, metadata, or filter. Closed paths only.                   |
| Orient points along the path               | **Orient**         | Average, look-at, or weighted method. Configurable orient and up axes.                |
| Write tangent vectors                      | **Write Tangents** | Auto, Catmull-Rom, from neighbors, or from transform. Separate arrive/leave tangents. |

### Splitting & Joining

| I want to...                         | Node             | Notes                                                                             |
| ------------------------------------ | ---------------- | --------------------------------------------------------------------------------- |
| Break a path into pieces             | **Split**        | Split, remove, disconnect, partition, or switch mode. Filter-driven split points. |
| Connect multiple paths end-to-end    | **Stitch**       | Connect or fuse endpoints. Line intersection for alignment.                       |
| Deform points along a path or spline | **Copy to Path** | Maps source points onto a path shape. Wraps closed loops.                         |

### Attributes & Metadata

| I want to...                        | Node                      | Notes                                                                                               |
| ----------------------------------- | ------------------------- | --------------------------------------------------------------------------------------------------- |
| Blend attributes from start to end  | **Blend**                 | Gradient over distance, count, or fixed range.                                                      |
| Roll attributes along the path      | **Attribute Rolling**     | Segments path into ranges, blends within them. Circular buffer behavior.                            |
| Compute path length, area, centroid | **Write Path Properties** | Writes per-path metrics (length, area, OBB, centroid) and per-point data (angle, distance, normal). |
| Mark as closed or as a hole         | **Write Path Properties** | Sets `@Data.IsClosed` and `@Data.IsHole`. Essential after creating paths from non-PCGEx sources.    |

### Spatial Queries

| I want to...                      | Node                         | Notes                                                                     |
| --------------------------------- | ---------------------------- | ------------------------------------------------------------------------- |
| Find where paths cross each other | **Path Crossings**           | Between paths or self-intersection. Creates points at crossing locations. |
| Find points near a path           | **Bounds Path Intersection** | Entry/exit classification. Blending at intersection points.               |

### Output & Conversion

| I want to...                       | Node                     | Notes                                                           |
| ---------------------------------- | ------------------------ | --------------------------------------------------------------- |
| Create an Unreal spline            | **Create Spline**        | Data only, component, or both. Configurable point types.        |
| Spawn spline meshes along the path | **Spline Mesh (Simple)** | Static mesh asset per segment. Material from attribute.         |
| Convert a spline back to a path    | **Spline to Path**       | Inherits scale/rotation. Writes arrive/leave tangents.          |
| Feed paths into cluster topology   | See Cluster-Path Interop | **Path to Clusters** merges endpoints into a connected network. |

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
