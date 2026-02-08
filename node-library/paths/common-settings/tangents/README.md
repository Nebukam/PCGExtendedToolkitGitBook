---
icon: grid-2
---

# Tangents

**Sub-node providers that compute per-point tangent directions along a path.** Tangents drive smoothing, spline output, and orientation. Each provider here implements a different computation method — automatic estimation, Catmull-Rom interpolation, neighbor-derived directions, explicit transform axes, or zero tangents for sharp corners. Path nodes that need tangent data accept these as sub-node inputs.
