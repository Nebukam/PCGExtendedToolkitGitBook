---
icon: grid-round-2
---

# Nearest

**Spatial query samplers that find and sample data from nearby geometry.**

| Node                       | Description                                                                                           |
| -------------------------- | ----------------------------------------------------------------------------------------------------- |
| **Sample Nearest Point**   | Find nearest target points with distance-weighted blending. Multiple sample methods and weight modes. |
| **Sample Nearest Bounds**  | Sample from nearby point bounds. Methods: all, closest, farthest, largest, smallest, best candidate.  |
| **Sample Nearest Spline**  | Sample transforms from nearest spline curves with tangent and alpha data.                             |
| **Sample Nearest Surface** | Trace to nearest collidable surface. Writes location, normal, distance, inside/outside.               |
| **Sample Nearest Path**    | Sample from nearest path edges with containment testing.                                              |
| **Sample Inside Path**     | Test if points lie inside closed paths with distance computation.                                     |
| **Sample Line Trace**      | Directed line traces to collision surfaces. UV and vertex color support.                              |
| **Sample Sockets**         | Extract static mesh socket positions as new points.                                                   |

### Concepts

* [Sampling](../)
