# PCGEx Documentation - Session Context

> Read this first when starting a new documentation session.
> ~3 minute read for full orientation.

---

## What Is PCGEx?

PCGEx (PCG Extended Toolkit) is an Unreal Engine plugin extending the Procedural Content Generation (PCG) framework. It adds 300+ nodes for graph/network operations, pathfinding, constraint solving, and asset staging.

**Key paradigm**: PCGEx works with standard PCG points. No custom data types. Paths, Vtx (vertices), Edges are all just points with semantic meaning conveyed through labels.

---

## Who Are The Docs For?

- Technical artists and engineer-minded users
- Familiar with Unreal, possibly Houdini
- May be new to PCG itself
- Need to understand novel concepts that don't exist in vanilla PCG

---

## Core Concepts (Brief)

1. **Everything is Points** - Paths = ordered points. Clusters = Vtx points + Edge points. Vanilla PCG nodes work with PCGEx data.

2. **Clusters** - Graph topology (Vtx + Edges). The "relationship" data structure. Central to ~40% of the plugin.

3. **Paths** - Ordered point sequences. Open or closed. Interoperable with clusters.

4. **Provider/Consumer Pattern** - Sub-nodes (filters, probes, heuristics) are factories that configure behavior. They don't know their consumption context. Reusable across many nodes.

5. **Filters** - The "hidden superpower". Universal condition system used by almost every operation. Composable via AND/OR groups.

6. **Asset Staging** - Foundational system for spawning. Required by Valency.

7. **Valency** - WFC-style constraint solving on clusters. Complex, self-contained. Documented last.

---

## Documentation Structure

**Conceptual Docs** (`working-with-pcgex/`)
- Teaches understanding: mental models, workflows, concepts
- Use-case agnostic
- Links to node library for specifics
- This is the live, canonical location for concept content

**Meta / Infrastructure** (`_staging-concepts/`)
- Style guide, plans, progress tracking, decisions
- No content pages — only meta files
- Section content was promoted to `working-with-pcgex/`

**Per-Node Staging** (`_staging/`)
- 1:1 representation of codebase — auto-generated node docs organized by module
- Filenames match codebase class names
- Not user-facing

**Node Library** (`node-library/`)
- User-facing version of `_staging/` with reorganized folder structure and filenames
- Per-node reference: settings, inputs, outputs, behavior
- Doesn't teach concepts

---

## Key Files

| File | Purpose |
|------|---------|
| `_PLAN.md` | Full structure, rationale |
| `_DECISIONS.md` | Confirmed and pending decisions |
| `_CONTENT-MAP.md` | What goes where, migration priority |
| `_STYLE-GUIDE.md` | Voice, terminology, formatting |
| `_PROGRESS.md` | Current state, what to work on |
| `*/_BRIEF.md` | Per-section context and source refs |

---

## Current Work Focus

Check `_PROGRESS.md` for:
- What sections are complete
- What's currently in progress
- What's next in priority

---

## Source References

| Need | Location |
|------|----------|
| Module architecture | `_notes/modules/*.md` |
| Generated node docs | `_staging/[Module]/Elements/*.md` |
| Plugin source code | `D:\GIT\PCGExWorkbench\Plugins\PCGExtendedToolkit\Source\` |
| Live conceptual content | `working-with-pcgex/` |
| Meta/infrastructure | `_staging-concepts/` (style guide, plans, progress only) |
| Doc automation | `_automation/scripts/pcgex-doc.js` |

---

## Quick Rules

- **No use-case examples** - Describe capabilities, not applications
- **No time estimates** - Never say how long things take
- **Terminology** - "Cluster" not "Graph", "Vtx" not "Vertex"
- **Images** - Use `<!-- IMAGE: description -->` comments
- **Accuracy** - Verify against source code when describing behavior
- **Links** - Inline relevant nodes, collect "worth exploring" at end

---

## Starting a Session

```
1. Read this file (done!)
2. Read _PROGRESS.md - find current focus
3. Read relevant _BRIEF.md for the section you're working on
4. Reference _STYLE-GUIDE.md while writing
5. Update _PROGRESS.md when you complete work
```
