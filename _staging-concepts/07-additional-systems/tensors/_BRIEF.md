# Section Brief: Tensors

> Context for writing this section. Read before working on these docs.

---

## Purpose

Explain the tensor system - directional fields that influence operations. Users should understand:
- What tensors are (directional/flow fields in space)
- Effectors create tensor fields
- Tensors influence other operations (probes, pathfinding, extrusion)
- This is a self-contained "nice to have" system

---

## Key Messages

1. **Directional fields** - Tensors define direction/flow at positions
2. **Effectors create fields** - Different effector types shape the field
3. **Integration points** - Tensor probes, tensor filters, tensor heuristics
4. **Visual/organic results** - Good for natural-feeling patterns

---

## Pages in This Section

| Page | Content |
|------|---------|
| `README.md` | What tensors are, why they're useful |
| `effectors.md` | What creates tensor fields (poles, spins, flows) |
| `sampling.md` | How tensors are sampled and influence operations |

---

## Source Material

### Primary (sparse, needs expansion)
- `working-with-pcgex/tensors/README.md` - Limited existing content

### For Accuracy
- `_notes/modules/PCGExElementsTensors.md` - Module architecture
- `_staging/PCGExElementsTensors/` - Generated tensor docs
- Source: `PCGExElementsTensors/Public/` - Tensor implementations

---

## What Belongs Here vs Elsewhere

### In This Section
- Tensor concept
- Effector types (conceptual)
- How sampling works
- Integration with other systems (overview)

### NOT Here (belongs elsewhere)
- Specific tensor node settings → Node Library
- Tensor probes detail → Node Library (clusters section)
- Tensor filters detail → Node Library (filters section)

---

## Terminology

- **Tensor** - Directional value at a point in space
- **Tensor field** - Collection of tensors defining flow/direction
- **Effector** - Source that contributes to the tensor field
- **Pole** - Point-source effector (radial influence)
- **Spin** - Rotational effector
- **Flow** - Directional effector along a path/spline
- **Sampling** - Querying the tensor field at a position

---

## Diagrams Needed

1. Tensor field visualization (arrows showing direction)
2. Different effector types and their influence patterns
3. Tensor field guiding point placement or connection

---

## Cross-Links to Include

**Concepts:**
- `03-clusters/` - Tensor probes in Connect Points
- `06-pathfinding/` - Tensor heuristics

**Node Library:**
- `/node-library/tensors/`
- `/node-library/clusters/generate/connect-points/probes/` - Tensor probe

---

## Quality Notes

- This is a self-contained "eye-candy" system
- Limited existing docs - needs mostly new content
- Keep concise - detailed settings in node library
- Visual results are the selling point - diagrams help
- Mention integration points but don't duplicate their docs
