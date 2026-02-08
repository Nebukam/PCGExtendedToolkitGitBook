# Section Brief: Architecture

> Context for writing this section. Read before working on these docs.

---

## Purpose

Establish the mental model for how PCGEx works. This is THE foundational section. Users should understand:
- The provider/consumer (sub-node) pattern
- That sub-nodes are composable and context-agnostic
- How PCGEx interoperates with vanilla PCG
- Why this architecture enables powerful workflows

After reading this, users should "get" the PCGEx philosophy.

---

## Key Messages

1. **Sub-nodes are factories** - They configure behavior, don't know their context
2. **Composition is power** - Same sub-node connects to many consumers
3. **Context-agnostic design** - Filters don't know if they're filtering paths or clusters
4. **Vanilla compatible** - PCGEx data works with vanilla PCG nodes

---

## Pages in This Section

| Page | Content |
|------|---------|
| `README.md` | The PCGEx mental model overview - includes vanilla interop section |
| `provider-consumer.md` | Deep dive on sub-nodes, factories, the pattern |

Note: `working-with-vanilla` folded into README - not enough content for standalone page.

---

## Source Material

### Primary (adapt/cherry-pick)
- `working-with-pcgex/filter-ecosystem.md` - Explains provider/consumer well
- `general/pcgex-101/sub-nodes/` - Existing sub-node content
- `general/pcgex-101/instanced-behaviors.md` - Related concepts

### For Accuracy
- `_notes/modules/PCGExCore.md` - Core architecture
- `_automation/scripts/pcgex-doc.js` - Shows classification logic
- Source: `PCGExCore/Public/Factories/` - Factory pattern implementation

---

## What Belongs Here vs Elsewhere

### In This Section
- The provider/consumer pattern (general)
- What sub-nodes are conceptually
- Why composition matters
- Vanilla PCG interoperability

### NOT Here (belongs elsewhere)
- Specific sub-node types (filters, probes, heuristics) → respective sections
- How to use specific nodes → Node Library
- Paths and Clusters concepts → `02-paths/`, `03-clusters/`

---

## Terminology

- **Sub-node** - A PCG node that provides configuration to other nodes
- **Provider** - Node that outputs factory data (sub-node)
- **Consumer** - Node that accepts factory input pins
- **Factory** - The pattern: lightweight config creates runtime instances
- Avoid "helper node" or "utility node" - too vague

---

## Diagrams Needed

1. Provider node → Factory → Multiple consumers diagram
2. Same filter connected to 5 different operation nodes
3. Subgraph wrapping sub-nodes for reusability
4. Vanilla PCG node receiving PCGEx point data (showing compatibility)

---

## Cross-Links to Include

**Concepts:**
- `04-filters/README.md` - "Filters are the most common sub-node type..."
- `03-clusters/README.md` - "When working with clusters, sub-nodes configure..."

**Node Library:**
- `/node-library/filters/` - Example of sub-node category
- Mention that sub-nodes appear throughout the library

---

## Quality Notes

- This section is FOUNDATIONAL - get it right
- Users who understand this will understand everything else faster
- The "aha moment" often comes from grasping composition
- Lead with the PATTERN, then tease sub-node types (filters, probes, heuristics, etc.)
- Teasing types helps users see the breadth, but pattern understanding comes first
- Emphasize that this pattern appears EVERYWHERE in PCGEx
- Sub-nodes are prefixed by type in editor (Filter : XXX, Probe : XXX) - mention this
- Reference the classification in automation scripts for accuracy
