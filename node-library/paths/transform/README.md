---
icon: grid-round-2
---

# Transform

**Transform nodes move points and adjust orientations without adding or removing anything.** The path keeps its topology; only positions and rotations change.

Smoothing uses pluggable strategy sub-nodes to iteratively relax point positions -- moving average, radius-based, and other methods slot in depending on the behavior you need. Perpendicular offset displaces the entire path sideways with options for raw, smooth, or mitre corner handling. Orientation nodes align point rotations along the path direction, with sub-nodes for average, look-at, and weighted methods. Sliding shifts points along the path toward their neighbors by a relative or discrete amount.

> See [Paths](../../../working-with-pcgex/paths/) for path data concepts.
