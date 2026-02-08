# Section Brief: Paths

> Context for writing this section. Read before working on these docs.

---

## Purpose

Explain what paths are and how to think about them. Users should understand:
- Paths are just ordered points (no special data type)
- The segment vs point mental model
- Open vs closed path topology
- That "path" operations work on any ordered points

---

## Key Messages

1. **Paths are points** - Just PCG points with an expected order
2. **Labels are semantic** - "Path" input means "I expect order", not a special type
3. **Segments matter** - Operations often think in segments, not points
4. **Open vs Closed** - Topology affects how operations behave
5. **Interop with vanilla** - Standard PCG nodes work on path data

---

## Pages in This Section

| Page | Content |
|------|---------|
| `README.md` | What paths are, "everything is points" insight, overview |
| `segments-vs-points.md` | The segment mental model, why it matters |
| `common-operations.md` | Categories of path operations (conceptual, not per-node) |

Note: `points-are-paths` folded into README.

---

## Source Material

### Primary (adapt/cherry-pick)
- `working-with-pcgex/paths/paths-fundamentals.md` - Good foundation
- `working-with-pcgex/paths/common-operations.md` - Operation categories
- `working-with-pcgex/paths/common-pitfalls.md` - Move to tips section

### For Accuracy
- `_notes/modules/PCGExElementsPaths.md` - Module architecture
- `_staging/PCGExElementsPaths/` - Generated path node docs
- Source: `PCGExCore/Public/Paths/` - Path structures

---

## What Belongs Here vs Elsewhere

### In This Section
- What paths are conceptually
- The "points with order" insight
- Segment vs point thinking
- Open/closed topology
- General operation categories

### NOT Here (belongs elsewhere)
- Specific path node settings → Node Library
- How paths relate to clusters → `03-clusters/cluster-path-interop.md`
- Path filters → `04-filters/`

---

## Terminology

- **Path** - Ordered sequence of points
- **Segment** - The connection between adjacent points
- **Open path** - Has distinct start and end
- **Closed path** (loop) - End connects back to start
- **Tangent** - Direction along the path at a point
- **Normal** - Perpendicular to tangent

---

## Diagrams Needed

1. Points with numbering showing order
2. Segments labeled between points (S0, S1, S2...)
3. Open vs closed path comparison
4. Segment inheriting data from its start point
5. Tangent and normal vectors at a point

---

## Cross-Links to Include

**Concepts:**
- `03-clusters/cluster-path-interop.md` - Converting between paths and clusters
- `01-architecture/` - The underlying philosophy

**Node Library:**
- `/node-library/paths/` - All path operations
- Notable nodes: Resample, Offset, Subdivide

---

## Quality Notes

- Existing `paths-fundamentals.md` is good - adapt rather than rewrite
- The segment mental model is crucial - users miss this
- Emphasize that "path" features work on ANY ordered points
- Keep abstract - no "road" or "river" examples
- Common pitfalls should go to tips section, not here
