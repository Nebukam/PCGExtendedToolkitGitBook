# Section Brief: Clusters

> Context for writing this section. Read before working on these docs.

---

## Purpose

Explain what clusters are and how to work with them. This is a MAJOR section - clusters are central to ~40% of PCGEx. Users should understand:
- Clusters are Vtx + Edges (both are just points)
- The dual-dataset pattern (always work with both)
- How topology is stored in attributes
- Building, refining, and using clusters

---

## Key Messages

1. **Clusters are points** - Vtx points + Edge points, stored in attributes
2. **Dual dataset pattern** - Vtx and Edges travel together, processed together
3. **Topology in attributes** - Connection data is just int64 attributes
4. **Graph terminology avoided** - We say "Cluster" to avoid confusion with PCG graphs
5. **Central to PCGEx** - Many systems build on clusters

---

## Pages in This Section

| Page | Content |
|------|---------|
| `README.md` | What clusters are, "everything is points" insight, overview |
| `the-dual-dataset.md` | Working with Vtx AND Edges together, shared Vtx dataset |
| `building-clusters.md` | How clusters are created (diagrams, connect points, etc.) |
| `refining-clusters.md` | Filtering, simplification, edge removal |
| `cluster-path-interop.md` | Converting between clusters and paths |

Note: `points-are-clusters` folded into README. Building/refining kept separate for now - may merge if content is thin.

---

## Source Material

### Primary (adapt/cherry-pick)
- `working-with-pcgex/clusters/clusters-fundamentals.md` - Excellent foundation
- `working-with-pcgex/clusters/vtx-+-edges.md` - Dual dataset
- `working-with-pcgex/clusters/working-with-vtx-and-edges.md` - Operations
- `working-with-pcgex/clusters/looping-over-clusters.md` - Processing patterns

### For Accuracy
- `_notes/modules/PCGExGraphs.md` - Graph infrastructure
- `_notes/modules/PCGExElementsClusters.md` - Cluster operations
- `_staging/PCGExElementsClusters/` - Generated cluster node docs
- Source: `PCGExCore/Public/Clusters/` - Cluster structures

---

## What Belongs Here vs Elsewhere

### In This Section
- What clusters are conceptually
- The dual-dataset (Vtx + Edges) pattern
- How topology is stored
- Building clusters (conceptual)
- Refining clusters (conceptual)
- Path ↔ Cluster conversion

### NOT Here (belongs elsewhere)
- Specific cluster node settings → Node Library
- Pathfinding on clusters → `06-pathfinding/`
- Valency solving → `08-valency/`
- Cluster filters → `04-filters/`

---

## Terminology

- **Cluster** - A set of Vtx and Edges defining topology (NOT "graph")
- **Vtx** - Vertex points (NOT "Vertex", "Node", or "Vertices")
- **Edges** - Edge points storing connection data
- **Neighbor** - Vtx connected via an edge
- **Adjacency** - The set of neighbors for a Vtx
- **Shared Vtx dataset** - Multiple clusters can share the same Vtx points (important!)

---

## Diagrams Needed

1. Vtx points with Edge points between them (visual relationship)
2. "Database tables" showing Vtx table and Edges table with foreign keys
3. Edge point storing Start/End indices
4. Cluster from Delaunay vs from Connect Points (different sources)
5. Before/after edge refinement
6. Path → Cluster and Cluster → Path conversion

---

## Cross-Links to Include

**Concepts:**
- `02-paths/` - Path fundamentals (for interop)
- `04-filters/` - Edge and Vtx filters
- `06-pathfinding/` - Pathfinding operates on clusters
- `08-valency/` - Constraint solving on clusters

**Node Library:**
- `/node-library/clusters/` - All cluster operations
- `/node-library/clusters/generate/diagrams/` - Delaunay, Voronoi, etc.
- `/node-library/clusters/generate/connect-points/` - Probe-based connection

---

## Quality Notes

- This is a MAJOR section - clusters are central to PCGEx
- Existing `clusters-fundamentals.md` is good - adapt heavily
- Avoid "graph" terminology - users confuse it with PCG graph editor
- The dual-dataset pattern is crucial - don't skip it
- Emphasize shared Vtx dataset (multiple clusters, one Vtx set) in info box
- Keep abstract - no "city grid" or "road network" examples
- `hello-cluster/` tutorials are use-case specific - don't adapt directly
