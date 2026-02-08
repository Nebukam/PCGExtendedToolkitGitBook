# Section Brief: Topology

> Context for writing this section. Read before working on these docs.

---

## Purpose

Explain mesh/surface generation from clusters and paths. Users should understand:
- Topology generates meshes from procedural data
- Clusters and paths can become surfaces
- This is helper functionality for base geometry
- Results often need further refinement

---

## Key Messages

1. **Geometry from topology** - Turn clusters/paths into meshes
2. **Base geometry helper** - Creates starting points that need refinement
3. **Multiple approaches** - Cluster surface, path surface, triangulation

---

## Pages in This Section

| Page | Content |
|------|---------|
| `README.md` | What topology generation is, when to use it |

---

## Source Material

### For Accuracy
- `_notes/modules/PCGExElementsTopology.md` - Module architecture
- `_staging/PCGExElementsTopology/` - Generated topology docs
- Source: `PCGExElementsTopology/Public/` - Topology implementations

---

## What Belongs Here vs Elsewhere

### In This Section
- What topology generation means
- When to use cluster surface vs path surface
- Relationship to Clipper2 triangulation

### NOT Here (belongs elsewhere)
- Specific node settings → Node Library
- Cluster fundamentals → `03-clusters/`
- Path fundamentals → `02-paths/`

---

## Terminology

- **Topology** - Mesh/surface structure
- **Surface** - 2D manifold generated from points/edges
- **Triangulation** - Breaking polygons into triangles
- **Dynamic mesh** - UE runtime mesh output

---

## Diagrams Needed

1. Cluster → Surface mesh visualization
2. Path → Surface ribbon/tube

---

## Cross-Links to Include

**Concepts:**
- `03-clusters/` - Clusters as input
- `02-paths/` - Paths as input

**Node Library:**
- `/node-library/topology/`

---

## Quality Notes

- Keep this BRIEF - it's helper functionality
- Emphasize that results often need post-processing
- Single README.md may be sufficient (no sub-pages)
- Low priority section
