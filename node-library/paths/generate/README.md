---
icon: grid-round-2
---

# Generate

**Paths have to come from somewhere.** These nodes create path data from other sources, giving you multiple entry points into the path pipeline.

The most common starting point is converting Unreal splines into ordered point sequences with **Spline to Path**, which preserves tangents, length, and point type metadata. From there you can deform source points along a path shape, generate offset paths from closed contours using Clipper2's miter, round, and square join modes, or extrude paths outward from seed points by following tensor field directions. When you already have paths but need to break them apart, splitting operations let you partition, disconnect, or subdivide existing paths into smaller pieces.

> See [Paths](../../../working-with-pcgex/paths/) for path fundamentals.
