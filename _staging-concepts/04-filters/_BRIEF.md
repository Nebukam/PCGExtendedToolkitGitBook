# Section Brief: Filters

> Context for writing this section. Read before working on filter docs.

---

## Purpose

Explain the filter system as the "hidden superpower" of PCGEx. Users should understand:
- What filters are (modular conditions)
- The provider/consumer pattern
- How filters compose (AND/OR, stacking)
- That filters are transverse (used everywhere)
- Reusability through subgraphs

---

## Key Messages

1. **Filters are everywhere** - Almost every PCGEx operation uses them
2. **Same filter, many uses** - Configure once, connect to many consumers
3. **Composition is the power** - AND/OR groups, nesting, Uber Filter takes N filters
4. **Subgraphs for reuse** - Wrap filter setups, parameterize, reuse across project

---

## Pages in This Section

| Page | Content |
|------|---------|
| `README.md` | What filters are, filter layers (point/cluster/collection), overview |
| `composition.md` | AND/OR groups, stacking, nesting |
| `reusability.md` | Subgraph patterns, parameterization, prefab filters |

Note: Filter types/layers folded into README - just note that some filters are cluster-specific (rely on connectivity data). Frame as "layers" not "types".

---

## Source Material

### Primary (adapt/cherry-pick)
- `working-with-pcgex/filter-ecosystem.md` - Excellent, comprehensive

### For Accuracy
- `_staging/PCGExFilters/` - Generated filter node docs
- `_notes/modules/PCGExFilters.md` - Module architecture
- `Source/PCGExFilters/Public/` - Filter implementations

### Related Generated Docs
- `_staging/PCGExCore/Elements/Filters/` - Core filter nodes
- Any node with "Filter" in name across modules

---

## What Belongs Here vs Elsewhere

### In This Section
- The filter concept and mental model
- How to use filters (connect, configure, combine)
- Filter types overview (brief, link to node library for details)
- Composition patterns
- Reusability strategies

### NOT Here (belongs in Node Library)
- Specific filter node settings
- Per-filter behavior details
- Filter node input/output specifics

### NOT Here (belongs in other concept sections)
- How filters integrate with pathfinding → link to `06-pathfinding/`
- How filters work in cluster refinement → link to `03-clusters/`
- Edge filters for Valency → link to `08-valency/`

---

## Terminology

- Use "filter" (lowercase) for the concept
- Use **Filter** (bold) or specific names for node references
- "Filter provider" or "filter node" for the PCG graph node
- "Filter consumer" for nodes that accept filter input pins
- "Filter chain" or "filter stack" for multiple connected filters

---

## Diagrams Needed

1. Hub-and-spoke showing filter connected to multiple consumers
2. AND/OR group composition example
3. Subgraph wrapping a filter setup
4. Before/after showing filter effect (abstract, colored points)

---

## Cross-Links to Include

**Concepts:**
- `01-architecture/provider-consumer.md` - The underlying pattern
- `03-clusters/refining-clusters.md` - Filters in cluster context
- `06-pathfinding/` - Filters for traversability

**Node Library:**
- `/node-library/filters/` - All filter node references
- Specific notable filters worth highlighting

---

## Quality Notes

- This is likely the most important conceptual section
- The existing `filter-ecosystem.md` is high quality - adapt rather than rewrite
- Users often miss the composition power - emphasize it
- Uber Filter / Uber Filter (Data) are example consumers - any filter input accepts N filters
- Frame as filter "layers" (point, cluster, collection) not "types"
- Cluster-specific filters rely on connectivity data - brief mention, not deep dive
- Abstract examples only - no "filter residential areas" type language
