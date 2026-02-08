---
icon: grid-2
---

# Heuristics

**Heuristics define what "good" means for a path.** Each sub-node scores candidate edges by a single criterion, and the heuristics handler blends multiple scores together using configurable aggregation.

Some heuristics are spatial. Shortest distance scores by Euclidean distance to the goal. Azimuth evaluates compass direction. Steepness measures vertical angle. Others are behavioral: inertia penalizes direction changes from the current heading, turn penalty penalizes sharp angles relative to the previous edge, and feedback adjusts scores based on how often previous paths have already used an edge. Attribute-driven heuristics score by endpoint values or by the gradient between them, and tensor alignment scores edges against a tensor field's direction.

You connect one or more heuristic sub-nodes to a pathfinding algorithm's Heuristics pin. The handler composes them into a single blended score per edge -- weighted average, sum, geometric mean, min, or max. The same sub-nodes also plug into score-based edge refinement operations outside of pathfinding.

### Concepts

* [Pathfinding Heuristics](../../../working-with-pcgex/pathfinding/heuristics.md)
