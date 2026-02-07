---
icon: grid-round-2
---

# Transform

**Nodes that modify path point attributes without changing geometry.**

| Node                      | Description                                                                                          |
| ------------------------- | ---------------------------------------------------------------------------------------------------- |
| **Orient**                | Orient points along path direction. Average, look-at, or weighted method. Sub-nodes for each method. |
| **Blend**                 | Interpolate attributes from start to end. Gradient over distance, count, or fixed range.             |
| **Attribute Rolling**     | Segment path into ranges and blend attributes within them.                                           |
| **Write Path Properties** | Compute per-path metrics (length, area, centroid, OBB) and per-point data (angle, distance, normal). |
| **Write Tangents**        | Compute arrive/leave tangent vectors. Auto, Catmull-Rom, from neighbors, or from transform.          |
| **Reverse Order**         | Flip path direction. Unconditional, by sorting rules, or by winding.                                 |
| **Shift**                 | Rotate starting point of closed paths. By index, metadata, or filter.                                |

> See Paths for path data concepts.
