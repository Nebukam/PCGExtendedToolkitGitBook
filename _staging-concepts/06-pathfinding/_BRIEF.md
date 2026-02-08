# Section Brief: Pathfinding

> Context for writing this section. Read before working on these docs.

---

## Purpose

Explain pathfinding on clusters. Users should understand:
- Pathfinding operates on cluster topology
- Different algorithms exist for different needs
- Heuristics guide path selection (composable sub-nodes)
- Not all pathfinding needs explicit goals (PlotEdge vs Edge approaches)
- Flood fill as pathfinding
- Cells/hulls as "path extraction" (super useful, don't miss it)

---

## Key Messages

1. **Clusters are the graph** - Pathfinding uses cluster topology for traversal
2. **Multiple approaches** - Some need goals (PathfindingEdge), some don't (PlotEdge)
3. **Algorithms have tradeoffs** - A*, Dijkstra, etc. suit different needs
4. **Heuristics compose** - Multiple heuristics combine to score paths
5. **Filters control traversability** - Edge/Vtx filters determine what's walkable
6. **Beyond A→B** - Flood fill, cell extraction, hull finding (don't miss cells!)

---

## Pages in This Section

| Page | Content |
|------|---------|
| `README.md` | What pathfinding is in PCGEx, overview of approaches |
| `algorithms.md` | A*, Dijkstra, Bellman-Ford - when to use which |
| `heuristics.md` | What heuristics are, how they compose |
| `cells-and-hulls.md` | Extracting bounded regions, contours - "path extraction" |

Note: Goal pickers de-emphasized (specific to PathfindingEdge node, covered in node library). Not all pathfinding needs seeds/goals - PathfindingPlotEdge is often more intuitive. Flood fill belongs here conceptually.

---

## Source Material

### Primary (new content needed)
- Limited existing conceptual content for pathfinding
- Node library has structure but no concept docs

### For Accuracy
- `_notes/modules/PCGExElementsPathfinding.md` - Module architecture
- `_notes/modules/PCGExHeuristics.md` - Heuristics module
- `_staging/PCGExElementsPathfinding/` - Generated pathfinding docs
- `_staging/PCGExHeuristics/` - Generated heuristics docs
- Source: `PCGExElementsPathfinding/Public/` - Pathfinding implementations

---

## What Belongs Here vs Elsewhere

### In This Section
- What pathfinding means on clusters
- Algorithm comparison (conceptual)
- Heuristics as composable sub-nodes
- Goal selection strategies
- Cell/contour/hull finding concepts

### NOT Here (belongs elsewhere)
- Specific pathfinding node settings → Node Library
- Cluster fundamentals → `03-clusters/`
- Filter usage in pathfinding → `04-filters/` (reference only)
- Navmesh pathfinding details → Node Library

---

## Terminology

- **Pathfinding** - Finding routes through cluster topology
- **Heuristic** - Scoring function that guides path selection
- **Goal picker** - Strategy for selecting destination points
- **Cell** - Bounded region enclosed by cluster edges
- **Hull** - Outer boundary of a cluster
- **Traversability** - Whether an edge/vtx can be crossed (filter-controlled)
- **Cost** - Accumulated score along a path

---

## Diagrams Needed

1. Cluster with path highlighted from A to B
2. Heuristic influence on path choice (same start/end, different paths)
3. Multiple heuristics combined (visual representation)
4. Flood fill spreading through cluster
5. Cells within a cluster (bounded regions) - emphasize usefulness
6. Hull extraction (outer boundary)

---

## Cross-Links to Include

**Concepts:**
- `03-clusters/` - Clusters are the foundation
- `04-filters/` - Filters control traversability
- `01-architecture/provider-consumer.md` - Heuristics are sub-nodes

**Node Library:**
- `/node-library/pathfinding/algorithms/`
- `/node-library/pathfinding/heuristics/`
- `/node-library/pathfinding/cells/`

---

## Quality Notes

- This section needs mostly NEW content (limited existing docs)
- Heuristics follow the sub-node pattern from architecture
- Emphasize that algorithms have real tradeoffs (not just "use A*")
- PathfindingPlotEdge often more intuitive than PathfindingEdge - mention this
- Goal pickers are PathfindingEdge-specific - de-emphasize, node library covers them
- Cells/hulls are "path extraction" not traditional pathfinding - but SUPER useful, highlight
- Flood fill is beefy and qualifies as pathfinding - include
- Keep abstract - no "NPC navigation" or "road routing" examples
- Navmesh pathfinding is a special case - brief mention, details in node library
