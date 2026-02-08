---
icon: grid-round-2
---

# Modify

**Modification changes what the path is, not just where it sits.** These nodes alter point count, topology, and shape -- the structural identity of a path.

Several nodes add or remove points to reshape geometry. Beveling rounds off corners with line, arc, or custom profiles. Resampling enforces uniform spacing, either preserving point count or targeting a specific distance. Subdivision inserts points between existing ones, while fusing collinear points and tangent-based reduction go the other direction, removing points that don't contribute meaningful shape.

Other operations change the path's extent or connectivity. You can insert external points at their nearest path location, stitch multiple paths end-to-end, shrink endpoints inward, shift the starting point of closed paths, or solidify segments into oriented bounding boxes.

Attribute operations live here too. Rolling segments a path into ranges and blends attributes within each range, while blending interpolates attributes from start to end as a gradient.

> See [Common Path Operations](../../../working-with-pcgex/paths/common-path-operations.md) for path modification workflows.
