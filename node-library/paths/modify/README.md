---
icon: grid-round-2
---

# Modify

**Nodes that change path shape, point count, or topology.**

| Node                         | Description                                                                     |
| ---------------------------- | ------------------------------------------------------------------------------- |
| **Bevel**                    | Round off corners. Radius or distance mode. Line, arc, or custom profile.       |
| **Offset**                   | Perpendicular displacement. Raw, smooth, or mitre corner handling.              |
| **Resample**                 | Enforce uniform spacing. Sweep (keep count) or redistribute (target distance).  |
| **Subdivide**                | Add points between existing ones. By count, distance, or Manhattan distance.    |
| **Fuse Collinear**           | Remove points that don't contribute to shape. Collinearity threshold.           |
| **Reduce**                   | Tangent-based simplification with error tolerance.                              |
| **Insert**                   | Insert external points at their nearest path location.                          |
| **Split**                    | Break a path into pieces. Split, remove, disconnect, partition, or switch mode. |
| **Stitch**                   | Connect multiple paths end-to-end. Connect or fuse endpoints.                   |
| **Shrink**                   | Shorten from start, end, or both. By count or distance.                         |
| **Slide**                    | Move points along the path toward neighbors. Relative or discrete amount.       |
| **Solidify**                 | Convert segments into oriented bounding box representations.                    |
| **Path Crossings**           | Find intersection points between or within paths.                               |
| **Bounds Path Intersection** | Find points within a distance threshold of paths.                               |

> See Common Operations for path modification workflows.
