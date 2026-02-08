# Section Brief: Shapes

> Context for writing this section. Read before working on these docs.

---

## Purpose

Explain programmatic shape generation. Users should understand:
- Shapes generate geometric primitives as points
- Useful for creating regular starting geometry
- Circle, polygon, sphere, 3D grid, etc.
- Output is points that can feed other operations

---

## Key Messages

1. **Geometric primitives** - Generate regular shapes as points
2. **Starting geometry** - Create foundations for further processing
3. **Parametric control** - Radius, segments, dimensions driven by attributes/per-seed values
4. **Points out** - Output is standard PCG points

---

## Pages in This Section

| Page | Content |
|------|---------|
| `README.md` | What shapes are, available primitives |

---

## Source Material

### For Accuracy
- `_notes/modules/PCGExElementsShapes.md` - Module architecture
- `_staging/PCGExElementsShapes/` - Generated shape docs
- Source: `PCGExElementsShapes/Public/` - Shape implementations

---

## What Belongs Here vs Elsewhere

### In This Section
- Shape generation concept
- Available primitive types
- How shapes integrate with paths/clusters

### NOT Here (belongs elsewhere)
- Specific shape node settings → Node Library

---

## Terminology

- **Shape** - Geometric primitive as points
- **Segments** - Divisions around a circle/polygon
- **Closed** - Shape forms a complete loop

---

## Diagrams Needed

1. Circle, polygon, sphere shapes visualized as points

---

## Cross-Links to Include

**Node Library:**
- `/node-library/shapes/`

---

## Quality Notes

- Keep VERY BRIEF - simple utility feature
- Single README.md is sufficient
- This is elevated to its own folder in node library because it's equally useful as tensors
- Low priority section
- Emphasize parametric nature - shape parameters can be driven by per-seed/per-point attributes for variation
