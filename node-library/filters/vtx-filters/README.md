---
icon: grid-2
---

# Vtx Filters

**Vtx filters evaluate cluster Vtx through their topology — the edges they connect to, the neighbors they share, and the angles they form.** Regular point filters can test any attribute on a Vtx, but Vtx filters see the cluster structure around each point.

Adjacency filters test relationships between a Vtx and its neighbors: whether connected Vtx share attribute values, how many edges radiate from a point, and what directions those edges take. Angle filters measure the spread between connected edges, which is useful for identifying sharp turns, dead ends, or smooth junctions in a cluster's geometry.

### Concepts

For understanding filter architecture, composition patterns, and reusability:

* [Filter Concepts](../../../working-with-pcgex/filters/)
