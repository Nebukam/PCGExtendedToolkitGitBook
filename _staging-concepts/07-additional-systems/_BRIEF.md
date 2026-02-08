# Section Brief: Additional Systems

> Context for writing this section. Read before working on these docs.

---

## Purpose

Cover additional systems that extend PCGEx capabilities. Mix of:
- **Transverse sub-node systems** (matching, pickers) - opt-in but fundamental when needed
- **Self-contained modules** (tensors, topology, sampling, shapes) - learn when needed

A small README landing page helps with search and navigation.

---

## Key Messages

1. **Resolvers** - Matching and Pickers are transverse, opt-in but powerful
2. **Self-contained modules** - Tensors, topology, sampling, shapes - learn when needed
3. **Extend core systems** - Add filters, probes, samplers to existing patterns
4. **Optional depth** - Users can skip these until relevant

---

## Subsections

| Subsection | Content | Priority |
|------------|---------|----------|
| `resolvers/` | Transverse sub-node systems (matching, pickers) | Medium |
| `tensors/` | Directional fields, effectors, sampling | Medium |
| `topology/` | Mesh generation from clusters/paths | Low |
| `sampling/` | Nearest queries, data extraction | Low |
| `shapes/` | Programmatic geometry generation | Low |

Each subsection has its own `_BRIEF.md` with detailed context.

### Supporting Sub-nodes Detail
- **Matching**: Transverse system for correlating data between sources/targets. 7 match rules (attr-to-attr, tag-to-attr, overlap, etc.). Used by filters, sampling, clusters. Fundamental to understand.
- **Pickers**: Index selection sub-nodes (constant, range, attribute-driven). Used by filters and selection operations. One page sufficient.

---

## Source Material

### For Accuracy
- `_notes/modules/PCGExElementsTensors.md`
- `_notes/modules/PCGExElementsTopology.md`
- `_notes/modules/PCGExElementsSampling.md`
- `_notes/modules/PCGExElementsShapes.md`

---

## What Belongs Here vs Elsewhere

### In This Section
- Tensors concept and workflow
- Topology/mesh generation concepts
- Sampling strategies
- Shape generation

### NOT Here (belongs elsewhere)
- Core architecture → `01-architecture/`
- How tensors integrate with probes → mention, link to clusters
- Noise functions → `utilities/` in node library

---

## Quality Notes

- These are LOWER PRIORITY than core sections
- Keep them concise - users can dive into node library for details
- Each is relatively standalone
- Tensors are "eye-candy" per the planning discussion
- Topology is helper functionality for base geometry
