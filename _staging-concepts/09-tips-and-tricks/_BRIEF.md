# Section Brief: Tips and Tricks

> Context for writing this section. Read before working on these docs.

---

## Purpose

Collect practical advice, patterns, and gotchas. This section:
- Gathers wisdom that doesn't fit in specific concept sections
- Addresses common pitfalls
- Shares performance optimization strategies
- Documents reusable subgraph patterns

This section GROWS OVER TIME - add tips as they're discovered.

---

## Key Messages

1. **Practical wisdom** - Real-world advice from experience
2. **Pitfall avoidance** - What trips people up
3. **Performance matters** - Optimization strategies
4. **Patterns to reuse** - Subgraph techniques

---

## Pages in This Section

| Page | Content |
|------|---------|
| `README.md` | Overview, navigation to specific tips |
| `subgraph-patterns.md` | Reusable subgraph techniques |
| `performance.md` | Optimization strategies |
| `common-pitfalls.md` | Collected gotchas from all sections |

---

## Source Material

### Primary (consolidate from multiple sources)
- `working-with-pcgex/tips-and-tricks-1/README.md`
- `working-with-pcgex/tips-and-tricks-1/editoronly-subgraphs.md`
- `working-with-pcgex/tips-and-tricks-1/merge-before-spawn.md`
- `working-with-pcgex/clusters/common-pitfalls.md`
- `working-with-pcgex/paths/common-pitfalls.md`
- `working-with-pcgex/tips-and-tricks/pcgex-modules.md` (cherry-picking)

---

## What Belongs Here vs Elsewhere

### In This Section
- **Cross-cutting** performance advice (applies to multiple systems)
- **Cross-cutting** subgraph patterns (span multiple systems)
- General debugging strategies
- Workflow wisdom that doesn't fit one category

### NOT Here (belongs in specific sections)
- **Category-specific tips** → Add `tips.md` to that section (e.g., `03-clusters/tips.md`)
- Node-specific tips → Node Library

### Approach
Category-specific tips live with their category for discoverability. This section is for genuinely cross-cutting wisdom. Add `tips.md` pages to other sections organically as tips accumulate.

---

## Terminology

- No new terminology - uses terms from other sections

---

## Diagrams Needed

1. Subgraph pattern examples
2. Performance comparison visualizations (if applicable)

---

## Cross-Links to Include

- Links back to relevant concept sections
- Links to specific nodes when tips reference them

---

## Quality Notes

- This section is ADDITIVE - grows over time
- Write this section LAST or incrementally
- Collect pitfalls from existing docs during migration
- Keep tips concrete and actionable
- Avoid use-case specific examples even here
- Performance tips should be verifiable/measurable
- Subgraph patterns should be genuinely reusable
- Category-specific tips go in their sections (e.g., `03-clusters/tips.md`) - only cross-cutting content here
