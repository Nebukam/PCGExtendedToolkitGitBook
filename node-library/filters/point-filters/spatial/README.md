---
icon: grid-2
---

# Spatial

**Spatial filters reason about where a point is, not what it stores.** They answer geometric questions — distance thresholds, bounds containment, path and spline inclusion, and alignment with external references.

Distance checks are the most common starting point: testing how far a point is from another point or a reference location. Bounds and inclusion filters test whether a point falls inside a bounding box or an arbitrary region defined by other geometry. Time-based filters evaluate a point's position along a parametric curve.

These filters complement attribute filters well. Attribute filters narrow by data; spatial filters narrow by position. Composing both through filter groups gives you precise geometric-plus-data selection.

### Concepts

For understanding filter architecture, composition patterns, and reusability:

* [Filter Concepts](../../../../working-with-pcgex/filters/)
